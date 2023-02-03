---
title: Search Index Management
layout: default
summary: Operations on the solr search index
status: Ready
nav_order: 4
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/search_index_management
---

# Search Index Management

Reference the <a href="{{site.baseurl}}/docs/devlopers-docs/global_architecture">Architecture</a> page 
for a diagram of the OntoPortal system components.

## Basic operations

The search index is maintained continuously in Solr.
When an ontology is submitted, the ontology is re-indexed, 
and the new index entries replace the existing index entries for that ontology.

Re-indexing of individual ontologies can be initiated via OntoPortal web Admin interface and it can also be done from the linux command line interface on the Appliance.  If the whole index becomes corrupted or if solr schema is changed then all the ontologies must be re-indexed.

## Access to the solr index

Solr runs on port 8983 which is blocked by local firewall because it not inteded to be accessed directly.  Most of the typical solr administrative operation can be accomplished from the appliance console using solr API.  If you need to acces solr web admin interface from outside of the applince then you would need to set ssh port fowarding. 

### About the solr cores

There are 4 index cores:
* term_search_core1 is used for term searching operations
* prop_search_core1 is used for propery searching operations
* term_search_core2 and prop_search_core2 are secondary non-active cores which can be optionaly used for reindexing all ontologies from scratch without interrupting search operations in OntoPortal.


## Re-indexing

### Re-index all ontologies

```
sudo su - ontoportal
cd /srv/ontoportal/ncbo_cron
bin/ncbo_ontology_index -a -l logs/reindexing_all.log
```
Re-indexing of all ontologies process deletes all data from the index and starts populating it from scratch.  During this time Appliance search operations will not work as expected because of the incomplete data until it is fully populated.  If you have a large ammount of ontologies and unable to take site down for maitanence then you have an option to re-index all ontologies using alternate core and swap cores after after re-indexing is complete.

The first step is to re-index all ontologies using secondary core:
```
sudo su - ontoportal
cd /srv/ontoportal/ncbo_cron
bin/ncbo_ontology_index -a -l logs/reindexing_all.log -c http://localhost:8983/solr/term_search_core2

```
then swap cores after reindexing process is complete:
```
curl 'http://localhost:8983/solr/admin/cores?action=SWAP&core=term_search_core1&other=term_search_core2'
```
[Sorl Referende for swapping cores](https://lucene.apache.org/solr/guide/8_2/coreadmin-api.html#CoreAdminAPI-Input.4)

 
### Re-index specified ontologies

You can re-index specific ontologies you specify. 

```
bin/ncbo_ontology_index -o STY,SNOMED -l logs/reindexing_STY_SNOMED.log
```








