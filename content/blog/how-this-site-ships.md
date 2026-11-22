---
title: "How this site ships"
date: 2026-11-22
draft: true
tags: ["devops", "ci-cd", "hugo"]
description: "Hugo, GitHub Actions and GitHub Pages: the pipeline behind this site."
---

## SUMMARY

A draft for your first post. Fill it in once the site is live: it's a small DevOps project you can show.

## PIPELINE

Every push to `main` runs a GitHub Actions workflow that builds the site with Hugo and deploys it to GitHub Pages.

```yaml
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: hugo --minify
```

## WHAT I'D ADD NEXT

- A link checker on every pull request
- Dependabot for the workflow actions
- Security headers through a CDN
