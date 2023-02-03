---
title: Troubleshooting Operations
layout: default
summary: Solving problems with the Appliance
status: In progress
nav_order: 6
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/troubleshooting_operations
---

# Troubleshooting Operations

Here we describe how to troubleshoot issues with system operations. 
As with all the troubleshooting sections, 
this section will be enhanced based on experiences with the deployed OntoPortal systems.

Because of the complexity of troubleshooting, initially only limited troubleshooting information is available on this page. 
The BMIR BioPortal team has a detailed troubleshooting guide 
for cases where the system is severely misbehaving; 
until we make part of this document, 
contact us if you think you need this information.

For troubleshooting installations, see the <a href="{{site.baseurl}}/administration/steps/troubleshooting_installations">Troubleshooting Installations</a> section.

For troubleshooting ontology submissions, see the <a href="{{site.baseurl}}/administration/ontologies/troubleshooting_submissions">Troubleshooting Submissions</a> section.

## General conditions

### System slow or dead

```diff
# To be provided.
```

### System producing incorrect or inconsistent responses

```diff
# To be provided.
```

### User interface displaying error message instead of content

```diff
# To be provided.
```

### Missing or odd search results

If concepts that should be found during a search are not found,
the problem is likely a faulty index for that ontology. 
(Possibly the indexing of the last submission of the ontology was interrupted.)
The fix is to re-index the ontology.

#### Check for indexed acronyms

This should report results if they exist, as it’s a wildcard search:

```diff
! possibly following link should use :8080 address
```

```
http://data.{my-appliance-hostname}/search?q=*&ontologies=OBI
```

Also it's possible to look at SOLR directly; this gives you all acronyms in the index:

```
http://{my-appliance-hostname}:8080/solr/select?q=&rows=0&facet=true&facet.limit=-1&facet.field=submissionAcronym
```

For more specific SOLR queries, the SOLR admin interface is available at:

```
http://{my-appliance-hostname}:8080/solr/
```

In those interfaces, use the 'Core Selector' to choose 'Collection1' (likely the only choice available).  In the 'Query' utility that appears, enter parameters such as 'q' text field entry: 'submissionAcronym:AERO'.

To re-index an ontology, follow the instructions in [Search Index Management]({{site.baseurl}}/administration/management/search_index_management)

```
https://github.com/ncbo/ncbo_cron/blob/master/bin/ncbo_ontology_index
```

## Specific diagnostic errors

### ontologies_report.json is missing

When running some jobs you may see the error 
```
ontologies_report.json : No such file or directory
```
To fix it, create an ontologies_report.json file at the following location: `/srv/reports/ontologies_report.json`

The file has to be owned by ncbobp:ncbobp and to have permission 666

## Advanced troubleshooting of specific systems

### Troubleshooting ncbo_cron

See [ncbo-cron Reference]({{site.baseurl}}/administration/management/ncbo_cron) for details.






