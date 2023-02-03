---
title: 4store Reference 
layout: default
summary: Advanced information about 4store
status: Ready
nav_order: 11
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/reference_4store
---

# Introduction

This is an advanced reference document on the 4store database.

## Directly querying 4store via SPARQL

If you want external users to be able to directly query your 4store database, 
there are considerations described under *External users querying 4store* below 
that you must take into account.
 
A recipe for making the SPARQL endpoint publicly accessible 
is available in the <a href="{{site.baseurl}}/administration/management/reference_sparql_endpoint">SPARQL Endpoint Reference</a>.

### Local user (administrator) querying 4store

The 4store database is listening for SPARQL queries on port localhost:8081. 
However, the Appliance has a local firewall in place which blocks port 8081, 
and the default AWS security group that comes with the Appliance
allows only http, https and SSH ports to pss through.

The simplest way to access the SPARQL endpoint would be through an SSH tunnel,
or you could open ports to a specific host. 

### External users querying 4store

#### Security concerns

```diff
- Please keep in mind that it is not safe to simply open port 8081 to the world. 
```

First, the 4store backend is built without any authentication,
so anyone with access to it can gain full read/write access to the triple store. 
In addition to ontology graphs,
this triple store contains other sensitive information 
such as user accounts with password hashes. 

Second, SPARQL is known for queries that can take a long time,
especially on a large database. 
If you provide direct access to the database,
SPARQL queries from external users can fully consume the SPARQL endpoint,
leaving insufficient system resources (e.g., few or no CPU cycles) 
to serve your normal user interface and API queries.

Finally, modifications to the triple store run the risk of changing its content
in ways that make part or all of the OntoPortal user interface stop functioning.
It is relatively painful to troubleshoot such inconsistencies,
and you might need to revert the triple store to an earlier version with consistent content.

#### Techniques

There are two methods by which you can provide external users secure access
to your triple store.

First, you could regularly copy the non-sensitive graphs in the triple store 
into a separate user-accessible repository
using 4s-dump and 4s-restore (see below). 
(For even finer-grained filtering, 
you could modify the sensitive graphs to overwrite only the sensitive data within them.)
Few users are likely to need real-time SPARQL information,
so a nightly job could perform this mirroring.
The copying might impact the availability of the repository during the process,
but for smaller repositories this problem would be rare.
It is also possible that the 4s-dump process could capture an inconsistent repository,
if the repository is being written as the dump takes place.

Alternatively, you could set up a SPARQL front end or proxy 
and filter out sensitive data from queries or responses.
The front end or proxy server 
could be given direct access to the endpoint,
while providing an accessible location for users to directly access, 
for example through https.

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
4s-dump http://localhost:8081/sparql/ -f metadata_graphs
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


