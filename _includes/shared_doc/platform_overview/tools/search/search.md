The Search tool allows users to find a term across semantic artefacts by entering free textin the “Search…” bar and clicking on the “Search” button. The system looks for matches inthe term name, synonyms, term IDs, and in property values.The advanced search options can be used to include in the search:
- Property Values: named association between two entities. Examples are "definition" (a relationship between a class and some text) and "part of" (a relationship between two classes).
- Obsolete Classes: a class that the authors of the semantic artefact have flagged as being obsolete.  These classes are often left in semantic artefacts so that existing systems that depend on them will continue to function.
- Ontology Views: search only ontological views.

Users can also narrow the search by selecting “exact matches” and/or “classes with definitions”. In addition, it is possible to refine the search by selecting one or more categories and/or semantic artefacts using the "Categories" and "Ontologies" fields.

![Search Page]({{site.figures_link}}/{{page.portal}}/search.png)

To allow better performances, the search results are limited to the top 100 matches. The search result will display the matched terms and their associated semantic artefact. For each search result it is also shown (links in blue):
- details: a window with the associated properties of the searched term;
- visualize: the graph with the nodes of the terms and the path to the root;
- <number> more from this ontology: other similar terms within the semantic artefact are shown.
To search programmatically see our Search REST API documentation.
