---
title: Troubleshooting Installations
layout: default
summary: Figuring out why your installation didn't work
status: In progress
nav_order: 8
parent: Installing OntoPortal
grand_parent: Administration Guide
permalink: /administration/steps/troubleshooting_installations
---

# Troubleshooting Installations

Here we describe how to troubleshoot issues with your 
installation of the Appliance. 
As with all the troubleshooting sections, 
this section will be enhanced based on experiences 
with the deployed OntoPortal systems.

For troubleshooting ontology submissions, see the <a href="{{site.baseurl}}/administration/ontologies/troubleshooting_submissions">Troubleshooting Submissions</a> section.

For troubleshooting system operations, see the <a href="{{site.baseurl}}/administration/management/troubleshooting_operations">Troubleshooting Operations</a> section.

## Nothing appears in the browser when accessing the UI

```Diff
! To be enhanced
```

The networking settings for your virtual environment 
can be tricky to configure for each user context, as the networking environment
for the host machine (your computer) can vary over time 
as the host attaches to different networks. 

For example, in a Mac OS environment using VirtualBox as the guest environment, 
we have found a network setting ("Attached to") of "Bridged Adaptor"
often produces the best results. (Within your running console,
"Connect Network Adapter" must be checked.) 
This allows the Appliance to connect to the wider internet,
and your computer to connect to the Appliance (as described in this manual).

If this is not working, 
consider whether you may have two networks operating at once in your computer,
or two network communication paths (as when using a VPN).
If you have a cabled ethernet connection, 
your computer may be using the cabled connection, 
while the VirtualBox environment can only use the wireless connection.
It may be the two networks are not able to connect with each other in your
local networking environment. 
Setting up a VPN may produce similar results, with some connections
going through the VPN and others going directly through your network provider.
Simplifying your network configuration may help troubleshoot the problem.

Your other options include host-only and NAT (Network Address Translation). 
* In host-only mode you can access the Appliance from your computer,
but the Appliance will not access anything else.
* In NAT mode, your Appliance will access the world, 
but you can't access the Appliance without further work. 
(You would need to set port forwarding or 
add a second network card and bind it to the host-only network,
plus set $REST_HOSTNAME to the IP on the host-only network.)

Unfortunately, giving detailed advice on these configurations 
is beyond the scope of the OntoPortal staff at this stage.
You may find someone else with similar experience
by sending email to the [OntoPortal support list](mailto:{{site.support_email}}).




