import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_zQnqkaa2.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_B2nb7rZh.mjs';

const $$Astro = createAstro("https://ferrranhpv3.vercel.app/");
const $$HorizontalCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HorizontalCard;
  const { title, img, desc, url, badge, tags, target = "_blank" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg hover:shadow-xl transition ease-in-out hover:scale-[102%]"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <div class="hero-content flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "height": 1, "width": 750, "format": "webp", "alt": title, "class": "max-w-full md:max-w-[13rem] max-h-[7rem] object-cover rounded-lg" })}`} <div class="grow w-full"> <h1 class="text-xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h1> <p class="py-1 text-1xl">${desc}</p> <div class="card-actions justify-end"> ${tags && tags.map((tag) => renderTemplate`<div class="badge badge-outline">${tag}</div>`)} </div> </div> </div> </a> </div>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/components/HorizontalCard.astro", void 0);

export { $$HorizontalCard as $ };
