---
title: Routine Administrative Operations
layout: default
summary: Performing routine tasks in the OntoPortal system
status: In progress
nav_order: 2
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/routine_operations
---

# Routine Operations

## Administrative Web User Interface

### Troubleshoot ontology submissions: Ontologies tab

See the [Troubleshooting Submissions]({{site.baseurl}}/administration/ontologies/troubleshooting_submissions) page
for detailed instructions on troubleshooting ontology submissions.

See the [Managing Ontologies]({{site.baseurl}}/administration/ontologies/managing_ontologies) page 
to learn more about basic operations like updating ontology metadata, deleting ontologies,
and reparsing ontologies.

### Caching

#### How can I clear the memcached-based UI cache?

If you are logged in as the admin user, simply visit http://{your_appliance_ip_or_domain_name}/admin and click the "Flush Memcache" button. There should be a response indicating success or failure.

## Reset user's API key

OntoPortal provides a Rake task to easily reset the API key of a user (if it has been exposed or abused).

Optionally view the list of available Rake tasks with their descriptions:

```
$ cd /srv/ontoportal/ncbo_cron
$ bundle exec rake -T
rake cache:clear                                         # Clear HTTP cache (redis and Rack::Cache)
rake group:add_ontology[group_acronym,ontology_acronym]  # Add ontology to a group
rake group:create[acronym,name]                          # Create a new ontology group
rake test                                                # Run tests
rake user:adminify[username]                             # Add administrator role to the user
rake user:apikey:get[username]                           # get APIKEY for the user
rake user:apikey:reset[username,apikey]                  # reset APIKEY for the user to random value or to specified value if API key is provided
rake user:artifacts[username]                            # Show all artifacts administrered by the user
rake user:create[username,email,password]                # Create a new user
rake user:resetpassword[username]                        # Reset password to a random value for the user
rake user:resetroles[username]                           # Reset all roles to LIBRARIAN for the user
```

Reset a user's API key to a randomly generated value: 

```
$ cd /srv/ontoportal/ncbo_cron
$ bundle exec rake user:apikey:reset[username]
```

OntoPortal uses UUID for API keys which can be generated with `uuidgen` command line untility and can be explicitly set when reseting API keys:

```
$ uuidgen
cf304210-4715-424a-a48d-7ec04fc8924f
$ cd /srv/ontoportal/ncbo_cron
$ bundle exec rake user:apikey:reset[username,cf304210-4715-424a-a48d-7ec04fc8924f]
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










