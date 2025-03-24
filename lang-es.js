const languageES =
{
    nav: [
        "Inicio",
        "Nosotros",
        "Servicios",
        "Experiencia",
        "Contacto",
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
            title: "SERVICIO Y CONSULTORÍA ESPECIALIZADOS DEL CARMEN",
            text: "Especialistas en soluciones de ingeniería aplicada utilizando prácticas innovadoras y tecnología de punta",
            list: [],
            descriptionOfList: []
        },

        aboutUs: {
            title: "Nosotros",
            text: "Somos una empresa fundada en el año 2006, que orienta sus esfuerzos a atender a la industria, principalmente en los siguientes segmentos:",
            list: [
                "Consultoría y capacitación en seguridad industrial y protección ambiental",
                "Servicios especializados en materia ambiental",
                "Servicios metoceánicos y costeros",
                "Planeación, diseño, evaluación y mantenimiento de infraestructura terrestre y costa afuera"
            ],
            descriptionOfList: [],
            linkText: "",
            link: "",
        },
        
        services: {
            title: "Servicios",
            text: "",
            list: [
                "Ambiental",
                "Metoceánica",
                "Estructural",
                "Consultoría y Capacitación",
                "Energía renovable",
            ],
            descriptionOfList: [
                "Pre-checklist a plataformas, análisis de agua residual y potable, análisis de alimentos.",
                "Mediciones, análisis estadístico, parámetros metoceánicos de diseño, pronóstico metoceánico.",
                "Servicios estructurales costa afuera, sistema de pronóstico de evaluación de integridad estructural de plataformas marinas.",
                "Cursos, seguridad industrial, asistencia técnica PND.",
                "Distribuidores de sistemas solares y eólicos para generar energía renovable para empresas mexicanas.",
            ],
            imgSrc: ["servAmbiental.webp","servMetoceanica.webp","servEstructural.webp","servCapacitacion.webp","servRenovable.webp"],
            linkText: "Más detalles",
            link: ["/ambiental","/metoceanica","/estructural","/consultoria","/energia"],
        },

        staff: {
            title: "Nuestro Equipo",
            text: "Contamos con el mejor talento nacional e internacional, con gran experiencia en:",
            list: [
                "Ingeniería Aplicada.",
                "Ciencias de la Tierra y del mar.",
                "Dinámica Oceánica y Meterología.",
                "Seguridad y protección ambiental.",
                "Análisis de datos.",
                "Análisis químico.",
                ],
            descriptionOfList: ["", "", "", "", ""]
        },

        experience: {
            title: "Experiencia",
            text: "",
            imagesSrc: [
                "./experience/2006_QV.png",
                "./experience/2006_alimentos.jpg",
                "./experience/2007_AnalisisResidual.jpg",
                "./experience/2008_EstudiosAmbientales.png",
                "./experience/2008_AnalisisPotable2.jpg",
                "./experience/2009_EstudiosAmbientales.png"
            ],
            imagesDate: [
                "MARZO 2006",
                "AGOSTO 2006",
                "FEBRERO 2007",
                "ENERO 2008",
                "SEPTIEMBRE 2008",
                "JUNIO 2009",
            ],
            imagesTitle: [
                "CONVENIO CON QV",
                "TRABAJOS DE MUESTREO Y ANÁLISIS DE ALIMENTOS",
                "ANÁLISIS DE AGUA RESIDUAL Y ESTUDIOS DE MUESTREO",
                "ESTUDIOS AMBIENTALES",
                "ANÁLISIS DE AGUA POTABLE Y AGUA RESIDUAL",
                "ESTUDIOS AMBIENTALES",
            ],
            imagesDescription: [
                "Convenio con Laboratorios Química Veracruzana acreditados ante EMMA (Entidad Mexicana de Acreditación).",
                "Con la empresa PCI (Proyectos y Cimentaciones Industriales, SA de CV), que tenía contratos de hotelería y hospedaje para plataformas marinas, se inician los estudios de muestreo y análisis de alimentos.",
                "Se inician muestreos y análisis de agua residual para LMC (Logística Mexicana del Caribe, S de RL de CV), socia de la empresa internacional TideWater.",
                "Se inician estudios ambientales como ARP, PRE, PCA y Atlas de Riesgos para las plataformas marinas de TODCO México Inc. (The Offshore Drilling Company).",
                "Se inician muestreos y análisis de agua potable y residual para la empresa COSL (China Oilfield Service Limited) en plataformas marinas.",
                "Se inician estudios ambientales como ARP, PRE, PCA y Atlas de Riesgos, así como análisis de agua potable y residual para la plataforma Rowan Gorilla IV de la empresa Rowan Drill.",
            ],
        },

        contact: {
            title: "Contacto",
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
        title: "Misión",
        text: ["Generar, innovar e impulsar el crecimiento sostenible de nuestros clientes, colaboradores y accionistas a través de soluciones integrales de calidad, con alto valor tecnológico, respetuosas con el medio ambiente y en un marco de compromiso social."]
    },

    vision: {
        title: "Visión",
        text: ["Ser una empresa de alto impacto en el mercado internacional con operaciones diversificadas y altos índices de rentabilidad, generando valor para clientes, colaboradores y accionistas mediante el desarrollo sustentable."]
    },

    companyValues: {
        title: "Valores",
        text: ["Integridad y honestidad","Transparencia y responsabilidad", "Compromiso de servicio", "Sinergia y confianza","Respeto y disciplina"]
    },

    linksText: {
        toAboutUs: "Nuestra misión, visión y valores",
        toStaff: "Conoce a nuestros especialistas"
    },
    links: {
        index: "/",
        toAboutUs: "/about-us",
        toStaff: "/staff",
    },

    footer: {
        copyRight: "Copyright © 2019 SYCEC. Todos los derechos reservados.",
        privacy: "Aviso de privacidad."
    },

    other: {
        moreDetails: "Más detalles",
    }
}

export {languageES}