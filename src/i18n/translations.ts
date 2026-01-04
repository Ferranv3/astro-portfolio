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
    durationConfig: Record<string, { start: string; end?: string }>;
    items: Array<{
      title: string;
      subtitle: string;
      desc?: string;
    }>;
  };
  education: {
    title: string;
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
  };
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
    desc: "SimulApp web application.",
    url: "https://simulapp.ferranv3.com/",
    badge: "NEW",
  },
  {
    title: "Python FastAPI CRM",
    img: "/SpringBoot-DDD-Store.webp",
    desc: "A backend application using Python and FastAPI",
    url: "https://github.com/Ferranv3/FASTAPI-Endpoints",
    badge: "NEW",
  },
];

const baseExtraProjects: ProjectCard[] = [
  {
    title: "SpringBoot CRM DDD/Hex",
    img: "/SpringBoot-DDD-Store.webp",
    desc: "A backend application using DDD/Hexagonal architecture",
    url: "https://github.com/Ferranv3/CRMAPI",
    badge: "NEW",
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
    label: "Microservices Spring cloud and Angular FullStack",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado-Microservicios_con_Spring_cloud_y_Angular_FullStack.pdf",
  },
  {
    label: "Microservices using DDD",
    url: "https://github.com/Ferranv3/Certificados-cursos/blob/master/Certificado-Spring-Microservices-using-DDD.pdf",
  },
  {
    label: "Docker, from begginer to expert",
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
    label: "Machine Learning Data Science with Python",
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
  "DDD",
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
        "Passionate about technological development, I am dedicated to create and improve software solutions. In my spare time, I develop applications, design websites and repair computers. I stay on the cutting edge of emerging technologies such as Bun, Astro and AI. Java is my programming language of choice, but I adapt easily to diverse technology environments, including infrastructure and front and backend development. I am committed to continuous learning, closely following the latest technological innovations. I am honest, friendly and empathetic, and value collaboration and building relationships of trust and mutual respect.",
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
        inditex: { start: "2025-07-01" },
      },
      items: [
        {
          title: "Freelance Backend Developer",
          subtitle: "From 06/2023 to current - {freelance} - Remote work",
          desc: `- UOC (01/2025 - Current - {uoc}): Developing software of an AWS infrastructure using AWS Lambdas and cloud native clusters.
- BBVA (01/2025-07/2025 - 7 months): Implemented backend microservice functionalities to manage user and product onboarding in an economic transactions project, ensuring scalability and reliability.
- Comunidad de Madrid (01/2025-06/2024 - 6 months): Analyzed requirements for a Comunidad de Madrid project, designing and developing the database, managing integration with third-party APIs, and collaborating with the front-end team to ensure optimal data management and visualization.
- ING (06/2023-11/2024 - 1 year and 5 months): Involved in the development and maintenance of multiple microservices with DDD and hexagonal architecture that support the main public-facing application using Java 8-17, Spring Boot and Kafka.
- Indra S.A. (10/2024-12/2024 - 2 months): Fixed bugs on the main insurance project and implemented unit tests for services using Java 8-11, Spring Boot and JUnit.
- WorldRemit UK (01/2024-06/2024 - 6 months): Focused on third-party payment integrations; developed scalable reactive applications using Java 17, Spring Boot, WebFlux and gRPC.`,
        },
        {
          title: "Senior Backend Developer",
          subtitle: "From 07/2025 to current at VirtualCave S.L. - {inditex} - Remote work",
          desc: "- Inditex (07/2025 - Current - {inditex}): Responsible for developing event-driven microservices and integration flows, leveraging Kafka and gRPC. Applied clean architecture and DDD to ensure maintainability of high-performance applications while improving the Inditex stock source and implementing new features.",
        },
        {
          title: "Programmer Analyst and DevOps Engineer",
          subtitle: "From 02/2023 to 11/2023 at RealNaut S.L. - 9 months - Remote work",
          desc: "Developed and deployed web and mobile applications using technologies such as Terraform, Flux, Tekton, GitHub Actions, AWS, Google Cloud and Azure to bring automation, continuous integration and deliver quality software.",
        },
        {
          title: "Tech Lead and Full Stack Developer/DevOps",
          subtitle: "From 06/2022 to 03/2023 at Trace Logistics S.L. - 10 months - Remote work",
          desc: "Led a team of technicians developing applications using new technologies and implemented microservices architecture and DevOps services. Conducted trainings for the whole department every two weeks and advanced technical trainings for my team on the technologies used.",
        },
        {
          title: "Full Stack Analyst and DevOps",
          subtitle: "From 11/2021 to 07/2022 at Indra S.A. - 8 months - Remote work",
          desc: "Worked on an internal banking project primarily in a backend role with Spring/Java developing REST APIs with microservices architecture using agile methodologies and maintaining the environment with DevOps tools. Provided onboarding for new team members.",
        },
        {
          title: "Full Stack Developer",
          subtitle: "From 07/2020 to 10/2021 at Programacion Integral S.A. - 1 year and 5 months - Lleida, Catalonia, Spain",
          desc: "Designed UI, implemented features, customized the software for third-party companies and provided technical support to clients of an enterprise resource planning solution for HR, accounting, stock management and web e-commerce. Led onboarding for new hires.",
        },
        {
          title: "Programmer Internship",
          subtitle: "From 01/2020 to 03/2020 at JustDigital S.L. - 3 months - Lleida, Catalonia, Spain",
          desc: "Learned about the full-stack role by implementing functionalities and fixing errors using Angular with TypeScript on the frontend and Spring with Java and Kotlin on the backend.",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          title: "Software engineering",
          subtitle: "2020 to Currently at UOC, Barcelona, Spain (remote)",
        },
        {
          title: "CFGS Cross-platform application development",
          subtitle: "2018 to 2020 at IES Caparrella, Lleida, Spain",
        },
        {
          title: "CFGM Microcomputer systems and networks",
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
        { name: "English", level: "Advanced level" },
        { name: "Portuguese", level: "Low level" },
      ],
    },
    certifications: {
      title: "Certifications",
      items: baseCertifications,
    },
    skills: {
      title: "Skills",
      techs: baseSkills,
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
            ? "Aplicación backend desarrollada con Python y FastAPI"
            : project.title === "SimulApp"
              ? "Aplicación web de SimulApp."
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
        "Apasionado por el desarrollo tecnológico, me dedico a crear y mejorar soluciones de software. En mi tiempo libre desarrollo aplicaciones, diseño sitios web y reparo ordenadores. Me mantengo a la vanguardia de tecnologías emergentes como Bun, Astro y la IA. Java es mi lenguaje de programación preferido, pero me adapto con facilidad a entornos tecnológicos diversos, incluyendo infraestructura y desarrollo tanto front como backend. Estoy comprometido con el aprendizaje continuo, siguiendo de cerca las últimas innovaciones tecnológicas. Soy honesto, cercano y empático, y valoro la colaboración y la construcción de relaciones basadas en la confianza y el respeto mutuo.",
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
        inditex: { start: "2025-07-01" },
      },
      items: [
        {
          title: "Desarrollador Backend Freelance",
          subtitle: "Desde 06/2023 hasta la actualidad - {freelance} - Trabajo remoto",
          desc: `- UOC (01/2025 - Actualidad - {uoc}): Desarrollo software sobre una infraestructura AWS utilizando Lambdas y entornos cloud native.
- BBVA (01/2025-07/2025 - 7 meses): Implementación de funcionalidades en microservicios backend para la gestión de altas de usuarios y productos en un proyecto de transacciones económicas, garantizando escalabilidad y fiabilidad.
- Comunidad de Madrid (01/2025-06/2024 - 6 meses): Análisis de requisitos, diseño y desarrollo de base de datos, integración con APIs de terceros y colaboración con el equipo front-end para optimizar la gestión y visualización de datos.
- ING (06/2023-11/2024 - 1 año y 5 meses): Desarrollo y mantenimiento de microservicios basados en DDD y arquitectura hexagonal que soportan la aplicación pública principal usando Java 8-17, Spring Boot y Kafka.
- Indra S.A. (10/2024-12/2024 - 2 meses): Corrección de incidencias en el proyecto principal de seguros e implantación de tests unitarios con Java 8-11, Spring Boot y JUnit.
- WorldRemit UK (01/2024-06/2024 - 6 meses): Integración de pagos con terceros; comunicación diaria en inglés. Desarrollo de aplicaciones reactivas escalables con Java 17, Spring Boot, WebFlux y gRPC.`,
        },
        {
          title: "Desarrollador Backend Senior",
          subtitle: "Desde 07/2025 hasta la actualidad en VirtualCave S.L. - {inditex} - Trabajo remoto",
          desc: "- Inditex (07/2025 - Current - {inditex}): Responsable del desarrollo de microservicios orientados a eventos y flujos de integración utilizando Kafka y gRPC. Aplicación de arquitectura limpia y DDD para garantizar el mantenimiento de aplicaciones de alto rendimiento mejorando la fuente de stock de Inditex e incorporando nuevas funcionalidades.",
        },
        {
          title: "Analista Programador y DevOps",
          subtitle: "De 02/2023 a 11/2023 en RealNaut S.L. - 9 meses - Trabajo remoto",
          desc: "Desarrollo y despliegue de aplicaciones web y móviles empleando Terraform, Flux, Tekton, GitHub Actions, AWS, Google Cloud y Azure para automatizar procesos, integrar continuamente y entregar software de calidad.",
        },
        {
          title: "Tech Lead y Desarrollador Full Stack/DevOps",
          subtitle: "De 06/2022 a 03/2023 en Trace Logistics S.L. - 10 meses - Trabajo remoto",
          desc: "Lideré un equipo técnico desarrollando aplicaciones con nuevas tecnologías e implanté arquitectura de microservicios y servicios DevOps. Impartí formaciones quincenales al departamento y sesiones técnicas avanzadas a mi equipo sobre las tecnologías utilizadas.",
        },
        {
          title: "Analista Full Stack y DevOps",
          subtitle: "De 11/2021 a 07/2022 en Indra S.A. - 8 meses - Trabajo remoto",
          desc: "Participación en un proyecto bancario interno principalmente en rol backend con Spring/Java desarrollando APIs REST bajo arquitectura de microservicios, aplicando metodologías ágiles y manteniendo el entorno con herramientas DevOps. Responsable de la formación inicial de nuevas incorporaciones.",
        },
        {
          title: "Desarrollador Full Stack",
          subtitle: "De 07/2020 a 10/2021 en Programacion Integral S.A. - 1 año y 5 meses - Lleida, Cataluña, España",
          desc: "Diseño de interfaces, implementación de funcionalidades, personalización de software para terceras empresas y soporte técnico a los clientes de un ERP empresarial para RRHH, contabilidad, stock y e-commerce integrado. Responsable del onboarding de nuevas incorporaciones.",
        },
        {
          title: "Programador en prácticas",
          subtitle: "De 01/2020 a 03/2020 en JustDigital S.L. - 3 meses - Lleida, Cataluña, España",
          desc: "Aprendizaje del rol full-stack implementando funcionalidades y resolviendo incidencias con Angular y TypeScript en el frontend y Spring con Java y Kotlin en el backend.",
        },
      ],
    },
    education: {
      title: "Formación",
      items: [
        {
          title: "Ingeniería Informática",
          subtitle: "2020 - Actualidad en la UOC, Barcelona, España (remoto)",
        },
        {
          title: "CFGS Desarrollo de aplicaciones multiplataforma",
          subtitle: "2018 - 2020 en IES Caparrella, Lleida, España",
        },
        {
          title: "CFGM Sistemas microinformáticos y redes",
          subtitle: "2010 - 2012 en IES Caparrella, Lleida, España",
        },
        {
          title: "Educación Secundaria Obligatoria",
          subtitle: "2006 - 2010 en El Carme, Lleida, España",
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
        if (cert.label === "Docker, from begginer to expert") {
          return { ...cert, label: "Docker, de principiante a experto" };
        }
        if (cert.label === "Reactive programming") {
          return { ...cert, label: "Programación reactiva" };
        }
        if (cert.label === "Machine Learning Data Science with Python") {
          return { ...cert, label: "Machine Learning y Ciencia de Datos con Python" };
        }
        if (cert.label === "Microservices Spring cloud and Angular FullStack") {
          return {
            ...cert,
            label: "Microservicios con Spring Cloud y Angular FullStack",
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
            ? "Aplicació backend desenvolupada amb Python i FastAPI"
            : project.title === "SimulApp"
              ? "Aplicació web de SimulApp."
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
        "Apassionat pel desenvolupament tecnològic, em dedico a crear i millorar solucions de programari. En el meu temps lliure desenvolupo aplicacions, dissenyo llocs web i reparo ordinadors. Em mantinc a l'avantguarda de tecnologies emergents com Bun, Astro i la IA. Java és el meu llenguatge de programació preferit, però m'adapto fàcilment a entorns tecnològics diversos, incloent-hi infraestructura i desenvolupament tant de front com de backend. Estic compromès amb l'aprenentatge continu, seguint de prop les darreres innovacions tecnològiques. Sóc honest, proper i empàtic, i valoro la col·laboració i la creació de relacions de confiança i respecte mutu.",
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
        inditex: { start: "2025-07-01" },
      },
      items: [
        {
          title: "Desenvolupador Backend Freelance",
          subtitle: "Des de 06/2023 fins a l'actualitat - {freelance} - Treball remot",
          desc: `- UOC (01/2025 - Actualitat - {uoc}): Desenvolupament de programari sobre una infraestructura AWS utilitzant Lambdas i entorns cloud native.
- BBVA (01/2025-07/2025 - 7 mesos): Implementació de funcionalitats en microserveis backend per a la gestió d'altes d'usuaris i productes en un projecte de transaccions econòmiques, garantint escalabilitat i fiabilitat.
- Comunitat de Madrid (01/2025-06/2024 - 6 mesos): Anàlisi de requisits, disseny i desenvolupament de la base de dades, integració amb APIs de tercers i col·laboració amb l'equip frontend per optimitzar la gestió i visualització de dades.
- ING (06/2023-11/2024 - 1 any i 5 mesos): Desenvolupament i manteniment de microserveis basats en DDD i arquitectura hexagonal que donen suport a l'aplicació pública principal utilitzant Java 8-17, Spring Boot i Kafka.
- Indra S.A. (10/2024-12/2024 - 2 mesos): Correcció d'incidències en el projecte principal d'assegurances i implantació de proves unitàries amb Java 8-11, Spring Boot i JUnit.
- WorldRemit UK (01/2024-06/2024 - 6 mesos): Integració de pagaments amb tercers; desenvolupament d'aplicacions reactives escalables amb Java 17, Spring Boot, WebFlux i gRPC.`,
        },
        {
          title: "Desenvolupador Backend Sènior",
          subtitle: "Des de 07/2025 fins a l'actualitat a VirtualCave S.L. - {inditex} - Treball remot",
          desc: "- Inditex (07/2025 - Actualitat - {inditex}): Responsable del desenvolupament de microserveis orientats a esdeveniments i fluxos d'integració utilitzant Kafka i gRPC. Aplicació d'arquitectura neta i DDD per garantir el manteniment d'aplicacions d'alt rendiment, millorant la font d'estoc d'Inditex i incorporant noves funcionalitats.",
        },
        {
          title: "Analista Programador i Enginyer DevOps",
          subtitle: "De 02/2023 a 11/2023 a RealNaut S.L. - 9 mesos - Treball remot",
          desc: "Desenvolupament i desplegament d'aplicacions web i mòbils utilitzant Terraform, Flux, Tekton, GitHub Actions, AWS, Google Cloud i Azure per automatitzar processos, integrar contínuament i lliurar programari de qualitat.",
        },
        {
          title: "Tech Lead i Desenvolupador Full Stack/DevOps",
          subtitle: "De 06/2022 a 03/2023 a Trace Logistics S.L. - 10 mesos - Treball remot",
          desc: "Vaig liderar un equip tècnic desenvolupant aplicacions amb noves tecnologies i vaig implantar arquitectura de microserveis i serveis DevOps. Vaig impartir formacions quinzenals al departament i sessions tècniques avançades al meu equip sobre les tecnologies utilitzades.",
        },
        {
          title: "Analista Full Stack i DevOps",
          subtitle: "De 11/2021 a 07/2022 a Indra S.A. - 8 mesos - Treball remot",
          desc: "Participació en un projecte bancari intern principalment en rol backend amb Spring/Java desenvolupant APIs REST amb arquitectura de microserveis, aplicant metodologies àgils i mantenint l'entorn amb eines DevOps. Responsable de la formació inicial de noves incorporacions.",
        },
        {
          title: "Desenvolupador Full Stack",
          subtitle: "De 07/2020 a 10/2021 a Programacion Integral S.A. - 1 any i 5 mesos - Lleida, Catalunya, Espanya",
          desc: "Disseny d'interfícies, implementació de funcionalitats, personalització del programari per a empreses terceres i suport tècnic als clients d'un ERP empresarial per a RRHH, comptabilitat, estoc i e-commerce integrat. Responsable de l'onboarding de noves incorporacions.",
        },
        {
          title: "Programador en pràctiques",
          subtitle: "De 01/2020 a 03/2020 a JustDigital S.L. - 3 mesos - Lleida, Catalunya, Espanya",
          desc: "Aprenentatge del rol full-stack implementant funcionalitats i resolent incidències amb Angular i TypeScript al frontend i Spring amb Java i Kotlin al backend.",
        },
      ],
    },
    education: {
      title: "Formació",
      items: [
        {
          title: "Enginyeria Informàtica",
          subtitle: "2020 - Actualitat a la UOC, Barcelona, Espanya (remot)",
        },
        {
          title: "CFGS Desenvolupament d'aplicacions multiplataforma",
          subtitle: "2018 - 2020 a l'IES Caparrella, Lleida, Espanya",
        },
        {
          title: "CFGM Sistemes microinformàtics i xarxes",
          subtitle: "2010 - 2012 a l'IES Caparrella, Lleida, Espanya",
        },
        {
          title: "Educació Secundària Obligatòria",
          subtitle: "2006 - 2010 a El Carme, Lleida, Espanya",
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
        if (cert.label === "Docker, from begginer to expert") {
          return { ...cert, label: "Docker, de principiant a expert" };
        }
        if (cert.label === "Reactive programming") {
          return { ...cert, label: "Programació reactiva" };
        }
        if (cert.label === "Machine Learning Data Science with Python") {
          return { ...cert, label: "Machine Learning i Ciència de Dades amb Python" };
        }
        if (cert.label === "Microservices Spring cloud and Angular FullStack") {
          return {
            ...cert,
            label: "Microserveis amb Spring Cloud i Angular FullStack",
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
