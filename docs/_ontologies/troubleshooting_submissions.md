---
title: Troubleshooting Submissions
layout: default
description: Figuring out why your submission didn't work
weight: 80
status: In progress
---

# Troubleshooting Submissions

Here we describe how to troubleshoot issues with ontology submissions. 
As with all the troubleshooting sections, 
this section will be enhanced based on experiences with the deployed OntoPortal systems.

For troubleshooting installations, see the <a href="../../steps/troubleshooting_installations">Troubleshooting Installations</a> section.

For troubleshooting system operations, see the <a href="../../management/troubleshooting_operations">Troubleshooting Operations</a> section.

## Using the Administration page

### Ontology Administration

The Ontology Administration tab of the Administration page of OntoPortal provides detailed information about the latest ontology submissions.
Typically this tab is updated manually; to make sure it is current, 
click on the Refresh button near the top of the tab's content; the refresh may take some minutes.

The default view of this tab shows only Problem Ontologies; click on View Ontologies: `All` button. 

You will see the following columns in this tab: 
`ONTOLOGY`	`ADMIN`	`FORMAT`	`DATE CREATED`	`REPORT DATE`	`URL`	`ERROR STATUS`	`MISSING STATUS`.
Each of these is sortable, and most should be self-explanatory.
By sorting this table, you can quickly learn assess the status of all your ontologies
and the general health of your system. 

The URL column contains 3 links: Log, REST, and Submissions.
The Log link points to the processing log for the latest submission of this ontology.
The REST link points to the REST API entry for the ontology; 
most other REST links will be displayed in OntoPortal's response.
The Submissions link brings up a table of the submissions that OntoPortal processed for this ontology, 
and the result of each submission's processing.

What may not be obvious is that if you select one or more rows of the ontology table,
the `Please Select` dropdown in the header (following "Apply to Selected Rows:") 
can now be used to perform administrative actions on the selected ontologies.
Simply choose an administrative action from the dropdown,
and click on the `Go` button to perform the operation(s).

### Cache management

After any changes that you make in an attempt to diagnose ontology issues in OntoPortal, 
you may want to clear caches. 
The controls for clearing OntoPortal caches are in the Site Administration tab 
of the Administration page.

You should definitely clear at least the GOO cache to make sure old triple store data are not persisted.
To do this, use the `Flush GOO Cache` button on the Administrative page to force OntoPortal to see the changes.

You may wish to flush the other caches on that page as well, so that all the systems are synchronized for all users.
(And you may also need to flush your browser cache for the OntoPortal UI, if it retains any problematic data.)

## Ontology processing logs

In addition to the log entries shown for the specific ontology,
you may want to review the entire ontology processing context.
Many general processing logs can be found in `/srv/ncbo/ncbo_cron/logs`.

In particular, the log from the overnight ontology processing
(for ontologies that are checked for changes each night)
can be found at `/srv/ncbo/ncbo_cron/logs/schedule_pull.log`, 
and similarly named archival logs. 

These logs are helpful when you want to understand why an ontology
may not be updating overnight when it is expected to do so.

## Troubleshooting (very) large ontologies

Ontology parsing can be a computationally expensive task, and OntoPortal is often installed in resource-limited environments.
Computer memory (RAM) is often a limiting factor
(because the parsing happens entirely in memory), but other constraints can also apply.
Not only may the computer itself have limited resources (particularly RAM), 
but the virtual machine environment used to run the Virtual Appliance will have additional memory constraints,
which may require appropriate configuration.

One limitation that the OntoPortal Appliance installations typically expose 
is that the communication interfaces may limit acceptable files sizes.
For example, often there is a 1 GB limit on file transfers.
Fortunately, most ontologies can be highly compressed, 
and OntoPortal knows how to unpack Zip files when it receives them.
So you can compress your ontology into a Zip file, 
and if it is under 1 GB compressed you may be able to proceed to parsing.

If you see that parsing is not beginning, or can not tell from the logs that it is beginning,
you may suspect that the size of the (unpacked) ontology file may be too large for the system.
Ontologies larger than 1 to 2 GB (uncompressed) can require more RAM to parse
than the OntoPortal application has available from its Virtual Machine/computer host, 
especially as the ontology may still be buffered in memory from unpacking it 
and parsing outputs may also be buffered.

It seems that in these cases, no information may be written to the parsing log,
as the ontology must complete parsing before the logs are closed.
Some users have had success parsing large ontologies 
after increasing their available memory to 24 GB or 32 GB.

Obviously, for ontologies that are an order of magnitude larger or mroe—
we are aware of ontologies that are 32 GB or more—
we recommend acquiring computational systems with significant dedicated memory resources.

## Check the ontology: Other ways to validate an ontology

### With Protégé

If you open the ontology with the Protégé desktop application, 
it will indicate in its log file any problems that it detects with the ontology.
(Note you must open the log file to see these problems!)
Since Protégé uses the same OWLAPI interface as OntoPortal,
this is an excellent validation step to make sure your ontology parses correctly.

### With an RDF validator

On some occasions Protégé will see an error with the ontology, 
but do its best to resolve the issue and move on. Typically Protégé logs these errors.

In some other cases Protégé may not detect an error with the ontology,
for example if a QName contains some unacceptable characters (e.g., `/`, `:`, `,`, `&`).
OntoPortal can be unexpectedly strict about some of these issues.
One way to detect these issues ahead of time is to submit your ontology
to an online validator, for example at [RDF Playground](http://rdfplayground.dcc.uchile.cl/).

Such tools can help find more obscure issues without going to the trouble of 
downloading a dedicated parser or validator. 
In general, when using such tools, to see the root cause 
you may need to review the line flagged with a problem, 
the one immediately following it, or some lines preceding it.

### With rapper

```diff
- Confirm this is possible on OntoPortal
```

The following commands may help diagnose an issue with ontology submission, 
as they perform the transformation OntoPortal performs after the parsing has been performed.

```
#transform the file into ntriples
rapper -i rdfxml -o ntriples owlapi.xrdf > owlapi.ntriples
#reparse again
rapper -i owlapi.ntriples
#error
rapper: Error - URI file:///Users/manuelso/work/tmp/ontologies_linked_data/test/data/ontology_files/repo/EXOTEST/43/x.nt:19 column 81 - URI 'http://purl.obolibrary.org/obo/interacts_with_an_exposure_stressor_via ExO' contains bad character(s)
rapper: Parsing returned 1326 triples
```

## Specific Problems

### Problem: ID already exists

If you see the following error when creating a new submission:

```
ERROR -- : Unable to create a new submission in OntologyPull: 
{:proc_naming=>{:duplicate=>"There is already a persistent resource with id `http://data.bioontology.org/ontologies/BIBLIOTEK-O/submissions/2`"}}
```

... you need to manually delete the corresponding orphan graph entries from the triple store, as follows.

### Check for the orphan records

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT * WHERE {
 <http://data.bioontology.org/ontologies/GO/submissions/1558> ?p ?o
} LIMIT 2000
```

### Delete the orphan records

```
curl -i -d 'update=DELETE+{+<http://data.bioontology.org/ontologies/GO/submissions/1558>+?p+?o+}+WHERE+{+<http://data.bioontology.org/ontologies/GO/submissions/1558>+?p+?o+}' 'http://ncboprod-4store1.stanford.edu:8080/update/'
```

### Clear the GOO cache

At a minimum after these triple store changes, clear the GOO cache as described in the Cache management section above.




