---
title: Appliance Upgrade v2.5 to v3.1
layout: default
summary: Procedure for upgrading Appliance from v2.5 to v3.1
status: Pending
nav_order: 8
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/appliance_upgrade_v25_to_31
---
# Upgrading Your Appliance

Upgrading virtual appliance from v2.5 to v3.1 requires deploying a new v3.1 instance of the appliance and peforming data migration. 

You may also wish to visit the migration information at [Appliance Upgrade]({{site.baseurl}}/administration/management/appliance_upgrade)

## Procedure:
### 1. Deploy and configure a new instance of v3 appliance.

Please note that v3 configuration files differ from the v2.5 so you would need to make nessesary edits instead of overwriting them with the old configs. 
Make sure to set `API_KEY` in the `/srv/ontoportal/virtual_appliance/appliance_config/site_config.rb` on the v3 Appliance to math the `API_KEY` from v2.5 appliance.
v2.5 `API_KEY` is usually set in the  `/srv/ncbo/virtual_appliance/appliance_config/site_config.rb`
  
### 3. Stop all services on v2.5 and v3 appliances:

v2.5: `sudo bpstop`
v3: `sudo opstop`

### 3. copy 4store data and repository files from v2 to v3 appliance
ssh to v3 appliance and run:

```
sudo su -
rsync -av --sparse root@appliance_v2.5:/srv/4store/data/* /srv/ontoportal/data/4store
rsync -av root@appliance_v2.5:/srv/ncbo/repository/* /srv/ontoportal/data/repository
chown -R 4store:4store /srv/ontoportal/data/4store
chown -R ontoportal:ontoportal /srv/ontoportal/data/repository
```
where appliance_v2.5 is the hostname/ip address of the v2.5 appliance

### 4. re-process all ontologies 
```
sudo su - ontoportal
cd /srv/ontoportal/ncbo_cron
bundle exec bin/ncbo_ontology_process -a -l logs/migration
```
This step could take a significant amount of time depending on the number and size of the ontologies so it is advisable to run this step in a screen or tmux session

### 5. start services on v3 appliance
`sudo opstart`

