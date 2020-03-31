---
title: Submitting Ontologies
layout: default
description: How to submit ontology files to your repository
weight: 10
status: Preliminary
---

# Submitting Ontologies

You can add an ontology using the OntoPortal Admin User at `http://{ip_address_of_appliance}/ontologies/new`.
The ncbo_cron project is configured to automatically process new ontologies every 5 minutes (see documentation for enabling the scheduler). 

The ontology processing includes:
* Parsing any new, unparsed ontologies
* Calculating a set of metrics for these ontologies
* Indexing these ontologies for use with search
* Processing the ontology for use with the annotator

REST services are available at the following location:
* `http://{ip_address_of_appliance}:8080`
* `http://{ip_address_of_appliance}:8080/documentation`

## As an OntoPortal user with the UI


## As an OntoPortal user with the API



## Manually using the Ruby console








