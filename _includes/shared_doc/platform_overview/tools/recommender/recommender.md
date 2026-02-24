The Recommender tool allows users to find the most relevant semantic artefacts based on text excerpts or list of keywords (Figure 9). The ranking algorithm used by the Recommender evaluates the appropriateness of each semantic artefact available in the portal using a combination of four criteria:
- _Coverage_: to what extent does the semantic artefact represent the input? The Recommender invokes the Annotator service to obtain all the annotations of the input and then uses these annotations to compute a coverage score for each semantic artefact found.
- _Acceptance_: how well-known and trusted by the ecological community is the semantic artefact? The number of visits to the semantic artefact page in EcoPortal are used to compute an acceptance score for each semantic artefact found.
- _Detail of knowledge_: what is the level of detail provided by the semantic artefact for the input data? It is computed using the number of definitions, synonyms and properties of the semantic artefact classes/concepts that cover the input data.
- _Specialisation_: how specialised is the semantic artefact with respect to the domain of input data? This is calculated using the number and type of annotations performed with the semantic artefact and the position of each annotated class/concept in the semantic artefact hierarchy. The result is normalised by the size of the semantic artefact, in order to identify small semantic artefacts that are specialised to the input data.

![Recommender Page]({{site.figures_link}}/{{page.portal}}/Figure9.png)
{: .text-center }

_Figure 9: The recommender tool_
{: .text-center }

For each of these four criteria, a score is computed. Then, the scores obtained are weighted and aggregated into a final score for each semantic artefact found. The default weights used to aggregate the scores can be changed in the advanced options section.
For more details about the Recommender tool and to cite it, please read the related publication of [Martínez-Romero et al., 2017](https://jbiomedsem.biomedcentral.com/articles/10.1186/s13326-017-0128-y).
To retrieve semantic artefact recommendations from the API, please see our [Recommender REST API documentation]().
