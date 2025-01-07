---
title: Setup Federation
layout: default
summary: Differents things to setup to start consuming content from other portals
status: Preliminary
nav_order: 4
parent: OntoPortal Federation
grand_parent: Administration Guide
permalink: /administration/federation/setup_federation
---

# Setup Federation

## Setup API keys

To consume the content from another OntoPortal, you need to create a dedicated account on each portal you would like your own {{site.opva}} to connect to. This will enable federated portals to identify the API calls coming from your own {{site.opva}} and eventually customizing access to some content only. 

For instance, if AgroPortal wants to consume content from EcoPortal, EarthPortal and BiodivPortal, then an "agroportal" account need to be created on the 3 portals. 

By convention: 
- The name of the account shall be the name of the querying portal in small letters.
- The email of the account shall allow to reach out to the administrator of the querying portal.
- The APIkey of this user must be used in the UI and API settings (see below).
- The APIkey of this user must be used for the pull locations for duplicates (see bellow).

## Setup the UI
(to come from https://doc.jonquetlab.lirmm.fr/doc/federation-configuration-ahUNACCvwW)

## Setup the API
(to come from https://doc.jonquetlab.lirmm.fr/doc/federation-configuration-ahUNACCvwW)

## Duplicate management

Considering that the same ontology could be found on multiple federated portals, the OntoPortal federation entails some collaborative conventions to properly manage those duplicates to ease both the work of the portal adminstrators and the life of the original ontology developer interested in sharing his/her ontologies in an OntoPortal. 

- Duplicates are identified by acronyms. Therefore, it's important to use the same acronym than the other portals when loading an ontology already strored somewhere in the federation. If a discrepency is found or you think another acronym shoudl be used, contact the portal concerned to discuss and harmonize.
- The OntoPortal federation relies on a "canonical portal" for each duplicates ontologies. The canonical portal is decided after a discussion betweem the adminstrators of the OntoPortal federation. Only the canonical portal shall pull the source file from an external resource (e.g., GitHub or any other URLs) or get the file manually uploaded. The other federated portals must then use the canonical portal to "connect" (via the pull location mechanism) their portals to the canonical one.

Duplicates and canonical portals are [currently available here](https://docs.google.com/spreadsheets/d/163_6fJs_SDIQR09I4RUK70DgtTPtt4WpXIOXzb1I0Ug/edit?gid=161217279#gid=161217279).

To "connect" an ontology duplicate to the canonical portal one needs to setup the pull location of the ontology with the following steps. Hereafter, we illustrate how AgroPortal will setup its pull location for BCO to BiodivPortal, considered the canonical portal for BCO: 

- Go to the ontoloy page on the canonical portal => https://biodivportal.gfbio.org/ontologies/BCO
- Click on the "{} Go to API" icon 
- Restrict the API URL to go query only the ontology object => https://data.biodivportal.gfbio.org/ontologies/BCO
- Copy the download link =>  https://data.biodivportal.gfbio.org/ontologies/BCO/download
- Create the pull location URL by adding the APIkey of the user corresponding to your portal on the canonical portal => https://data.biodivportal.gfbio.org/ontologies/BCO/download?apikey=YOUR-PORTAL-APIKEY
- If the ontology has already been created, go to the ontoloy page on your portal => https://agroportal.lirmm.fr/ontologies/BCO 
- If the ontology needs to be created, go to the ontology creation page => https://agroportal.lirmm.fr/ontologies/new
- If the ontology has already been created, go to "Edit ontology>Links" in your own OntoPortal.
- If the ontology needs to be created, get to the "Location" field in the submission form.
- In both cases, enable "Load from URL" and add the previously created pull location URL.

This will trigger either an original or another pull of the ontology on your portal from the canonical portal and after this, you do not have to do anything anymore. Any update on the canonical portal will be taken automatically by your own portal (automatic nightly pulls).

The fact of "connecting" a federated portal to the canonical one for a given ontology enables to: 
- Pull the ontology content from a unique place ensuring the **data** served and displayed by the OntoPortal federation is consistent and the same. 
- The federated portals –not hosting locally the duplicate– to redirect to the canonical portal in the federation. If the duplicate is found locally, the local ontology will be open (see Browse).
- Pull the ontology information from a unique place the **metadata** served and displayed by the OntoPortal federation is consistent and the same. In the future, the federated portals hosting a duplicate will not have to edit/curate the local metadata record for an ontology, it will eventually be taken from the canonical portal.
