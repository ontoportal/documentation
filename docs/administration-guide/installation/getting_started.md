---
title: Getting Started
layout: default
summary: First steps toward installing the Virtual Appliance
status: Ready
nav_order: 1
parent: Installing OntoPortal
grand_parent: Administration Guide
permalink: /administration/steps/getting_started
---

# Getting Started

There are several activities involved in getting your own copy of the 
{{site.opva}} up and running with a registered license:
* Obtaining the Appliance (by downloading or deploying it)
* Initial startup, including installation and configuration steps
* Registration process, including
   * Submission of Appliance ID
   * Validation of your Appliance by entering the license certificate

The first step is covered below, with subsequent steps in following pages.

<!-- Not implemented yet
Note that the Registration process can start before or in parallel with
the other steps, but you need the Appliance ID 
(obtained during the system startup) to submit the Registration form
and obtain the license for validating your Appliance.

If you have registration questions or are a commercial user of OntoPortal,
you can register before you obtain the {{site.opva}}.
This will let you ask questions about our registration process,
and lets us know who is interested in the Appliance (thank you!).
Or, you can download and evaluate the appliance first, 
and then choose whether or not you fill out the registration form.
-->

After the OntoPortal operations team has approved your completed registration,
you will have access to your license certificate. 
Copy this certificate and paste it into your Appliance 
in order to complete the installation process.

## Obtaining the {{site.opva}}

The {{site.opva}} is available in a VMWare-compatible Open Virtual Appliance (OVA),
or as an Amazon Machine Instance (AMI) from Amazon Web Services (AWS).
Each of the methods is described below.

### VMWare Version

To obtain the Appliance in an Open Virtual Appliance (OVA), 
you will need a BioPortal account.
If you don't have a BioPortal account, you can <a href="https://bioportal.bioontology.org/accounts/new">create one</a>.

Once you have your BioPortal account, log in to BioPortal and then 
visit the [Virtual Appliance page](https://bioportal.bioontology.org/virtual_appliance). 
You will see the download on this page.

The {{site.opva}} OVA file can be deployed directly into your Virtualization Platform.

### Amazon AWS AMI

For users who want to run their OntoPortal instance on Amazon Web Service cloud, 
an Amazon Machine Instance (AMI) is available on the [OntoPortal Alliance AWS Market Place](https://aws.amazon.com/marketplace/pp/B088NYWLSQ).
(Our licensing approach for using this service is the same as for the VMWare Version.)

## Next steps

After installing a Virtual Appliance following the above steps,
proceed to the <a href="{{site.baseurl}}/administration/steps/initial_installation">Initial Installation</a> step.

You may also wish to begin registering your Appliance, 
as described in the <a href="{{site.baseurl}}/administration/steps/registration">Registration Process</a> step.
