---
title: Frontend environment
summary: A guide of how to run a development environment for the frontend
layout: default
status: Draft
parent:  Development Environment
grand_parent: Developer Guide
nav_order: 1
---

# How to run a development environment for the frontend
{: .no_toc }

This page describes a list of steps to follow to run a development environment for the frontend locally
{: .fs-6 .fw-300 }

We assume in this guide:
* That **you have access to a shell Terminal**, either because you are running on a Linux/Mac operating system or Windows wth [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/) installed 
* And **you have an Ontoportal appliance deployed** on a server or locally where the API endpoint (e.g http:://your_appliance_ip:8080) can be accessed

## Steps to follow
{: .no_toc }

1. TOC
{:toc}

## Fork and clone the UI source code

First fork the [ontoportal_web_ui](https://github.com/ontoportal/ontoportal_web_ui) repository. More details about how to can be found in the [Github official doc](https://docs.github.com/en/get-started/quickstart/fork-a-repo?platform=linux)

Then clone your forked repository locally
```bash
  git clone https://github.com/your_organization/ontoportal_web_ui.git
```

{: .important }
The `master` branch represent the [Bioportal version](https://bioportal.bioontology.org/), if you want to have the [Agroportal version](https://agroportal.lirmm.fr/).
You have to merge the `ontoportal-lirmm` branch to your `master`, by doing so `git merge ontoportal-lirmm master`

{: .important }
For Windows users with Docker Desktop using the WSL 2, it is recommended to clone your repository directly in your home directory of your WSL distribution. Cloning it in any Windows folder that is mounted by default in `/mnt/<drive letter>` would result in very poor performance.
Open your WSL terminal and navigate to your home directory with `cd ~`. If you have git installed, you can directly use `git clone https://github.com/your_organization/ontoportal_web_ui.git`. If you want to use Git from Windows instead, you can get the path with `explorer.exe .` while in your home directory. This will open the Windows explorer from which you can use your favorite Git tool and setup your IDE for development.

## Setting up the development config files

### Environment and database variables

{: .highlight }
A sample file of `.env` can be found
here:[https://github.com/ontoportal-lirmm/bioportal_web_ui/blob/master/.env.sample](https://github.com/ontoportal-lirmm/bioportal_web_ui/blob/master/.env.sample)

In command line do

```bash
cp .env.sample .env

cp config/database.yml.sample config/database.yml
```

Then edit the file `config/database.yml` with your `user` and `password` of your database. If using the docker
infrastructure use the following `config/database.yml`

```yml
    development:
      adapter: mysql2
      encoding: utf8
      database: bioportal_ui
      username: root
      password: bp_user
      host: db
```

### Update the development.rb file

{: .highlight }
A sample file of `config/environments/development.rb` can be found
here:[https://github.com/ontoportal/ontoportal_web_ui/blob/master/config/environments/development.rb](https://github.com/ontoportal/ontoportal_web_ui/blob/master/config/environments/development.rb)

Update like below the line in `config/environments/development.rb` file

```ruby
 # memcache setup
config.cache_store = ActiveSupport::Cache::MemCacheStore.new('cache', namespace: 'BioPortal')

```

### Create bioportal_config_development.rb file

{: .highlight }
A sample file of `config/bioportal_config_development.rb` can be found
here:[https://github.com/ontoportal/ontoportal_web_ui/blob/master/config/bioportal_config_env.rb.sample](https://github.com/ontoportal/ontoportal_web_ui/blob/master/config/bioportal_config_env.rb.sample)

```bash
cp .env.sample .env

cp bioportal_config_env.rb.sample bioportal_config_development.rb
```

Update/Add the following lines to `config/bioportal_config_development.rb`  

```ruby

$HOSTNAME = 'localhost' # PUT YOUR SERVER HOSTNAME (IP) HERE

# The URL for the BioPortal Rails UI (this application)
$UI_URL = "http://#{$HOSTNAME}:3000"

# REST core service address
$REST_URL = "http://#{$HOSTNAME}:8080"
$SPARQL_URL = "http://#{$HOSTNAME}:8081/test/"

$BIOMIXER_URL = "http://#{$HOSTNAME}:8081/BioMixer"

$ANNOTATOR_URL = $PROXY_URL = "http://#{$HOSTNAME}:8081/annotator"

# If your BioPortal installation includes Fairness score set this to true
$FAIRNESS_DISABLED = false
$FAIRNESS_URL = "http://#{$HOSTNAME}:8081/fairness"

# NCBO annotator URL and apikey
$NCBO_ANNOTATOR_URL = "http://#{$HOSTNAME}:8081/ncbo_annotatorplus"
$NCBO_ANNOTATORPLUS_ENABLED = true
$NCBO_API_KEY = "4a5011ea-75fa-4be6-8e89-f45c8c84844e"

# Unique string representing the UI's id for use with the BioPortal Core
$API_KEY = "72c72cba-ad45-4785-b94e-483fa55cdddb"

$NOT_DOWNLOADABLE = []

```

## Build the docker application

{: .highlight }
Source code of the docker infrastructure can be found
here: [Feature: Add docker environment for the UI ncbo/bioportal_web_ui#229](https://github.com/ncbo/bioportal_web_ui/pull/229)

Install docker and docker-compose,
see [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

Build everything: The first time you run this it's going to take 5-10 minutes depending on your internet connection
speed and computer's
hardware specs. That's because it's going to download a few Docker images and build the Ruby + Yarn dependencies (1,5 GB
for all).

```bash
docker compose build
```

## Run the local development server

Run the docker environment

```bash
docker compose up
```

Setup database

```bash
docker compose exec web sh -c "bin/setup"
```


Run the rails server

```bash
docker compose exec web sh -c "bin/rails s -b 0.0.0.0"
```

## Opening in browser

See [http://localhost:3000](http://localhost:3000)

