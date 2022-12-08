---
title: History of the Virtual Appliance
layout: default
summary: How the Appliance got to this point
status: Ready
nav_order: 6
parent: General Information
grand_parent: Administration Guide
permalink: /administration/general/history
---

# History of the Virtual Appliance

## Release Histories

The Release History for Virtual Appliance versions 2.4 and 2.5 is available in the [BioPortal Virtual Appliance Release Notes](https://www.bioontology.org/wiki/BioPortal_Virtual_Appliance_Release_Notes).

The Release History for Virtual Appliance version 3.0 is available in the 
[OntoPortal Virtual Appliance Release Notes](https://github.com/ncbo/virtual_appliance/blob/3.0/CHANGELOG.md).

The Virtual Appliance code is based on the latest BioPortal code. 
* The Release History for BioPortal is available in the [BioPortal Release Notes](https://www.bioontology.org/wiki/BioPortal_Release_Notes). 
* Detailed release documentation for the front end (UI) repo is available in the [Bioportal_web_ui Release Notes](https://github.com/ncbo/bioportal_web_ui/releases). 

## NCBO Virtual Appliance (original release?) (pre-October 2010)

The first known work on the Virtual Appliance was October 25, 2010, with the [creation of the Category wiki page](https://www.bioontology.org/mediawiki/index.php?title=Category:NCBO_Virtual_Appliance&oldid=10295). 
It appears the Appliance was mature as of this date.

## BioPortal Virtual Appliance Release 2.4 (April 2015)

Released as both a VMWare Virtual Appliance OVF, and as an Amazon Web Service AMI, this appliance was based on BioPortal 4.x series software. The appliance included an advanced ontology recommender as well as several other more advanced versions of BioPortal capabilities.

## OntoPortal Virtual Appliance Release 2.5 (February 2018)

The OntoPortal Virtual Appliance 2.5 is the (rebranded) update of the BioPortal Virtual Appliance originally developed by the National Center for Biomedical Ontologies (NCBO). This Virtual Appliance software is based on BioPortal's v5.x software infrastructure, including the use of an RDF triplestore as the primary data storage mechanism.

This version was released as a VmWare package, but never as an AWS Machine Instance. A later minor version release was the first release to include a 'call home' feature, enabling users to be aware of updates and BMIR to be aware of the number of active deployed (version 2.5) appliances.

## OntoPortal Virtual Appliance Release 3.0 (May 2020)

The OntoPortal Virtual Appliance 3.0 is again released as a VMWare OVF 
and as an Amazon AMI. 
It contains a significant number of feature improvements and usability upgrades, 
and several adaptations targeting the deployers of public Appliance instances. 
A major upgrade for further experimentation is the ability to test 
a different RDF backend store, 
as we offer AllegroGraph compatibility for the first time in the 3.0 release.

With the pending formal introduction of the [OntoPortal Alliance](https://ontoportalalliance.org),
we created the [GitHub OntoPortal organization](https://github.com/ontoportal), 
and are focusing on building an international sustainable community
of OntoPortal Virtual Appliance users and maintainers.
This documentation is one of the first releases 
of OntoPortal Virtual Appliance content on the GitHub repository.

This release also finally offers more complete understanding of Appliance use,
as all Appliance users will register their use of the software
in order to continue operating it in a nag-free way. 

