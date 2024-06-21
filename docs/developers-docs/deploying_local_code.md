---
title: Deploying local code
layout: default
summary: The procedure to deploy your own code onto the appliance
status: Draft
parent: Developer Guide
nav_order: 5
---
# Deploying local code
The procedure to deploy your own code in the appliance
{: .fs-6 .fw-300 }

You may want to use your own code in the appliance. In that case you will need to modify a few configuration files in order to use your repository instead of the NCBO one. There is no fixed procedure yet since it relies on the dependencies and the appliance version you are using.

## Deploying a fork of AgroPortal into a 3.1 appliance (10-10-2023)

Deploying the API code.
```
# Edit the deploy.rb file
nano /srv/ontoportal/ontologies_api/current/config/deploy.rb
# Replace the NCBO repo with your repository

# Copy configuration files
cp -r /srv/ontoportal/virtual_appliance/appliance_config/ontologies_api/config /srv/ontoportal/ontologies_api/shared/config

# Install required gems and deploy the API using Capistrano
cd /srv/ontoportal/ontologies_api/current
bundle install --with development
bundle exec cap appliance deploy
```

Deploying the UI code and update the dependencies.
This procedure does not include Github actions to automatize the deployment so you will be running a few bundle commands to manually update the appliance with your latest code.
```
# Install Ruby 2.7
rbenv local 2.7.6
sudo su - ontoportal
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
bash

# Install Node.js 14
# (as centos user)
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum clean all && sudo yum makecache fast
sudo yum install -y gcc-c++ make
sudo yum install -y nodejs

# Install required gem
sudo /usr/local/rbenv/shims/gem install --default uri --version 0.12.0

# Copy UI configuration files
cp -r /srv/ontoportal/virtual_appliance/appliance_config/bioportal_web_ui/config /srv/ontoportal/bioportal_web_ui/shared/config
cp -r /srv/ontoportal/bioportal_web_ui /srv/ontoportal/ontoportal_web_ui

# Edit Rails credentials
cd /srv/ontoportal/ontoportal_web_ui/current
RAILS_ENV=appliance EDITOR="nano" bin/rails credentials:edit --environment appliance

# Create a directory for credentials and copy them
mkdir /srv/ontoportal/ontoportal_web_ui/shared/config/credentials
cp config/credentials/* /srv/ontoportal/ontoportal_web_ui/shared/config/credentials/

# Modify deploy.rb
# (Append the listed linked files and directories)
# Example:
# append :linked_files, 'config/database.yml', 'config/bioportal_config_appliance.rb'
# append :linked_dirs, 'log', 'tmp', '.bundle', 'config/locales'
# append :linked_files, 'config/secrets.yml', 'config/site_config.rb', 'config/newrelic.yml','config/credentials/appliance.key', 'config/credentials/appliance.yml.enc

# Upload newrelic.yml (if needed)
# Copy database.yml
cp config/database.yml /srv/ontoportal/ontoportal_web_ui/shared/config

# Copy UI configuration
cp -r /srv/ontoportal/virtual_appliance/appliance_config/bioportal_web_ui/ /srv/ontoportal/virtual_appliance/appliance_config/ontoportal_web_ui

# Modify bioportal_config_appliance.rb with updated config

# Install Capistrano and deploy. This is the set of commands you will use every time you want to update the appliance with the latest code
bundle install --with development
bundle config unset with
bundle exec cap appliance deploy

# Update Apache configuration if necessary
sudo nano /etc/httpd/conf.d/10-appliance...
# Change "bioportal" to "ontoportal" if the repo name is different from the original

# Restart the server
sudo oprestart
```