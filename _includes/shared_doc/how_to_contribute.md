## How to contribute

### How to add a new shared section?

1. Create a new file with the extension `.md` within this path: `shared_doc/chapter_name/section_name/sub_section_name.md`
2. Populate it with the desired content.

### How to use this shared content for different portals?

1. Create a new file with the extension `.md` within this path: `docs/users-guide-docs/documentation/portal_name/chapter_name/section_name.md`

2. Inside this file, use this command: `include shared_doc/chapter_name/section_name/sub_section_name.md` to include the desired file.

3. To include multiple files, simply repeat the same command, specifying the correct file names each time.


### How to personalize the content for a specific portal?

- Within section's file, you have the flexibility to insert your desired content either before or after the include tag.
![example_specific_file]({{site.baseimgs}}/example_specific_file.png)
- If the portal has a unique section that isn't intended for inclusion in the shared table of contents, you can create a dedicated file for it. Then, you can add the desired content directly to this file without including any other files.

### How to use a variable portal name in shared files texts?

1. Inside the shared file, instead of writing the name of the portal, for example AgroPortal, you replace it by the variable `include.portal`
![shared_file_var_usage]({{site.baseimgs}}/shared_file_var_usage.png)
2. When you include this file, you need to pass the value of the portal variable like this:  `include shared_doc/chapter_name/section_name/sub_section_name.md portal="AgroPortal"`

### How can screenshots or figures, which vary between portals, be incorporated into the shared files?

1. Put the figure in this path: `assets/images/ontoportal/figures/portal_name/figure_name.png`
2. Use this command
![images_var_usage]({{site.baseimgs}}/images_var_usage.png)
3. When you include this file in a specific portal's doc, you need to pass the value of the portal variable like this:  `include shared_doc/chapter_name/section_name/sub_section_name.md portal="AgroPortal"`

### Important notes
- In the very top of the portal's file, you need to specify these params to make your section appears in the Table of contents and the side nav:
![files head]({{site.baseimgs}}/file_head.png)

- Also in these files, you need always to add this command in before including or writing any content to include the navigation (portal's logos)
`include documentation_nav.html portal="AgroPortal"`

- To put a command inside a `.md` file you need to put it inside &#123;&#37; HERE &#37;&#125;

- To use a variable inside your text, you need to put it inside &#123; include.VAR_NAME &#125;

[How to contribute on github](../../documentation/docs/documentation-docs/how-to-contribute-doc/)

## Files structure
The files are structured as follows:

- Shared content across all portals is located in the folder: `_includes/shared_doc`
- Each portal has its own folder named with the name of the portal in: `docs/users-guide-docs/documentation`
- From each portal's specific file, we can include the shared documentation to add to it or incorporate specific content.

![files structure]({{site.baseimgs}}/files_structure.png)



