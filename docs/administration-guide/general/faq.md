---
title: Frequently Asked Questions (FAQ)
layout: default
summary: Various common questions about the Appliance
status: Ready
nav_order: 4
parent: General Information
grand_parent: Administration Guide
permalink: /administration/general/faq
---

# Frequently Asked Questions

## General

### Under what license is the OntoPortal Virtual Appliance released?

See [License Terms]({{site.baseurl}}/general/licensing/)

### Can I use the Annotator and Recommender on their own?

Because services like the Annotator and Recommender 
depend on the Ontologies API in OntoPortal, 
you can not usefully install those services in a stand-alone way 
without also installing the core OntoPortal software and ontologies.

## Installation

### How do I access the Virtual Appliance I've just started?

See [Accessing the system]({{site.baseurl}}/steps/initial_installation/#accessing-the-system)

### How do I enable outgoing emails?

See [Enabling emails]({{site.baseurl}}/steps/initial_configuration/#enabling-emails)

## Ontology Management

### How do I add or change categories or groups?

See [How do I add or change categories or groups for ontologies?]({{site.baseurl}}/ontologies/managing_ontologies/#how-do-i-add-or-change-categories-or-groups-for-ontologies)

### How do I add or change slices?

See [How do I add or change slices in OntoPortal]({{site.baseurl}}/ontologies/managing_ontologies/#how-do-i-add-or-change-slices-in-ontoportal)

### How do I delete an ontology?

See [Deleting an ontology]({{site.baseurl}}/ontologies/managing_ontologies/#deleting-an-ontology)

### How can I migrate ontologies from BioPortal or another OntoPortal Appliance into a new Appliance?

See [Copying external ontologies]({{site.baseurl}}/ontologies/copying_external_ontologies/)

### How can I restrict ontology downloads via the UI or API?

See [Configuring Ontology Permissions]({{site.baseurl}}/ontologies/configuring_ontology_permissions/)

## Ontology Parsing

### When are new ontologies parsed?

See [Submitting Ontologies]({{site.baseurl}}/ontologies/submitting_ontologies/)

### How do I manually parse an ontology?

See [Manually reparsing using the Ruby console]({{site.baseurl}}/ontologies/submitting_ontologies/#manually-reparsing-using-the-ruby-console)

### How can I process a UMLS ontology?

See [Converting UMLS content]({{site.baseurl}}/ontologies/handling_umls/#converting-umls-content)

### How do I know if an ontology has parsed?

See [How do I know if an ontology has parsed]({{site.baseurl}}/ontologies/submitting_ontologies/#how-do-i-know-if-an-ontology-has-parsed)

### Is there a log file for parsing?

See [Is there a log file for parsing?]({{site.baseurl}}/ontologies/submitting_ontologies/#is-there-a-log-file-for-parsing)


## Web User Interface

### How can I clear the memcached-based UI cache?

See [Administrative Web User Interface—Caching]({{site.baseurl}}/routine_operations/#caching)

### How can I use widgets with my Virtual Appliance?

See [Setting up the widgets]({{site.baseurl}}/steps/setting_up_tools/#setting-up-the-widgets)


## Virtualization Environments

### How can I use the OVF image with my virtualization software? (VMware, VirtualBox, etc.)

See [Virtualization Environments]({{site.baseurl}}/steps/virtualization_environments/)

### How can I use the Appliance on Amazon EC2?

See [Amazon AWS AMI]({{site.baseurl}}/steps/getting_started/#amazon-aws-ami) and 
[AWS AMI deployent]({{site.baseurl}}/steps/initial_installation/#aws-ami-deployment).

### What is the admin password for the AWS Appliance?

See [AWS AMI deployment]({{site.baseurl}}/steps/initial_installation/#aws-ami-deployment)

