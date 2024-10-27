import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, k as renderHead, l as renderSlot } from './astro/server_zQnqkaa2.mjs';
import 'kleur/colors';
import 'clsx';
import { s as styles$3 } from './index.446a848e_DfcQdN_3.mjs';
import { $ as $$Image } from './_astro_assets_B2nb7rZh.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './config_DVcwi5Fa.mjs';

const $$Astro$2 = createAstro("https://ferrranhpv3.vercel.app/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/social_img.png" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/components/BaseHead.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sticky lg:hidden top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm"> <div class="navbar"> <div class="navbar-start"> <label for="my-drawer" class="btn btn-square btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </label> </div> <div class="navbar-center"> <a class="btn btn-ghost normal-case text-xl" href="/">Ferran Hernandez</a> </div> <div class="navbar-end"></div> </div> </div>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer footer-center block mb-5 pt-10"> <div class="pb-2">
&copy; ${today.getFullYear()} Ferran Hernandez
</div> </footer> `;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/components/Footer.astro", void 0);

const styles$2 = {
  fill: "currentColor",
  transform: "",
  msFilter: ""
};
const RssIcon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    style: styles$2,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z" }),
      /* @__PURE__ */ jsx("path", { d: "M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z" }),
      /* @__PURE__ */ jsx("circle", { cx: "6", cy: "18", r: "2" })
    ]
  }
);

const styles$1 = {
  fill: "currentColor",
  transform: "",
  msFilter: ""
};
const LinkedinIcon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    style: styles$1,
    children: [
      /* @__PURE__ */ jsx("circle", { cx: "4.983", cy: "5.009", r: "2.188" }),
      /* @__PURE__ */ jsx("path", { d: "M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" })
    ]
  }
);

const styles = {
  fill: "currentColor",
  transform: "",
  msFilter: ""
};
const GithubIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    style: styles,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      }
    )
  }
);

const $$SideBar = createComponent(($$result, $$props, $$slots) => {
  const home = "Home";
  const contact = "Contact";
  const projects = "Projects";
  const experience = "Experience";
  const education = "Education";
  const languages = "Languages";
  const certifications = "Certifications";
  const skills = "Skills";
  return renderTemplate`${maybeRenderHead()}<div class="drawer-side bg-base-200"> <label for="my-drawer" class="drawer-overlay bg-base-200"></label> <div class="menu flex flex-col items-center flex-nowrap p-4 overflow-y-auto w-[20rem] bg-base-200 text-base-content"> <div class="w-fit"> <a href="/"> <div class="avatar transition ease-in-out w-1/2 hover:scale-[102%] block m-auto mt-3 mb-6 h-36"> <div> ${renderComponent($$result, "Image", $$Image, { "class": "mask mask-circle", "format": "webp", "width": 300, "height": 300, "src": "/profile.webp", "alt": "Profile image" })} </div> </div> </a> </div> <ul class="grow shrink pt-10"> <li><a class="menu" id="home" href="/">${home}</a></li> <li><a class="menu" id="projects" href="/#projects">${projects}</a></li> <li><a class="menu" id="experience" href="/#experience">${experience}</a></li> <li><a class="menu" id="education" href="/#education">${education}</a></li> <li><a class="menu" id="languages" href="/#languages">${languages}</a></li> <li><a class="menu" id="certifications" href="/#certifications">${certifications}</a></li> <li><a class="menu" id="skills" href="/#skills">${skills}</a></li> <li><a class="menu" href="mailto:ferranhpv3@gmail.com">${contact}</a></li> </ul> <div class="social-icons px-4 my-2 flex self-center"> <a href="https://github.com/Ferranv3" target="_blank" class="mx-3" aria-label="Github" title="Github"> ${renderComponent($$result, "GithubIcon", GithubIcon, {})} </a> <a href="https://www.linkedin.com/in/ferran-hernandez-v3/" target="_blank" class="mx-3" aria-label="Linkedin" title="Linkedin"> ${renderComponent($$result, "LinkedinIcon", LinkedinIcon, {})} </a> <a href="/rss.xml" target="_blank" class="mx-3" aria-label="RSS Feed" title="RSS Feed"> ${renderComponent($$result, "RssIcon", RssIcon, {})} </a> </div> </div> </div> `;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/components/SideBar.astro", void 0);

const $$Astro$1 = createAstro("https://ferrranhpv3.vercel.app/");
const $$BackgroundText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackgroundText;
  const { text, top, fromLeft, animationTime } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$3.container, "class")}${addAttribute({ top: `${top}%` }, "style")}> <p${addAttribute(fromLeft ? `${styles$3.text} ${styles$3.left}` : `${styles$3.text} ${styles$3.right}`, "class")}${addAttribute({
    animationDuration: `${animationTime}s`
  }, "style")}>${text}</p> </div>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/components/backgroundText/BackgroundText.astro", void 0);

const $$Astro = createAstro("https://ferrranhpv3.vercel.app/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    image = "../../public/profile.webp",
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    includeSidebar = true
  } = Astro2.props;
  const symbol1 = "/*";
  const symbol2 = "<";
  const symbol3 = "/>";
  const symbol4 = "*/";
  return renderTemplate`<html lang="en" data-theme="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> <div class="bg-base-100 drawer drawer-mobile"> <input id="my-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content flex flex-col bg-base-100"> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} ${renderComponent($$result, "BackgroundText", $$BackgroundText, { "text": symbol1, "top": "0", "fromLeft": "true", "animationTime": "15" })} ${renderComponent($$result, "BackgroundText", $$BackgroundText, { "text": symbol2, "top": "20", "animationTime": "30" })} ${renderComponent($$result, "BackgroundText", $$BackgroundText, { "text": symbol3, "top": "50", "fromLeft": "true", "animationTime": "20" })} ${renderComponent($$result, "BackgroundText", $$BackgroundText, { "text": symbol4, "top": "80", "animationTime": "40" })} <div class="md:flex md:justify-center"> <main class="p-6 pt-10 max-w-[900px]"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${includeSidebar && renderTemplate`${renderComponent($$result, "SideBar", $$SideBar, {})}`} </div> </body></html>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, GithubIcon as G, LinkedinIcon as L };
