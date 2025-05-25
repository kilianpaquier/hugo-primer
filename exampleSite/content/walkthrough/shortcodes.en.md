---
date: 2025-05-19
description: "How to: use pre-defined shortcodes"
tags:
  - Setup
  - Shortcodes
title: Shortcodes
weight: 45
---

# {{% param "title" %}}

## Div

Simple wrapper with a `div` tag, this shortcode can also take `class` in attributes like it would for an HTML element.
Content written inside is rendered with **Hugo**.

```md
<!-- With markdown content -->
{{%/* div class="CSS classes" */%}}

Markdown content:
- A bullet point ...

{{%/* /div */%}}

<!-- Without markdown content -->
{{</* div class="CSS classes" */>}}

{{</* non-markdown-content */>}}

{{</* /div */>}}
```

## Image

An alternative solution to native `figure` shortcode. Without `caption` attribute, only the `img` tag is created.

When `caption` isn't given, `class` attribute shouldn't be given too since it will not be used.

The HTML attribute `alt` cannot be provided and will have the image name as value (i.e. `src="/images/my-image.jpg"` then `alt="my-image"`).

```md
{{</* img
  class="CSS classes for the figure"
  src="image URL"
  img-class="CSS classes for the image"
  width="image width"
  height="image heihgt"
  caption="Caption"
*/>}}
```

### Example

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

## Side image

Simple wrapper (with `div` tag) to place an image on the side of a text / content.

```md
{{%/* side-img
  class="CSS classes for the wrapper"
  src="URL de l'image"
  img-class="CSS classes for the image"
  width="image width"
  height="image heihgt"
  inner-class="CSS classes for the content"
*/%}}

Markdown content:
- A bullet point ...

{{%/* /side-img */%}}
```

### Example

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

A simple shortcode to display an SVG without going through the `img` tag.
It can also be equipped with a tooltip if `tooltip` attribute is given.
SVGs are fetched as raw HTML during **Hugo** build and can be remote (`src` starts with `https://`) or local.

```md
{{</* svg src="/static/primer/book-16.svg" height="22" width="22" tooltip="A book" */>}}
```

### Example

{{< svg src="/static/primer/book-16.svg" height="22" width="22" tooltip="A book" >}}

## Timeline item

A timeline item uses associated **Primer** style ([here](https://primer.style/product/components/timeline/)).
It is a simple item with a side badge and some content.

```md
{{%/* timeline-item
  badge="/primer/book-16.svg"
  class="CSS classes pour l'item complet"
  inner-class="CSS classes pour le contenu"
*/%}}

Markdown content:
- A bullet point ...

{{%/* /timeline-item */%}}
```

### Example

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
