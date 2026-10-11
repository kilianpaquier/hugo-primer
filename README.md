# hugo-primer <!-- omit in toc -->

<div align="center">

<!-- BEGIN_KICKR_BADGES -->
[![GitLab Release](https://img.shields.io/gitlab/v/release/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&include_prereleases&sort=semver&style=for-the-badge)](https://gitlab.com/kilianpaquier/hugo-primer/-/releases)
[![GitLab Issues](https://img.shields.io/gitlab/issues/open/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&style=for-the-badge)](https://gitlab.com/kilianpaquier/hugo-primer/-/work_items)
[![GitLab License](https://img.shields.io/gitlab/license/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&style=for-the-badge)](https://gitlab.com/kilianpaquier/hugo-primer/-/blob/HEAD/LICENSE)
[![GitLab CICD](https://img.shields.io/gitlab/pipeline-status/kilianpaquier%2Fhugo-primer?gitlab_url=https%3A%2F%2Fgitlab.com&branch=main&style=for-the-badge)](https://gitlab.com/kilianpaquier/hugo-primer/-/pipelines?ref=main)
[![Plumber Score](https://img.shields.io/endpoint?url=https%3A%2F%2Fscore.getplumber.io%2Fgitlab.com%2Fkilianpaquier%2Fhugo-primer.json&style=for-the-badge)](https://score.getplumber.io/gitlab.com/kilianpaquier/hugo-primer)
<!-- END_KICKR_BADGES -->

</div>

---

- [Project initialization](#project-initialization)
- [How to use?](#how-to-use)
  - [Hugo module (recommended)](#hugo-module-recommended)
  - [Git submodule](#git-submodule)
- [Default configuration](#default-configuration)
- [Start website](#start-website)
- [Features](#features)
- [License](#license)

## Project initialization

To initialize a **Hugo** project, it's simple (this will generate a minimal boilerplate):

```sh
hugo new site <site name> --destination .
```

## How to use?

### Hugo module (recommended)

To import the **hugo-primer** theme, the following property must be added to the `hugo.(yaml|toml)` configuration file:

```yaml
theme: github.com/kilianpaquier/hugo-primer
```

You can then initialize the `go.mod` file and tidy it with the following commands to download this theme as a dependency (like you would with **Go**):

```sh
hugo mod init github.com/<username>/<site name>
hugo mod tidy
```

### Git submodule

If you intend to go with a **Git** submodule, two possibilities:

**With SSH:**

```sh
git submodule add git@github.com:kilianpaquier/hugo-primer.git themes/hugo-primer
```

**With HTTPS:**

```sh
git submodule add https://github.com/kilianpaquier/hugo-primer.git themes/hugo-primer
```

You then need to update the `hugo.(yaml|toml)` configuration with the following property:

```yaml
theme: hugo-primer
```

## Default configuration

For the intended experience with the **hugo-primer** theme, its default configuration should be merged with your own:

```yaml
_merge: deep
```

## Start website

You are now ready to start your **Hugo** website:

```sh
hugo server --disableFastRender --destination dist
```

## Features

See the [walkthrough](https://hugo-primer.kilianpaquier.dev/walkthrough).

## License

The [LICENSE](LICENSE) does not cover:

- The `static/primer/` directory, which holds [Octicons](https://github.com/primer/octicons) under their own [LICENSE](static/primer/LICENSE).
- The `static/material/` directory, which holds [Material Icons](https://github.com/google/material-design-icons) under their own [LICENSE](static/material/LICENSE).

Design inspired by [github-style](https://github.com/MeiK2333/github-style).
