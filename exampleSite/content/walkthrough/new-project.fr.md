---
date: 2025-04-16
description: "How to : création d'un nouveau projet avec le thème **hugo-primer**"
pin: true
tags:
  - Setup
title: Nouveau projet
weight: 5
---

# {{% param "title" %}}

Avant tout *setup* du thème, il faut créer un projet [**Hugo**](https://gohugo.io/).

Pour cela vous pouvez suivre les indications sur https://gohugo.io/getting-started/quick-start/
ou suivre les étapes ci-dessous (dans le cas où vous auriez déjà **Hugo** d'installé / **Go** si vous comptez importer le thème comme recommandé).

## Initialisation d'un projet

Pour initialiser un projet avec **Hugo**, c'est très simple (cela va générer tout le *boilerplate* utile) :

```sh
hugo new site <site name> --destination .
```

## Hugo module (recommandé)

Pour importer le thème, cela se passe directement dans `hugo.(yaml|toml)` (de mon côté, c'est `yaml` par préférence) :

```yaml
theme: github.com/kilianpaquier/hugo-primer

module:
  imports:
    - path: github.com/kilianpaquier/hugo-primer
```

Vous pouvez ensuite initialiser le `go.mod` et *tidy* avec les commandes suivantes pour télécharger le thème en dépendance (comme avec **Go**) :

```sh
hugo mod init github.com/<username>/<site name>
hugo mod tidy
```

## Git submodule

Si vous souhaitez passer un *submodule* **Git**, deux possibilités :

**Avec SSH** :

```sh
git submodules add git@github.com:kilianpaquier/hugo-primer.git themes/hugo-primer
```

**Avec HTTPS** :

```sh
git submodules add https://github.com/kilianpaquier/hugo-primer.git themes/hugo-primer
```

Vous devez ensuite dans la configuration `hugo.(yaml|toml)` ajouter la propriété suivante :

```yaml
theme: hugo-primer
```

## Configuration par défaut

Pour une expérience optimale avec **hugo-primer**, la configuration par défaut devrait être mergée avec celle de votre site :

```yaml
_merge: deep
```

## Démarrer le site

Vous êtes prêt à lancer votre site **Hugo** :

```sh
hugo server --disableFastRender --destination dist
```
