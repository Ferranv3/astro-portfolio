import '../chunks/index.446a848e_DfcQdN_3.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_zQnqkaa2.mjs';
import 'kleur/colors';
import { L as LinkedinIcon, G as GithubIcon, $ as $$BaseLayout } from '../chunks/BaseLayout_DzL7oPoz.mjs';
import { $ as $$HorizontalCard } from '../chunks/HorizontalCard_CjBToYkv.mjs';
import 'clsx';
import { s as styles } from '../chunks/index.95d291e9_Bkm30xIe.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://ferrranhpv3.vercel.app/");
const $$ProjectsIsland = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectsIsland;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="projects" class="mb-5"><div class="text-3xl w-full font-bold text-center">My last projects ${"</>"}</div></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "SpringBoot DDD Store", "img": "/SpringBoot-DDD-Store.webp", "desc": "A backend application using DDD architecture", "url": "https://github.com/Ferranv3/SpringBoot-DDD-Store", "badge": "NEW" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "TechNews API", "img": "/TechnewsAPI_screenshot.webp", "desc": "A backend application to serve tech news.", "url": "https://github.com/Ferranv3/TechNews-API", "badge": "NEW" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "TechNews Frontend", "img": "/TechNewsFront_screenshot.webp", "desc": "Built with Astro framework using HTML, CSS and React with hooks. One web to follow the most important tech news.", "url": "https://technews-ferran.vercel.app/", "badge": "NEW" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Astro Portfolio", "img": "/Portfolio_screenshot.webp", "desc": "Modern portfolio with Project Section, CV Section, Paginated Blog, RSS Feed, SEO Friendly, Visual themes and Responsive Desing for Astro framework.", "url": "https://github.com/Ferranv3/astro-portfolio", "badge": "NEW" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Note-ToDo", "img": "/NodeToDo_screenshot.webp", "desc": "A Node ToDo app built with MongoDB and Angular.", "url": "https://github.com/Ferranv3/Node-ToDo" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Spring Boot Samples REST", "img": "/SpringBootREST_screenshot.webp", "desc": "It contains a Spring Boot back-end with many endpoints. A calculator, a Nasa image viewer using an API Rest, a contact form and a collection of beers using an API Rest.", "url": "https://github.com/Ferranv3/Spring-Boot-Samples-REST" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Spring Boot Samples SOAP", "img": "/SpringBootSOAP_screenshot.webp", "desc": "It contains a Spring Boot back-end with many endpoints. A calculator, a Nasa image viewer using an API Rest, a contact form and a collection of beers using an API Rest.", "url": "https://github.com/Ferranv3/Spring-Boot-Samples-SOAP" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demos Android", "img": "/UGame_screenshot.webp", "desc": "Some Android projects to download and run", "url": "https://github.com/Ferranv3/Demos-Android" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demos .Net", "img": "/GestioHospitalNET_screenshot.webp", "desc": "Some .Net projects to download and run", "url": "https://github.com/Ferranv3/Demos-.NET" })}<div class="divider my-0"></div>${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Demos JavaFX", "img": "/JavaFX_screenshot.webp", "desc": "Some JavaFX projects to download and run", "url": "https://github.com/Ferranv3/Demos-JavaFX" })}` })}`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/islands/ProjectsIsland.astro", void 0);

