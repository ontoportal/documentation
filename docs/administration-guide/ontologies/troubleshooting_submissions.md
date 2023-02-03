---
title: Troubleshooting Submissions
layout: default
summary: Figuring out why your submission didn't work
status: Ready
nav_order: 7
parent: Managing Ontologies in OntoPortal
grand_parent: Administration Guide
permalink: /administration/ontologies/troubleshooting_submissions
---

# Troubleshooting Submissions

Here we describe how to troubleshoot issues with ontology submissions. 
As with all the troubleshooting sections, 
this section will be enhanced based on experiences with the deployed OntoPortal systems.

For troubleshooting installations, see the <a href="{{site.baseurl}}/administration/steps/troubleshooting_installations">Troubleshooting Installations</a> section.

For troubleshooting system operations, see the <a href="{{site.baseurl}}/administration/management/troubleshooting_operations">Troubleshooting Operations</a> section.

## Overview

There are 4 main steps to troubleshoot submissions:
* confirming your ontology is parseable;
* inspect the ontology parsing logs;
* retry the parsing processes that previously failed, using the administration page; and
* understanding OntoPortal's limits on the ontology size.

Below we introduce the general knowledge first, including the operation of the Administration page,
and then speak to the other steps you may need to pursue.

## Using the Administration page

### Ontology Administration

The Ontology Administration tab of the Administration page of OntoPortal provides detailed information about the latest ontology submissions.
Typically this tab is updated manually; to make sure it is current, 
click on the Refresh button near the top of the tab's content; the refresh may take some minutes.

The default view of this tab shows only Problem Ontologies; click on View Ontologies: `All` button. 

You will see the following columns in this tab: 
`ONTOLOGY`	`ADMIN`	`FORMAT`	`DATE CREATED`	`REPORT DATE`	`URL`	`ERROR STATUS`	`MISSING STATUS`.
Each of these is sortable, and most should be self-explanatory.
By sorting this table, you can quickly assess the status of all your ontologies
and the general health of your system. 

The URL column contains 3 links: Log, REST, and Submissions.
The Log link points to the processing log for the latest submission of this ontology.
The REST link points to the REST API entry for the ontology; 
most other related REST API commands will be displayed in OntoPortal's response.
The Submissions link pops up a table of the submissions that OntoPortal processed for this ontology, 
and the result of each submission's processing.

If you select one or more rows of the ontology table,
the `Please Select` dropdown in the header (following "Apply to Selected Rows:") 
can now be used to perform administrative actions on the selected ontologies.
Simply choose an administrative action from the dropdown,
and click on the `Go` button to perform the operation(s).
This menu lets you re-run most of the ontology processing steps performed by OntoPortal,
as well as deleting the ontology.
The `Process` selection queues the ontology for processing,
and then performs the same processing steps as OntoPortal performs.

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

One limitation that the OntoPortal Appliance installations can expose 
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

It seems that in these cases, the parsing log may not provide any clues,
as the ontology must complete parsing before the logs are closed.
Some users have had success parsing large ontologies 
after increasing their available memory to 24 GB or 32 GB.

Obviously, for ontologies that are larger than 1 to 2 GB—
we are aware of ontologies that are 32 GB or more—
we recommend acquiring computational systems with significant dedicated memory resources.

## Check the ontology: Ways to pre-validate an ontology

A good basic test is to make sure the ontology is correctly formatted. 
Here are several tools you can use to check the ontology is validly formatted.
(For a list of parseable ontology types, see [Parseable Ontologies]({{site.baseurl}}/administration/ontologies/parseable_ontologies).)

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

[Rapper](https://librdf.org/raptor/rapper.html) is an ontology parser used to reprocess
the xmlrdf ontology produced by previous steps in the ontology parsing process.
Rapper is more strict than many ontology parsers (like BioPortal's),
as it is not designed to "do the best it can" when it encounters an error.

The following commands may help diagnose an issue with ontology submission, 
as they imitate what OntoPortal performs after the parsing has been performed.

```
#transform the file into ntriples
rapper -i rdfxml -o ntriples owlapi.xrdf > owlapi.ntriples
#reparse again
rapper -i owlapi.ntriples
```

The next lines may contain an error message; some of these are described below. 

## Specific Problems

### Problem: ID already exists

If you see the following error when creating a new submission:

```
ERROR -- : Unable to create a new submission in OntologyPull: 
{:proc_naming=>{:duplicate=>"There is already a persistent resource with id `http://data.bioontology.org/ontologies/BIBLIOTEK-O/submissions/2`"}}
```

... you need to manually delete the corresponding orphan graph entries from the triple store, as follows.

##### Check for the orphan records

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT * WHERE {
 <http://data.bioontology.org/ontologies/GO/submissions/1558> ?p ?o
} LIMIT 2000
```

##### Delete the orphan records

```
curl -i -d 'update=DELETE+{+<http://data.bioontology.org/ontologies/GO/submissions/1558>+?p+?o+}+WHERE+{+<http://data.bioontology.org/ontologies/GO/submissions/1558>+?p+?o+}' 'http://ncboprod-4store1.stanford.edu:8080/update/'
```

#### Clear the GOO cache

At a minimum after these triple store changes, clear the GOO cache as described in the Cache management section above.

### Rapper: Syntax error at '<'

If rapper detects a syntax error in the input file, the problem often has occurred just preceding the error detection.
In the log snippet below, an error is reported at line 5, with 4 triples successfully parsed.
Since 4 triples were parsed, we can infer that one of the '<' characters begins a new IRI,
but the preceding IRI likely was not closed yet.
With 4 triples successfully parsed, the beginning of line 5 is suspect.

In this case, this is very early in the triples file, typically where local 'configuration triples' begin.
These are the triples that set up custom declarations,
like which identifier is used for the definition or prefLabel in the ontology. 
This can be tricky to troubleshoot in the running system,
because those configurations are not visible by default in the submission page—
you must click on the `Add Custom Property`box to see them.
If the user as not entered well-defined triples in these custom properties,
rapper will be the first to catch and report this error.

```
E, [2021-06-21T12:32:44.220770 #17470] ERROR -- : ["Exception: Rapper cannot parse turtle file at /tmp/data_triple_store20210621-17470-17dzhud: rapper: Parsing URI file:///tmp/data_triple_store20210621-17470-17dzhud with parser turtle
rapper: Serializing with serializer ntriples
rapper: Error - URI file:///tmp/data_triple_store20210621-17470-17dzhud:5 - syntax error at '<'
rapper: Parsing returned 4 triples
```

### Rapper: Bad characters

When rapper reports bad characters, this is almost always cause by an IRI that has unusual characters
(foreign language or symbolic characters) that are not encoded. 
While many tools consider these characters valid, one standard does not allow them in certain contexts.
Reviewing the file for non-ASCII characters will usually uncover the issue.

Another scenario that can produce this error is when a preceding triple or term is malformed,
and the parser is looking for the wrong type of content.
Check the precediing content to make sure it looks valid.

```
rapper: Error - URI file:///Users/manuelso/work/tmp/ontologies_linked_data/test/data/ontology_files/repo/EXOTEST/43/x.nt:19 column 81 - URI 'http://purl.obolibrary.org/obo/interacts_with_an_exposure_stressor_via ExO' contains bad character(s)
rapper: Parsing returned 1326 triples
```
