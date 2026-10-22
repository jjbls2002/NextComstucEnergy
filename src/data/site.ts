import type { Lang } from "../utils/i18n";

/** Immutable corporate facts (CEO-approved, do not alter). */
export const CORP = {
  legalName: "NEX COMSTUCT & ENERGY C.A.",
  displayName: "NEX Comstuct & Energy C.A.",
  rif: "J-508065115",
  president: "Robert Alexis Marrero Cueto",
  email: "nexconstuctenergy@gmail.com",
  phone: "+58 000-0000000",
  addressLine: "Calle Corpo Industria",
  city: "Valle de la Pascua",
  region: "Guárico",
  country: "VE",
  countryName: "Venezuela",
  founded: "2026",
  linkedin: "#",
  instagram: "#",
  slogan: {
    es: "Construyendo el futuro, impulsando la energía.",
    en: "Building the future, powering energy.",
  },
} as const;

/** Service line route slugs by language. */
export const SERVICE_SLUGS = {
  workover: { es: "workover", en: "workover" },
  environmental: { es: "saneamiento-ambiental", en: "environmental-remediation" },
  welding: { es: "soldadura-industrial", en: "industrial-welding" },
  supply: { es: "suministro", en: "supply" },
  engineering: { es: "ingenieria", en: "engineering" },
} as const;

export type ServiceKey = keyof typeof SERVICE_SLUGS;

export const SERVICES_BASE = { es: "servicios", en: "services" } as const;

export interface ServiceMeta {
  key: ServiceKey;
  num: string;
  title: Record<Lang, string>;
  /** one-line summary used in the nav dropdown */
  short: Record<Lang, string>;
}

export const SERVICES: ServiceMeta[] = [
  {
    key: "workover",
    num: "01",
    title: { es: "Workover y Pulling", en: "Workover & Pulling" },
    short: { es: "Intervención y reacondicionamiento de pozos", en: "Well intervention and workover" },
  },
  {
    key: "environmental",
    num: "02",
    title: { es: "Saneamiento ambiental", en: "Environmental remediation" },
    short: { es: "Remediación de suelos y aguas", en: "Soil and water remediation" },
  },
  {
    key: "welding",
    num: "03",
    title: { es: "Soldadura industrial", en: "Industrial welding" },
    short: { es: "Soldadura certificada ASME IX y AWS D1.1", en: "ASME IX and AWS D1.1 certified welding" },
  },
  {
    key: "supply",
    num: "04",
    title: { es: "Suministro", en: "Supply" },
    short: { es: "Equipos y materiales con trazabilidad", en: "Traceable equipment and materials" },
  },
  {
    key: "engineering",
    num: "05",
    title: { es: "Ingeniería y consultoría", en: "Engineering & consulting" },
    short: { es: "Diseño, supervisión y gerencia de proyectos", en: "Design, supervision and project management" },
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
