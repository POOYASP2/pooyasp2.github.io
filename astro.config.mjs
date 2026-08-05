import { defineConfig } from "astro/config";

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

const runningOnGitHub = Boolean(owner && repository);
const isUserSite =
  repository?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  output: "static",
  trailingSlash: "always",

  // These values are resolved automatically inside GitHub Actions.
  // They also support both:
  //   username.github.io
  //   username.github.io/repository-name/
  site: runningOnGitHub
    ? `https://${owner}.github.io`
    : "http://localhost:4321",

  base: runningOnGitHub && !isUserSite
    ? `/${repository}`
    : "/"
});
