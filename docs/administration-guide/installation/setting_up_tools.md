---
title: Setting Up Tools
layout: default
summary: Configuring the various OntoPortal tools
status: In progress
nav_order: 6
parent: Installing OntoPortal
grand_parent: Administration Guide
permalink: /administration/steps/setting_up_tools
---

# Setting Up Tools

In these instructions, replace the '{my_appliance_ip_or_my_appliance_hostname}' text with the IP address or domain name that's assigned to your Virtual Appliance.

## Setting up the widgets

```diff
! Verify these instructions are still correct.
```

In addition to the existing widget instructions on your Appliance's Widgets tab, 
you must include an additional Javascript variable 
in order to have the widgets communicate with your instance of the Virtual Appliance.
```
 var BP_SEARCH_SERVER = "http://{my_appliance_ip_or_my_appliance_hostname}";
```

### Test page for the widgets

There is a test page that you can use to see how the various widgets work.
```
http://{my_appliance_ip_or_my_appliance_hostname}/test/widgets/form_autocomplete.html
```

## OntoPortal Utilities

OntoPortal offers a set of scripts for benchmarking and troubleshooting issues with your installation of OntoPortal. The source code and documentation is located here:

https://github.com/ncbo/ontoportal_utilities

You may need to tweak the software to make it work in your environment, 
for example if you need two different API keys to access two different systems.
