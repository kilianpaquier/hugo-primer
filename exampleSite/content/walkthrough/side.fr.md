---
date: 2025-04-16
description: "How to : liens supplémentaires, logo, titres et contenu latéral supplémentaire"
tags:
  - Setup
  - Navigation
title: Contenu latéral
weight: 15
---

# {{% param "title" %}}

## Logo, titre, sous-titre

Le contenu latéral est lui aussi personalisable !
Le logo, le titre, le sous-titre peuvent être définis comme suit dans la configuration `hugo.(yaml|toml)` :

```yaml
params:
  hugo_primer:
    logo: /logo.webp
    title: Title
    subtitle: Subtitle
```

## Liens

Au-delà, des liens *extras* peuvent être définis par le menu Hugo `profile` :

```yaml
menus:
  profile:
    - identifier: company
      params:
        aria_label: My Company
        class: text-bold
      name: "@example"
      pre: /static/primer/organization-16.svg

    - identifier: mail
      name: example@example.com
      pre: /static/primer/mail-16.svg
      url: mailto:example@example.com

    - identifier: website
      name: https://example.com
      pre: /static/primer/link-16.svg
      url: https://example.com

    - identifier: linkedin
      name: in/example
      pre: /static/primer/in-16.svg
      url: https://example.com
```

Il est donc possible de définir autant de liens que souhaités 😀.

Vous pouvez obtenir plus d'information sur menus [ici](https://gohugo.io/content-management/menus/).

## Suppléments

Au-delà du menu `profile`, il est possible de surcharger le *layout* `layouts/partials/hugo-primer/side.html`
pour ajouter des éléments supplémentaires en dessous des liens supplémentaires.
