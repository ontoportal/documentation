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

A default CSS seems to be used that comes with the package.

## Attribute expansion

Attributes are stored in `_config.yml` at the top level of the docs/ folder.
They can be access throughout the site with the convention `site.<attributeName>`, 
surrounded by double squiggle brackets ({{ and }}).

These substitutions are used to make titles, versions, and other information
consistent (and easily changed) throughout the documentation. 
For example, if we wanted to move the imgs folder elsewhere in the hierarchy,
or the version number needed to be changed, 
we can make the change in the _config.yml document to have it take effect site-wide.

Attributes are also used within other patterns.

## Patterns

There are several patterns used throughout that should work gracefully, 
even if/when custom CSS is actually working and used.

### Link referencing

There are two patterns for link referencing.

Relative links use the position of the target document relative to the current document.
When the target document is in the same directory as the current document, a relative link
must use the parent as a reference.


### Figures


## Inserting visible comments

We use `diff` commenting to insert in-line comments for users to see.

The key formats are:
| Symbol | Effect | Used For |
| ! |   |  To be provided |
| * |   |   |
| # |   |   |

### Examples

```Diff
! To be provided
*
#
```

## What else?



