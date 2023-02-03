---
title: Managing Ontologies
layout: default
summary: How to manage your repository's ontologies
status: In Progress
nav_order: 5
parent: Managing Ontologies in OntoPortal
grand_parent: Administration Guide
permalink: /administration/ontologies/managing_ontologies
---

# Managing Ontologies 

## Using the Administration Console

If you are logged in as an administrator,
you will see an Admin link to the left of your profile information.
clicking on the Admin link takes you to the OntoPortal Administration Console.

Within that page, click on the Ontology Administration tab to work with ontologies.

Additional information about this capability is presented in the 
Ontology Administration tab of the Administration Console page.
See <a href="{{site.baseurl}}/administration/ontologies/troubleshooting_submissions">Troubleshooting Submissions</a> for more information.

## Organizing ontologies in OntoPortal

### How do I add or change slices in OntoPortal?

A slice presents a view of OntoPortal that only contains
ontologies tagged with that slice.

There is no user interface to perform this task. 
Slices can be added using a console 
after logging into the Appliance as the `ontoportal` user.

From the bash shell:

```
cd /srv/ncbo/ncbo_cron
bin/ncbo_cron --console
# once in the ruby console:
ont1 = LinkedData::Models::Ontology.find("ONT1").first
ont2 = LinkedData::Models::Ontology.find("ONT2").first
slice = LinkedData::Models::Slice.new
slice.name = "My Slice",
slice.description = "This is my custom slice",
slice.acronym = "my_slice",
slice.ontologies = [ont1, ont2]
slice.save
```

### How do I add or change categories or groups for ontologies?

There is no user interface to perform this task. 
Categories and groups can be added using a console 
after logging into the Appliance as the ontoportal user.

use ncbo_cron rake task:
```
cd /srv/ontoportal/ncbo_cron
bundle exec rake group:create['UMLS','Unified Medical Language System']
```
or use ncbo_cron console:

```
cd /srv/ontoportal/ncbo_cron
bin/ncbo_cron --console
# once in the ruby console:
category = LinkedData::Models::Category.new
category.name = "My Category"
category.acronym = "MY_CAT"
category.save
group = LinkedData::Models::Group.new
group.name = "My Group"
group.acronym = "MY_GRP"
group.save
```

### How do I add an ontology to a group?

There is no user interface to perform this task.

```diff
! Why does GOO cache have to be enabled?
```

The GOO CACHE must be enabled in settings.

```
po = LinkedData::Models::Ontology.find("PO").first
po.bring_remaining
obo_f = LinkedData::Models::Group.find("OBO_Foundry").first
group = po.group
group = group.dup
group << obo_f
po.group = group
po.valid?
po.save
```

## Deleting an ontology

You can delete an ontology on the Admin page (as the admin user). 
Click on the row (or rows) of the ontology you want to delete,
select the Group Action "Delete ontology", and press the Execute button.

Deleting also can be done using a console 
after logging into the Appliance as the ontoportal user.

```diff
! Verify these instructions
```

From the bash shell:

```
cd /srv/ncbo/ncbo_cron
bin/ncbo_cron --console
# once in the ruby console:
ontology = LinkedData::Models::Ontology.find("MY_ONTOLOGY_ACRONYM").first
ontology.delete
```

# Working with caches

## HTTP caching

### Clear entire cache

Go to the administrator page and click on the button Clear HTTP Cache.

OR

Go to an ontologies_api project and run:

```
rake cache:clear:production
```

OR

```
rake cache:clear:development
```

### Clear cache for specific objects

Each model gets cached by type (collection) and in segments (by ontology, for example).

Here is an example structure for the cache:

- collection: ontologies
  - segment: SNOMEDCT
    - related to segment SNOMEDCT:
      - classes
      - submissions
      - notes

Invalidating the cache is a cascading action, 
meaning that higher-level caches will get invalidated automatically when invalidating lower-level caches. 
For example, invalidating the SNOMEDCT ontology instance will also invalidate the ontologies collection cache (the list of all ontologies).

#### Example of cache invalidation

This will clear the ontology metadata and class objects for a given ontology (RADLEX).

```ruby
radlex = LinkedData::Models::Ontology.find("RADLEX").first
radlex.cache_invalidate
cls = radlex.latest_submission.roots.first
cls.submission.bring(:ontology)
cls.cache_invalidate
```
