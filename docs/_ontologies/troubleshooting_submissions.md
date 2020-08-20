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
The Log link points to the parsing log for the latest submission of this ontology.
The REST link points to the REST API entry for the ontology; 
most other REST links will be displayed in OntoPortal's response.
The Submissions link brings up a table of the submissions that OntoPortal processed for this ontology, 
and the result of each submission's processing.

What may not be obvious is that if you select one or more rows of the ontology table,
the `Please Select` dropdown in the header (following "Apply to Selected Rows:") 
can now be used to perform administrative actions on the selected ontologies.
Simply choose an administrative action from the dropdown,
and click on the `Go` button to perform the operation(s).

## Check the ontology: Parsing ontology other ways

### With Protege

If you open the ontology with the Protégé desktop application, 
it will indicate any problems with the ontology.
Since Protégé uses the same OWLAPI interface as OntoPortal,
this is an excellent validation step to make sure your ontology parses correctly.

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

## ID already exists

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

Use the Clear GOO cache button on the Administrative page.


