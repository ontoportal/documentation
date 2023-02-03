---
title: Submitting UMLS Content
layout: default
summary: How to submit UMLS content to your repository
status: Ready
nav_order: 3
parent: Managing Ontologies in OntoPortal
grand_parent: Administration Guide
permalink: /administration/ontologies/handling_umls
---

# Submitting UMLS Content

This document describes the process of submitting UMLS content to BioPortal.

You may also wish to review the README documentation in the repository https://github.com/ncbo/umls2rdf.

## About UMLS content

The National Institutes of Health National Library of Medicine 
integrates and distributes the <a href="https://www.nlm.nih.gov/research/umls/index.html">Unified Medical Language System</a> (UMLS). 
UMLS is a set of files and software that brings together many health and biomedical vocabularies and standards to enable interoperability between computer systems. 
Unfortunately, UMLS is not distributed using a semantic specification like RDF or OWL.

The {{site.opva}} supports OBO and OWL ontology formats, 
but does not support UMLS in its native form. 
To bridge this gap, we have developed a project called UMLS2RDF that transforms UMLS ontologies into OWL/RDF.

## Converting UMLS content

There is no automated way to convert UMLS content to RDF.
You must have your own UMLS MySQL installation 
and an OSX/Linux/Unix machine with 8GB+ of RAM 
in order for the conversion process to work. 

The scripts to convert UMLS to RDF are available on Github (see below).
Once you have converted UMLS to RDF, you will get Turtle (.ttl) files 
that can be uploaded using the BioPortal Web UI. 
Please select UMLS as the format for these ontologies.

```
2 Install UMLS2RDF
3 Configure UMLS2RDF
4 Run UMLS2RDF
5 Upload files to the NCBO Virtual Appliance
6 Hardware Considerations
7 Example Workflow
7.1 Install UMLS using mmsys
7.2 Load subset in MySQL
7.3 Generate RDF from MySQL
```


### Install UMLS MySQL

To import UMLS ontologies, a local installation of the UMLS MySQL release needs to be available. 
Please refer to the UMLS documentation for instructions on how to install the UMLS MySQL distribution.

### Install umls2rdf

umls2rdf is a Python script that connects to a UMLS MySQL installation and extracts the UMLS ontologies in a format that the Appliance can work with.

First clone the github project:

```
git clone https://github.com/ncbo/umls2rdf/
```

Install the MySQL Python driver. We recommend to use pip for this:

```
pip install MySQL-python
```

### Configure umls2rdf

umls2rdf has two configuration files:

* `conf.py` where the database configuration (host,name,user and password) needs to be specified. Also the output folder.
* `umls.conf` where one can specified the UMLS ontologies to be extracted. This is a comma-separated file with the following 3 fields:
  * A prefix code for the ontology as defined in UMLS. 
    * For most OntoPortal ontologies, the acronym of the ontology in UMLS matches the acronym in the repository, so that one code is sufficient.
    * If the UMLS acronym for the ontology is different than the acronym in the repository (in case of an acronym conflict, for example), the UMLS acronym is followed by a semicolon (;) and the repository acronym.
  * Output file name.
  * Conversion strategy: Accepted values are `load_on_codes`, `load_on_cuis`.
    * With load_on_codes the original source of the ontology will be used as strategy. The Class IDs will be constructed with the MRCONSO_CODE field. 
    * If load_on_cuis is selected then the strategy to transform the ontology will use CUIs (from the MRCONSO_CUI field) to construct the Class IDs.

In our configuration file, you can see the settings used by our production system. These are all the UMLS ontologies that are publicly available in BioPortal.

### Run umls2rdf

Once the configuration files have the settings run the command:

```
python umls2rdf.py
```

Depending on how many ontologies are extracted the run time can range from a few minutes to four hours. This process is memory intensive and to transform the largest UMLS ontologies (in particular, SNOMED) one needs at least 16G RAM available.

### Upload files to the Virtual Appliance

