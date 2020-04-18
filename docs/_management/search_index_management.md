---
title: Search Index Management
layout: default
description: Operations on the solr search index
weight: 30
status: In progress
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

The solr index is hosted by the tomcat on port 8082. To access it visit:
```
http://{my-appliance-hostname}:8082/solr
```

### About the solr cores

There are 2 index cores:
* core1 is used for searching operations
* core2 is used during reindexing 

By using core2 during re-indexing, the search can continue working while re-indexing, 
even if re-indexing all the ontologies in OntoPortal.

To swap the 2 cores:
* Go to core admin tab
* Select core1
* Hit the "Swap" button

## Re-indexing

### Re-index all ontologies

The first step is to re-index all ontologies using core 2:
```
bin/ncbo_ontology_index -a -l logs/reindexing_all.log -c http://{my-appliance-hostname}:8082/solr/core2
```
Re-indexing in core2 allows the Appliance search to continue working during the reindexing. 

After indexing, swap the cores (see 'About the solr cores' above).
 
### Re-index specified ontologies

You can re-index specific ontologies you specify. 
The following example performs the operation in core2:

```
bin/ncbo_ontology_index -o STY,SNOMED -l logs/reindexing_STY_SNOMED.log -c http://{my-appliance-hostname}:8082/solr/core2
```

_How does the reindexed ontology get into core1?_





