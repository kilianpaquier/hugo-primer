# hugo-primer <!-- omit in toc -->

<div align="center">
  <img alt="GitLab Release" src="https://img.shields.io/gitlab/v/release/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&include_prereleases&sort=semver&style=for-the-badge">
  <img alt="GitLab Issues" src="https://img.shields.io/gitlab/issues/open/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&style=for-the-badge">
  <img alt="GitLab License" src="https://img.shields.io/gitlab/license/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&style=for-the-badge">
  <img alt="GitLab CICD" src="https://img.shields.io/gitlab/pipeline-status/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&branch=main&style=for-the-badge">
  <img alt="Go Version" src="https://img.shields.io/gitlab/go-mod/go-version/kilianpaquier/hugo-primer?style=for-the-badge">
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

module:
  imports:
    - path: github.com/kilianpaquier/hugo-primer
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

See https://hugo-primer.netlify.app/walkthrough.
