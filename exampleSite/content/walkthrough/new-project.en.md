---
date: 2025-04-16
description: "How to: create a new project with **hugo-primer** theme"
pin: true
tags:
  - Setup
title: New project
weight: 5
---

# {{% param "title" %}}

Before any theme setup, we need to create a [**Hugo**](https://gohugo.io/) project.

To achieve that, you may follow the instructions at https://gohugo.io/getting-started/quick-start/
or follow the steps below (if **Hugo** is already installed, and **Go** if you intend to import this theme as recommended).

## Project initialization

To initialize a **Hugo** project, it's simple (this will generate a minimal boilerplate):

```sh
hugo new site <site name> --destination .
```

## Hugo module (recommended)

To import the **hugo-primer** theme, the following properties must be added to the `hugo.(yaml|toml)` configuration file (on my end, I prefer the `yaml` format):

```yaml
theme: github.com/kilianpaquier/hugo-primer

module:
  imports:
    - path: github.com/kilianpaquier/hugo-primer
```

You can then initialize the `go.mod` file and tidy it with the following commands to download this theme as a dependency (like you would with **Go**):

```sh
hugo mod init github.com/<username>/<site name>
hugo mod tidy
```

## Git submodule

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
