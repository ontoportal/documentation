---
title: SPARQL Endpoint Reference
layout: default
summary: About the OntoPortal SPARQL endpoint
status: Preliminary
nav_order: 13
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/reference_sparql_endpoint
---

# SPARQL Endpoint Reference

## Introduction

This is an advanced reference document on setting up your SPARQL endpoint 
so that it can be queried directly, either by you as the machine administrator,
or by external users that have access to your OntoPortal machine.

```diff
- Please keep in mind that it is not safe to simply open port 8081 to the world. 
```

Before performing the steps in this reference, we strongly recommend 
that you read the information in the <a href="{{site.baseurl}}/administration/management/reference_4store">4Store Reference</a>
section of the manual, particularly the *External users querying 4store* section.
These considerations are particularly important 
if you want to allow external users to directly query your 4store database. 

## Directly querying 4store

```diff
- This section needs review, some details may be wrong.
```

The 4store database listens for SPARQL queries on port localhost:8081. 
However, the Appliance has a local firewall in place which blocks port 8081, 
and the default AWS security policy that comes with the Appliance
allows only http, https and SSH ports to pass through.

The simplest way to access the SPARQL endpoint is through an SSH tunnel,
or you could open ports to a specific host. 

### Using an SSH tunnel (Port Forwarding)

From your machine open SSH Tunnel to remote ontoportal server:

```
ssh -L 8081:localhost:8081 centos@[REMOTE_ONTOPORTAL_IP_ADDRESS]
```

Next you can open your machine's browser and check 
the [4store sparql test page](http://localhost:8001/test/),
or connect your favorite sparql client to http://localhost:8081:/sparql/

For more info on SSH tunneling please see [how-to-setup-ssh-tunneling](https://linuxize.com/post/how-to-setup-ssh-tunneling).

### Opening the SPARQL endpoint port

The OntoPortal Appliance uses iptables as a local firewall, 
which is not the default setup for CentOS 7.
 
To open the SPARQL endpoint port, do the following from the command line:
 
```
sudo iptables -I INPUT 8 -p tcp  --dport 8081 -j ACCEPT
service iptables save
```
 
If you need to open the SPARQL endpoint port to a specific network or ip address,
add `-s XXX.XXX.XXX.XXX` to the iptables command, where XXX.XXX.XXX.XXX is the IP address of the system you wish to open up port to. This makes the command sequence:

```
sudo iptables -I INPUT 8 -p tcp  --dport 8081 -j ACCEPT -s XXX.XXX.XXX.XXX
service iptables save
```

## Sending the SPARQL query

*To be provided*

## SPARQL queries

Note that the BioPortal SPARQL endpoint, which the following references apply to,
is not a maintained service for BioPortal. 
The system may not be up, and its content is taken from the main BioPortal system
several years ago.

Examples of useful SPARQL queries may be found at our [SPARQL examples page](http://sparql.bioontology.org/examples),
and considerable background information is available at our [SPARQL documentation page](https://www.bioontology.org/wiki/SPARQL_BioPortal).
(Some of the SPARQL queries may not work on the OntoPortal Appliance.) 

You can also test your own queries against some example content at our [SPARQL test page](http://sparql.bioontology.org/).





