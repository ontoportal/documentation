---
title: Federated User Interfaces and Portal Description
layout: default
summary: Similar user interfaces and look and feel with a specific color theme
status: Preliminary
nav_order: 1
parent: OntoPortal Federation
grand_parent: Administration Guide
permalink: /administration/federation/federated_UI
---

# Federated User Interfaces and Portal Description
With this joint release, the federated portals have adopted similar user interfaces and look and feel with a specific color theme so that users going from one ontology repository to the other are not lost and found similar interfaces and functionalities. EcoPortal, EarthPortal and BiodivPortal have then embraced the changes done in AgroPortal releases 2.7 series related to new UI/UX.

![Federated UIs]({{site.figures_link}}/OntoPortal/federation/ui-federations.png)

Since release v2.7.4, AgroPortal’s homepage includes a component to link to other public portals in the OntoPortal Alliance. Now, when mousing over the logos, the portal with which AgroPortal is federated will display some information about them such as a description and the number of ontologies available (see #744)

![Federated Homepage]({{site.figures_link}}/OntoPortal/federation/homepage-federation.png)

This functionality is implemented by means of a new web service endpoint implemented by each federated portal to describe itself. Going now to https://data.agroportal.lirmm.fr/ will return a JSON-LD description of AgroPortal that other portals can consume.

![API description for federated portals]({{site.figures_link}}/OntoPortal/federation/api-configuration-federation.png)

Eventually, the description of AgroPortal (and any OntoPortal) will be based on the `mod:SemanticArtefactCatalogue` object specified by the MOD v3.2 metadata vocabulary.