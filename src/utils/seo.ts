import type { Lang } from "./i18n";

export const SITE_URL =
  (import.meta.env.PUBLIC_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://nexcomstuct.com";

export interface SeoInput {
  title: string;
  description: string;
  keywords?: string;
  /** ES-relative route path incl. leading + trailing slash, e.g. "/servicios/tuberias/" */
  esRest: string;
  /** EN-relative route path incl. leading + trailing slash */
  enRest: string;
  lang: Lang;
  image?: string;
  noindex?: boolean;
}

export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export function buildSeo(input: SeoInput) {
  const esUrl = absoluteUrl(`/es${input.esRest}`);
  const enUrl = absoluteUrl(`/en${input.enRest}`);
  const canonical = input.lang === "es" ? esUrl : enUrl;
  const image = absoluteUrl(
    input.image ?? (input.lang === "es" ? "/og-image.jpg" : "/og-image-en.jpg")
  );
  return {
    canonical,
    esUrl,
    enUrl,
    xDefault: esUrl,
    image,
    ogLocale: input.lang === "es" ? "es_VE" : "en_US",
    ogLocaleAlt: input.lang === "es" ? "en_US" : "es_VE",
  };
}
