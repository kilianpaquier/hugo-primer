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
L'image est centrée verticalement.
Sans contenu (*shortcode* auto-fermant), seule l'image est rendue et `class` est ignoré.

```md
{{%/* avatar-item
  class="classes CSS pour le wrapper"
  img-class="classes CSS de l'image, par exemple circle (optionnel)"
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
  img-class="circle"
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
  img-class="circle"
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
{{%/* avatar-item src="/logo/10.webp" height="50px" img-class="circle" /*/%}}
```

{{% div class="d-flex flex-justify-center" %}}
{{% avatar-item src="/logo/10.webp" height="50px" img-class="circle" /%}}
{{% /div %}}

## Carte média

Une carte avec une image sur le côté de son contenu *Markdown*.
Avec `url`, `icon` (requis) est affiché dans le coin supérieur droit et mène vers celui-ci.
Par défaut chaque carte est une colonne de grille, à placer dans une grille flex `div` (`class` la remplace).

```md
{{%/* div class="d-flex flex-wrap gutter-condensed row-gap-6 mb-3" */%}}

{{%/* media-card
  class="classes CSS de la colonne (optionnel)" icon="source SVG de l'icône (requis avec url)" icon-class="classes CSS de l'icône (optionnel)"
  url="URL de vérification (optionnel)" src="URL de l'image"
*/%}}

### Titre de la carte
{class="m-0"}
Sous-titre
{class="m-0"}
Date
{class="m-0 text-small"}

{{%/* /media-card */%}}

{{%/* /div */%}}
```

### Exemple

```md
{{%/* div class="d-flex flex-wrap flex-justify-center gutter-condensed row-gap-6 mb-3" */%}}

{{%/* media-card src="/logo/10.webp" url="https://gohugo.io" icon="/static/primer/link-16.svg" icon-class="fgColor-accent" class="col-12 col-lg-4" */%}}
### Titre de la carte
{class="m-0"}
Sous-titre
{class="m-0"}
Date
{class="m-0 text-small"}
{{%/* /media-card */%}}

{{%/* media-card src="/logo/10.webp" class="col-12 col-lg-4" */%}}
### Sans URL
{class="m-0"}
Sous-titre
{class="m-0"}
Date
{class="m-0 text-small"}
{{%/* /media-card */%}}

{{%/* /div */%}}
```

{{% div class="d-flex flex-wrap flex-justify-center gutter-condensed row-gap-6 mb-3" %}}

{{% media-card src="/logo/10.webp" url="https://gohugo.io" icon="/static/primer/link-16.svg" icon-class="fgColor-accent" class="col-12 col-lg-4" %}}
### Titre de la carte
{class="m-0"}
Sous-titre
{class="m-0"}
Date
{class="m-0 text-small"}
{{% /media-card %}}

{{% media-card src="/logo/10.webp" class="col-12 col-lg-4" %}}
### Sans URL
{class="m-0"}
Sous-titre
{class="m-0"}
Date
{class="m-0 text-small"}
{{% /media-card %}}

{{% /div %}}

## Alerte

Une bannière **Primer** avec une icône et un titre selon son type : `note` (par défaut), `tip`, `important`, `warning` ou `caution`.
Les alertes GitHub dans les citations *Markdown* sont rendues de la même façon.

```md
> [!tip]
> Contenu Markdown.

{{</* alert type="type d'alerte (optionnel)" title="titre personnalisé (optionnel)" */>}}
Contenu Markdown.
{{</* /alert */>}}
```

### Exemple

```md
> [!note]
> Rendu depuis une alerte **GitHub**.

{{</* alert type="warning" title="Prudence" */>}}
Rendu depuis le *shortcode* avec un titre personnalisé.
{{</* /alert */>}}
```

> [!note]
> Rendu depuis une alerte **GitHub**.

{{< alert type="warning" title="Prudence" >}}
Rendu depuis le *shortcode* avec un titre personnalisé.
{{< /alert >}}

## Barre de progression

Une barre de progression **Primer** remplie jusqu'à `value` pourcent.

```md
{{</* progress-bar
  class="classes CSS de la partie remplie (optionnel)" size="small ou large (optionnel)"
  value="pourcentage"
*/>}}
```

### Exemple

```md
{{</* progress-bar value="75" */>}}
{{</* progress-bar value="40" class="bgColor-accent-emphasis" size="large" */>}}
```

{{< div class="d-flex flex-column row-gap-3" >}}
{{< progress-bar value="75" >}}
{{< progress-bar value="40" class="bgColor-accent-emphasis" size="large" >}}
{{< /div >}}

## Label

Un label **Primer** autour d'un texte court, `class` définit sa variante et sa taille.

```md
{{</* label class="classes CSS (optionnel)" */>}}texte{{</* /label */>}}
```

### Exemple

```md
{{</* label */>}}défaut{{</* /label */>}}
{{</* label class="Label--success" */>}}stable{{</* /label */>}}
{{</* label class="Label--attention Label--large" */>}}bêta{{</* /label */>}}
```

{{< div class="d-flex flex-justify-center col-gap-2" >}}
{{< label >}}défaut{{< /label >}}
{{< label class="Label--success" >}}stable{{< /label >}}
{{< label class="Label--attention Label--large" >}}bêta{{< /label >}}
{{< /div >}}

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
