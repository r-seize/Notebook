---
layout: default
title: Home
nav_order: 1
lang: en
permalink: /
---

# Notebook

Welcome to my technical blog dedicated to software development, DevOps, and IT technologies.

The purpose of this blog is to share my experiences, tools, and technical articles from my daily work in development, automation, architecture, and security. It is aimed at anyone who wants to understand, practice, and deepen their knowledge of modern development through concrete cases and real-world issues.

You can also find all of my projects, experiments, and open-source contributions on my GitHub, as well as my professional background and experience on LinkedIn.

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


## Browse by Category

{% assign en_categories = site.pages | where: "lang", "en" | where: "layout", "category" | sort: "nav_order" %}
{% for cat in en_categories %}
- [{{ cat.title }}]({{ cat.permalink }}) - {{ cat.description }}
{% endfor %}