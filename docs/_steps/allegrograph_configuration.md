---
title: AllegroGraph Configuration
layout: default
description: Configuring your system to run AllegroGraph
weight: 95
status: Needs revision
---

# AllegroGraph Configuration

These settings will configure your system to use AllegroGraph RDF store 
as its backend.

## Replacing 4store with AllegroGraph

Your {{site.opva}} can use either 4store or (new with version 3.0) AllegroGraph as its RDF backend store. 
The 4store is the default RDF store for the system, as we have much more experience with it to date. 

The configuration can be changed at any time by shutting down BioPortal, resetting the backend store configuration attribute, and restarting BioPortal. However, the Annotator and search index data will not change when you switch the backend, so it isn't really feasible to go back and forth—you'll want to pick your backend system at the beginning, or be prepared to re-index your databases with each switch.

### What's included?

We included a version of AllegroGraph with your Appliance that is tested to work with this version of the Appliance. The included AllegroGraph is not necessarily the most recent version of the AllegroGraph software. 

If you want to upgrade your AllegroGraph software to the most recent version, you can obtain that from the Franz, Inc. website. However, we can not guarantee the compatibility of the Appliance with the latest AllegroGraph version.

### Start AllegroGraph Server and Bootstrap OntoPortal Triple Store

The AllegroGraph was shipped in the distribution pre-configured to support the settings described here. Follow the steps below to convert your system from 4store to AllegroGraph backend store.

#### Stop and Disable 4store services

```
[centos@localhost ~]$ sudo systemctl stop 4s-httpd
[centos@localhost ~]$ sudo systemctl disable 4s-httpd
Removed symlink /etc/systemd/system/multi-user.target.wants/4s-httpd.service.
```

#### Enable and Start AllegroGraph services

```
[centos@localhost ~]$ sudo systemctl enable agraph
agraph.service is not a native service, redirecting to /sbin/chkconfig.
Executing /sbin/chkconfig agraph on
[centos@localhost ~]$ sudo /sbin/service agraph start
Starting agraph (via systemctl):                           [  OK  ]
```

#### Verify that AllegroGraph is running

The local version of AllegroGraph bundled with the Virtual Appliance (VA) sits behind a firewall, and thus, cannot be accessed from an outside system (such as your Host operating system). To get around that restriction, we can create an SSH tunnel that allows this access. Open your favorite terminal app in your host OS and run the following command:

```
ssh -N -L localhost:10035:localhost:10035 centos@<IP address of your VA>
```

For example:

<figure>
  <img src="{{site.baseimgs}}/ssh-tunnel.png"/>
  <figcaption>SSH tunnel to AllegroGraph</figcaption>
</figure>

Next, on your host OS, open your favorite browser and navigate to:

http://localhost:10035

You should see a page requiring AllegroGraph Username and Password. Ignore the login prompt for the moment. All we needed at this point is to ensure that the AllegroGraph server is up and running.

#### Login to VA as `ontoportal` user

```
[centos@localhost ~]$ sudo su - ontoportal
[ontoportal@localhost ~]$
```

#### Run the AllegroGraph Bootstrapping Script

```
[ontoportal@localhost ~]$ cd /srv/ontoportal/virtual_appliance/utils/bootstrap/
[ontoportal@localhost bootstrap]$ sh bootstrap_AG.sh
Starting agraph (via systemctl):                           [  OK  ]
uri: http://localhost:10035/repositories/ontoportal
relativeUri: repositories/ontoportal
id: ontoportal
title: ontoportal
readable: true
writable: true
replication: no
distributed: false
...
```

Note that this script may take a few minutes to execute. Please wait unit it finishes.

#### Navigate to AllegroGraph WebView

Open your browser on the host machine and once again navigate to:

http://localhost:10035

This time, you should see the following page instead of the login prompt:

<figure>
  <img src="{{site.baseimgs}}/ag-webview.png"/>
  <figcaption>AllegroGraph WebView</figcaption>
</figure>



### Update OntoPortal configuration files

