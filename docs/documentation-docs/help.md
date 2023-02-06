---
title: Maintaining the  documentation
layout: default
summary: Key things to know about maintaining this documentation
status: Needs revision
parent: Documentation configuration
nav_order: 2
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
They can be accessed throughout the site with the convention `site.<attributeName>`, 
surrounded by double squiggle brackets ( `{{ "{{" }}` and  `}}`).

These substitutions are used to make titles, versions, and other information
consistent (and easily changed) throughout the documentation. 
For example, if we wanted to move the imgs folder elsewhere in the hierarchy,
or the version number needed to be changed, 
we can make the change in the _config.yml document to have it take effect site-wide.

Note that attribute expansions do not take place in the saved document as seen in its source repo.
They will take place correctly when displayed in the online web documentation.

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
href="{{site.baseurl}}/architecture_reference"
```
This will resolve to the correct location of the site per the configuration file. 
A similar pattern is used for the location of images, in case they should be moved:
```
src="{{site.baseimgs}}/image_file_name"
```
See below for image formatting and captions.

A similar replacement works within markup, e.g., 
```
[link text]({{site.baseurl}}/architecture_reference)
```
will create a link for 'link text' to the architecture_reference page.

(Jekyll expands the '/administration' at the beginning of those substituted 
site.baseurl patterns into the full URL of the site's administration directory.)

#### Email links

An email link can follow a similar pattern, as this example shows:
```
sending email to the [OntoPortal support list](mailto:{{site.support_email}})
```

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
To use this, put three backticks, followed immediately (no blank) by 'diff' 
to specify the highlighting language.  
Each line is then highlighted as a diff file would be.
The closing 3 backticks follow the last line.

The available formats are:

| Symbol | Effect | Used For |
| ------ | ------ | -------- |
| `-` | Red background | To Do, Issue, Content Needed, Critical User Tip |
| `!` | Orange background |  Needs Review, Help Wanted, To Be Provided |
| `+` | Green background | User Tip (stays), Problem Solved, Other Note (stays) |
| `#` | Gray background | Background Content (gray stays, once content added) |

### Examples

```diff
- Must do this! 
! To be provided: this (and needs review)
+ The best way to do this is …
# An interesting feature of this is …
```

## What else?



