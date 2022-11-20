---
title: Copying External Ontologies
layout: default
summary: How to copy ontologies from another OntoPortal-based repository to your repository
status: Ready
nav_order: 2
parent: Managing Ontologies in OntoPortal
grand_parent: Administration Guide
permalink: /administration/ontologies/copying_external_ontologies
---

# Mirroring external ontologies

You probably know that OntoPortal ontologies can be loaded from an external web location,
and that OntoPortal can automatically check the external location (by default nightly) to see if the location's content has changed.
If the content has changed, OntoPortal will attempt to load and parse the new content as an ontology submission.

This convenience can be extended by the administrator to perform ontology mirroring from other OntoPortal instances,
or from the BioPortal system itself. 
_As long as an ontology download is accessible from a remote OntoPortal or BioPortal instance,_
you can set up the local ontology to point to that download location as the ontology source.
This will cause your local system to mirror changes from the remote ontology.

To find the the download location of an ontology, go to the Submissions section of the Summary page of that ontology.
Under the Downloads heading, control-click on the appropriate link in the first line (usually either 'OWL' or 'SKOS').
Copy the link using the pop-up menu, and use it as the source URL for your ontology. 
Please replace the API key at the end of the link with the API key of the account you use to access the remote system.
(Ideally that will be a dedicated account that you have created for your local system's access to the remote system.
This lets the remote system know that it is your OntoPortal instance performing the downloads.)

# Copying external ontologies

If you want to migrate publicly visible ontologies 
from BioPortal or previous NCBO Virtual Appliance versions into a new Appliance, 
you can do so via a script.

The programmatic migrations are not officially supported, but 
the Appliance distribution includes a script that can be used to import ontologies.

Go to
```
/srv/ncbo/virtual_appliance/deployment/utils/bioportal_ontologies_import.rb
```
in your Virtual Appliance to view this script. You will need to modify the variables `SOURCE_API`, `SOURCE_APIKEY` and `ONTOLOGIES_TO_IMPORT` variables.

