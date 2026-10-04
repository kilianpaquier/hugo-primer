# hugo-primer <!-- omit in toc -->

<div align="center">
  <a href="https://gitlab.com/kilianpaquier/hugo-primer/-/releases">
    <img alt="GitLab Release" src="https://img.shields.io/gitlab/v/release/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&include_prereleases&sort=semver&style=for-the-badge">
  </a>
  <a href="https://gitlab.com/kilianpaquier/hugo-primer/-/work_items">
    <img alt="GitLab Issues" src="https://img.shields.io/gitlab/issues/open/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&style=for-the-badge">
  </a>
  <a href="https://gitlab.com/kilianpaquier/hugo-primer/-/blob/HEAD/LICENSE">
    <img alt="GitLab License" src="https://img.shields.io/gitlab/license/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&style=for-the-badge">
  </a>
  <a href="https://gitlab.com/kilianpaquier/hugo-primer/-/pipelines?ref=main">
    <img alt="GitLab CICD" src="https://img.shields.io/gitlab/pipeline-status/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&branch=main&style=for-the-badge">
  </a>
  <a href="https://score.getplumber.io/gitlab.com/kilianpaquier/hugo-primer">
    <img alt="Plumber Score" src="https://img.shields.io/endpoint?url=https%3A%2F%2Fscore.getplumber.io%2Fgitlab.com%2Fkilianpaquier%2Fhugo-primer.json&style=for-the-badge">
  </a>
</div>

---

- [Project initialization](#project-initialization)
- [How to use ?](#how-to-use-)
  - [Hugo module (recommended)](#hugo-module-recommended)
  - [Git submodule](#git-submodule)
- [Default configuration](#default-configuration)
- [Start website](#start-website)
- [Features](#features)

## Project initialization

To initialize a **Hugo** project, it's simple (this will generate a minimal boilerplate):

```sh
hugo new site <site name> --destination .
```

## How to use ?

### Hugo module (recommended)

To import **hugo-primer** theme, following properties must be added into `hugo.(yaml|toml)` configuration file:

```yaml
theme: github.com/kilianpaquier/hugo-primer
```

You then can initialize `go.mod` file and tidy with the following commands to download this theme as dependency (like you would do with **Go**):

```sh
hugo mod init github.com/<username>/<site name>
hugo mod tidy
```

### Git submodule

If you intend to go with a **Git** submodule, two possibilities:

**With SSH** :

```sh
git submodules add git@github.com:kilianpaquier/hugo-primer.git themes/hugo-primer
```

**With HTTPS** :

```sh
git submodules add https://github.com/kilianpaquier/hugo-primer.git themes/hugo-primer
```

You then need to update `hugo.(yaml|toml)` configuration with following property:

```yaml
theme: hugo-primer
```

## Default configuration

For an expected experience with **hugo-primer** theme, default configuration should be merged with your own:

```yaml
_merge: deep
```

## Start website

You are now ready to start you **Hugo** website:

```sh
hugo server --disableFastRender --destination dist
```

## Features

See https://hugo-primer.kilianpaquier.dev/walkthrough.

## License

The [LICENSE](LICENSE) does not cover:

- The `static/primer/` directory, which holds [Octicons](https://github.com/primer/octicons) under their own [LICENSE](static/primer/LICENSE).
- The `static/material/` directory, which holds [Material Icons](https://github.com/google/material-design-icons) under their own [LICENSE](static/material/LICENSE).

Design inspired by [github-style](https://github.com/MeiK2333/github-style).
