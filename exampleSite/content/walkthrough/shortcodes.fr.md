---
date: 2025-05-19
description: "How to : utilisation des shortcodes prédéfinis"
pin: true
tags:
  - Setup
  - Shortcodes
title: Shortcodes
weight: 45
---

# {{% param "title" %}}

## Div

*Wrapper* simple avec une balise `div`, le *shortcode* peut prendre l'attribut `class` tout comme pourrait un élément *HTML*.
Le contenu écrit à l'intérieur est rendu avec **Hugo**.

```md
<!-- Avec du contenu markdown -->
{{%/* div class="css classes" */%}}

Markdown content:
- A bullet point ...

{{%/* /div */%}}

<!-- Sans contenu markdown -->
{{</* div class="classes CSS" */>}}

{{</* non-markdown-content */>}}

{{</* /div */>}}
```

## Image

Une solution alternative au *shortcode* natif de **Hugo** `figure`. Sans l'attribut `caption`, alors uniquement la balise `img` est créée.

Dans un cas sans *caption*, alors il n'est pas nécessaire de donner l'attribut `class` puisqu'il ne sera pas utilisé.

L'attribut `alt` aura comme valeur le nom de l'image (i.e. `src="/images/my-image.jpg"` alors `alt="my-image"`).

```md
{{</* img
  class="classes CSS pour la figure"
  src="URL de l'image"
  img-class="classes CSS pour l'image"
  width="largeur de l'image"
  height="hauteur de l'image"
  caption="Caption"
*/>}}
```

### Exemple

```md
{{</* img
  class="col-2"
  src="/logo.webp"
  height="100px"
  img-class="mb-1"
  caption="Arthur in The Beginning After the End"
  caption-class="text-italic text-center"
*/>}}
```

{{< img
  class="col-2"
  src="/logo.webp"
  height="100px"
  img-class="mb-1"
  caption="Arthur in The Beginning After the End"
  caption-class="text-italic text-center"
>}}

## Image latérale

Un *wrapper* simple (avec une balise `div`) pour positionner une image sur le côté d'un texte.

```md
{{%/* side-img
  class="classes CSS pour le wrapper"
  src="URL de l'image"
  img-class="classes CSS pour l'image"
  width="largeur de l'image"
  height="hauteur de l'image"
  inner-class="classes CSS pour le contenu intérieur"
*/%}}

Markdown content:
- A bullet point ...

{{%/* /side-img */%}}
```

### Exemple

```md
{{%/* side-img
  class="row-gap-3 col-gap-3 mt-3"
  src="/logo.webp"
  height="50px"
*/%}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{%/* /side-img */%}}
```

{{% side-img
  class="row-gap-3 col-gap-3 mt-3"
  src="/logo.webp"
  height="50px"
%}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{% /side-img %}}

## SVG

Un *shortcode* simple pour afficher un SVG sans passer par une balise `img`.
Il peut aussi être équipé d'une info-bulle si l'attribut `tooltip` est donné.
Les SVGs sont ajoutés en static lors du build **Hugo** et peuvent être distants (`src` commençe par `https://`) ou locaux.

```md
{{</* svg src="/static/primer/book-16.svg" class="octicon" height="22" width="22" tooltip="Un libre" */>}}
```

### Exemple

{{< svg src="/static/primer/book-16.svg" class="octicon" height="22" width="22" tooltip="Un livre" >}}

## Item chronologique

Un item chronologique reprend le composant associé de **Primer** [ici](https://primer.style/product/components/timeline/).
C'est un item avec un badge et du contenu à côté.

```md
{{%/* timeline-item
  badge="/primer/book-16.svg"
  class="classes CSS pour l'item complet"
  inner-class="classes CSS pour le contenu"
*/%}}

Markdown content:
- A bullet point ...

{{%/* /timeline-item */%}}
```

### Exemple

```md
{{%/* timeline-item badge="/logo.webp" inner-class="fgColor-default" */%}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{%/* /timeline-item */%}}
{{%/* timeline-item badge="/logo.webp" inner-class="fgColor-default" */%}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{%/* /timeline-item */%}}
```

{{% timeline-item badge="/logo.webp" inner-class="fgColor-default" %}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{% /timeline-item %}}
{{% timeline-item badge="/logo.webp" inner-class="fgColor-default" %}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{% /timeline-item %}}
