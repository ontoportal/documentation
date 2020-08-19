---
title: Submitting Ontologies
layout: default
description: How to submit ontology files to your repository
weight: 10
status: Ready
---

# Submitting Ontologies

You can add an ontology using the OntoPortal Admin User at `http://{ip_address_of_appliance}/ontologies/new`.
The ncbo_cron project is configured to automatically process any new ontologies 
every 5 minutes (see the <a href="../../steps/initial_installation">documentation for enabling the scheduler</a>). 

The ontology processing includes:
* Parsing any new, unparsed ontologies
* Calculating a set of metrics for these ontologies
* Indexing these ontologies for use with search
* Processing the ontology for use with the annotator


## As an OntoPortal user with the UI

A regular usar of OntoPortal can submit ontologies by going to the Browse page
and clicking on the `Submit Ontology` button. 

The first metadata form asks about characterists of the ontology.
Once this form is complete, the user is prompted for information about 
the first _submission_ (version) of the ontology.

Detailed information for submitting ontologies can be found online
in the documentation found at your appliance at 
`https://{my_appliance_hostname}/documentation`,
or in the <a href="https://www.bioontology.org/wiki/BioPortal_Help#Submitting_an_ontology">BioPortal documentation on submissions</a>.

## As an OntoPortal user with the API

Information on submitting ontologies via the API is provided at the <a href="http://data.bioontology.org/documentation#OntologySubmission">BioPortal API documentation on submissions</a>, or in your own OntoPortal installation's API documentation.

## As a developer in the scripting environment

The <a href=" https://github.com/ncbo/ncbo_cron/blob/master/bin/ncbo_ontology_process">ncbo_ontology_process</a> script 
can be used to easily submit an ontology, once the dependencies are in place.

## Manually reparsing using the ncbo_cron scripts

To manually reparse an ontology, you need to ssh into the system and run ncbo_ontology_process script after switching to ontoportal user:

```
# from the shell:
sudo su - ontoportal
cd /srv/ontoportal/ncbo_cron
bin/ncbo_ontology_process -o ONTOLOGY_ACRONYM 

```

## How do I know if an ontology has parsed?

The OntoPortal Web UI will cache old information about ontologies for 60 seconds. After parsing is complete, just refresh the ontology summary page to see the status for the most recent submission listed under the "Submissions" table.

In addition, you can look at the REST service directly, which will always give you the most updated information. To do this, visit the following URL:

`http://{your_appliance_ip_or_domain_name}:8080/ontologies/{ontology_acronym}/latest_submission?include=all`

You can look for the submissionStatus attribute to get the status

## Is there a log file for parsing?

Parsing progress is logged in the ontology submission repository folder: `/srv/ncbo/repository/{ontology acronym}/{submission id}`

For further information about ontology parsing, 
please see <a href="../parseable_ontologies">Parseable Ontologies</a>
and <a href="../troubleshooting_submissions">Troubleshooting Submissions</a>

