The following REST service can be used: https://{{ page.RESTURL }}/ontologies/OntologyAcronym/metrics?apikey=YourAPIKey
The service returns a JSON that contains the version id for the {{ page.atom }} and the values for the metrics.

If a given semantic artefact has more than 200 classes identified for a metric, then that metric will provide an error message within the class list. Two messages can appear:
- limitpassed: it means that the 200-class limit was reached. When this error appears, it is followed by the total number of classes in the semantic artefact that matches this metric;
- alltriggered: it means that every class in the semantic artefact matched this metric.
