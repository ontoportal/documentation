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

If a specific API key is desired, use an IRB session to generate a UUID (OntoPortal uses UUIDs for API keys):

```
$ irb
irb(main):001:0> require 'securerandom'
=> true
irb(main):002:0> SecureRandom.uuid
=> "8aae101c-fabe-4215-9f12-cdac288f17c5"
```

... and then use the Rake task with the newly generated UUID:

```
$ cd /srv/ontoportal/ncbo_cron
$ bundle exec rake user:apikey:reset[username,8aae101c-fabe-4215-9f12-cdac288f17c5]
```

## Grant administrative privileges to a BioPortal user

```diff
! Review for accuracy -- first cron is ncbo_cron? (how is this done? clarify language?)
```

run `bundle exec rake user:adminify[username]` on ncbo_cron system

Manual way:

This documentation assumes that you've changed to the ncbo-deployer user ("sudo su - ncbo-deployer") on the system that performs parsing.

```
cd /srv/ncbo/ncbo_cron/

# Start a console session
bin/ncbo_cron --console

# Get an instance of the user
user = LinkedData::Models::User.find("cpabelic").first
user.bring_remaining

# Sanity check that you have a valid user
user.valid?

# Get an instance of the administrator role
role = LinkedData::Models::Users::Role.find("ADMINISTRATOR").first
role.bring_remaining

# Sanity check that you have a valid role
role.valid?

# Add the administrative role to the user's list of roles
user_roles = user.role
user_roles = user_roles.dup
user_roles << role
user.role = user_roles

# Sanity check to make sure role was added properly
user.valid?

# Don't forget to save...
user.save
```

## Stopping and starting services

```diff
- Confirm and fix: This is likely outdated.
! Many of these services may now be controlled with 
   _sudo systemctl stop/start <service>_
```

### The User Interface (front end)

The two commands for this (your installation commands may be different) are:

```
sudo service nginx restart
sudo service unicorn restart
```

### Redis

```
service redis-<instance> stop
service redis-<instance> start
```
where `<instance>` is annotator, goo_cache, resolver, http_cache

Data dump is in `/srv/redis/<instance>`.











