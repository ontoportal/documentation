# History

## Background

OntoPortal originates from the NCBO BioPortal software, developed from scratch as a domain-independent, open-source ontology repository platform. After being reused early on by several ad-hoc projects, the technology was packaged in 2012 — with the release of BioPortal 4.0 — as a Virtual Appliance: a virtual server machine embedding the complete code and deployment environment, enabling anyone to set up and customize their own local ontology repository. The technology adopted the name "OntoPortal" in 2018.

In 2015, the SIFR BioPortal prototype was built to develop a French Annotator and experiment with multilingual support in BioPortal. That same year, AgroPortal — the first reuse of the technology to build a free, open, community-driven ontology repository in the spirit of BioPortal, but dedicated to the agri-food domain — was started.

Since 2020, the OntoPortal technology has been adopted by multiple other communities: ecology with EcoPortal, earth sciences with EarthPortal, biodiversity with BiodivPortal, and astronomy with OntoPortal-Astro, among others. This growing federation of independently-operated but technically aligned portals led to the creation of the [OntoPortal Alliance](https://ontoportal.org).

The EOSC-funded FAIR-IMPACT project later worked with several of these communities (AgroPortal, EcoPortal, EarthPortal, OntoPortal-Astro) to consolidate, deploy, and experiment with their semantic artefact catalogues. The project also consolidated the [Metadata for Ontology Description and Publication (MOD)](https://github.com/FAIR-IMPACT/MOD) vocabulary and published a [shared API for semantic artefact catalogues based on MOD](https://github.com/FAIR-IMPACT/MOD-API), now implemented by several OntoPortal-based portals.

## Code Release Histories

The {{site.opva}} code is based on the latest BioPortal code. To view current release notes for BioPortal, please refer to one of the following pages:

* [BioPortal REST API release notes](https://github.com/ncbo/ontologies_api/releases)
* [BioPortal web application release notes](https://github.com/ncbo/bioportal_web_ui/releases)

Previous release history for BioPortal is available in the [BioPortal Release Notes](https://www.bioontology.org/wiki/BioPortal_Release_Notes). 

{: .highlight }
If you are running the code corresponding to AgroPortal, release notes describing features implemented along the way (but not always reported in the BioPortal codebase) are available [here](https://wiki.agroportal.eu/s/d77f1b99-60fb-4fdb-982b-927204f1c1e3).


## OntoPortal Virtual Appliance Release 4.0 (April 2025) and 4.1 (May 2025)

No more Amazon AMI distribution.

## OntoPortal Virtual Appliance Release 3.0 (May 2020)

The {{site.opva}} 3.0 was released as a VMWare OVF and as an Amazon AMI. 
It contains a significant number of feature improvements and usability upgrades, 
and several adaptations targeting the deployers of public Appliance instances. 
A major upgrade for further experimentation is the ability to test 
a different RDF backend store, as we offer AllegroGraph compatibility for the first time in the 3.0 release.

This release also finally offers more complete understanding of Appliance use,
as all Appliance users will register their use of the software in order to continue operating it in a nag-free way.

The Release History for {{site.opva}} version 3.0 is available in the 
[{{site.opva}} Release Notes](https://github.com/ncbo/virtual_appliance/blob/3.0/CHANGELOG.md).

## OntoPortal Virtual Appliance Release 2.5 (February 2018)

The OntoPortal Virtual Appliance 2.5 is the (rebranded) update of the BioPortal Virtual Appliance originally developed by the National Center for Biomedical Ontologies (NCBO). This Virtual Appliance software is based on BioPortal's v5.x software infrastructure, including the use of an RDF triplestore as the primary data storage mechanism.

This version was released as a VmWare package, but never as an AWS Machine Instance. A later minor version release was the first release to include a 'call home' feature, enabling users to be aware of updates and BMIR to be aware of the number of active deployed (version 2.5) appliances.

Updates in this final 2.5 release: Ruby upgraded to v2.3.6, Web UI updated to v5.4.4, API updated to v5.6.3. As with the release candidates below, this release was only available as an OVF package; an Amazon Machine Instance format was never released for 2.5.

The Release History for Appliance versions 2.4 and 2.5 is available in the [BioPortal Virtual Appliance Release Notes](https://www.bioontology.org/wiki/BioPortal_Virtual_Appliance_Release_Notes).


### Release candidates leading to 2.5

* **2.5 RC3 (October 2017)**: Web UI updated to v5.2.0 with an appliance-specific UI layout; the product was rebranded from "NCBO BioPortal Appliance" to "OntoPortal Appliance".
* **2.5 RC2 (August 2017)**: Solr updated to v6.6, now running as a stand-alone service instead of inside a Tomcat container; Web UI updated to v5.1.2; API updated to v5.4.1. Known issues: the Web UI layout was not yet customized for the appliance (still showed bioportal.bioontology.org branding), and the header menu linked to a non-functioning resource index tool.
* **2.5 RC1 (August 2017)**: Web UI updated to v5.1.1 with a major interface overhaul, Rails 4.x support, and the Bootstrap framework; the bundled UMLS Semantic Network (STY) ontology was updated to 2016AA; included experimental scripts for minor component updates. Same known issues as RC2.

## BioPortal Virtual Appliance Release 2.4 (April 2015)

Released as both a VMWare Virtual Appliance OVF, and as an Amazon Web Service AMI, this appliance was based on BioPortal 4.x series software. The appliance included an advanced ontology recommender as well as several other more advanced versions of BioPortal capabilities.

Release 4.15 was a silent release containing bug fixes only; patch numbers below indicate subsequent updates.

## NCBO Virtual Appliance (original release?) (pre-October 2010)

The first known work on the Virtual Appliance was October 25, 2010, with the [creation of the Category wiki page](https://www.bioontology.org/mediawiki/index.php?title=Category:NCBO_Virtual_Appliance&oldid=10295). 
It appears the Appliance was mature as of this date.