---
title: Triple Store Rebuild Reference
layout: default
summary: Advanced information about rebuilding the triple store
status: Pending
nav_order: 13
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/reference_triple_store_rebuild
---

# Introduction

This is an advanced reference document on rebuilding the triple store database.

```diff
- Some of this information is outdated, an update is needed. 
+ This document is provided to provide an outline to those interested.
``` 

## ncbo-cron

Stop all ncbo-cron jobs in your system. 
Make sure nobody restarts them during the process of rebuilding the RDF store.

## Purge spam ontologies

It is a good idea to purge spam ontologies/notes/projects/users before reprocessing everything since those ontologies should be deleted anyway.

You can perform this step after you start generating the new UMLS RDF files,
if you plan to do that step.

## Generate and upload new UMLS RDF files

The UMLS steps are only required if we have a new version of UMLS.

See [Handling UMLS]({{site.baseurl}}/administration/ontologies/handling_umls) section for
directions on generating and uploading UMLS ontologies using umls2rdf.

Note 1: This step takes a lot of time, during which you can perform
useful maintenance.

Note 2: When new UMLS ontologies are going through the OWL parser,
you will see a lot of logging.

## Validate UMLS ontologies

Go to several UMLS ontology summary pages (for example, SNOMED and NCBITAXON) 
and make sure that there are new submissions 
with status `upload`, and with their new version properly recorded.

## Create new 4store instance

If you do not want to remove your existing triple store,
perform this step on a separate copy of your Appliance.
We will call this the 'staging' system.

* Location: `/srv/ncbo/share/scratch/metadata/`
* User: `4store`

### Steps

1. Run `reset_rebuild_kb.sh`
2. `4s-size rebuild_kb` should return stats with all segments set to 0.

## Metadata migration

* Location: `/srv/ncbo/share/scratch/metadata/` 
* User: any

We will move the metadata from the production system 
to the newly created `rebuild_kb` 4store instance.

### Steps

1. Delete any `data` folder with previous metadata dump.
2. Run `./dump_metadata_graphs.sh` (on the production system)
3. Run `./restore_metadata_graphs.sh` (on the system with your rebuilt instance)
4. Make sure no errors were generated as part of the restore. 

For example, there could be RDF parsing errors.  
If errors are encountered, then after fixing them in your metadata_graphs file, you need to re-create the 4store instance you created under "Create new 4store instance' before you restore the metadata graphs in step 3 above.

If errors are found (example: 
`raptor error - Turtle URI error - illegal Unicode escape \u0020 in URI`
), find data files with errors using `grep -R u0020 data/*`.
 Replace the illegal characters in each of the file that contains them:
`sed -i 's/\\u0020/ /g' data/*/*/*`

Check Notes section for additional tips on how to deal with problematic metadata exports/imports

5. Start `4s-httpd` for `rebuild_kb` in port 8083 with:
   
```
4s-httpd -p 8083 -s-1 -D rebuild_kb
```
   
**NOTES** 
* It is better to start this in debug mode to easily kill it with `Ctrl-c`. 
* Start this process in a `tmux` o `screen` session to return to it later.

6. Test: go to `http://ncbostage-4store1:8083/status/` and make sure that has around 500K quads. It will grow overtime but not very quickly.

## Syncronise your file repository from production file repo

* host: `staging`
* User: `ncbo-deployer`
* Location: 

```diff
! This step's instructions are missing
```

## Reparse ontology content

```diff
- FIXME.  we no longer use ncbo_migration to reparse ontologies. The following section is outdated.
! New process involves using ncbo_cron to reparse all ontologies.
```

outdated content:

* Host: `ncboprod-parser1`
* Location: `/srv/ncbo/share/scratch/migrations/prd/ncbo_migration`
* User: `ncbo-deployer`

### Steps

First locally in a dev-box:
1. clear existing logs in ./logs and ./parsing
1. In master branch for project ncbo_migration: `git pull`
2. `bundle update`
3. Commit `Gemfile.lock`
4. push the lock file to master.

In the parsing box:

