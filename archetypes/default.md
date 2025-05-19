---
date: {{ .Date }}
description: "Important for SEO"
draft: true
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
weight: 5
---

# {{% param "title" %}}
