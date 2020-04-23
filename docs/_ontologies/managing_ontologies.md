---
title: Managing Ontologies
layout: default
description: How to manage your repository's ontologies
weight: 40
status: In Progress
---

# Managing Ontologies 

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

```diff
* This answer needs review to confirm its accuracy
```diff

From the bash shell:

```
cd /srv/ncbo/ncbo_cron
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

How do I add an ontology to a group?

There is no user interface to perform this task.

```diff
! Why does GOO cache have to be enabled?
```diff

#GOO CACHE must be enabled in settings.
po = LinkedData::Models::Ontology.find("PO").first
po.bring_remaining
obo_f = LinkedData::Models::Group.find("OBO_Foundry").first
group = po.group
group = group.dup
group << obo_f
po.group = group
po.valid?
po.save

## Deleting an ontology

```diff
! Verify these instructions
```

You can delete an ontology on the Admin page (as the admin user). 
Click on the row (or rows) of the ontology you want to delete,
select the Group Action "Delete ontology", and press the Execute button.

Deleting also can be done using a console 
after logging into the Appliance as the ontoportal user.

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

Invalidating the cache is a cascading action, meaning that higher-level caches will get invalidated automatically when invalidating lower-level caches. For example, invalidating the SNOMEDCT ontology instance will also invalidate the ontologies collection cache (the list of all ontologies).

#### Example of cache invalidation

This will clear the ontology metadata and class objects for a given ontology (RADLEX).

```ruby
radlex = LinkedData::Models::Ontology.find("RADLEX").first
radlex.cache_invalidate
cls = radlex.latest_submission.roots.first
cls.submission.bring(:ontology)
cls.cache_invalidate
```
