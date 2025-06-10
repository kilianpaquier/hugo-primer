---
date: 2025-04-16
description: "How to: other customization, more or less advanced"
tags:
  - Setup
  - Favicon
  - Global container
  - Lazysizes
  - Instant pages
title: Advanced usage
weight: 50
---

# {{% param "title" %}}

## Favicon

Favicon represent the small icon in the tab name.
It is as such essential to be able to configure it, since it may be in the majority of cases, the website logo (still in configuration file `hugo.(yaml|toml)`):

```yaml
params:
  hugo_primer:
    favicon: /logo.webp
```

## Copyright

You are also able to provide configuration file `hugo.(yaml|toml)` with Hugo property `copyright`.
When given, copyright section will appear in bottom page, inside the footer.

Beyond this configuration, you are also able to completely override footer by overriding layout `layouts/partials/hugo-primer/footer.html`:

```html
<!-- override this layout to replace the footer content -->

{{ $container := site.Params.hugo_primer.styles.container }}
{{ $offset := or .IsPage (eq .Kind "404") }}

{{ if or site.Copyright site.Params.hugo_primer.notices }}
<footer>
    <div class="{{ $container }} py-6">
        <div class="col-12 {{ if not $offset }}col-md-8 col-lg-9 offset-md-4 offset-lg-3{{ end }}">
            <ol class="list-style-none d-flex flex-justify-center col-gap-6 row-gap-2 flex-wrap text-small fgColor-muted">
                {{ with site.Copyright }}<li>{{ . }}</li>{{ end }}
                {{ range site.Params.hugo_primer.notices }}<li>{{ . | markdownify }}</li>{{ end }}
            </ol>
        </div>
    </div>
</footer>
{{ end }}
```

## Notices

By default (in the footer), a minimal number of notices are present to redirect users to the right links this theme is based on.
Those notices can be modified through the configuration file `hugo.(yaml|toml)` to add, edit or remove one (or more) or all of them:

```yaml
params:
  hugo_primer:
    notices:
      - Styles by [**Primer**](https://primer.style/)
      - Theme by [**hugo-primer**](https://github.com/kilianpaquier/hugo-primer)
```

## Website container

As shown in theme overview, all styles are based on **Primer**.
To avoid the whole content to take too much place on large screen, default container is defined in configuration file `hugo.(yaml|toml)`:

```yaml
params:
  hugo_primer:
    styles:
      container: container-xl px-3 px-md-4 px-lg-5
```

You may modify it to increase content space and also play with global paddings.
Note that modification of this style affects top navigation, main content, **giscus** comments section and footer.
You can find more information about **Primer** grid system [here](https://primer.style/css/storybook/?path=/story/utilities-grid--container).

## Lazysizes

With this theme, you can use CSS class `lazyload` to load images only once they enter page view.
This feature, based on [**lazysizes**](https://afarkas.github.io/lazysizes/index.html) is by default enabled
and can be disabled in configuration file `hugo.(yaml|toml)`:

```yaml
params:
  hugo_primer:
    # see https://afarkas.github.io/lazysizes/index.html
    lazysizes:
      disabled: false
```

Overall, it's easy to add a class on an HTML tag. However, how to on an image defined in markdown content ?
You can easily achieve that with Hugo `figure` shortcode like provided below (more information [here](https://gohugo.io/shortcodes/figure/)):

```md
{{</* figure
  src="/images/examples/zion-national-park.jpg"
  alt="A photograph of Zion National Park"
  link="https://www.nps.gov/zion/index.htm"
  caption="Zion National Park"
  class="lazyload"
*/>}}
```

## Instant pages

To speed up pages loading, this theme uses [**instantpage**](https://instant.page/).
It is enabled by default, like almost everything else and can be disabled in configuration file `hugo.(yaml|toml)`:

```yaml
params:
  hugo_primer:
    # see https://instant.page/
    instantpage:
      disabled: false
```

How does it work ? Once in a while, when the user hovers an internal link (another page of your website for instance),
a new HTML tag `link` is added to `head` HTML tag with following properties:

```html
<link rel="prefetch" href="<URL>" fetchpriority="high" as="document">
```

By adding this tag, **instantpage** indicates to the user browser that it can preload resources to improve user navigation experience.
You may find more information on **MDN** documentation [here](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch).

## Styles versions

At last, to end this "advanced" section, all **Primer** styles versions (and other imports) are defined in configuration file `hugo.(yaml|toml)`:

```yaml
params:
  hugo_primer:
    versions:
      dompurify: v3.2.6
      fuse: v7.1.0
      instantpage: 5.2.0
      primer_css: v21
      primer_primitives: v10
      primer_react: v37
      primer_view_components: v0
```

It is as such feasible to edit those to fix a specific version or to update one (or all) to a newer version.
Obviously, this theme will try to follow as much as possible versions upgrades.
