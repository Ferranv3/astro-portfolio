import '../chunks/index.446a848e_DfcQdN_3.mjs';
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_zQnqkaa2.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DzL7oPoz.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404: Not Found", "includeSidebar": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> <h1 class="text-9xl font-bold mb-4">🏝</h1> <h1 class="text-9xl font-bold mb-2">404</h1> <h3 class="text-2xl">The page you're looking for couldn't be found.</h3> <a class="btn btn-accent mt-9" href="/">Home</a> </div> ` })}`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/pages/404.astro", void 0);

const $$file = "/home/ferran/Documentos/Projects/astro-portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
