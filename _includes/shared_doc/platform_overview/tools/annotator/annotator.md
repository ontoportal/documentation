The Annotator tool enables the generation of annotations by entering or pasting free text in the box and clicking on the “Get Annotations” button (Figure 22).
The system matches words in the text to terms from the semantic artefacts available in the portal by doing an exact string comparison (a “direct” match) between the text and names, synonyms, and IDs of terms within the semantic artefacts. The set of matches can be expanded by including matches from mapped terms and from hierarchical expansion. The system performs the hierarchical expansion on the superclass (“is-a”) relationship for most semantic artefacts, including OWL and UMLS RFF. For OBO semantic artefacts the hierarchical expansion also includes the part-of relationship. The “number of levels” can be used to control the number of levels up the hierarchy for which the system will return terms for a given match.
To generate annotations programmatically, see the REST API documentation.
For more details about the Annotator tool, please read Shah et al., 2009

![Annotator Page]({{site.figures_link}}/{{page.portal}}/annotator.png)
