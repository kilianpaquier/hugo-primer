---
date: 2025-04-16
description: "How to: extras links, logo, titles and additional side content"
tags:
  - Setup
  - Navigation
title: Side content
weight: 15
---

# {{% param "title" %}}

## Logo, title, subtitle

Side content can also be customized !
Logo, title and subtitle may be defined as followed in configuration file `hugo.(yaml|toml)`:

```yaml
params:
  hugo_primer:
    logo: /logo.webp
    title: Title
    subtitle: Subtitle
```

## Extras links

Additionally, extras links may be defined with Hugo menu `profile`:

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

Is is as such possible to define as many links as wished 😀.

You can find more information on menus [here](https://gohugo.io/content-management/menus/).

## Extras

Aside `profile` menu and extras links, it is possible to override layout `layouts/partials/hugo-primer/side.html` to add content below extras links.
