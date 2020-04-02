---
title: Configuring Ontology Permissions
layout: default
description: How to manage access to your repository's ontologies
weight: 30
status: Preliminary
---

# Configuring Ontology Permissions 

## Via the User Interface

To restrict ontology downloads via the UI,
This line of code should be modified 
to include the acronyms of the ontologies 
for which you want to restrict downloads:
```
https://github.com/ncbo/bioportal_web_ui/blob/master/app/views/ontologies/_submissions.html.haml#L32
```
This will prevent the “Downloads” column in the Submissions table 
from appearing on ontology summary pages.

## Via the REST endpoint

If you want to restrict downloads via the REST endpoint, you need to modify your environment configuration files (e.g., production.rb, staging.rb, etc.) in your ontologies_api project. The production.rb file should contain a `config.restrict_download` property -- there’s an example of what it should look like in the sample configuration file in GitHub:
```
https://github.com/ncbo/ontologies_api/blob/master/config/environments/config.rb.sample#L38
```