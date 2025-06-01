---
date: 2025-04-16
description: "How to : configurer la recherche globale"
pin: true
tags:
  - Setup
  - Search
title: Recherche
weight: 40
---

# {{% param "title" %}}

La recherche s'inspire énormément de ce qui est fait sur le site **GitHub**.
Le moteur est fourni par [**fuse.js**](https://www.fusejs.io/) pour éviter de réimplementer quelque chose avec potentiellement des bugs.

Les résultats sont groupés par section (walkthrough, *posts*, etc.)
et les sections sont calculés dynamiquement à partir des résultats d'une recherche spécifique.
Un séparateur est ajouté entre chaque section de résultats.

Pas grand chose de plus à dire concernant la recherche, côté raccourcis :
- `/` permet d'ouvrir l'overlay de recherche
- `Escape` permet de clore l'overlay de recherche
- `ArrowUp` et `ArrowDown` permettent de naviguer sur les résultats de la recherche sans permettre le *focus* sur le champ de recherche
