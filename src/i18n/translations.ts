export type LanguageCode = "en" | "es" | "ca";

export interface DurationLabels {
  year: string;
  years: string;
  month: string;
  months: string;
  and: string;
  zero: string;
}

export interface Translation {
  lang: LanguageCode;
  head: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    contact: string;
    projects: string;
    experience: string;
    education: string;
    languages: string;
    certifications: string;
    skills: string;
    cv: string;
  };
  cv: {
    documentTitle: string;
    /** CV headline under the name. */
    headline: string;
    /** CV summary; `{years}` is replaced with the full years of experience. */
    summary: string;
    print: string;
    printHint: string;
    back: string;
    present: string;
    projects: string;
    courses: string;
    client: string;
    /** Label of the per-job technologies line. */
    technologies: string;
    /** Location line in the CV header. */
    location: string;
    places: Record<ExperienceMeta["place"], string>;
    selfEmployed: string;
    certificates: string;
  };
  greeting: {
    fullName: string;
    role: string;
    letsConnect: string;
    seeTheSourceCode: string;
    scheduleMeeting: string;
  };
  projects: {
    title: string;
    featured: ProjectCard[];
    extra: ProjectCard[];
    seeMoreLabel: string;
  };
  profile: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    durationLabels: DurationLabels;
    durationConfig: Record<string, { start: string; end?: string; duration?: string }>;
    meta: ExperienceMeta[];
    items: Array<{
      title: string;
      subtitle: string;
      desc?: string;
    }>;
  };
  education: {
    title: string;
    meta: EducationMeta[];
    items: Array<{
      title: string;
      subtitle: string;
    }>;
  };
  languages: {
    title: string;
    items: Array<{
      name: string;
      level: string;
    }>;
  };
  certifications: {
    title: string;
    items: Array<{
      label: string;
      url: string;
    }>;
  };
  skills: {
    title: string;
    techs: string[];
    showAllLabel: string;
    showLessLabel: string;
  };
}

/**
 * Language-independent facts about each experience item (same order as
 * `experience.items`). Used by the printable CV to render a structured
 * "Role - Company - dates - place" header without parsing free text.
 * `start` / `end` are YYYY-MM; a missing `end` means "present".
 */
export interface ExperienceMeta {
  company?: string;
  start: string;
  end?: string;
  place: "remote" | "lleida" | "online";
  /** Excluded when computing total years of professional experience. */
  internship?: boolean;
  /** Company website, linked from the printable CV. */
  url?: string;
  /** Technologies used in this role (language independent), most relevant first. */
  tech: string[];
}

/** Language-independent facts about each education item (same order as
 *  `education.items`). `cvOmit` hides the entry from the printable CV. */
export interface EducationMeta {
  institution: string;
  start: string;
  end?: string;
  place: ExperienceMeta["place"];
  cvOmit?: boolean;
}

export interface ProjectCard {
  title: string;
  img: string;
  desc: string;
  url: string;
  badge?: string;
}

const baseProjects: ProjectCard[] = [
  {
    title: "SimulApp",
    img: "/SpringBoot-DDD-Store.webp",
    desc: "Mortgage simulator and calculator web application.",
    url: "https://simulapp.ferranv3.com/",
    badge: "NEW",
  },
  {
    title: "Python FastAPI CRM",
    img: "/SpringBoot-DDD-Store.webp",
    desc: "Backend CRM built with Python and FastAPI.",
    url: "https://github.com/Ferranv3/FASTAPI-Endpoints",
  },
];

const baseExtraProjects: ProjectCard[] = [
  {
    title: "SpringBoot CRM DDD/Hex",
    img: "/SpringBoot-DDD-Store.webp",
    desc: "A backend application using DDD/Hexagonal architecture",
    url: "https://github.com/Ferranv3/CRMAPI",
  },
  {
    title: "SpringBoot Store DDD/Hex",
    img: "/SpringBoot-DDD-Store.webp",
    desc: "A backend application using DDD/Hexagonal architecture",
    url: "https://github.com/Ferranv3/SpringBoot-DDD-Store",
  },
  {
    title: "TechNews API",
    img: "/TechnewsAPI_screenshot.webp",
    desc: "A backend application to serve tech news.",
    url: "https://github.com/Ferranv3/TechNews-API",
  },
  {
    title: "TechNews Frontend",
    img: "/TechNewsFront_screenshot.webp",
    desc: "Built with Astro framework using HTML, CSS and React with hooks. One web to follow the most important tech news.",
    url: "https://technews-ferran.vercel.app/",
  },
  {
    title: "Astro Portfolio",
    img: "/Portfolio_screenshot.webp",
    desc: "Modern portfolio with Project Section, CV Section, Paginated Blog, RSS Feed, SEO Friendly, Visual themes and Responsive Design for Astro framework.",
    url: "https://github.com/Ferranv3/astro-portfolio",
  },
  {
    title: "Note-ToDo",
    img: "/NodeToDo_screenshot.webp",
    desc: "A Node ToDo app built with MongoDB and Angular.",
    url: "https://github.com/Ferranv3/Node-ToDo",
  },
  {
    title: "Spring Boot Samples REST",
    img: "/SpringBootREST_screenshot.webp",
    desc: "It contains a Spring Boot back-end with many endpoints. A calculator, a Nasa image viewer using an API Rest, a contact form and a collection of beers using an API Rest.",
    url: "https://github.com/Ferranv3/Spring-Boot-Samples-REST",
  },
  {
    title: "Spring Boot Samples SOAP",
    img: "/SpringBootSOAP_screenshot.webp",
    desc: "It contains a Spring Boot back-end with many endpoints. A calculator, a Nasa image viewer using an API Rest, a contact form and a collection of beers using an API Rest.",
    url: "https://github.com/Ferranv3/Spring-Boot-Samples-SOAP",
  },
  {
    title: "Demos Android",
    img: "/UGame_screenshot.webp",
    desc: "Some Android projects to download and run",
    url: "https://github.com/Ferranv3/Demos-Android",
  },
  {
    title: "Demos .Net",
    img: "/GestioHospitalNET_screenshot.webp",
    desc: "Some .Net projects to download and run",
    url: "https://github.com/Ferranv3/Demos-.NET",
  },
  {
    title: "Demos JavaFX",
    img: "/JavaFX_screenshot.webp",
    desc: "Some JavaFX projects to download and run",
    url: "https://github.com/Ferranv3/Demos-JavaFX",
  },
];

