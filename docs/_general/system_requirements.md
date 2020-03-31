---
title: System Requirements
layout: default
description: Resources you need to run the Virtual Appliance
weight: 10
status: Preliminary
---

## System Requirements
The following requirements are just for the resources that you devote to your Appliance instance, 
not for the entire machine running your Appliance's host environment. 
For example, if you are using a system with 8GB of RAM, 
then you will need to devote a minimum of 4GB of that RAM to your Appliance instance.
This leaves 4GB of RAM for any other system operations.

Note: These requirements are for basic usage. 
System requirements will vary greatly depending on the size of the ontologies you work with, 
the number of ontologies in the system, 
and the number of concurrent requests that the system needs to respond to. 
It can also vary depending on how the ontologies are used. 
For example, the search index can be RAM-intensive but parsing ontologies can be CPU-intensive. 
You will need to experiment with your Appliance resource settings to find what works for your scenario.

### Minimum
* 2 CPU (2 GHz)
* 4GB RAM
* Hard disk space: 20GB

### Recommended for heavier usage
* 4 CPU (3 GHz)
* 8GB RAM (or more depending on the size/number of ontologies)
* Hard disk space: 20GB (or more depending on number/size of ontologies)

### Image Format and Operating System Details

The OntoPortal Virtual Appliance image was created using the Open Virtualization Format, 
which should allow the machine to be used in a variety of environments.

The operating system is CentOS 6.9 64-bit running:
* Tomcat 6.0.26
* Solr 6.6
* Java 8
* MySQL 5.1.x
* Rails 4.2.x
* Ruby 2.3.6
* memcached
* redis 2.3.11
* nginx 1.12.1
* 4store
* Passenger/Apache

The following applications use these services/runtime environments:
* Sinatra, Ruby, 4store, redis
* Ontologies API
* Annotator
* Recommender
* Rails, Ruby, memcached, mysql
* BioPortal Web User Interface (including ontology visualization, Flex widgets, biomixer, Annotator)
* Tomcat, Solr
* Search index

Please see the rest of this manual for how-to documentation 
for managing the software and running data population for Annotator and Recommender.

You may also want to visit the Virtual Appliance FAQ for additional information on the Virtual Appliance, 
as well as the other pages in this category (bottom of the page).
