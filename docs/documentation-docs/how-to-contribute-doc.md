---
title: How to contribute to the doc
layout: default
summary: A guide on how to contribute to this documentation
status: Needs revision
parent: Documentation configuration
nav_order: 1
---



This page describes straightforwardly on how to edit and contribute to this documentation

1. TOC
{:toc}

## How to edit a page

### Click on "edit this page"


At the bottom of each page, you will find a link that will take you to the corresponding [markdown](https://docs.github.com/fr/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) file

![image](https://user-images.githubusercontent.com/29259906/206400372-98e8eebd-6964-4f7a-be4e-6025feb64c5b.png)

### Edit the page
![image](https://user-images.githubusercontent.com/29259906/206401353-de8808b2-e58a-4405-bb34-8241dfcc3414.png)

### Create a pull request

![image](https://user-images.githubusercontent.com/29259906/206402418-b2bbe74c-0052-4c1f-8e36-10c3a503c621.png)


## How to edit/contribute to an existing pull request


### Click on "File changed"
![image](https://user-images.githubusercontent.com/29259906/207830475-eba783b8-2d9c-4133-abac-422792143cbf.png)


### Scroll to the file you want to edit and click on the edit button
![image](https://user-images.githubusercontent.com/29259906/207830907-a091d47c-5669-4903-ab36-4dd06662640a.png)

### Make your change and submit a commit
![image](https://user-images.githubusercontent.com/29259906/207832629-ba36a90d-376e-4705-ab10-b3513eec0660.png)

## How to add images

### Fork the project
You can't upload a file directly to the repository. Instead, you need to fork the project:
![image]({{site.baseimgs}}/contribute-fork.png)
If you already forked the project, you can click the "Sync fork" button in your repository to make sure it is up to date with the current state of the documentation.

### Upload an image, commit and open a pull request
Navigate to `assets/images/ontoportal` (or `assets/images/ontoportal/figures/PortalName` for user documentation figures) and click "Add file":
![image]({{site.baseimgs}}/contribute-upload.png)


Drag and drop or select your file and then commit into a new branch:
![image]({{site.baseimgs}}/contribute-upload-commit.png)


Open a pull request onto the original repository. Click "compare across forks" to access it:
![image]({{site.baseimgs}}/contribute-compare-forks.png)


Select `base repository: ontoportal/documentation` and `base: master`
You can now create the pull request:
![image]({{site.baseimgs}}/contribute-open-pr.png)
Note: you can also add and modify documentation pages in the new branch before creating a pull request.