const baseCertifications = [
  {
    label: "Microservices with Spring Cloud and Angular (Full Stack)",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado-Microservicios_con_Spring_cloud_y_Angular_FullStack.pdf",
  },
  {
    label: "Microservices using DDD",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado-Spring-Microservices-using-DDD.pdf",
  },
  {
    label: "Docker, from beginner to expert",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/CertificadoDocker.pdf",
  },
  {
    label: "Scrum",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/CertificadoScrum.pdf",
  },
  {
    label: "LPIC-1 Linux administrator",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado_LPIC-1_Administrador_Linux.pdf",
  },
  {
    label: "Reactive programming",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado_programacion_reactiva_spring_boot_y_webflux.pdf",
  },
  {
    label: "Machine Learning and Data Science with Python",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado_Curso_completo_Machine_Learning_Data_Science_Python.pdf",
  },
];

const baseSkills = [
  "AWS Lambda",
  "FastAPI",
  "AWS API Gateway",
  "PostgreSQL",
  "Serverless",
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
  "Liquibase",
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
  "Apache Tomcat",
  "WildFly",
  "SOLID",
  "DDD",
];

const educationMeta: EducationMeta[] = [
  { institution: "Universitat Oberta de Catalunya (UOC)", start: "2020", place: "online" },
  { institution: "IES Caparrella", start: "2018", end: "2020", place: "lleida" },
  { institution: "IES Caparrella", start: "2010", end: "2012", place: "lleida" },
  { institution: "El Carme", start: "2006", end: "2010", place: "lleida", cvOmit: true },
];

/** Websites of the clients of the freelance work, keyed by the client name as
 *  written in the experience descriptions (all languages). */
export const clientUrls: Record<string, string> = {
  BBVA: "https://www.bbva.es/",
  UOC: "https://www.uoc.edu/",
  "Comunidad de Madrid": "https://www.comunidad.madrid/",
  "Comunitat de Madrid": "https://www.comunidad.madrid/",
  ING: "https://www.ing.es/",
  "Indra S.A.": "https://www.indragroup.com/",
  "WorldRemit UK": "https://www.worldremit.com/",
  Inditex: "https://www.inditex.com/",
};

const experienceMeta: ExperienceMeta[] = [
  {
    // Freelance: one shared line covering all the clients.
    start: "2023-06",
    place: "remote",
    tech: [
      "Java 8–21",
      "Spring Boot",
      "Kafka",
      "gRPC",
      "WebFlux",
      "AWS Lambda",
      "Kubernetes",
      "Docker",
      "Python",
      "FastAPI",
      "JUnit",
      "Mockito",
    ],
  },
  {
    company: "VirtualCave S.L.",
    url: "https://www.virtualcave.io/",
    start: "2025-07",
    end: "2026-07",
    place: "remote",
    tech: ["Java", "Spring Boot", "Kafka", "gRPC", "DDD", "Clean Architecture"],
  },
  {
    company: "RealNaut S.L.",
    url: "https://www.realnaut.com/",
    start: "2023-02",
    end: "2023-11",
    place: "remote",
    tech: [
      "Terraform",
      "AWS",
      "Google Cloud",
      "Azure",
      "Kubernetes",
      "Tekton",
      "Flux",
      "GitHub Actions",
      "Jenkins",
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "Astro",
    ],
  },
  {
    company: "Trace Logistics S.L.",
    // Trace Logistics belongs to the Fluidra group (no website of its own).
    url: "https://www.fluidra.com/",
    start: "2022-06",
    end: "2023-03",
    place: "remote",
    tech: [
      "Java 8",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Angular",
      "TypeScript",
      "JPA / Hibernate",
      "Oracle SQL",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Apache Tomcat",
      "JUnit",
      "Mockito",
      "DDD",
      "TDD",
    ],
  },
  {
    company: "Indra S.A.",
    url: "https://www.indragroup.com/",
    start: "2021-11",
    end: "2022-07",
    place: "remote",
    tech: [
      "Java 8–17",
      "Spring Boot",
      "JPA / Hibernate",
      "Oracle SQL",
      "Vue.js",
      "Docker",
      "Rancher",
      "Jenkins",
      "SonarQube",
      "GitLab",
      "Jira",
      "Elasticsearch",
    ],
  },
  {
    company: "Programación Integral S.A.",
    start: "2020-07",
    end: "2021-10",
    place: "lleida",
    tech: [
      "C# .NET",
      "Visual Basic .NET",
      "VB6",
      "Java 8",
      "Spring",
      "Angular",
      "SQL Server",
      "PL/SQL",
      "PHP",
      "Prestashop",
      "Jasper Reports",
      "Windows",
      "Linux",
    ],
  },
  {
    company: "JustDigital S.L.",
    start: "2020-01",
    end: "2020-03",
    place: "lleida",
    internship: true,
    tech: ["Angular", "TypeScript", "Java", "Spring", "Kotlin"],
  },
];

