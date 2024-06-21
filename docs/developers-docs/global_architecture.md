---
title: Ontoportal Architecture
summary: A global overview of how Ontoportal works
layout: default
status: Draft
parent: Developer Guide
nav_order: 2
---

# Ontoportal Architecture
{: .no_toc }

![Ontoportal architecture]({{site.baseimgs}}/developers/ontoportal-architecture.png "Ontoportal architecture")

Ontoportal is a multilayer application composed with the following components
1. TOC
{:toc}

## Frontend Architecture

![Frontend architecture]({{site.baseimgs}}/developers/frontend-architecture.png "Frontend architecture")

### User Interface

A Ruby on Rails application that implement all our UI views and behaviors 

Find its code here: [https://github.com/ontoportal/ontoportal_web_ui]( https://github.com/ontoportal/ontoportal_web_ui)


### Backend API Client
It's a Ruby API client for the UI, that converts ruby code in the UI project to an HTTP call for the backend API

Find its code here: [https://github.com/ontoportal/ontologies_api_ruby_client]( https://github.com/ontoportal/ontologies_api_ruby_client)

Find its documentation here: [https://github.com/ontoportal/ontologies_api_ruby_client]( https://github.com/ontoportal/ontologies_api_ruby_client)

## Backend Architecture
![Backend architecture]({{site.baseimgs}}/developers/backend-architecture.png "Backend architecture")

### API controller

Provides a RESTful interface/server for accessing Ontoportal, it is in this component that we found all the routes/endpoints 
that can be called, e.g `/ontologies` to display all the ontology or `/search` to search for a term in the portal.

Find its code here: [https://github.com/ontoportal/ontologies_api]( https://github.com/ontoportal/ontologies_api_ruby_client)

Find its documentation here:  go you_appliance_ip:8080/documentation (e.g [https://data.bioontology.org/documentation]( https://github.com/ontoportal/ontologies_api_ruby_client))

### Backend models
Represent our Model layer and define all our Models (e.g Ontology, Class, User,..) and with their corespondent Services and Concerns, 
like Ontology processing or User Authentification.

Find its code here: [https://github.com/ontoportal/ontologies_linked_data]( https://github.com/ontoportal/ontologies_api_ruby_client)


### Goo (Graph Oriented Objects)
Goo is a Ruby library that provides ORM-alike capabilities to interact with RDF/SPARQL backends. 
Goo provides a DSL for defining schemas for objects and controls how they get validated, serialized, saved and retrieved from the triplestore. 

Find its code here: [https://github.com/ontoportal/goo]( https://github.com/ontoportal/ontologies_api_ruby_client)

Find its documentation here: [https://ncbo.github.io/goo/]( https://github.com/ontoportal/ontologies_api_ruby_client)


