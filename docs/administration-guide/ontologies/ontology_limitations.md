---
title: Ontology Limitations
layout: default
summary: Kinds of ontologies that OntoPortal can't handle
status: Ready
nav_order: 6
parent: Managing Ontologies in OntoPortal
grand_parent: Administration Guide
permalink: /administration/ontologies/ontology_limitations
---

# Ontology Limitations

## Size (number of gigabytes)

While we have not performed testing with the {{site.opva}}, 
we expect there is an upper limit to the size of ontology that can be ingested.

(On BioPortal, we have trouble ingesting an ontology above 1.5 GB.)

We have found that converting the ontology to TTL format 
can reduce its size, and makes some ontologies manageable 
that otherwise can not be processed.

We provide further information on troubleshooting submissions of large ontologies

in the [Troubleshooting Submissions]({{site.baseurl}}/administration/ontologies/troubleshooting_submissions/#troubleshooting-very-large-ontologies) page.


## Root classes and ontology shape

An ontology that does not have easily discovered root classes—for example,
because it is not hierarchical, doesn't use typical hierarchical relations,
or has loops in its parent hierarchy—will not be displayable in the 
Ontology Classes tree.

Likewise, an ontology that has a large number of classes
and very few layers to its hierarchy is considered 'flat',
and will not be displayed in the Ontology Classes tree.

## SKOS format

Ontologies in SKOS format must be formatted in a particular way
to be displayed properly in BioPortal. 
Please see the 
<a href="https://www.bioontology.org/wiki/SKOSSupport">BioPortal SKOS Support page</a> for more details.

