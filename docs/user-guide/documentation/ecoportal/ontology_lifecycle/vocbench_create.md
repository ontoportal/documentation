---
nav_exclude: true
title: Create and edit semantic artefacts
summary: How to create and edit semantic artefacts
layout: default
parent: Semantic artefacts lifecycle @EcoPortal
grand_parent: User Guide
permalink: /user-guide/lifecycle/vocbench_create/EcoPortal
nav_order: 1
---
## Create and edit semantic artefacts

[VocBench](https://vocbench.lifewatchitaly.eu/vocbench3/) is a service that enables the creation, editing and publishing of semantic artefacts. 
To create a new project or edit an existing project in **VocBench** there are two options:
1. **Not registered users** must register to VocBench at the following [link](https://vocbench.lifewatchitaly.eu/vocbench3/)(Figure 29).
   Within the registration form, it is possible to request editing permission of a semantic artefact published in EcoPortal by adding the full resource name and acronym (e.g., [Fish Traits Thesaurus (FISHTRAITS)](http://ecoportal.lifewatch.eu/ontologies/FISHTRAITS)) into the box “Existing semantic artefact?”. By default, the last version on EcoPortal is loaded, otherwise users have to specify the version from which to start editing in VocBench. **NOTE**: Only the semantic artefact owner can request editing permission of that resource. 

   To create a new semantic artefact users must specify:
    - *New semantic artefact*: the name of the project, e.g., Fish Traits Thesaurus. It is recommended to add the full name of the resource that will appear in EcoPortal;
    - *BaseURI*: the URL necessary for the creation of a project. **NOTE**: if users do not have a BaseURI, the system will provide the following: 
        - https://kos.lifewatch.eu/ontologies/yourACRONYM for ontologies;
        - https://kos.lifewatch.eu/thesauri/yourACRONYM for thesauri, glossaries or other loose sets of concepts.
    - *Model*: the model of the new project which can be [OWL](https://www.w3.org/TR/owl-features/) or [SKOS](https://www.w3.org/TR/skos-reference/). **NOTE**: To understand more about the SKOS model in EcoPortal it is recommended to read the following [section]({{ site.baseurl }}{% link docs/user-guide/documentation/ecoportal/ontology_lifecycle/skos_support.md %}). 

   ![Registration in VocBench and creation of a new semantic artefact]({{site.figures_link}}/{{page.portal}}/Figure29.png)
   {: .text-center }
   
   _Figure 29: Registration in VocBench and creation of a new semantic artefact_
   {: .text-center }

2. **Registered users** can contact the Administrators at this email address semantics@lifewatch.eu, specifying: 
   1. name of the new semantic artefact
   2. Base URI (check the previous paragraph for more specific information)
   3. Model (e.g. OWL, SKOS, RDFS, OntoLex, EDOAL)
   4. Lexicalization (e.g. RDFS, SKOS, SKOS-XL, OntoLex)
   5. specify which among history, validation, blacklisting, undo, trivial inference to have
   6. repository access (e.g. create a local project or a remote one), 
   7. configuration (e.g. native store, in memory, GraphDB)
The request is then managed by the administrator that will create the new project and assign the role of [Project Manager](http://vocbench.uniroma2.it/doc/user/roles_adm.jsf) to the creator. 

In the list of projects, there should be a new item for the project as shown in Figure 30, with information related to name, model and lexicalization of the resource. It is indicated whether history and validation have been activated  in the project. Lastly, the repository location is specified (e.g. local or remote).

![List of projects in VocBench]({{site.figures_link}}/{{page.portal}}/Figure30.png)
{: .text-center }

_Figure 30:  List of projects in VocBench_
{: .text-center }
All subsequent steps require moving to the “Data” tab to edit the semantic artefact. In the “Scheme” tab (Figure 31), click on the create button to create a new skos:ConceptScheme ( []* ).

![Scheme tab of the project in VocBench]({{site.figures_link}}/{{page.portal}}/Figure31.png)
{: .text-center }

_Figure 31: Scheme tab of the project in VocBench_
{: .text-center }

In the scheme creation dialog (Figure 32), specify the label of the concept scheme e.g., “continents” in English and then click on the **Ok** button.

![Creation of a concept scheme in VocBench]({{site.figures_link}}/{{page.portal}}/Figure32.png)
{: .text-center }

_Figure 32: Creation of a concept scheme in VocBench_
{: .text-center }

Then, select the newly created scheme as in Figure 32.

![Selection of a newly created scheme in VocBench]({{site.figures_link}}/{{page.portal}}/Figure33.png)
{: .text-center }

_Figure 33: Selection of a newly created scheme in VocBench_
{: .text-center }

In the Concept tab (Figure 34), click on the create button to create a new skos:Concept ( ()* ).

![Concept tab of the project in VocBench]({{site.figures_link}}/{{page.portal}}/Figure34.png)
{: .text-center }

_Figure 34: Concept tab of the project in VocBench_
{: .text-center }

In the concept creation dialog (Figure 35), specify the label of the concept e.g., “Africa” in English and then click on the **Ok** button. This label represents the skos:prefLabel of the concept.

![Creation of a new concept in VocBench]({{site.figures_link}}/{{page.portal}}/Figure35.png)
{: .text-center }

_Figure 35: Creation of a new concept in VocBench_
{: .text-center }

Do the same to create other concepts:
- America
- Asia
- Europe
- Oceania
- Antarctica
  
The concept tree generated should contain a flat list of the five continents (Figure 36). It should be noted that the list of concepts generated is visualised in alphabetical order.

![The concept tree in VocBench]({{site.figures_link}}/{{page.portal}}/Figure36.png)
{: .text-center }

_Figure 36: The concept tree in VocBench_
{: .text-center }

To add hierarchical depth to the structure, in the concept tab (Figure 37) select one continent and click on “Create narrow concept” button ( ()* ).

![Create narrow concept]({{site.figures_link}}/{{page.portal}}/Figure37.png)
{: .text-center }

_Figure 37: Create narrow concept_
{: .text-center }

In the creation dialog (Figure 38), specify the label for the narrow concept e.g., “Italy” in English and then click on the **Ok** button.

![Wizard for the creation of narrower concept]({{site.figures_link}}/{{page.portal}}/Figure38.png)
{: .text-center }

_Figure 38: Wizard for the creation of narrower concept_
{: .text-center }

To understand in detail the different aspects of the user experience on VocBench, we recommend reading the following [User Manual](https://vocbench.uniroma2.it/doc/user/).

### Import an excel into VocBench
VocBench uses the platform **Sheet2RDF** to generate RDF triples from datasheets. Sheet2RDF can be accessed by clicking on the Tool tab of the VocBench menu and selecting the Sheet2RDF entry.  
To use the Sheet2RDF tool correctly, it is essential to compile with the correct formatting whereby each datasheet column represents a SKOS/OWL property. An illustrative example of a valid file format is provided [here](https://docs.google.com/spreadsheets/d/1PHw0AaiEdk9EoKBBBCNeLCczuHxbHf5B/edit?usp=sharing&ouid=112643334527918409138&rtpof=true&sd=true). For a comprehensive understanding of the user interface and the diverse functionalities of the tool, please consult this [resource](https://art.uniroma2.it/sheet2rdf/documentation/vb_tool/). The following example provides details about the SKOS concepts creation when using  Sheet2RDF.

**Example**:
After uploading the Excel file using the "Browse" button, select "Subject mapping" in red (see Figure 39). Users are then required to:
1. Select the header that is going to be your Subject;
2. Select on the “Assert type” check box;
3. Click on the yellow circle and select “Concept”;
4. In the “Converter” tab below, select “DefaultConverter”;
5. In “Additional predicate-object” tab, click on the “plus” button on the side;
6. Add the Predicate by selecting the SKOS property “inScheme”;
7. Then select the Object by clicking on “Concept Scheme” and then on the desired scheme;
8. Then click “OK”.

**Note**: the Concept Scheme has to be created before uploading the SKOS concepts.

![Subject header editor]({{site.figures_link}}/{{page.portal}}/Figure39.png)
{: .text-center }

_Figure 39: Subject header editor_
{: .text-center }

Upon executing these tasks, all headers should be highlighted in **green** (Figure 40).

![Sheet2RDF tool]({{site.figures_link}}/{{page.portal}}/Figure40.png)
{: .text-center }

_Figure 40: Sheet2RDF tool_
{: .text-center }

If a header appears in **yellow** or **black**, by clicking on the pencil icon next to the header users have the possibility to either manually map the SKOS/OWL property or ignore the header. Following this, the blue "play" button and the subsequent green one should be clicked to generate the PURL code and triples. After the triples are generated, navigating to the "Generated triples preview" tab allows users to click on the "Add triples" button, presenting all the information in the "Data" section.
