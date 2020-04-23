---
title: Getting Started
layout: default
description: First steps toward installing the Virtual Appliance
weight: 10
status: Ready
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
Note that the Registration process can start before or in parallel with
the other steps; you just need the Appliance ID
(obtained during the system startup) to complete the Registration process
and obtain the license for validating your Appliance.

It's great if you register before you even obtain the {{site.opva}},  
However, you can also download and evaluate the appliance first, 
and then choose whether or not you fill out the registration form.

After the OntoPortal operations team has approved your completed registration,
you will have access to your license certificate. 
Copy this certificate and paste it into your Appliance 
in order to complete the installation process.

## Obtaining the {{site.opva}}

The {{site.opva}} is available in a VMWare-compatible Open Virtualization Format (OVF),
or as an Amazon Machine Instance (AMI) from Amazon Web Services (AWS).
Each of the methods is described below.

### VMWare Version

To obtain the Appliance in an Open Virtualization Format (OVF), 
you will need a BioPortal account.
If you don't have a BioPortal account, you can <a href="http://bit.ly/bioportal-account">create one</a>.

Once you have your BioPortal account, log in to BioPortal and then 
visit the [Virtual Appliance page](https://bioportal.bioontology.org/virtual_appliance). 
You will see the download on this page.

The download is provided as a zip archive containing several files. 
Unpack the files using a zip unpacking tool for your operating system.

One of the files in the download is an Open Virtualization Format (OVF) file.
You may need to 
<a href="../virtualization_environments">convert this file 
for your virtualization environment</a>.

### Amazon AWS AMI

For users who want to run their OntoPortal instance on Amazon Web Service cloud, 
an Amazon Machine Instance (AMI) is available on the [BioOntology AWS Market Place](https://aws.amazon.com/marketplace/seller-profile/ref=dtl_pcp_sold_by?ie=UTF8&id=76948a46-8f8a-4a68-9a5c-3e3ff6b82d10). 

## Next steps

After installing a Virtual Appliance following the above steps,
proceed to the <a href="../initial_installation">Initial Installation</a> step.

You may also wish to begin registering your Appliance, 
as described in the <a href="../registration">Registration Process</a> step.
