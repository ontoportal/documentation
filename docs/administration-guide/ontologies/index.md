---
title: Managing Ontologies in OntoPortal
layout: default
summary: Working with ontologies in the OntoPortal Appliance
parent: Administration Guide
nav_order: 3
has_children: true
permalink: /administration/ontologies/
---

# Managing Ontologies in OntoPortal
  
The {{site.opva}} comes with a few example ontologies already installed.
You are expected to populate the site with the ontologies that interest you.

We provide <a href="submitting_ontologies">general ontology submission instructions</a> using different techniques. 
There are separate sections for specialized cases like <a href="handling_umls">handling UMLS ontologies</a> and 
<a href="copying_external_ontologies">copying ontologies from other repositories</a>.

We describe how to <a href="managing_ontologies">manage ontologies</a> for the user(s) of your repository,
including understanding the <a href="ontology_logs">ontology log files</a> created by the system.

OntoPortal uses OWLAPI and can ingest <a href="parseable_ontologies">most ontologies that OWLAPI can parse</a>.
However, there are some additional constraints, and we address those in our sections 
on <a href="ontology_limitations">limitations</a> and <a href="troubleshooting_submissions">troubleshooting submissions</a>.