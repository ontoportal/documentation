---
title: Allegrograph Configuration
layout: default
description: Configuring settings after installation
weight: 95
status: In progress
---

# Allegrograph Configuration

These settings will configure your installation for your environment.

## Replacing 4store with Allegrograph

Your {{site.opva}} can use either 4store or (new with version 3.0) Allegrograph 
as its RDF backend store. 
The 4store is the default RDF store for the system, as we have much more experience with it to date. 

The configuration can be changed at any time by shutting down BioPortal,
resetting the backend store configuration attribute, 
and restarting BioPortal. 
However, the Annotator and search index data will not change when you switch the backend, so it isn't really feasible to go back and forth—you'll 
want to pick your backend system at the beginning,
or be prepared to re-index your databases regularly!

### What's included?

We included a version of Allegrograph with your Appliance
that is tested to work with this version of the Appliance.
The included Allegrograph is not necessarily the most recent version of the Allegrograph software. 

If you want to upgrade your Allegrograph software to the most recent version,
you can obtain that from the Franz, Inc. website. 
However, we can not guarantee the compatibility of the Appliance
with the latest Allegrograph version.

### How to switch the Configuration

_To be defined._


