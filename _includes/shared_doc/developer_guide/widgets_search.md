### {{ page.atom }} search widget
Developers can add a search box to their website that will allow users to search a specific {{ page.portal }} {{ page.atom }}. When the user selects the term of interest (with the help of the auto-complete feature), she/he can move directly to the {{ page.portal }} summary page of the corresponding concept.
To add a search widget to a HTML page that allows users to search for a specific {{ page.atom }}: 
download the quick_jump.js file, put it on your server, copy the code below and paste it to your HTML page:
```js
 <div id="bp_quick_jump"></div>
 <script type="text/javascript">
   var BP_ontology_id = "ACRONYM";
 </div>
 <script src="quick_jump.js" type="text/javascript" charset="utf-8"></script>
```

**Note:** To use Quick Jump across multiple {{ page.atoms }}:
- enter a comma-separated list of {{ page.atom }} ids: var BP_ontology_id = "ACRONYM, ACRONYM2", or
- you can set the variable to 'all' to search all {{ page.atoms }} in {{ page.portal }}: var BP_ontology_id = "all".

Update the copied code by changing the path to the quick_jump.js file that has to point to the server location where you put the HTML file. For example, if you put the **quick_jump.js** file in the same directory as your HTML file, this is the code that you have to use:
```js
<script type="text/javascript">
 var BP_ontology_id = "ACRONYM";
 </div>
<script src="quick_jump.js" type="text/javascript" charset="utf-8"></script>
```
to limit the term search to a particular branch of a {{ page.atom }}, include the following JavaScript in your page (remember to replace the conceptid with the ID for the term that you want to use as the root of your branch): var BP_search_branch = "{class_id}";
to display definitions with the list of terms that are returned, include the following JavaScript in your page: var BP_include_definitions = true;
