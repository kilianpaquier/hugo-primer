---
date: 2025-04-16
description: "How to : pagination"
tags:
  - Setup
  - Pagination
title: Pagination
weight: 35
---

# {{% param "title" %}}

Au sein du thème, deux paginations sont possibles, dans les deux cas, l'ordre et le tri sont configurables dans la configuration `hugo.(yaml|toml)` :

```yaml
params:
  hugo_primer:
    pagination:
      format: default
      order: date
      sort: desc
      # slots: 5 # le nombre de page à afficher dans la pagination (< Précédent, 1, 2, 3, 4, ..., Suivant >)
      # pagerSize: 5 # le nombre d'éléments par page
```

## "Pagination" sur les pages uniques

Sur les pages uniques (comme celle-ci par exemple), seulement les *slots* `< Précédent` et `Suivant >` peuvent être affichés.
Cette pagination est désactivée par défaut, pour l'activer il suffit de fournir en paramètres de page la configuration suivante :

```yaml
---
params:
  hugo_primer:
    pagination:
      enabled: true
---
```

La pagination peut aussi être activée au global d'une section avec la propriété `cascade` sur la page parent
(par exemple la page représent [walkthrough](/walkthrough) ici) :

```yaml
---
cascade:
  params:
    hugo_primer:
      pagination:
        enabled: true
---
```

## Pagination sur les pages listées

La pagination sur les pages listées (comme [walkthrough](/walkthrough) par exemple) est activée par défaut.
Toute la configuration passe par les propriétés présentées plus haut.
