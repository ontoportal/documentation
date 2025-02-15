---
title: Federated Browse
layout: default
summary: Seamlessly discover ontologies locally and from other federated portals
status: Preliminary
nav_order: 2
parent: OntoPortal Federation
grand_parent: Administration Guide
permalink: /administration/federation/federated_browse
---

# Federated Browse
The introduction of federated browsing in AgroPortal 3.0 marks a significant enhancement in the way users explore ontologies (see #621). This feature allows users to seamlessly discover ontologies not only from AgroPortal but also from other federated portals, today: EcoPortal, EarthPortal and BiodivPortal. The total number of ontologies gathered by all the 4-federated OntoPortal is currently 376! Federated results are integrated alongside local ontologies, preserving the familiar interface while expanding the scope of discovery. All filters remain functional within the constraints of the metadata available from each portal, ensuring relevance and usability. Thanks to the federation of the Categories, numbers can be calculated with unified categories coming from each federated portals (only parent categories).
Portal-specific parameters, like Groups or Private settings, are excluded to maintain consistency across federated results.
Users can activate federation through a straightforward selector, and the visual design incorporates the portal's color code and small logos to clearly distinguish federated ontologies. The number of ontologies retrieved from each portal are automatically updated with filters or parameters selected.

![Federated Browse]({{site.figures_link}}/OntoPortal/federation/browse-federation.png)


When clicking on an ontology result, the user will either stay on AgroPortal if the ontology found is hosted locally or move to another portal in the federation if not. Duplicates are identified by matching acronyms and URIs, and only one unified ontology card is displayed, aggregating analytics like notes and projects and listing logos for the set of portals where the ontology can be found.
* If the duplicate ontology is found locally, the card will always feature AgroPortal information and allow users to continue locally to explore the ontology.
* If the duplicate ontology is not in AgroPortal, the card will reflect the primary portal's color. The primary (or canonical) portal for an ontology is found to be the one with the highest number of pull location references from other portals in the federation (#770).

For performance scalability, the Browse page incrementally loads results from federated APIs; only local ontologies load by default followed by federated results if selected providing a seamless user experience while making aware to the users that additional content is being loaded.
