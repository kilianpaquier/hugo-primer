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
{{%/* div class="classes CSS" */%}}

Markdown content:
- A bullet point ...

{{%/* /div */%}}

<!-- Sans contenu markdown -->
{{</* div class="classes CSS" */>}}

{{</* non-markdown-content */>}}

{{</* /div */>}}
```

## SVG

Un *shortcode* simple pour afficher un SVG sans passer par une balise `img`.
Il peut aussi être équipé d'une info-bulle si l'attribut `tooltip` est donné.
Les SVGs sont ajoutés en static lors du build **Hugo** et peuvent être distants (`src` commence par `https://`) ou locaux.

### Exemple

```md
{{</* svg src="/static/primer/book-16.svg" class="octicon" height="22" width="22" tooltip="Un livre" */>}}
```

{{< div class="d-flex flex-justify-center" >}}
{{< svg src="/static/primer/book-16.svg" class="octicon" height="22" width="22" tooltip="Un livre" >}}
{{< /div >}}

## Image

Une solution alternative au *shortcode* natif de **Hugo** `figure`. Sans l'attribut `caption`, seule la balise `img` est créée.

Dans un cas sans *caption*, il n'est pas nécessaire de donner l'attribut `class` puisqu'il ne sera pas utilisé.

L'attribut `alt` ne peut pas être fourni et aura comme valeur le nom de l'image (i.e. `src="/images/my-image.jpg"` alors `alt="my-image"`).

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
  src="/logo/10.webp"
  height="100px"
  img-class="mb-1"
  caption="Arthur in The Beginning After the End"
  caption-class="text-italic text-center"
*/>}}
```

{{< div class="d-flex flex-justify-center" >}}
{{< img
  class="col-2"
  src="/logo/10.webp"
  height="100px"
  img-class="mb-1"
  caption="Arthur in The Beginning After the End"
  caption-class="text-italic text-center"
>}}
{{< /div >}}

## Élément avec avatar

Un *wrapper* simple (avec une balise `div`) pour positionner une image sur le côté d'un texte.
L'image est toujours ronde et centrée verticalement.
Sans contenu (*shortcode* auto-fermant), seule l'image ronde est rendue et `class` est ignoré.

```md
{{%/* avatar-item
  class="classes CSS pour le wrapper"
  src="URL de l'image"
  width="largeur de l'image"
  height="hauteur de l'image"
*/%}}

Markdown content:
- A bullet point ...

{{%/* /avatar-item */%}}
```

### Exemple

```md
{{%/* avatar-item
  class="row-gap-3 col-gap-3 mt-3"
  src="/logo/10.webp"
  height="50px"
*/%}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{%/* /avatar-item */%}}
```

{{% div class="d-flex flex-justify-center" %}}
{{% avatar-item
  class="row-gap-3 col-gap-3 mt-3"
  src="/logo/10.webp"
  height="50px"
%}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{% /avatar-item %}}
{{% /div %}}

### Exemple sans contenu

```md
{{%/* avatar-item src="/logo/10.webp" height="50px" /*/%}}
```

{{% div class="d-flex flex-justify-center" %}}
{{% avatar-item src="/logo/10.webp" height="50px" /%}}
{{% /div %}}

## Certificats

Une carte de certificat affiche l'image de son badge sur le côté de son contenu *Markdown*.
Avec `url`, une icône de vérification menant vers le certificat est placée dans le coin supérieur droit de la carte.
Chaque carte est une colonne de grille, par défaut deux par ligne sur grand écran et une par ligne en dessous (`class` remplace les classes de colonne `col-12 col-lg-6`).
Les cartes se placent dans une grille flex `div`.

```md
{{%/* div class="d-flex flex-wrap gutter-condensed row-gap-6 mb-3" */%}}

{{%/* certificate src="URL de l'image du badge" url="URL du certificat (optionnel)" class="classes CSS de la colonne (optionnel)" */%}}

### Nom du certificat
{class="m-0"}
Émetteur
{class="m-0"}
Date
{class="m-0 text-small"}

