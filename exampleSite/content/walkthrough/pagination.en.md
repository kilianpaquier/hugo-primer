---
date: 2025-04-16
description: "How to: pagination"
tags:
  - Setup
  - Pagination
title: Pagination
weight: 35
---

# {{% param "title" %}}

With this theme, two pagination are available. In both cases, order and sort can be modified in configuration file `hugo.(yaml|toml)`:

```yaml
params:
  hugo_primer:
    pagination:
      format: default
      order: date
      sort: desc
      # slots: 5 # number of pages to display in pagination (< Previous, 1, 2, 3, 4, ..., Next >)
      # pagerSize: 5 # number of elements per page
```

## Single pages "pagination"

On single pages (like this one for instance), only `< Previous` and `Next >` slots can be displayed.
This pagination is disabled by default, and can be enabled simply by giving in `front matter` page properties the following configuration:

```yaml
---
params:
  hugo_primer:
    pagination:
      enabled: true
---
```

It can also be configured globally on the whole section with `cascade` property on the parent page (section):

```yaml
---
cascade:
  params:
    hugo_primer:
      pagination:
        enabled: true
---
```

In more advanced cases, you might want to use the [**`paginate`**](/walkthrough/shortcodes#paginate) shortcode to have a more precise pagination.
Well, this shortcode at least allows you to specify custom `< Previous` and `Next >` URLs, even give only one of them.

## List pages pagination

Pagination on list pages (like [walkthrough](/walkthrough)) is enabled by default and cannot be disabled.
There's nothing specific to say here, all properties can be configured through what was presented at the beginning.
