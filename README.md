
# porfolio.dev

Portfolio personal construido con Astro + Tailwind CSS.

- Sitio: `https://guillermoteijeiro.dev/`
- Idioma: Español

## Stack

- Astro 4
- Tailwind CSS (modo oscuro por clase: `dark`)
- TypeScript (config strict)
- View Transitions (`astro:transitions`)
- Robots.txt (`astro-robots-txt`)

## Requisitos

- Node.js (recomendado LTS 18/20+)
- Gestor de paquetes: `pnpm` (hay `pnpm-lock.yaml`)

Si no tenés pnpm instalado:

```bash
npm i -g pnpm
```

## Instalación

```bash
pnpm install
```

## Ejecutar en desarrollo

```bash
pnpm dev
```

Astro te mostrará la URL en consola (por defecto suele ser `http://localhost:4321`).

### Nota (Windows / PowerShell)

Si PowerShell muestra un error del estilo “running scripts is disabled… npm.ps1”, podés:

- Habilitar para tu usuario (recomendado):

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

- O solo para la sesión actual:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Alternativa sin tocar policies: usar `pnpm.cmd` / `npm.cmd`.

## Scripts

```bash
pnpm dev      # servidor de desarrollo
pnpm build    # type-check + build a /dist
pnpm preview  # servir /dist localmente
```

## Estructura del proyecto

```text
public/
	favicon.svg
	me.png
	me2.jpeg
	porfolio.webp
	projects/

src/
	components/
		AboutMe.astro
		Experience.astro
		ExperienceItem.astro
		Projects.astro
		Header.astro
		Footer.astro
		ThemeToggle.astro
		...
	layouts/
		Layout.astro
	pages/
		index.astro
		components.astro
```

## Personalización (dónde editar contenido)

### Home / secciones

La página principal vive en [src/pages/index.astro](src/pages/index.astro).

Secciones actuales:

- `#experiencia`
- `#proyectos`
- `#sobre-mi`

### Navegación

Los ítems del header están en [src/components/Header.astro](src/components/Header.astro) (array `navItems`).

### Hero (presentación + links)

El bloque inicial (nombre, ubicación, CTA a email/LinkedIn, badge) está en [src/components/Hero.astro](src/components/Hero.astro).

### Experiencia

El contenido de experiencia es data embebida en [src/components/Experience.astro](src/components/Experience.astro) (array `EXPERIENCE`).

Cada ítem se renderiza con [src/components/ExperienceItem.astro](src/components/ExperienceItem.astro).

### Proyectos

Los proyectos se definen en [src/components/Projects.astro](src/components/Projects.astro) (array `PROJECTS`).

Imágenes recomendadas:

- Guardalas en `public/projects/`
- Referencialas como `"/projects/mi-imagen.webp"` en el campo `image`

### Sobre mí

El texto “Sobre mí” está en [src/components/AboutMe.astro](src/components/AboutMe.astro).

### Tema (Light/Dark/System)

El selector de tema está en [src/components/ThemeToggle.astro](src/components/ThemeToggle.astro).

- Guarda la preferencia en `localStorage` bajo la key `theme`
- Aplica/quita la clase `dark` en `document.documentElement`

## Configuración

### URL del sitio

La URL canonical del sitio está configurada en [astro.config.mjs](astro.config.mjs) vía `site`.

### Tailwind

Configuración en [tailwind.config.mjs](tailwind.config.mjs). El modo oscuro es `darkMode: 'class'`.

### TypeScript

Config strict + alias `@/*` en [tsconfig.json](tsconfig.json).

## Build y deploy

Astro genera salida estática en `dist/` al correr `pnpm build`.

Opciones comunes:

- Vercel / Netlify: deploy del output de `dist/` (o usando el build command `pnpm build`).
- GitHub Pages / static hosting: subir el contenido de `dist/`.

Tips:

- Si cambiás el dominio, actualizá `site` en [astro.config.mjs](astro.config.mjs) para sitemaps/URLs absolutas.
- `astro-robots-txt` genera `robots.txt` según la configuración del sitio.

## Licencia

Este proyecto incluye una licencia Creative Commons **Attribution-NonCommercial 4.0 International**.

Ver [LICENSE.md](LICENSE.md).

