---
title: Annotator Management
layout: default
summary: Operations on the solr search index
status: Preliminary
nav_order: 4
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/annotator_management
---

# Annotator Management

Reference the <a href="{{site.baseurl}}/docs/devlopers-docs/global_architecture">Architecture</a> page 
for a diagram of the OntoPortal system components.

See major section below for AnnotatorPlus information.

## Basic operations

The annotator in OntoPortal analyses text files and 
provides matching concepts for strings in the text file.
To perform this task, the annotator pre-parses every ontology as it is submitted,
pulling out strings that are appropriate for annotation 
and putting them into a dictionary.
When a user runs the annotator, it uses mgrep to find strings in the dictionary and
look up the corresponding class information.

## Technical details

* When each ontology is submitted, it is parsed and the cache and dictionary files are updated
  * First the annotator cache is created in Redis (localhost:6379), 
  * Then the dictionary.txt file is created from the annotator cache
* To annotate text, the Annotator ruby lib (https://github.com/ncbo/ncbo_annotator):
  * The annotator calls mgrep on port 5555 
  * Mgrep retrieves the mgrep ID (first column) from /srv/ontoportal/data/mgrep/dictionary/dictionary.txt 
  * Redis use the mgrep ID to retrieve the class URI and other data (PREF or SYN, ontology URI)

## Operations

### Update the cache and dictionary

#### Using a Redis prefix

When caching data about a concept Redis use a prefix. 
This allows the cache to be rebuild from scratch using secondary prefix without interrupting the Annotator service using primary prefix.

To get the prefix used by the annotator in Redis:
```
[ontoportal@appliance ~]$ redis-cli get current_instance
"c1:"
```

To change the prefix used by the annotator in Redis:
```
[ontoportal@appliance ~]$ redis-cli set current_instance "c2:"
```

#### Totally clear the cache (optional)
```diff
! this section needs review
! manually clearing cache is absolutley not nessesary because it can be cleared with `--remove-cache' during cache generation.
! it could be useful for purging unneeded secondary caches to reduce memory utilization. 
! to clear cache is it sufficient to remove c1:terms:* or do we need to clear c1:*?
! if we remove c1:* then we would need to re-create current_instance which adds extra step 
```
Clearing the cache is not required each time, 
but it can be useful if you have old annotations 
(derived from concepts from deleted submissions) that won't go away.

```
[ontoportal@appliance ~]$ redis-cli get current_instance
"c1:"
[ontoportal@appliance ~]$ redis-cli --scan --pattern c2:* | xargs redis-cli del
(integer) 129
```
Clearing the cache will also delete the "current_instance", so you will have to set it:
```
[ontoportal@appliance ~]$ redis-cli set current_instance "c1:"
OK

```

### Set up configuration files
```diff
! This section needs review 
```
Running the generate cache cron job will create new entries in Redis 
using the prefix defined in the config file with `annotator_redis_alt_prefix`

The locations of the configuration files are:
* /srv/ncbo/ncbo_cron/config/appliance.rb
* /srv/ncbo/ontologies_api/current/config/environments/appliance.rb

_please review/explain the following (is it code to put into one of the files above?)_

To generate the cache on a new "alt" prefix while continuing to annotate 
with the prefix defined in Redis current_instance:

```
Annotator.config do |config|
  config.annotator_redis_prefix  = ""
  config.annotator_redis_alt_prefix  = "c1:"
```

### Generate the Redis cache and dictionary for all ontologies
```diff
! This section needs review 
```
The following ncbo_cron job will generate the annotator cache in Redis, 
then generate the dictionary used by mgrep (in `/srv/ontoportal/data/mgrep/dictionary/dictionary.txt`).

Be careful! It is using the _annotator_redis_alt_prefix_ to generate the cache, 
but the Redis _current_instance_ to generate the dictionary.
So if you are doing a total refresh of the cache and dictionary 
(after a flushall for example) 
you will have to define the same prefix in Redis current_instance and in config.annotator_redis_alt_prefix.

Then run the following command from the ncbo_cron project (`/srv/ontoportal/ncbo_cron`):

```
[ontoportal@appliance ncbo_cron]bin/ncbo_ontology_annotate_generate_cache -a -r -d -l logs/all_cache.log
```

It will generates an entry in Redis like this : `c1:term:-1762481778059933889`. 
To check for it in Redis:
```
[ontoportal@appliance ~]$ redis-cli keys c1:term:*
  1) "c1:term:-6548957943476862587"
  2) "c1:term:-2190092711777781258"
  3) "c1:term:-8823641121882305483"
```

Restart mgrep with `sudo systemdctl restart mgrep` or do a `sudo oprestart` to restart the whole stack

The annotator should be updated!

#### Details about the generate cache options

The ncbo_cron job `ncbo_ontology_annotate_generate_cache` can be run with different options:

`-r` or `--remove-cache`
Reset cache to scratch (empty the cache). **Do not** use the -r attribute when generating cache for individual ontologies, as it will delete the entire cache used by the Annotator and replace it with a new one that will only contain the given ontologies.

`-a` or `--all-ontologies`
To generate the cache for all ontologies : run the process on the `annotator_redis_alt_prefix`

`-o STY,SNMI`
Generate the cache only for the specified ontologies : run the process on the annotator_redis_prefix

`-d` or `--generate-dictionary`
Also re-generate the dictionary for the terms prefixed by current_instance. This does the same job as the `ncbo_ontology_annotate_generate_dictionary` ncbo_cron job.


### Generate the dictionary only

To generate the dictionary from the Redis cache (terms prefixed with Redis current_instance):
```diff
! This section needs review 
```
```
/srv/ontoportal/ncbo_cron/bin/ncbo_ontology_annotate_generate_dictionary
```

## Troubleshooting the Annotator

### Check which dictionary mgrep is using

Restart mgrep and run it:

```
ps -ef | grep mgrep
```

It should give something like:

```
mgrep    27924     1  0 Jan27 ?        00:00:00 /usr/local/mgrep-4.0.2/mgrep --port=55555 -f /srv/mgrep/mgrep-55555/dict -w /usr/local/mgrep-4.0.2/word_divider.txt -c /usr/local/mgrep-4.0.2/CaseFolding.txt
```

### Run queries on mgrep

You can run queries against the mgrep directly, using a telnet connection to the mgrep server

```
telnet localhost 55555
  ANY entity
```

It should return something like this (if the entity is cached for the annotator, 
which it should be since it is in the STY ontology):

```
1882193402596741431	2	7	entity
```

# AnnotatorPlus

## Background

The AnnotatorPlus is an Agroportal/SIFR service deployed as a proxy 
on the OntoPortal system in order to serve AnnotatorPlus annotations. 
It runs as a servlet on Tomcat 7.

The core services are provided by http://services.data.bioportal.lirmmr.fr.

## Bioportal Deployment

```diff
! This section needs review to confirm its accuracy (services included in 1 & 3?)
```

* The AnnotatorPlus is found at http://{my-appliance-hostname}/annotatorplus
* The API is found at http://{my-appliance-hostname}:8080/annotatorplus
 
Note that the AnnotatorPlus documentation has not been updated in the OntoPortal online documentation page at http://{my-appliance-hostname}:8080/documentation.

There is more detailed documentation in the [publication supplement](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5972606/bin/bty009_supplement_bioinf-2017-1427.r2-3.pdf)  which is pointed to by the [main paper about this capability](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5972606/).
