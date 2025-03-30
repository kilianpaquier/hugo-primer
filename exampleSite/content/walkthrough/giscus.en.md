---
date: 2025-04-16
description: "How to: enable and use comments system"
tags:
  - Setup
  - Comments System
title: Giscus
weight: 20
---

# {{% param "title" %}}

## Introduction

By default disabled (as you may see in below code snippet),
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

**Giscus** was choosen for this theme since they provide both day and night theme in coherence with **GitHub** website style.
Also because authentication goes through their **GitHub** App, as such it's less painful to integrate an authenticated comment system.

## Replace giscus

You are however free to provide your own comment system (more information [here](https://gohugo.io/content-management/comments/))
by overriding layout `layouts/partials/hugo-primer/comments.html`:

```html
<!-- override this layout to replace the comments system content -->

{{ $container := site.Params.hugo_primer.styles.container }}
{{ if not site.Params.hugo_primer.giscus.disabled }}
    <section class="{{ $container }}">
        <hr class="col-12 my-4" aria-hidden="true" />
        <div class="col-12 px-0 mx-auto">
            <div id="giscus" class="giscus"></div>
        </div>
    </section>
{{ end }}
```

However, please note that this partial is only included in `_default/single.html`.
