### Submissions
![Submissions table]({{site.figures_link}}/{{page.portal}}/submissions_table.png)

In the submission area, all submissions made for that {{ page.atom }} are available. The table includes four columns:
- Version: shows the different versions loaded into {{ page.portal }} with the status next to it. The labels assigned automatically by the portal are: Parsed (the resource has been parsed), Indexed (the resource has been indexed), Metrics (the metrics for that resource have been calculated) and Annotator (the resource is ready to annotate some text via API or the Annotator tools). {{ page.portal }} indexes the latest submission. The previous submissions will appear with the "Archived" label, which means that submission will no longer be published;
- Released: shows the original release date (mm/dd/yy) of the resource (manually set by the user);
- Modified: shows the latest modification date (mm/dd/yyyy) of the {{ page.atom }}.
- Uploaded: shows the initial publication date (mm/dd/yy) of the resource in {{ page.portal }} (automatically assigned by the system);
- Downloads: allows the download of the resource in different formats SKOS, OBO, UMLS, OWL, CSV, RDF/XML, depending on the representation language of the resource. Furthermore, when more submissions occur for the same resource, the system performs an automatic download report (Diff) of the differences between the submitted versions.

