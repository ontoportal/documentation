# {{ include.portal }} tools

{{ include.portal }} provides different tools to access, use and manage semantic artefacts including:
browse the semantic artefacts;
search for a term across multiple semantic artefacts;
browse mappings among terms in different semantic artefacts;
receive recommendations on which semantic artefacts are most relevant for a given corpus;
annotate text with terms from semantic artefacts;
create and edit semantic artefacts with VocBench Editor.
All information available through the {{ include.portal }} website is also available through the {{ include.portal }} Web service REST API. Please see REST API documentation for more information. 

## Browse

The Browser tool allows users to search for semantic artefacts. When opening the browser page (Figure 20), there are two options:
1. Scroll the full list of semantic artefacts and select one to see more detailed information (Browse all);
2. Type the semantic artefact name or abbreviation in the “Search…” bar.

![Browser Page]({{site.figures_link}}/{{include.portal}}/browse.png)

In both cases, the search can be further refined by using the filters provided on the left side of the page (Entry type, Uploaded in the Last, Category, Group, Format, Ontology Content, Natural Language, Formality Levels, Is of Type). To add a filter to the search, users can click the checkbox or filter label. Upon selecting the filter, the search will be updated to show results which contain the selected filter. Repeat the process to add additional filters.
Moreover, the list can be sorted by choosing the desired criteria (upper right side of the list of resource):
- Popular: number of visits to the semantic artefact;
- Name: alphabetical order;
- Class count: number of classes or concepts;
- Instances/concepts count: number of instances or concepts;
- Projects: number of projects where the semantic artefact is used;
- Notes: number of notes issued for that semantic artefact;
- Upload Date: date of last submission;
- Release Date: date of publication;
- FAIR score: O’FAIRe tool score.
To access semantic artefacts programmatically, see our Resources REST API documentation.
In the browse page, the “Submit New semantic artefact” button is also available on the upper-left part of the page, but users need to be logged in to perform this operation. 
For more information about publishing a new semantic artefact in {{ include.portal }}, please visit the guide.
