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
- Check: Many of these services may now be controlled with 
	sudo systemctl stop/start <service>
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











