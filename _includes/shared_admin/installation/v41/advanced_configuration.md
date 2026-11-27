# Advanced Configuration

This section offers more advanced information on reconfiguring
your {{site.opva}} environment.

{: .note }
> This section needs further review for accuracy.

## Configuration introduction

Changing the configuration of appliance is a two step process:
1. Modify any configuration files you want to change.
1. Run deployment scripts to deploy application with updated configuration settings.

Most of the minor configuration changes,
such as setting the hostname URI, should be set in the configuration files
located in the distribution at
`/opt/ontoportal/config/site_config.rb`.

* For the Ontoportal UI:
`/opt/ontoportal/virtual_appliance/appliance_config/bioportal_web_ui/config/bioportal_config_appliance.rb`
* For API:
`/opt/ontoportal/virtual_appliance/appliance_config/ontologies_api/config/environments/appliance.rb`
* For NCBO_CRON:
`/opt/ontoportal/virtual_appliance/appliance_config/ncbo-cron/config/config.rb`

Please note that both of those files import the `site_config.rb` file but would overwrite those settings if you set them in application specific configuration file.

## Deploying the UI and API code

Once the necessary configuration adjustments are made,
run the Appliance as follows:

```bash
[ubuntu@appliance ]$ sudo su -
[op-admin@appliance ]$ cd /opt/ontoportal/virtual_appliance/deployment/
[op-admin@appliance deployment]$ ./setup_deploy_env.sh
Setting up deployment environment
Setting up deployment env for UI
Cloning into 'bioportal_web_ui'...
remote: Enumerating objects: 557, done.
remote: Counting objects: 100% (557/557), done.
...
...
HEAD is now at 751e2b9... Gemfile.lock update
/opt/ontoportal/virtual_appliance/deployment
[op-admin@appliance deployment]$ ./deploy_api.sh
[op-admin@appliance deployment]$ ./deploy_ncbo_cron.sh
[op-admin@appliance deployment]$ ./deploy_ui.sh
[op-admin@appliance deployment]$ sudo opctl restart
```

## Updating the deployment scripts

{: .note }
> This section needs review and almost certainly an update


This is an optional step. If you want to pull in the latest deployment scripts—
these will enable deployment of the latest OntoPortal application code—
and run the Appliance with them, perform the following steps.

### Update deployment environment
`git pull` will pull in latest deployment scripts to enable deployment of latest compatible OntoPortal application code.

### Set up deployment environment
`./setup_deploy_env.sh` gets latest compatible for the version of the appliance you are running UI and API code and installs necessary utilities for the deployment such as Capistrano.

### Deploy UI
`./deploy_ui`

### Deploy API
`./deploy_api`

### Deploy ncbo_cron
`./deploy_ncbo_cron`

## More advanced customization

### Overwrite application files
It is possible to overwrite specific application files by simply dropping modified versions of those files in `/opt/ontoportal/virtual_appliance/appliance_config/bioportal_web_ui` and then running the deployment script. The deployment script will sync all files from configuration directory overwriting files in the directory from which application is deployed.

## Next step

If you haven't yet registered your system,
go to the <a href="{{site.baseurl}}/administration-guide/steps/registration">Registration Process</a> step
for detailed instructions.
