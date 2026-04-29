---
title: EcoPortal Tools
summary: EcoPortal tools
layout: default
parent:  EcoPortal overview
grand_parent: User Guide
permalink: user_guide/platform_overview/tools/EcoPortal
nav_order: 2
---

## EcoPortal Tools
EcoPortal provides different tools to access, use and manage semantic artefacts including:
- [browse](#browse) the semantic artefacts;
- [search](#search) for specific classes or concepts;
- [browse mappings](#mappings) among terms in different semantic artefacts;
- [receive recommendations](#recommender) on which semantic artefacts are most relevant for a given corpus;
- [annotate text](#annotator) with terms from semantic artefacts;
- [create and edit semantic artefacts](#vocbench) with VocBench Editor.
All information available through the EcoPortal website is also available through the [REST API documentation]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/developer_guide/api_key.md %}).


{% include shared_doc/platform_overview/tools/tools.md  %}

### Browse
{% include shared_doc/platform_overview/tools/browse/browse.md  %}

- _Name_: alphabetical order;
- _Classes count_: number of classes;
- _Instances/concepts count_: number of instances or concepts;
- _Submitted date_: date of last submission;
- _Creation date_: date of publication;
- _FAIR score_: O’FAIRe tool score;
- _Popularity_: number of visits to the {{page.atom}};
- _Notes_: number of notes issued for the {{page.atoms}};
- _Projects_: number of projects where {{page.atoms}} are used.

To access {{page.atoms}} through the API, see our [Resources REST API documentation]().

In the browse page, the “Submit new {{page.atom}}” button is also available on the upper-left part of the page, but users need to be logged in to perform this operation.

For more information about publishing a new {{page.atom}} in {{ page.portal }}, please visit the [guide]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/ontology_lifecycle/submit.md %}).


### Search
{% include shared_doc/platform_overview/tools/search/search.md  %}

### Annotator
{% include shared_doc/platform_overview/tools/annotator/annotator.md  %}

### Mappings
{% include shared_doc/platform_overview/tools/mapping/mappings.md  %}
{% include shared_doc/platform_overview/tools/mapping/sources.md  %}

### Recommender
{% include shared_doc/platform_overview/tools/recommender/recommender.md  %}

### VocBench
{% include shared_doc/platform_overview/tools/vocbench/vocbench.md  %}


