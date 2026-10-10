---
date: 2025-04-16
description: "How to : activer et utiliser le système de commentaires"
pin: true
tags:
  - Setup
  - Comments System
title: Giscus
weight: 20
---

# {{% param "title" %}}

## Introduction

Par défaut désactivé (comme vous le voyez sur le *snippet* de code ci-dessous),
les commentaires avec [**giscus**](https://giscus.app) peuvent être activés directement dans la configuration `hugo.(yaml|toml)` :

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

Le choix de **giscus** repose sur sa capacité à fournir les thèmes jour et nuit en cohérence avec le site **GitHub**.
L'authentification est aussi gérée par son application **GitHub**, ce qui simplifie l'intégration d'un système de commentaires authentifié.

## Remplacer giscus

Vous êtes libre d'utiliser votre propre système de commentaires (plus d'informations [ici](https://gohugo.io/content-management/comments/))
en remplaçant le *layout* `layouts/_partials/hugo-primer/comments.html` :

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

Notez cela dit en complément que ce *layout* n'est utilisé par défaut que dans `_default/single.html`.
