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

## Check the ontology: Parsing ontology other ways

### With Protege


### With rapper

```diff
- Confirm this is possible on OntoPortal
```

The following commands may help 

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

...you need to manually delete the corresponding orphan graph entries from the triple store, as follows.

### Check for the orphan records:

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT * WHERE {
 <http://data.bioontology.org/ontologies/GO/submissions/1558> ?p ?o
} LIMIT 2000
```

### Delete the orphan records:

```
curl -i -d 'update=DELETE+{+<http://data.bioontology.org/ontologies/GO/submissions/1558>+?p+?o+}+WHERE+{+<http://data.bioontology.org/ontologies/GO/submissions/1558>+?p+?o+}' 'http://ncboprod-4store1.stanford.edu:8080/update/'
```

### Clear the GOO cache.

Use the Clear GOO cache button on the Administrative page.


