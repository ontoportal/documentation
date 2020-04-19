---
title: Troubleshooting Operations
layout: default
description: Solving problems with the Appliance
weight: 70
status: In progress
---

# Troubleshooting Operations

Here we describe how to troubleshoot issues with system operations. 
As with all the troubleshooting sections, 
this section will be enhanced based on experiences with the deployed OntoPortal systems.

(Because of the complexity of troubleshooting, initially only limited troubleshooting information is available on this page.)

For troubleshooting installations, see the <a href="{{site.baseurl}}/steps/troubleshooting_installations">Troubleshooting Installations</a> section.

For troubleshooting ontology submissions, see the <a href="{{site.baseurl}}/ontologies/troubleshooting_submissions">Troubleshooting Submissions</a> section.

## General conditions

### System slow or dead

{color:red}_To be provided._{color}

### System producing incorrect or inconsistent responses

_To be provided._

### User interface displaying error message instead of content

_To be provided._

### Missing or odd search results

If concepts that should be found during a search are not found,
the problem is likely a faulty index for that ontology. 
(Possibly the indexing of the last submission of the ontology was interrupted.)
The fix is to re-index the ontology.

## Specific diagnostic errors

### ontologies_report.json is missing

When running some jobs you may see the error 
```
ontologies_report.json : No such file or directory
```
To fix it, create an ontologies_report.json file at the following location: `/srv/reports/ontologies_report.json`

The file has to be owned by ncbobp:ncbobp and to have permission 666






