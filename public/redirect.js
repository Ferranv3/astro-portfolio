(function () {
  // Lee config desde el <meta id="i18n-config">
  var meta = document.getElementById("i18n-config");
  if (!meta) return;

  var statusVisible = document.getElementById("redirect-visible");
  var statusHidden = document.getElementById("redirect-status");
  var updateStatus = function (message) {
    if (statusVisible) statusVisible.textContent = message;
    if (statusHidden) statusHidden.textContent = message;
  };

  updateStatus("Checking your preferred language…");

  var supportedRaw = meta.getAttribute("data-supported") || "[]";
  var fallback = meta.getAttribute("data-fallback") || "en";
  var base = meta.getAttribute("data-base") || "/";

  // Normaliza helpers (sin optional chaining por compat)
  function trimEndSlash(s) {
    if (!s) return "/";
    return s === "/" ? "/" : s.replace(/\/+$/, "");
  }

  base = trimEndSlash(base);

  var supportedList;
  try {
    supportedList = JSON.parse(supportedRaw);
    if (!Array.isArray(supportedList)) supportedList = [];
  } catch (e) {
    supportedList = [];
  }

  var supported = {};
  for (var i = 0; i < supportedList.length; i++) {
    var k = ("" + supportedList[i]).toLowerCase();
    supported[k] = true;
  }

  var fullPath = window.location.pathname;       // p.ej. "/", "/miweb/", "/miweb/es/"
  // Si la ruta no empieza por base, no hacemos nada (evita comportamientos raros)
  if (base !== "/" && fullPath.indexOf(base) !== 0) return;

  var internal = fullPath.slice(base.length) || "/"; // ruta sin base
  // Primer segmento (idioma) en minúsculas
  var parts = internal.split("/");
  var seg1 = (parts[1] || "").toLowerCase();

  // 1) Ya estamos bajo /<lang>/ soportado → no redirigir
  if (supported[seg1]) {
    try {
      document.documentElement.setAttribute("lang", seg1);
    } catch (_e) {}
    updateStatus("Loaded " + seg1.toUpperCase() + " site.");
    return;
  }

  // 2) Solo redirige desde la raíz interna "/"
  if (internal !== "/") {
    updateStatus("Loaded site.");
    return;
  }

  // 3) Detecta preferencia del navegador (cross-browser)
  var preferred = [];
  if (typeof navigator !== "undefined") {
    if (Object.prototype.toString.call(navigator.languages) === "[object Array]") {
      for (var j = 0; j < navigator.languages.length; j++) {
        var l = navigator.languages[j];
        if (typeof l === "string" && l) preferred.push(l);
      }
    }
    var single = (navigator.language || navigator.userLanguage || "");
    if (preferred.length === 0 && typeof single === "string" && single) {
      preferred.push(single);
    }
  }

  var candidates = [];
  for (var c = 0; c < preferred.length; c++) {
    var lang = ("" + preferred[c]).toLowerCase();
    // "es-ES" → "es"
    candidates.push(lang.split("-")[0]);
  }

  var target = null;
  for (var t = 0; t < candidates.length; t++) {
    var can = candidates[t];
    if (supported[can]) {
      target = can;
      break;
    }
  }
  if (!target || !supported[target]) target = ("" + fallback).toLowerCase();

  // 4) Construye destino respetando base y with trailing slash
  var destination = (base + "/" + target + "/").replace(/\/{2,}/g, "/");
  if (fullPath !== destination) {
    // replace() no crea entrada en el historial (mejor UX)
    updateStatus("Redirecting to " + target.toUpperCase() + " site…");
    window.location.replace(destination);
  } else {
    updateStatus("Loaded " + target.toUpperCase() + " site.");
  }
})();

