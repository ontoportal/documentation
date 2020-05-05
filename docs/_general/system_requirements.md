---
title: System Requirements
layout: default
description: Resources you need to run the Virtual Appliance
weight: 10
status: Ready
---

# System Requirements
The following requirements are just for the resources that you devote to your Appliance instance, 
not for the entire machine running your Appliance's host environment. 
For example, if you are using a system with 8GB of RAM, 
then you will need to devote a minimum of 4GB of that RAM to your Appliance.
This leaves 4GB of RAM for any other system operations.

These requirements are for basic usage. 
System requirements will vary greatly 
depending on the size of the ontologies you work with, 
the number of ontologies in the system, 
and the number of concurrent requests that the system needs to satisfy. 
It can also vary depending on how the ontologies are used. 
For example, the search index can be RAM-intensive but parsing ontologies can be CPU-intensive. 
You will need to experiment with your Appliance resource settings to find what works for your scenario.

## Minimum system requirements
* 2 CPU (2 GHz)
* 4GB RAM
* Hard disk space: 20GB

## Recommended system for heavier usage
* 4 CPU (3 GHz)
* 8GB RAM (or more depending on the size/number of ontologies)
* Hard disk space: 20GB (or more depending on number/size of ontologies)

## Image format and operating system details

The OntoPortal Virtual Appliance image was created 
using the Open Virtualization Format (OVF),
which should allow the machine to be used in a variety of environments.
Another image is available as an Amazon Web Services Amazon Machine Instance,
allowing for rapid deployment. 

The operating system is CentOS 7.7 64-bit running:
* Apache, Tomcat, memcached, redis (EPEL install)
* MariaDB (EPEL install)
* Solr 8.2
* Java 11
* Rails 
* Ruby 2.5.7
* nginx 1.17

Installed applications developed by Stanford:
* bioportal_web_ui 5.9.3
* ontologies_api and ncbo_cron 5.16.0
* 4store (custom build, )
* AllegroGraph 6.4.1 (not activated)

The following applications use these services/runtime environments:
* Ontologies API
* Annotator, AnnotatorPlus
* Recommender
* BioPortal Web User Interface (offering ontology visualization, Flex widgets, and access to the Annotator, AnnotatorPlus, and Recommender services)
* Search index
* RDF Store (4store)

These are some of the underlying services:
* Sinatra, Ruby, 4store, redis
* Rails, memcached, mysql
* Tomcat, Solr
