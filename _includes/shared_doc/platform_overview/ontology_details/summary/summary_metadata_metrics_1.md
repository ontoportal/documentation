### Metrics
This section describes the metrics that {{ page.portal }} computes for each semantic artefact (Figure 15). Metrics start to be computed when a semantic artefact is uploaded and they are part of the [EcoPortal Metadata Schema]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/metadata_schema.md %}). By clicking on the window icon next to “Classes”, “Individuals” and “Properties”, users can access the graph showing the evolution of the number of classes/individuals/properties of the selected semantic artefact.

![Metrics area of the summary page of a semantic artefact]({{site.figures_link}}/{{page.portal}}/Figure15.png)
{: .text-center }

_Figure 15: Metrics area of the summary page of a semantic artefact_
{: .text-center }


__Note__: some metrics are meaningful only for semantic artefacts in a specific representation language (e.g., there are no individuals to count in the ontologies in OBO format; there is no SKOS concepts count).
The statistical metrics include:
- _Number Of Classes_: the number of named (not anonymous) classes in the semantic artefact;
- _Number Of Individuals_: the number of individuals in the semantic artefact;
- _Number Of Properties_: the number of properties or slots in the semantic artefact;

For more details about the metrics generation, please read [this](https://www.bioontology.org/wiki/Ontology_Metrics). EcoPortal users will be able to access semantic artefact metrics in two ways:
- through the EcoPortal user interface, in the metrics area of the summary page (see example [here](https://ecoportal.lifewatch.eu/ontologies/ELTER_CL/));
- through a dedicated REST service that returns a JSON (see example below).

The following REST service can be used:
**_https://data.ecoportal.lifewatch.eu/ontologies/ELTER_CL/metrics?apikey=YourAPIKey_**
The service returns a JSON that contains the version id for the semantic artefact and the values for the metrics:

```json
{
"id": "https://data.ecoportal.lifewatch.eu/ontologies/ELTER_CL/submissions/1/metrics",
"properties": 0,
"individuals": 579,
"classes": 2,
"maxChildCount": 2,
"classesWithMoreThan25Children": 0,
"classesWithOneChild": 0,
"maxDepth": 0,
"created": "2023-11-16T15:11:43+00:00",

"submission": [
"https://data.ecoportal.lifewatch.eu/ontologies/ELTER_CL/submissions/1"
],
"classesWithNoDefinition": 2,
"averageChildCount": 2,
"numberOfAxioms": null,
"entities": null,
"@id": "https://data.ecoportal.lifewatch.eu/ontologies/ELTER_CL/submissions/1/metrics",
"@type": "http://data.bioontology.org/metadata/Metrics",
"links": {
"ontology": "https://data.ecoportal.lifewatch.eu/ontologies/ELTER_CL",
"submission": "https://data.ecoportal.lifewatch.eu/ontologies/ELTER_CL/submissions/1",
"@context": {
"ontology": "http://data.bioontology.org/metadata/Ontology",
"submission": "http://data.bioontology.org/metadata/OntologySubmission"
}
},
"@context": {
"@vocab": "http://data.bioontology.org/metadata/",
"created": "http://data.bioontology.org/metadata/created",
"classes": "http://data.bioontology.org/metadata/classes",
"individuals": "http://data.bioontology.org/metadata/individuals",
"properties": "http://data.bioontology.org/metadata/properties",
"maxDepth": "http://data.bioontology.org/metadata/maxDepth",
"maxChildCount": "http://data.bioontology.org/metadata/maxChildCount",
"averageChildCount": "http://data.bioontology.org/metadata/averageChildCount",
"classesWithOneChild": "http://data.bioontology.org/metadata/classesWithOneChild",
"classesWithMoreThan25Children": "http://data.bioontology.org/metadata/classesWithMoreThan25Children",
"classesWithNoDefinition": "http://data.bioontology.org/metadata/classesWithNoDefinition",
"numberOfAxioms": "http://omv.ontoware.org/2005/05/ontology#numberOfAxioms",
"entities": "http://rdfs.org/ns/void#entities",
"@language": "en"
}
}
```

If a given semantic artefact has more than 200 classes identified for a metric, then that metric will provide an error message within the class list. Two messages can appear:
- limitpassed: it means that the 200-class limit was reached. When this error appears, it is followed by the total number of classes in the semantic artefact that matches this metric;
- alltriggered: it means that every class in the semantic artefact matched this metric.
