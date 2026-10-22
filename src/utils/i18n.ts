import es from "../i18n/es.json";
import en from "../i18n/en.json";

export type Lang = "es" | "en";
export const LANGS: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";

const DICTS = { es, en } as const;

export function useTranslations(lang: Lang) {
  return DICTS[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if (seg === "en") return "en";
  return "es";
}

/**
 * Route equivalence map between ES and EN so the language switcher
 * lands on the mirrored page rather than the home page.
 * Keys are the path AFTER the language prefix, with leading/trailing slash.
 */
const ROUTE_MAP: Record<string, string> = {
  // index
  "/": "/",
  // about
  "/nosotros/": "/about/",
  // services
  "/servicios/": "/services/",
  "/servicios/workover/": "/services/workover/",
  "/servicios/saneamiento-ambiental/": "/services/environmental-remediation/",
  "/servicios/soldadura-industrial/": "/services/industrial-welding/",
  "/servicios/suministro/": "/services/supply/",
  "/servicios/ingenieria/": "/services/engineering/",
  // pages
  "/hse-cumplimiento/": "/hse-compliance/",
  "/sistema-gestion/": "/management-system/",
  "/inversionistas/": "/investors/",
  "/carreras/": "/careers/",
  "/contacto/": "/contact/",
  "/gracias/": "/thanks/",
  // legal
  "/privacidad/": "/privacy/",
  "/terminos/": "/terms/",
  "/cookies/": "/cookies/",
};

const REVERSE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_MAP).map(([es, en]) => [en, es])
);

/**
 * Given the current pathname, return the equivalent path in `target` lang.
 */
export function getAlternatePath(pathname: string, target: Lang): string {
  const parts = pathname.split("/").filter(Boolean); // ["es", "servicios", ...]
  const current: Lang = parts[0] === "en" ? "en" : "es";
  let rest = "/" + parts.slice(1).join("/");
  if (rest !== "/" && !rest.endsWith("/")) rest += "/";
  if (rest === "//") rest = "/";

  if (current === target) return `/${target}${rest === "/" ? "/" : rest}`;

  const map = current === "es" ? ROUTE_MAP : REVERSE_MAP;
  const mapped = map[rest] ?? "/";
  return `/${target}${mapped}`;
}

/** Build the ES/EN hreflang pair for a given ES-relative route. */
export function altHrefsForEs(esRest: string): { es: string; en: string } {
  const en = ROUTE_MAP[esRest] ?? "/";
  return { es: `/es${esRest}`, en: `/en${en}` };
}

export function localizedPath(lang: Lang, rest: string): string {
  const clean = rest.startsWith("/") ? rest : `/${rest}`;
  return `/${lang}${clean}`;
}