```
[ontoportal@localhost bootstrap]$ cd /srv/ontoportal/virtual_appliance/appliance_config/
[ontoportal@localhost appliance_config]$ ls -l
total 8
drwxr-xr-x. 5 ontoportal ontoportal   45 Aug  3 23:24 bioportal_web_ui
drwxr-xr-x. 3 ontoportal ontoportal   20 Aug  3 23:24 ncbo_cron
drwxr-xr-x. 3 ontoportal ontoportal   20 Aug  3 23:24 ontologies_api
drwxrwxr-x  7 ontoportal ontoportal  228 Oct 22 16:36 ontologies_linked_data
-rw-r--r--. 1 ontoportal ontoportal 1712 Oct 14 13:07 site_config.rb
-rw-r--r--. 1 ontoportal ontoportal 1716 Aug  3 23:24 site_config.rb.default
```

You will need to update the configuration files in the following directories: `ncbo_cron`, `ontologies_api`.

#### Update NCBO Cron configuration files

Navigate to NCBO Cron config directory and open `config.rb` in your favorite Linux editor:

```
[ontoportal@localhost config]$ cd /srv/ontoportal/virtual_appliance/appliance_config/ncbo_cron/config/
[ontoportal@localhost config]$ nano config.rb
```

Find the following line:

```
GOO_BACKEND_NAME = '4store'
```

and replace it with

```
GOO_BACKEND_NAME = 'ag'
```

Save the file and exit.

#### Update Ontologies API configuration files

Navigate to Ontologies API config directory and open `appliance.rb` in your favorite Linux editor:

```
[ontoportal@localhost config]$ cd /srv/ontoportal/virtual_appliance/appliance_config/ontologies_api/config/environments
[ontoportal@localhost config]$ nano appliance.rb
```

Find the following line:

```
GOO_BACKEND_NAME = '4store'
```

and replace it with

```
GOO_BACKEND_NAME = 'ag'
```

Save the file and exit.


### Run Deployment Script and Restart Ontoportal

In order for the changes to the configuration files to propogate to the running VA, we need to execute the deployment script.

```
[ontoportal@localhost environments]$ cd /srv/ontoportal/virtual_appliance/deployment/
[ontoportal@localhost deployment]$ ./setup_deploy_env.sh
Setting up deployment environment
Setting up deployment env for UI
...
[ontoportal@localhost deployment]$ sudo oprestart



















Update the configuration file inside your Virtual Appliance (VA)

	a) replace the following lines:
```
		config.goo_host          = 'localhost'
    	config.goo_port          = 8081
```
       with:

	    config.goo_backend_name  = 'AG'
	    config.goo_host          = 'localhost' # or your server name
	    config.goo_port          = 10035in 
	    config.goo_path_query    = '/repositories/ontoportal' # the last fragment must match the name of the repository you created in Step 3.
	    config.goo_path_data     = '/repositories/ontoportal/statements'
	    config.goo_path_update   = '/repositories/ontoportal/statements'

Restart your Virtual Appliance (see step 2 below). Your server is now pointing to AllegroGraph as the backend. 





## Obtaining and starting AllegroGraph

### 1. Install AllegroGraph

If not already present in a current version, install the AllegroGraph (AG) server using the instructions on this page:

`https://franz.com/agraph/support/documentation/current/server-installation.html`

We recommend reviewing these instructions, which cover a number of different installation scenarios.

### 2. Start AllegroGraph

An example from this page of commands to start and stop AllegroGraph:

```
Note that the last few lines of the script show how to start and stop AllegroGraph on your server. These lines will be similar to this example:

You can start AllegroGraph by running:  
/sbin/service agraph start  
 
You can stop AllegroGraph by running:  
/sbin/service agraph stop 
```

### 3. Navigate to AllegroGraph console

Once AllegroGraph is running, navigate to the AG Admin console. By default it runs on port 10035:

```
http://<your server name>:10035/#
```

### 4. Create your backend repository

Under "Create new repository" type in a name for your new repository to be used for OntoPortal and click "Create". For Example: ontoportal

### 5. Navigate to your repository

Once created, you should be able to navigate to your new repository via:

```
	http://<your server name>:10035/#/repositories/ontoportal
```

From this view, you can run SPARQL queries against your data, add or delete records, export the repository in a number of formats, and run reports on the use of your data store.

