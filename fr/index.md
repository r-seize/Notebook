---
layout: default
title: Accueil
lang: fr
nav_exclude: true
permalink: /fr/
---

# Notebook

Bienvenue sur mon blog technique dédié au développement logiciel, au DevOps et aux technologies IT.

Ce blog a pour objectif de partager mes retours d’expérience, mes outils ainsi que des articles techniques issus de mon travail quotidien en développement, automatisation, architecture et sécurité. Il s’adresse à toutes les personnes qui souhaitent comprendre, pratiquer et approfondir le développement moderne à travers des cas concrets et des problématiques réelles.

Vous pouvez également retrouver l’ensemble de mes projets, expérimentations et contributions open-source sur mon GitHub, ainsi que mon parcours professionnel et mes expériences sur LinkedIn.

<div style="display:flex; gap:12px;">
  <a href      = "https://github.com/r-seize"
    target     = "_blank"
    rel        = "noopener noreferrer"
    class      = "btn"
    style      = "background-color:#000;color:#fff;border:none;">
    GitHub
  </a>
  <a href      = "https://www.linkedin.com/in/riyesan-amalathas/"
    target     = "_blank"
    rel        = "noopener noreferrer"
    class      = "btn btn-blue">
    LinkedIn
  </a>
</div>


## Parcourir par Catégorie

{% assign fr_categories = site.pages | where: "lang", "fr" | where: "layout", "category" | sort: "nav_order" %}
{% for cat in fr_categories %}
- [{{ cat.title }}]({{ cat.permalink | relative_url }}) - {{ cat.description }}
{% endfor %}