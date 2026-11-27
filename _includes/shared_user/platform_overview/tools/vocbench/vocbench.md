VocBench is a web-based, multilingual, collaborative development platform, designed to meet the needs of semantic web and linked data environments. It allows to manage [OWL](https://www.w3.org/TR/owl2-overview/) ontologies, [SKOS(/XL)](https://www.w3.org/TR/skos-reference/) thesauri, [Ontolex-lemon](https://www.w3.org/2016/05/ontolex/) lexicons and generic RDF datasets. VocBench business and data access layers are realised by [Semantic Turkey](http://semanticturkey.uniroma2.it/), an open-source platform for Knowledge Acquisition and Management realised by the [ART Research Group](http://art.uniroma2.it/) at the [University of Rome Tor Vergata](http://www.uniroma2.it/). EcoPortal uses VocBench as an editor tool for managing semantic artefacts with a customised version (v. 13).


#### User Interface

The user inference detailing the resource being edited on VocBench contains three sections (Figure 10):

__a__.  the Global Data Management

__b__.  the menu

__c.__  the working space that changes based on the tabs selected

![VocBench UI]({{site.figures_link}}/{{page.portal}}/Figure10.png)
{: .text-center }

_Figure 10: VocBench UI_
{: .text-center }

In the [Global Data Management](https://vocbench.uniroma2.it/doc/user/global_data_management.jsf) (Figure 10.a) users, depending on their role (for more information please read [this](https://vocbench.uniroma2.it/doc/user/roles_adm.jsf)), can access to different functionalities (Figure 11):


![Global Data Management menu]({{site.figures_link}}/{{page.portal}}/Figure11.png)
{: .text-center }

_Figure 11: Global Data Management menu_
{: .text-center }

- *Load data* to upload data that has to be maintained within the project.
- *Export data* to download or deploy the resource in {{ page.portal }}.
- *Clear data* to clear completely the project repository.
- *Versioning* to create time-stamped data dumps of the dataset, that can later be inspected through the same project.
- *Change working graph* to manage variants of graphs.
- *Refactoring* to perform massive refactoring of the loaded data.

In the menu section (Figure 10.b), users can access:
- [Data](https://vocbench.uniroma2.it/doc/user/data_view.jsf) which is the main portion in which all the editing of the resource occurs;
- [Metadata](https://vocbench.uniroma2.it/doc/user/metadata.jsf) with a drop down menu which has three entries;
  - [Namespaces and Import page](https://vocbench.uniroma2.it/doc/user/namespaces_imports.jsf=), allows users to set prefix-namespace mappings, to owl:import ontology vocabularies and to edit the ontology mirror, a local mirror of ontologies stored within VocBench
  - [Metadata Vocabularies](https://vocbench.uniroma2.it/doc/user/metadata_vocabularies.jsf) page allows for the specification of metadata according to different existing metadata vocabularies, such as VoID, LIME, DCAT, ADMS, etc.;
  - [Metadata Registry](https://vocbench.uniroma2.it/doc/user/mdr.jsf) page, allows authorised users to define a system-wide catalogue of known remote datasets, which are described by means of a combination of (metadata) vocabularies;
- [SPARQL](https://vocbench.uniroma2.it/doc/user/sparql.jsf) enable users to access to the SPARQL query editor of the resource;
- [Tools](https://vocbench.uniroma2.it/doc/user/tools.jsf) with a drop down menu showing some tools that expand the VocBench core capabilities.

The official VocBench documentation can be found at the following [link](http://vocbench.uniroma2.it/doc/). For a detailed description of the VocBench version developed within EcoPortal, please refer to the following [section]({{ site.baseurl }}{% link docs/user-guide/documentation/ecoportal/ontology_lifecycle/submit.md %}).

Note: At the moment, users must register separately to access VocBench and other {{ page.portal }} services.
