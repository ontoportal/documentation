## Submit new {{ page.atoms }}

In order to publish a {{page.atom}}, you need to sign up for an account at the {{ page.portal }} website:
- Login {{ page.portal }}: [link]({{page.purl}}login)
- Registration {{ page.portal }}: [link]({{page.purl}}accounts/new)

Logged in users can navigate to the [Browse page]({{page.purl}}ontologies) and click the [Submit a {{page.atom}}]({{page.purl}}ontologies/new) button. The submission form requires to fill out some [metadata]({{ site.baseurl }}{% link docs/user-guide/documentation/ecoportal/metadata_schema.md %} ) about the submitted {{page.atom}} as shown in Figure 43:

- *Name*: name of the {{ page.atom }}.
- *Acronym*: {{ page.atom }} acronym (**NOTE**: It is not possible to change the {{ page.atom }} acronym afterwards).
- *Administrators*: the owners of the resource. Only registered users can be added as administrators of the {{ page.atom }}. 
- *Viewing restriction*: choose if the submitted resource is public (all users, even unregistered users, can see it) or private. 
- *Categories*: select the categories to which the resource belongs to improve the search tools.
- *Groups*: select the groups to which the resources belong. Groups associate ontologies from the same project or organisation, for better identification of the provenance
- *View*: check "this {{page.atom}} is a view of" to create a new {{page.atom}} as a [view]({{ site.baseurl }}{% link docs/user-guide/documentation/ecoportal/platform_overview/ontology_details.md %}) of a {{page.atom}} selected from the drop-down field.
- *URI*: The URI of the {{page.atom}} which is described by this metadata.
- *Description*: description of the {{page.atom}}.
- *Representation* language: the model used to create the {{page.atom}} (e.g. SKOS, OWL, OBO).
- *Status*: {{page.atom}} release status: **alpha**, the {{page.atom}} is actively in development after the previous release and being tested internally; **beta**, the {{page.atom}} is feature-complete and being tested internally; **production**, the {{page.atom}} has passed all stages of verification and test; retired, the {{page.atom}} is no longer supported or is obsolete, and it will not be implemented any more.
- *Location*: the place from which the {{page.atom}} is retrieved: **Metadata Only**, choose this option if you want users to search and view only the {{page.atom}} metadata; **Load from URL**, new versions loaded daily; **Upload Local File**, choose a file from the local file system to upload the {{page.atom}}.
- *Date* of the original creation: date of the {{page.atom}} first release.
- *Contact*: details of a contact person (name and email).


Check the “Subscribe to email notifications for new notes” box to receive updates from users of the {{ page.portal }} community.

![Wizard for the submission of a new {{ page.atom }}]({{site.figures_link}}/{{page.portal}}/Figure43.png)
{: .text-center }

_Figure 43:  Wizard for the submission of a new {{page.atom}}_
{: .text-center }

Once the mandatory fields are completed, click on the "Finish" button in order to generate the summary page of the {{page.atom}}. Then click on the pencil button on the top right side of the summary page (Figure 45) to edit metadata and add more information about the {{page.atom}} (Figure 44).

To request the DOI, you can check the box “*Check this box if your asset has no PID and you want to request a DOI*”, which can be found in the “Other identifier” metadata field.
LifeWatch ERIC is a member of [DataCite](https://datacite.org/) and it can provide a [Digital Object Identifier (DOI)](https://www.doi.org/) to {{page.atoms}} that do not have one. DOIs allow {{page.atoms}} to be cited in scientific publications or elsewhere in a reliable and sustainable way. {{ page.portal }} assigns a DOI only upon verification and validation of the {{page.atom}}. The DOI is connected to the metadata of the resource as well as to its digital location (e.g. the URL) where all the details about the resource are available.
For more detailed information about metadata properties, refer to the General Information of the Metadata schema table.

![Wizard for adding/editing metadata of the submission for {{page.atoms}}]({{site.figures_link}}/{{page.portal}}/Figure44.png)
{: .text-center }

_Figure 44:  Wizard for adding/editing metadata of the submission for {{page.atoms}}._
{: .text-center }

