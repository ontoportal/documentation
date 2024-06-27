**{{ page.atom }} visualisation widget**
Developers can put a widget on their website that shows {{ page.atom }} of interest, or a part of it, and obtain the same result as in the "Visualize" tab in {{ page.portal }}.
To add a widget visualising your {{ page.atom }} in your HTML page, copy the code from the Widget page of your {{ page.atom }} of interest. Here is an example:
```html
<iframe src="http://{{include.resturl}}/widgets/visualization/?ontology=ACRONYM&class=SELECT_CLASS&apikey=YOUR_API_KEY"frameborder="0"></iframe>
```