1. Pull the latest code. `git pull`
2. Pull the latest dependencies `bundle install --deployment`
3. Run `FLUSHALL` at the stage Goo redis instance dedicated to rebuilding KB `redis-cli -h localhost -p 6380 FLUSHALL`; also clear out logs in the parsing directory
4. Make sure config file (settings.rb) points to the sparql endpoint at `ncbostage-4store1:8083/`
 
 ```
 LinkedData.config do |config|
   config.goo_host           = "ncbostage-4store1"
 ```

5. Run `time bundle exec ruby workflows/reprocess.rb`

  **Note** This process takes approx. 7h make sure it runs in `screen` or `tmux` session. It will show progress as it goes.
   Press CTRL+d when script pauses with the following message. 
```
[ncbo-deployer@ncbo-prd-app-25 ncbo_migration]$ time bundle exec ruby workflows/reprocess.rb
(LD) >> Using rdf store ncbostage-4store1:8083
(LD) >> Using search server at http://ncbostage-solr1.stanford.edu:8080/solr/
(LD) >> Using HTTP Redis instance at ncbostage-redis2:6380
(LD) >> Using Goo Redis instance at ncbostage-redis1:6380
(LD) >> Enable SPARQL monitoring with cube ncbo-cube1:1180
Using cube options in Goo {:host=>"ncbo-cube1", :port=>1180}
(AN) >> Using ANN Redis instance at ncboprod-redis1:6379
Gathering ontologies of type all
Found 567 all ontologies

From: /srv/ncbo/share/scratch/migrations/prd/ncbo_migration/workflows/reprocess.rb @ line 41 :

    36: #acronyms.each do |acr|
    37: #  submissions << LinkedData::Models::Ontology.find(acr).first.latest_submission(status: :any)
    38: #end
    39: submissions = get_submissions(:all)
    40: 
 => 41: binding.pry
    42: puts "", "Parsing #{submissions.length} submissions..."
    43: pbar = ProgressBar.new("Parsing", submissions.length)
    44: FileUtils.mkdir_p("./parsing")
    45: submissions.each do |s|
    46:   s.bring_remaining

[1] pry(main)> 

Parsing 567 submissions...
```

6. The screen where the `4s-httpd` is running should start showing progress right away. The progress it shows is with the graph are being deleted/added to the new KB.
7. At the end there should be around 110M quads in the triple store.

note: Parsing logs are located at  '/srv/ncbo/share/scratch/migrations/prd/ncbo_migration/parsing'

## Restore REST mappings

* Host: staging
* Location: `/srv/ncbo/share/scratch/migrations/prd/ncbo_migration`
* User: `ncbo-deployer`

### Steps

1. `time bundle exec ruby ./workflows/restore_backup_mappings.rb`


## Perform quality assurance using staging UI.

### Steps

* Host: `ncbostage-4store1`
* User:  `4store`

#### Start the rebuilt KB instead of the existing ontologies_api KB
1. Make sure that 'ncbo_cron' process is stopped on ncbostage-parser1 server. 
2. Stop staging `ontologies_api` triple store KB.
    a. Exist 4store user and return to your own SSH user
    b. Run `sudo service 4s-httpd-ontologies_api stop`
