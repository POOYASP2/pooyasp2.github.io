# pooyasp2.github.io

Personal site of Pooya Sharifi. Built with [Hugo](https://gohugo.io) and a custom theme, `manpage`, where every page reads like a Unix manual entry. Deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run it locally

```bash
brew install hugo            # once
hugo server -D               # http://localhost:1313, -D also shows drafts
```

## Write a post

```bash
hugo new blog/my-post.md       # technical post
hugo new journal/my-entry.md   # personal post
```

Posts start as drafts. Set `draft: false` when ready, then commit and push.

Write section headings as `## CAPS` (SUMMARY, DETAILS, EXAMPLE, ...). The theme indents everything under them like a man page.

## Edit pages

| Page    | File                  |
|---------|-----------------------|
| About   | `content/_index.md`   |
| CV      | `content/cv.md`       |
| Now     | `content/now.md`      |
| Photo   | `static/images/verona.jpg` |
| Links, email | `hugo.toml` (`[params]`) |

Put your email in the page with `{{< email >}}`. It is assembled in the browser so simple scrapers don't collect it.

## Deploy (first time)

1. Create a public repo named `POOYASP2.github.io` on GitHub.
2. Push this folder to its `main` branch.
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. The site goes live at https://pooyasp2.github.io after the workflow finishes.

Using a custom domain later: add it in Settings → Pages and update `baseURL` in `hugo.toml`.