const $$GreetingIsland = createComponent(($$result, $$props, $$slots) => {
  const fullName = "Ferran Hernandez";
  const role = "Full Stack Developer Analyst and DevOps Engineer";
  const letsConnect = "Let's connect!";
  const seeTheSourceCode = "See all my projects!";
  return renderTemplate`${maybeRenderHead()}<div class="pb-10 titleSection text-center"> <h1 class="text-5xl font-bold">${fullName}</h1> <h2 class="text-3xl py-3 font-bold">${role}</h2> <div class="mt-4 mainButtons"> <a class="btn btn-outline fontButtons" href="https://www.linkedin.com/in/ferran-hernandez-v3/" target="_blank">${renderComponent($$result, "LinkedinIcon", LinkedinIcon, {})}${letsConnect}</a> <a class="btn btn-outline fontButtons" href="https://github.com/Ferranv3" target="_blank">${renderComponent($$result, "GithubIcon", GithubIcon, {})}${seeTheSourceCode}</a> </div> </div>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/islands/GreetingIsland.astro", void 0);

const $$Astro$2 = createAstro("https://ferrranhpv3.vercel.app/");
const $$ProfileIsland = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProfileIsland;
  const profile = "Profile";
  const personalDesc = "Passionate about technological development, I am dedicated to create and improve software solutions. In my spare time, I develop applications, design websites and repair computers. I stay on the cutting edge of emerging technologies such as Bun, Astro and AI. Java is my programming language of choice, but I adapt easily to diverse technology environments, including infrastructure and front and backend development. I am committed to continuous learning, closely following the latest technological innovations.";
  return renderTemplate`${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold text-center">${profile}</div> </div> <div class="mb-10 text-justify">${personalDesc}</div>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/islands/ProfileIsland.astro", void 0);

const $$Astro$1 = createAstro("https://ferrranhpv3.vercel.app/");
const $$TimeItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeItem;
  const { title, subtitle, desc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex mb-6"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p${addAttribute(`${styles.preformattedText}`, "class")}> ${desc} </p> </div> </div>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/components/timeItem/TimeItem.astro", void 0);

const $$ExperienceIsland = createComponent(($$result, $$props, $$slots) => {
  const startDate = /* @__PURE__ */ new Date("2023-06-01");
  const today = /* @__PURE__ */ new Date();
  const experienceTitle = "Experience";
  const totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  let timePassed = "";
  if (years > 0) {
    timePassed += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    timePassed += `${years > 0 ? " and " : ""}${months} month${months > 1 ? "s" : ""}`;
  }
  return renderTemplate`${maybeRenderHead()}<div id="experience" class="mb-5"> <div class="text-3xl w-full font-bold text-center">${experienceTitle}</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "Freelance Backend Developer", "subtitle": `From 06/2023 to current - ${timePassed} - Remote work`, "desc": "- WorldRemit UK (6 months): Focused on third-party payment integrations daily communication in English has been key. I've developed scalable reactive applications using Java 17, Spring Boot, WebFlux and gRPC.\n- ING (06/2023 to 11/2024): Been deeply involved in the development and maintenance of multiple microservices with DDD and hexagonal architecture that support the main public-facing application using Java 8-17, Spring boot and Kafka." })} ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "Programmer Analyst and DevOps Engineer", "subtitle": `From 02/2023 to 11/2023 at RealNaut S.L. - 9 months - Remote work`, "desc": "My job was develop and deploy web and mobile applications using technologies such as Terraform, Flux, Tekton, Github Actions, AWS, Google Cloud and Azure to bring automation, continuous integration and delivering quality software." })} ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "Lead Tech and Full Stack Developer/DevOps", "subtitle": "From 06/2022 to 03/2023 at Trace Logistics S.L. - 10 months - Remote work", "desc": "Led a team of technicians developing applications using new technologies and implemented microservices architecture and DevOps services. I did trainings for the whole department every 2 weeks and advanced technical trainings for my team on the technologies used." })} ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "Full Stack Analyst and DevOps", "subtitle": "From 11/2021 to 07/2022 at Indra S.A. - 8 months - Remote work", "desc": "Was assigned to an internal banking project working principally on backend role with Spring/Java developing API's REST with microservices architecture using agile methodologies and maintaining the environment with devOps tools. I also make the initial formation for the new recruits to the team." })} ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "Full Stack Developer", "subtitle": "From 07/2020 to 10/2021 at Programacion Integral S.A. - 1 year and 5 months - Lleida, Catalonia, Spain", "desc": "Was designing UI, implementing features, customizing the software for 3rth companies and technical support to the clients of a enterprise resourse planning software for rrhh, contability, stock and web ecommerce linked to this ERP. I also make the initial formation for the new recruits to the team." })} ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "Programmer Internship", "subtitle": "From 01/2020 to 03/2020 at JustDigital S.L. - 3 months - Lleida, Catalonia, Spain", "desc": "Learned about FullStack role implementing functionalities and fixing errors using Angular with Typescript in frontend and Spring with Java and Kotlin in backend." })} </div>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/islands/ExperienceIsland.astro", void 0);

const $$EducationIsland = createComponent(($$result, $$props, $$slots) => {
  const education = "Education";
  return renderTemplate`${maybeRenderHead()}<div id="education" class="mb-5"> <div class="text-3xl w-full font-bold text-center">${education}</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "Software engineering", "subtitle": "2020 to Currently at UOC, Barcelona, Spain (remote)" })} ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "CFGS Cross-platform application development", "subtitle": "2018 to 2020 at IES Caparrella, Lleida, Spain" })} ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "CFGM Microcomputer systems and networks", "subtitle": "2010 to 2012 at IES Caparrella, Lleida, Spain" })} ${renderComponent($$result, "TimeItem", $$TimeItem, { "title": "Compulsory secondary education", "subtitle": "2006 to 2010 at El Carme, Lleida, Spain" })} </div>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/islands/EducationIsland.astro", void 0);

