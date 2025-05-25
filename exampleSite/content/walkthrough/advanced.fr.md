---
date: 2025-04-16
description: "How to : autres configurations plus ou moins avancées"
tags:
  - Setup
  - Favicon
  - Global container
  - Lazysizes
  - Instant pages
title: Usage avancé
weight: 50
---

# {{% param "title" %}}

## Favicon

Le *favicon* représente la petite icône que vous pouvez voir dans le nom de l'onglet.
Il est donc primordial de pouvoir configurer cette petite icône car il s'agit souvent du logo d'un site (dans la configuration `hugo.(yaml|toml)`) :

```yaml
params:
  hugo_primer:
    favicon: /logo.webp
```

## Copyright

Il est aussi possible d'utiliser la clé `copyright` de la configuration `hugo.(yaml|toml)`, une clé par défaut, déjà offerte par Hugo.
En fournissant une valeur, la notion *copyright* apparaîtra en bas de page, dans le *footer*.

Au-delà, il est possible de complètement surcharger le *footer* en surchargeant le *layout* `layouts/partials/hugo-primer/footer.html` :

```html
<!-- override this layout to replace the footer content -->

{{ $container := site.Params.hugo_primer.styles.container }}
{{ $offset := or .IsPage (eq .Kind "404") }}

<footer>
    {{ if site.Copyright }}
        <div class="{{ $container }} py-3">
            <div class="col-12 col-md-8 col-lg-9 {{ if not $offset }}offset-md-4 offset-lg-3{{ end }}">
                {{ site.Copyright }}
            </div>
        </div>
    {{ end }}
</footer>
```

## Conteneur du site

Comme présenté dans l'*overview* du thème, tous les styles sont basés sur **Primer**.
Pour éviter que le contenu soit trop large sur la page sur les grands écrans, un conteneur par défaut est défini dans la configuration `hugo.(yaml|toml)` :

```yaml
params:
  hugo_primer:
    styles:
      container: container-xl px-3 px-md-4 px-lg-5
```

Vous pouvez le modifier pour élargir et jouer avec les *paddings* globaux.
La modification de ce style impacte à la fois la navigation, le contenu principal, la section des commentaires **giscus** et le *footer*.
Vous pourrez trouver plus d'information sur le *grid* système de **Primer** [ici](https://primer.style/css/storybook/?path=/story/utilities-grid--container).

## Lazysizes

Avec le thème, vous pouvez utiliser la classe CSS `lazyload` afin de ne charger les images que lorsqu'elles rentrent dans le champs de vision de la page.
Par défaut activée, la fonctionnalité (basé sur [**lazysizes**](https://afarkas.github.io/lazysizes/index.html)) peut être désactivée avec la configuration `hugo.(yaml|toml)` :

```yaml
params:
  hugo_primer:
    # see https://afarkas.github.io/lazysizes/index.html
    lazysizes:
      disabled: false
```

Il est facile d'ajouter une classe à une balise HTML, mais comment faire pour image directement en *markdown* ?
Vous pouvez utiliser le *shortcode* `figure` d'Hugo comme ci-dessous (plus d'informations [ici](https://gohugo.io/shortcodes/figure/)) :

```md
{{</* figure
  src="/images/examples/zion-national-park.jpg"
  alt="A photograph of Zion National Park"
  link="https://www.nps.gov/zion/index.htm"
  caption="Zion National Park"
  class="lazyload"
*/>}}
```

## Pages instantanées

Pour accélérer le chargement des pages, le thème utilise [**instantpage**](https://instant.page/).
Activé par défaut, comme à peu près tout le reste, et désactivable avec la configuration `hugo.(yaml|toml)` :

```yaml
params:
  hugo_primer:
    # see https://instant.page/
    instantpage:
      disabled: false
```

Comment ça marche ? Lorsque la souris d'un utilisateur passe sur un lien de votre site (pas un lien externe),
une nouvelle balise `link` est ajoutée à la balise `head` avec les propriétés suivantes :

```html
<link rel="prefetch" href="<URL>" fetchpriority="high" as="document">
```

En ajoutant cette balise, **instantpage** indique au navigateur qu'il peut pré-charger des ressources pour améliorer l'expérience de navigation de votre utilisateur.
Vous pouvez trouver plus d'informations sur la documentation **MDN** [ici](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch).

## Versions des styles

Enfin, pour finir sur cette partie "avancée", les versions utilisées des styles **Primer** (et autres imports) sont définies dans la configuration `hugo.(yaml|toml)` :

```yaml
params:
  hugo_primer:
    versions:
      instantpage: 5.2.0
      primer_css: 21
      primer_primitives: 10
      primer_react: 37
      primer_view_components: 0
```

Il est donc possible de les modifier pour fixer une version ou mettre à jour sur une plus récente.
Bien sûr, le thème essayera de suivre au maximum les montées de version lui-même.
