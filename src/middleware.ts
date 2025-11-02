import { defineMiddleware } from "astro/middleware";
import {
  defaultLanguage,
  supportedLanguages,
  type LanguageCode,
} from "./i18n/translations";

const supportedSet = new Set<LanguageCode>(supportedLanguages);

function normalizeBase(base: string | undefined): string {
  if (!base || base === "/") {
    return "/";
  }
  let normalized = base;
  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }
  normalized = normalized.replace(/\/+$/, "/");
  return normalized === "" ? "/" : normalized;
}

function pickLanguage(headerValue: string | null): LanguageCode {
  if (!headerValue) {
    return defaultLanguage;
  }

  const entries = headerValue
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      if (!tag) {
        return null;
      }
      let quality = 1;
      for (const param of params) {
        const [key, value] = param.trim().split("=");
        if (key === "q" && value) {
          const parsed = Number.parseFloat(value);
          if (!Number.isNaN(parsed)) {
            quality = parsed;
          }
        }
      }
      return { tag: tag.toLowerCase(), quality } as const;
    })
    .filter((entry): entry is { tag: string; quality: number } => !!entry)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of entries) {
    if (!tag || tag === "*") {
      continue;
    }
    const primary = tag.split("-")[0] as LanguageCode;
    if (supportedSet.has(primary)) {
      return primary;
    }
  }

  return defaultLanguage;
}

const normalizedBase = normalizeBase(import.meta.env.BASE_URL);
const baseSegments =
  normalizedBase === "/"
    ? []
    : normalizedBase
        .slice(1)
        .split("/")
        .filter((segment) => segment.length > 0);

export const onRequest = defineMiddleware((context, next) => {
  const { url, request } = context;

  const pathSegments = url.pathname.split("/").filter((segment) => segment.length > 0);

  let contentSegments = pathSegments;
  if (baseSegments.length > 0) {
    const matchesBase = baseSegments.every(
      (segment, index) => pathSegments[index] === segment,
    );
    if (!matchesBase) {
      return next();
    }
    contentSegments = pathSegments.slice(baseSegments.length);
  }

  const leading = contentSegments[0] as LanguageCode | undefined;
  if (leading && supportedSet.has(leading)) {
    return next();
  }

  const isRoot = contentSegments.length === 0;
  if (!isRoot) {
    return next();
  }

  const preferred = pickLanguage(request.headers.get("accept-language"));

  const targetSegments = [...baseSegments, preferred];
  const targetPath = `/${targetSegments.join("/")}/`;

  if (url.pathname === targetPath) {
    return next();
  }

  const destination = new URL(url);
  destination.pathname = targetPath;

  return context.redirect(destination.toString());
});
