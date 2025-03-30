---
date: 2025-04-16
description: "How to : personalisation de la navigation"
tags:
  - Setup
  - Navigation
title: Navigation
weight: 10
---

# {{% param "title" %}}

Il est possible d'ajouter ou modifier la navigation avec **hugo-primer**, en fait, par défaut la navigation n'est pas activée.
Pour l'activer il suffit de modifier la configuration `hugo.(yaml|toml)` et y ajouter un menu `main` :

```yaml
menus:
  main:
    - identifier: about
      name: Overview
      pre: /static/primer/book-16.svg # l'icône à afficher devant le menu
      pageRef: /
      weight: 5 # ordre d'affichage (du plus petit poids au plus grand)
      params:
        disable_counter: false # désactive le compteur du nombre de pages pour la section en question

    - identifier: posts
      name: Posts
      pre: /static/primer/repo-16.svg
      pageRef: /posts
      weight: 10
      params:
        disable_counter: false # désactive le compteur du nombre de pages pour la section en question
```

Vous l'aurez compris, peu importe le nombre de menus que vous ajoutez, ceux-ci seront affichés ! 😉

Vous pouvez obtenir plus d'information sur menus [ici](https://gohugo.io/content-management/menus/).
