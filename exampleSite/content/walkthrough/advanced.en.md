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

The favicon is the small icon shown next to the tab name.
Since it's the website logo in most cases, it can be configured in the `hugo.(yaml|toml)` configuration file:

```yaml
params:
  hugo_primer:
    favicon: /logo.webp
```

## Copyright

You can also set the Hugo `copyright` property in the `hugo.(yaml|toml)` configuration file.
When given, the copyright appears at the bottom of the page, inside the footer.

Beyond this configuration, you can completely replace the footer by overriding the `layouts/_partials/hugo-primer/footer.html` layout:

```html
{{- $container := site.Params.hugo_primer.styles.container }}
{{- $offset := or .IsPage (eq .Kind "404") }}

{{- if or site.Copyright site.Params.hugo_primer.notices }}
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
{{- end }}
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

As shown in the theme overview, all styles are based on **Primer**.
To keep the content from taking too much space on large screens, a default container is defined in the `hugo.(yaml|toml)` configuration file:

```yaml
params:
  hugo_primer:
    styles:
      container: container-xl px-3 px-md-4 px-lg-5
```

You may modify it to increase content space and also play with global paddings.
Note that modification of this style affects top navigation, main content, **giscus** comments section and footer.
You can find more information about **Primer** grid system [here](https://primer.style/css/storybook/?path=/story/utilities-grid--container).

## Custom stylesheet

It is possible to add a custom stylesheet through the following `hugo.(yaml|toml)` configuration:

```yaml
params:
  hugo_primer:
    styles:
      custom_file: ""
```

## Sass transpiler

By default, in case a Sass stylesheet file is present in the project (and expected to be used), the default transpiler will be [**dart-sass**](https://github.com/sass/dart-sass).
It's possible to override this configuration but note that only **dart-sass**
and **libsass** [are supported by](https://gohugo.io/functions/css/sass/#transpiler) **Hugo** where the latter is deprecated.

```yaml
params:
  hugo_primer:
    styles:
      transpiler: dartsass
```

## Lazysizes

With this theme, you can use the CSS class `lazyload` to load images only once they enter the page view.
This feature, based on [**lazysizes**](https://afarkas.github.io/lazysizes/index.html), is enabled by default
and can be disabled in the `hugo.(yaml|toml)` configuration file:

```yaml
params:
  hugo_primer:
    # see https://afarkas.github.io/lazysizes/index.html
    lazysizes:
      disabled: false
```

Overall, it's easy to add a class to an HTML tag. However, how do you add one to an image defined in Markdown content?
You can easily achieve that with the Hugo `figure` shortcode as shown below (more information [here](https://gohugo.io/shortcodes/figure/)):

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

To speed up page loading, this theme uses [**instantpage**](https://instant.page/).
It is enabled by default, like almost everything else, and can be disabled in the `hugo.(yaml|toml)` configuration file:

```yaml
params:
  hugo_primer:
    # see https://instant.page/
    instantpage:
      disabled: false
```

How does it work? When the user hovers over an internal link (another page of your website for instance),
a new HTML `link` tag is added to the `head` HTML tag with the following properties:

```html
<link rel="prefetch" href="<URL>" fetchpriority="high" as="document">
```

By adding this tag, **instantpage** tells the user's browser that it can preload resources to improve the navigation experience.
You may find more information in the **MDN** documentation [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/prefetch).

## Styles versions

Finally, all **Primer** styles versions (and other imports) are defined in the `hugo.(yaml|toml)` configuration file:

```yaml
params:
  hugo_primer:
    versions:
      dompurify: 3.4.16
      fuse: 7.5.0
      instantpage: 5.2.0
      primer_css: 22.3.2
      primer_primitives: 11.10.0
      primer_react: 38.40.1
      primer_view_components: 0.53.5
```

You can therefore edit those to pin a specific version or to update one (or all) to a newer version.
Obviously, this theme will try to keep up with version upgrades as much as possible.
