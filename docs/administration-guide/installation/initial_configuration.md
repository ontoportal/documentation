---
title: Initial Configuration
layout: default
summary: Configuring settings after installation
status: Needs Revision
nav_order: 3
parent: Installing OntoPortal
grand_parent: Administration Guide
permalink: /administration/steps/initial_configuration
---

# General Instruction

These settings will configure your installation for your environment.

## Replacing 4store with AllegroGraph

Your {{site.opva}} can use either 4store or (new with version 3.0) AllegroGraph 
as its RDF backend storage. 
We use 4store as the default RDF store for the system, as we have much more experience with it to date. If you want to use the AllegroGraph RDF store
instead of the default 4store RDF store,
visit the <a href="{{site.baseurl}}/administration/steps/allegrograph_configuration">AllegroGraph Configuration</a>
page before you begin adding ontologies.

## Adding ontologies

The detailed ontology submission process is described in the <a href="{{site.baseurl}}/administration/ontologies/submitting_ontologies">Submitting Ontologies</a> section.

To start, since you don't have any non-administration accounts, you can add an ontology using the OntoPortal Admin User at `http://{ip_address_of_appliance}/ontologies/new`.


## Enabling emails

To let the system send emails for lost passwords, notes, and ontology processing reports, 
you need to provide a valid mail server (smtp) configuration. 
The configuration should be provided in the `/srv/ontoportal/ontologies_api/current/config/environments/appliance.rb` file.

Here are the available settings:

```
 config.enable_notifications   = true # Set to 'true' to send emails
 config.email_sender           = "admin@example.org" # Default sender for emails
 config.email_disable_override = true # If this is set to 'false', all emails will be sent to the email configured in the 'email_override' setting
 config.email_override         = "admin@example.org"
 config.smtp_host              = "smtp.example.org"
 config.smtp_port              = 25
 config.smtp_auth_type         = :none # :none, :plain, :login, :cram_md5
 config.smtp_user              = "username" # only used if auth_type is not :none
 config.smtp_password          = "password" # only used if auth_type is not :none
 config.smtp_domain            = "example.org"
```

Once you have changed your settings, you will need to restart the server 
by running the command 
```
/sbin/service unicorn restart
```

## Next step

If you haven't yet registered your system, 
go to the <a href="{{site.baseurl}}/administration/steps/registration">Registration Process</a> step 
for detailed instructions.
