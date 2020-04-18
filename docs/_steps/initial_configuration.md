---
title: Initial Configuration
layout: default
description: Configuring settings after installation
weight: 25
status: In progress
---

# General Instruction

These settings will configure your installation for your environment.

## Adding ontologies

The detailed process of submitting ontologies is described in the <a href="../../ontologies/submitting_ontologies">Submitting Ontologies</a> section
of this manual.

###

To start, you can add an ontology using the OntoPortal Admin User at `http://{ip_address_of_appliance}/ontologies/new`.

_why does this require the admin user?_

### Enabling automated ontology parsing

The ncbo_cron project is configured to automatically process new ontologies every 5 minutes To enable the schedule, do the following:

_To be provided._

## Enable emails

To enable emails for lost passwords, notes, and ontology processing, 
you need to provide a valid mail server (smtp) configuration. 
The configuration should be provided in the /srv/ncbo/ontologies_api/current/config/environments/production.rb file.

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
go to the <a href="../registration">Registration Process</a> step 
for detailed instructions.
