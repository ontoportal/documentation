---
title: Initial Installation
layout: default
description: First steps to install your appliance
weight: 10
status: In progress
---

# General Instruction

You can supply the hostname (machine name) for the virtual machine 
during the deployment process. 
This documentation will refer to this hostname as 'example'.

# Changing default passwords

Operating System
* Username: root
* Password: password is prompted on the first boot
OntoPortal Admin User
* Username: admin
* Password: changeme
The Appliance Web UI can be accessed at `http://{ip_address_of_appliance}`. 
You can get the IP address of the Appliance by using the following command 
in the terminal: `ip addr show eth0`.

# REST services

REST services are available at the following location:
* `http://{ip_address_of_appliance}:8080`
* `http://{ip_address_of_appliance}:8080/documentation`

# Adding Ontologies

The detailed process of submitting ontologies is described in the <a href="../../ontologies/submitting_ontologies">Submitting Ontologies</a> section
of this manual.
You can add an ontology using the OntoPortal Admin User at `http://{ip_address_of_appliance}/ontologies/new`.
The ncbo_cron project is configured to automatically process new ontologies every 5 minutes (see documentation for enabling the scheduler). 


