---
title: README
layout: default
description: Key things to know about maintaining this documentation
weight: 100
status: Preliminary
---

# Introduction

This page describes key things to know about maintaining the Administration documentation.


## General approach using Jekyll

The markdown nominally supported for this documentation is kramdown
(configured in the _config.yml page).

A default CSS seems to be used that comes with the package. 
So far there hasn't been time to make a more customized CSS work.


Each of the top-level chapters in the documentation is a 'collection'. 
Each collection has a main folder (e.g., 'general') 
and a content folder prefixed with an underscore ('_general'). 
Inside the main folder is the index page for that chapter;
it contains introductory text, 
and the jekyll code that organizes the presentation of the chapter's pages.

In each collection, the order of the pages is driven by the value of the 'weight' 
attribute—higher weights are lower in the ordered list presented to readers.

## Attribute expansion

Attributes are stored in `_config.yml` at the top level of the docs/ folder.
They can be access throughout the site with the convention `site.<attributeName>`, 
surrounded by double squiggle brackets ({{ and }}).

These substitutions are used to make titles, versions, and other information
consistent (and easily changed) throughout the documentation. 
For example, if we wanted to move the imgs folder elsewhere in the hierarchy,
or the version number needed to be changed, 
we can make the change in the _config.yml document to have it take effect site-wide.

Attributes are also used within other patterns (see next section).

## Style Manual and patterns

There are several styles and patterns used throughout the document. 
Using these consistently for readability, and to make it easy to apply custom CSS.

### Link referencing

There are two patterns for link referencing.

Relative links use the position of the target document relative to the current document.
When the target document is in the same directory as the current document, a relative link
must use the parent as a reference, e.g., `href="../collocated_file_name"`, 
otherwise the attempted resolution will be under the current file. 

A second style is to use the entire path of the desired target, 
using the site attributes to construct the absolution location, for example:
```
href="{{site.baseurl}}/general/architecture_reference"
```
This will resolve to the correct location of the site per the configuration file. 
A similar pattern is used for the location of images, in case they should be moved:
```
href="{{site.baseurl}}/image_file_name"
```

(Jekyll expands the '/administration' at the beginning of those patterns 
into the full URL of the site's administration directory.)

### Figures

The pattern for a figure is as follows.
```
<figure>
  <img src="{{site.baseimgs}}/ontoportal-architecture-ncbo-original.png" style="width:80%"/>
  <figcaption>A simple component architecture of the OntoPortal system</figcaption>
</figure>
```

### Highlighted text

The document uses backticks (single back-apostrophes around an in-line string,
or triple back-apostrophes before and after a block of text) for code, commands,
and file names.

References to specific terms are surrounded by 'plain single quotes'.

Italics are used sparingly to indicate something unusual.

Bold is used sparingly to highly something particularly important. 

## Inserting visible comments

We use `diff` commenting to insert in-line comments for users to see.

The key formats are:
| Symbol | Effect | Used For |
| - |   |  To Do |
| ! |   |  To be provided |
| * |   |   |
| # |   |   |

### Examples

```Diff
! To be provided
* Must do this!
#
- check this out
```

## What else?



