# Search Index Management

Reference the <a href="{{site.baseurl}}/developer-guide/global_architecture">Architecture</a> page
for a diagram of the OntoPortal system components.

## Basic operations

The search index is maintained continuously in Solr.
When an ontology is submitted, the ontology is re-indexed,
and the new index entries replace the existing index entries for that ontology.

Re-indexing of individual ontologies can be initiated via the OntoPortal web Admin interface, and it can also be done from the Linux command-line interface on the Appliance. If the whole index becomes corrupted or if the Solr schema is changed, then all the ontologies must be re-indexed.

## Access to the Solr index

Solr runs on port 8983, which is blocked by the local firewall because it is not intended to be accessed directly. Most of the typical Solr administrative operations can be accomplished from the appliance console using the Solr API. If you need to access the Solr web admin interface from outside of the appliance, then you would need to set up SSH port forwarding.

### About the Solr cores

There are 4 index cores:
* `term_search_core1` is used for term searching operations
* `prop_search_core1` is used for property searching operations
* `term_search_core2` and `prop_search_core2` are secondary, non-active cores which can be optionally used for reindexing all ontologies from scratch without interrupting search operations in OntoPortal.

## Re-indexing

### Re-index all ontologies

```bash
sudo su - op-admin
cd /opt/ontoportal/ncbo_cron
bin/ncbo_ontology_index -a -l log/reindexing_all.log
```

Re-indexing all ontologies deletes all data from the index and starts populating it from scratch. During this time, Appliance search operations will not work as expected because of the incomplete data, until it is fully populated. If you have a large amount of ontologies and are unable to take the site down for maintenance, then you have the option to re-index all ontologies using an alternate core and swap cores after re-indexing is complete.

The first step is to re-index all ontologies using the secondary core:
```bash
sudo su - op-admin
cd /opt/ontoportal/ncbo_cron
bin/ncbo_ontology_index -a -l log/reindexing_all.log -c http://localhost:8983/solr/term_search_core2
```
then swap cores after the reindexing process is complete:
```
curl 'http://localhost:8983/solr/admin/cores?action=SWAP&core=term_search_core1&other=term_search_core2'
```
[Solr reference for swapping cores](https://lucene.apache.org/solr/guide/8_2/coreadmin-api.html#CoreAdminAPI-Input.4)

### Re-index specified ontologies

You can re-index specific ontologies that you specify.

```
bin/ncbo_ontology_index -o STY,SNOMED -l log/reindexing_STY_SNOMED.log
```
