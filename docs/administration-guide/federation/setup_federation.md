---
title: Setup Federation
layout: default
summary: Different things to setup to start consuming content from other portals
status: Preliminary
nav_order: 5
parent: OntoPortal Federation
grand_parent: Administration Guide
permalink: /administration/federation/setup_federation
---

# Setup Federation
## Context
GitHub tags: v3.0.0, v3.0.1, v3.0.2

This major release brings the federation feature to OntoPortal, enabling users to browse ontologies and search for classes and concepts across multiple federated portals. This is a joint release with EcoPortal, EarthPortal and BiodivPortal i.e., each portal is now connected to each other and displays some content from the others.

Technically speaking, this federation is done “at the user interface level” as the backends and APIs of each portal are already the same. The federation architecture is rather simple, based on the project Ontology API Ruby Client which has been changed to query and aggregate the results from multiple backends (as illustrated). The user interfaces have been significantly changed to handle the results coming from different portals while helping users to understand what is going on and addressing performance issues.

![OntoPortal UIs federation]({{site.figures_link}}/OntoPortal/federation/federation-architecture.png)

## Setup API keys

To consume the content from another OntoPortal, you need to create a dedicated account on each portal you would like your own {{site.opva}} to connect to. This will enable federated portals to identify the API calls coming from your own {{site.opva}} and eventually customizing access to some content only. 

For instance, if AgroPortal wants to consume content from EcoPortal, EarthPortal and BiodivPortal, then an "agroportal" account need to be created on the 3 portals. 

By convention: 
- The name of the account shall be the name of the querying portal in small letters.
- The email of the account shall allow to reach out to the administrator of the querying portal.
- The APIkey of this user must be used in the UI and API settings (see below).
- The APIkey of this user must be used for the pull locations for duplicates (see bellow).

## Setup the UI
In  the configuration file `config/bioportal_config_appliance.rb`  add/update `$PORTAL_INSTANCES` variable, all items with an  apikey  present we be enabled to be federate with.
```ruby 
$PORTALS_INSTANCES = [
  {
    name: 'AgroPortal',
    ui: 'https://agroportal.lirmm.fr/',
    color: '#3CB371',
    api: 'https://data.agroportal.lirmm.fr',
    apikey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'light-color': '#F1F6FA'
  },
  {
    name: 'BioPortal',
    ui: 'https://bioportal.bioontology.org/',
    color: '#234979'
  },
  {
    name: 'SIFR BioPortal',
    apikey: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    color: '#74a9cb'
  },
  {
    name: 'EcoPortal',
    ui: 'https://ecoportal.lifewatch.eu/',
    color: '[#0F4E8A](https://www.notion.so/Note-de-travail-135e345b8027803686b1d77de11cceac?pvs=21)',
    api: 'https://data.ecoportal.lifewatch.eu',
    apikey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'light-color': '#F0F5F6'
  },
  {
    name: 'MedPortal',
    ui: 'http://medportal.bmicc.cn/',
    color: '#234979',
  },
  {
    name: 'MatPortal',
    ui: 'https://matportal.org/',
    color: '#009574',
  },
  {
    name: 'IndustryPortal',
    ui: 'http://industryportal.enit.fr',
    color: '#1c0f5d'
  },
  {
    name: 'EarthPortal',
    ui: 'https://earthportal.eu/',
    color: '#1e2251',
    api: 'https://data.earthportal.eu/',
    apikey: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    'light-color': '#F0F5F6'
  },
  {
    name: 'BiodivPortal',
    ui: 'https://biodivportal.gfbio.org/',
    color: '#349696',
    api: 'https://data.biodivportal.gfbio.org/',
    apikey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    'light-color': '#EBF5F5',
  }
]
```

## Setup the API
in the configuration file `config/environments/appliance.rb` add/edit this lines.

