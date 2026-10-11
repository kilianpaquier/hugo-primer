---
date: 2025-05-19
description: "How to: use pre-defined shortcodes"
pin: true
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

## SVG

A simple shortcode to display an SVG without going through the `img` tag.
It can also be equipped with a tooltip if `tooltip` attribute is given.
SVGs are fetched as raw HTML during **Hugo** build and can be remote (`src` starts with `https://`) or local.

### Example

```md
{{</* svg src="/static/primer/book-16.svg" class="octicon" height="22" width="22" tooltip="A book" */>}}
```

{{< div class="d-flex flex-justify-center" >}}
{{< svg src="/static/primer/book-16.svg" class="octicon" height="22" width="22" tooltip="A book" >}}
{{< /div >}}

## Image

An alternative to the Hugo native `figure` shortcode. Without the `caption` attribute, only the `img` tag is created.

When `caption` isn't given, the `class` attribute shouldn't be given either since it will not be used.

The HTML attribute `alt` cannot be provided and will have the image name as value (i.e. `src="/images/my-image.jpg"` then `alt="my-image"`).

```md
{{</* img
  class="CSS classes for the figure"
  src="image URL"
  img-class="CSS classes for the image"
  width="image width"
  height="image height"
  caption="Caption"
*/>}}
```

### Example

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

## Avatar item

Simple wrapper (with `div` tag) to place an image on the side of a text / content.
The image is vertically centered.
Without content (self-closing shortcode), only the image is rendered and `class` is ignored.

```md
{{%/* avatar-item
  class="CSS classes for the wrapper"
  img-class="CSS classes for the image, e.g. circle (optional)"
  src="URL de l'image"
  width="image width"
  height="image height"
*/%}}

Markdown content:
- A bullet point ...

{{%/* /avatar-item */%}}
```

### Example

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

### Example without content

```md
{{%/* avatar-item src="/logo/10.webp" height="50px" img-class="circle" /*/%}}
```

{{% div class="d-flex flex-justify-center" %}}
{{% avatar-item src="/logo/10.webp" height="50px" img-class="circle" /%}}
{{% /div %}}

## Media card

A card with an image on the side of its Markdown content.
With `url`, `icon` (required) is shown in the top-right corner and links to it.
By default each card is a grid column, so place the cards inside a flex grid `div` (`class` overrides it).

```md
{{%/* div class="d-flex flex-wrap gutter-condensed row-gap-6 mb-3" */%}}

{{%/* media-card
  class="column CSS classes (optional)" icon="icon SVG source (required with url)" icon-class="icon CSS classes (optional)"
  url="verification URL (optional)" src="image URL"
*/%}}

### Card title
{class="m-0"}
Subtitle
{class="m-0"}
Date
{class="m-0 text-small"}

{{%/* /media-card */%}}

{{%/* /div */%}}
```

### Example

```md
{{%/* div class="d-flex flex-wrap flex-justify-center gutter-condensed row-gap-6 mb-3" */%}}

{{%/* media-card src="/logo/10.webp" url="https://gohugo.io" icon="/static/primer/link-16.svg" icon-class="fgColor-accent" class="col-12 col-lg-4" */%}}
### Card title
{class="m-0"}
Subtitle
{class="m-0"}
Date
{class="m-0 text-small"}
{{%/* /media-card */%}}

{{%/* media-card src="/logo/10.webp" class="col-12 col-lg-4" */%}}
### Without URL
{class="m-0"}
Subtitle
{class="m-0"}
Date
{class="m-0 text-small"}
{{%/* /media-card */%}}

{{%/* /div */%}}
```

{{% div class="d-flex flex-wrap flex-justify-center gutter-condensed row-gap-6 mb-3" %}}

{{% media-card src="/logo/10.webp" url="https://gohugo.io" icon="/static/primer/link-16.svg" icon-class="fgColor-accent" class="col-12 col-lg-4" %}}
### Card title
{class="m-0"}
Subtitle
{class="m-0"}
Date
{class="m-0 text-small"}
{{% /media-card %}}

{{% media-card src="/logo/10.webp" class="col-12 col-lg-4" %}}
### Without URL
{class="m-0"}
Subtitle
{class="m-0"}
Date
{class="m-0 text-small"}
{{% /media-card %}}

