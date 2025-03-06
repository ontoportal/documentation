The [Search](https://ecoportal.lifewatchdev.eu/search) option allows users to find a term across semantic artefacts by clicking on the arrow pointing to the right in the home page search box and entering free text in the “Enter a term” bar. The system looks for matches in the term name, synonyms, term IDs, and in property values.

The advanced search options can be used to add (Figure 4):
- _Property values_: named association between two entities. Examples are "definition" (a relationship between a class and some text) and "part of" (a relationship between two classes). 
- _Obsolete classes_: a class that the authors of the semantic artefact have flagged as being obsolete. These classes are often left in semantic artefacts so that existing systems that depend on them will continue to function. 
- _Semantic resource views_: search only ontological views.

Users can also narrow the search by selecting “exact matches” and/or “classes with definitions” or by selecting one or more categories and/or semantic artefacts using the "Categories" and "Semantic resources" fields. In addition, it is possible to perform a broader search by selecting one or more federated OntoPortal instances, namely AgroPortal, BiodivPortal and EarthPortal, from the section “Results from external portals”.

![Search Page]({{site.figures_link}}/{{page.portal}}/Figure4.png)
{: .text-center }

_Figure 4: The search tool_
{: .text-center }

To allow better performances, the search result is limited to the top 100 matches.

The search result within EcoPortal will display the matched terms and their associated semantic artefact. For each search result it is also shown:

- _details_: a window with the associated properties of the searched term;
- _visualize_: the graph with the nodes of the terms and the path to the root;
- <_number_>  _more from this semantic resource_: other similar terms within the semantic artefact are shown.


If a federated search is performed, for each search result it is shown:
 - <_number_> _more from this semantic resource_;
 - the badge of the OntoPortal instance in which the result can be found.

Search can be done using the API directly. To learn more, see our [Search REST API documentation]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/developer_guide/rest_api_documentation.md %}).
