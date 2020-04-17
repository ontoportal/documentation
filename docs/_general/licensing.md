---
title: Licensing
layout: default
description: How we license the Virtual Appliance
weight: 40
status: Pending
---

# License Terms

The source code for the executable OntoPortal Virtual Appliance 
is provided as open source content on a GitHub repository 
(see Location of Software below). 

The *packaging* we use to create the Virtual Appliance is not open source,
and to use this packaged appliance you must obtain a license. 
Licenses are provided free to individual users for their own research,
as well as to non-profit and educational institutions. 

Companies who wish to deploy the Virtual Appliance, 
and individuals working on commercial products, 
are asked to contact us
(for example, by registering at our [OntoPortal License Server](https://license.ontoportal.org) to discuss the licensing terms.
Your registration request will be visible only to persons responsible for licensing 
the OntoPortal Virtual Appliance.

Any Allegrograph software shipped with the Appliance 
is provided under its own licensing terms,
which can be found at the Allegrograph web site.

# License Implementation

The OntoPortal Virtual Appliance requires a current license certificate 
for licensed operation. Without a current certificate, reminders
are posted at the top of most pages in the repository, 
though most repository functions operate normally.

License certificates are obtained at the [OntoPortal License Server](https://license.ontoportal.org]. 
To obtain a certificate, the requestor must fill out a form,
and indicate the planned application type and the identifier of their deployed system.
Once the certificate is issued, its (encrypted) contents are 
copied from the License Server 
and pasted into the `Licensing` tab of the `Admin` page of OntoPortal software. 

Whenever OntoPortal is operating, it checks for the existence of a current certificate.
The certificate is validated by decrypting it and confirming the correct Appliance ID and 
license end date, among other things.
If the certificate is not present or is past its renewal, 
an error message is displayed on each page.
If the certificate will expire in the near future (currently a 30-day window),
a warning message is displayed.

# Location of Open Source Software

The repositories provided as part of the OntoPortal Virtual Appliance distribution
are maintained in GitHub repositories under the BioPortal GitHub project 
(https://github.com/ncbo). 
You are welcome to examine and reuse these repositories, 
and can submit pull requests against them.

Later in 2020, we plan for the [OntoPortal Alliance](https://ontoportal.org), 
of which BMIR is a principal founding member,  
to begin maintaining OntoPortal software in its dedicated GitHub project.
We will make announcements on the OntoPortal Alliance web site as this content 
becomes available. 
We expect the licensing approach for OntoPortal will not be affected by the
OntoPortal Alliance support for the software.





