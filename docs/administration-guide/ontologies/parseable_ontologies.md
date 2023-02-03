---
title: Parseable Ontologies
layout: default
summary: The types of ontologies that OntoPortal can handle
status: Ready
nav_order: 5
parent: Managing Ontologies in OntoPortal
grand_parent: Administration Guide
permalink: /administration/ontologies/parseable_ontologies
---

# Parseable Ontologies

Like the original BioPortal repository, 
the OntoPortal accepts OWL, OBO, and SKOS ontologies via our UI or our REST endpoint. 

We also import a set of UMLS ontologies from the National Library of Medicine,
but this is a complex process that converts the UMLS content into RDF.
You can learn more in our <a href="handling_umls">Submitting UMLS Content</a>
section.

The most commonly used format for OWL submissions is RDF/XML.  
Internally we use the OWL API for loading and parsing ontologies,
and this tools supports many ontology serializations.

## About the OWL API

The OWL API supports a variety of serializations—the complete list is available on their <a href="https://github.com/owlcs/owlapi/wiki">introductory documentation page</a>.

Because Protègè also uses the OWL API, an excellent way to determine 
whether an ontology can be parsed by the {{site.opva}} 
is to open it in Protègè. 
The Protègè application should be able to open the ontology without errors
if your ontology is valid.

If an ontology can not be parsed in Protègè without errors, 
the {{site.opva}} will not successfully parse it.

## Why successful parsing may not be enough

There are several conditions in which a successfully parsed ontology 
may not display properly in BIoPortal. 

The <a href="{{site.baseurl}}/administration/ontologies/ontology_limitations">Ontology Limitations</a> section
describes some limitations in what OntoPortal can effectively process.

The <a href="{{site.baseurl}}/administration/ontologies/troubleshooting_submissions">Troubleshooting Submissions</a>
section describes how to proceed when an ontology is not displaying correctly.
