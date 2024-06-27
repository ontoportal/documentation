### Vocbench
VocBench is a web-based, multilingual, collaborative development platform, designed to meet the needs of semantic web and linked data environments. It allows you to manage OWL ontologies, SKOS(/XL) thesauri, Ontolex-lemon lexicons and generic RDF datasets. VocBench business and data access layers are realised by Semantic Turkey, an open-source platform for Knowledge Acquisition and Management realised by the ART Research Group at the University of Rome Tor Vergata. {{ page.portal }} uses VocBench as an editor tool for managing semantic artefacts with a customised version (v. 11.3.0).

**User Interface**
The user inference detailing the resource being edited on VocBench contains three sections:
1. the Global Data Management
2. the menu
3. the working space that changes based on the menu section selected

![VocBench UI]({{site.figures_link}}/{{page.portal}}/vocbench.png)

In the Global Data Management users, depending on the role that they have on the platform (for more information please read this), have access to different functionalities:


![Global Data Management menu]({{site.figures_link}}/{{page.portal}}/vocbench_management.png)

- *Load data* to upload data that has to be maintained within the project.
- *Export data* to download or deploy the resource to {{ page.portal }}.
- *Clear data* to clear completely the project repository.
- *Versioning* to create time-stamped data dumps of the dataset, that can later be inspected through the same project.
- *Change working graph* to manage variants of graphs.
- *Refactoring* to perform massive refactoring of the loaded data.

In the menu section, users can access to:
- [Data](https://vocbench.uniroma2.it/doc/user/data_view.jsf) which is the main portion in which all the editing of the resource occurs;
- [Metadata](https://vocbench.uniroma2.it/doc/user/metadata.jsf) with a drop down menu which has three entries;
  - [Namespaces and Import page](https://vocbench.uniroma2.it/doc/user/namespaces_imports.jsf=), allows users to set prefix-namespace mappings, to owl:import ontology vocabularies and to edit the ontology mirror, a local mirror of ontologies stored within VocBench
  - [Metadata Vocabularies](https://vocbench.uniroma2.it/doc/user/metadata_vocabularies.jsf) page allows for the specification of metadata according to different existing metadata vocabularies, such as VoID, LIME, DCAT, ADMS, etc.;
  - [Metadata Registry](https://vocbench.uniroma2.it/doc/user/mdr.jsf) page, allows authorised users to define a system-wide catalogue of known remote datasets, which are described by means of a combination of (metadata) vocabularies;
- [SPARQL](https://vocbench.uniroma2.it/doc/user/sparql.jsf) enable users to access to the SPARQL query editor of the resource;
- [Tools](https://vocbench.uniroma2.it/doc/user/tools.jsf) with a drop down menu with some tools expanding VocBench core capabilities.

The official VocBench documentation can be found at the following [link](http://vocbench.uniroma2.it/doc/). For a detailed description of the VocBench version developed within {{ page.portal }}, please refer to the following page.

Note: At the moment, users must register separately to access VocBench and other {{ page.portal }} services.
