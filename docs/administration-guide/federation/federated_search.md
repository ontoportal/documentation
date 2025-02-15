---
title: Federated Search
layout: default
summary: Search concepts and classes locally and also across other federated portals
status: Preliminary
nav_order: 3
parent: OntoPortal Federation
grand_parent: Administration Guide
permalink: /administration/federation/federated_search
---

# Federated Search
The federated search feature in AgroPortal 3.0 (see #739) introduces a new dimension to ontology exploration by enabling users to search concepts and classes not only within the local portal but also across other federated OntoPortal instances. This functionality allows users to discover semantic resources hosted on remote portals while maintaining a consistent user experience. Search results from federated portals are visually distinguished using their respective color codes, and clicking on these results redirects users to the source portal for more detailed exploration. The search remains local by default, with federation being an optional feature activated through a simple selector in the Search options.

![Federated search]({{site.figures_link}}/OntoPortal/federation/search-federation.png)

The number of results by portal is displayed and managing duplicates is done in a similar approach than on the Browse page. Considering search results scores are not normalized between portals, to rank and mix results effectively, a cosine similarity is employed between the search query and the retrieved classes/concepts labels to balance relevance across portals.
