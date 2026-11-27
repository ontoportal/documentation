---
layout: default
title: Administration Guide
nav_order: 2
has_children: true
has_toc: false
permalink: /administration-guide
version: "v32"
---

{% include admin_nav.html %}

# OntoPortal Administration Guide

Installation and maintenance documentation for OntoPortal. It focuses on system administration.
This software is provided by the <a href="https://ontoportal.org">OntoPortal Alliance</a>. 

There are different ways to install OntoPortal.

- > The recommended approach is by getting and installing the {{site.opva}} as provided by [Stanford BMIR](https://bmir.stanford.edu/) which keeps trace of all the uses and assigns free licenses. This Appliance is based on BioPortal codebase and packaged roughly once a year. For this, please contact **Alex Skrenchuk** at <alex.skrenchuk@stanford.edu>.
- > A custom version of the {{site.opva}} is distributed by [INRAE MISTEA](https://mistea.montpellier.hub.inrae.fr/) which is based on AgroPortal codebase. For this, please contact **Clement Jonquet** at <clement.jonquet@inrae.fr>.
- > The [`ontoportal_docker`](https://github.com/ontoportal/ontoportal_docker) repository provides a containerized installation of OntoPortal intended primarily for developers and evaluation purposes, rather than production deployments. While it is actively maintained, we currently offer only limited support for this installation method.
- > The [`ontoportal-deployment`](https://github.com/ontoportal/ontoportal-deployment) repository provides deployment resources for setting up a containerized OntoPortal instance using Docker and Kubernetes. It is designed for more robust and scalable deployments, including production environments, although it requires familiarity with container orchestration and infrastructure management.


The documentation generally holds for any version of {{site.opva}} which current version is {{site.release_version}}. When something is specific for a version of the Appliance the page displays alternative pages.

This software is provided by the <a href="https://bmir.stanford.edu">Stanford Center for Biomedical Informatics Research</a> (BMIR) and the <a href="https://ontoportal.org">OntoPortal Alliance</a>. 

To use this software, you must have a license. 
Licenses are provided free to individual users for their own research,
and to non-profit and educational institutions. 
See our <a href="{{site.baseurl}}/administration-guide/general/licensing">licensing page</a> for more information. 

<hr>

<h2 class="text-delta">Table of contents</h2>

{%- assign admin_sections = site.pages | where: "parent", page.title | where_exp: "item", "item.grand_parent == nil" | sort: "nav_order" -%}
<ul>
{%- for section in admin_sections -%}
  <li>
    <a href="{{ section.url | relative_url }}">{{ section.title }}</a>{% if section.summary %} - {{ section.summary }}{% endif %}
    {%- assign subsections = site.pages | where: "parent", section.title | where_exp: "item", "item.nav_exclude != true" | sort: "nav_order" -%}
    {%- if subsections.size > 0 -%}
    <ul>
      {%- for sub in subsections -%}
      <li><a href="{{ sub.url | relative_url }}">{{ sub.title }}</a>{% if sub.summary %} - {{ sub.summary }}{% endif %}</li>
      {%- endfor -%}
    </ul>
    {%- endif -%}
  </li>
{%- endfor -%}
</ul>
