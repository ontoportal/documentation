# Licensing

## Location of Open Source Software

The source code for the executable OntoPortal software included in the {{site.opva}}
is provided as open source content under a 2-clause BSD license.

The Appliance bundles the multiple code repositories, all maintained on <a href="https://github.com/ontoportal">GitHub</a>. For technical coherence, the forks corresponding to BioPortal system (https://github.com/ncbo) are usually taken to package the {{site.opva}} and it is up to you to update the code to the upstream repositories or other branches. 

You are welcome to examine and reuse these repositories, and can submit pull requests against them (see <a href="{{site.baseurl}}/developer-guide/code-of-conduct">Code of Conduct</a>).

Software from other organizations is released using the license that applies to that software. For example, for the AllegroGraph graph database, see [AllegroGraph web site](https://allegrograph.com).

The *packaging* we use to create the Virtual Appliance is not open source,
and to use this packaged appliance you must obtain a license. 
(Members of the OntoPortal Alliance have access to and maintain the packaging software.)

## {{site.opva}} License Terms

Licenses to use the software are provided free to the following users:
* **individual users** for their own research,
* **non-profit organizations**, and 
* **educational institutions**. 

Companies who wish to deploy the Virtual Appliance, 
and individuals working on commercial products, 
are asked to contact us to discuss the licensing terms.
You can do so either by emailing our (public) 
<a href="mailto:{{email-support}}">email support list</a>,
or by registering your appliance (after you install it) at our 
[OntoPortal License Server](https://license.ontoportal.org). 
Your registration request will be visible 
only to  {{site.opva}} license managers,
who should take action within a working day.

If there is a fee involved, a clarification is needed, 
or you have provided a note with your license request, 
you will be contacted;
otherwise we will simply issue the requested license.

## License Implementation

The {{site.opva}} requires a current license certificate 
for licensed operation. Without a current certificate, 
reminders appear at the top of most pages in the repository. 
While repository functions operate normally, 
the Appliance is not approved for operation in this state.
The initial distribution of the Appliance comes with a 30-day license,
and the user must download and start the Appliance
before finalizing their license application.

License certificates are obtained at the 
[OntoPortal License Server](https://license.ontoportal.org). 
To obtain the license certificate, the requestor fills out a form
on the license server which indicates the planned application type.
In order to obtain and deploy the final license, the user
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
