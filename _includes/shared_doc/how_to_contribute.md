## How to contribute to user documentation
In the following sections, you will find straightforward description of how to contribute to this user guide, edit shared files between the portals in the alliance, and add or edit specific content for each portal.
If you don't know how to use Git to edit this documentation, please use the following guide: [How to contribute on github](../../documentation/docs/documentation-docs/how-to-contribute-doc/)

## Files structure
The files are structured as follows:

- Shared content across all portals is located in the folder: `_includes/shared_doc`
- Each portal has its own folder named with the name of the portal in: `docs/users-guide-docs/documentation`
- Figures can be found in the folder: `assets/images/figures/ontoportal/PortalName` (create a new folder if needed)
- From each portal's specific file, we can include the shared documentation to add to it or incorporate specific content.

![files structure]({{site.baseimgs}}/files_structure.png)

### Front matters
- In the very top of each documentation page you need to specify these front matters to make your section appears in tables of content and the side navigation table:
![files head]({{site.baseimgs}}/file_head.png)
    - **title**: the title of the page. Documentation pages sharing the same title with other portals should be identified as specific to your portal by adding a space followed by @ and the name of your portal: `@PortalName`. The full title including the identifier will then be used to designate it at the parent when writing children pages: `parent: My title @PortalName`.
    - **summary**: a brief description of the page. It will appear in the table of content of the parent page, if there's any.
    - **layout**: the page layout. Leave it to default.
    - **parent**: the parent page. Used to define a hierarchy.
    - **grand_parent**: if the page is deeper in the hierarchy and Users guide is not the parent, then it Users guide becomes the grand_parent.
    - **permalink**: defines the end part of the URL of this page. Append the name of your portal at the end of the URL, as shown in the example.
    - **nav_order**: defines the index of the page in the table of content on the left side.
- There are additional front matters you can use that are defined portal-wide (found in ` _config.yml`), but can also be redefined in the header of each page:
    - **display_ontoportal_tabs**: if set to false, it will not show other OntoPortal tabs at the bottom of the page
    - **atom**: define the core naming used for semantic resources (semantic artefact, ontology, etc...)
    - **atoms**: same than previously, but in plural
    - **portal**: the name of the portal

### How to add a new shared section?

1. Create a new file with the extension `.md` within this path: `shared_doc/chapter_name/section_name/sub_section_name.md`
2. Populate it with the desired content.
3. Instead of writing "ontology" or "semantic artefact", write `{% raw %}{{ page.atom }}{% endraw %}` instead (or `{% raw %}{{ page.atoms }}{% endraw %}` for the plural form). Each portal can then decide which name they prefer to use.

### How to use this shared content for different portals?

1. Create a new file with the extension `.md` within this path: `docs/users-guide-docs/documentation/portal_name/chapter_name/section_name.md`

2. Inside this file, use this command: `{% raw %}{% include shared_doc/chapter_name/section_name/sub_section_name.md %}{% endraw %}` to include the desired file.

3. To include multiple files, simply repeat the same command, specifying the correct file names each time.


### How to personalize the content for a specific portal?

- Within section's file, you have the flexibility to insert your desired content either before or after the include tag.
![example_specific_file]({{site.baseimgs}}/example_specific_file.png)
- If the portal has a unique section that isn't intended for inclusion in the shared table of contents, you can create a dedicated file for it. Then, you can add the desired content directly to this file without including any other files.

### How to use a variable portal name in shared files texts?

1. Inside the shared file, instead of writing the name of the portal, for example AgroPortal, you replace it by the variable `page.portal`
![shared_file_var_usage]({{site.baseimgs}}/shared_file_var_usage.png)
2. When you include this file in a specific portal's doc, the portal name is automatically passed to it. The portal name is stored in the variable `page.portal` and can be found at the end of the `_config.yml`.

### How can screenshots or figures, which vary between portals, be incorporated into the shared files?

1. Put the figure in this path: `assets/images/ontoportal/figures/portal_name/figure_name.png`
2. Include the figure in the documentation with this command: `{% raw %}[MyFigureTitle]({{site.figures_link}}{{page.portal}}/MyFigure.png){% endraw %}`
![images_var_usage]({{site.baseimgs}}/images_var_usage.png)


