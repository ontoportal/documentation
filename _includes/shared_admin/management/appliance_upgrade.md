# Appliance Upgrade

## Appliance Versioning

OntoPortal VA version is primarily determined by the changes in the:
 - OntoPortal Stack: OS, backend services, ruby version, directory structure, etc; (the way the appliance is packaged)
 - Versions of the UI/API code base.

Specific versions of UI and API are pinned to the version of the OntoPortal VA to make sure it is compatible with the stack and system libraries.

The changelog can be found [here](https://github.com/ncbo/virtual_appliance/blob/main/CHANGELOG.md).

## Patch version update (e.g. v3.0.4 → v3.0.6)

  - Minor changes to the OS, libraries, configs can take place but they typically do not break Appliance update scripts.
  - Can include UI/API updates.
  - Relatively simple to update the appliance in-place via the provided scripts.

### Procedure
1. SSH to the appliance as a `centos` user.
2. Execute the following:

```
sudo su – ontoportal
cd /srv/ontoportal/virtual_appliance/
git pull
cd /srv/ontoportal/virtual_appliance/deployment
./setup_deploy_env.sh
./deploy_all.sh
```

## Minor version update (e.g. v3.0.6 → v3.1.1)

A minor version update includes OS/library changes which require additional manual upgrade steps to complete. It is preferable to deploy a new instance of the latest appliance and perform data migration, but it is also possible to do an in-place upgrade.

### v3.0.x to v3.1.x in-place update
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

## Major version update (e.g. v2 → v3)

Includes structural and breaking changes to the OVA that would make it very tricky if not impossible to upgrade in place.
 - Major Linux version updates. (v2 → v3 included a CentOS v6 to v7 upgrade.)
 - Adding new backend services.
 - Requires deploying a new appliance and performing data migration.

### Upgrading a pre-3.0.2 OntoPortal Appliance

If you are running an OntoPortal Appliance with a version < 3.0.2
then updating the Appliance can be a complicated procedure,
so we recommend deploying the latest appliance from scratch.

If that is not an option for you, please let us know and we could provide some tips
for your particular situation.

### Upgrading from v2.5 to v3.1

Upgrading a virtual appliance from v2.5 to v3.1 requires deploying a new v3.1 instance of the appliance and performing data migration.

#### Procedure

1. **Deploy and configure a new instance of the v3 appliance.**

   Please note that v3 configuration files differ from v2.5, so you will need to make the necessary edits instead of overwriting them with the old configs.
   Make sure to set `API_KEY` in `/srv/ontoportal/virtual_appliance/appliance_config/site_config.rb` on the v3 Appliance to match the `API_KEY` from the v2.5 appliance.
   The v2.5 `API_KEY` is usually set in `/srv/ncbo/virtual_appliance/appliance_config/site_config.rb`.

2. **Stop all services on the v2.5 and v3 appliances:**

   * v2.5: `sudo bpstop`
   * v3: `sudo opstop`

3. **Copy 4store data and repository files from the v2 to the v3 appliance.**

   ssh to the v3 appliance and run:

   ```
   sudo su -
   rsync -av --sparse root@appliance_v2.5:/srv/4store/data/* /srv/ontoportal/data/4store
   rsync -av root@appliance_v2.5:/srv/ncbo/repository/* /srv/ontoportal/data/repository
   chown -R 4store:4store /srv/ontoportal/data/4store
   chown -R ontoportal:ontoportal /srv/ontoportal/data/repository
   ```
   where `appliance_v2.5` is the hostname/IP address of the v2.5 appliance.

4. **Re-process all ontologies.**

   ```
   sudo su - ontoportal
   cd /srv/ontoportal/ncbo_cron
   bundle exec bin/ncbo_ontology_process -a -l logs/migration
   ```
   This step could take a significant amount of time depending on the number and size of the ontologies, so it is advisable to run it in a `screen` or `tmux` session.

5. **Start services on the v3 appliance.**

   ```
   sudo opstart
   ```
