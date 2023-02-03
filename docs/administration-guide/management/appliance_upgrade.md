---
title: Appliance Upgrade
layout: default
summary: Procedure for upgrading Appliance to new version
status: Pending
nav_order: 7
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/appliance_upgrade
---
# Upgrading Your Appliance

## Appliance Versioning

OntoPortal VA version is primarily determined by the changes in the:
 - OntoPortal Stack: OS, backend services, ruby version, directory structure, etc; (the way appliance is packaged)
 - Versions of UI/API code base.
Specific versions of UI and API are pinned to the version of the OntoPortal VA to make sure it is compatible with the stack and system libraries.

Changelog can be found [here](https://github.com/ncbo/virtual_appliance/blob/main/CHANGELOG.md)

## Patch version update. (v3.0.4 -> v3.0.6)

  - Minor changes to the OS, libraries, configs can take place but they typically do not break Appliance updates scripts   
  - Can include UI/API updates.  
  - Relatively simple to update appliance in-place via provided scripts. 

### Procedure:
1. SSH to the appliance as a centos user 
2. execute the following:

```
sudo su – ontoportal
cd /srv/ontoportal/virtual_appliance/
git pull
cd /srv/ontoportal/virtual_appliance/deployment
./setup_deploy_env.sh
./deploy_all.sh
```

## Minor version update (v3.0.6 to v3.1.1)

Minor version update includes OS/library changes which require additional manual upgrade steps to complete.  It is preferable to deploy a new instance of the latest appliance and perform data migraiton but it is also possible to do in-place upgrade.

## Major version update (v2 -> v3)

Includes structural and breaking changes to the OVA that would make it very tricky if not impossible to upgrade in place.
 - Major Linux version updates. (v2 -> v3 included CentOS v6 to v7 upgrade)
 - Adding new backend services.
 - Requires deploying a new appliance and performing data migration.


### Upgrading a pre 3.0.2 OntoPortal Appliance

If you are running an Ontoportal Appliance with a version < 3.0.2 
then updating the Appliance can be a complicated procedure, 
so we recommend to deploy the latest appliance from scratch.  

If that is not an option for you please let us know and we could provide some tips
for your particular situation.

### v3.0.x to V3.1.x Update
1. update rbenv version of ruby to v2.7.x
2. rename redis service instance
3. checkout the updated branch of the virtual_appliance project:
```
sudo su – ontoportal
cd /srv/ontoportal/virtual_appliance/
git fetch
git branch -v -a
git checkout 3.1
```
4. perform deployment
```
cd /srv/ontoportal/virtual_appliance/deployment
./setup_deploy_env.sh
./deploy_all.sh
```

## See also

You may also wish to see [Appliance upgrade v2.5 to 3.1]({{site.baseurl}}/administration/management/appliance_upgrade_v25_to_31)

