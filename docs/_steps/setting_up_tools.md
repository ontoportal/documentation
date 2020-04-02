---
title: Setting Up Tools
layout: default
description: Configuring the various OntoPortal tools
weight: 40
status: In progress
---

# Setting Up Tools



## Setting up the widgets

In addition to the existing widget instructions on your Appliance's Widgets tab, 
you must include an additional Javascript variable 
in order to have the widgets communicate with your instance of the Virtual Appliance.
```
 var BP_SEARCH_SERVER = "http://{your_appliance_ip_or_domain_name}";
```
Replace the '{your_appliance_ip_or_domain_name}' text with the IP address or domain name that's assigned to your Virtual Appliance.