```ruby
 config.ui_name                       = 'TestPortal'
 config.title                         = 'TestPortal'
 config.description                   = "The home of ontologies and semantic artefacts in agri-food and related domains."
 config.color                         = '#3CB371'
 config.logo                          = 'https://ontoportal.org/images/logo.png' 
 config.fundedBy = [
    {
      img_src: 'https://commission.europa.eu/themes/contrib/oe_theme/dist/ec/images/logo/positive/logo-ec--en.svg',
      url: 'https://commission.europa.eu/research-and-innovation_en'
    },
    {
      img_src: 'https://www.inrae.fr/themes/custom/inrae_socle/logo.svg',
      url: 'https://www.inrae.fr/enm'
    },
    {
      img_src: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/CNR_Consiglio_Nazionale_delle_Ricerche_logo.png',
      url: 'https://www.cnr.it/en',
    },
    {
      img_src: 'https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/stanford-university-stacked.png',
      url: 'https://www.stanford.edu'
    }
  ]
config.federated_portals = {
    agroportal: {
      name: 'AgroPortal',
      api: 'https://data.agroportal.lirmm.fr',
      ui: 'https://agroportal.lirmm.fr/',
      color: '#3CB371',
      apikey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      'light-color': '#F1F6FA',
    },
    bioportal: {
      name: 'BioPortal',
      ui: 'https://bioportal.bioontology.org/',
      api: 'https://data.bioontology.org/',
      color: '#234979',
      'light-color': '#E9F2FA',
    },
    sifr: {
      name: 'SIFR BioPortal',
      ui: 'https://bioportal.lirmm.fr/',
      color: '#74a9cb',
    },
    ecoportal: {
      name: 'EcoPortal',
      ui: 'https://ecoportal.lifewatch.eu/',
      api: 'https://data.ecoportal.lifewatch.eu/',
      apikey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      color: '#2076C9',
      'light-color': '#E9F2FA',
    },
    medportal: {
      name: 'MedPortal',
      ui: 'http://medportal.bmicc.cn/',
      color: '#234979',
    },
    matportal: {
      name: 'MatPortal',
      ui: 'https://matportal.org/',
      color: '#009574',
    },
    industryportal: {
      name: 'IndustryPortal',
      ui: 'http://industryportal.enit.fr',
      color: '#1c0f5d',
    },
    earthportal: {
      name: 'EarthPortal',
      ui: 'https://earthportal.eu/',
      api: 'https://data.earthportal.eu/',
      apikey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      color: '#404696',
      'light-color': '#F0F5F6'
    },
    biodivportal: {
      name: 'BiodivPortal',
      ui: 'https://biodivportal.gfbio.org/',
      api: 'https://data.biodivportal.gfbio.org/',
      apikey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      color: '#349696',
      'light-color': '#EBF5F5',
    }
  }
```

## Duplicate management

Considering that the same ontology could be found on multiple federated portals, the OntoPortal federation entails some collaborative conventions to properly manage those duplicates to ease both the work of the portal adminstrators and the life of the original ontology developer interested in sharing his/her ontologies in an OntoPortal. 

- Duplicates are identified by acronyms. Therefore, it's important to use the same acronym than the other portals when loading an ontology already strored somewhere in the federation. If a discrepency is found or you think another acronym shoudl be used, contact the portal concerned to discuss and harmonize.
- The OntoPortal federation relies on a "canonical portal" for each duplicates ontologies. The canonical portal is decided after a discussion betweem the adminstrators of the OntoPortal federation. Only the canonical portal shall pull the source file from an external resource (e.g., GitHub or any other URLs) or get the file manually uploaded. The other federated portals must then use the canonical portal to "connect" (via the pull location mechanism) their portals to the canonical one.

Duplicates and canonical portals are [currently available here](https://docs.google.com/spreadsheets/d/163_6fJs_SDIQR09I4RUK70DgtTPtt4WpXIOXzb1I0Ug/edit?gid=161217279#gid=161217279).

To "connect" an ontology duplicate to the canonical portal one needs to setup the pull location of the ontology with the following steps. Hereafter, we illustrate how AgroPortal will setup its pull location for BCO to BiodivPortal, considered the canonical portal for BCO: 

- Go to the ontology page on the canonical portal => https://biodivportal.gfbio.org/ontologies/BCO
- Click on the "{} Go to API" icon 
- Restrict the API URL to go query only the ontology object => https://data.biodivportal.gfbio.org/ontologies/BCO
- Copy the download link =>  https://data.biodivportal.gfbio.org/ontologies/BCO/download
- Create the pull location URL by adding the APIkey of the user corresponding to your portal on the canonical portal => https://data.biodivportal.gfbio.org/ontologies/BCO/download?apikey=YOUR-PORTAL-APIKEY
- If the ontology has already been created, go to the ontology page on your portal => https://agroportal.lirmm.fr/ontologies/BCO 
- If the ontology needs to be created, go to the ontology creation page => https://agroportal.lirmm.fr/ontologies/new
- If the ontology has already been created, go to "Edit ontology>Links" in your own OntoPortal.
- If the ontology needs to be created, get to the "Location" field in the submission form.
- In both cases, enable "Load from URL" and add the previously created pull location URL.

This will trigger either an original or another pull of the ontology on your portal from the canonical portal and after this, you do not have to do anything anymore. Any update on the canonical portal will be taken automatically by your own portal (automatic nightly pulls).

The fact of "connecting" a federated portal to the canonical one for a given ontology enables to: 
- Pull the ontology content from a unique place ensuring the **data** served and displayed by the OntoPortal federation is consistent and the same. 
- The federated portals –not hosting locally the duplicate– to redirect to the canonical portal in the federation. If the duplicate is found locally, the local ontology will be open (see Browse).
- Pull the ontology information from a unique place the **metadata** served and displayed by the OntoPortal federation is consistent and the same. In the future, the federated portals hosting a duplicate will not have to edit/curate the local metadata record for an ontology, it will eventually be taken from the canonical portal.
