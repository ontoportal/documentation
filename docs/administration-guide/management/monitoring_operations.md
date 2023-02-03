---
title: Monitoring Operations
layout: default
summary: Ways to monitor the OntoPortal Appliance
status: Preliminary
nav_order: 1
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/monitoring_operations
---

# Monitoring Operations

This document describes the various systems that can be used to monitor the OntoPortal Appliance and its services. 

## Overview of monitoring systems

There are two basic types of monitoring: event notification, and status monitoring, which can include both push reports (notifications), and status displays (current and historical). Status monitoring can also include "going to the site and seeing if it is up", though in the case of OntoPortal, different parts can fail without necessarily impacting other parts.

These are the systems used to monitor BioPortal now or at some time in the past, 
along with the monitoring types they support. Details of each system are below. 

1. Nagios (events, status)
2. Monitis (events, status)
3. NewRelic (events, status)
4. Google Analytics (status)
5. StatusCake (events, status)
6. ELK (status)

## Recommended configuration

The main event notification systems should send their alerts 
to a common email list, 
so a subscription to that list will get you all the key reports.

Problems are reported just once when the problem first occurs, 
and resolution is reported when the problem is first resolved. 
In many cases a heavily loaded system can just take a few-minutes 
before self-correcting. 
Unfortunately, if there were many notifications there is no trivial way 
to review all the notifications to see which 'issue' notifications 
have not yet been resolved; the status systems present that view.

Alerts from the monitoring email list, and some other sources, 
can sent to a Slack channel for more visibility, if you are regularly on Slack. 

## System Descriptions

### 1. Nagios
https://nagios.com

Nagios is installed locally; it is highly configurable but correspondingly complex. The software is open source, well maintained, and has a long history and widespread adoption.

There are a significant number of configured BioPortal tests running in Nagios. Some are interface tests, while others are tests on internal resources (e.g., available space on /var/log). Until these are documented on OntoPortal,
you can contact BMIR for the configuration list.

It can be difficult to configure Nagios in a way that avoid false positives
while still alerting on significant issues or slowdowns.
The recommender API test for example reports an issue 
when the response time goes above 10 seconds, which could happen fairly often
if the system is loaded. 

### 2. Monitis
https://monitis.com

Monitis provides off-site URL uptime monitoring and full page load from multiple locations. 

There are many configured BioPortal tests for Monitis; 
these are all user-facing capabilities. 
Of the 15+ tests, most are API tests, while some are UI tests.

Because monitis messages document the size of the response to a query, 
they are handy for easily checking certain kinds of failures, 
like the empty results 4-store sometimes returns or 
partial returns to page requests.

Monitis has external monitoring pages at http://dashboard.monitis.com. 
Performance Representation is a nice 'stop-light' chart with a historical record.

### 3. NewRelic

https://newrelic.com

NewRelic has very sophisticated monitoring services and reporting services, 
very nicely formatted. 
The system requires code insertion and 
access to the various logs from 4store servers, 
and does a great job analyzing the historical record and summarizing it.
For example the BioPortal weekly reports from NewRelic provide a wealth of detail 
about the number of accesses to the system.

NewRelic also allows detailed exploration of reported issues, 
including modules with long execution times and 
detailed examination of individual failures. 
It also has a top-notch iPhone application that lets you quickly see 
the status of your system and any pending issues.

### 4. Google Analytics

https://analytics.google.com

Google requires insertion of code into the pages being monitored.
OntoPortal contains this code, which can activated following 
the instructions in [Google Analytics Management]({{site.baseurl}}/administration/management/google_analytics_management).

Google provides tremendous analytics of the general use of pages on a web site,
including breakdown by unique users and many other statistics.
Unfortunately, the subviews in OntoPortal—tabs on various pages,
and clicks on individual terms that show subviews for that term—
are not captured by Google Analytics. 
(Detailed log analysis would be required for this information;
contact Stanford BMIR if you are interested in code previously written for this purpose.)

### 5. StatusCake 

https://statuscake.com

StatusCake provides a simple and attractive interface 
that can be used for a publicly visible system status report.
The basic service can monitor web page and API page responses,
and so far simple applications are free.

### 6. ELK

ELK Stash can be used to aggregate and parse logs from the API/UI/4store servers.
BioPortal used this system extensively, and valued it highly
for providing a real-time view of system performance.
Unfortunately it requires thoughtful configuration
and we have not been able to maintain its configuration recently.
