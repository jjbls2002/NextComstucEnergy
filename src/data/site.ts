import type { Lang } from "../utils/i18n";

/** Immutable corporate facts (CEO-approved, do not alter). */
export const CORP = {
  legalName: "NEX COMSTUCT & ENERGY, C.A.",
  displayName: "NEX Comstuct & Energy C.A.",
  rif: "J-508065115",
  president: "Robert Marrero Cueto",
  vicePresident: "Alejandro Marrero Cueto",
  email: "administracion@nexcomstuct.com",
  phone: "+58 424-437-5975",
  addressLine: "Calle Corpoindustria, Zona Industrial, Municipio Leonardo Infante",
  city: "Valle de la Pascua",
  region: "Guárico",
  country: "VE",
  countryName: "Venezuela",
  founded: "2026",
  linkedin: "#",
  instagram: "https://www.instagram.com/nexcomstuctenergy/",
  slogan: {
    es: "Construyendo el futuro, impulsando la energía.",
    en: "Building the future, powering energy.",
  },
} as const;

/** Service line route slugs by language (based on the company's registered corporate purpose). */
export const SERVICE_SLUGS = {
  civil: { es: "obras-civiles", en: "civil-works" },
  mechanical: { es: "mantenimiento-mecanico-soldadura", en: "mechanical-maintenance-welding" },
  pipelines: { es: "tuberias", en: "pipelines" },
  environmental: { es: "gestion-ambiental", en: "environmental-management" },
  chemicals: { es: "productos-quimicos", en: "chemical-products" },
  logistics: { es: "transporte-logistica", en: "transport-logistics" },
  staffing: { es: "personal-especializado", en: "specialized-staffing" },
  stations: { es: "estaciones-flujo-bombeo-almacenamiento", en: "flow-pumping-storage-stations" },
} as const;

export type ServiceKey = keyof typeof SERVICE_SLUGS;

export const SERVICES_BASE = { es: "servicios", en: "services" } as const;

export interface ServiceMeta {
  key: ServiceKey;
  num: string;
  icon: string;
  /** cover photo in /public/images */
  image: string;
  title: Record<Lang, string>;
  /** one-line summary used in the nav dropdown and cards */
  short: Record<Lang, string>;
}

export const SERVICES: ServiceMeta[] = [
  {
    key: "civil",
    num: "01",
    icon: "construction",
    image: "/images/obras-civiles.webp",
    title: { es: "Obras civiles e infraestructura", en: "Civil works & infrastructure" },
    short: { es: "Construcción, mantenimiento y pozos de agua", en: "Construction, maintenance and water wells" },
  },
  {
    key: "mechanical",
    num: "02",
    icon: "wrench",
    image: "/images/mecanica-soldadura.webp",
    title: { es: "Mantenimiento de equipos de producción y soldadura", en: "Production equipment maintenance & welding" },
    short: { es: "Balancines, separadores, motores, bombas y soldadura", en: "Pump jacks, separators, engines, pumps and welding" },
  },
  {
    key: "pipelines",
    num: "03",
    icon: "pipe",
    image: "/images/tuberias.webp",
    title: { es: "Tendido y mantenimiento de tuberías", en: "Pipeline installation & maintenance" },
    short: { es: "Líneas de 3 a 36 pulgadas", en: "Lines from 3 to 36 inches" },
  },
  {
    key: "environmental",
    num: "04",
    icon: "leaf",
    image: "/images/ambiental.webp",
    title: { es: "Gestión ambiental y saneamiento", en: "Environmental management & remediation" },
    short: { es: "Desechos, suelos, aguas y reforestación", en: "Waste, soil, water and reforestation" },
  },
  {
    key: "chemicals",
    num: "05",
    icon: "flask",
    image: "/images/quimicos.webp",
    title: { es: "Productos químicos e importación", en: "Chemical products & trade" },
    short: { es: "Compra, venta, importación y exportación", en: "Purchase, sale, import and export" },
  },
  {
    key: "logistics",
    num: "06",
    icon: "truck",
    image: "/images/transporte.webp",
    title: { es: "Transporte y logística", en: "Transport & logistics" },
    short: { es: "Carga pesada y liviana, mudanzas y taladros", en: "Heavy and light cargo, moves and rigs" },
  },
  {
    key: "staffing",
    num: "07",
    icon: "users",
    image: "/images/personal.webp",
    title: { es: "Personal y servicios operativos", en: "Staffing & operational services" },
    short: { es: "Personal clasificado y especializado", en: "Classified and specialized personnel" },
  },
  {
    key: "stations",
    num: "08",
    icon: "layers",
    image: "/images/estaciones.webp",
    title: { es: "Estaciones de flujo, bombeo y almacenamiento", en: "Flow, pumping & storage stations" },
    short: { es: "Proyectos integrales llave en mano", en: "Integrated turnkey projects" },
  },
];

export function servicePath(lang: Lang, key: ServiceKey): string {
  return `/${lang}/${SERVICES_BASE[lang]}/${SERVICE_SLUGS[key][lang]}/`;
}

/** Top-level nav definition; `rest` values are language-agnostic keys resolved below. */
export function navItems(lang: Lang) {
  const map = {
    home: { es: "/es/", en: "/en/" },
    about: { es: "/es/nosotros/", en: "/en/about/" },
    services: { es: "/es/servicios/", en: "/en/services/" },
    hse: { es: "/es/hse-cumplimiento/", en: "/en/hse-compliance/" },
    sig: { es: "/es/sistema-gestion/", en: "/en/management-system/" },
    investors: { es: "/es/inversionistas/", en: "/en/investors/" },
    careers: { es: "/es/carreras/", en: "/en/careers/" },
    contact: { es: "/es/contacto/", en: "/en/contact/" },
  };
  return {
    home: map.home[lang],
    about: map.about[lang],
    services: map.services[lang],
    hse: map.hse[lang],
    sig: map.sig[lang],
    investors: map.investors[lang],
    careers: map.careers[lang],
    contact: map.contact[lang],
  };
}
