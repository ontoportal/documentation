#### {{ page.portal }} Ontology Tree Widget
Developers can put a widget on their website that displays the {{ page.atom }} tree, or a part of it, with the same result obtained in the "Visualize" tab in {{ page.portal }}.

**Description**
The {{ page.atom }} tree widget is an embeddable Flex application that allows users to interact with a tree to browse {{ page.atoms }}. The widget can be configured to display a list of all the EcoPortal {{ page.atoms }}, allowing users to select which one to view, or can be set to view a particular {{ page.atom }}. Moreover, there are several JavaScript helper functions for the widget, allowing it to be used as a fully functional component in other applications.

**Location**
To use the tree widget, you have to add the following files:
- http://{{ page.portalURL }}/widgets/jquery.ncbo.tree.css
- http://{{ page.portalURL }}/widgets/jquery.ncbo.tree-2.0.2.js

or the minified versions:
- http://{{ page.portalURL }}/widgets/minified/jquery.ncbo.tree.min.css
- http://{{ page.portalURL }}/widgets/minified/jquery.ncbo.tree-2.0.2.min.js

**Setup**
jQuery is required in order to use the tree widget. If jQuery is not still in your project, you have to include it as follows:
```js
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
```

Then, you have to create a div element to store the tree:
```js
<div id="tree"></div>
```

initialise the tree with the following JavaScript code:
```js
var tree = $("#tree").NCBOTree({apikey: "YOUR_API_KEY",ontology: "ACRONYM"});
```

The div you created will contain a tree showing the roots of the ACRONYM {{ page.atom }}. Additional setup options include:
- **autoclose**: to close other branches of the tree when expanding a new one;
- **treeClass**: the class to identify the tree;
- **autocompleteClass**: the class to identify the autocomplete (search) input;
- **width**: the width of the tree;
- **startingClass**: to start with this class selected (and expanded to) in the tree;
- **startingRoot**: to start with this class as the only root displayed in the tree. This allows you to display a sub-tree or branch of your choosing;
- **ncboAPIURL**: to use a different NCBO REST instance (not normally used);
- **ncboUIURL**: to use a different NCBO UI instance (not normally used).

**Callbacks and event triggers**
Developers can interact programmatically with the tree by using JavaScript and jQuery. Callbacks can be passed when setting up the tree:
```js
var tree = $("#tree").NCBOTree({apikey: "YOUR_API_KEY",ontology: "ACRONYM", afterSelect: function(event, classId, prefLabel, selectedNode){console.log(classId);}});
```
The available callbacks with their arguments are:
- **beforeExpand**, arg: expandedNode
- **afterExpand**, arg: expandedNode
- **afterExpandError**, arg: expandedNode
- **afterSelect**, arg: classId, prefLabel, selectedNode
- **afterJumpToClass**, arg: classId

It’s possible to listen to these callbacks as jQuery events:
tree.on("afterSelect", function(event, classId, prefLabel, selectedNode){console.log(classId);}

The events with their arguments are:
- **beforeExpand**, arg: event,expandedNode
- **afterExpand**, arg: event,expandedNode
- **afterExpandError**, arg: event,expandedNode
- **afterSelect**, arg: event,classId, prefLabel, selectedNode
- **afterJumpToClass**, arg: event,classId

**Public methods**
There are a variety of methods to call on the object that is returned when calling NCBOTree(). They can be used to get information about the state of the tree or to programmatically interact with it.
```js
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
- **tree.changeOntology(ontologyAcronym)**: replaces the current tree with the roots from the given {{ page.atom }}.
