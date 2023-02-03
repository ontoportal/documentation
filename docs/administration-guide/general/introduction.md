---
title: Introduction
layout: default
summary: Description of the OntoPortal Virtual Appliance
status: Preliminary
nav_order: 1
parent: General Information
grand_parent: Administration Guide
permalink: /administration/general/introduction
---

# Introduction

The OntoPortal Virtual Appliance is a copy of 
the BioPortal ontology repository software 
that you can run on your own Linux system. 
You can install it following the instructions in this manual, 
and upload your own ontologies (and/or copies of ours, if they are public).

With this software, you can manage properly formatted semantic content 
in a web service, and can perform various analytic tasks with that content.
You can visit the <a href="https://www.bioontologies.org">BioPortal web site</a>
to learn more about the capabilities of the BioPortal system.

## How is the Appliance packaged?

The OntoPortal Virtual Appliance image contains 
a pre-installed, pre-configured version 
of the OntoPortal open source software running on a Linux operating system.

It is available as a VMWare Virtual Appliance OVA, as well as an Amazon Web Service AMI, 
and can be obtained by following the <a href="{{site.baseurl}}/administration/steps/getting_started">Getting Started</a> section in this manual.

## What's included?

The following software is included on the image as of version 3.0:

* Ontologies API (REST service)
* Annotator and AnnotatorPlus
* Ontology Recommender
* OntoPortal Web User Interface, including
  * ontology browser
  * Annotator, AnnotatorPlus, and Recommender
  * ontology tree visualization
  * graph visualization with BioMixer 
  * widgets deployable in other web sites
  * Administrator interface
* API services
* RDF stores
  * 4store
  * AllegroGraph 
* Application Stack:
  * CentOS 7
  * Apache HTTPD server
  * Nginx
  * Tomcat
  * Redis
  * MariaDB
  * Solr
  * mgrep
  * memcache

## What else?

This software is provided by the <a href="https://bmir.stanford.edu">Stanford Center for Biomedical Informatics Research</a> (BMIR) and the <a href="https://ontoportal.org">OntoPortal Alliance</a>. 

To use this software, you must have a license. 
Licenses are provided free to individual users for their own research,
and to non-profit and educational institutions. 
See our <a href="{{site.baseurl}}/administration/general/licensing">licensing page</a> for more information. 

The rest of this manual describes how you can obtain, install, configure, 
and maintain the OntoPortal Virtual Appliance for your own purposes.


