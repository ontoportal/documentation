---
title: ncbo-cron Reference
layout: default
summary: Advanced information about ncbo-cron
status: Preliminary
nav_order: 9
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/ncbo_cron
---

# Introduction

This is an advanced reference document on the ncbo-cron utility.

# Debug Cron Job

* The code is deployed to /srv/ontoportal/ncbo_cron. 
* There is a log for the scheduler under logs/scheduler.log. 
  * Each ontology gets its own log under the ontology’s repo folder,
  * /srv/ontoportal/data/repository/STY/1/STY_parsing.log. 
  * This file name is output to the scheduler.log file when parsing starts.
* Useful log file greps:

```
# get a list of new ontology submissions
grep 'new submission' /srv/ontoportal/ncbo_cron/logs/scheduler-pull.log
# get a list of errors
grep 'ERROR' /srv/ontoportal/ncbo_cron/logs/scheduler-pull.log
# get a list of errors with 20 lines of traceback for each
grep -A20 'ERROR' /srv/ontoportal/ncbo_cron/logs/scheduler-pull.log
```
# Check processing queue

To show cron queued jobs:
`bundle exec bin/ncbo_cron --view-queue`

Alternatively you can check parseQueue key directly in redis:

```
redis-cli hgetall parseQueue
1) "sub:http://data.bioontology.org/ontologies/STY/submissions/1"
2) "{\"process_rdf\":true,\"index_search\":true,\"index_properties\":true,\"run_metrics\":true,\"process_annotator\":true,\"diff\":true}"
```
# Run ncbo-cron jobs

## Default production job

The production scheduler start command is something like:

```
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "00 17 *  * 4" -w "00 * * * *"
```

This does the following operations:
* Pull runs every 4 hours at 30 min.
* Flush of the graphs runs every friday at 5pm.
* warms up long running queries every hour at 00 min.

See below for additional ncbo-cron invocations.

By default `ncbo_cron` will not process UMLS ontologies. To enable UMLS processing use `--enable-umls`. This option can trigger heavy parsing so it should be used with care.

## More information about running ncbo-cron

```
# See script to run the scheduler as a daemon in the bin folder:
/var/lib/ncbo-deployer/ncbo_cron/bin/ncbo_cron --help
#
# Only run it as the ncbo-deployer user.
# The option to stop the daemon is -k
# The startup invocation is more complicated; try search the ncbo-deployer user’s history for any
# command with 'ncbo_cron -d' in it (that’s the daemonize option).
#
#
./bin/ncbo_cron --help
(LD) >> Using rdf store ncboprod-4store1:8080
(LD) >> Using search server at http://ncboprod-solr1.stanford.edu:8080/solr/
(LD) >> Using HTTP Redis instance at ncboprod-redis2:6380
(LD) >> Using Goo Redis instance at ncboprod-redis1:6380
(LD) >> Enable SPARQL monitoring with cube ncbo-cube1:1180
Using cube options in Goo {:host=>"ncbo-cube1", :port=>1180}
(AN) >> Using ANN Redis instance at ncboprod-redis1:6379
ncbo_cron - This will run a scheduled job for NCBO-related processing
Usage: ncbo_cron [-p port] [-P file] [-d] [-k]
	   ncbo_cron --help
-p, --port PORT           Specify port
						  (default: )
-d, --daemon              Daemonize mode
	--log FILE            Logfile for output
-k, --kill [PORT]         Kill specified running daemons - leave blank to kill all.
-u, --user USER           User to run as
-G, --group GROUP         Group to run as
-P, --pid FILE            save PID in FILE when using -d option
						  (default: ./bin/ncbo_cron.pid)
-h, --redis-host HOST     redis host (for shared locking)
						  (default: localhost)
-p, --redis-port PORT     redis port (for shared locking)
						  (default: 6379)
-m, --minutes MIN         minutes between process queue checks (override seconds)
-s, --seconds SEC         seconds between process queue checks
-c, --pull-cron SCHED     cron schedule for ontology pull
-l, --log-level LEVEL     set the log level (debug, info, error)
						  (default: info)
	--disable-processing  disable ontology processing
	--disable-pull        disable ontology pull
	--disable-flush       disable flush archive class graphs
-v, --view-queue          view queued jobs
-a, --add-submission ID   submission id to add to the queue
	--console             REPL for working with scheduler
-f FSCHED,                Delete class graphs of archive submissions
	--flush-old-graphs
-?, --help                Display this usage information.
```

## Example ncbo-cron Invocations

