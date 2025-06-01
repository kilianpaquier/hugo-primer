---
date: 2025-04-16
description: "How to: configure global search"
pin: true
tags:
  - Setup
  - Search
title: Search
weight: 40
---

# {{% param "title" %}}

Search was developed to be as alike as possible as **GitHub** website search.
Search is powered by [**fuse.js**](https://www.fusejs.io/) to avoid reimplementing a search engine.

Results are grouped by sections (walkthrough, posts, etc.), sections are computed dynamically from search results.
A separator is added between all section results.

There's nothing much to say on search, just that the search overlay can be opened with `/`, closed with `Escape`
and navigation may be done with `ArrowUp` and `ArrowDown` to avoid losing focus on search input.
Of course, navigation with arrows allow navigating between multiple section results.
