---
title: Advanced Configuration
layout: default
description: Configuring more advanced settings
weight: 28
status: In progress
---

# Overview

This section offers more advanced information on reconfiguring
your {{site.opva}} environment.

You may wish to defer these steps until after you register your system
and confirm it runs well in your environment.

## Configuration introduction

Changing the configuration of appliance is a two step process:
1. Modify any configuration files you want to change.
1. Run deployment scripts to deploy application with updated configuration settings.

Most of the minor configuration changes,
such as setting the hostname URI, should be set in the configuration files
located in the distribution at
`/srv/ontoportal/virtual_appliance/appliance_config/site_config.rb`.

* For the Ontoportal UI:
`/srv/ontoportal/virtual_appliance/appliance_config/bioportal_web_ui/config/bioportal_config_appliance.rb`
* For API:
`/srv/ontoportal/virtual_appliance/appliance_config/ontologies_api/config/environments/appliance.rb`

Please note that both of those files import the `site_config.rb` file.

## Deploying the code (running the Appliance)

Once the necessary configuration adjustments are made, 
run the Appliance as follows:

```
sudo su - ontoportal /srv/ontoportal/virtual_appliance/deployment/
```

## Updating the deployment scripts

```diff
- This section needs review/Update
```

This is an optional step. If you want to pull in the latest deployment scripts—
these will enable deployment of the latest OntoPortal application code—
and run the Appliance with them, perform the following steps. 

### Update deployment environment
`git pull` will pull in latest deployment scripts to enable deployment of latest compatible OntoPortal application code.

### Set up deployment environment
`sh setup_deploy_env.sh` gets latest compatible for the version of the appliance you are running UI and API code and installs necessary utilities for the deployment such as Capistrano.

### Deploy the user interface:
`./deploy_ui`
Deploy API:
`./deploy_api`
Deploy ncbo_cron:
`./deploy_ncbo_cron`

## More advanced customization                                                                                                                                                                                                                                         

It is possible to overwrite specific application files by simply dropping modified versions of those files in `/srv/ontoportal/virtual_appliance/appliance_config/bioportal_web_ui` and then running the deployment script. The deployment script will sync all files from configuration directory overwriting files in the directory from which application is deployed.

## Next step

If you haven't yet registered your system, 
go to the <a href="../registration">Registration Process</a> step 
for detailed instructions.
