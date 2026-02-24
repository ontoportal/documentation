## Homepage

The {{ page.portal }} homepage (Figure 1) consists of:
- a header containing the logo on the left and the [navigation bar](#navigation-bar) on the right;
- a [search bar]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/platform_overview/tools.md %}#search) to quickly search for terms or for semantic artefacts by entering a free text. The autocomplete functionality will support the quest by suggesting terms or semantic artefacts available within the portal;
- some statistical information, provided as bubbles cloud, indicating the number of visits for the EcoPortal semantic artefacts;
- EcoPortal metrics such as number of published resources, number of classes, etc.;
- a [recommender]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/platform_overview/tools.md %}) and [annotator]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/platform_overview/tools.md %}) box;
- the [O’FAIRe](#ofaire-tool) tool with the average FAIR score of the semantic artefacts published within EcoPortal;
- a news box displaying the most recent posts of LifeWatch ERIC;
- the links to other OntoPortal instances;
- the EcoPortal collaborations and support;
- a [footer](#footer) containing additional supporting information and documentation.



### Navigation bar

The navigation bar at the top of the homepage contains eighth menu items for navigating within EcoPortal:

- __Browse__ - to search semantic artefacts.
- __Mappings__ - to explore mappings and upload them.
- __Recommender__ - to get recommendations from semantic artefacts’ terms.
- __Annotator__ - to get annotations with semantic artefacts’ terms.
- __Landscape__ - to visualise data retrieved from analyses on semantic artefacts metadata.
- __VocBench__ - to create or edit a semantic artefact.
- __Login__ - to access the login/registration form. Once logged in, username will be displayed here and it will show the access to [account setting](#account-settings) and “logout” button.
- __Support__:
  - __Send Feedback__ - to request assistance with questions, bug reports, feedback, and so on through an easy-to-use contact form.
  - __Documentation__ - to access the EcoPortal documentation.
  - __Cite us__ - to find the citation and read the publications related to EcoPortal.
  - __Release Notes__ - to read the last release notes.
  - __Groups and Categories__ - to find more information about groups and categories available in EcoPortal.

![Homepage]({{site.figures_link}}/{{page.portal}}/Figure1.png)
{: .text-center }

_Figure 1: EcoPortal Homepage._
{: .text-center }
### Account settings

In the navigation bar, the Account Settings page can be accessed to view all the account details: personal information, submitted semantic artefacts, mailing list subscription, customisation options and the personal API Key (Figure 2).

![Homepage]({{site.figures_link}}/{{page.portal}}/Figure2.png)
{: .text-center }

_Figure 2: Account setting page_
{: .text-center }

### O’FAIRe tool
The Ontology FAIRness Evaluator (O’FAIRe) tool is a web service that performs an automatic FAIRness evaluation of semantic artefacts by analysing metadata fields associated with particular questions corresponding to each FAIR principle and sub-principle.

The tool automatically executes the tests and evaluates how the semantic artefacts respond to the questions, providing a global normalised FAIR score associated with some basic statistics. To better understand which are the features of the tool and how the FAIRness evaluation is executed for each semantic artefact, please go [here]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/platform_overview/ontology_details.md %}). To learn more about the tool please visit the [GitHub page](https://github.com/agroportal/fairness).

### Footer

The footer contains all the EcoPortal support links, divided into five sections:

- __Products__:
  - __Release Notes__
  - __API__
  - __OntoPortal__
- __Support__:
  - __Contact Us__
  - __Documentation__
- __Legal:__
  - __Terms & Conditions__ 
  - __Privacy Policy__ 
- __About:__
  - __About us__ 
  - __Team__ 
  - __Cite Us__ 
  - __Projects__