{{% /div %}}

## Alert

A **Primer** banner with an icon and a title matching its type: `note` (default), `tip`, `important`, `warning` or `caution`.
GitHub alerts in Markdown blockquotes are rendered the same way.

```md
> [!tip]
> Markdown content.

{{</* alert type="alert type (optional)" title="custom title (optional)" */>}}
Markdown content.
{{</* /alert */>}}
```

### Example

```md
> [!note]
> Rendered from a **GitHub** alert.

{{</* alert type="warning" title="Careful" */>}}
Rendered from the shortcode with a custom title.
{{</* /alert */>}}
```

> [!note]
> Rendered from a **GitHub** alert.

{{< alert type="warning" title="Careful" >}}
Rendered from the shortcode with a custom title.
{{< /alert >}}

## Progress bar

A **Primer** progress bar filled up to `value` percent.

```md
{{</* progress-bar
  class="CSS classes of the filled part (optional)" size="small or large (optional)"
  value="percentage"
*/>}}
```

### Example

```md
{{</* progress-bar value="75" */>}}
{{</* progress-bar value="40" class="bgColor-accent-emphasis" size="large" */>}}
```

{{< div class="d-flex flex-column row-gap-3" >}}
{{< progress-bar value="75" >}}
{{< progress-bar value="40" class="bgColor-accent-emphasis" size="large" >}}
{{< /div >}}

## Label

A **Primer** label around a short text, `class` sets its variant and size.

```md
{{</* label class="CSS classes (optional)" */>}}text{{</* /label */>}}
```

### Example

```md
{{</* label */>}}default{{</* /label */>}}
{{</* label class="Label--success" */>}}stable{{</* /label */>}}
{{</* label class="Label--attention Label--large" */>}}beta{{</* /label */>}}
```

{{< div class="d-flex flex-justify-center col-gap-2" >}}
{{< label >}}default{{< /label >}}
{{< label class="Label--success" >}}stable{{< /label >}}
{{< label class="Label--attention Label--large" >}}beta{{< /label >}}
{{< /div >}}

## Timeline item

A timeline item uses associated **Primer** style ([here](https://primer.style/product/components/timeline/)).
It is a simple item with a side badge and some content.

```md
{{%/* timeline-item
  badge="/primer/book-16.svg"
  class="CSS classes for the item"
  inner-class="CSS classes for the content"
*/%}}

Markdown content:
- A bullet point ...

{{%/* /timeline-item */%}}
```

### Example

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

A simple shortcode to display two buttons side by side (or only one), `< Previous` and `Next >`, with custom URLs:

```md
{{</* paginate next="/path/to/next" prev="/path/to/previous" format="default OU terse" */>}}
```

In terse mode, if `next` or `prev` isn't provided, then the associated button is not displayed.
In default mode, the associated button is shown but disabled.

### Example

#### With both links

```md
{{</* paginate next="/en/walkthrough/shortcodes#paginate" prev="/en/walkthrough/shortcodes#paginate" format="terse" */>}}
{{</* paginate next="/en/walkthrough/shortcodes#paginate" prev="/en/walkthrough/shortcodes#paginate" format="default" */>}}
```

{{< paginate next="/en/walkthrough/shortcodes#paginate" prev="/en/walkthrough/shortcodes#paginate" format="terse" >}}
{{< paginate next="/en/walkthrough/shortcodes#paginate" prev="/en/walkthrough/shortcodes#paginate" format="default" >}}

#### With one link

```md
{{</* paginate prev="/en/walkthrough/shortcodes#paginate" format="terse" */>}}
{{</* paginate next="/en/walkthrough/shortcodes#paginate" format="terse" */>}}
{{</* paginate prev="/en/walkthrough/shortcodes#paginate" format="default" */>}}
{{</* paginate next="/en/walkthrough/shortcodes#paginate" format="default" */>}}
```

{{< paginate prev="/en/walkthrough/shortcodes#paginate" format="terse" >}}
{{< paginate next="/en/walkthrough/shortcodes#paginate" format="terse" >}}
{{< paginate prev="/en/walkthrough/shortcodes#paginate" format="default" >}}
{{< paginate next="/en/walkthrough/shortcodes#paginate" format="default" >}}

---
