# Introduction

This is an advanced reference document on the ncbo-cron utility.

# Debug Cron Job

* The code is deployed to `/opt/ontoportal/ncbo_cron`.
* There is a log for the scheduler under `logs/scheduler.log`.
  * Each ontology gets its own log under the ontology's repo folder,
  * `/srv/ontoportal/data/repository/STY/1/STY_parsing.log`.
  * This file name is output to the `scheduler.log` file when parsing starts.
* Useful log file greps:

```
# get a list of new ontology submissions
grep 'new submission' /opt/ontoportal/ncbo_cron/log/scheduler-pull.log
# get a list of errors
grep 'ERROR' /opt/ontoportal/ncbo_cron/log/scheduler-pull.log
# get a list of errors with 20 lines of traceback for each
grep -A20 'ERROR' /opt/ontoportal/ncbo_cron/log/scheduler-pull.log
```

# Check processing queue

To show cron queued jobs:
`bundle exec bin/ncbo_cron --view-queue`

Alternatively you can check the `parseQueue` key directly in Redis:

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
* Flush of the graphs runs every Friday at 5pm.
* Warms up long-running queries every hour at 00 min.

See below for additional ncbo-cron invocations.

By default `ncbo_cron` will not process UMLS ontologies. To enable UMLS processing use `--enable-umls`. This option can trigger heavy parsing so it should be used with care.

## More information about running ncbo-cron

```
# See script to run the scheduler as a daemon in the bin folder:
#
# Only run it as the op-admin user.
# The option to stop the daemon is -k
# The startup invocation is more complicated; try searching the ncbo-deployer user's history for any
# command with 'ncbo_cron -d' in it (that's the daemonize option).
#
op-admin@demo:/opt/ontoportal/ncbo_cron$ bin/ncbo_cron --help
(LD) >> Using rdf store localhost:10035/repositories/ontoportal
(LD) >> Using term search server at http://localhost:8983/solr/term_search_core1
(LD) >> Using property search server at http://localhost:8983/solr/prop_search_core1
(LD) >> Using HTTP Redis instance at localhost:6380
(LD) >> Using Goo Redis instance at localhost:6381
(AN) >> Using ANN Redis instance at localhost:6379
(CR) >> Using Redis instance at localhost:6379
Usage: ncbo_cron [options]
    -d, --daemon                     Daemonize mode
    -k, --kill [PORT]                Kill specified running daemons - leave blank to kill all.
    -p, --port PORT                  Specify port
                                     (default: )
    -P, --pid FILE                   save PID in FILE when using -d option.
                                     (default: /opt/ontoportal/ncbo_cron/ncbo_cron.pid)
    -l, --log FILE                   Logfile for output
                                     (default: /var/log/ontoportal/ncbo_cron/scheduler.log)
    -u, --user USER                  User to run as
    -G, --group GROUP                Group to run as
        --console                    REPL for working with scheduler
    -v, --view-queue                 view queued jobs
    -a, --add-submission ID          submission id to add to the queue
    -h, --redis-host HOST            redis host (for shared locking)
                                     (default: localhost)
        --redis-port PORT            redis port (for shared locking)
                                     (default: 6379)
        --log-level LEVEL            set the log level (debug, info, error)
                                     (default: info)
```

# ncbo-cron scripts

These scripts should be considered experimental until this text is removed.
Please use them at your own risk.

## Connecting to ncbo-cron

After connecting to your system with ssh, login as `op-admin` and go to the ncbo_cron project.

```
sudo su - op-admin
cd /opt/ontoportal/ncbo_cron/
```

For easy access to the above, start a `screen` session after the ssh connection,
then use `screen -r` to reconnect to the same login session every time.

## The ncbo-cron scripts

These scripts work on the most recent submission; not necessarily the latest 'ready' submission.

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

```
./bin/ncbo_ontology_inspector -h
```

* Create/Update a ticket for ontology submissions that fail to parse

1. Log into the ncbo_cron system (stage or prod) and run:

```
$ sudo su - op-admin
$ cd /opt/ontoportal/ncbo_cron
$ bundle exec ./bin/ncbo_ontology_inspector -p submissionStatus -o {ONT_ACRONYM} --get_parsing_logs
```

Notes:
* the last option `--get_parsing_logs` will retrieve the logs and post them to a JIRA issue automatically; the issue summary/title will be: "{ONT_ACRONYM} submission has ERROR_RDF"; the attachments and comments will indicate what submission fails to parse (and whether it is in stage or prod).
* the automated JIRA update will reopen a resolved or closed issue (it will not create a new issue every time an ontology has a submission that fails to parse).
* this option is not enabled by default in the daily diagnostics script; it could be, but if it were enabled it could duplicate data in JIRA every day until the ERROR_RDF status is fixed.

2. Find the relevant JIRA issue by typing 'submission has ERROR_RDF' into the 'Quick Search' field at top right, i.e.

```
https://bmir-jira.stanford.edu/issues/?jql=summary%20~%20%22submission%20has%20ERROR_RDF%22
```

The issue will contain comments and parsing logs (reported by the Jenkins user).

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
