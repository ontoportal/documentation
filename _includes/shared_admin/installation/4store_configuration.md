# 4store Configuration

These settings will configure your system to use 4store RDF store as its backend.

## Switching from AllegroGraph to 4store

Your {{site.opva}} can use either 4store or AllegroGraph as its RDF backend storage.

**Version 4 Update**: Starting with version 4.0, the virtual appliance ships with AllegroGraph as the default RDF store. If you want to switch back to using 4store instead of the default AllegroGraph RDF store, follow the instructions below.

If you prefer to use 4store as your RDF backend instead of the default AllegroGraph, you can switch by following these steps:

### 1. Stop AllegroGraph Services

```bash
sudo systemctl stop agraph
sudo systemctl disable agraph
```

### 2. Update Configuration Files

Login as the `op-admin` user and navigate to the configuration directories:

```bash
sudo su - op-admin
```

**Update configuraiton files for ncbo_cron and ontologies_api:**

edit the following config files:
- `/opt/ontoportal/virtual_appliance/appliance_config/ncbo_cron/config/`
- `/opt/ontoportal/virtual_appliance/appliance_config/ontologies_api/config/environments/appliance.rb`

Find the line:
```
GOO_BACKEND_NAME = 'AG'
```

And replace it with:
```
GOO_BACKEND_NAME = '4store'
```
### 3. Re-Deploy apps with updated configs:
```bash
sudo su - op-admin
cd /opt/ontoportal/virtual_appliance/deployment/
./deploy_api.sh
./deploy_ncbo_cron.sh
```

### 3. Start 4store Services

```bash
exit  # Return to ubuntu user
sudo systemctl start 4s-httpd
sudo systemctl enable 4s-httpd
```

### 4. Run the 4store Bootstrapping Script

```bash
sudo su - op-admin
cd /srv/ontoportal/virtual_appliance/utils/bootstrap/
sh bootstrap_4store.sh
```

### 5. Restart Appliance Services

```bash
sudo opctl restart
```

### 6. Create the firstboot File and Reboot

```bash
touch /opt/ontoportal/config/firstboot
sudo reboot
```

After the reboot, your virtual appliance will be configured to use 4store as the RDF backend.

### Access the Web UI

From your host operating system's browser (not in the virtual environment), the Appliance Web UI can be accessed at `https://{ip_address_of_appliance}`.

### Access REST Services

REST services are available at the following location:
* `https://{ip_address_of_appliance}:8443`
* `https://{ip_address_of_appliance}:8443/documentation`

## Important Notes

- When switching triplestores, it’s important to keep in mind that existing data does not automatically migrate from one store to another. While it’s possible to manually export and import the data, the backend system is ideally chosen from the beginning.