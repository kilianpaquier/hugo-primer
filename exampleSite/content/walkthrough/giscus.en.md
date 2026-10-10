---
date: 2025-04-16
description: "How to: enable and use comments system"
pin: true
tags:
  - Setup
  - Comments System
title: Giscus
weight: 20
---

# {{% param "title" %}}

## Introduction

Disabled by default (as you may see in the code snippet below),
comments with [**giscus**](https://giscus.app) can be enabled directly in Hugo configuration file `hugo.(yaml|toml)`:

```yml
params:
  hugo_primer:
    giscus:
      disabled: true
      # params:
      #   data-category-id:
      #   data-category:
      #   data-emit-metadata:
      #   data-input-position:
      #   data-loading:
      #   data-mapping:
      #   data-reactions-enabled:
      #   data-repo-id:
      #   data-repo:
      #   data-strict:
```

**Giscus** was chosen for this theme since it provides both day and night themes consistent with the **GitHub** website style.
Its authentication also goes through its **GitHub** App, which makes an authenticated comment system less painful to integrate.

## Replace giscus

You are however free to provide your own comment system (more information [here](https://gohugo.io/content-management/comments/))
by overriding the `layouts/_partials/hugo-primer/comments.html` layout:

```html
{{- $container := site.Params.hugo_primer.styles.container }}
{{- if not site.Params.hugo_primer.giscus.disabled }}
    <section class="{{ $container }}">
        <hr class="col-12 my-4" aria-hidden="true" />
        <div class="col-12 px-0 mx-auto">
            <div id="giscus" class="giscus"></div>
        </div>
    </section>
{{- end }}
```

However, please note that this partial is only included in `_default/single.html`.
