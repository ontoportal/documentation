---
title: Solr Reference
layout: default
description: Advanced information about Solr
weight: 110
status: In progress
---

# Introduction

This is an advanced reference document on the solr database.

```diff
- Confirm these instructions are still appropriate for OntoPortal
```

## Re-installing solr

This instruction covers a local installation of a multi-core Solr environment.

### 1. Install Solr with Homebrew:

```
$ brew update
$ brew install solr
```

### 2. Create core directories:

```
$ cd /usr/local/Cellar/solr/<solr version>/server/solr
$ mkdir term_search_core1
$ mkdir prop_search_core1
```

### 3. Copy default configuration directories:

```
$ cp -a /usr/local/Cellar/solr/<solr version>/server/solr/configsets/_default/conf /usr/local/Cellar/solr/<solr version>/server/solr/term_search_core1/
$ cp -a /usr/local/Cellar/solr/<solr version>/server/solr/configsets/_default/conf /usr/local/Cellar/solr/<solr version>/server/solr/prop_search_core1/
```

### 4. Copy the configuration files (replacing the default ones):

```
$ cd /usr/local/Cellar/solr/<solr version>/server/solr/term_search_core1/conf
```
Copy all files from the Github repo `ontologies_linked_data/config/solr/term_search`, overwriting any existing files.

```
$ cd /usr/local/Cellar/solr/<solr version>/server/solr/prop_search_core1/conf
```
Copy all files from the Github repo `ontologies_linked_data/config/solr/property_search`, overwriting any existing files.

### 5. Create `core.properties` files for each core:

```
$ cd /usr/local/Cellar/solr/<solr version>/server/solr/term_search_core1
$ touch core.properties
$ cd /usr/local/Cellar/solr/<solr version>/server/solr/prop_search_core1
$ touch core.properties
```
These files remain empty, no need to populate them.

### 6. Create secondary cores:

```
$ cd /usr/local/Cellar/solr/<solr version>/server/solr/
$ mkdir term_search_core2
$ cp -r term_search_core1/* term_search_core2/
$ mkdir prop_search_core2
$ cp -r prop_search_core1/* prop_search_core2/
```

### 7. Copy `solr.xml` file to Solr home directory:

```
$ cd /usr/local/Cellar/solr/<solr version>/server/solr/
```
Copy or replace `solr.xml` with our custom file found in the Github repo `ontologies_linked_data/config/solr/`.

### 8. Start Solr server:

```
$ solr start -f
```

### 9. Verify your Solr installation:

* Navigate to [http://localhost:8983/solr/#/](http://localhost:8983/solr/#/)
* Under "Core Selector" select `term_search_core1`
* Click on "Files" menu on the left and make sure that `solrconfig.xml` and `schema.xml` correctly reflect the custom files
* Repeat the same check for core `term_search_core2`, `prop_search_core1`, and `prop_search_core2`.

```diff
! In bullet 3 of step 9, what custom files? Only 1 file was customized, or do we mean all the copied over files?
```



