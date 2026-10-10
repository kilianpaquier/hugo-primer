---
date: 2025-04-16
description: "How to: extra links, logo, titles and additional side content"
tags:
  - Setup
  - Navigation
title: Side content
weight: 15
---

# {{% param "title" %}}

## Logo, title, subtitle

Side content can also be customized!
Logo, title and subtitle may be defined as follows in the `hugo.(yaml|toml)` configuration file:

```yaml
params:
  hugo_primer:
    nav_logo: /logo.webp
    profile_logo:
      sizes: "(max-width: 768px) 170px, 290px"
      src: /logo/20.webp
      srcset: /logo/10.webp 192w, /logo/20.webp 384w
    subtitle: Subtitle
    title: Title
```

## Extra links

Additionally, extra links may be defined with the Hugo `profile` menu:

```yaml
menus:
  profile:
    - identifier: company
      params:
        aria_label: My Company
        class: text-bold
      name: "@example"
      pre: /static/primer/organization-16.svg

    - identifier: mail
      name: example@example.com
      pre: /static/primer/mail-16.svg
      url: mailto:example@example.com

    - identifier: website
      name: https://example.com
      pre: /static/primer/link-16.svg
      url: https://example.com

    - identifier: linkedin
      name: in/example
      pre: /static/primer/in-16.svg
      url: https://example.com
```

It is therefore possible to define as many links as you wish 😀.

You can find more information on menus [here](https://gohugo.io/content-management/menus/).

## Extras

Besides the `profile` menu and extra links, it is possible to override the `layouts/_partials/hugo-primer/side.html` layout to add content below the extra links.
