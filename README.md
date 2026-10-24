# NEX Comstuct & Energy C.A. — Sitio web corporativo

Sitio web institucional **bilingüe (ES/EN)** de NEX COMSTUCT & ENERGY, C.A., empresa venezolana de servicios petroleros (RIF J-508065115), domiciliada en Valle de la Pascua, Estado Guárico.

> Slogan: **"Construyendo el futuro, impulsando la energía." / "Building the future, powering energy."**

---

## Stack tecnológico

| Área | Tecnología |
|------|------------|
| Framework | [Astro](https://astro.build) 5 (SSG puro, cero JS por defecto) |
| Estilos | Tailwind CSS 3.4 — tema **oscuro de lujo** (fondo `#0B0B0B`, texto crema `#F4F1E9`, oro `#C8A84B`, gris `#9A9488`), tipografía Inter y barra de navegación flotante tipo píldora, en línea con el estilo de barpilares.com |
| i18n | Rutas `/es/*` y `/en/*` con selector persistente (cookie `nex_lang`) |
| SEO | Componente `<SEO>` + `<StructuredData>` (JSON-LD) + `@astrojs/sitemap` |
| Formularios | Netlify Forms (atributos `data-netlify`) + validación cliente + honeypot |
| Contenido | Datos tipados en `src/data/*` e i18n en `src/i18n/*.json` |
| Node | 20 LTS o superior (probado en 24) |
| Gestor de paquetes | pnpm |

---

## Requisitos previos

- **Node.js 20+** (`node --version`)
- **pnpm** (`npm install -g pnpm` si no está instalado)

---

## Comandos

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo (http://localhost:4321)
pnpm build        # build de producción a dist/
pnpm preview      # previsualizar el build de producción
pnpm check        # verificación de tipos (astro check)
```

> Nota: en la primera instalación pnpm puede pedir aprobar los *build scripts* de `esbuild`/`sharp`. En este proyecto los binarios prebuilt ya funcionan; el aviso es inofensivo. `sharp` solo se usa para regenerar favicons/OG (ver más abajo), no en el build del sitio.

---

## Estructura de directorios

```
src/
├── components/     # Header, Footer, SEO, StructuredData, Hero, ServiceCard, ContactForm, CookieConsent, Icon…
├── layouts/        # BaseLayout (todas las páginas) · LegalLayout (páginas legales)
├── pages/
│   ├── index.astro         # redirección raíz por idioma → /es/ o /en/
│   ├── 404.astro           # página 404 bilingüe
│   ├── es/                 # 17 páginas en español
│   └── en/                 # 17 páginas en inglés
├── data/           # site.ts (datos corporativos + nav) · services.ts (contenido de servicios)
├── i18n/           # es.json · en.json (strings globales de UI)
├── styles/         # global.css (design tokens + utilidades)
└── utils/          # i18n.ts (mapa de rutas ES↔EN) · seo.ts
public/             # favicons, og-images, robots.txt, site.webmanifest, logos SVG
```

---

## Cómo editar contenido

- **Textos globales (nav, footer, formularios, cookies):** `src/i18n/es.json` y `src/i18n/en.json`.
- **Datos corporativos (RIF, dirección, email, teléfono, redes):** `src/data/site.ts` → constante `CORP`.
- **Contenido de las 5 líneas de servicio (capacidades, estándares, SEO):** `src/data/services.ts`. Editar aquí actualiza automáticamente el índice y las 10 páginas de detalle (ES/EN).
- **Contenido de cada página (hero, secciones):** inline en el `.astro` correspondiente dentro de `src/pages/es/` o `src/pages/en/`.

> **Importante:** el nombre legal es **"NEX COMSTUCT & ENERGY C.A."** (con *COMSTUCT*, decisión intencional). No corregir a "CONSTRUCT".

---

## Cómo agregar una nueva página

1. Crear `src/pages/es/mi-pagina.astro` y `src/pages/en/my-page.astro`.
2. Usar `BaseLayout` con props `title`, `description`, `esRest`, `enRest` (rutas relativas con `/` inicial y final), `breadcrumbs`.
3. Registrar la equivalencia de ruta en `src/utils/i18n.ts` → `ROUTE_MAP` para que el selector de idioma preserve la ruta.
4. (Opcional) Añadir el enlace en `src/data/site.ts` → `navItems()` y en `Header.astro` / `Footer.astro`.

---

## Internacionalización (ES/EN)

- El selector de idioma del header/footer usa `getAlternatePath()` (`src/utils/i18n.ts`) para saltar a la página equivalente, no al home.
- La elección se guarda en la cookie `nex_lang` (1 año). La raíz `/` detecta cookie / `Accept-Language` en cliente y redirige.
- Para **detección server-side por `Accept-Language`**, los archivos `netlify.toml` / `vercel.json` incluyen una redirección `/ → /es/`; puede sustituirse por lógica de edge si se desea negociación de idioma real.

---

## SEO

- Cada página emite `title`, `description`, `canonical`, `hreflang` (es/en/x-default), Open Graph y Twitter Card mediante `<SEO>`.
- JSON-LD: `Organization` (home), `Service` (páginas de servicio) y `BreadcrumbList` (páginas internas). Validar en <https://validator.schema.org/>.
- `sitemap-index.xml` se genera en cada build con alternantes hreflang. `robots.txt` lo referencia.

---

## Formularios

Los formularios usan **Netlify Forms** (`data-netlify="true"` + honeypot `nex_hp`). Al desplegar en Netlify se detectan automáticamente y los envíos llegan al panel de Netlify; configurar notificación por email a `nexconstuctenergy@gmail.com`.

Para otro hosting, apuntar el `action` a un endpoint serverless propio (`/api/contact`) con validación server-side y, opcionalmente, reCAPTCHA v3 (variable `PUBLIC_RECAPTCHA_SITE_KEY`).

Tras el envío se redirige a `/es/gracias/` o `/en/thanks/` (ambas `noindex`).

---

## Cookies (GDPR-lite + LOPD Venezuela)

- Banner + modal de 3 categorías (necesarias / analíticas / marketing) en `CookieConsent.astro`.
- Decisión persistida en `localStorage` bajo `nex_cookie_consent`.
- Google Analytics 4 se carga **solo** si el usuario acepta cookies analíticas y `PUBLIC_GA4_ID` está definido.
- Botón "Cambiar preferencias" en el footer y en la página `/cookies/`.

---

## Variables de entorno

Copiar `.env.example` a `.env` y completar:

```
PUBLIC_SITE_URL=https://nexcomstuct.com
PUBLIC_GA4_ID=                 # ID de Google Analytics 4 (opcional)
PUBLIC_RECAPTCHA_SITE_KEY=     # reCAPTCHA v3 (opcional)
RECAPTCHA_SECRET_KEY=
CONTACT_FORM_TO_EMAIL=administracion@nexcomstuct.com
SMTP_HOST= / SMTP_PORT= / SMTP_USER= / SMTP_PASS=
```

---

## Despliegue

### Netlify
1. Conectar el repositorio.
2. Build command: `pnpm build` · Publish directory: `dist`.
3. `netlify.toml` ya define headers de seguridad, CSP, cache y la redirección raíz.
4. En *Forms*, activar notificaciones al email de contacto.

### Vercel
1. Importar el proyecto (framework detectado: Astro).
2. `vercel.json` define headers de seguridad, CSP y redirección raíz.

### Cloudflare Pages
- Build command `pnpm build`, output `dist`. Configurar los headers de seguridad vía `_headers` (equivalente al `netlify.toml`).

### DNS (dominio nexcomstuct.com)
Apuntar el dominio al hosting elegido:
- **Netlify:** registro `A` a `75.2.60.5` o `CNAME` a `<site>.netlify.app` (seguir el panel de Netlify).
- **Vercel:** `A` a `76.76.21.21` o `CNAME` a `cname.vercel-dns.com`.
- Activar HTTPS automático y forzar redirección `www → apex` (o viceversa) según preferencia.

---

## Regenerar favicons / OG images

Los assets de `public/` (favicons PNG, `favicon.ico`, `og-image*.jpg`) se generan desde los SVG con `sharp`. Si se actualiza el logo, ejecutar un script equivalente al usado en la entrega (rasteriza `favicon.svg` a los tamaños requeridos y compone las OG 1200×630).

---

## Accesibilidad y rendimiento

- WCAG 2.1 AA: contraste navy/gold/blanco, foco visible (`ring` dorado), landmarks semánticos, skip-link, un solo `h1` por página, `alt` en imágenes, navegación por teclado.
- Rendimiento: SSG puro, CSS crítico inline (Astro), imágenes SVG, fuentes con `font-display: swap`, `loading="lazy"` en mapas/imágenes.
- **TODO v2 (rendimiento):** self-hostear Inter/Fraunces en `public/fonts/` (actualmente vía Google Fonts con preconnect); reemplazar los placeholders `<!-- TODO: real photo -->` por fotografías reales de operaciones.

---

## Roadmap v2

- Blog / sala de prensa (colección de contenido MDX).
- Portal de cliente / documentación bajo NDA con autenticación.
- Endpoint serverless propio para formularios + almacenamiento (Airtable/Sheets) y subida de CV a storage con URL firmada.
- Self-hosting de fuentes y CSP endurecida con hashes en lugar de `unsafe-inline`.

---

© 2026 NEX COMSTUCT & ENERGY C.A. — Todos los derechos reservados.
