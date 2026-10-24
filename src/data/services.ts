import type { Lang } from "../utils/i18n";
import type { ServiceKey } from "./site";

interface Seo {
  title: string;
  description: string;
  keywords?: string;
}
interface Item {
  title: string;
  text: string;
}
/** Each service page uses one of these hero layouts so pages don't repeat each other */
export type ServiceVariant = "split" | "immersive" | "editorial";

interface ServiceContent {
  variant: ServiceVariant;
  serviceType: string;
  /** eyebrow-sized label shown above the hero title */
  kicker: string;
  hero: string;
  heroSub: string;
  /** short summary for the services index */
  summary: string;
  /** opening paragraph of the page */
  intro: string;
  capsTitle: string;
  capabilities: string[];
  /** three reasons / value points */
  highlights: Item[];
  /** how the work is executed, step by step */
  process: Item[];
  /** the page's signature section, rendered differently per service */
  feature: { title: string; sub: string; items: Item[] };
  standardsTitle: string;
  standards: string[];
  contractModels: string[];
  seo: Seo;
}

type ByLang = Record<Lang, ServiceContent>;

const contractModelsEs = ["Precio unitario", "Suma alzada", "Tiempo y materiales"];
const contractModelsEn = ["Unit price", "Lump sum", "Time & materials"];

