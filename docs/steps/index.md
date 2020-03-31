---
title: Installing OntoPortal
layout: default
main: true
sortingIndex: C
description: Key steps to install the OntoPortal Appliance
---

<h1>Installation Steps</h1>

Installing OntoPortal software requires a number of steps, which may vary depending on your target platform.  
The standard {{site.opva}} steps are described in more detail below, beginning with an overview of the Appiance.
Steps that are specific to a target platform will contain that platform name.

<div>
{% assign sorted_steps = (site.steps | sort: 'title') %}

{% for step in sorted_steps %}

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