```
cd /var/lib/ncbo-deployer/ncbo_cron
# Then run commands like the following:
bin/ncbo_cron -a "http://data.bioontology.org/ontologies/WB-BT/submissions/88"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -f "00 17 *  * 4"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "00 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "00 17 *  * 4"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "00 17 *  * 4" -m 1
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "01 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "10 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "21 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "30 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "39 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "41 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "43 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "45 17 11 10 *"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug -f "55 * * * *"
bin/ncbo_cron -d -c "30 */4 * * *" -m 1 -h ncbo-stg-app-21 -l debug
bin/ncbo_cron -d -c "57 * * * *" -h "ncboprod-redis1" -l debug
bin/ncbo_cron -d --disable-processing --disable-pull -h "ncboprod-redis1" -l debug -f "38 21 * * 5"
bin/ncbo_cron -d --disable-pull -h "ncboprod-redis1" -l debug -f "41 7 * * 5"
bin/ncbo_cron -d --disable-pull -h "ncboprod-redis1" -l debug -f "44 19 * * 5"
bin/ncbo_cron -h
bin/ncbo_cron -h "ncboprod-redis1" --console
bin/ncbo_cron -h "ncboprod-redis1" --console
bin/ncbo_cron -k
bin/ncbo_cron -q
bin/ncbo_cron -q -h ncboprod-redis1
bin/ncbo_cron -q -h ncboprod-redis1 | grep process_rdf | wc -l
bin/ncbo_cron -q -h ncboprod-redis1 | wc -l
bin/ncbo_cron -v 
bin/ncbo_cron -v -h ncboprod-redis1
bin/ncbo_cron -a "http://data.bioontology.org/ontologies/WB-BT/submissions/88"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -f "00 17 *  * 4"
bin/ncbo_cron -d -c "30 */4 * * *" -h "ncboprod-redis1" -l debug
```

# ncbo-cron scripts

These scripts should be considered experimental until this text is removed. 
Please use them at your own risk.

```diff
- Evaluate likely operational state of these scripts
```

## Connecting to ncbo-cron

After connecting to your system with ssh, login as ncbo-deployer and go to the ncbo_cron project.

```
    sudo su - ncbo-deployer
    cd /srv/ncbo/ncbo_cron/
```
    
For easy access to above, start a `screen` session after the ssh connection, 
then use `screen -r` to reconnect to the same login session every time.

## The ncbo-cron scripts

These scripts work on the most recent submission; not necessarily the latest 'ready' submisson.


### Read-only scripts
  
* Script to run diagnostics on all ontologies (most recent submissions)

```
# Creates output files in logs/submission_status*
./bin/ncbo_ontology_diagnostics.sh
```

* Report format for ontologies

```
./bin/ncbo_ontology_format -h
```

* Generic ontology inspector 

```diff
! This script was used by the diagnostics script; it was a work in progress, as of March 2014.
```

./bin/ncbo_ontology_inspector -h

* Create/Update a ticket ontology submissions that fail to parse

```diff
- Not clear whether this script is currently suitable..
```

1. Log into ncbo_cron system (stage or prod) and run:
        
```
$ sudo su - ncbo-deployer
$ cd /srv/ncbo/ncbo_cron
$ bundle exec ./bin/ncbo_ontology_inspector -p submissionStatus -o {ONT_ACRONYM} --get_parsing_logs
```
  
Notes:
* the last option '--get_parsing_logs' will retrieve the logs and post them to a JIRA issue automatically; the issue summary/title will be: "{ONT_ACRONYM} submission has ERROR_RDF"; the attachments and comments will indicate what submission fails to parse (and whether it is in stage or prod).
* the automated JIRA update will reopen a resolved or closed issue (it will not create a new issue every time an ontology has a submission that fails to parse).
* this option is not enabled by default in the daily diagnostics script; it could be, but if it were enabled it could duplicate data in JIRA every day until the ERROR_RDF status is fixed
        
2. Find the relevant JIRA issue by typing 'submission has ERROR_RDF' into the 'Quick Search' field at top right, i.e.

```
https://bmir-jira.stanford.edu/issues/?jql=summary%20~%20%22submission%20has%20ERROR_RDF%22
```

The issue will contain comments and parsing logs (reported by the Jenkins user)

## Read-Write scripts

* Process an ontology 

```
./bin/ncbo_ontology_process -h
```

* Annotate an ontology

```
./bin/ncbo_ontology_annotate_generate_cache -h
```

* Calculate and save ontology index in SOLR (see option to index all ontologies)

```
./bin/ncbo_ontology_index -h
```

* Calculate and save ontology metrics

```
./bin/ncbo_ontology_metrics -h
```

* Generate a new annotation dictionary file

```
./bin/ncbo_ontology_annotate_generate_dictionary -h
```
