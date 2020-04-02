---
title: Submitting Ontologies
layout: default
description: How to submit ontology files to your repository
weight: 10
status: Preliminary
---

# Submitting Ontologies

You can add an ontology using the OntoPortal Admin User at `http://{ip_address_of_appliance}/ontologies/new`.
The ncbo_cron project is configured to automatically process any new ontologies 
every 5 minutes (see documentation for enabling the scheduler). 

The ontology processing includes:
* Parsing any new, unparsed ontologies
* Calculating a set of metrics for these ontologies
* Indexing these ontologies for use with search
* Processing the ontology for use with the annotator


## As an OntoPortal user with the UI

A regular usar of OntoPortal can submit ontologies by going to the Browse page
and clicking on the `Submit Ontology` button. 

The first metadata form asks about characterists of the ontology.
Once this form is complete, the user is prompted for information about 
the first _submission_ (version) of the ontology.


## As an OntoPortal user with the API

[to be provided]

## Manually using the Ruby console

To manually parse an ontology, you will need to interact with the code using the console after switching to ontoportal user:

```
# from the bash shell:
cd /srv/ncbo/ncbo_cron
bin/ncbo_cron --console
# once in the ruby console:
ontology = LinkedData::Models::Ontology.find("MY_ACRONYM").first
submission = ontology.latest_submission(status: :any)
logger = Logger.new(STDOUT)
submission.process_submission(logger)
# make available in annotator
annotator = Annotator::Models::NcboAnnotator.new
annotator.create_term_cache_for_submission(logger, submission)
annotator.generate_dictionary_file()
```






