---
title: Licensing
layout: default
description: How we license the Virtual Appliance
weight: 40
status: Ready
---

# License Terms

The source code for the executable OntoPortal Virtual Appliance 
is provided as open source content on a GitHub repository 
(see Location of Software below). 

The *packaging* we use to create the Virtual Appliance is not open source,
and to use this packaged appliance you must obtain a license. 
**Licenses are provided free to the following users**:
* **individual users** for their own research,
* **non-profit organizations**, and 
* **educational institutions**. 

Companies who wish to deploy the Virtual Appliance, 
and individuals working on commercial products, 
are asked to contact us to discuss the licensing terms.
You can do so either by emailing our (public) 
<a href="mailto:{{email-support}}">email support list</a>,
or by pre-registering at our 
[OntoPortal License Server](https://license.ontoportal.org). 
Your registration request will be visible 
only to  OntoPortal Virtual Appliance license managers,
who should take action within a working day.
If there is a fee involved or you have provided a note with your request, 
you will be contacted;
otherwise we will simply issue the requested license.

Any AllegroGraph software shipped with the Appliance 
is provided under its own licensing terms,
which can be found at the [AllegroGraph web site](https://allegrograph.com).

# License Implementation

(See above for all the people who get free licenses!)

The OntoPortal Virtual Appliance requires a current license certificate 
for licensed operation. Without a current certificate, 
reminders appear at the top of most pages in the repository. 
While repository functions operate normally, 
the Appliance is not approved for operation in this state.
The initial distribution of the Appliance comes with a 30-day license,
and the user is expected to download and start the Appliance
before finalizing their license application.

License certificates are obtained at the 
[OntoPortal License Server](https://license.ontoportal.org). 
To obtain the license certificate, the requestor must fill out a form
on the license server which indicates the planned application type.
In order to obtain the final license, the user
must provide the Appliance ID identifier from their deployed system.
Once the certificate is issued, its (encrypted) contents are 
copied from the License Server 
and pasted into a field in the `Licensing` tab 
of the `Admin` page of OntoPortal software. 

While OntoPortal operates, it checks for the existence of a current certificate.
The certificate is validated by decrypting it 
and confirming the correct Appliance ID and license end date, among other things.
If the certificate is not present, or has reached its expiration date, 
an error message is displayed on each page.
If the certificate will expire within 30 days, a warning message is displayed.

# Location of Open Source Software

At this time, the source code provided as part of the 
OntoPortal Virtual Appliance distribution
is maintained in GitHub repositories under the 
[BioPortal GitHub project](https://github.com/ncbo). 
You are welcome to examine and reuse these repositories, 
and can submit pull requests against them.

Later in 2020, we plan for the [OntoPortal Alliance](https://ontoportal.org), 
of which BMIR is a principal and founding member, 
to begin maintaining OntoPortal software in the dedicated 
[OntoPortal GitHub project](https://github.com/ontoportal).
We will make announcements on the OntoPortal Alliance web site 
as this content becomes available. 
We expect the licensing approach for OntoPortal will not be affected by the
OntoPortal Alliance support for the software.





