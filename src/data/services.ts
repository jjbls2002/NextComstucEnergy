import type { Lang } from "../utils/i18n";
import type { ServiceKey } from "./site";

interface Seo {
  title: string;
  description: string;
  keywords?: string;
}
interface ServiceContent {
  icon: string;
  serviceType: string;
  hero: string;
  heroSub: string;
  /** short summary for the services index (60–80 words range) */
  summary: string;
  capsTitle: string;
  capabilities: string[];
  standards: string[];
  contractModels: string[];
  seo: Seo;
}

type ByLang = Record<Lang, ServiceContent>;

const contractModelsEs = ["Precio Unitario", "Suma Alzada", "Tiempo y Materiales"];
const contractModelsEn = ["Unit Price", "Lump Sum", "Time & Materials"];

export const SERVICE_CONTENT: Record<ServiceKey, ByLang> = {
  workover: {
    es: {
      icon: "wrench",
      serviceType: "Oil well workover and pulling",
      hero: "Workover y Pulling: intervención de pozos con certificación IWCF/IADC",
      heroSub: "Reacondicionamiento y control de pozos con personal certificado, equipos API y disciplina de seguridad medible.",
      summary: "Intervención y reacondicionamiento de pozos para restituir o incrementar producción. Ejecutamos con personal certificado IWCF/IADC, equipos BOP conforme a API Spec 16A y procedimientos de control de pozo verificables. Cobertura operativa en la Faja del Orinoco, la Cuenca Oriental y la Cuenca Barinas-Apure.",
      capsTitle: "Capacidades específicas",
      capabilities: [
        "Pulling y reacondicionamiento de pozos productores e inyectores",
        "Cambio de bombas, tuberías de producción y equipos de fondo",
        "Control de pozo con BOP certificado API 16A / 16C",
        "Pesca y recuperación de herramientas",
        "Estimulación y limpieza de pozos",
        "Instalación y recuperación de completaciones",
        "Supervisión HSE y permisos de trabajo en cada intervención",
      ],
      standards: ["API Spec 16A", "API Spec 16C", "API RP 53", "API RP 59", "API RP 65", "IWCF", "IADC", "API Q2", "ISO 14310", "NORSOK D-010"],
      contractModels: contractModelsEs,
      seo: {
        title: "Workover y Pulling en Venezuela | Intervención de Pozos Petroleros | NEX",
        description: "Servicios de workover y pulling con personal IWCF/IADC certificado, BOP API 16A y control de pozo garantizado. Cobertura Faja del Orinoco, Cuenca Oriental y Barinas.",
        keywords: "workover venezuela, pulling pozos, intervención pozos pdvsa, control de pozo IWCF, faja del orinoco",
      },
    },
    en: {
      icon: "wrench",
      serviceType: "Oil well workover and pulling",
      hero: "Workover & Pulling: well intervention with IWCF/IADC certification",
      heroSub: "Well reconditioning and control with certified personnel, API equipment and measurable safety discipline.",
      summary: "Well intervention and reconditioning to restore or increase production. We execute with IWCF/IADC-certified personnel, BOP equipment compliant with API Spec 16A and verifiable well-control procedures. Operational coverage across the Orinoco Belt, the Eastern Basin and the Barinas-Apure Basin.",
      capsTitle: "Specific capabilities",
      capabilities: [
        "Pulling and reconditioning of producing and injector wells",
        "Replacement of pumps, production tubing and downhole equipment",
        "Well control with API 16A / 16C certified BOP",
        "Fishing and tool recovery",
        "Well stimulation and cleanout",
        "Installation and recovery of completions",
        "HSE supervision and work permits on every intervention",
      ],
      standards: ["API Spec 16A", "API Spec 16C", "API RP 53", "API RP 59", "API RP 65", "IWCF", "IADC", "API Q2", "ISO 14310", "NORSOK D-010"],
      contractModels: contractModelsEn,
      seo: {
        title: "Workover & Pulling in Venezuela | Oil Well Intervention | NEX",
        description: "Workover and pulling services with IWCF/IADC-certified personnel, API 16A BOP and guaranteed well control. Coverage of the Orinoco Belt, Eastern Basin and Barinas.",
        keywords: "workover venezuela, well pulling, well intervention pdvsa, well control IWCF, orinoco belt",
      },
    },
  },

  environmental: {
    es: {
      icon: "leaf",
      serviceType: "Environmental remediation of hydrocarbons",
      hero: "Saneamiento ambiental: remediación certificada MPPEA",
      heroSub: "Remediación de suelos y aguas contaminadas con hidrocarburos, conforme a la normativa ambiental venezolana e internacional.",
      summary: "Remediación de pasivos ambientales por hidrocarburos mediante técnicas certificadas y verificables. Aplicamos biorremediación, landfarming, excavación controlada y monitoreo analítico (TPH/BTEX), con disposición conforme a los decretos ambientales venezolanos y a los estándares IFC. Certificación y coordinación ante el MPPEA.",
      capsTitle: "Capacidades específicas",
      capabilities: [
        "Biorremediación de suelos afectados",
        "Landfarming y tratamiento en celdas",
        "Excavación y confinamiento controlado",
        "Manejo y disposición de desechos peligrosos",
        "Monitoreo analítico TPH / BTEX",
        "Caracterización y plan de saneamiento del sitio",
        "Coordinación y certificación ante el MPPEA",
      ],
      standards: ["Decreto 638", "Decreto 883", "Decreto 2.218", "Decreto 2.635", "Decreto 1.257", "Ley Penal del Ambiente", "ISO 14001", "IFC PS"],
      contractModels: contractModelsEs,
      seo: {
        title: "Saneamiento Ambiental Petrolero Venezuela | Remediación Hidrocarburos | NEX",
        description: "Remediación de suelos y aguas contaminadas con hidrocarburos. Biorremediación, landfarming, disposición controlada. Certificación MPPEA. Cumplimiento Decretos 883, 2.635.",
        keywords: "saneamiento ambiental hidrocarburos, remediación derrames venezuela, biorremediación, decreto 2635, MPPEA",
      },
    },
    en: {
      icon: "leaf",
      serviceType: "Environmental remediation of hydrocarbons",
      hero: "Environmental remediation, MPPEA-certified",
      heroSub: "Remediation of hydrocarbon-contaminated soil and water, compliant with Venezuelan and international environmental regulations.",
      summary: "Remediation of hydrocarbon environmental liabilities through certified, verifiable techniques. We apply bioremediation, landfarming, controlled excavation and analytical monitoring (TPH/BTEX), with disposal compliant with Venezuelan environmental decrees and IFC standards. Certification and coordination with the MPPEA.",
      capsTitle: "Specific capabilities",
      capabilities: [
        "Bioremediation of affected soils",
        "Landfarming and cell treatment",
        "Controlled excavation and confinement",
        "Handling and disposal of hazardous waste",
        "TPH / BTEX analytical monitoring",
        "Site characterization and remediation plan",
        "Coordination and certification with the MPPEA",
      ],
      standards: ["Decree 638", "Decree 883", "Decree 2,218", "Decree 2,635", "Decree 1,257", "Environmental Criminal Law", "ISO 14001", "IFC PS"],
      contractModels: contractModelsEn,
      seo: {
        title: "Oil Environmental Remediation Venezuela | Hydrocarbon Cleanup | NEX",
        description: "Remediation of hydrocarbon-contaminated soil and water. Bioremediation, landfarming, controlled disposal. MPPEA certification. Compliant with Decrees 883, 2,635.",
        keywords: "hydrocarbon environmental remediation, oil spill cleanup venezuela, bioremediation, decree 2635, MPPEA",
      },
    },
  },

  welding: {
    es: {
      icon: "flame",
      serviceType: "Industrial welding",
      hero: "Soldadura industrial certificada ASME IX + AWS D1.1",
      heroSub: "Procesos calificados, soldadores certificados e inspección con ensayos no destructivos para infraestructura petrolera.",
      summary: "Soldadura industrial para tuberías, recipientes y estructuras del sector petrolero, con procedimientos calificados ASME IX y AWS D1.1. Contamos con soldadores certificados, inspección CWI y una gama de ensayos no destructivos (PT, MT, UT, RT) para garantizar la integridad de cada junta.",
      capsTitle: "Procesos y capacidades",
      capabilities: [
        "Procesos SMAW, GMAW y GTAW",
        "Soldadura de tuberías y líneas de proceso (B31.3)",
        "Recipientes a presión (ASME VIII)",
        "Estructuras metálicas (AWS D1.1)",
        "Soldadores calificados ASME IX",
        "Inspección CWI / NCWI",
        "Ensayos no destructivos: PT, MT, UT, RT (ASNT Nivel I/II)",
      ],
      standards: ["ASME IX", "ASME B31.3", "ASME VIII", "AWS D1.1", "API 1104", "ASNT", "ISO 3834"],
      contractModels: contractModelsEs,
      seo: {
        title: "Soldadura Industrial Petrolera Venezuela | ASME IX + AWS D1.1 | NEX",
        description: "Soldadura industrial certificada ASME IX y AWS D1.1, con soldadores calificados, inspección CWI y ensayos no destructivos (PT, MT, UT, RT) para el sector petrolero.",
        keywords: "soldadura industrial venezuela, soldador ASME IX, AWS D1.1, ensayos no destructivos, API 1104",
      },
    },
    en: {
      icon: "flame",
      serviceType: "Industrial welding",
      hero: "ASME IX + AWS D1.1 certified industrial welding",
      heroSub: "Qualified procedures, certified welders and NDE inspection for oil & gas infrastructure.",
      summary: "Industrial welding for piping, vessels and structures in the oil & gas sector, with ASME IX and AWS D1.1 qualified procedures. We have certified welders, CWI inspection and a range of non-destructive tests (PT, MT, UT, RT) to guarantee the integrity of every joint.",
      capsTitle: "Processes and capabilities",
      capabilities: [
        "SMAW, GMAW and GTAW processes",
        "Piping and process lines welding (B31.3)",
        "Pressure vessels (ASME VIII)",
        "Steel structures (AWS D1.1)",
        "ASME IX qualified welders",
        "CWI / NCWI inspection",
        "Non-destructive testing: PT, MT, UT, RT (ASNT Level I/II)",
      ],
      standards: ["ASME IX", "ASME B31.3", "ASME VIII", "AWS D1.1", "API 1104", "ASNT", "ISO 3834"],
      contractModels: contractModelsEn,
      seo: {
        title: "Oil & Gas Industrial Welding Venezuela | ASME IX + AWS D1.1 | NEX",
        description: "ASME IX and AWS D1.1 certified industrial welding, with qualified welders, CWI inspection and non-destructive testing (PT, MT, UT, RT) for the oil & gas sector.",
        keywords: "industrial welding venezuela, ASME IX welder, AWS D1.1, non-destructive testing, API 1104",
      },
    },
  },

  supply: {
    es: {
      icon: "package",
      serviceType: "Oil field supply of equipment and materials",
      hero: "Suministro de equipos y materiales para operaciones petroleras",
      heroSub: "Abastecimiento trazable, con certificados de material y una red de proveedores calificada.",
      summary: "Suministro de equipos, materiales y consumibles para operaciones petroleras, con trazabilidad completa mediante certificados de material (MTR) y una red de proveedores certificada. Gestionamos la procura para minimizar tiempos de inactividad y garantizar la conformidad técnica de cada componente.",
      capsTitle: "Categorías de suministro",
      capabilities: [
        "OCTG: tubería de revestimiento y producción",
        "Válvulas y accesorios de línea",
        "Químicos para operaciones y tratamiento",
        "Repuestos para equipos de superficie y fondo",
        "Consumibles de soldadura y HSE",
        "Trazabilidad con MTR (Material Test Reports)",
        "Red de proveedores certificada y auditada",
      ],
      standards: ["API 5CT", "API 6A", "MTR / EN 10204", "ISO 9001"],
      contractModels: contractModelsEs,
      seo: {
        title: "Suministro de Equipos y Materiales Petroleros Venezuela | NEX",
        description: "Suministro trazable de OCTG, válvulas, químicos, repuestos y consumibles para operaciones petroleras, con certificados MTR y red de proveedores certificada.",
        keywords: "suministro petrolero venezuela, OCTG, válvulas petroleras, procura, MTR trazabilidad",
      },
    },
    en: {
      icon: "package",
      serviceType: "Oil field supply of equipment and materials",
      hero: "Supply of equipment and materials for oil operations",
      heroSub: "Traceable procurement, with material test reports and a qualified supplier network.",
      summary: "Supply of equipment, materials and consumables for oil operations, with full traceability through material test reports (MTR) and a certified supplier network. We manage procurement to minimize downtime and guarantee the technical conformity of every component.",
      capsTitle: "Supply categories",
      capabilities: [
        "OCTG: casing and production tubing",
        "Valves and line fittings",
        "Chemicals for operations and treatment",
        "Spare parts for surface and downhole equipment",
        "Welding and HSE consumables",
        "Traceability with MTR (Material Test Reports)",
        "Certified and audited supplier network",
      ],
      standards: ["API 5CT", "API 6A", "MTR / EN 10204", "ISO 9001"],
      contractModels: contractModelsEn,
      seo: {
        title: "Oil Equipment and Materials Supply Venezuela | NEX",
        description: "Traceable supply of OCTG, valves, chemicals, spare parts and consumables for oil operations, with MTR certificates and a certified supplier network.",
        keywords: "oil supply venezuela, OCTG, oilfield valves, procurement, MTR traceability",
      },
    },
  },

  engineering: {
    es: {
      icon: "compass",
      serviceType: "Petroleum engineering and consulting",
      hero: "Ingeniería y consultoría técnica para la industria de hidrocarburos",
      heroSub: "Diseño operativo, supervisión, gerencia de proyectos y consultoría especializada con personal senior certificado.",
      summary: "Ingeniería y consultoría para operaciones de hidrocarburos: diseño operativo, supervisión técnica en campo, gerencia de proyectos y consultoría especializada. Nuestro personal senior aporta certificaciones y experiencia para asegurar que cada proyecto se ejecute con criterio técnico, seguridad y control de costos.",
      capsTitle: "Servicios de ingeniería",
      capabilities: [
        "Diseño operativo y de procedimientos",
        "Supervisión técnica de operaciones en sitio",
        "Gerencia y control de proyectos",
        "Consultoría especializada en integridad y HSE",
        "Elaboración de procedimientos y matrices de riesgo",
        "Acompañamiento en calificación y auditorías",
        "Personal senior con certificaciones internacionales",
      ],
      standards: ["API Q2", "ISO 9001", "PMI / PMBOK", "ISO 45001"],
      contractModels: contractModelsEs,
      seo: {
        title: "Ingeniería y Consultoría Petrolera Venezuela | NEX",
        description: "Ingeniería y consultoría técnica para hidrocarburos: diseño operativo, supervisión, gerencia de proyectos y consultoría especializada con personal senior certificado.",
        keywords: "ingeniería petrolera venezuela, consultoría hidrocarburos, gerencia de proyectos petroleros, supervisión técnica",
      },
    },
    en: {
      icon: "compass",
      serviceType: "Petroleum engineering and consulting",
      hero: "Engineering and technical consulting for the hydrocarbon industry",
      heroSub: "Operational design, supervision, project management and specialized consulting with certified senior staff.",
      summary: "Engineering and consulting for hydrocarbon operations: operational design, on-site technical supervision, project management and specialized consulting. Our senior staff bring certifications and experience to ensure every project is executed with technical judgment, safety and cost control.",
      capsTitle: "Engineering services",
      capabilities: [
        "Operational and procedure design",
        "On-site technical supervision of operations",
        "Project management and control",
        "Specialized integrity and HSE consulting",
        "Development of procedures and risk matrices",
        "Support in qualification and audits",
        "Senior staff with international certifications",
      ],
      standards: ["API Q2", "ISO 9001", "PMI / PMBOK", "ISO 45001"],
      contractModels: contractModelsEn,
      seo: {
        title: "Petroleum Engineering and Consulting Venezuela | NEX",
        description: "Engineering and technical consulting for hydrocarbons: operational design, supervision, project management and specialized consulting with certified senior staff.",
        keywords: "petroleum engineering venezuela, hydrocarbon consulting, oil project management, technical supervision",
      },
    },
  },
};
