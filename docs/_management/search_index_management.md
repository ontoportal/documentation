---
title: Search Index Management
layout: default
description: Operations on the solr search index
weight: 30
status: Ready
---

# Search Index Management

Reference the <a href="{{site.baseurl}}/general/architecture_reference">Architecture</a> page 
for a diagram of the OntoPortal system components.

## Basic operations

The search index is maintained continuously in Solr.
When an ontology is submitted, the ontology is re-indexed, 
and the new index entries replace the existing index entries for that ontology.

If the whole index becomes corrupted, all the ontologies must be re-indexed.

## Access to the solr index
solr runs on port 8983; however, that port is blocked by local firewall so accessing it requires to do ssh port fowarding or port map if you are running appliance on your workstation. 
```
http://localhost:8983/solr
```
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
Re-indexing of all ontologies process removes existing index and starts populating it from scratch.  During this time Appliance search operations will not work as expected because of the incomplete data until it is fully populated.  If you have a large ammount of ontologies and unable to take site down for maitanence then you have an option to re-index all ontologies using alternate core and swap cores after after re-indexing is complete.

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








