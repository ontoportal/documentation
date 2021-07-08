---
title: Appliance Upgrade
layout: default
description: Procedure for upgrading Appliance to new version
weight: 80
status: Pending
---
# Upgrading Your Appliance

## Upgrading a 3.0.2 or later OntoPortal Appliance

To upgrade an OntoPortal Appliance with a version 3.0.1 or later, 
you can SSH to the appliance as a centos user and execute the following.

```
sudo su – ontoportal
cd /srv/ontoportal/virtual_appliance/
git pull
cd /srv/ontoportal/virtual_appliance/deployment
./setup_deploy_env.sh
./deploy_all.sh
```

## Upgrading a pre-3.0.1 OntoPortal Appliance

If you are running an Ontoportal Appliance with a version < 3.0.1 
then updating the Appliance can be a complicated procedure, 
so we recommend to deploy the latest appliance from scratch.  

If that is not an option for you please let us know and we could provide some tips
for your particular situation.
