// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

const SITE = process.env.PUBLIC_SITE_URL || "https://www.nexcomstuct.com";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-VE",
          en: "en-US",
        },
      },
      filter: (page) =>
        !page.includes("/gracias/") &&
        !page.includes("/thanks/") &&
        !page.includes("/404") &&
        page !== `${SITE}/` &&
        page !== SITE,
      changefreq: "monthly",
      priority: 0.7,
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
