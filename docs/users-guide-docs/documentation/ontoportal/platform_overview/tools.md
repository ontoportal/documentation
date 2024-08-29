---
title: Tools
summary: OntoPortal tools
layout: default
parent:  OntoPortal overview
grand_parent: Users guide
permalink: user_guide/platform_overview/tools/OntoPortal
nav_order: 2
---



{% include shared_doc/platform_overview/tools/tools.md  %}

### Browse
{% include shared_doc/platform_overview/tools/browse/browse.md  %}
{% include shared_doc/platform_overview/tools/browse/filters.md  %}
{% include shared_doc/platform_overview/tools/browse/submit.md  %}

### Search
{% include shared_doc/platform_overview/tools/search/search.md  %}

### Annotator
{% include shared_doc/platform_overview/tools/annotator/annotator.md  %}

### Recommender
{% include shared_doc/platform_overview/tools/recommender/recommender.md  %}

### Mappings
The Mappings tool enables the association of two or more terms in different semantic
artefacts, typically indicating a degree of similarity between them. The author of the
mapping defines its relation; in addition, although not required, it is usually recommended
for a mapping to be bi-directional.
To upload mappings, use the “Upload mappings” button. A valid file format example is
available. You can either select the file or drag and drop it into the box.
Mappings can be searched by selecting the semantic artefact from the drop-down menu. The results table will show all the semantic artefacts to which the selected resource is mapped with and the number of existing mappings (minimum one) (Figure 23). Select a semantic artefact from this table to browse the mappings between the two semantic artefacts.

To access mappings programmatically please see our Mappings REST API documentation.
![Mappings Page]({{site.figures_link}}/{{page.portal}}/mappings.png)

{% include shared_doc/platform_overview/tools/mapping/sources.md  %}


