import NavItem from "../../components/NavItem";

const en = {
  navigationData: [
    { id: 0, name: "Home", path: "/#" },
    { id: 1, name: "About us", path: "/#about" },
    { id: 2, name: "Services", path: "/#services" },
    { id: 3, name: "Portfolio", path: "/#portfolio" },
    { id: 4, name: "Clients", path: "/#clients" },
    { id: 5, name: "Careers", path: "/#careers" },
    { id: 6, name: "Contact Us", path: "/#footer" },
  ],
  intro: {
    title: "We are a company dedicated to provide technological solutions.",
    btnWork: "Let's Work Together",
    btnVideo: "Intro Video",
  },
  aboutUs: {
    srcImage: "about-extra-1",
    srcImageMobile:"AboutMobile",
    who: "Who?",
    whoDesc:
      "We are a company that provides technological solutions to our customers to enhance their potencial and achieve their goals.",
    where: "Where?",
    whereDesc:
      "Our headquarters are located in Corrientes, a beautiful city in northeast Argentina.",
    how: "How?",
    howDesc:
      "Offering top quality technological solutions for our clients using proven methodologies and best practices. Our staff is formed by some of the most talented developers and designers.",
  },
  whyUs: {
    srcImage: "why",
    srcImageMobile: "WhyUsMobile",
    timeZone: "Time zone",
    timeZoneDesc: "We're one hour away from East time.",
    timeZoneImg: "clock",
    cost: "Convenient cost",
    costDesc: "Outstanding rates compare to our competitors.",
    costImg: "pig",
    talent: "Tech talent",
    talentDesc: "We provide highly skilled programmers in different platforms.",
    talentImg: "comp",
    english: "English proficiency",
    englishDesc:
      "Argentina is considered the country with the highest English level in Latam.",
    englishImg: "talk",
  },
  services: {
    title: "Services",
    subtitleText1:
      "In Devlights, we truly understand the idea that there are no two companies alike, and that each one has its own unique needs.",
    subtitleText2:
      "That's the reason why our company also offers different services adapted to the client's specific requirements.",
    btnContact: "Talk with us",
    serviceCards: [
      {
        id: 1,
        imgSource: "team",
        title: "Staff augmentation",
        description:
          "Recruiting specialized members for your team is an exhausting and time-consuming process? Our outsourcing team can help you with that providing specialized human resources to satisfy your requirements. We count with a wide variety of qualified professional profiles in our records.",
      },
      {
        id: 2,
        imgSource: "phone",
        title: "Mobile development",
        description:
          "Want a Mobile App? We can develop and design cross platform Apps that are visually appealing, following the latest trends on UX/UI.",
      },
      {
        id: 3,
        imgSource: "code",
        title: "Software development",
        description:
          "We develop software aimed to different business segments and sectors based on technological platforms. Furthermore, we offer a wide range of software tools to provide speed in the obtaining of added value.",
      },
      {
        id: 4,
        imgSource: "ux",
        title: "UX/UI Design",
        description:
          "Want to refresh the look and functionality of your site/app? Our highly skilled team of designers and developers can give your project a smooth and engaging user experience that will increase traffic, style, and performance in order to reach more users.",
      },
      {
        id: 5,
        imgSource: "compu",
        title: "Web development",
        description:
          "Thinking about taking your project/business to the net? Our team can develop and design cross platform websites that are visually engaging, following the latest trends on UX/UI.",
      },{
        id: 6,
        imgSource: "rocbird-bird",
        title: "Data Management",
        description:
          "We are happy to announce that Devlights and ",
        description2:"RocBird have joined forces!",
        button: "SEE MORE",
      },
    ],
  },
  projectsBanner: {
    projects: "PROJECTS",
    satisfaction: "CLIENT SATISFACTION",
    years: "YEARS IN BUSINESS",
  },
  portfolio: {
    title: "Portfolio",
    all: "all",
    tabs: [
      { id: 1, name: "all", category: "all" },
      { id: 2, name: "mobile", category: "mobile" },
      { id: 3, name: "web", category: "web" },
    ],
    items: [
      {
        id: 1,
        imageName: "creative-humans",
        name: "Creative Humans",
        description: "web development",
        link: "http://devlights.com/portfolio/creativehumans",
        category: "web",
      },
      {
        id: 2,
        imageName: "ceo",
        name: "CEO",
        description: "web development and stock control",
        link: "http://devlights.com/portfolio/ceo",
        category: "web",
      },
      {
        id: 3,
        imageName: "sas2-1",
        name: "SAS",
        description: "system devlopment",
        link: "http://devlights.com/portfolio/sas",
        category: "web",
      },
      {
        id: 4,
        imageName: "doctoronline",
        name: "Doctor Responde",
        description: "app development",
        link: "http://devlights.com/portfolio/dr-online",
        category: "mobile",
      },
      {
        id: 5,
        imageName: "livet",
        name: "Livet",
        description: "app development",
        link: "http://devlights.com/portfolio/livet",
        category: "mobile",
      },
      {
        id: 6,
        imageName: "ocio",
        name: "Tiempo de OCIO",
        description: "app development",
        link: "http://devlights.com/portfolio/tiempodeocio",
        category: "mobile",
      },
    ],
  },
  technologies: {
    title: "Technologies",
    subtitleText1:
      "In Devlights, we combine the latest technologies and best practices delivering outstanding products.",
    subtitleText2:
      "Our team is capable to build and design the perfect solution for each client using the latest technology stacks and following the highest standards on the software industry.",
    btnProjects: "Our projects",
    srcImage: "tech-img",
  },
  clutch: {
    subtitleText1:
      "Clutch Names Devlights as Argentina’s Leading Staff Augmentation Partner for 2022",
    subtitleText2: "Find out why they awarded us with the highest score!",
    btnClutch: "Read more",
    srcImage: "clutch_section_bn",
    srcImageTitle: "cluch-section-title",
  },

  clients: {
    title: "Clients",
    btnMore: "Show more",
  },
  testimonials: {
    clientsText: "What our clients say about us",
    clients: [
      {
        clientId: "1",
        clientName: "Roberto Maciel",
        company: "Liber",
        role: "Director",
        img: "roberto",
        opinion:
          "Devlights team was fundamental in the launch of our first mobile app. They accomplished all the goals we agreed upon, always delivering in timely manner. Their team was very professional and definitely exceeded our expectations. The process was really straight forward. Communication was fluent and the team was proactive at every time. We had a great experience working with Devlights and we are grateful they could helped us with this venture.",
      },
      {
        clientId: "2",
        clientName: "Ross Forsyth",
        company: "Human Design",
        role: "Director Of Technology",
        img: "ross",
        opinion:
          "Devlights is a great team to work with. Not only do they have the skills to get the job done but they communicate effectively at every level throughout the project. Their team was just what we needed!",
      },
      {
        clientId: "3",
        clientName: "Darlene Liebman",
        company: "Creative Humans",
        role: "Founder",
        img: "darlene",
        opinion:
          "Working with the team at Devlights has been a great experience. The Team is knowledgeable, responsive and gracious. I highly recommend them, for any project large or small.",
      },
      {
        clientId: "4",
        clientName: "Lindsay Insco",
        company: "Millenium Digital Technologies",
        role: "Lead Developer",
        img: "lindsay",
        opinion:
          "Devlights has been such a useful team, I've come to look at them like family. With the variety of experience everyone has, it seems there's always a great fit for a variety of projects. I've loved working with the team so much, I have brought them on to long-term projects with me and I wouldn't have it any other way.",
      },
    ],
  },

  careers: {
    title: "Careers",
    subtitleText1:
      "In Devlights we are always looking for fresh talent, do you have what it takes?.",
    subtitleText2:
      "In this section you can apply for our latest job openings and check the requirements, for further information just click on the button below ",
    srcImage: "tech-img",
    btnCareers: "Check all positions",
    noJobs: "At the moment there are no jobs available"
  },
  footer: {
    title: "Contact Us",
    address1: "Corrientes, Argentina. 1250 Junin st., 2nd Floor.",
    address2: "Boulder, Colorado United States 1355 Bear Mountain Drive.",
    phone1: "+54 (0379) 4230003",
    phone2: "+1 (303) 325-30853",
    email1: "contacto@devlights.com",
    email2: "robert.hughes@devlights.com ",
    links: {
      links: "LINKS",
      aboutUs: "About us",
      nearshore: "Nearshore software development",
      referral: "Referral Program",
      services: "Services",
      clients: "Clients",
      careers: "Careers",
      home: "Home",
      portfolio: "Portfolio",
      bootcamps: "Bootcamps",
    },
    formTitle: "Connect with us",
    formName: "Name*",
    formEmail: "E-mail*",
    formMessage: "Message*",
    formBtnSend: "Send Message",
  },
  projects: {
    creativeHumans: {
      introduction: {
        title: "About Creative Humans",
        introText1:
          "Nowadays we are sailing the tempestuous waters of the information era and small business and big companies come across with a common issue creating and sharing media that attracts and increase its clients base allowing them to grow as business.",
        introText2:
          "Creative Humans entrusted Devlights the mission of creating an online platform that connects your brand/business with the best, pre-vetted, commercial production companies to create all your video content needs.",
        introText3:
          "The main objective of this platform is connecting you with the RIGHT production company or creative team.",
      },
      body: {
        featureText1:
          "Creative Humans is an online platform built to help companies develop their story by finding experienced filmmakers and freelancers to fill their RFP's and produce their branded video content",
        featureText2:
          "Browse through videos and discover new, experienced talent who specialize in all forms of creative video assignments",
        featureText3:
          "As you browse, filter your video search by industry, style, budget, location, union affiliation and more",
        featureText4:
          "All the contracts, NDAs and payments flow through us, making hiring new teams fast and easy",
      },
    },
    ceo: {
      introduction: {
        title: "What's CEO, What does it do ?",
        introText1:
          "Modern commercial activities are taking new directions and businesses that don't follow those paths tend to be left behind.",
        introText2:
          "DEVLIGHTS have developed CEO a sale management system which will fulﬁll your business' needs and allows it to grow steadily. CEO is a web system that has the capability of working on-line and oﬀ-line ( in a local network)",
        introText3:
          "It will help you to control your sales, maximize your proﬁts and provides you the necessary information to make important decisions. CEO is a reliable, easy to use and intuitive system, it won't take you much time to learn how to use it and you will be able to speed up your business activities. TECHNOLOGIES USED IN THIS PROJECT Main features",
      },
      body: {
        title: "Main features",
        featureText1:
          "It allows you to manage products, areas and the makes they belong.",
        featureText2: "You can also manage your providers.",
        featureText3:
          "It allows you to deﬁne diﬀerent lists of prices for your products.",
        featureText4:
          "You can create diﬀerent user proﬁles and assign them roles and functions according to your business needs.",
        featureText5:
          "You can control and correct your stock so it always reﬂects the real amount of items on your stock.",
        featureText6:
          "It allows you to get useful accounting reports grouped by categories.",
        featureText7:
          "It allows you to create and manage budgets, you can print them or send them automatically to your clients.",
      },
    },
    sas: {
      introduction: {
        title: "The idea behind SAS",
        introText1:
          "Driven by the idea of modernizing governmental entities through the use of technology, Corrientes' Government entrusted DEVLIGHTS the mission of developing a tool capable of simplifying, improving and speeding up formalities for entrepreneurs and the public in general.",
        introText2:
          "In order to help Corrientes' government on this mission, DEVLIGHTS developed SAS a tool which will turn cumbersome formalities into a simple and fast procedure which will save time and eﬀort to entrepreneurs and citizens in general.",
      },
      body: {
        title: "SAS' benefits",
        featureTitle1: "Do all your paperwork and formalities from home",
        featureText1:
          "Set apointments, request information, and schedule turns",
        featureTitle2:
          "Important information for civil entities just a click away",
        featureText2:
          "Assesment, annual obligations, regulations and legal frameworks",
        featureTitle3: "More beneﬁts for users",
        featureText3:
          "Assesment, annual obligations, regulations and legal frameworks",
        featureTitle4: "Useful information",
        featureText4:
          "Avoid unnecesary visits, get the requierements for your formalities, FAQ and Current regulations",
      },
    },
    doctorResponde: {
      title: "Dr Responde",
      introduction: {
        title: "The Idea behind Dr. Responde",
        introText1:
          "In order to avoid telephonic medical consultation and canalize them via Whatsapp, the Client came out with the idea of creating a mobile App that allows users to arrange medical consultations with healthcare professionals. THE CLIENT AND DEVLIGHTS joined forces to develop an integral online medical consultation system.",
        introText2:
          "Dr. Responde is not only a mobile app, it relies on a web app as its core that allows admins to perform several tasks like creating new users, modify users information, delete and assign roles to different users",
      },
      body: {
        title: "Features",
        featureDoctors: "Users registered as doctor are able to:",
        featureText1: "Define service hours.",
        featureText2: "Modify profile information.",
        featureText3:
          "Choose different payment methods provided by MercadoPago",
        featurePatients: "Users registered as patients are able to:",
        featureText4: "Complete and edit its profile information.",
        featureText5: "Send and Receive images and documents through the chat.",
        featureText6: "Live chat with the selected specialist.",
      },
    },
    livet: {
      introduction: {
        title: "About Livet",
        introText1:
          "Pet lovers all over the world want the best for their little friends.",
        introText2:
          "but sometimes giving him the best food or the best toys is not enough.",
        introText3:
          "Nowadays our pets are considered part of the family and that's why we bump into the question of",
        introText4:
          "“what's the best way to give our little partners the best healthcare possible?”.",
        introText5:
          "In order to answer that question we put ourselves to work on Livet,",
        introText6:
          "Livet is an app that allow users to track their pets' medical history records",
        introText7:
          "DEVLIGHTS decided to join forces with animal healthcare specialists and put the best of its workforce to design and develop an App which is not only easy to use and visually appealing for the user but also offers a set of unique features.",
        belowImageText: "The easiest way of taking care of your pet",
      },
      body: {
        featureText1:
          "We built a set of tools for tracking medical history of your pet",
        featureText2:
          "Intituive and easy to use, acces to all your pet's information in the easiest and most convienient way",
        featureText3:
          "You can create as many pet profiles as you wish and add information about your pets",
      },
    },
    ocio: {
      introduction: {
        about: "What's Tiempo de ocio?",
        introText1:
          "There is a lot going on out there but there is also a problem, knowing what, when and where. Don't ever miss an event again and be up to date with upcoming events using TIEMPO DE OCIO.",
        introText2:
          "TIEMPO DE OCIO is an app that allows you to get up to date information about events, interesting and cool places and let you know what's on cinemas and theaters.",
      },
      body: {
        featureText1:
          "Get and share information about social events, places of interest and more.",
        featureText2:
          "Look for events and fun places around Chaco and Corrientes.",
        featureText3:
          "All information about the coolest places to hangout right at your fingertips.",
      },
      btnAndroid: "Downlaod for Android!",
      btnIos: "Download for Ios!",
    },
    technologies: "TECHNOLOGIES USED IN THIS PROJECT",
    btnCheck: "Check it out!",
  },
  clutchLanding: {
    headerImage: "clutch-landing-hero",
    headerTitle:
      "Clutch Names Devlights as Argentina’s Leading Staff Augmentation Partner for 2022",
    heroParagraph1:
      "Filling your team with talented and dedicated professionals is no easy feat. That’s why we at Devlights, strive to help you with your projects and unique needs through our extensive IT staff augmentation and development solutions. Based in Corrientes, Argentina, we allow our clients to focus on their operations while we deliver accurate development results.",
    heroParagraph2:
      "Because of our proven track record, we’ve recently gain an accolade from a trusted industry resource. During the annual Clutch Leaders Awards, Devlights was officially landed a spot on the 2022 list of innovators",
    heroParagraph3:
      "Our team was recognized as one of Argentina’s leading Staff Augmentation partners!",
    aboutClutch:
      "Clutch is a B2B review and rating platform designed to help browsers connect with the right solutions providers for their specific needs. Every year, the site holds an awards cycle to celebrate the best and brightest B2B companies from different industries and categories around the world. To be recognized as a leader, firms must demonstrate unparellaed commitment, incredible excellence, and thought leadership.",
    reviewsTitle: "Client reviews",
    reviewsParagraph:
      "Client reviews and success are among the variables taken into consolidation for these awards. Needless to say, we unlocked this exciting milestone because of our partners. Thank you so much to everyone who contributed to making this recognition possible! We are genuinely grateful for our clients, especially those who graciously rated us on Clutch. The support and confidence they have in the Devlights team is worth more than anything else for us.",
    reviewsParagraphStrong: "We are proud to be your trusted partner!",
    movingForwardTitle: "Moving forward",
    movingForwardParagraph:
      "We can’t wait to grow further with our clients and conquer more challenges.",
    movingForwardParagraphStrong:
      "If you’re interested in working with us too, don’t hesitate to reach out and ask any queries you may have! The Devlights team will get back to you as soon as possible.",
    clutch_Testimonials: {
      clients: [
        {
          clientId: "1",
          clientName: "Martin Ruiz Diaz",
          company: "Livet",
          role: "Founder",
          img: "",
          opinion:
            "We’ve had an excellent experience and they exceed our expectations.",
        },
        {
          clientId: "2",
          clientName: "Rohit Gupta",
          company: "Behaviour Sense",
          role: "Co-Founder",
          img: "",
          opinion:
            "When issues were raised, they were fixed in a collaborative and pragmatic manner.",
        },
        {
          clientId: "3",
          clientName: "Alejandro Berardi",
          company: "IAAER SAS",
          role: "Partner",
          img: "",
          opinion: "We’re completely satisfied with the results.",
        },
        {
          clientId: "4",
          clientName: "Fernando Cores",
          company: "Bubble BPM",
          role: "CTO",
          img: "",
          opinion: "We liked their flexibility and dedication.",
        },
        {
          clientId: "5",
          clientName: "Ruben Amadeo Capizzano",
          company: "Entravision",
          role: "Director of Technology & Product",
          img: "",
          opinion:
          "We're impressed by how clear and easy our communication has been with them.",
        },
        {
          clientId: "6",
          clientName: "Matias Benitez",
          company: "TLV1",
          role: "Technical Director",
          img: "",
          opinion:
          "We were impressed by the time it took to complete our website in a short time, meeting our expectations.",
        },
        {
          clientId: "7",
          clientName: "Mark Warren",
          company: "Proactive Technology Management",
          role: "Project Manager",
          img: "",
          opinion:
          "We have no plans to work with any other company at this time.",
        },
        {
          clientId: "8",
          clientName: "",
          company: "Cybersecurity Firms",
          role: "Lead Developer",
          img: "",
          opinion:
          "We worked well together. Devlights always made sure that things were done on time.",
        },
        {
          clientId: "9",
          clientName: "",
          company: "Data Solutions Company",
          role: "Engineer",
          img: "",
          opinion:
            "They were able to get a grasp of our needs and the requirements we had in mind.",
        },
        {
          clientId: "10",
          clientName: "Norberto Antonio",
          company: "Public Health Insurance Company",
          role: "Member",
          img: "",
          opinion: "The results have been tremendously positive.",
        },
        {
          clientId: "11",
          clientName: "",
          company: "Emergency Training School",
          role: "Independent Contractor",
          img: "",
          opinion:
            "I was most impressed by their willingness to listen and adapt.",
        },
      ],
    },
  },
  nearshore_landing: {
    metaTitle: "Outsourcing software development | Devlights",
    metaName: "Description",
    metaContent: "We can provide and source for every technology available within the market. Whether you require demandware developers, designers, mobile developers or project managers, we will put our best to make sure that your requirements are met and that you find the talent that you need for your team.",
    headerTitle: "Nearshore Software development services",
    headerSubTitle: "We connect our clients with their product",
    headerBtn: "Schedule a FREE APPOINTMENT",
    why_hirinus_section: {
      title: "Why hiring our services",
      paragraph: "We can provide and source for every technology in the market. Whether you require demandware developers, designers, mobile developers or project managers, we will put our best to make sure that your requirements are met and that you find the talent that you need for your team."
    },
    our_services_section: {
      title: "Our service stands out from the rest.",
      cultural_fit_title: "Great cultural fit and similar time zone",
      cultural_fit_paragraph: "We look for people with the ability to join to your team easily, soft skills are fundamental for us. We can form a new team to take charge of an existing project or starting a new one for upcoming projects and we are just one hour away from East time.",
      rates_title: "Outstanding rates, transparency and convenience",
      rates_paragraph: "Clear contract terms and conditions, Devlights is capable of providing highly-skilled specialists for just a fraction of the cost of local talent.",
      dependable_title: "Dependable and trustworthy, we are just what our clients need",
      dependable_paragraph: "We do care about long-term relationships with clients. This is a core value at Devlights. We strive to create strong relationships and work together with our clients to help them succeed in the long term."
    },
    partner_up_section: {
      title: "Let's partner up on your next project!",
      paragraph: "Devlights stands out from the rest because is capable to offer END-TO-END software development solutions to their clients. We count on a qualified team of professionals entirely dedicated to working on our clients’ technology projects. You Provide the specifitacions, we provide a software solution.",
      btn: "Tell us more about your project"
    },
    how_does_it_work_section: {
      title: "How does it work?",
      step_1: "We meet with the client to brief about his idea and work it out togheter.",
      step_2: "From our talent pool, we select the profiles that best match the requirements.",
      step_3: "We select the best assets for your project and then they are ready to dig into the details and start working."
    },
    get_in_touch_section: {
      title: "We connect our clients with their products",
      first_card_title:"We make things happen here at Devlights.",
      first_card:"Our outsourcing solutions provides clients access to a vast pool of talent Staffing the talents to build a team is essential for the success of any business, but to be efficient it requires devoting significant resources to the process.",
      second_card:"However, sometimes the budget or time frames are tight, or the company might simply need a full-time remote talent to do a specific job. In this case, staffing-as-a-service is the way to go in such a case.",
      third_card: " Devlights is capable of providing highly-skilled specialists short-term and long-term IT staffing projects built to your specification and for a fraction of the cost.",
      form_title: "Let's get in touch",
      form_btn: "Send Message"
    },
    our_clients_section: {
      title: "What our clients say about us"
    },
    meet_the_team_section: "Meet the team"
  },
  rocbird_landing: {
    metaTitle: "Outsourcing software development | Devlights",
    metaName: "Description",
    metaContent: "We can provide and source for every technology available within the market. Whether you require demandware developers, designers, mobile developers or project managers, we will put our best to make sure that your requirements are met and that you find the talent that you need for your team.",
    headerTitle: "It's a match!",
    headerSubTitle: "We are happy to announce that Devlights and RocBird have joined forces!",
    this_aliance_section: {
      first_card: "This alliance will help Devlights provide a more complete and robust service to its partners.",
      second_card: "RocBird's experience and perspective will be a game changer when building complex data-driven solutions."
    },
    about_section: {
      title: "About RocBird",
      paragraph: "They are a technology, innovation and software development company that helps companies in their digital transformation of processes, providing the tools and qualified resources necessary to achieve the proposed objectives and thus obtain a competitive advantage.",
      first_card:{
        title:'BIG DATA',
        paragraph:'Big Data tools and solutions will help you organize the large volume of data that floods your daily business, to obtain valuable information that you may be missing.'
      },
      second_card:{
        title:'DATA ANALYTICS',
        paragraph:'Can help you understand the operation of your business by taking advantage of its data, to accelerate its growth through well-formed decisions.'
      },
      third_card:{
        title:'DATA SCIENCE',
        paragraph:'Use scientific methods and artificial intelligence to obtain knowledge from existing data, translating it into easy-to-understand visualizations to help you make better decisions that enable the expansion of your business.'
      },
      fourth_card:{
        title:'WEB  DEVELOPMENT  & CORPORATIVE DEVELOPMENT',
        paragraph:'A team able to develop the system that meets the needs of your company. We have experience in developing products for StartUps and custom corporate systems. '
      },
      fifth_card:{
        title:'SPECIALIZED CONSULTANCIES',
        paragraph:'They know the latest market trends and have participated in multiple projects, making that experience available to your business.'
      },
      sixth_card:{
        title:'DATA ANALYTICS',
        paragraph:'They can help you understand the operation of your business by taking advantage of its data, to accelerate its growth through well-formed decisions. Their Data Analytics service includes data capture, cleaning and modeling.'
      },
    },
    partner_up_section: {
      title: "Let's partner up on your next project!",
      paragraph: "Devlights stands out from the rest because is capable to offer END-TO-END software development solutions to their clients. We count on a qualified team of professionals entirely dedicated to working on our clients’ technology projects. You Provide the specifitacions, we provide a software solution.",
      btn: "Tell us more about your project"
    },
    how_does_it_work_section: {
      title: "How does it work?",
      step_1: "We meet with the client to brief about his idea and work it out togheter.",
      step_2: "From our talent pool, we select the profiles that best match the requirements.",
      step_3: "We select the best assets for your project and then they are ready to dig into the details and start working."
    },
    get_in_touch_section: {
      title: "We connect our clients with their products",
      first_card_title:"We make things happen here at Devlights.",
      first_card:"Our outsourcing solutions provides clients access to a vast pool of talent Staffing the talents to build a team is essential for the success of any business, but to be efficient it requires devoting significant resources to the process.",
      second_card:"However, sometimes the budget or time frames are tight, or the company might simply need a full-time remote talent to do a specific job. In this case, staffing-as-a-service is the way to go in such a case.",
      third_card: " Devlights is capable of providing highly-skilled specialists short-term and long-term IT staffing projects built to your specification and for a fraction of the cost.",
      form_title: "Let's get in touch",
      form_btn: "Send Message"
    },
    our_clients_section: {
      title: "What our clients say about us"
    },
    meet_the_team_section: "Meet the team"
  }
};

export default en;
