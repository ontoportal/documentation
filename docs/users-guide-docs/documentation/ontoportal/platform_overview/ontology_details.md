---
title: Details page
summary: Details page of ontologies
layout: default
parent:  OntoPortal overview
grand_parent: Users guide
permalink: user_guide/platform_overview/ontology_details/OntoPortal
nav_order: 3
---



## Semantic Artefact details
{% include shared_doc/platform_overview/ontology_details/sa_details_main.md  %}
{% include shared_doc/platform_overview/ontology_details/sa_details_screenshot.md  %}

## Metadata Summary
{% include shared_doc/platform_overview/ontology_details/summary/index.md  %}
{% include shared_doc/platform_overview/ontology_details/summary/summary_metadata_metrics_1.md  %}
{% include shared_doc/platform_overview/ontology_details/summary/summary_metadata_metrics_2.md  %}
{% include shared_doc/platform_overview/ontology_details/summary/summary_metadata_metrics_3.md  %}
{% include shared_doc/platform_overview/ontology_details/summary/summary_metadata_metrics_4.md  %}
{% include shared_doc/platform_overview/ontology_details/summary/summary_metadata_metrics_5.md  %}
{% include shared_doc/platform_overview/ontology_details/summary/summary_metadata_metrics_6.md  %}
### Submissions
![Submissions table]({{site.figures_link}}/{{page.portal}}/submissions_table.png)

In the submission area, all submissions made for that {{ page.atom }} are available. The table includes four columns:
- Version: shows the different versions loaded into {{ page.portal }} with the status next to it. The labels assigned automatically by the portal are: Parsed (the resource has been parsed), Indexed (the resource has been indexed), Metrics (the metrics for that resource have been calculated) and Annotator (the resource is ready to annotate some text via API or the Annotator tools). {{ page.portal }} indexes the latest submission. The previous submissions will appear with the "Archived" label, which means that submission will no longer be published;
- Released: shows the original release date (mm/dd/yy) of the resource (manually set by the user);
- Uploaded: shows the initial publication date (mm/dd/yy) of the resource in {{ page.portal }} (automatically assigned by the system);
- Downloads: allows the download of the resource in different formats SKOS, OBO, UMLS, OWL, CSV, RDF/XML, depending on the representation language of the resource. Furthermore, when more submissions occur for the same resource, the system performs an automatic download report (Diff) of the differences between the submitted versions.

{% include shared_doc/platform_overview/ontology_details/summary/summary_metadata_views.md  %}
{% include shared_doc/platform_overview/ontology_details/summary/summary_metadata_projects.md  %}


## Menu
{% include shared_doc/platform_overview/ontology_details/menu/index.md  %}
### Classes
On the summary page of the {{ page.atom }}, by clicking on tab “Classes”, it is shown:
- on the left side, different views of the resource. If it is an ontology, you will see the “Hierarchical view”, in which classes are organised in a tree-like structure, and the “Date view”, which displays classes based on their creation and modification dates (if these were defined). In the case of a thesaurus the “Collection view” will also be available. In addition, close to the search bar, there is a filter to select different schemes eventually available within a thesaurus;
- on the right side, an area containing Details, Visualization, Notes and Mappings related to the selected class or concept:
 - Details: tab showing properties and relationships associated with the selected class/concept.
 ![View classes of a specific ontology - details]({{site.figures_link}}/{{page.portal}}/ontology_classes.png)
 - Visualization: {{ page.portal }} presents {{ page.atoms }} in a graph format, with resource concepts represented as nodes and the relationships between them as edges. By default, the most basic directional relationships (parent/child relationships) are identified by a solid navy-blue line with an arrow pointing to the child concept/class. Mappings are represented by solid light-grey lines. 
![View classes of a specific {{ page.atom }} - visualization]({{site.figures_link}}/{{page.portal}}/ontology_visualization.png)
 - Notes: it displays all notes issued by {{ page.portal }} users in relation to the selected class/concept. To issue generic comments or proposals regarding new classes, new relationships, or change properties, users must be logged in.
 - Class Mappings: tab showing all the mappings associated with the selected class. For each mapping you can see:
   - MAPPING TO: the name of the selected class/concept mapped to the class/concept of another resource;
   - ONTOLOGY: the {{ page.atom }} of the mapped class/concept;
   - RELATIONS: the type of relation that the algorithms have used;
   - SOURCE: the mapping algorithm;
   - TYPE: the mappings can be internal to the portal or external to the portal;
   - ACTIONS: the mappings can be edited or deleted by the administrator of the resource.
Logged in users can click on the "Create new Mapping" button to manually insert mappings by filling in the following fields: target {{ page.atom }} or view; target class; details; comment; mapping relation type.
![View classes of a specific {{ page.atom }} - mappings]({{site.figures_link}}/{{page.portal}}/ontology_mappings.png)

{% include shared_doc/platform_overview/ontology_details/menu/menu_properties.md  %}
{% include shared_doc/platform_overview/ontology_details/menu/menu_notes.md  %}
{% include shared_doc/platform_overview/ontology_details/menu/menu_mappings.md  %}
{% include shared_doc/platform_overview/ontology_details/menu/menu_widgets.md  %}