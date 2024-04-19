---
layout: default
title: Documentation
nav_order: 2
has_children: true
permalink: /user_guide
---

# OntoPortal User Guide

Welcome to the official OntoPortal User Guide for each portal within the OntoPortal alliance. Please select a chapter or section from the menu to get started.


In the following sections, you will find straightforward description of how to contribute to this user guide, edit shared files between the portals in the alliance, and add or edit specific content for each portal.

## How to contribute
### Files structure
The files are structured as follows:

- Shared content across all portals is located in the folder: `_includes/shared_doc`
- Each portal has its own folder named with the name of the portal in: `docs/users-guide-docs/documentation`
- From each portal's specific file, we can include the shared documentation to add to it or incorporate specific content.

![files structure]({{site.baseimgs}}/files_structure.png)

- Within the shared_doc directory, you'll discover a structured hierarchy where each chapter contains folders for sections, and each section contains files for subsections. For example, the path might look like this: `_includes/shared_doc/platform_overview/tools/browse.md`

- In each portal's specific folder, there is a subfolder for each chapter containing files for individual sections. Within these section files, we include shared content subsections, expand upon them, or introduce new subsections as needed.

Example of the the file: `agroportal/platform_overview/tools.md`

![example_specific_file]({{site.baseimgs}}/example_specific_file.png)

The variable `portal` that we pass is utilized within the text of the shared file and also determines which screenshot/figure to display.

So the shared file `_includes/shared_doc/platform_overview/tools/index.md` is written like this:

![shared_file_var_usage]({{site.baseimgs}}/shared_file_var_usage.png)

And the screenshot/figure to display is determined like this:

![images_var_usage]({{site.baseimgs}}/images_var_usage.png)

All screenshot/figure are all putted in the following path: `assets/images/figures/portal_name/figure_name.png`


[How to contribute on github](../../documentation/docs/documentation-docs/how-to-contribute-doc/)
