---
title: Managing Ontologies
layout: default
description: How to manage your repository's ontologies
weight: 40
status: Preliminary
---

# Managing Ontologies 

## Organizing ontologies in OntoPortal

### How do I add or change categories or groups?

There is no user interface to perform this task. 
Categories and groups can be added using a console 
after logging into the Appliance as the ontoportal user.

# from the bash shell:
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

### How do I add or change slices?

A slice presents a view of OntoPortal that only contains
ontologies tagged with that slice.

There is no user interface to perform this task. 
Slices can be added using a console 
after logging into the Appliance as the `ontoportal` user.

# from the bash shell:
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

## Deleting an ontology

_verify_

You can delete an ontology on the Admin page (as the admin user). 
Click on the row (or rows) of the ontology you want to delete,
select the Group Action "Delete ontology", and press the Execute button.

Deleting also can be done using a console 
after logging into the Appliance as the ontoportal user.

# from the bash shell:
```
cd /srv/ncbo/ncbo_cron
bin/ncbo_cron --console
# once in the ruby console:
ontology = LinkedData::Models::Ontology.find("MY_ONTOLOGY_ACRONYM").first
ontology.delete
```

