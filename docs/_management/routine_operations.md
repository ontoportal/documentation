---
title: Routine Administrative Operations
layout: default
description: Performing routine tasks in the OntoPortal system
weight: 10
status: In progress
---

# Routine Operations

## Administrative Web User Interface

### Troubleshoot ontology submissions: Ontologies tab

See the [Troubleshooting Submissions](../../ontologies/troubleshooting_submissions) page
for detailed instructions on troubleshooting ontology submissions.

See the [Managing Ontologies](../../ontologies/managing_ontologies) page 
to learn more about basic operations like updating ontology metadata, deleting ontologies,
and reparsing ontologies.

### Caching

#### How can I clear the memcached-based UI cache?

If you are logged in as the admin user, simply visit http://{your_appliance_ip_or_domain_name}/admin and click the "Flush Memcache" button. There should be a response indicating success or failure.

## Reset user's API key

To reset the API key of a user (if it has been exposed or abused):
```
cd /srv/ontoportal/ncbo_cron
bundle exec rake user:apikey:reset[username,apikey]    # reset APIKEY for the user to random value or to specified value if API key is provided
```

## Grant administrative privileges to a BioPortal user

```
cd /srv/ontoportal/ncbo_cron
bundle exec rake user:adminify[username]
```


## Stopping and starting services

```diff
- Confirm and fix: This is likely outdated.
! Many of these services may now be controlled with 
   _sudo systemctl stop/start <service>_
```










