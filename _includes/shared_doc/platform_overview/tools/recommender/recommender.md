The Recommender tool allows users to find the most relevant semantic artefacts based on text excerpts or list of keywords. The ranking algorithm used by the Recommender evaluates the appropriateness of each semantic artefact available in the portal using a combination of four criteria:
- Coverage: to what extent does the semantic artefact represent the input? The Recommender invokes the Annotator service to obtain all the annotations of the input and then uses these annotations to compute a coverage score for each semantic artefact found.
- Acceptance: how well-known and trusted by the ecological community is the semantic artefact? The number of visits to the semantic artefact page in {{ page.portal }} and the presence or absence of the semantic artefact in UMLS are used to compute an acceptance score for each semantic artefact found.
- Detail of knowledge: what is the level of detail provided by the semantic artefact for the input data? It is computed using the number of definitions, synonyms and properties of the semantic artefact classes/concepts that cover the input data.
- Specialisation: how specialised is the semantic artefact to the input data’s domain? This is calculated using the number and type of annotations performed with the semantic artefact and the position of each annotated class/concept in the semantic artefact hierarchy. The result is normalised by the size of the semantic artefact, in order to identify small semantic artefacts that are specialised to the input data.

![Recommender Page]({{site.figures_link}}/{{page.portal}}/recommender.png)

For each of these four criteria, a score is computed. Then, the scores obtained are weighted and aggregated into a final score for each semantic artefact found. The default weights used to aggregate the scores can be changed in the advanced options section. Note that besides the output of the semantic artefact, which returns a ranked list of semantic artefacts, the Recommender also has a semantic artefact sets output, which allows users to find those semantic artefact sets that improve the coverage provided by individual semantic artefacts.
To retrieve semantic artefact recommendations programmatically, please see our Ontology Recommender REST API documentation.
For more details about the Recommender and to cite it, please read the related publication of Martínez-Romero et al., 2017