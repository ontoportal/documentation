---
title: Initial Installation
layout: default
description: First steps to install your appliance
weight: 20
status: In progress
---

# General Instruction

You can supply the hostname (machine name) for the virtual machine 
during the deployment process. 
Our documentation refers to this hostname as 'my_appliance_hostname'.

These steps start your appliance and set the Appliance ID. 
After getting the Appliance ID, you will have the needed information
to <a href="../registration">register your system and obtain a valid license</a>.

## Initialize the Appliance installation

_What happens here? And is this when it happens? And do we get an Appliance ID?_

## Changing default passwords

Virtual Operating System
* Username: root
* Password: you are prompted to enter your virtual OS password on the first boot

OntoPortal Admin User
* Username: admin
* Password: changeme

For the AWS AMI installation, The default application administrator is 'admin' and the initial password is the Appliance ID.

## Accessing the system

### Obtaining the IP address

_THERE IS THIS_

You can get the IP address of the Appliance by using the following command 
in the terminal: `ip addr show eth0`.

For the AWS AMI installation, the ip_address_of_appliance is 
the public DNS provided by Amazon. 

_OR THERE IS THIS_

You can get IP address of the Appliance with the following methods:

To get the local IP address from the terminal:
```
ip address show eth0 | awk '/inet / {print $2}' | cut -d/ -f1'
```

To get the external IP address from the terminal:
```
curl http://ipecho.net/plain; echo
```

Vmware Appliance:
Check 'IP Addresses' on the summary page of the appliance. Please note that Virtual Appliance does not come with vmware tools installed so IP Address would not be displayed until vmware tools are installed.

Amazon AWS:
use Public IP Addresses or Public DNS listed in your EC2 management console.

_END_

### Accessing the web UI

The Appliance Web UI can be accessed at `http://{ip_address_of_appliance}`. 


### Accessing REST services

REST services are available at the following location:
* `http://{ip_address_of_appliance}:8080`
* `http://{ip_address_of_appliance}:8080/documentation`

### Accessing the operating system via ssh

For the AMS AWI installation, you can  SSH to the machine 
using the username 'ec2-user' and your Amazon private key.


## Next step

To configure your system's settings for your environment  
proceed to the <a href="../initial_configuration">Initical Configuration</a> step.
