---
title: Widgets @EcoPortal
summary: How to implement EcoPortal widgets in your projects
layout: default
parent: Developer guide @EcoPortal
grand_parent: User Guide
permalink: user_guide/developer_guide/widgets/EcoPortal
nav_order: 3
---



### {{ page.portal }} widgets: how to use them
{{ page.portal }} widgets are snippets of HTML or JavaScript code that users can embed in their website/web form to use the {{ page.portal }} functionalities. Using {{ page.portal }} widgets is just one of the ways in which users can use {{ page.portal }} technologies on your website/application.
Developers can add any {{ page.portal }} widget to their HTML page or web form by following these steps:
- find the semantic artefact that users are interested in by browsing the list of [EcoPortal semantic artefacts](http://ecoportal.lifewatch.eu/ontologies) (e.g., Fish Traits Thesaurus);
- click on the semantic artefact name to get to the page with [Details for that semantic artefact](http://ecoportal.lifewatch.eu/ontologies/FISHTRAITS) (e.g., the details for Fish Traits Thesaurus);
- in the {{ page.atom }} details page, go to the “Widgets” tab;
- select the widget that want to use;
- click the button below the widget to get usage instructions.

__Term-selection field on a form__

Developers can add a text field to their web form that will allow users to enter a term from a controlled vocabulary (e.g., terms from a single semantic artefact).

__Example use case:__ suppose that a developer is running a tissue microarray database and that users can upload sample descriptions to the database by means of a web form. Usually, there is a field to specify the diagnosis related to the tissue sample that the user is filling in. This field is often a text-box or a dropdown menu, populated with a list of controlled terms. The free text-box is prone to errors, while the dropdown becomes unmanageable with too many terminologies. The EcoPortal term-selection widget allows users to easily select a term from an ontology or a controlled vocabulary to fill in the specific field. For example, when the user starts typing "fish", the term "fish traits'' pops up.

**What does the term-selection field do?**

- Auto-complete the text field so that user don't need to type the whole term.
- The semantic artefact provides consistency in the manner in which different users use a specific term.
- When a new version of your semantic artefact becomes available in EcoPortal, the widget will automatically use that new version.

To add a field to a web form that allows users to retrieve a term from the semantic artefact of interest, do the following:

- download the [form_complete.js](http://ecoportal.lifewatch.eu/javascripts/widgets/form_complete.js) file and put it on your server;
- in the header of the page where want the field, include the form_complete.js file;
- in the form, specify the field class in the following format: `bp_form_complete-{semantic_resource_acronym_list}-{value}`
  - **Example:** `bp_form_complete-FISHTRAITS-uri` will use FISH TRAITS Thesaurus (the acronym is FISHTRAITS) and will put the term URI in the field after the user selects the term from the pull-down list.
  - **Note:** In addition to single ontology IDs, you can use a list: `bp_form_complete-FISHTRAITS, ENVTHES-uri` **OR** you can use 'all' to search across all EcoPortal semantic artefact: `bp_form_complete-all-uri`.
- Developers can use the following parameters to select which value will be placed into the user-visible input field:
- `uri`: the complete URI of the term (e.g.,http://thesauri.lifewatchitaly.eu/FishTraits/?tema=5 );
- `shortid`: the short ID of the term, as used in EcoPortal (e.g., ?tema=5);
- `name`: the preferred name of the term (e.g., "Fish Trait").

**Auto-generated hidden form elements**

In addition to the input element you defined, there are four hidden form elements that are automatically created and set when users select a term from the list. For example, if you create a field with this code:

`<input type="text" name="a" class="bp_form_complete-all-uri" size="100"/>`

The 'name' attribute is used to create the four following fields (note how the 'a' from the name attribute is appended to the id attribute:

`<input type="hidden" id="a_ecoportal_preferred_name">`

`<input type="hidden" id="a_ecoportal_concept_id">`

`<input type="hidden" id="a_ecoportal_ontology_id">`

`<input type="hidden" id="a_ecoportal_full_id">`

**Optional attributes**

**Include term definitions**. Use `data-bp_include_definitions="true"` to display definitions with the list of terms that are returned. For example, use this code to display search results for 'heart' terms, with definitions, in the FISHTRAITS Thesaurus:

`<input type="text" name="m" data-bp_include_definitions="true" class="bp_form_complete-FISHTRAITS-name"/>`

**Limit search to terms below a root term**. Use `data-bp_search_branch="{class_id}"`, replacing {class_id} with the class ID for the term to use as the branch root. For example, use this code to limit the search for 'FISH' to terms within the 'Fish Trait' branch of the FISHTRAITS Thesaurus:

`<input type="text" name="n" data-bp_search_branch="Fish Trait" class="bp_form_complete-FISHTRAITS-name"/>`

**Object types:**

**Search 'class' and 'property' objects**. Use `data-bp_objecttypes="class,property"`. For example, use this code to search for 'function' among 'class' and 'property' objects from the "Adverse Event Reporting Ontology":
- `<input type="text" name="o" data-bp_objecttypes="class,property" class="bp_form_complete-AERO-uri"/>`

**Search only 'property' objects**. Use `data-bp_objecttypes="property"`. For example, use this code to search for 'function' among only 'property' objects from the "Adverse Event Reporting Ontology":
- `<input type="text" name="p" data-bp_objecttypes="property" class="bp_form_complete-AERO-uri"/>`

**Search 'class' and 'individual' objects**. Use `data-bp_objecttypes="class,individual"`. For example, use this code to search for 'seizure' among 'class' and 'individual' objects from the "Adverse Event Reporting Ontology":
- `<input type="text" name="q" data-bp_objecttypes="class,individual" class="bp_form_complete-AERO-uri"/>`

**Search only 'individual' objects**. Use `data-bp_objecttypes="individual"`. For example, use this code to search for 'seizure' only among 'individual' objects from the "Adverse Event Reporting Ontology":
- `<input type="text" name="r" data-bp_objecttypes="individual" class="bp_form_complete-AERO-uri"/>`


### Semantic artefact search widget
Developers can add a search box to their website that will allow users to search a specific EcoPortal semantic artefact. When the user selects the term of interest (with the help of the auto-complete feature), users can move directly to the EcoPortal summary page of the corresponding concept.
To add a search widget to a HTML page that allows users to search for a specific {{ page.atom }}:
- download the [quick_jump.js](http://bioportal.bioontology.org/javascripts/widgets/quick_jump.js)) file, put it on your server; 
- copy the code below and paste it to your HTML page:
```js
 <div id="bp_quick_jump"></div>
 <script type="text/javascript">
   var BP_ontology_id = "ACRONYM";
 </script>
 <script src="quick_jump.js" type="text/javascript" charset="utf-8"></script>
```

**Note:** To use Quick Jump across multiple {{ page.atoms }}:
- enter a comma-separated list of {{ page.atom }} ids: `var BP_ontology_id = "ACRONYM, ACRONYM2"`, or
- set the variable to 'all' to search all {{ page.atoms }} in {{ page.portal }}: `var BP_ontology_id = "all"`.

Update the copied code by changing the path to the **quick_jump.js** file that has to point to the server location where you put the HTML file. For example, if you put the quick_jump.js file in the same directory as your HTML file, this is the code that you have to use:
```js
<script type="text/javascript">
 var BP_ontology_id = "ACRONYM";
</script>
<script src="quick_jump.js" type="text/javascript" charset="utf-8"></script>
```
To limit the term search to a particular branch of a {{ page.atom }}, include the following JavaScript in your page (remember to replace the concept ID with the ID for the term that you want to use as the root of your branch): `var BP_search_branch = "{class_id}"`;
To display definitions with the list of terms that are returned, include the following JavaScript in your page: `var BP_include_definitions = true`;

### Semantic artefact visualisation widget

Developers can put a widget on their website that shows semantic artefact of interest, or a part of it, and obtain the same result as in the ["Visualize" tab in EcoPortal](http://ecoportal.lifewatch.eu/ontologies/STY/?p=classes&conceptid=http%3A%2F%2Fpurl.bioontology.org%2Fontology%2FSTY%2FT071#visualization).

To add a widget visualising your semantic artefact in your HTML page, copy the code from the Widget page of your semantic artefact of interest. Here is an example:

```
<iframe src="http://ecoportal.lifewatch.eu/widgets/visualization/?ontology=FISHTRAITS&class=SELECT_CLASS&apikey=YOUR_API_KEY"frameborder="0">
</iframe>
```

### EcoPortal Ontology Tree Widget
Developers can put a widget on their website that displays the semantic artefact tree, or a part of it, with the same result obtained in the "Visualize" tab in EcoPortal.

**Description**

The semantic artefact tree widget is an embeddable Flex application that allows users to interact with a tree to browse semantic artefacts. The widget can be configured to display a list of all the EcoPortal semantic artefacts, allowing users to select which one to view, or can be set to view a particular semantic artefact. Moreover, there are several JavaScript helper functions for the widget, allowing it to be used as a fully functional component in other applications.

**Location**

To use the tree widget, you have to add the following files:
- http://ecoportal.lifewatch.eu/widgets/jquery.ncbo.tree.css
- http://ecoportal.lifewatch.eu/widgets/jquery.ncbo.tree-2.0.2.js

or the minified versions:
- http://ecoportal.lifewatch.eu/widgets/minified/jquery.ncbo.tree.min.css
- http://ecoportal.lifewatch.eu/widgets/minified/jquery.ncbo.tree-2.0.2.min.js


**Setup**

jQuery is required in order to use the tree widget. If jQuery is not still in your project, you have to include it as follows:

`<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>`

Then, you have to create a div element to store the tree:

`<div id="tree"></div>`

initialise the tree with the following JavaScript code:

`var tree = $("#tree").NCBOTree({apikey: "YOUR_API_KEY",ontology: "FISHTRAITS"});`

The div you created will contain a tree showing the roots of the FISHTRAITS semantic artefact. Additional setup options include:
- **autoclose**: to close other branches of the tree when expanding a new one; 
- **atreeClass**: the class to identify the tree; 
- **aautocompleteClass**: the class to identify the autocomplete (search) input; 
- **awidth**: the width of the tree;
- **astartingClass**: to start with this class selected (and expanded to) in the tree;
- **astartingRoot**: to start with this class as the only root displayed in the tree. This allows you to display a sub-tree or branch of your choosing;
- **ancboAPIURL**: to use a different NCBO REST instance (not normally used);
- **ancboUIURL**: to use a different NCBO UI instance (not normally used).

**Callbacks and event triggers**

Developers can interact programmatically with the tree by using JavaScript and jQuery. Callbacks can be passed when setting up the tree:

`var tree = $("#tree").NCBOTree({apikey: "YOUR_API_KEY",ontology: "FISHTRAITS", afterSelect: function(event, classId, prefLabel, selectedNode){console.log(classId);}});`

The available callbacks with their arguments are:
- **beforeExpand**, arg: expandedNode
- **afterExpand**, arg: expandedNode
- **afterExpandError**, arg: expandedNode
- **afterSelect**, arg: classId, prefLabel, selectedNode
- **afterJumpToClass**, arg: classId

It is possible to listen to these callbacks as jQuery events:

`tree.on("afterSelect", function(event, classId, prefLabel, selectedNode){console.log(classId);}`

The events with their arguments are:
- **beforeExpand**, arg: event,expandedNode
- **afterExpand**, arg: event,expandedNode
- **afterExpandError**, arg: event,expandedNode
- **afterSelect**, arg: event,classId, prefLabel, selectedNode
- **afterJumpToClass**, arg: event,classId

**Public methods**

There are a variety of methods to call on the object that is returned when calling **NCBOTree()**. They can be used to get information about the state of the tree or to programmatically interact with it.
```
var tree = $("#tree").data("NCBOTree");
OR
var tree = $("#tree")[0].NCBOTree;
OR
var tree = document.getElementById("tree").NCBOTree;
```

Once you have the tree instance, you can call the following methods:
- **tree.selectedClass()**: returns an object that represents the currently-selected class. The object includes attributes for ID, prefLabel, and URL. URL is the REST location of the class, and performing an HTTP GET on that URL will provide a JSON representation of the class;
- **tree.selectClass(classId)**: activates the class in the tree with the matching URI (classId). This will only work if the class is already visible;
- **tree.jumpToClass(classId)**: replaces the current tree with a version that is expanded with a path from the root to the given class. This method is triggered when selecting a class from the search field. The provided class will be selected in the tree when the tree returns;
- **tree.changeOntology(ontologyAcronym)**: replaces the current tree with the roots from the given semantic artefact.