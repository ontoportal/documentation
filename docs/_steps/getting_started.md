---
title: Getting Started
layout: default
description: First steps toward installing the Virtual Appliance
weight: 10
status: In Progress
---

# Getting Started

There are several activities involved in getting your own copy of the 
{{site.opva}} up and running with a registered license:
* Download (or deployment via AMI)
* Initial startup
* Registration process, including
   * Submission of Appliance ID
   * Validation of your Appliance by entering the license certificate

The first steps are outlined below, with subsequent steps in other pages.
Note that the Registration process can start before or in parallel with
the Download and Initial startup; you just need the Appliance ID
(obtained during the system startup) to complete the Registration process
and obtain the license for validation in your Appliance.

We'd appreciate your registration before you even download the {{site.opva}}, 
or in parallel with that step. 
However, you can download and evaluate the appliance, 
and then choose whether or not you fill out the registration form.

After the OntoPortal operations team has approved your completed registration,
you will have access to your license certificate. 
Copy this certificate and paste it into your Appliance 
in order to complete the installation process.

## Obtaining the {{site.opva}}

### VMWare Version

To obtain the VMWare Virtual Appliance in an Open Virtualization Format (OVF), 
you will need a BioPortal account.
If you don't have a BioPortal account, you can create one at http://bit.ly/bioportal-account.

Log in to BioPortal and then visit the [Virtual Appliance page](https://bioportal.bioontology.org/virtual_appliance). 
You will see the download on this page.

The download is provided as a zip archive containing several files. 
Unpack the files using a zip unpacking tool for your operating system.

One of the files in the download is an Open Virtualization Format (OVF) file .
You may need to 
<a href="../virtualization_environments">convert this file 
for your virtualization environment</a>.

### Amazon AWS AMI

For users who want to run their OntoPortal instance on Amazon Web Service cloud, 
an Amazon Machine Instance (AMI) is available on the BioOntology AWS Market Place. 

## Next steps

After installing a Virtual Appliance following the above steps,
proceed to the <a href="../initial_installation">Initial Installation</a> step.

You may also wish to begin registering your Appliance, 
as described in the <a href="../registration">Registration Process</a> step.
