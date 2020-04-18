---
title: Copying External Ontologies
layout: default
description: How to copy ontologies from another OntoPortal-based repository to your repository
weight: 14
status: Preliminary
---

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