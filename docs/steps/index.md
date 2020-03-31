---
title: Installing OntoPortal
layout: default
main: true
sortingIndex: C
description: Key steps to install the OntoPortal Appliance
---

<h1>Views</h1>

The Protégé user interface is made up of tabs that contain views.  The standard {{site.protver}} views are described in more detail below.  Most of the views have a <b><a href="{{site.baseurl}}/view-look-and-feel">common look and feel</a></b> and consist of lists of sections containing items that pertain to the current selected class, property or individual.
Most of the views that are available in the {{site.protver}} are described below.
We also have a <a href="https://www.youtube.com/watch?v=JObQC-L2piA">video</a> that demonstrates how to add a view to a tab. 

<div>
{% assign sorted_steps = (site.steps | sort: 'title') %}

{% for view in sorted_steps %}

	<div style="padding: 10px;">
		<div style="font-weight: bold;">
			<a href="{{site.baseurl}}{{step.url}}">{{step.title}}</a>
		</div>
		<div style="color: gray; font-size: smaller;">
			{{step.menuPath}}
		</div>
		<div>
				{{step.description}}
		</div>
	</div>
{% endfor %}

</div>
