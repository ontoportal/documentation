---
layout: default
title: Home
nav_order: 1
summary: "This OntoPortal documentation home page hosts all the separate OntoPortal topics and is hosted on GitHub Pages."
permalink: /
---

# Welcome to the OntoPortal Documentation

### About us

OntoPortal is an open-source software stack for building ontology and semantic artefact repositories. It originates from BioPortal, developed by the [Stanford Center for Biomedical Informatics Research](https://bmir.stanford.edu/), and from AgroPortal, originally developed at [LIRMM](https://www.lirmm.fr) (Laboratoire d'Informatique, de Robotique et de Microélectronique de Montpellier) and now maintained at INRAE.

The [OntoPortal Alliance](https://ontoportal.org) is a consortium of research and infrastructure teams dedicated to promoting semantic services across scientific disciplines. It develops and maintains the shared OntoPortal open-source software, currently powering repositories such as BioPortal, AgroPortal, EcoPortal, and MatPortal, as well as over 135 registered appliance installations worldwide. The Alliance operates as an open community, coordinated through GitHub and sustained through annual workshops.

### How this documentation is organized

This documentation is structured into three complementary guides, each targeting a different audience:

- 📖 **[User Guide]({{site.baseurl}}/user-guide)** — for **end users** who browse, search, and exploit ontologies and semantic artefacts through an OntoPortal portal.
- 🛠️ **[Administration Guide]({{site.baseurl}}/administration-guide)** — for **administrators** who install, configure, and maintain their own OntoPortal appliance.
- 💻 **[Developer Guide]({{site.baseurl}}/developer-guide)** — for **developers** who integrate OntoPortal into their applications (APIs, widgets) or contribute to the software and this documentation.

> 💡 The **User Guide** may be customized for a specific OntoPortal instance (e.g., AgroPortal, EcoPortal, EarthPortal). Select your portal at the top of the User Guide; if your portal does not provide a customized version, refer to the **default OntoPortal** User Guide.

### License

The OntoPortal software is distributed under the [BSD-2-Clause license](https://opensource.org/license/bsd-2-clause). For license details of each component, see the corresponding code repositories.

### Contributing

See the section [How to contribute to the doc]({{site.baseurl}}/developer-guide/how-to-contribute-doc), to know about maintaining and contributing to this documentation.

OntoPortal Alliance is committed to fostering a welcoming community. View our [Code of Conduct]({{site.baseurl}}/developer-guide/code-of-conduct).


### Contact

<div style="display:flex; flex-direction:column; gap:0.75rem; margin-top:0.5rem;">
  <a href="mailto:{{site.support_email}}" style="display:inline-flex; align-items:center; gap:0.6rem; text-decoration:none; color:inherit;">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    <span>{{site.support_email}}</span>
  </a>
  <a href="https://ontoportalalliance.slack.com/" target="_blank" style="display:inline-flex; align-items:center; gap:0.6rem; text-decoration:none; color:inherit;">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/><path fill="#E01E5A" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/><path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"/><path fill="#36C5F0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/><path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z"/><path fill="#2EB67D" d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/><path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z"/><path fill="#ECB22E" d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
    <span>Join us on Slack</span>
  </a>
</div>


#### Thank you to the contributors of this documentation!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>


[Jekyll]: https://jekyllrb.com
[Markdown]: https://daringfireball.net/projects/markdown/
[Liquid]: https://github.com/Shopify/liquid/wiki
[Front matter]: https://jekyllrb.com/docs/front-matter/
[Jekyll configuration]: https://jekyllrb.com/docs/configuration/
[GitHub Pages]: https://pages.github.com/
[use the template]: https://github.com/just-the-docs/just-the-docs-template/generate
