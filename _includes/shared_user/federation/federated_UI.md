# Federated User Interfaces and Portal Description
With this joint release, the federated portals have adopted similar user interfaces and look and feel with a specific color theme so that users going from one ontology repository to the other are not lost and found similar interfaces and functionalities. EcoPortal, EarthPortal and BiodivPortal have then embraced the changes done in AgroPortal releases 2.7 series related to new UI/UX.

![Federated UIs]({{site.figures_link}}/OntoPortal/federation/ui-federations.png)

Since release v2.7.4, AgroPortal’s homepage includes a component to link to other public portals in the OntoPortal Alliance. Now, in each portal, when mousing over the logos, the portals with which it is federated will display some information about them such as a description and the number of ontologies available.

![Federated Homepage]({{site.figures_link}}/OntoPortal/federation/homepage-federation.png)

This functionality is implemented by means of a new web service endpoint implemented by each federated portal to describe itself that other federated portal know how to interpret. For instance, on AgroPortal the base API web service URL (https://data.agroportal.lirmm.fr)  will return a JSON-LD description of AgroPortal that other portals can consume.

![API description for federated portals]({{site.figures_link}}/OntoPortal/federation/api-configuration-federation.png)

As this service was not existing before, we have here implemented part of the MOD-API specififcation offering the description of the federated OntoPortals as a mod:SemanticArtefactCatalogue object as specified by the MOD v3.2 metadata vocabulary.