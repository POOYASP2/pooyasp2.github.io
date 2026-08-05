# Pooya Sharifi — Astro Portfolio

A static personal website built with Astro, TypeScript-ready `.astro` components,
and plain CSS. It is configured for GitHub Pages.

## Current routes

- `/` — landing page
- `/blog/` — placeholder for the blog
- `/now/` — placeholder for the Now page
- `/cv/` — placeholder for the CV

## Requirements

Use Node.js 24 or another version supported by your installed Astro release.

## Run locally

```bash
npm install
npm run dev
```

Astro will print the local address, normally:

```text
http://localhost:4321
```

## Build locally

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Customize before publishing

Edit these files:

### Personal text

```text
src/pages/index.astro
src/components/TerminalPanel.astro
```

### Social links

```text
src/components/SocialRail.astro
```

Replace:

- `https://github.com/your-github`
- `hello@example.com`

The LinkedIn URL is already set to:

```text
https://www.linkedin.com/in/pooya-sharifi/
```

### Colors and layout

```text
src/styles/global.css
```

The main color variables are at the top of the stylesheet.

### Blueprint background

```text
src/components/BlueprintBackground.astro
```

The background is an inline SVG, so it remains sharp on all screen sizes and does
not depend on an external image.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Copy this project into it.
3. Run `npm install` locally.
4. Commit the generated `package-lock.json`.
5. Push to the `main` branch.
6. Open the repository on GitHub.
7. Go to **Settings → Pages**.
8. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The included workflow deploys the site after every push to `main`.

### Supported GitHub Pages URL types

The Astro configuration detects these automatically inside GitHub Actions:

```text
https://username.github.io/
https://username.github.io/repository-name/
```

For the cleanest portfolio URL, name the repository:

```text
YOUR_GITHUB_USERNAME.github.io
```

## Next step

The Blog page can use Astro content collections so each post is a Markdown file
with typed frontmatter such as title, description, date, tags, and draft status.