The output files will be located in the folder specified in `conf.py`. 
To submit the extracted ontologies, 
use the OntoPortal Web form available in your appliance, 
or other upload approaches described in 
<a href="{{site.baseurl}}/administration/ontologies/submitting_ontologies">Submitting Ontologies</a>. 

IMPORTANT: The specified ontology format in the submission process should be `UMLS`.

## Hardware Considerations

The BioPortal system dedicates powerful servers to handle many of the UMLS ontologies; some of the ontologies contain millions of classes. 
To import the largest UMLS ontologies (e.g., RXNORM or SNOMEDCT) users will have to run the Appliance in a powerful dedicated environment 
with 8GB RAM and 5GB hard disk space available.

## Example Workflow

This workflow for importing UMLS data has been provided by Vincent Emonet. 
It is provided here without testing by the OntoPortal team. 
Descriptive comments throughout this section are provided by Vincent.

This offers more details on how to generate UMLS turtle files. 
It is simplified to provide the essentials needed to generate the RDF files you want. 
Note that I am using linux and the 2015AB release for this tutorial.

### Install UMLS using mmsys

* Download everything from https://www.nlm.nih.gov/research/umls/licensedcontent/umlsknowledgesources.html
* Unzip mmsys.zip
* Put the following files in the now unzipped mmsys directory :
  * 2015AB-1-meta.nlm
  * 2015AB-2-meta.nlm
  * 2015AB-otherks.nlm
* mmsys.zip (why not?)
* 2015AB.CHK
* *./run_linux.sh (or run.bat or run_mac.sh)

#### Install UMLS

* Source: path to mmsys directory and Destination: path of a directory where the subset file will be generated
* Semantic Network -> Choose Database Load Scripts: Mysql 5.6 (to generate the mysql load script for the semantic network subset, aka STY in bioportal)
* Select "New configuration.."
* Select Default Subset: select the default subset you want (it is not really important, 
you can specificaly choose each thesaurus in the next step)
* Go to the "Output Options" tab > Write Database Load Scripts
  * Select database > MySQL 5.6
* Go to the "Source List" and select the sources (aka ontologies in bioportal) you want
  * hold ctrl to select many
  * careful: there is an option to define if you want the selected source excluded or included in the subset
* Then click on "Done" in the top command on the window and wait for UMLS to install
* Note: mmsys will generate RRF files. You can use the mmsys software to browse it, 
but we will just use it to populate a SQL database

### Load subset in MySQL

* Go to mysql
  `>create database umls2015ab;``
* Configure database character encoding to UTF-8
  `>ALTER DATABASE umls2015ab CHARACTER SET utf8 COLLATE utf8_unicode_ci;`
* Go to the 2015AB directory (where UMLS has been installed) in the META directory
* Open the populate_mysql_db.sh script and change the first lines with your MySQL credentials:
  * `MYSQL_HOME=/usr user=<username> password=<password> db_name=umls2015ab`
  * (note: for MYSQL_HOME it adds "/bin/mysql" to find the mysql bin)
* Then run `./populate_mysql_db.sh`

### Generate RDF from MySQL

* Clone https://github.com/ncbo/umls2rdf
* Rename conf_sample.py as conf.py and configure the access to your database (example when database in local)

```
#Folder to dump the RDF files.
OUTPUT_FOLDER = "output"

#DB Config
DB_HOST = "localhost"
DB_NAME = "umls2015ab"
DB_USER = "root"
DB_PASS = "<password>"

UMLS_VERSION = "2015ab"
UMLS_BASE_URI = "http://purl.bioontology.org/ontology/"
```

* Define the ontology you want to generate in umls.conf
  * Example for LNC-RU-RU: "LNC-RU-RU,LNC-RU-RU.ttl,load_on_codes"
  * If you want to get the name used for you ontology in the database you can get them by going to mySQL, select the umls database and get it from the following query: "select distinct SAB from MRCONSO;"
* Run ``./umls2rdf.py`
* Get the ttl files in the output directory
