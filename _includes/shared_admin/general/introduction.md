# Introduction

The {{site.opva}} is build as a copy of the BioPortal ontology repository software 
that you can run on your own system. 
You can install it following the instructions in this documentation, 
and upload your own ontologies or other kind of semantic resources.

You can visit the <a href="https://ontoportal.org/">OntoPortal web site</a>
to learn more about the capabilities of the OntoPortal system and see examples of portals running the software.

## How is the Appliance packaged?

The OntoPortal Virtual Appliance image contains 
a pre-installed, pre-configured version 
of the OntoPortal open source software running on a Linux operating system.

It is available as a VMWare Virtual Appliance OVA, as well as an Amazon Web Service AMI, 
and can be obtained by following the <a href="{{site.baseurl}}/administration-guide/steps/getting_started">Getting Started</a> section in this manual.

## What's included?

### Code repositories

The Appliance bundles the following OntoPortal Alliance code repositories, all maintained on <a href="https://github.com/ontoportal">GitHub</a>:

| Repository | Description | Technology |
|---|---|---|
| [ontoportal_web_ui](https://github.com/ontoportal/ontoportal_web_ui) | Frontend Rails-based web application for OntoPortal | Ruby on Rails |
| [ontologies_api_ruby_client](https://github.com/ontoportal/ontologies_api_ruby_client) | A Ruby client for accessing the OntoPortal hypermedia API | Ruby |
| [ontologies_api](https://github.com/ontoportal/ontologies_api) | Hypermedia and data API for OntoPortal services | Sinatra (Ruby) |
| [ontologies_linked_data](https://github.com/ontoportal/ontologies_linked_data) | Models and serializers for OntoPortal objects and services backed by triple-store | Ruby |
| [goo](https://github.com/ontoportal/goo) | Graph Oriented Objects (GOO) for Ruby. An RDF/SPARQL-based "ORM" | Ruby |
| [ncbo_annotator](https://github.com/ontoportal/ncbo_annotator) | OntoPortal Annotator which annotates text with semantic terms | Ruby |
| [ncbo_ontology_recommender](https://github.com/ontoportal/ncbo_ontology_recommender) | OntoPortal Recommender which recommends relevant ontologies for text or keywords | Ruby |
| [ncbo_cron](https://github.com/ontoportal/ncbo_cron) | Cron jobs that run on a regular basis in the infrastructure | Ruby |
| [owlapi_wrapper](https://github.com/ontoportal/owlapi_wrapper) | A command line utility that wraps the Java OWL API for parsing RDF-S, OWL, and OBO ontologies | Java |

### Software components

The image also bundles multiple third-party software described in the latest version release notes (see <a href="{{site.baseurl}}/administration-guide/general/history">History</a>)

* RDF stores
  * 4store
  * AllegroGraph
  * Virtuoso
* Application Stack
  * Ubuntu
  * Apache HTTPD server
  * Nginx
  * Tomcat
  * Redis
  * MariaDB
  * Solr
  * mgrep
  * memcache
  * and more...