export const SERVICE_CONTENT: Record<ServiceKey, ByLang> = {
  civil: {
    es: {
      variant: "split",
      serviceType: "Civil works construction and maintenance",
      kicker: "Construcción",
      hero: "Obras civiles que sostienen la operación",
      heroSub: "Proyectamos, construimos y mantenemos infraestructura civil para instalaciones industriales, petroleras y comunitarias.",
      summary:
        "Construcción y mantenimiento de obras civiles, desde el proyecto hasta la entrega: fundaciones, estructuras, vialidad interna, galpones y perforación de pozos de agua, con supervisión técnica y control de calidad en cada etapa.",
      intro:
        "Cada instalación productiva depende de una base civil bien hecha. En NEX asumimos el proyecto y la ejecución de obras civiles con un mismo equipo, para que el diseño, los materiales y la construcción respondan a las condiciones reales del sitio y del cliente.",
      capsTitle: "Lo que construimos y mantenemos",
      capabilities: [
        "Proyectos y ejecución de obras civiles",
        "Fundaciones, losas y bases para equipos industriales",
        "Estructuras de concreto y acero, galpones y edificaciones",
        "Vialidad interna, drenajes y obras de urbanismo",
        "Mantenimiento correctivo y preventivo de infraestructura",
        "Perforación de pozos de agua para uso industrial y comunitario",
        "Movimiento de tierra y adecuación de terrenos",
      ],
      highlights: [
        { title: "Del proyecto a la entrega", text: "Un solo responsable para la ingeniería, la construcción y el cierre de la obra." },
        { title: "Control de calidad", text: "Ensayos de materiales, inspección de obra y registro documental de cada fase." },
        { title: "Obra segura", text: "Permisos de trabajo, análisis de riesgo y supervisión de seguridad en campo." },
      ],
      process: [
        { title: "Levantamiento", text: "Visita técnica, topografía y diagnóstico de las condiciones del sitio." },
        { title: "Proyecto", text: "Planos, cómputos métricos, presupuesto y cronograma de ejecución." },
        { title: "Construcción", text: "Ejecución por frentes de trabajo con inspección y control de calidad." },
        { title: "Entrega", text: "Pruebas, acta de entrega y documentación final de la obra." },
      ],
      feature: {
        title: "Tipos de obra",
        sub: "Infraestructura para cada etapa de la operación.",
        items: [
          { title: "Industrial", text: "Bases de equipos, galpones, áreas de proceso y almacenes." },
          { title: "Vialidad", text: "Accesos, vías internas, drenajes y estacionamientos." },
          { title: "Hidráulica", text: "Pozos de agua, tanques, redes y sistemas de bombeo." },
          { title: "Mantenimiento", text: "Rehabilitación y conservación de infraestructura existente." },
        ],
      },
      standardsTitle: "Marco técnico de referencia",
      standards: ["Normas COVENIN", "COVENIN 1753 (concreto)", "COVENIN 1756 (sismorresistencia)", "LOPCYMAT", "Ley de Aguas"],
      contractModels: contractModelsEs,
      seo: {
        title: "Obras Civiles e Infraestructura en Venezuela | NEX",
        description: "Construcción y mantenimiento de obras civiles, fundaciones, estructuras, vialidad y perforación de pozos de agua en Valle de la Pascua, Guárico.",
        keywords: "obras civiles venezuela, construcción guárico, mantenimiento infraestructura, perforación pozos de agua",
      },
    },
    en: {
      variant: "split",
      serviceType: "Civil works construction and maintenance",
      kicker: "Construction",
      hero: "Civil works that keep operations standing",
      heroSub: "We design, build and maintain civil infrastructure for industrial, oil and community facilities.",
      summary:
        "Construction and maintenance of civil works, from design to handover: foundations, structures, internal roads, warehouses and water well drilling, with technical supervision and quality control at every stage.",
      intro:
        "Every productive facility depends on solid civil groundwork. At NEX one team handles both the design and the execution of civil works, so the engineering, materials and construction fit the real conditions of the site and the client.",
      capsTitle: "What we build and maintain",
      capabilities: [
        "Civil works design and execution",
        "Foundations, slabs and bases for industrial equipment",
        "Concrete and steel structures, warehouses and buildings",
        "Internal roads, drainage and site development",
        "Corrective and preventive infrastructure maintenance",
        "Water well drilling for industrial and community use",
        "Earthworks and land preparation",
      ],
      highlights: [
        { title: "From design to handover", text: "One accountable team for engineering, construction and project closeout." },
        { title: "Quality control", text: "Material testing, site inspection and documented records for every phase." },
        { title: "Safe sites", text: "Work permits, risk analysis and field safety supervision." },
      ],
      process: [
        { title: "Survey", text: "Site visit, topography and assessment of site conditions." },
        { title: "Design", text: "Drawings, quantity take-offs, budget and execution schedule." },
        { title: "Construction", text: "Execution by work fronts with inspection and quality control." },
        { title: "Handover", text: "Testing, handover certificate and final project documentation." },
      ],
      feature: {
        title: "Types of work",
        sub: "Infrastructure for every stage of the operation.",
        items: [
          { title: "Industrial", text: "Equipment bases, warehouses, process areas and storage." },
          { title: "Roads", text: "Accesses, internal roads, drainage and parking areas." },
          { title: "Hydraulic", text: "Water wells, tanks, networks and pumping systems." },
          { title: "Maintenance", text: "Rehabilitation and upkeep of existing infrastructure." },
        ],
      },
      standardsTitle: "Technical reference framework",
      standards: ["COVENIN standards", "COVENIN 1753 (concrete)", "COVENIN 1756 (seismic design)", "LOPCYMAT", "Water Law"],
      contractModels: contractModelsEn,
      seo: {
        title: "Civil Works & Infrastructure in Venezuela | NEX",
        description: "Construction and maintenance of civil works, foundations, structures, roads and water well drilling in Valle de la Pascua, Guárico.",
        keywords: "civil works venezuela, construction guarico, infrastructure maintenance, water well drilling",
      },
    },
  },

  mechanical: {
    es: {
      variant: "immersive",
      serviceType: "Oilfield equipment mechanical maintenance and welding",
      kicker: "Mantenimiento",
      hero: "Equipos petroleros en condiciones de operar",
      heroSub: "Construcción, mantenimiento mecánico y soldadura de equipos para la industria petrolera, en taller y en campo.",
      summary:
        "Mantenimiento preventivo, correctivo y mayor de equipos de la industria petrolera: motores, bombas, compresores y estructuras metálicas, con soldadura y fabricación en taller o en sitio.",
      intro:
        "Un equipo detenido es producción que se pierde. Nuestro equipo mecánico diagnostica, repara y devuelve a servicio motores, bombas y equipos de superficie, y fabrica o repara estructuras con procedimientos de soldadura calificados.",
      capsTitle: "Alcance del servicio",
      capabilities: [
        "Construcción y mantenimiento de equipos de la industria petrolera",
        "Mantenimiento mayor (overhaul) de motores a gas y diésel",
        "Reparación de bombas centrífugas y reciprocantes",
        "Soldadura estructural, de tuberías y de recipientes",
        "Fabricación y montaje de estructuras metálicas",
        "Mantenimiento preventivo programado y diagnóstico de fallas",
        "Traslado de equipos, instalación y arranque en campo",
      ],
      highlights: [
        { title: "Diagnóstico con soporte", text: "Informe de condición inicial y recomendaciones antes de cada reparación." },
        { title: "Repuestos aprobados", text: "Ningún repuesto adicional se instala sin la aprobación escrita del cliente." },
        { title: "Prueba antes de entregar", text: "Pruebas en taller y arranque en campo con personal propio." },
      ],
      process: [
        { title: "Retiro y traslado", text: "Desmontaje y transporte del equipo con izamiento seguro." },
        { title: "Desarme e inspección", text: "Medición de tolerancias y evaluación de cada componente." },
        { title: "Reparación", text: "Maquinado, reemplazo de partes, soldadura y armado." },
        { title: "Prueba y arranque", text: "Prueba en taller, instalación y puesta en marcha en sitio." },
      ],
      feature: {
        title: "Equipos que atendemos",
        sub: "Mantenimiento de superficie para la operación petrolera.",
        items: [
          { title: "Motores", text: "Motores estacionarios a gas y diésel para sistemas de transferencia." },
          { title: "Bombas", text: "Bombas centrífugas y reciprocantes, extremo de fluido y de potencia." },
          { title: "Estructuras", text: "Patines, soportes, plataformas y recipientes metálicos." },
          { title: "Equipos de superficie", text: "Compresores, tanques y equipos auxiliares de estaciones." },
        ],
      },
      standardsTitle: "Marco técnico de referencia",
      standards: ["AWS D1.1", "ASME Sección IX", "ASME B31.3", "API 610", "API 674", "Recomendaciones del fabricante"],
      contractModels: contractModelsEs,
      seo: {
        title: "Mantenimiento Mecánico y Soldadura Industrial | NEX",
        description: "Construcción y mantenimiento de equipos petroleros, overhaul de motores y bombas, soldadura y estructuras metálicas en Venezuela.",
        keywords: "mantenimiento mecánico petrolero, soldadura industrial venezuela, overhaul motores, reparación bombas",
      },
    },
    en: {
      variant: "immersive",
      serviceType: "Oilfield equipment mechanical maintenance and welding",
      kicker: "Maintenance",
      hero: "Oilfield equipment ready to run",
      heroSub: "Construction, mechanical maintenance and welding of equipment for the oil industry, in the shop and in the field.",
      summary:
        "Preventive, corrective and major maintenance of oil industry equipment: engines, pumps, compressors and steel structures, with welding and fabrication in the shop or on site.",
      intro:
        "Idle equipment is lost production. Our mechanical team diagnoses, repairs and returns engines, pumps and surface equipment to service, and fabricates or repairs structures with qualified welding procedures.",
      capsTitle: "Scope of service",
      capabilities: [
        "Construction and maintenance of oil industry equipment",
        "Major overhaul of gas and diesel engines",
        "Repair of centrifugal and reciprocating pumps",
        "Structural, piping and vessel welding",
        "Fabrication and erection of steel structures",
        "Scheduled preventive maintenance and failure diagnosis",
        "Equipment transport, installation and field start-up",
      ],
      highlights: [
        { title: "Documented diagnosis", text: "Initial condition report and recommendations before every repair." },
        { title: "Approved parts", text: "No additional part is installed without the client's written approval." },
        { title: "Tested before handover", text: "Shop testing and field start-up with our own personnel." },
      ],
      process: [
        { title: "Removal and transport", text: "Dismantling and transport of the equipment with safe lifting." },
        { title: "Teardown and inspection", text: "Tolerance measurement and assessment of every component." },
        { title: "Repair", text: "Machining, part replacement, welding and assembly." },
        { title: "Test and start-up", text: "Shop test, installation and commissioning on site." },
      ],
      feature: {
        title: "Equipment we service",
        sub: "Surface maintenance for oil operations.",
        items: [
          { title: "Engines", text: "Stationary gas and diesel engines for transfer systems." },
          { title: "Pumps", text: "Centrifugal and reciprocating pumps, fluid end and power end." },
          { title: "Structures", text: "Skids, supports, platforms and steel vessels." },
          { title: "Surface equipment", text: "Compressors, tanks and auxiliary station equipment." },
        ],
      },
      standardsTitle: "Technical reference framework",
      standards: ["AWS D1.1", "ASME Section IX", "ASME B31.3", "API 610", "API 674", "Manufacturer recommendations"],
      contractModels: contractModelsEn,
      seo: {
        title: "Oilfield Mechanical Maintenance & Welding | NEX",
        description: "Construction and maintenance of oilfield equipment, engine and pump overhauls, welding and steel structures in Venezuela.",
        keywords: "oilfield mechanical maintenance, industrial welding venezuela, engine overhaul, pump repair",
      },
    },
  },

  pipelines: {
    es: {
      variant: "split",
      serviceType: "Pipeline installation and maintenance",
      kicker: "Tuberías",
      hero: "Tendido y mantenimiento de tuberías de 3 a 36 pulgadas",
      heroSub: "Instalamos, reparamos y mantenemos líneas de flujo, recolección y transferencia para la industria petrolera y de servicios.",
      summary:
        "Tendido y mantenimiento de tuberías de 3 a 36 pulgadas: excavación, alineación, soldadura, pruebas hidrostáticas, reparación de fugas y reemplazo de tramos, con control de calidad documentado.",
      intro:
        "Una línea bien instalada evita fugas, paradas y riesgos ambientales. Ejecutamos el tendido completo y el mantenimiento de tuberías con cuadrillas propias, desde la apertura de zanja hasta la prueba final y la restitución del terreno.",
      capsTitle: "Alcance del servicio",
      capabilities: [
        "Tendido de tuberías de 3 a 36 pulgadas",
        "Excavación, apertura de zanja y relleno compactado",
        "Alineación, biselado y soldadura de juntas",
        "Pruebas hidrostáticas y de hermeticidad",
        "Reparación de fugas y reemplazo de tramos",
        "Protección anticorrosiva y revestimiento de juntas",
        "Restitución del derecho de vía al finalizar",
      ],
      highlights: [
        { title: "Todos los diámetros", text: "Desde líneas de 3 pulgadas hasta troncales de 36 pulgadas." },
        { title: "Juntas inspeccionadas", text: "Procedimientos de soldadura calificados e inspección de cada junta." },
        { title: "Terreno restituido", text: "Cerramos cada obra dejando el derecho de vía en condiciones." },
      ],
      process: [
        { title: "Trazado", text: "Replanteo del recorrido, permisos y señalización del área." },
        { title: "Zanja y tendido", text: "Excavación, bajado de tubería y alineación de juntas." },
        { title: "Soldadura y prueba", text: "Soldadura, inspección y prueba hidrostática de la línea." },
        { title: "Cierre", text: "Revestimiento, relleno, restitución y entrega documentada." },
      ],
      feature: {
        title: "Rango de diámetros",
        sub: "Una misma cuadrilla para líneas pequeñas y troncales.",
        items: [
          { title: "3 a 8 pulgadas", text: "Líneas de flujo, servicios y conexiones de pozo." },
          { title: "10 a 16 pulgadas", text: "Líneas de recolección y distribución entre estaciones." },
          { title: "18 a 24 pulgadas", text: "Líneas de transferencia de crudo, gas o agua." },
          { title: "26 a 36 pulgadas", text: "Troncales y líneas principales de alto caudal." },
        ],
      },
      standardsTitle: "Marco técnico de referencia",
      standards: ["API 1104", "ASME B31.3", "ASME B31.4", "ASME B31.8", "Ley Penal del Ambiente"],
      contractModels: contractModelsEs,
      seo: {
        title: "Tendido y Mantenimiento de Tuberías 3 a 36 in | NEX",
        description: "Tendido, soldadura, pruebas hidrostáticas y mantenimiento de tuberías de 3 a 36 pulgadas para la industria petrolera en Venezuela.",
        keywords: "tendido de tuberías venezuela, mantenimiento de tuberías, soldadura de tuberías, prueba hidrostática",
      },
    },
    en: {
      variant: "split",
      serviceType: "Pipeline installation and maintenance",
      kicker: "Pipelines",
      hero: "Installation and maintenance of 3 to 36 inch pipelines",
      heroSub: "We install, repair and maintain flow, gathering and transfer lines for the oil and services industries.",
      summary:
        "Installation and maintenance of 3 to 36 inch pipelines: excavation, alignment, welding, hydrostatic testing, leak repair and section replacement, with documented quality control.",
      intro:
        "A properly installed line prevents leaks, shutdowns and environmental risks. Our own crews handle the full installation and maintenance of pipelines, from trenching to final testing and land restoration.",
      capsTitle: "Scope of service",
      capabilities: [
        "Installation of 3 to 36 inch pipelines",
        "Excavation, trenching and compacted backfill",
        "Alignment, beveling and joint welding",
        "Hydrostatic and leak-tightness testing",
        "Leak repair and section replacement",
        "Corrosion protection and joint coating",
        "Right-of-way restoration on completion",
      ],
      highlights: [
        { title: "Every diameter", text: "From 3 inch lines to 36 inch trunk lines." },
        { title: "Inspected joints", text: "Qualified welding procedures and inspection of every joint." },
        { title: "Land restored", text: "We close every job leaving the right of way in good condition." },
      ],
      process: [
        { title: "Routing", text: "Route staking, permits and site signage." },
        { title: "Trench and lay", text: "Excavation, lowering-in and joint alignment." },
        { title: "Weld and test", text: "Welding, inspection and hydrostatic testing of the line." },
        { title: "Closeout", text: "Coating, backfill, restoration and documented handover." },
      ],
      feature: {
        title: "Diameter range",
        sub: "The same crew for small lines and trunk lines.",
        items: [
          { title: "3 to 8 inches", text: "Flow lines, utilities and well connections." },
          { title: "10 to 16 inches", text: "Gathering and distribution lines between stations." },
          { title: "18 to 24 inches", text: "Crude, gas or water transfer lines." },
          { title: "26 to 36 inches", text: "High-flow trunk and main lines." },
        ],
      },
      standardsTitle: "Technical reference framework",
      standards: ["API 1104", "ASME B31.3", "ASME B31.4", "ASME B31.8", "Environmental Criminal Law"],
      contractModels: contractModelsEn,
      seo: {
        title: "3 to 36 Inch Pipeline Installation & Maintenance | NEX",
        description: "Installation, welding, hydrostatic testing and maintenance of 3 to 36 inch pipelines for the oil industry in Venezuela.",
        keywords: "pipeline installation venezuela, pipeline maintenance, pipeline welding, hydrostatic test",
      },
    },
  },

  environmental: {
    es: {
      variant: "editorial",
      serviceType: "Environmental management, waste treatment and remediation",
      kicker: "Ambiente",
      hero: "Gestión ambiental responsable y sostenible",
      heroSub: "Tratamos desechos, recuperamos suelos y cuidamos el entorno donde opera la industria.",
      summary:
        "Tratamiento, recuperación, regeneración y disposición final de desechos tóxicos, recuperación de suelos afectados por la actividad petrolera, estudios de suelo y aguas, recolección de residuos sólidos, áreas verdes y reforestación.",
      intro:
        "La actividad industrial deja huella, y gestionarla bien es parte del trabajo. Acompañamos a nuestros clientes en todo el ciclo ambiental: diagnosticamos, tratamos, disponemos y recuperamos, con prácticas responsables y la documentación que exige la normativa venezolana.",
      capsTitle: "Lo que hacemos por el entorno",
      capabilities: [
        "Tratamiento, recuperación, regeneración y disposición final de desechos tóxicos",
        "Recuperación de suelos afectados por la actividad petrolera",
        "Estudios de suelo y de calidad de aguas",
        "Recolección y manejo de residuos sólidos",
        "Mantenimiento de áreas verdes",
        "Deforestación controlada y reforestación",
        "Gestión, mantenimiento y cuidado del medio ambiente",
      ],
      highlights: [
        { title: "Ciclo completo", text: "Del diagnóstico a la disposición final, con un solo responsable." },
        { title: "Trazabilidad", text: "Registro de cada desecho desde su origen hasta su destino final." },
        { title: "Recuperación real", text: "Suelos y áreas devueltas a condiciones aptas para su uso." },
      ],
      process: [
        { title: "Diagnóstico", text: "Muestreo y estudio de suelos, aguas y desechos del sitio." },
        { title: "Tratamiento", text: "Aplicación de la técnica adecuada a cada tipo de desecho o suelo." },
        { title: "Disposición", text: "Transporte y disposición final controlada y documentada." },
        { title: "Recuperación", text: "Restitución del terreno, revegetación y seguimiento." },
      ],
      feature: {
        title: "Áreas de gestión",
        sub: "Cuatro frentes para un mismo compromiso ambiental.",
        items: [
          { title: "Desechos", text: "Tratamiento, regeneración y disposición final de desechos tóxicos." },
          { title: "Suelos y aguas", text: "Estudios, saneamiento y recuperación de áreas afectadas." },
          { title: "Residuos sólidos", text: "Recolección, clasificación y disposición de residuos." },
          { title: "Áreas verdes", text: "Mantenimiento, deforestación controlada y reforestación." },
        ],
      },
      standardsTitle: "Marco legal de referencia",
      standards: ["Ley Orgánica del Ambiente", "Ley Penal del Ambiente", "Ley de Gestión Integral de la Basura", "Ley sobre Sustancias, Materiales y Desechos Peligrosos", "Decreto 883 (calidad de aguas)"],
      contractModels: contractModelsEs,
      seo: {
        title: "Gestión Ambiental y Saneamiento de Suelos | NEX",
        description: "Tratamiento y disposición de desechos tóxicos, recuperación de suelos petroleros, estudios de suelo y aguas, residuos sólidos y reforestación.",
        keywords: "gestión ambiental venezuela, saneamiento de suelos, desechos tóxicos, reforestación, residuos sólidos",
      },
    },
    en: {
      variant: "editorial",
      serviceType: "Environmental management, waste treatment and remediation",
      kicker: "Environment",
      hero: "Responsible, sustainable environmental management",
      heroSub: "We treat waste, recover soil and care for the land where industry operates.",
      summary:
        "Treatment, recovery, regeneration and final disposal of toxic waste, recovery of soil affected by oil activity, soil and water studies, solid waste collection, green areas and reforestation.",
      intro:
        "Industrial activity leaves a footprint, and managing it well is part of the job. We support our clients through the whole environmental cycle: we assess, treat, dispose and recover, with responsible practices and the records required by Venezuelan regulations.",
      capsTitle: "What we do for the environment",
      capabilities: [
        "Treatment, recovery, regeneration and final disposal of toxic waste",
        "Recovery of soil affected by oil activity",
        "Soil and water quality studies",
        "Solid waste collection and handling",
        "Green area maintenance",
        "Controlled land clearing and reforestation",
        "Environmental management, upkeep and care",
      ],
      highlights: [
        { title: "Full cycle", text: "From assessment to final disposal, with one accountable team." },
        { title: "Traceability", text: "Each waste stream recorded from its origin to its final destination." },
        { title: "Real recovery", text: "Soil and areas returned to a condition fit for use." },
      ],
      process: [
        { title: "Assessment", text: "Sampling and study of the site's soil, water and waste." },
        { title: "Treatment", text: "The right technique for each type of waste or soil." },
        { title: "Disposal", text: "Controlled, documented transport and final disposal." },
        { title: "Recovery", text: "Land restoration, revegetation and follow-up." },
      ],
      feature: {
        title: "Management areas",
        sub: "Four fronts, one environmental commitment.",
        items: [
          { title: "Waste", text: "Treatment, regeneration and final disposal of toxic waste." },
          { title: "Soil and water", text: "Studies, remediation and recovery of affected areas." },
          { title: "Solid waste", text: "Collection, sorting and disposal of waste." },
          { title: "Green areas", text: "Maintenance, controlled clearing and reforestation." },
        ],
      },
      standardsTitle: "Legal reference framework",
      standards: ["Organic Environmental Law", "Environmental Criminal Law", "Integrated Waste Management Law", "Hazardous Substances, Materials and Waste Law", "Decree 883 (water quality)"],
      contractModels: contractModelsEn,
      seo: {
        title: "Environmental Management & Soil Remediation | NEX",
        description: "Toxic waste treatment and disposal, oil-affected soil recovery, soil and water studies, solid waste and reforestation.",
        keywords: "environmental management venezuela, soil remediation, toxic waste, reforestation, solid waste",
      },
    },
  },

  chemicals: {
    es: {
      variant: "split",
      serviceType: "Chemical products supply, import and export",
      kicker: "Suministro",
      hero: "Productos químicos para la operación, a tiempo",
      heroSub: "Compra, venta, importación y exportación de productos químicos y de insumos relacionados con la industria.",
      summary:
        "Compra y venta de productos químicos para la industria petrolera y de servicios, e importación y exportación de productos relacionados con nuestro objeto, con manejo seguro, documentación y entrega en sitio.",
      intro:
        "La continuidad de una operación depende de que los insumos lleguen completos y a tiempo. Gestionamos la compra, importación y entrega de productos químicos y materiales relacionados, con hojas de seguridad, almacenamiento adecuado y transporte controlado.",
      capsTitle: "Lo que suministramos",
      capabilities: [
        "Compra y venta de productos químicos industriales",
        "Importación y exportación de productos relacionados con nuestro objeto",
        "Gestión de compras y abastecimiento para proyectos",
        "Hojas de seguridad, etiquetado y documentación de cada producto",
        "Almacenamiento y despacho bajo condiciones controladas",
        "Entrega en sitio con transporte propio",
      ],
      highlights: [
        { title: "Abastecimiento continuo", text: "Planificamos las entregas según el consumo real de la operación." },
        { title: "Manejo seguro", text: "Embalaje, rotulado y transporte conforme a la normativa de materiales peligrosos." },
        { title: "Comercio exterior", text: "Gestión de importación y exportación de punta a punta." },
      ],
      process: [
        { title: "Requerimiento", text: "Especificación técnica del producto, volumen y frecuencia." },
        { title: "Cotización", text: "Oferta con origen, tiempos de entrega y documentación." },
        { title: "Gestión", text: "Compra, importación, nacionalización y almacenamiento." },
        { title: "Entrega", text: "Despacho y entrega en sitio con soportes de calidad." },
      ],
      feature: {
        title: "Categorías",
        sub: "Insumos para la operación industrial y petrolera.",
        items: [
          { title: "Tratamiento de crudo", text: "Desemulsificantes y productos para el manejo de crudo." },
          { title: "Control de depósitos", text: "Inhibidores de incrustaciones, parafinas y asfaltenos." },
          { title: "Tratamiento de agua", text: "Productos para el acondicionamiento de agua industrial." },
          { title: "Insumos generales", text: "Productos químicos para mantenimiento y servicios." },
        ],
      },
      standardsTitle: "Marco legal de referencia",
      standards: ["Ley sobre Sustancias, Materiales y Desechos Peligrosos", "Sistema Globalmente Armonizado (SGA)", "Hojas de seguridad (SDS)", "Normativa aduanera venezolana"],
      contractModels: contractModelsEs,
      seo: {
        title: "Productos Químicos, Importación y Exportación | NEX",
        description: "Compra, venta, importación y exportación de productos químicos industriales y petroleros con manejo seguro y entrega en sitio en Venezuela.",
        keywords: "productos químicos venezuela, químicos petroleros, importación exportación, suministro industrial",
      },
    },
    en: {
      variant: "split",
      serviceType: "Chemical products supply, import and export",
      kicker: "Supply",
      hero: "Chemical products for the operation, on time",
      heroSub: "Purchase, sale, import and export of chemical products and industry-related supplies.",
      summary:
        "Purchase and sale of chemical products for the oil and services industries, and import and export of products related to our purpose, with safe handling, documentation and on-site delivery.",
      intro:
        "Operational continuity depends on supplies arriving complete and on time. We manage the purchase, import and delivery of chemical products and related materials, with safety data sheets, proper storage and controlled transport.",
      capsTitle: "What we supply",
      capabilities: [
        "Purchase and sale of industrial chemical products",
        "Import and export of products related to our purpose",
        "Procurement and supply management for projects",
        "Safety data sheets, labeling and documentation for every product",
        "Storage and dispatch under controlled conditions",
        "On-site delivery with our own transport",
      ],
      highlights: [
        { title: "Continuous supply", text: "Deliveries planned around the operation's actual consumption." },
        { title: "Safe handling", text: "Packaging, labeling and transport under hazardous materials rules." },
        { title: "Foreign trade", text: "End-to-end import and export management." },
      ],
      process: [
        { title: "Requirement", text: "Technical product specification, volume and frequency." },
        { title: "Quotation", text: "Offer with origin, lead times and documentation." },
        { title: "Management", text: "Purchase, import, customs clearance and storage." },
        { title: "Delivery", text: "Dispatch and on-site delivery with quality records." },
      ],
      feature: {
        title: "Categories",
        sub: "Supplies for industrial and oil operations.",
        items: [
          { title: "Crude treatment", text: "Demulsifiers and products for crude handling." },
          { title: "Deposit control", text: "Scale, paraffin and asphaltene inhibitors." },
          { title: "Water treatment", text: "Products for industrial water conditioning." },
          { title: "General supplies", text: "Chemical products for maintenance and services." },
        ],
      },
      standardsTitle: "Legal reference framework",
      standards: ["Hazardous Substances, Materials and Waste Law", "Globally Harmonized System (GHS)", "Safety data sheets (SDS)", "Venezuelan customs regulations"],
      contractModels: contractModelsEn,
      seo: {
        title: "Chemical Products, Import & Export | NEX",
        description: "Purchase, sale, import and export of industrial and oilfield chemical products with safe handling and on-site delivery in Venezuela.",
        keywords: "chemical products venezuela, oilfield chemicals, import export, industrial supply",
      },
    },
  },

  logistics: {
    es: {
      variant: "immersive",
      serviceType: "Heavy and light cargo transport, moves and rig transport",
      kicker: "Logística",
      hero: "Transporte de carga que llega a donde está la operación",
      heroSub: "Carga pesada y liviana, mudanzas industriales y transporte de taladros con planificación y seguridad.",
      summary:
        "Servicio de transporte de carga pesada y liviana, mudanzas y transporte de taladro, con planificación de rutas, aseguramiento de carga y personal capacitado en movilización de equipos.",
      intro:
        "Mover un taladro o un equipo pesado exige planificación, el equipo adecuado y gente que conozca el terreno. Organizamos cada movilización de principio a fin, desde la evaluación de la ruta hasta la descarga segura en destino.",
      capsTitle: "Servicios de transporte",
      capabilities: [
        "Transporte de carga pesada y sobredimensionada",
        "Transporte de carga liviana y suministros",
        "Transporte y mudanza de taladros",
        "Mudanzas industriales y de oficinas",
        "Izamiento, carga y aseguramiento de equipos",
        "Planificación de rutas y escolta de carga",
      ],
      highlights: [
        { title: "Ruta evaluada", text: "Revisamos accesos, puentes y condiciones de vía antes de mover la carga." },
        { title: "Carga asegurada", text: "Amarre, señalización y aseguramiento según el tipo de equipo." },
        { title: "Movilización completa", text: "Carga, traslado, descarga y posicionamiento en sitio." },
      ],
      process: [
        { title: "Evaluación", text: "Dimensiones, peso, origen, destino y condiciones de la ruta." },
        { title: "Planificación", text: "Equipo de transporte, permisos, escolta y cronograma." },
        { title: "Traslado", text: "Carga segura, movilización y seguimiento durante el recorrido." },
        { title: "Entrega", text: "Descarga, posicionamiento y conformidad del cliente." },
      ],
      feature: {
        title: "Tipos de carga",
        sub: "Desde suministros hasta equipos completos de perforación.",
        items: [
          { title: "Carga pesada", text: "Equipos industriales, maquinaria y estructuras." },
          { title: "Carga liviana", text: "Suministros, materiales y repuestos." },
          { title: "Taladros", text: "Mudanza de equipos de perforación entre localizaciones." },
          { title: "Mudanzas", text: "Traslado de oficinas, campamentos e instalaciones." },
        ],
      },
      standardsTitle: "Marco legal de referencia",
      standards: ["Ley de Transporte Terrestre", "LOPCYMAT", "Ley sobre Sustancias, Materiales y Desechos Peligrosos", "Permisos de carga sobredimensionada"],
      contractModels: contractModelsEs,
      seo: {
        title: "Transporte de Carga Pesada y Mudanza de Taladros | NEX",
        description: "Transporte de carga pesada y liviana, mudanzas industriales y transporte de taladros con planificación de rutas en Venezuela.",
        keywords: "transporte carga pesada venezuela, mudanza de taladros, transporte de taladro, logística petrolera",
      },
    },
    en: {
      variant: "immersive",
      serviceType: "Heavy and light cargo transport, moves and rig transport",
      kicker: "Logistics",
      hero: "Cargo transport that reaches the operation",
      heroSub: "Heavy and light cargo, industrial moves and rig transport, planned and executed safely.",
      summary:
        "Heavy and light cargo transport, moves and rig transport, with route planning, load securing and personnel trained in equipment mobilization.",
      intro:
        "Moving a rig or heavy equipment takes planning, the right equipment and people who know the terrain. We organize every mobilization from start to finish, from route assessment to safe unloading at destination.",
      capsTitle: "Transport services",
      capabilities: [
        "Heavy and oversized cargo transport",
        "Light cargo and supplies transport",
        "Rig transport and rig moves",
        "Industrial and office moves",
        "Lifting, loading and securing of equipment",
        "Route planning and cargo escort",
      ],
      highlights: [
        { title: "Route assessed", text: "We check accesses, bridges and road conditions before moving the load." },
        { title: "Load secured", text: "Tie-down, signage and securing according to the equipment type." },
        { title: "Full mobilization", text: "Loading, transport, unloading and positioning on site." },
      ],
      process: [
        { title: "Assessment", text: "Dimensions, weight, origin, destination and route conditions." },
        { title: "Planning", text: "Transport equipment, permits, escort and schedule." },
        { title: "Transport", text: "Safe loading, mobilization and tracking along the route." },
        { title: "Delivery", text: "Unloading, positioning and client sign-off." },
      ],
      feature: {
        title: "Cargo types",
        sub: "From supplies to complete drilling equipment.",
        items: [
          { title: "Heavy cargo", text: "Industrial equipment, machinery and structures." },
          { title: "Light cargo", text: "Supplies, materials and spare parts." },
          { title: "Rigs", text: "Moving drilling equipment between locations." },
          { title: "Moves", text: "Relocation of offices, camps and facilities." },
        ],
      },
      standardsTitle: "Legal reference framework",
      standards: ["Land Transport Law", "LOPCYMAT", "Hazardous Substances, Materials and Waste Law", "Oversized load permits"],
      contractModels: contractModelsEn,
      seo: {
        title: "Heavy Cargo Transport & Rig Moves | NEX",
        description: "Heavy and light cargo transport, industrial moves and rig transport with route planning in Venezuela.",
        keywords: "heavy cargo transport venezuela, rig moves, rig transport, oilfield logistics",
      },
    },
  },

  staffing: {
    es: {
      variant: "editorial",
      serviceType: "Classified and specialized staffing and operational services",
      kicker: "Talento",
      hero: "Personal calificado para cada frente de trabajo",
      heroSub: "Suministro de personal clasificado y especializado, y ejecución de servicios en áreas operativas y administrativas.",
      summary:
        "Suministro y clasificación de personal especializado para distintos sectores productivos, y ejecución de servicios en áreas operativas y administrativas, con cumplimiento laboral y formación en seguridad.",
      intro:
        "Los proyectos avanzan con la gente correcta en el lugar correcto. Seleccionamos, clasificamos y gestionamos personal técnico, operativo y administrativo, y también asumimos la ejecución de servicios completos dentro de las instalaciones del cliente.",
      capsTitle: "Lo que ofrecemos",
      capabilities: [
        "Suministro de personal clasificado y especializado",
        "Reclutamiento, selección y clasificación por competencias",
        "Personal técnico, operativo y de oficios para campo",
        "Personal administrativo y de apoyo",
        "Ejecución de servicios en áreas operativas y administrativas",
        "Inducción en seguridad y salud laboral antes de cada asignación",
      ],
      highlights: [
        { title: "Perfiles verificados", text: "Validación de experiencia, competencias y documentación de cada trabajador." },
        { title: "Cumplimiento laboral", text: "Relación laboral conforme a la LOTTT y a la seguridad social." },
        { title: "Respuesta rápida", text: "Cobertura de vacantes y relevos según las necesidades del proyecto." },
      ],
      process: [
        { title: "Requerimiento", text: "Perfil, cantidad, duración y condiciones del puesto." },
        { title: "Selección", text: "Reclutamiento, evaluación y clasificación de candidatos." },
        { title: "Inducción", text: "Formación en seguridad, normas del cliente y del sitio." },
        { title: "Gestión", text: "Administración del personal, relevos y seguimiento del desempeño." },
      ],
      feature: {
        title: "Perfiles disponibles",
        sub: "Personal para los distintos sectores productivos.",
        items: [
          { title: "Técnicos", text: "Mecánicos, soldadores, electricistas e instrumentistas." },
          { title: "Operativos", text: "Operadores, ayudantes, choferes y cuadrillas de campo." },
          { title: "Supervisión", text: "Supervisores de obra, de seguridad y de mantenimiento." },
          { title: "Administrativos", text: "Analistas, asistentes y personal de apoyo." },
        ],
      },
      standardsTitle: "Marco legal de referencia",
      standards: ["LOTTT", "LOPCYMAT", "Ley del Seguro Social", "Solvencia laboral"],
      contractModels: contractModelsEs,
      seo: {
        title: "Suministro de Personal Especializado | NEX",
        description: "Suministro de personal clasificado y especializado y ejecución de servicios en áreas operativas y administrativas en Venezuela.",
        keywords: "suministro de personal venezuela, personal especializado, personal petrolero, servicios operativos",
      },
    },
    en: {
      variant: "editorial",
      serviceType: "Classified and specialized staffing and operational services",
      kicker: "Talent",
      hero: "Qualified people for every work front",
      heroSub: "Supply of classified and specialized personnel, and execution of services in operational and administrative areas.",
      summary:
        "Supply and classification of specialized personnel for different productive sectors, and execution of services in operational and administrative areas, with labor compliance and safety training.",
      intro:
        "Projects move forward with the right people in the right place. We recruit, classify and manage technical, operational and administrative personnel, and we also take on complete services inside the client's facilities.",
      capsTitle: "What we offer",
      capabilities: [
        "Supply of classified and specialized personnel",
        "Recruitment, selection and classification by competencies",
        "Technical, operational and trades personnel for the field",
        "Administrative and support personnel",
        "Execution of services in operational and administrative areas",
        "Health and safety induction before every assignment",
      ],
      highlights: [
        { title: "Verified profiles", text: "Validation of each worker's experience, skills and documents." },
        { title: "Labor compliance", text: "Employment under the LOTTT labor law and social security." },
        { title: "Fast response", text: "Vacancy and shift coverage according to project needs." },
      ],
      process: [
        { title: "Requirement", text: "Profile, headcount, duration and job conditions." },
        { title: "Selection", text: "Recruitment, assessment and classification of candidates." },
        { title: "Induction", text: "Safety training and client and site rules." },
        { title: "Management", text: "Personnel administration, shift changes and performance follow-up." },
      ],
      feature: {
        title: "Available profiles",
        sub: "Personnel for different productive sectors.",
        items: [
          { title: "Technicians", text: "Mechanics, welders, electricians and instrument technicians." },
          { title: "Operations", text: "Operators, helpers, drivers and field crews." },
          { title: "Supervision", text: "Site, safety and maintenance supervisors." },
          { title: "Administration", text: "Analysts, assistants and support staff." },
        ],
      },
      standardsTitle: "Legal reference framework",
      standards: ["LOTTT (labor law)", "LOPCYMAT", "Social Security Law", "Labor compliance certificate"],
      contractModels: contractModelsEn,
      seo: {
        title: "Specialized Staffing Services | NEX",
        description: "Supply of classified and specialized personnel and execution of services in operational and administrative areas in Venezuela.",
        keywords: "staffing venezuela, specialized personnel, oilfield personnel, operational services",
      },
    },
  },
};