const translations: Record<LanguageCode, Translation> = {
  en: {
    lang: "en",
    head: {
      title: "Ferran Hernandez Prunera",
      description: "Ferran Hernandez Prunera portfolio",
    },
    navigation: {
      home: "Home",
      contact: "Contact",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      certifications: "Certifications",
      skills: "Skills",
      cv: "Curriculum (PDF)",
    },
    cv: {
      documentTitle: "Ferran Hernandez Prunera - Curriculum Vitae",
      headline: "Senior Backend Developer · Java & Spring Boot · Cloud & DevOps",
      summary:
        "Senior backend developer with {years}+ years of experience designing and building Java / Spring Boot microservices for large companies such as Inditex, ING, BBVA and WorldRemit. Specialized in event-driven architectures (Kafka, gRPC), DDD and hexagonal architecture, and in cloud-native delivery on AWS, Google Cloud and Azure with Terraform, Kubernetes and CI/CD. Former tech lead with experience mentoring teams and running technical trainings.",
      print: "Download PDF / Print",
      printHint: "Tip: disable \"Headers and footers\" in the print dialog.",
      back: "Back to portfolio",
      present: "Present",
      projects: "Selected projects",
      courses: "Courses & Certifications",
      client: "Client",
      technologies: "Technologies",
      location: "Lleida, Spain · Remote",
      places: { remote: "Remote", lleida: "Lleida, Catalonia, Spain", online: "Online" },
      selfEmployed: "Self-employed",
      certificates: "Certificates",
    },
    greeting: {
      fullName: "Ferran Hernandez",
      role: "Full Stack Developer Analyst and DevOps Engineer",
      letsConnect: "Let's connect!",
      seeTheSourceCode: "See all my projects!",
      scheduleMeeting: "Schedule a meeting with me",
    },
    projects: {
      title: "My latest projects",
      featured: baseProjects,
      extra: baseExtraProjects,
      seeMoreLabel: "See more",
    },
    profile: {
      title: "Profile",
      description:
        "Passionate about software development, I build reliable solutions from backend services to cloud-native architectures. I focus on Java and modern ecosystems such as Spring Boot, FastAPI on cloud to deliver scalable products.",
    },
    experience: {
      title: "Experience",
      durationLabels: {
        year: "year",
        years: "years",
        month: "month",
        months: "months",
        and: "and",
        zero: "0 months",
      },
      durationConfig: {
        freelance: { start: "2023-06-01" },
        uoc: { start: "2025-01-01" },
        bbva: { start: "2026-05-01" },
        inditex: { start: "2025-07-01", duration: "1 year" },
      },
      meta: experienceMeta,
      items: [
        {
          title: "Freelance Backend Developer",
          subtitle: "From 06/2023 to current - {freelance} - Remote work",
          desc: `- BBVA (05/2026 - Current - {bbva}): Developed new features for an internal trading platform, building Java/Spring Boot microservices deployed in a cloud environment.
- UOC (01/2025 - Current - {uoc}): Develop serverless and cloud-native services on AWS (Lambda).
- BBVA (01/2025-07/2025 - 7 months): Implemented backend microservice features to manage user and product onboarding on a financial transactions platform.
- Comunidad de Madrid (01/2025-06/2024 - 6 months): Analyzed requirements, designed and built the database, integrated third-party APIs and worked with the front-end team on data management and visualization.
- ING (06/2023-11/2024 - 1 year and 5 months): Developed and maintained DDD/hexagonal microservices behind ING's main customer-facing application using Java 8-17, Spring Boot and Kafka.
- Indra S.A. (10/2024-12/2024 - 2 months): Fixed bugs on the main insurance project and implemented unit tests for services using Java 8-11, Spring Boot and JUnit.
- WorldRemit UK (01/2024-06/2024 - 6 months): Built third-party payment integrations and scalable reactive applications using Java 17, Spring Boot, WebFlux and gRPC; daily communication in English.`,
        },
        {
          title: "Senior Backend Developer",
          subtitle: "From 07/2025 to 07/2026 at VirtualCave S.L. - {inditex} - Remote work",
          desc: "- Inditex: Developed event-driven microservices and integration flows with Kafka and gRPC. Applied clean architecture and DDD to keep high-performance applications maintainable. Improved the Inditex stock source and implemented new features.",
        },
        {
          title: "Programmer Analyst and DevOps Engineer",
          subtitle: "From 02/2023 to 11/2023 at RealNaut S.L. - 9 months - Remote work",
          desc: `- Developed and deployed web and mobile applications on AWS, Google Cloud and Azure.
- Automated infrastructure and CI/CD with Terraform, Flux, Tekton and GitHub Actions.`,
        },
        {
          title: "Tech Lead and Full Stack Developer/DevOps",
          subtitle: "From 06/2022 to 03/2023 at Trace Logistics S.L. - 10 months - Remote work",
          desc: `- Led a development team and introduced a microservices architecture and DevOps practices.
- Ran bi-weekly trainings for the whole department and advanced technical trainings for my team.`,
        },
        {
          title: "Full Stack Analyst and DevOps",
          subtitle: "From 11/2021 to 07/2022 at Indra S.A. - 8 months - Remote work",
          desc: `- Developed backend REST APIs with a microservices architecture in Spring/Java for an internal banking project.
- Maintained the environments with DevOps tools in an agile team.
- Onboarded new team members.`,
        },
        {
          title: "Full Stack Developer",
          subtitle: "From 07/2020 to 10/2021 at Programación Integral S.A. - 1 year and 5 months - Lleida, Catalonia, Spain",
          desc: `- Designed UI, implemented features and customized an ERP (HR, accounting, stock management and web e-commerce) for third-party companies.
- Provided technical support to clients and led onboarding for new hires.`,
        },
        {
          title: "Programmer Internship",
          subtitle: "From 01/2020 to 03/2020 at JustDigital S.L. - 3 months - Lleida, Catalonia, Spain",
          desc: "- Implemented features and fixed bugs with Angular and TypeScript on the frontend and Spring with Java and Kotlin on the backend.",
        },
      ],
    },
    education: {
      title: "Education",
      meta: educationMeta,
      items: [
        {
          title: "Bachelor's Degree in Computer Engineering",
          subtitle: "2020 to present at UOC, Barcelona, Spain (remote)",
        },
        {
          title: "Higher VET Diploma (CFGS) in Cross-Platform Application Development",
          subtitle: "2018 to 2020 at IES Caparrella, Lleida, Spain",
        },
        {
          title: "Intermediate VET Diploma (CFGM) in Microcomputer Systems and Networks",
          subtitle: "2010 to 2012 at IES Caparrella, Lleida, Spain",
        },
        {
          title: "Compulsory secondary education",
          subtitle: "2006 to 2010 at El Carme, Lleida, Spain",
        },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Spanish", level: "Native" },
        { name: "Catalan", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "Portuguese", level: "Basic" },
      ],
    },
    certifications: {
      title: "Certifications",
      items: baseCertifications,
    },
    skills: {
      title: "Skills",
      techs: baseSkills,
      showAllLabel: "See all",
      showLessLabel: "Show less",
    },
  },
  es: {
    lang: "es",
    head: {
      title: "Ferran Hernandez Prunera",
      description: "Portfolio de Ferran Hernandez Prunera",
    },
    navigation: {
      home: "Inicio",
      contact: "Contacto",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Formación",
      languages: "Idiomas",
      certifications: "Certificaciones",
      skills: "Habilidades",
      cv: "Currículum (PDF)",
    },
    cv: {
      documentTitle: "Ferran Hernandez Prunera - Currículum Vitae",
      headline: "Desarrollador Backend Senior · Java y Spring Boot · Cloud y DevOps",
      summary:
        "Desarrollador backend senior con más de {years} años de experiencia diseñando y construyendo microservicios Java / Spring Boot para grandes compañías como Inditex, ING, BBVA y WorldRemit. Especializado en arquitecturas orientadas a eventos (Kafka, gRPC), DDD y arquitectura hexagonal, y en entrega cloud-native sobre AWS, Google Cloud y Azure con Terraform, Kubernetes y CI/CD. Experiencia como tech lead y formador de equipos.",
      print: "Descargar PDF / Imprimir",
      printHint: "Consejo: desactiva «Encabezados y pies de página» en el diálogo de impresión.",
      back: "Volver al portfolio",
      present: "Actualidad",
      projects: "Proyectos destacados",
      courses: "Cursos y certificaciones",
      client: "Cliente",
      technologies: "Tecnologías",
      location: "Lleida, España · Remoto",
      places: { remote: "Remoto", lleida: "Lleida, Cataluña, España", online: "En línea" },
      selfEmployed: "Autónomo",
      certificates: "Certificados",
    },
    greeting: {
      fullName: "Ferran Hernandez",
      role: "Programador Full Stack, Analista y DevOps",
      letsConnect: "¡Conectemos!",
      seeTheSourceCode: "¡Descubre todos mis proyectos!",
      scheduleMeeting: "Agenda una reunión conmigo",
    },
    projects: {
      title: "Mis últimos proyectos",
      featured: baseProjects.map((project) => ({
        ...project,
        desc:
          project.title === "Python FastAPI CRM"
            ? "CRM backend desarrollado con Python y FastAPI."
            : project.title === "SimulApp"
              ? "Aplicación web de simulación y cálculo hipotecario."
              : "Aplicación backend basada en arquitectura DDD/Hexagonal",
        badge: project.badge === "NEW" ? "NUEVO" : project.badge,
      })),
      extra: baseExtraProjects.map((project) => {
        if (project.title === "SpringBoot CRM DDD/Hex") {
          return {
            ...project,
            desc: "Aplicación backend basada en arquitectura DDD/Hexagonal.",
            badge: project.badge === "NEW" ? "NUEVO" : project.badge,
          };
        }
        if (project.title === "SpringBoot Store DDD/Hex") {
          return {
            ...project,
            desc: "Aplicación backend basada en arquitectura DDD/Hexagonal.",
          };
        }
        if (project.title === "TechNews API") {
          return {
            ...project,
            desc: "API backend para servir noticias tecnológicas.",
          };
        }
        if (project.title === "TechNews Frontend") {
          return {
            ...project,
            desc: "Sitio construido con Astro, HTML, CSS y React con hooks para seguir las noticias tecnológicas más relevantes.",
          };
        }
        if (project.title === "Astro Portfolio") {
          return {
            ...project,
            desc: "Portfolio moderno con sección de proyectos, CV, blog paginado, RSS, SEO, temas visuales y diseño responsive para Astro.",
          };
        }
        if (project.title === "Note-ToDo") {
          return {
            ...project,
            desc: "Aplicación de notas y tareas construida con MongoDB y Angular.",
          };
        }
        if (project.title === "Spring Boot Samples REST") {
          return {
            ...project,
            desc: "Backend en Spring Boot con múltiples endpoints: calculadora, visor de imágenes de la NASA, formulario de contacto y listado de cervezas vía API REST.",
          };
        }
        if (project.title === "Spring Boot Samples SOAP") {
          return {
            ...project,
            desc: "Backend en Spring Boot con varios endpoints: calculadora, visor de imágenes de la NASA, formulario de contacto y catálogo de cervezas vía API SOAP.",
          };
        }
        if (project.title === "Demos Android") {
          return {
            ...project,
            desc: "Colección de proyectos Android para descargar y ejecutar.",
          };
        }
        if (project.title === "Demos .Net") {
          return {
            ...project,
            desc: "Colección de proyectos .Net para descargar y ejecutar.",
          };
        }
        if (project.title === "Demos JavaFX") {
          return {
            ...project,
            desc: "Colección de proyectos JavaFX para descargar y ejecutar.",
          };
        }
        return { ...project };
      }),
      seeMoreLabel: "Ver más",
    },
    profile: {
      title: "Perfil",
      description:
        "Apasionado por el desarrollo de software, construyo soluciones sólidas desde servicios backend hasta arquitecturas cloud-native. Trabajo principalmente con Java y ecosistemas modernos como Spring Boot, FastAPI en cloud para crear productos escalables.",
    },
    experience: {
      title: "Experiencia",
      durationLabels: {
        year: "año",
        years: "años",
        month: "mes",
        months: "meses",
        and: "y",
        zero: "0 meses",
      },
      durationConfig: {
        freelance: { start: "2023-06-01" },
        uoc: { start: "2025-01-01" },
        bbva: { start: "2026-05-01" },
        inditex: { start: "2025-07-01", duration: "1 año" },
      },
      meta: experienceMeta,
      items: [
        {
          title: "Desarrollador Backend Freelance",
          subtitle: "Desde 06/2023 hasta la actualidad - {freelance} - Trabajo remoto",
          desc: `- BBVA (05/2026 - Actualidad - {bbva}): Implementación de nuevas funcionalidades en una aplicación interna de trading mediante microservicios Java/Spring Boot en un entorno cloud.
- UOC (01/2025 - Actualidad - {uoc}): Desarrollo de servicios serverless y cloud native sobre AWS (Lambda).
- BBVA (01/2025-07/2025 - 7 meses): Implementación de funcionalidades en microservicios backend para la gestión de altas de usuarios y productos en una plataforma de transacciones financieras.
- Comunidad de Madrid (01/2025-06/2024 - 6 meses): Análisis de requisitos, diseño y desarrollo de la base de datos, integración con APIs de terceros y colaboración con el equipo front-end en la gestión y visualización de datos.
- ING (06/2023-11/2024 - 1 año y 5 meses): Desarrollo y mantenimiento de microservicios DDD/hexagonales que soportan la aplicación pública principal de ING, con Java 8-17, Spring Boot y Kafka.
- Indra S.A. (10/2024-12/2024 - 2 meses): Corrección de incidencias en el proyecto principal de seguros e implantación de tests unitarios con Java 8-11, Spring Boot y JUnit.
- WorldRemit UK (01/2024-06/2024 - 6 meses): Integraciones de pago con terceros y aplicaciones reactivas escalables con Java 17, Spring Boot, WebFlux y gRPC; comunicación diaria en inglés.`,
        },
        {
          title: "Desarrollador Backend Senior",
          subtitle: "Desde 07/2025 hasta 07/2026 en VirtualCave S.L. - {inditex} - Trabajo remoto",
          desc: "- Inditex: Desarrollo de microservicios orientados a eventos y flujos de integración con Kafka y gRPC. Aplicación de arquitectura limpia y DDD para garantizar la mantenibilidad de aplicaciones de alto rendimiento. Mejora de la fuente de stock de Inditex e incorporación de nuevas funcionalidades.",
        },
        {
          title: "Analista Programador y DevOps",
          subtitle: "De 02/2023 a 11/2023 en RealNaut S.L. - 9 meses - Trabajo remoto",
          desc: `- Desarrollo y despliegue de aplicaciones web y móviles sobre AWS, Google Cloud y Azure.
- Automatización de infraestructura y CI/CD con Terraform, Flux, Tekton y GitHub Actions.`,
        },
        {
          title: "Tech Lead y Desarrollador Full Stack/DevOps",
          subtitle: "De 06/2022 a 03/2023 en Trace Logistics S.L. - 10 meses - Trabajo remoto",
          desc: `- Liderazgo de un equipo de desarrollo e implantación de arquitectura de microservicios y prácticas DevOps.
- Formaciones quincenales a todo el departamento y sesiones técnicas avanzadas para mi equipo.`,
        },
        {
          title: "Analista Full Stack y DevOps",
          subtitle: "De 11/2021 a 07/2022 en Indra S.A. - 8 meses - Trabajo remoto",
          desc: `- Desarrollo de APIs REST backend con arquitectura de microservicios en Spring/Java para un proyecto bancario interno.
- Mantenimiento de los entornos con herramientas DevOps en un equipo ágil.
- Formación inicial de nuevas incorporaciones.`,
        },
        {
          title: "Desarrollador Full Stack",
          subtitle: "De 07/2020 a 10/2021 en Programación Integral S.A. - 1 año y 5 meses - Lleida, Cataluña, España",
          desc: `- Diseño de interfaces, implementación de funcionalidades y personalización de un ERP (RRHH, contabilidad, stock y e-commerce) para terceras empresas.
- Soporte técnico a clientes y onboarding de nuevas incorporaciones.`,
        },
        {
          title: "Programador en prácticas",
          subtitle: "De 01/2020 a 03/2020 en JustDigital S.L. - 3 meses - Lleida, Cataluña, España",
          desc: "- Implementación de funcionalidades y resolución de incidencias con Angular y TypeScript en el frontend y Spring con Java y Kotlin en el backend.",
        },
      ],
    },
    education: {
      title: "Formación",
      meta: educationMeta,
      items: [
        {
          title: "Grado en Ingeniería Informática",
          subtitle: "2020 – Actualidad en la UOC, Barcelona, España (remoto)",
        },
        {
          title: "CFGS Desarrollo de aplicaciones multiplataforma",
          subtitle: "2018 – 2020 en IES Caparrella, Lleida, España",
        },
        {
          title: "CFGM Sistemas microinformáticos y redes",
          subtitle: "2010 – 2012 en IES Caparrella, Lleida, España",
        },
        {
          title: "Educación Secundaria Obligatoria",
          subtitle: "2006 – 2010 en El Carme, Lleida, España",
        },
      ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Español", level: "Nativo" },
        { name: "Catalán", level: "Nativo" },
        { name: "Inglés", level: "Nivel avanzado" },
        { name: "Portugués", level: "Nivel básico" },
      ],
    },
    certifications: {
      title: "Certificaciones",
      items: baseCertifications.map((cert) => {
        if (cert.label === "Docker, from beginner to expert") {
          return { ...cert, label: "Docker, de principiante a experto" };
        }
        if (cert.label === "Reactive programming") {
          return { ...cert, label: "Programación reactiva" };
        }
        if (cert.label === "Machine Learning and Data Science with Python") {
          return { ...cert, label: "Machine Learning y Ciencia de Datos con Python" };
        }
        if (cert.label === "Microservices with Spring Cloud and Angular (Full Stack)") {
          return {
            ...cert,
            label: "Microservicios con Spring Cloud y Angular (Full Stack)",
          };
        }
        if (cert.label === "Microservices using DDD") {
          return {
            ...cert,
            label: "Microservicios con DDD",
          };
        }
        if (cert.label === "LPIC-1 Linux administrator") {
          return {
            ...cert,
            label: "Administrador Linux LPIC-1",
          };
        }
        return cert;
      }),
    },
    skills: {
      title: "Habilidades",
      techs: baseSkills,
      showAllLabel: "Ver más",
      showLessLabel: "Ver menos",
    },
  },
  ca: {
    lang: "ca",
    head: {
      title: "Ferran Hernandez Prunera",
      description: "Portafoli de Ferran Hernandez Prunera",
    },
    navigation: {
      home: "Inici",
      contact: "Contacte",
      projects: "Projectes",
      experience: "Experiència",
      education: "Formació",
      languages: "Idiomes",
      certifications: "Certificacions",
      skills: "Habilitats",
      cv: "Currículum (PDF)",
    },
    cv: {
      documentTitle: "Ferran Hernandez Prunera - Currículum Vitae",
      headline: "Desenvolupador Backend Sènior · Java i Spring Boot · Cloud i DevOps",
      summary:
        "Desenvolupador backend sènior amb més de {years} anys d'experiència dissenyant i construint microserveis Java / Spring Boot per a grans companyies com Inditex, ING, BBVA i WorldRemit. Especialitzat en arquitectures orientades a esdeveniments (Kafka, gRPC), DDD i arquitectura hexagonal, i en lliurament cloud-native sobre AWS, Google Cloud i Azure amb Terraform, Kubernetes i CI/CD. Experiència com a tech lead i formador d'equips.",
      print: "Descarregar PDF / Imprimir",
      printHint: "Consell: desactiva «Capçaleres i peus de pàgina» al diàleg d'impressió.",
      back: "Tornar al portfolio",
      present: "Actualitat",
      projects: "Projectes destacats",
      courses: "Cursos i certificacions",
      client: "Client",
      technologies: "Tecnologies",
      location: "Lleida, Espanya · Remot",
      places: { remote: "Remot", lleida: "Lleida, Catalunya, Espanya", online: "En línia" },
      selfEmployed: "Autònom",
      certificates: "Certificats",
    },
    greeting: {
      fullName: "Ferran Hernandez",
      role: "Programador Full Stack, Analista i Enginyer DevOps",
      letsConnect: "Connectem!",
      seeTheSourceCode: "Descobreix tots els meus projectes!",
      scheduleMeeting: "Programa una reunió amb mi",
    },
    projects: {
      title: "Els meus últims projectes",
      featured: baseProjects.map((project) => ({
        ...project,
        desc:
          project.title === "Python FastAPI CRM"
            ? "CRM backend desenvolupat amb Python i FastAPI."
            : project.title === "SimulApp"
              ? "Aplicació web de simulació i càlcul hipotecari."
              : "Aplicació backend basada en arquitectura DDD/Hexagonal",
        badge: project.badge === "NEW" ? "NOU" : project.badge,
      })),
      extra: baseExtraProjects.map((project) => {
        if (project.title === "SpringBoot CRM DDD/Hex") {
          return {
            ...project,
            desc: "Aplicació backend basada en arquitectura DDD/Hexagonal.",
            badge: project.badge === "NEW" ? "NOU" : project.badge,
          };
        }
        if (project.title === "SpringBoot Store DDD/Hex") {
          return {
            ...project,
            desc: "Aplicació backend basada en arquitectura DDD/Hexagonal.",
          };
        }
        if (project.title === "TechNews API") {
          return {
            ...project,
            desc: "API backend per servir notícies tecnològiques.",
          };
        }
        if (project.title === "TechNews Frontend") {
          return {
            ...project,
            desc: "Lloc creat amb Astro, HTML, CSS i React amb hooks per seguir les notícies tecnològiques més rellevants.",
          };
        }
        if (project.title === "Astro Portfolio") {
          return {
            ...project,
            desc: "Portafoli modern amb secció de projectes, CV, blog paginat, RSS, SEO, temes visuals i disseny responsive per a Astro.",
          };
        }
        if (project.title === "Note-ToDo") {
          return {
            ...project,
            desc: "Aplicació de notes i tasques construïda amb MongoDB i Angular.",
          };
        }
        if (project.title === "Spring Boot Samples REST") {
          return {
            ...project,
            desc: "Backend en Spring Boot amb múltiples endpoints: calculadora, visor d'imatges de la NASA, formulari de contacte i llistat de cerveses via API REST.",
          };
        }
        if (project.title === "Spring Boot Samples SOAP") {
          return {
            ...project,
            desc: "Backend en Spring Boot amb diversos endpoints: calculadora, visor d'imatges de la NASA, formulari de contacte i catàleg de cerveses via API SOAP.",
          };
        }
        if (project.title === "Demos Android") {
          return {
            ...project,
            desc: "Col·lecció de projectes Android per descarregar i executar.",
          };
        }
        if (project.title === "Demos .Net") {
          return {
            ...project,
            desc: "Col·lecció de projectes .Net per descarregar i executar.",
          };
        }
        if (project.title === "Demos JavaFX") {
          return {
            ...project,
            desc: "Col·lecció de projectes JavaFX per descarregar i executar.",
          };
        }
        return project;
      }),
      seeMoreLabel: "Veure més",
    },
    profile: {
      title: "Perfil",
      description:
        "Apassionat pel desenvolupament de programari, construeixo solucions sòlides des de serveis backend fins a arquitectures cloud-native. Treballo sobretot amb Java i ecosistemes moderns com Spring Boot, FastAPI a cloud per crear productes escalables.",
    },
    experience: {
      title: "Experiència",
      durationLabels: {
        year: "any",
        years: "anys",
        month: "mes",
        months: "mesos",
        and: "i",
        zero: "0 mesos",
      },
      durationConfig: {
        freelance: { start: "2023-06-01" },
        uoc: { start: "2025-01-01" },
        bbva: { start: "2026-05-01" },
        inditex: { start: "2025-07-01", duration: "1 any" },
      },
      meta: experienceMeta,
      items: [
        {
          title: "Desenvolupador Backend Freelance",
          subtitle: "Des de 06/2023 fins a l'actualitat - {freelance} - Treball remot",
          desc: `- BBVA (05/2026 - Actualitat - {bbva}): Implementació de noves funcionalitats en una aplicació interna de trading mitjançant microserveis Java/Spring Boot en un entorn cloud.
- UOC (01/2025 - Actualitat - {uoc}): Desenvolupament de serveis serverless i cloud native sobre AWS (Lambda).
- BBVA (01/2025-07/2025 - 7 mesos): Implementació de funcionalitats en microserveis backend per a la gestió d'altes d'usuaris i productes en una plataforma de transaccions financeres.
- Comunitat de Madrid (01/2025-06/2024 - 6 mesos): Anàlisi de requisits, disseny i desenvolupament de la base de dades, integració amb APIs de tercers i col·laboració amb l'equip frontend en la gestió i visualització de dades.
- ING (06/2023-11/2024 - 1 any i 5 mesos): Desenvolupament i manteniment de microserveis DDD/hexagonals que donen suport a l'aplicació pública principal d'ING, amb Java 8-17, Spring Boot i Kafka.
- Indra S.A. (10/2024-12/2024 - 2 mesos): Correcció d'incidències en el projecte principal d'assegurances i implantació de proves unitàries amb Java 8-11, Spring Boot i JUnit.
- WorldRemit UK (01/2024-06/2024 - 6 mesos): Integracions de pagament amb tercers i aplicacions reactives escalables amb Java 17, Spring Boot, WebFlux i gRPC; comunicació diària en anglès.`,
        },
        {
          title: "Desenvolupador Backend Sènior",
          subtitle: "Des de 07/2025 fins a 07/2026 a VirtualCave S.L. - {inditex} - Treball remot",
          desc: "- Inditex: Desenvolupament de microserveis orientats a esdeveniments i fluxos d'integració amb Kafka i gRPC. Aplicació d'arquitectura neta i DDD per garantir la mantenibilitat d'aplicacions d'alt rendiment. Millora de la font d'estoc d'Inditex i incorporació de noves funcionalitats.",
        },
        {
          title: "Analista Programador i Enginyer DevOps",
          subtitle: "De 02/2023 a 11/2023 a RealNaut S.L. - 9 mesos - Treball remot",
          desc: `- Desenvolupament i desplegament d'aplicacions web i mòbils sobre AWS, Google Cloud i Azure.
- Automatització d'infraestructura i CI/CD amb Terraform, Flux, Tekton i GitHub Actions.`,
        },
        {
          title: "Tech Lead i Desenvolupador Full Stack/DevOps",
          subtitle: "De 06/2022 a 03/2023 a Trace Logistics S.L. - 10 mesos - Treball remot",
          desc: `- Lideratge d'un equip de desenvolupament i implantació d'arquitectura de microserveis i pràctiques DevOps.
- Formacions quinzenals a tot el departament i sessions tècniques avançades per al meu equip.`,
        },
        {
          title: "Analista Full Stack i DevOps",
          subtitle: "De 11/2021 a 07/2022 a Indra S.A. - 8 mesos - Treball remot",
          desc: `- Desenvolupament d'APIs REST backend amb arquitectura de microserveis en Spring/Java per a un projecte bancari intern.
- Manteniment dels entorns amb eines DevOps en un equip àgil.
- Formació inicial de noves incorporacions.`,
        },
        {
          title: "Desenvolupador Full Stack",
          subtitle: "De 07/2020 a 10/2021 a Programación Integral S.A. - 1 any i 5 mesos - Lleida, Catalunya, Espanya",
          desc: `- Disseny d'interfícies, implementació de funcionalitats i personalització d'un ERP (RRHH, comptabilitat, estoc i e-commerce) per a empreses terceres.
- Suport tècnic a clients i onboarding de noves incorporacions.`,
        },
        {
          title: "Programador en pràctiques",
          subtitle: "De 01/2020 a 03/2020 a JustDigital S.L. - 3 mesos - Lleida, Catalunya, Espanya",
          desc: "- Implementació de funcionalitats i resolució d'incidències amb Angular i TypeScript al frontend i Spring amb Java i Kotlin al backend.",
        },
      ],
    },
    education: {
      title: "Formació",
      meta: educationMeta,
      items: [
        {
          title: "Grau en Enginyeria Informàtica",
          subtitle: "2020 – Actualitat a la UOC, Barcelona, Espanya (remot)",
        },
        {
          title: "CFGS Desenvolupament d'aplicacions multiplataforma",
          subtitle: "2018 – 2020 a l'IES Caparrella, Lleida, Espanya",
        },
        {
          title: "CFGM Sistemes microinformàtics i xarxes",
          subtitle: "2010 – 2012 a l'IES Caparrella, Lleida, Espanya",
        },
        {
          title: "Educació Secundària Obligatòria",
          subtitle: "2006 – 2010 a El Carme, Lleida, Espanya",
        },
      ],
    },
    languages: {
      title: "Idiomes",
      items: [
        { name: "Català", level: "Natiu" },
        { name: "Castellà", level: "Natiu" },
        { name: "Anglès", level: "Nivell avançat" },
        { name: "Portuguès", level: "Nivell bàsic" },
      ],
    },
    certifications: {
      title: "Certificacions",
      items: baseCertifications.map((cert) => {
        if (cert.label === "Docker, from beginner to expert") {
          return { ...cert, label: "Docker, de principiant a expert" };
        }
        if (cert.label === "Reactive programming") {
          return { ...cert, label: "Programació reactiva" };
        }
        if (cert.label === "Machine Learning and Data Science with Python") {
          return { ...cert, label: "Machine Learning i Ciència de Dades amb Python" };
        }
        if (cert.label === "Microservices with Spring Cloud and Angular (Full Stack)") {
          return {
            ...cert,
            label: "Microserveis amb Spring Cloud i Angular (Full Stack)",
          };
        }
        if (cert.label === "Microservices using DDD") {
          return {
            ...cert,
            label: "Microserveis amb DDD",
          };
        }
        if (cert.label === "LPIC-1 Linux administrator") {
          return {
            ...cert,
            label: "Administrador Linux LPIC-1",
          };
        }
        return cert;
      }),
    },
    skills: {
      title: "Habilitats",
      techs: baseSkills,
      showAllLabel: "Veure més",
      showLessLabel: "Veure menys",
    },
  },
};

export const supportedLanguages = Object.keys(translations) as LanguageCode[];

export const defaultLanguage: LanguageCode = "en";

export function isSupportedLanguage(lang: string | undefined): lang is LanguageCode {
  return !!lang && supportedLanguages.includes(lang as LanguageCode);
}

export function getTranslation(lang: string | undefined): Translation {
  if (isSupportedLanguage(lang)) {
    return translations[lang];
  }
  return translations[defaultLanguage];
}
