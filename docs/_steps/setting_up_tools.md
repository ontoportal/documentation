---
title: Setting Up Tools
layout: default
description: Configuring the various OntoPortal tools
weight: 40
status: In progress
---

# Setting Up Tools

In these instructions, replace the '{my_appliance_ip_or_my_appliance_hostname}' text with the IP address or domain name that's assigned to your Virtual Appliance.

## Setting up the widgets

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

## Ontology API Tester

