---
date: 2025-04-16
description: "How to: create a new project with **hugo-primer** theme"
tags:
  - Setup
title: New project
weight: 5
---

# {{% param "title" %}}

Before any theme setup, we need to create a [**Hugo**](https://gohugo.io/) project.

To achieve that, you may follow directives given on https://gohugo.io/getting-started/quick-start/
or follow below steps (in case **Hugo** is already installed / **Go** in case you intend to import this theme like recommended).

## Project initialization

To initialize a **Hugo** project, it's simple (this will generate a minimal boilerplate):

```sh
hugo new site <site name> --destination .
```

## Hugo module (recommended)

To import **hugo-primer** theme, following properties must be added into `hugo.(yaml|toml)` configuration file (on my end, I prefer `yaml` format):

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

## Git submodule

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

## QoL

For an expected experience with **hugo-primer** theme, default configuration should be merged with your own:

```yaml
_merge: deep
```

## Start website

You are now ready to start you **Hugo** website:

```sh
hugo server --disableFastRender --destination dist
```
