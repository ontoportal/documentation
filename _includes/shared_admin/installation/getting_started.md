# Getting Started

There are several activities involved in getting your own copy of the 
{{site.opva}} up and running with a registered license:
* Obtaining the Appliance (by downloading or deploying it)
* Initial startup, including installation and configuration steps
* Registration process with retrieved Appliance ID

## Obtaining the {{site.opva}}

The **recommended** way to install OntoPortal is by getting and installing the {{site.opva}} as provided by [Stanford BMIR](https://bmir.stanford.edu/), which keeps track of all the uses and assigns free licenses. This Appliance is based on the BioPortal codebase and is packaged roughly once a year. To request it, please **contact us** at <support@ontoportal.org>.

A custom version of the {{site.opva}}, based on the AgroPortal codebase, is distributed by [INRAE MISTEA](https://mistea.montpellier.hub.inrae.fr/). To request it, please **contact us** at <support@ontoportal.org>.

The Appliance is available in a VMWare-compatible Open Virtual Appliance (OVA),
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

## Alternative installation methods

Besides the Virtual Appliance, OntoPortal can also be installed as a containerized application. These methods require some familiarity with container tooling and are not the default mode chosen in this documentation.

### Docker

The [`ontoportal_docker`](https://github.com/ontoportal/ontoportal_docker) repository provides a containerized installation of OntoPortal intended primarily for developers and evaluation purposes, rather than production deployments. While it is actively maintained, we currently offer only limited support for this installation method.

### Kubernetes

The [`ontoportal-deployment`](https://github.com/ontoportal/ontoportal-deployment) repository provides deployment resources for setting up a containerized OntoPortal instance using Docker and Kubernetes. It is designed for more robust and scalable deployments, including production environments, although it requires familiarity with container orchestration and infrastructure management. This repository access is limited and you need to **contact us** at <support@ontoportal.org>.

## Next steps

After installing a Virtual Appliance following the above steps,
proceed to the <a href="{{site.baseurl}}/administration-guide/steps/initial_installation">Initial Installation</a> step.

You may also wish to begin registering your Appliance, 
as described in the <a href="{{site.baseurl}}/administration-guide/steps/registration">Registration Process</a> step.