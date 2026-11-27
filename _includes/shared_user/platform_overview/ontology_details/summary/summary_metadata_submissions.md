### Submissions
![Submissions table]({{site.figures_link}}/{{page.portal}}/Figure16.png)
{: .text-center }

_Figure 16: Submissions table_
{: .text-center }

In the submission area, all submissions made for that semantic artefact are available (Figure 16). The table includes four columns:
- _Version_: shows the different versions loaded into EcoPortal with the status next to it. The labels assigned automatically by the portal are: Parsed (the resource has been parsed), Indexed (the resource has been indexed), Metrics (the metrics for the resource have been calculated) and Annotator (the resource is ready to annotate some text via [API]({{ site.baseurl }}{% link docs/developer-guide/developer-information/api_key.md %}) or the [Annotator tool](http://ecoportal.lifewatch.eu/annotator)). EcoPortal indexes the latest submission. The previous submissions will appear with the "Archived" label, which means that submission will no longer be published;
- _Modified_: shows the latest modification date (mm/dd/yyyy) of the semantic artefact (manually set by the creator);
- _Submitted_: shows the original release date (mm/dd/yy) of the semantic artefact (manually set by the creator);
- _Actions_: allows the download of the semantic artefact in different formats SKOS, OBO, UMLS, OWL, CSV, RDF/XML, depending on the representation language of the resource. Furthermore, when more submissions occur for the same resource, the system performs an automatic download report (Diff) of the differences between the submitted versions.