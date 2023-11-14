---
title: Google Analytics Management
layout: default
summary: Setting up Google Analytics tracking for your Appliance
status: Preliminary
nav_order: 5
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/google_analytics_management
---

# Google Analytics Management

## Adding Google Analytics to the {{site.opva}}

BioPortal uses the Google API to process our website data. 

If you want to use the Google in your OntoPortal site,
you will need a Google developer account to use the Google API,
and a Google Analytics account to see the analytics.
The Google API is used to process the web site's data.

### Google Developer Account

You can create an account at `https://console.developers.google.com/project`.
Use the following steps to do so.

* Create an account
* Generate credentials (p12 key & email) and save it for later
  * API Manager > Credentials > Add credentials > Service account
  * Note: default password of the p12 keys is notasecret
* Enable Analytics API
  * API Manager > Overview > Advertising APIs > Analytics API
* Copy p12 keys to the appliance (in the /srv directory for example)
  * Example: `scp myontoportal-analytics.p12 {my_appliance_hostname}:/srv/ontoportal/virtual_appliance/config/ncbo_cron`

### Google Analytics Account

You use Google Analytics to get your website's data. 

* Create an account at `https://www.google.com/analytics/web`
* Add the "tracking ID" of this account in ` vim /srv/ontoportal/virtual_appliance/appliance_config/site_config.rb`
  * Example: `$ANALYTICS_ID = "UA-12345678-1"`
* Give permission to your developer credential (previously generated at the Google Developer Account step) to be able to retrieve the data
  * Admin tab > Property (typically, the website you are doing analytics on) > User Management
  * Add permissions for the google developer credential email (also generated in the previous section)

### Google Analytics Configuration  

  * Modify `/srv/ontoportal/virtual_appliance/appliance_config/ncbo_cron/config/config.rb`
    * Set up configuration for Google Analytics Data (GA4) 
    ```
      # Google Analytics CRON config
      config.enable_ontology_analytics         = true
      config.cron_ontology_analytics           = '30 */4 * * *'
      # GA4 Key file used for authentication with Google
      config.analytics_path_to_key_file        = "config/myontoportal_analytics_key.json"
      # your GA4 property ID    
      config.analytics_property_id             = "111111111"
      # path to the file that stores your Universal Analytics (UA) data (if exists)
      config.analytics_path_to_ua_data_file    = "data/op_ua_data.json"
      # path to the file that will store your entire Google Analytics Data
      # it's a backup copy of your data in addtion to storing it in Redis
      # this file will be auto-created if it doesn't exist already
      config.analytics_path_to_ga_data_file    = "data/op_ga_data.json"
    ```
    * OPTIONAL: Set up configuration for Universal Analytics access (if you need to import the existing data). **This data are available till July 1st, 2024**. 
    ```
      config.analytics_service_account_email_address = 'myontoportal@developer.gserviceaccount.com'
      config.analytics_path_to_key_file              = 'config/myontoportal-analytics.p12'
      config.analytics_profile_id                    = 'ga:1234567'
      config.analytics_app_name                      = 'MyOntoPortal'
      config.analytics_app_version                   = '1.0.0'
      config.analytics_start_date                    = '2020-01-01'
      config.analytics_filter_str                    = ''
    ```
  * Perform deployment of UI, API and ncbo_cron which will copy configuration files to the appropriate application directories
    ```
    sudo su - ontoportal
    cd /srv/ontoportal/virtual_appliance/deployment
    ./setup_deploy_env.sh
    ./deploy_ui.sh
    ./deploy_ncbo_cron.sh
    ```
## OPTIONAL: Importing Existing Universal Analytics (UA) Data

If you have existing Google Analytics data that you have been collecting till now, you can import it from Google (**available till July 1st, 2024**) so it's merged with your Google Analytics Data (GA4) data and displayed in OntoPortal.

* Make sure your Universal Analytics configuration is set up properly (see above)
* Run the following script:
```
# sudo su - ontoportal
# cd /srv/ontoportal/ncbo_cron
# bundle exec ruby ./bin/generate_ua_analytics_file.rb
```
At the end of the run, the script will generate the file that you specified in:
```
config.analytics_path_to_ua_data_file    = "data/op_ua_data.json"
```
This file needs to be generated ONLY ONCE, and it will be used by your Google Analytics CRON job to merge the "old" data with the new data from GA4. Once this file is generated, you can safely delete the section of the configuration related to Universal Analytics.


## Enabling Analytics Cron Job

The Analytics data is stored in Redis data store and is scheduled to be refreshed weekly. The refresh is done via an automatically scheduled Cron job. By default, that Cron job is disabled in the OntoPortal Appliance. Below are the steps to enable the Analytics refresh job: 

* Restart ncbo_cron services:
```
sudo systemctl stop ncbo_cron
sudo systemctl start ncbo_cron
```
By default, the Analytics refresh job is scheduled to run on Mondays at 12:15am. If you need to change the frequency or the run time, you can add the parameter: `config.cron_ontology_analytics = "your cron expression"` to the `NcboCron.config do |config|` block:
```
config.cron_ontology_analytics = "15 0 * * 1"
```

If you modify this setting, be sure to restart ncbo_cron services (see previous step).

If you need to manually refresh the Analytics data without having to wait for the Cron job to execute, you can run the `ncbo_ontology_analytics_rebuild` script, located in the `ncbo_cron/bin` folder:
```
# sudo su - ontoportal
# cd /srv/ontoportal/ncbo_cron
# ./bin/ncbo_ontology_analytics_rebuild
```

#### Note that this script DOES NOT exist in Virtual Appliance versions prior to v3.0.2! 

The script does not require any arguments; simply execute it, and your Analytics data will get pulled from Google Analytics into the Redis datastore and will be immediately picked up by your OntoPortal services. Note that this step is optional. It should be used only when you need the absolute latest Analytics data, and you don't want to wait until the Analytics Cron job gets executed.

## Tests using API explorer

Relevant links are
* https://developers.google.com/apis-explorer/#search/analytics/m/analytics/v2.4/analytics.data.get
* https://ga-dev-tools.appspot.com/query-explorer/

```
 id = ga:111821946
 start-date = 30daysAgo
 end-date = yesterday
 metrics = ga:pageviews
 dimensions = ga:pagePath,ga:year,ga:month
 filters
```

## Removing Analytics from OntoPortal UI

In `/srv/ontoportal/bioportal_web_ui/current/app/views/home/index.html.haml` add:

```
 display: none;
 %fieldset{style: "display: none;"}
  %legend
   Ontology Visits #{"in full #{$SITE} " if at_slice?} (#{@analytics.date.strftime("%B %Y")})
```

In `/srv/ontoportal/bioportal_web_ui/current/app/views/ontologies/_visits.html.haml` add:

```
 display:none;
 #visits_content{:style => "margin: 2em 1em 0;"}
 ```
