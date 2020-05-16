---
title: 4store Reference
layout: default
description: Advanced information about 4store
weight: 120
status: Preliminary
---

# Introduction

This is an advanced reference document on the 4store database.

## Instructions to dump/restore metadata graphs from 4store

These instructions use `4s-dump` and `4s-restore`, PERL scripts distributed and installed with 4store:
* https://github.com/garlik/4store/blob/master/src/utilities/4s-restore
* https://github.com/garlik/4store/blob/master/src/utilities/4s-dump

The following list of graphs (the ones that contain metadata for backup) should be in a file called `metadata_graphs`, one line per graph and no trailing characters.

```
http://data.bioontology.org/metadata/Group
http://data.bioontology.org/metadata/Base
http://data.bioontology.org/metadata/NotificationType
http://data.bioontology.org/metadata/Role
http://data.bioontology.org/metadata/Project
http://data.bioontology.org/metadata/Ontology
http://data.bioontology.org/metadata/Category
http://data.bioontology.org/metadata/Subscription
http://data.bioontology.org/metadata/User
http://data.bioontology.org/metadata/Note
http://data.bioontology.org/metadata/Slice
http://data.bioontology.org/metadata/ProvisionalClass
http://data.bioontology.org/metadata/OntologySubmission
http://data.bioontology.org/metadata/Metrics
http://data.bioontology.org/metadata/Details
http://data.bioontology.org/metadata/OntologyFormat
http://data.bioontology.org/metadata/Review
http://data.bioontology.org/metadata/Contact
http://data.bioontology.org/metadata/SubmissionStatus
http://data.bioontology.org/metadata/Reply
```

### Dump the graphs

Run this command to export (dump) the metadata graphs from the 4store repo at `my_4store_repo`:

```
4s-dump http://{my_4store_repo}:8080/sparql/ -f metadata_graphs
```

`4s-dump` is a remote command that can run while 4s-httpd is active. 
It uses the HTTP SPARQL endpoint to export the data. 
`4s-dump` will create a folder named `data` with two hashed internal levels. 
Each graph is exported in a turtle/rdf file. The id of the graph will be saved in the first line of each file as a comment. 

For the given set of metadata graphs the command runs in 20 seconds on BioPortal, generating 32M of data. For OntoPortal it should be much faster.

### Restore the graphs

To restore the metadata graphs (assumes your 4store utilities live in /usr/local/bin):

* Move the data folder to the master node
* Shut down the `4s-httpd` but leave the backend nodes running.
* Run `find data -type f | /usr/local/bin/4s-restore ontologies_api`. 
  * `4s-restore` uses `4s-import` and cannot run while 4s-httpd is running. 
  * `4s-restore` needs to run in the master node.
* Start 4s-httpd


