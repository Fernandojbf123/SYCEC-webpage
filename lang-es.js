const nav = [
    "inicio",
    "nosotros",
    "servicios",
    "experiencia",
    "contacto",
]

const headers = {

    headerOne: {
        title: "SERVICIO Y CONSULTORÍA ESPECIALIZADOS DEL CARMEN",
        text: "Ingeniería aplicada a seguridad, higiene y ambiente",
        list: [],
        descriptionOfList: []
        
    },

    aboutUs: {
        title: "Nosotros",
        text: "Somos una empresa fundada en el año 2006, que orienta sus esfuerzos a atender a la industria, principalmente en los segmentos de:",
        list:  [
                "Consultoría y capacitación en seguridad industrial y protección ambiental",
                "Servicios especializados en materia ambiental",
                "Servicios metoceánicos y costeros",            
                "Planeación, diseño, evaluación y mantenimiento de infraestructura terrestre y costa afuera"
                ],
        descriptionOfList: []
    },
    
    services: {
        title: "Servicios",
        text: "Ofrecemos servicios de mediciones, análisis de datos y capacitación en las siguientes áreas:",
        list:  [
                "Ambiental",
                "Metoceánica",
                "Estructural",
                "Consultoría y Capacitación",
                "Energía renovable",
                ],
        descriptionOfList: [
                "Pre-checklist a Plataformas, análisis agua residual y potable, análisis de alimentos.",
                "Meidiciones, análisis estadístico, parámetros metoceánicos de diseño, pronóstico metoceánico.",
                "Servicios estructurales costa afuera, sistema de pronóstico de evaluación de integridad estrutural de plataformas marinas.",
                "Cursos, seguridad industrial, asistencia técnica PND.",
                "Distribuidores de sistemas solares y eólicos para generar energía renovable a la empresa mexicana.",
                ],
        imgSrc: ["servAmbiental.webp","servMetoceanica.webp","servEstructural.webp","servCapacitacion.webp","servRenovable.webp"]

    },

    staff: {
        title: "Colaboradores y asesores",
        text: "Contamos con un amplio grupo de colaboradores tanto internos como externos con una extensa experiencia en todos nuestros servicios.",
        list:  [
            "",
            "",
            "",
            "",
            "",
            ],
        descriptionOfList: [
            "",
            "",
            "",
            "",
            "",
            ]
    },

    experience: {
        title: "Experiencia",
        text: "En Febrero del 2006 inicia formalmente operaciones Servicio y Consultoría del Carmen",
        list:  [
            "",
            "",
            "",
            "",
            "",
            ],
        descriptionOfList: [
            "",
            "",
            "",
            "",
            "",
            ]
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
}

const mision = {
    title: "mision",
    text: ["Generar, Innovar e Impulsar el crecimiento sostenible de nuestros clientes, colaboradores y accionistas a través de soluciones integrales de calidad, con alto valor tecnológico, respetuosas con el medio ambiente y en un marco de compromiso social."]
}

const vision = {
    title: "vision",
    text: ["Ser una empresa de alto impacto en el mercado internacional con operaciones diversificadas con altos índices de rentabilidad, generando valor para clientes, colaboradores y accionistas, con desarrollo sustentable."]
}

const companyValues = {
    title: "valores",
    text: ["Integridad y honestidad","Transparencia y responsabilidad", "Compromiso de servicio", "Sinergia y confianza","Respeto y disciplin"]
}

const links = {
    toMision: "Nuestra misión, visión y valores",
    toStaff: "Conoce a nuestros especialistas"

}

const footer = {
    copyRight: "Copyright © 2019 Sysec. Todos los derechos reservados.",
    privacy: "Aviso de privacidad.",
}

export {nav, headers, mision, vision, companyValues, links, footer}