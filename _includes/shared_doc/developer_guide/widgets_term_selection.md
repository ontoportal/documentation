**Term-selection field on a form**
Developers can add a text field to their web form that will allow users to enter a term from a controlled vocabulary (e.g., terms from a single {{include.atom}})

**What does the term-selection field do?**
Auto-complete the text field so that user don't need to type the whole term
The controlled vocabulary provides consistency in the manner in which different users use a specific term
When a new version of your controlled vocabulary becomes available in {{ page.portal }}, the widget will automatically use that new version.
To add a field to a web form that allows users to retrieve a term from the {{ page.atom }} of interest, do the following:
- download the form_complete.js file and put it on your server;
- in the header of the page where want the field, include the form_complete.js file;
- in the form, specify the field class in the following format: bp_form_complete-{semantic_resource_acronym_list}-{value} 
  - Note: In addition to single ontology IDs, you can use a list:
bp_form_complete-FISHTRAITS, ENVTHES-uri OR you can use 'all' to search across all {{ page.portal }} {{ page.atom }}: bp_form_complete-all-uri 
- Developers can use the following parameters to select which value will be placed into the user-visible input field: 
  - uri: the complete URI of the term;
  - shortid: the short ID of the term, as used in {{ page.portal }};
  - name: the preferred name of the term;

**Auto-generated hidden form elements**
In addition to the input element you defined, there are four hidden form elements that are automatically created and set when users select a term from the list. For example, if you create a field with this code:
```
<input type="text" name="a" class="bp_form_complete-all-uri" size="100"/> 
The 'name' attribute is used to create the four following fields (note how the 'a' from the name attribute is appended to the id attribute:
 <input type="hidden" id="a_{{ page.portal }}_preferred_name">
 <input type="hidden" id="a_{{ page.portal }}_concept_id">
 <input type="hidden" id="a_{{ page.portal }}_ontology_id">
 <input type="hidden" id="a_{{ page.portal }}_full_id">
```

**Optional attributes**
- **Include term definitions** Use `data-bp_include_definitions="true"`  to display definitions with the list of terms that are returned.
- **Limit search to terms below a root term.** Use data-bp_search_branch="{class_id}", replacing {class_id} with the class ID for the term to use as the branch root.

**Object types:**
- **Search 'class' and 'property' objects.** Use data-bp_objecttypes="class,property".
- **Search only 'property' objects.** Use data-bp_objecttypes="property".
- **Search 'class' and 'individual' objects.** Use data-bp_objecttypes="class,individual".
- **Search only 'individual' objects.** Use data-bp_objecttypes="individual".
