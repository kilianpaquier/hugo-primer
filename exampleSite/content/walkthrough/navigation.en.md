---
date: 2025-04-16
description: "How to: personalize top navigation"
tags:
  - Setup
  - Navigation
title: Navigation
weight: 10
---

# {{% param "title" %}}

Navigation may be added or modified with **hugo-primer**. By default, navigation is undefined (no navigation).
To enable it, edit the `hugo.(yaml|toml)` configuration file and add a `main` menu:

```yaml
menus:
  main:
    - identifier: about
      name: Overview
      pre: /static/primer/book-16.svg # icon to show before menu name
      pageRef: /
      weight: 5 # display order (smallest weight to highest weight)
      params:
        disable_counter: false # disables number of pages counter for given section

    - identifier: posts
      name: Posts
      pre: /static/primer/repo-16.svg
      pageRef: /posts
      weight: 10
      params:
        disable_counter: false # disables number of pages counter for given section
```

As you will have realized, no matter the number of menus in `main`, all of them will be displayed 😉.

You can find more information on menus [here](https://gohugo.io/content-management/menus/).
