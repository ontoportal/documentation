---
title: ncbo-cron Reference
layout: default
description: Advanced information about ncbo-cron
weight: 100
status: In progress
---

# Introduction

This is an advanced reference document on the ncbo-cron utility.

# Debug Cron Job

* The code is deployed to /srv/ncbo/ncbo_cron. 
* There is a log for the scheduler under logs/scheduler.log. 
  * Each ontology gets its own log under the ontology’s repo folder,
  * /srv/ncbo/share/env/prod/repository/GO/1307/gene_ontology_edit.obo_parsing.log. 
  * This file name is output to the scheduler.log file when parsing starts.
* Useful log file greps:

```
# get a list of new ontology submissions
grep 'new submission' /var/lib/ncbo-deployer/ncbo_cron/logs/scheduler-pull.log
# get a list of errors
grep 'ERROR' /var/lib/ncbo-deployer/ncbo_cron/logs/scheduler-pull.log
# get a list of errors with 20 lines of traceback for each
grep -A20 'ERROR' /var/lib/ncbo-deployer/ncbo_cron/logs/scheduler-pull.log
```

# Run Cron Job

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


## Example Cron Invocations

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