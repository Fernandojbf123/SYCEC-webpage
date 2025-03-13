const languageEN =
{
    nav: [
        "Home",
        "About Us",
        "Services",
        "Experience",
        "Contact",
    ],

    navLink: [
        "hero",
        "aboutUs",
        "services",
        "experience",
        "contact",
    ],

    headers: {

        headerOne: {
            title: "SPECIALIZED CONSULTING AND SERVICES OF CARMEN",
            text: "Engineering applied to safety, hygiene, and environment",
            list: [],
            descriptionOfList: []
        },

        aboutUs: {
            title: "About Us",
            text: "We are a company founded in 2006, focused on serving the industry, mainly in the following areas:",
            list:  [
                    "Consulting and training in industrial safety and environmental protection",
                    "Specialized environmental services",
                    "Metoceanic and coastal services",
                    "Planning, design, evaluation, and maintenance of onshore and offshore infrastructure"
                    ],
            descriptionOfList: [],
            linkText: "",
            link: "",
        },
        
        services: {
            title: "Services",
            text: "We offer measurement services, data analysis, and training in the following areas:",
            list:  [
                    "Environmental",
                    "Metoceanic",
                    "Structural",
                    "Consulting and Training",
                    "Renewable Energy",
                    ],
            descriptionOfList: [
                    "Pre-checklist for platforms, wastewater and drinking water analysis, food analysis.",
                    "Measurements, statistical analysis, metoceanic design parameters, metoceanic forecasting.",
                    "Offshore structural services, platform integrity assessment forecasting system.",
                    "Courses, industrial safety, NDT technical assistance.",
                    "Distributors of solar and wind systems to generate renewable energy for Mexican companies.",
                    ],
            imgSrc: ["servAmbiental.webp","servMetoceanica.webp","servEstructural.webp","servCapacitacion.webp","servRenovable.webp"],
            linkText: "More details",
            link: ["/environmental","/metoceanic","/structural","/consulting","/energy"],
        },

        staff: {
            title: "Collaborators and Advisors",
            text: "We have a large team of internal and external collaborators with extensive experience in all our services.",
            list:  ["", "", "", "", ""],
            descriptionOfList: ["", "", "", "", ""]
        },

        experience: {
            title: "Experience",
            text: "In February 2006, Servicio y Consultoría del Carmen formally began operations.",
            imagesSrc:  [
                "./experience/2006_QV.png",
                "./experience/2006_alimentos.jpg",
                "./experience/2007_AnalisisResidual.jpg",
                "./experience/2008_EstudiosAmbientales.png",
                "./experience/2008_AnalisisPotable2.jpg",
                "./experience/2009_EstudiosAmbientales.png"
                ],
            imagesDate: [
                "MARCH 2006",
                "AUGUST 2006",
                "FEBRUARY 2007",
                "JANUARY 2008",
                "SEPTEMBER 2008",
                "JUNE 2009",
                ],
            imagesTitle: [
                "AGREEMENT WITH QV",
                "FOOD SAMPLING AND ANALYSIS WORKS",
                "WASTEWATER ANALYSIS AND SAMPLING STUDIES",
                "ENVIRONMENTAL STUDIES",
                "DRINKING WATER AND WASTEWATER ANALYSIS",
                "ENVIRONMENTAL STUDIES",
            ],
            imagesDescription: [
                "Agreement with Química Veracruzana Laboratories accredited by EMMA (Mexican Accreditation Entity).",
                "With the company PCI (Proyectos y Cimentaciones Industriales, SA de CV), which had contracts for hotel and lodging services for offshore platforms, food sampling and analysis studies began.",
                "Sampling and wastewater analysis began for LMC (Logística Mexicana del Caribe, S de RL de CV), a partner of the international company TideWater.",
                "Environmental studies such as ARP, PRE, PCA, and Risk Atlas for the offshore platforms of TODCO México Inc. (The Offshore Drilling Company) began.",
                "Drinking water and wastewater sampling and analysis began for COSL (China Oilfield Service Limited) on offshore platforms.",
                "Environmental studies such as ARP, PRE, PCA, and Risk Atlas, as well as drinking and wastewater analysis, began for the Rowan Gorilla IV platform of the Rowan Drill company.",
            ],
        },

        contact: {
            title: "Contact",
            siteOne: {
                name: "",
                telephone: "",
                address: "",
                email:"",
            },
            siteTwo: {
                name: "",
                telephone: "",
                address: "",
                email:"",
            }
        },
    },

    mision: {
        title: "Mission",
        text: ["Generate, innovate, and drive the sustainable growth of our clients, collaborators, and shareholders through comprehensive quality solutions with high technological value, environmentally friendly, and within a framework of social commitment."]
    },

    vision: {
        title: "Vision",
        text: ["To be a high-impact company in the international market with diversified operations and high profitability rates, generating value for clients, collaborators, and shareholders through sustainable development."]
    },

    companyValues: {
        title: "Values",
        text: ["Integrity and honesty","Transparency and responsibility", "Service commitment", "Synergy and trust","Respect and discipline"]
    },

    linksText: {
        toAboutUs: "Our mission, vision, and values",
        toStaff: "Meet our specialists"
    },
    links: {
        index: "/",
        toAboutUs: "/about-us",
        toStaff: "/staff",
    },

    footer: {
        copyRight: "Copyright © 2019 Sysec. All rights reserved.",
        privacy: "Privacy Notice."
    },

    other: {
        moreDetails: "More details",
    }
}

export {languageEN}