const $$LanguagesIsland = createComponent(($$result, $$props, $$slots) => {
  const languages = "Languages";
  const spanish = "Spanish";
  const catalan = "Catalan";
  const english = "English";
  const portuguese = "Portuguese";
  const native = "Native";
  const advancedLevel = "Advanced level";
  const lowLevel = "Low level";
  return renderTemplate`${maybeRenderHead()}<div id="languages" class="mb-5"> <div class="text-3xl w-full font-bold text-center">${languages}</div> </div> <ul class="list-disc md:columns-4 columns-1 mx-6 mb-10"> <li>${spanish}: ${native}</li> <li>${catalan}: ${native}</li> <li>${english}: ${advancedLevel}</li> <li>${portuguese}: ${lowLevel}</li> </ul>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/islands/LanguagesIsland.astro", void 0);

const $$CertificationsIsland = createComponent(($$result, $$props, $$slots) => {
  const certifications = "Certifications";
  const certMicroAngular = "Microservices Spring cloud and Angular FullStack";
  const certMicroDDD = "Microservices using DDD";
  const certDocker = "Docker, from begginer to expert";
  const certScrum = "Scrum";
  const certLPIC = "LPIC-1 Linux administrator";
  const certReactiveProgramming = "Reactive programming";
  const certMachineLearning = "Machine Learning Data Science with Python";
  return renderTemplate`${maybeRenderHead()}<div id="certifications" class="mb-5"> <div class="text-3xl w-full font-bold text-center">${certifications}</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-2"> <li> <a href="https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado-Microservicios_con_Spring_cloud_y_Angular_FullStack.pdf" target="_blank">${certMicroAngular}</a> </li> <li> <a href="https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado-Spring-Microservices-using-DDD.pdf" target="_blank">${certMicroDDD}</a> </li> <li> <a href="https://github.com/Ferranv3/Certificados-cursos/blob/master/CertificadoDocker.pdf" target="_blank">${certDocker}</a> </li> <li> <a href="https://github.com/Ferranv3/Certificados-cursos/blob/master/CertificadoScrum.pdf" target="_blank">${certScrum}</a> </li> <li> <a href="https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado_LPIC-1_Administrador_Linux.pdf" target="_blank">${certLPIC}</a> </li> <li> <a href="https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado_programacion_reactiva_spring_boot_y_webflux.pdf" target="_blank">${certReactiveProgramming}</a> </li> <li> <a href="https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado_Curso_completo_Machine_Learning_Data_Science_Python.pdf" target="_blank">${certMachineLearning}</a> </li> </ul>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/islands/CertificationsIsland.astro", void 0);

const $$Astro = createAstro("https://ferrranhpv3.vercel.app/");
const $$SkillsIsland = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillsIsland;
  const skills = "Skills";
  const techs = [
    "Astro",
    "Node.js",
    "Next.js",
    "React .js",
    "Tekton",
    "Flux",
    "Github Actions",
    "Terraform",
    "Google Cloud",
    "Amazon Web Services",
    "Microsoft Azure",
    "Kubernetes",
    "Microservices",
    "JDBC",
    "SonarQube",
    "Jenkins",
    "Jira",
    "Swagger",
    "Rancher",
    "JPA",
    "Hibernate",
    "Spring Boot",
    "Java",
    "Spring Security",
    "Spring Cloud",
    "Angular",
    "Visual Basic .NET",
    "VB6",
    "C#",
    "Linux",
    "Windows",
    "MockMVC",
    "JUnit",
    "Thymeleaf",
    "Jasper Reports",
    "Vue.js",
    "Git",
    "PHP",
    "Microsoft SQL",
    "Oracle SQL",
    "PostgreSQL",
    "PL/SQL",
    "SASS",
    "JavaScript",
    "Typescript",
    "Kotlin",
    "Python",
    "Apache Tomcat",
    "WildFly",
    "SOLID",
    "DDD"
  ];
  return renderTemplate`${maybeRenderHead()}<div id="skills" class="mb-5"> <div class="text-3xl w-full font-bold text-center">${skills}</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> ${techs.map((name) => renderTemplate`<li>${name}</li>`)} </ul>`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/islands/SkillsIsland.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GreetingIsland", $$GreetingIsland, {})} ${renderComponent($$result2, "ProjectsIsland", $$ProjectsIsland, {})} ${renderComponent($$result2, "ProfileIsland", $$ProfileIsland, {})} ${renderComponent($$result2, "ExperienceIsland", $$ExperienceIsland, {})} ${renderComponent($$result2, "EducationIsland", $$EducationIsland, {})} ${renderComponent($$result2, "LanguagesIsland", $$LanguagesIsland, {})} ${renderComponent($$result2, "CertificationsIsland", $$CertificationsIsland, {})} ${renderComponent($$result2, "SkillsIsland", $$SkillsIsland, {})} ` })}`;
}, "/home/ferran/Documentos/Projects/astro-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/ferran/Documentos/Projects/astro-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
