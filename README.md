# pooyasp2.github.io

[![Build and deploy](https://github.com/POOYASP2/pooyasp2.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/POOYASP2/pooyasp2.github.io/actions/workflows/deploy.yml)

Personal site of Pooya Sharifi, live at **https://pooyasp2.github.io**.

Built with [Hugo](https://gohugo.io) and a custom theme, `manpage`, where every page reads like a Unix manual entry. Every push to `main` is built and deployed to GitHub Pages by GitHub Actions.

## Features

- Pages: About (with banner photo), CV, Blog, Journal, Now
- Man-page layout: `ABOUT(1)` header line, CAPS section headings, indented text, monospace type
- Light and dark theme: follows the device setting by default; the sun/moon icon in the header switches it, and the choice is remembered
- Email address assembled in the browser, so simple scrapers don't collect it
- RSS feeds, Open Graph preview image, print-friendly CV
- No JavaScript framework and no external theme: the whole theme is in `themes/manpage`

## Structure

| Path | What it is |
|---|---|
| `content/_index.md` | About page |
| `content/cv.md` | CV |
| `content/now.md` | Now page |
| `content/blog/` | Technical posts |
| `content/journal/` | Personal posts |
| `static/images/` | Banner photo and preview image |
| `themes/manpage/` | Layouts and CSS |
| `hugo.toml` | Site settings, menu, links and email |
| `.github/workflows/deploy.yml` | Build and deploy pipeline |

## Run it locally

```bash
brew install hugo      # once
hugo server -D         # http://localhost:1313, -D also shows drafts
```

## Write a post

```bash
hugo new blog/my-post.md       # technical post
hugo new journal/my-entry.md   # personal post
```

Posts start as drafts. Set `draft: false` when ready, then commit and push: the site updates in about a minute.

Write section headings as `## CAPS` (SUMMARY, DETAILS, EXAMPLE, ...). The theme indents everything under them like a man page. Put your email in a page with `{{< email >}}`.

## Deployment

The workflow in `.github/workflows/deploy.yml` installs Hugo, builds the site with `hugo --minify`, and publishes `public/` with GitHub Pages. Pull requests are built but not deployed.

The previous Astro version of the site is kept on the `astro-old` branch.
