import NavItem from "../../components/NavItem";

const es = {
  navigationData: [
    { id: 0, name: "Inicio", path: "/" },
    { id: 1, name: <NavItem item="Nosotros" />, path: "#about" },
    { id: 2, name: <NavItem item="Servicios" />, path: "#services" },
    { id: 3, name: <NavItem item="Portfolio" />, path: "#portfolio" },
    { id: 4, name: <NavItem item="Clientes" />, path: "#clients" },
    { id: 5, name: <NavItem item="Carreras" />, path: "#careers" },
    // { id: 6, name: "Referral Program", path: "/referral" },
    // { id: 7, name: "Nearshore Software Development", path: "/nearshore-software-development" },
    { id: 8, name: "Contacto", path: "#contact" },
  ],
  intro: {
    title: "Somos una compañía dedicada a proveer soluciones tecnológicas.",
    btnWork: "Trabajemos juntos",
    btnVideo: "Intro Video",
  },
  aboutUs: {
    srcImage: "sobre-nosotros",
    who: "¿Quiénes somos? ",
    whoDesc:
      "Somos una compañía que provee soluciones tecnológicas a nuestros clientes, optimizando sus procesos y permitiéndoles de esta manera alcanzar su máximo potencial.",
    where: "¿Dónde?",
    whereDesc:
      "Nuestras oficinas están ubicadas en Corrientes, una hermosa ciudad en el nordeste de Argentina.",
    how: "¿Qué hacemos?",
    howDesc:
      "Ofrecemos soluciones tecnológicas de alta calidad para nuestros clientes usando metodologías probadas, buenas prácticas. Nuestro staff está formado por desarrolladores y diseñadores muy talentosos.",
  },
  whyUs: {
    srcImage: "why",
    timeZone: "Zona horaria",
    timeZoneDesc: "Estamos a una hora de distancia de la franja horaria este.",
    timeZoneImg: "clock",
    cost: "Costos convenientes",
    costDesc: "Precios excepcionales a comparación con nuestros competidores.",
    costImg: "pig",
    talent: "Talento tecnológico",
    talentDesc:
      "Nuestro equipo está conformado por programadores altamente calificados en diferentes plataformas tecnológicas.",
    talentImg: "comp",
    english: "Proficiencia en Inglés",
    englishDesc:
      "Argentina es el país con el más alto nivel de inglés en Latinoamérica.",
    englishImg: "talk",
  },
  services: {
    title: "Servicios",
    subtitleText1:
      "En Devlights, entendemos realmente la idea de que no hay dos compañías iguales, y que cada una tiene sus propias necesidades únicas.",
    subtitleText2:
      "Esa es la razón por la cual nuestra empresa también ofrece diferentes servicios adaptados a los requisitos específicos del cliente.",
    btnContact: "Contáctanos",
    serviceCards: [
      {
        id: 1,
        imgSource: "team",
        title: "Aumento de personal",
        description:
          "¿Reclutar miembros especializados para su equipo es un proceso agotador y lento? Nuestro equipo de outsourcing puede ayudarlo proporcionando recursos humanos especializados para satisfacer sus necesidades. Contamos con una amplia variedad de perfiles profesionales calificados en nuestros registros.",
      },
      {
        id: 2,
        imgSource: "phone",
        title: "Desarrollo Móvil",
        description:
          "¿Quieres una aplicación móvil? Desarrollamos y diseñamos aplicaciones multiplataforma que son visualmente atractivas, siguiendo las últimas tendencias en UX / UI.",
      },
      {
        id: 3,
        imgSource: "code",
        title: "Desarrollo de Software",
        description:
          "Desarrollamos software empresarial dirigido a diferentes segmentos y sectores empresariales basados en plataformas tecnológicas. Además, ofrecemos una amplia gama de herramientas de software para proporcionar velocidad en la obtención de valor agregado.",
      },
      {
        id: 4,
        imgSource: "testing",
        title: "Testing",
        description:
          "Todos cometemos errores. Algunos de esos errores no son importantes, pero otros son peligrosos o caros. Nuestros productos de software están construidos bajo las condiciones más rigurosas y probados bajo el control más meticuloso.",
      },
      {
        id: 5,
        imgSource: "compu",
        title: "Desarrollo Web",
        description:
          "¿Está pensando en llevar su proyecto / negocio a la web? Nuestro equipo desarrolla y diseña sitios web multiplataforma que son visualmente atractivos, siguiendo las últimas tendencias en UX / UI.",
      },
      {
        id: 6,
        imgSource: "ux",
        title: "Diseño UX/UI",
        description:
          "¿Desea actualizar el aspecto y la funcionalidad de su sitio / aplicación? Nuestro equipo altamente calificado de diseñadores y desarrolladores puede brindarle a su proyecto una experiencia de usuario fluida y atractiva que aumentará el tráfico, el estilo y el rendimiento para llegar a más usuarios.",
      },
    ],
  },
  projectsBanner: {
    projects: "PROYECTOS",
    satisfaction: "SATISFACCIÓN DE CLIENTES",
    years: "AÑOS EN EL NEGOCIO",
  },
  portfolio: {
    title: "Portfolio",
    all: 'todo',
    tabs: [
      { id: 1, name: "todo", category: 'all' },
      { id: 2, name: "mobile", category: 'mobile' },
      { id: 3, name: "web", category: 'web' },
    ],
    items: [
      { id: 1, imageName: "creative-humans", name: "Creative Humans", description: "web development", link: "http://devlights.com/portfolio/creativehumans", category: "web" },
      { id: 2, imageName: "ceo", name: "CEO", description: "web development and stock control", link: "http://devlights.com/portfolio/ceo", category: "web" },
      { id: 3, imageName: "sas2-1", name: "SAS", description: "system devlopment", link: "http://devlights.com/portfolio/sas", category: "web" },
      { id: 4, imageName: "doctoronline", name: "Doctor Responde", description: "app development", link: "http://devlights.com/portfolio/dr-online", category: "mobile" },
      { id: 5, imageName: "livet", name: "Livet", description: "app development", link: "http://devlights.com/portfolio/livet", category: "mobile" },
      { id: 6, imageName: "ocio", name: "Tiempo de OCIO", description: "app development", link: "http://devlights.com/portfolio/tiempodeocio", category: "mobile" },
    ],
  },
  technologies: {
    title: "Tecnologías",
    subtitleText1:
      "En Devlights, combinamos las ultimas tecnologías y las mejores prácticas proveyendo productos excepcionales.",
    subtitleText2:
      "Nuestro equipo es capaz de construir y diseñar la solución perfecta para cada cliente utilizando las últimas tecnologías y siguiendo los más altos estándares en la industria del software.",
    btnProjects: "Nuestros Proyectos",
    srcImage: "tech-img",
  },
  clutch: {
    subtitleText1: "Clutch nombra a Devlights como el principal socio de aumento de personal de Argentina para 2022",
    subtitleText2: "¡Descubre por qué nos otorgaron la puntuación más alta!",
    btnClutch: "Leer más",
    srcImage: "clutch_section_bn",
    srcImateTitle: "cluch-section-title",
  },
  clients: {
    title: "Clientes",
    btnMore: "Ver más",
  },
  careers: {
    title: "Carreras",
    subtitleText1: "En Devlights estamos en búsqueda constante de nuevos talentos, ¿Tienes lo que se necesita?",
    subtitleText2: "En esta sección podrás aplicar a nuestras últimas busquedas laborales y chequear sus requerimientos, para mas información haz click en el boton de abajo. ",
    srcImage: "tech-img",
    btnCareers: "Mirá las posiciones disponibles",
    noJobs: "Por el momento no hay trabajos disponibles"
  },
  testimonials: {
    clientsText: "Lo que dicen nuestros clientes",
    clients: [
      {
        clientId: "1",
        clientName: "Roberto Maciel", company: "Liber", role: "Director", img: 'roberto',
        opinion: "El equipo de Devlights ha sido fundamental en el lanzamiento de nuestra primer App. Han cumplido con los plazos y las exigencias que hemos demandado, muchas veces haciendo más de lo acordado y mostrándose proactivos en cada fase del proceso. La comunicación fue fluida en todo momento. Esta experiencia significó un gran paso para nuestro equipo profesional, agradecemos que nos hayan acompañado!"
      },
      {
        clientId: "2",
        clientName: "Ross Forsyth", company: "Human Design", role: "Director Of Technology", img: 'ross',
        opinion: "Devlights es un gran equipo con el cual trabajar, no solo tienen las habilidades para realizar el trabajo, sino que también se comunican de manera efectiva a lo largo de todo el proyecto. ¡Su equipo era exactamente lo que necesitaba!"
      },
      {
        clientId: "3",
        clientName: "Darlene Liebman", company: "Creative Humans", role: "Founder", img: 'darlene',
        opinion: "Trabajar con el equipo de Devlights ha sido una gran experiencia. El equipo tiene los conocimientos, responde y son muy amables. Realmente los recomiendo para cualquier tipo de proyecto ya sea grande o pequeño."
      },
      {
        clientId: "4",
        clientName: "Lindsay Insco", company: "Millenium Digital Technologies", role: "Lead Developer", img: 'lindsay',
        opinion: "El equipo de Devlights ha sido de gran ayuda, los considero casi familia. Amplia experiencia y conocimientos técnicos, siempre tienen el personal adecuado para encarar cualquier tipo de proyecto. Incluirlos en proyectos a largo plazo fue una excelente decisión, no lo habría hecho de otra manera."
      },
    ]
  },
  footer: {
    title: "Contactanos",
    address1: "Corrientes, Argentina. 1250 Junin 2do Piso",
    address2: "Boulder, Colorado United States 1355 Bear Mountain Drive.",
    phone1: "+54 (0379) 4230003",
    phone2: "+1 (303) 325-30853",
    email1: "contacto@devlights.com",
    email2: "robert.hughes@devlights.com ",
    links: {
      links: "LINKS",
      aboutUs: "Nosotros",
      nearshore: "Servicios de desarrollo nearshore",
      referral: "Programa de referidos",
      services: "Servicios",
      clients: "Clientes",
      home: "Inicio",
      portfolio: "Portfolio",
      bootcamps: "Bootcamps",
    },
    formTitle: "Conéctate con nosotros",
    formName: "Nombre*",
    formEmail: "E-mail*",
    formMessage: "Escriba su mensaje*",
    formBtnSend: "Enviar Mensaje",
  },
  projects: {
    creativeHumans: {
      introduction: {
        title: "Sobre Creative Humans",
        introText1:
          "En la actualidad la producción de contenido multimedia y la contratación de profesionales especializados en esta área es un problema común tanto como para grandes empresas o startups.",
        introText2:
          "CREATIVE HUMANS confío en DEVLIGHTS para crear una plataforma online que conecta a marcas y empresas con los mejores profesionales del ámbito producción audiovisual para que se encarguen de producir su material audiovisual.",
        introText3:
          "El principal objetivo de esta plataforma es conectar a marcas y compañías con equipos o profesionales que puedan satisfacer las necesidades de su negocio y se ajustan a su estilo y presupuesto.",
      },
      body: {
        featureText1:
          "Creative humans es una plataforma online que le ayuda a diferentes compañías y negocios a contar su historia conectando a las mismas con diferentes profesionales del rubro de la producción audiovisual para que produzcan su material.",
        featureText2:
          "Encontrá en nuestra plataforma a nuevos talentos o profesionales especializados en las diferentes áreas y estilos del mundo de la producción audiovisual.",
        featureText3:
          "Nuestros filtros te permitirán buscar de acuerdo a tu presupuesto, estilo, ubicación y mucho más.",
        featureText4:
          "Todos los contratos, NDA's y pagos se realizan a través de nuestra plataforma logrando que contratar un equipo de producción sea una tarea sencilla y rápida.",
      },
    },
    ceo: {
      introduction: {
        title: "¿Que es CEO, que hace ?",
        introText1:
          "Las actividades comerciales modernas están tomando un nuevo rumbo y las empresas que no siguen este rumbo son dejadas atrás.",
        introText2:
          "DEVLIGHTS ha desarrollado CEO un sistema de gestión de ventas que lo ayudará a solucionar sus problemas y su negocio podra crecer de manera continua. CEO es un sistema web que tiene la flexibilidad de trabajar online y offline (sin conexión a internet en una red local).",
        introText3:
          "Con CEO podrá a controlar sus ventas, maximizar sus ganancias y le brindara la información necesaria para la toma de decisiones. CEO es un sistema intuitivo, confiable y fácil de usar. Lo ayudara a agilizar sus actividades de manera eficiente y rápida.",
      },
      body: {
        title: "Características principales",
        featureText1:
          "Le ayudará a administrar sus productos por marca y tipo de productos",
        featureText2: "Le permitirá administrar sus proveedores.",
        featureText3:
          "Le permitirá definir diferentes listas de precios para sus productos.",
        featureText4:
          "Podrá crear usuarios y administrar roles y permisos de acuerdo a sus necesidades.",
        featureText5:
          "Podrá controlar el stock de sus productos en el sistema de manera que refleje su stock real.",
        featureText6:
          "Le permitirá obtener reportes contables y agruparlos por categorías.",
        featureText7:
          "Podrá realizar presupuestos y compartirlos con sus clientes de manera inmediata.",
      },
    },
    sas: {
      introduction: {
        title: "La idea detrás de SAS",
        introText1:
          "Impulsados por la de idea de modernizar a las entidades gubernamentales a través del uso de tecnología, el gobierno de Corrientes confío en devlights la misión de crear una herramienta capaz de simplificar y agilizar trámites para emprendedores y el público en general.",
        introText2:
          "Para ayudar al gobierno de Corrientes, desarrollamos SAS, una herramienta que no solo permitirá ahorrar tiempo a los usuarios sino que también convertirá engorrosos trámites en procesos ágiles y sencillos",
      },
      body: {
        title: "Beneficios de SAS",
        featureTitle1: "Todos los tramites desde la comodidad de tu casa.",
        featureText1: "Agenda citas, solicita información y agenda turnos.",
        featureTitle2:
          "Información importante para entidades civiles y ciudadanos a un click de distancia.",
        featureText2:
          "Asesoramiento, Obligaciones Anuales, regulaciones y marcos legales",
        featureTitle3: "Más beneficios para los usuarios",
        featureText3:
          "Conozca la lista de organismos autorizados por el IGJ, información sobre requerimientos, tasas, y guías de trámites.",
        featureTitle4: " Información útil",
        featureText4:
          "Evite visitas. Conozca los requisitos para presentar correctamente los trámites. Normativa. Preguntas frecuentes.",
      },
    },
    doctorResponde: {
      title: "Dr Responde",
      introduction: {
        title: "La idea detrás de Dr. Responde",
        introText1:
          "Para evitar y canalizar las consultas telefónicas vía Whatsapp, el cliente se acerco con la idea de crear una aplicación móvil que le permita a los usuarios contactarse y consultar a profesionales médicos a través de la misma. Con este objetivo común DEVLIGHTS decidió desarrollar un sistema de consultas médicas online.",
        introText2:
          "Dr Responde es más que una Aplicación móvil, tiene como núcleo una aplicación web que permite a los administradores realizar tareas como crear usuarios , editarlos, eliminarlos y asignar diferentes roles a cada usuario.",
      },
      body: {
        title: "Funcionalidades",
        featureDoctors: "Los usuarios registrados como doctores podrán:",
        featureText1: "Definir horas en servicio.",
        featureText2: "Modificar la información de su perfil.",
        featureText3: "Recibir pagos a través de mercado pago.",
        featurePatients: "Los usuarios registrados como pacientes podrán:",
        featureText4: "Completar y editar la información de su perfil.",
        featureText5: "Chatear en vivo con el especialista seleccionado",
        featureText6:
          "Enviar y recibir documentos e imágenes a través del chat.",
      },
    },
    livet: {
      introduction: {
        title: "¿Conoces Livet?",
        introText1:
          "Los amantes de las mascotas siempre buscamos lo mejor para nuestras mascotas",
        introText2:
          "pero a veces darle el mejor alimento o mejores juguetes no es suficiente.",
        introText3:
          "Actualmente nuestras mascotas son consideradas parte de nuestra familia. Nos preguntamos",
        introText4:
          "“¿Cual es la mejor manera de darle a nuestras mascotas el mejor cuidado?”.",
        introText5: "Para responder esta pregunta decidimos desarrollar Livet,",
        introText6:
          "esta es una aplicación móvil que te permite llevar registro y seguir el historial medico de tus mascotas.",
        introText7:
          "DEVLIGHTS decidió unir fuerzas con profesionales de la salud para diseñar y desarrollar una aplicación que no solo sea fácil de usar y atractiva sino, que tenga funcionalidades que serán de gran utilidad para los amantes de los animales.",
        belowImageText: "La forma más fácil de cuidar a tu mascota",
      },
      body: {
        featureText1:
          "Livet te ofrece un set de herramientas para llevar registro de la historia medica de tu mascota",
        featureText2:
          "Intuitiva y fácil de usar, accede a toda la información de tu mascota de la manera más conveniente",
        featureText3:
          "Podes crear todos los perfiles que quieras para tus mascotas, agregar información, subir fotos, etc.",
      },
    },
    ocio: {
      introduction: {
        about: "¿Que es Tiempo de ocio?",
        introText1:
          "Todo el tiempo surgen nuevos eventos ya sean culturales, artísticos o de entretenimiento, pero no siempre nos enteramos a tiempo de los mismos, no te vuelvas a perder de un evento, y mantente actualizado con los próximos eventos usando TIEMPO DE OCIO. ",
        introText2:
          " TIEMPO DE OCIO es una app que trabaja como una agenda de eventos virtual en la que puedes recibir información sobre eventos, lugares para visitar o la cartelera de los cines locales.",
      },
      body: {
        featureText1:
          "Recibí y compartí información sobre eventos, lugares de interes y todo tipo de actividades",
        featureText2:
          "Encuentra eventos y lugares para divertirte alrededor de Chaco, Corrientes y Asunción (PY).",
        featureText3:
          "Toda la información sobre lugares de esparcimiento y eventos al alcance de tus dedos.",
      },
      btnAndroid: "Descargala para Android!",
      btnIos: "Descargala para Ios!",
    },
    technologies: "TECNOLOGíAS UTILIZADAS EN ESTE PROYECTO",
    btnCheck: "Visita la web",
  },
  clutchLanding: {
    headerImage: "clutch-landing-hero",
    headerTitle:
      "Clutch nombra a Devlights como el principal socio de aumento de personal de Argentina para 2022",
    heroParagraph1:
      "Llenar su equipo con profesionales talentosos y dedicados no es tarea fácil. Es por eso que en Devlights nos esforzamos por ayudarlo con sus proyectos y necesidades únicas a través de nuestras amplias soluciones de desarrollo y aumento del personal de IT. Con sede en Corrientes, Argentina, permitimos que nuestros clientes se concentren en sus operaciones mientras brindamos resultados de desarrollo precisos.",
    heroParagraph2:
      "Debido a nuestro comprobado historial, recientemente obtuvimos un galardón de un recurso confiable de la industria. Durante los premios anuales Clutch Leaders Awards, Devlights obtuvo oficialmente un lugar en la lista de innovadores de 2022",
    heroParagraph3:
      "¡Nuestro equipo fue reconocido como uno de los principales socios de aumento de personal de Argentina!",
    aboutClutch:
      "Clutch es una plataforma de calificación y revisión B2B diseñada para ayudar a los navegadores a conectarse con los proveedores de soluciones adecuados para sus necesidades específicas. Cada año, el sitio realiza un ciclo de premios para celebrar las mejores y más brillantes empresas B2B de diferentes industrias y categorías en todo el mundo. Para ser reconocidas como líderes, las empresas deben demostrar compromiso sin igual, excelencia increíble y liderazgo intelectual.",
    reviewsTitle: "Reseñas de clientes",
    reviewsParagraph:
      "Las revisiones de los clientes y el éxito se encuentran entre las variables que se toman en cuenta para la consolidación de estos premios. No hace falta decir que desbloqueamos este emocionante hito gracias a nuestros socios. ¡Muchas gracias a todos los que colaboraron para que este reconocimiento fuera posible! Estamos genuinamente agradecidos por nuestros clientes, especialmente por aquellos que gentilmente nos calificaron en Clutch. El apoyo y la confianza que tienen en el equipo de Devlights vale más que cualquier otra cosa para nosotros.",
    reviewsParagraphStrong: "¡Estamos orgullosos de ser su socio de confianza!",
    movingForwardTitle: "Avanzando",
    movingForwardParagraph:
      "Estamos ansiosos por crecer juenta a nuestros clientes y conquistar más desafíos.",
    movingForwardParagraphStrong:
      "Si también está interesado en trabajar con nosotros, ¡no dude en comunicarse y realizar cualquier consulta que pueda tener! El equipo de Devlights se pondrá en contacto contigo lo antes posible.",
    clutch_Testimonials: {
      clients: [
        {
          clientId: "1",
          clientName: "",
          company: "Data Solutions Company",
          role: "Engineer",
          img: "",
          opinion:
            "Pudieron comprender nuestras necesidades y los requisitos que teníamos en mente.",
        },
        {
          clientId: "2",
          clientName: "Alejandro Berardi",
          company: "IAAER SAS",
          role: "Partner",
          img: "",
          opinion: "Estamos completamente satisfechos con los resultados.",
        },
        {
          clientId: "3",
          clientName: "Martin Ruiz Diaz",
          company: "Livet",
          role: "Founder",
          img: "",
          opinion:
            "Hemos tenido una excelente experiencia y superaron nuestras expectativas.",
        },
        {
          clientId: "4",
          clientName: "Norberto Antonio",
          company: "Public Health Insurance Company",
          role: "",
          img: "",
          opinion: "Los resultados han sido tremendamente positivos.",
        },
        {
          clientId: "5",
          clientName: "",
          company: "Emergency Training School",
          role: "Independent Contractor",
          img: "",
          opinion:
            "Lo que más me impresionó fue su disposición a escuchar y adaptarse.",
        },
        {
          clientId: "6",
          clientName: "",
          company: "Cybersecurity Firms",
          role: "Lead Developer",
          img: "",
          opinion:
            "Trabajamos bien juntos. Devlights siempre se aseguró de que las cosas se hicieran a tiempo.",
        },
        {
          clientId: "7",
          clientName: "Ruben Amadeo Capizzano",
          company: "Entravision",
          role: "Director of Technology & Product",
          img: "",
          opinion:
            "Estamos impresionados por lo clara y fácil que ha sido nuestra comunicación con ellos.",
        },
        {
          clientId: "8",
          clientName: "Rohit Gupta",
          company: "Behaviour Sense",
          role: "Co-Founder",
          img: "",
          opinion:
            "Cuando surgieron problemas, se solucionaron de manera colaborativa y pragmática.",
        },
        {
          clientId: "9",
          clientName: "Fernando Cores",
          company: "Bubble BPM",
          role: "CTO",
          img: "",
          opinion: "Nos gustó su flexibilidad y dedicación.",
        },
        {
          clientId: "10",
          clientName: "Matias Benitez",
          company: "TLV1",
          role: "Technical Director",
          img: "",
          opinion:
            "Nos impresionó el corto tiempo que tomó completar, cumpliendo con nuestras expectativas.",
        },
        {
          clientId: "11",
          clientName: "Mark Warren",
          company: "Proactive Technology Management",
          role: "Project Manager",
          img: "",
          opinion:
            "No tenemos planes de trabajar con ninguna otra compañía en este momento.",
        },
      ],
    },
  },
  nearshore_landing: {
    metaTitle: "Subcontratación de desarrollo de software | Devlights",
    metaName: "Descripción",
    metaContent: "Podemos proporcionar una fuente para cada tecnología disponible en el mercado. Ya sea que necesite desarrolladores de software, diseñadores, desarrolladores móviles o gerentes de proyectos, haremos todo lo posible para asegurarnos de que se cumplan sus requisitos y de que encuentre el talento que necesita para su equipo.",
    headerTitle: "Servicios de desarrollo de software Nearshore",
    headerSubTitle: "Conectamos a nuestros clientes con su producto",
    headerBtn: "Agenda una CITA GRATUITA",
    why_hirinus_section: {
      title: "Por qué contratar nuestros servicios",
      paragraph: "Podemos proporcionar una fuente para cada tecnología en el mercado. Ya sea que necesite desarrolladores de software, diseñadores, desarrolladores móviles o project managers, haremos todo lo posible para asegurarnos de que se cumplan sus requisitos y de que encuentre el talento que necesita para su equipo."
    },
    our_services_section: {
      title: "Nuestro servicio se destaca del resto.",
      cultural_fit_title: "Gran sintonia cultural y zona horaria similar.",
      cultural_fit_paragraph: "Buscamos personas con la capacidad de incorporarse fácilmente a tu equipo, las habilidades blandas son fundamentales para nosotros. Podemos formar un nuevo equipo para hacernos cargo de un proyecto existente o comenzar uno nuevo para próximos proyectos y estamos a solo una hora de la zona horaria del Este.",
      rates_title: "Tarifas excepcionales, transparencia y conveniencia",
      rates_paragraph: "Términos y condiciones de contrato claros, Devlights es capaz de proporcionar especialistas altamente calificados por solo una fracción del costo del talento local.",
      dependable_title: "Confiables, somos justo lo que nuestros clientes necesitan",
      dependable_paragraph: "Nos preocupamos por las relaciones a largo plazo con los clientes. Este es un valor central en Devlights. Nos esforzamos por crear relaciones sólidas y trabajar junto con nuestros clientes para ayudarlos a tener éxito a largo plazo."
    },
    partner_up_section: {
      title: "¡Asociémonos en su próximo proyecto!",
      paragraph: "Devlights se destaca del resto porque es capaz de ofrecer soluciones de desarrollo de software punta a punta a sus clientes. Contamos con un equipo calificado de profesionales totalmente dedicados a trabajar en los proyectos tecnológicos de nuestros clientes. Usted proporciona las especificaciones, nosotros proporcionamos una solución de software.",
      btn: "Cuéntanos más sobre tu proyecto"
    },
    how_does_it_work_section: {
      title: "¿Como funciona?",
      step_1: "Nos reunimos con el cliente para informarnos sobre su idea y trabajarla juntos.",
      step_2: "De nuestra bolsa de talentos, seleccionamos los perfiles que mejor se ajustan a los requisitos.",
      step_3: "Seleccionamos los mejores activos, para luego, alistarse para profundizar en los detalles y comenzar a trabajar en su proyecto."
    },
    get_in_touch_section: {
      title: "Conectamos a nuestros clientes con sus productos",
      paragraph: "En Devlights hacemos que las cosas sucedan. Nuestras soluciones de subcontratación brindan a los clientes acceso a un amplio grupo de talentos. Dotar del personal necesario para construir un equipo es esencial para el éxito de cualquier negocio, pero para ser eficiente se requiere dedicar recursos significativos al proceso. Sin embargo, a veces el presupuesto o los plazos son ajustados, o la empresa simplemente necesita un talento remoto a tiempo completo para realizar un trabajo específico. En este caso, el personal como servicio es el camino a seguir. Devlights es capaz de proporcionar proyectos de dotación de personal de IT a corto y largo plazo de especialistas altamente calificados, creados según sus especificaciones y por una fracción del costo.",
      form_title: "Pongamosnos en contacto.",
      form_btn: "Enviar Mensaje"
    },
    our_clients_section: {
      title: "Lo que nuestros clientes dicen de nosotros."
    },
    meet_the_team_section: "Conoce al equipo."
  }
};

export default es;
