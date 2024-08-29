### Classes
On the summary page of the {{ page.atom }}, by clicking on tab “Classes”, it is shown:
- on the left side, different views of the resource. If it is an ontology, you will see the “Hierarchical view”, in which classes are organised in a tree-like structure, and the “Date view”, which displays classes based on their creation and modification dates (if these were defined). In the case of a thesaurus the “Collection view” will also be available. In addition, close to the search bar, there is a filter to select different schemes eventually available within a thesaurus;
- on the right side, an area containing Details, Visualization, Notes and Mappings related to the selected class or concept:
 - Details: tab showing properties and relationships associated with the selected class/concept. Properties like ID, Preferred Name, Definition, and Type are always shown, whereas the remaining properties displayed will vary depending on the resource’s representation model (SKOS; OWL; UMLS; OBO). 
 ![View classes of a specific ontology - details]({{site.figures_link}}/{{page.portal}}/ontology_classes.png)
 ![View classes of a specific thesaurus - details]({{site.figures_link}}/{{page.portal}}/thesaurus_classes.png)
 - Visualization: {{ page.portal }} presents {{ page.atoms }} in a graph format, with resource concepts represented as nodes and the relationships between them as edges. By default, the most basic directional relationships (parent/child relationships) are identified by a solid navy-blue line with an arrow pointing to the child concept/class. Mappings are represented by solid light-grey lines. 
![View classes of a specific {{ page.atom }} - visualization]({{site.figures_link}}/{{page.portal}}/ontology_visualization.png)
 - Notes: it displays all notes issued by {{ page.portal }} users in relation to the selected class/concept. To issue generic comments or proposals regarding new classes, new relationships, or change properties, users must be logged in.
 - Class/Concept Mappings: tab showing all the mappings associated with the selected class/concept. For each mapping you can see:
   - MAPPING TO: the name of the selected class/concept mapped to the class/concept of another resource;
   - ONTOLOGY: the {{ page.atom }} of the mapped class/concept;
   - RELATIONS: the type of relation that the algorithms have used;
   - SOURCE: the mapping algorithm;
   - TYPE: the mappings can be internal to the portal or external to the portal;
   - ACTIONS: the mappings can be edited or deleted by the administrator of the resource.
Logged in users can click on the "Create new Mapping" button to manually insert mappings by filling in the following fields: target {{ page.atom }} or view; target class; details; comment; mapping relation type.
![View classes of a specific {{ page.atom }} - mappings]({{site.figures_link}}/{{page.portal}}/ontology_mappings.png)