{{%/* /certificate */%}}

{{%/* /div */%}}
```

### Exemple

```md
{{%/* div class="d-flex flex-wrap flex-justify-center gutter-condensed row-gap-6 mb-3" */%}}

{{%/* certificate src="/logo/10.webp" url="https://gohugo.io" class="col-12 col-lg-4" */%}}
### Nom du certificat
{class="m-0"}
Émetteur
{class="m-0"}
Date
{class="m-0 text-small"}
{{%/* /certificate */%}}

{{%/* certificate src="/logo/10.webp" class="col-12 col-lg-4" */%}}
### Sans URL
{class="m-0"}
Émetteur
{class="m-0"}
Date
{class="m-0 text-small"}
{{%/* /certificate */%}}

{{%/* /div */%}}
```

{{% div class="d-flex flex-wrap flex-justify-center gutter-condensed row-gap-6 mb-3" %}}

{{% certificate src="/logo/10.webp" url="https://gohugo.io" class="col-12 col-lg-4" %}}
### Nom du certificat
{class="m-0"}
Émetteur
{class="m-0"}
Date
{class="m-0 text-small"}
{{% /certificate %}}

{{% certificate src="/logo/10.webp" class="col-12 col-lg-4" %}}
### Sans URL
{class="m-0"}
Émetteur
{class="m-0"}
Date
{class="m-0 text-small"}
{{% /certificate %}}

{{% /div %}}

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
{{%/* timeline-item badge="/logo/10.webp" inner-class="fgColor-default" */%}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{%/* /timeline-item */%}}
{{%/* timeline-item badge="/logo/10.webp" inner-class="fgColor-default" */%}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{%/* /timeline-item */%}}
```

{{% div class="d-flex flex-column flex-items-center" %}}
{{% timeline-item badge="/logo/10.webp" inner-class="fgColor-default" %}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{% /timeline-item %}}
{{% timeline-item badge="/logo/10.webp" inner-class="fgColor-default" %}}

Markdown content:
{class="mb-0"}
- A bullet point ...

{{% /timeline-item %}}
{{% /div %}}

## Paginate

Un *shortcode* simple permettant d'afficher en face à face deux boutons (ou un seul) `< Précédent` et `Suivant >`
avec des *URL*s personnalisées :

```md
{{</* paginate next="/path/to/next" prev="/path/to/previous" format="default OU terse" */>}}
```

En mode *terse*, si `next` ou `prev` n'est pas fourni, alors le bouton associé n'est pas affiché.
En mode *default*, le bouton associé est affiché mais désactivé.

### Exemple

#### Avec deux liens

```md
{{</* paginate next="/fr/walkthrough/shortcodes#paginate" prev="/fr/walkthrough/shortcodes#paginate" format="terse" */>}}
{{</* paginate next="/fr/walkthrough/shortcodes#paginate" prev="/fr/walkthrough/shortcodes#paginate" format="default" */>}}
```

{{< paginate next="/fr/walkthrough/shortcodes#paginate" prev="/fr/walkthrough/shortcodes#paginate" format="terse" >}}
{{< paginate next="/fr/walkthrough/shortcodes#paginate" prev="/fr/walkthrough/shortcodes#paginate" format="default" >}}

#### Avec un seul lien

```md
{{</* paginate prev="/fr/walkthrough/shortcodes#paginate" format="terse" */>}}
{{</* paginate next="/fr/walkthrough/shortcodes#paginate" format="terse" */>}}
{{</* paginate prev="/fr/walkthrough/shortcodes#paginate" format="default" */>}}
{{</* paginate next="/fr/walkthrough/shortcodes#paginate" format="default" */>}}
```

{{< paginate prev="/fr/walkthrough/shortcodes#paginate" format="terse" >}}
{{< paginate next="/fr/walkthrough/shortcodes#paginate" format="terse" >}}
{{< paginate prev="/fr/walkthrough/shortcodes#paginate" format="default" >}}
{{< paginate next="/fr/walkthrough/shortcodes#paginate" format="default" >}}

---
