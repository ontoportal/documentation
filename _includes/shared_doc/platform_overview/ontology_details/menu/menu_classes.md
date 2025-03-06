### Classes/Concepts
On the summary page of the semantic artefact, by clicking on tab “Classes/Concepts”, it is shown:
- on the left side, classes/concepts can be displayed using a “Hierarchical view”, in which classes/concepts are organised in a tree-like structure, and a “Date view”, which displays classes/concepts based on their creation and modification dates (if these were defined). In the case of a thesaurus (Figure 18) the “Collection view” will also be available. In addition, close to the search bar, there is a filter to select different schemes or collections eventually available within the thesaurus;
- on the right side, an area containing Details, Visualization, Notes and Mappings related to the selected class/concept is displayed:
  - **Details**: tab showing properties and relationships associated with the selected class/concept (Figure 17-18). Properties like ID, Preferred Name, Definition, and Type can be shown together with other properties,  depending on the resource’s representation model (SKOS; OWL; UMLS; OBO) and on the properties included in the selected semantic artefact. 

    ![View classes of a specific ontology - details]({{site.figures_link}}/{{page.portal}}/Figure17.png)
    {: .text-center }
    
    _Figure 17: View classes of a specific ontology - details_
    {: .text-center }
    ![View classes of a specific thesaurus - details]({{site.figures_link}}/{{page.portal}}/Figure18.png)
    {: .text-center }
    
    _Figure 18: View classes of a specific thesaurus - details_
    {: .text-center }

  - **Notes**: it displays all notes issued by EcoPortal users in relation to the selected class/concept. To issue generic comments or proposals regarding new classes, new relationships, or change properties, users must be logged in. 
  - **Class/Concept Mappings**: tab showing all the mappings associated with the selected class/concept (Figure 19). For each mapping users can see:
    - Mapping to: the name of the selected class/concept mapped to the class/concept of another resource; 
    - Semantic resource: the semantic artefact of the mapped class/concept; 
    - Type: the mappings can be internal to the portal or external to the portal;

Logged in users can click on the "Create new mapping" button to manually insert mappings by selecting the mapping type (i.e. Internal, InterPortal or External) and filling in the following fields: target class, details, mapping description, contact info, source name, comment, mapping relation type.
For more information about the mapping “Source” click [here]({{ site.baseurl }}{% link docs/users-guide-docs/documentation/ecoportal/platform_overview/tools.md %}#mappings).

![View classed of a specific semantic artefact - mappings]({{site.figures_link}}/{{page.portal}}/Figure19.png)
{: .text-center }

_Figure 19: View classed of a specific semantic artefact - mappings_
{: .text-center }