3. Run sudo su - 4store
4. Stop `4s-httpd rebuild_kb` that listening in `8083` (just SSH to your original tmux/screen session on ncbostage-4store and hit Ctrl-C to stop the running server)
5. Start `rebuild_kb` in `8080` with:
	``4s-httpd -p 8080 -s-1 -D rebuild_kb`

#### Flush ALL caches (UI, Memcached, Goo, HTTP)
1. SSH to a REST endpoint server (ncbostage-rest2 or -rest3 or any existing REST server)
2. `cd /srv/ncbo/ontologies_api/current`
3. Flush Goo and HTTP caches: run `bundle exec rake cache:clear:staging` (can use your own SSH user)
4. Use BioPortal Admin UI to flush UI Memcached

#### QA UI using a browser
1. Check the number of ontologies and number of classes: these numbers should be a close match between production and staging
2. Browse 4 ontologies (representative of each format - OBO, OWL, UMLS). Suggested ontologies: SNOMEDCT, Disease Ontology, BRO, RADLEXand compare the class tree to what it is in production.
3. Browse to the mapping count pages and make sure they work.


#### Rename `rebuild_kb` KB to `ontologies_api` KB
1. If QA went fine then the `rebuild_kb` can be changed to `ontologies_api` in staging:
  a. Shutdown existing 4store `rebuild_kb` KB (Ctrl-C on `ncbostage-4store1`);  and make sure other KBs are stopped:  '4s-admin stop-stores rebuild_kb ontologies_api'
  b. SSH to 4store slave boxes. To find slave boxes, run `grep nodes /etc/4store.conf` on `ncbostage-4store1`. You should see an output similar to: `nodes = ncbo-stg-app-06;ncbo-stg-app-07;ncbo-stg-app-08;ncbo-stg-app-09`.
  c. On each of the servers, execute the following commands:
```
* sudo su - 4store
* cd /srv/4store/data/
* mv ontologies_api/ ontologies_api_old
* mv rebuild_kb/ ontologies_api
* sed -i 's/rebuild_kb/ontologies_api/g' ontologies_api/metadata.nt
```
2. Start ontologies_api KB on the staging server:
	a. SSH to staging system
	b. Run `sudo service 4s-httpd-ontologies_api start`

#### Synchronize Staging repo with Production
1. SSH to `ncbostage-parser1`
2. `sudo su - ncbo-deployer`
3. `/srv/ncbo/share/tools/scripts/reposync_staging.sh`


#### Move to Production

At this point move the staging data back to production.

## Switch Production 4store to the re-processed KB

### Steps

* Host:
* User:

```diff
! To be provided.
```

## Perform metrics calculation

* Host: `{my-appliance-hostname}`
* User: `ncbo-deployer`
* pwd:  `/srv/ncbo/ncbo_cron/`

run `bin/ncbo_ontology_metrics -a -l logs/UMLS_metrics.log` in a screen session 

In some cases this script can fail calculating metrics for some ontologies so it is nessesary to verify that metrics is calculated for all ontologies.  re-run the script if there is a large number of ontologies with missing metrics status or manually update metrics for those ontologies.  Missing metrics for any of the ontologies in the "ready" status will cause recommender service to fail untill it is fixed.

## Re-Index all ontologies

* Host: `ncboprod-parsers1`
* User: `ncbo-deployer`
* pwd: `/srv/ncbo/ncbo_cron`

reindex terms:
run `>./bin/ncbo_ontology_index -a -l logs/UMLS_reindex_terms.log` in a screen session

reindex properties:
run `bin/ncbo_ontology_property_index -a -l logs/UMLS_reindex_property.log`

Next you will need to swap solr cores

## Re-generate annotator cache

* Host: `ncboprod-parsers1`
* User: `ncbo-deployer`
* pwd: `/srv/ncbo/ncbo_cron`

See [Annotator Management]({{site.baseurl}}/administration/management/annotator_management) for details.

## NCBO-Cron

At this point after moving to production we can start the cron jobs in stage and productions.

# Issues Troubleshooting

## Issues with metadata export:

If script breaks with an error similar to the one below you need to check for bad submissions and delete them.
```
Running on prod platform
Retrieving umls ontologies ...
./bin/create_umls_submissions.rb:44:in `block in <main>': undefined method `umls?' for nil:NilClass (NoMethodError)
  from ./bin/create_umls_submissions.rb:38:in `each'
  from ./bin/create_umls_submissions.rb:38:in `<main>'
```

## Issues with metadata imports

https://github.com/ncbo/ontologies_api/issues/25
1. `<http://data.bioontology.org/metadata/authorProperty> <local:Joseph\u0020Romano> .`   
replace `<local:Joseph\u0020Romano>`   with   `<foaf:Person>`
2. `<local:A\u0020http://www.w3.org/2000/01/rdf-schema#label>` replace with `<local:www.w3.org/2000/01/rdf-schema#label>` 


## Issues with Puppet

Stop the puppet daemon so that it does not interfeire with the rebuild process.   (Puppet can start ncbo_cron process back up if it doesn't see it running.)

## Issues with indexing

Read logs and look for ERROR and take nessesary actions if nessesary.
