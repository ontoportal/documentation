---
layout: default
title: Home
nav_order: 1
summary: "This OntoPortal documentation home page hosts all the separate OntoPortal topics and is hosted on GitHub Pages."
permalink: /
---

## About the project

[OntoPortal](https://ontoportal.org) (formerly known as the NCBO Virtual Appliance or BioPortal Virtual Appliance) is
the community-maintained distribution of the BioPortal software (from the Stanford Center for Biomedical Informatics Research).
The [OntoPortal Alliance](https://ontoportal.org) is the community that maintains this software.

### License

This documentation is provided freely for any use by the public. (Formal license citation pending.)

### Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.
Read more about becoming a contributor (for the moment, in our BioPortal repository)
in our [Contributing Guide](https://github.com/ncbo/bioportal-project/blob/master/contributing.md).

### Code of Conduct

OntoPortal Alliance is committed to fostering a welcoming community.

View our [Code of Conduct](https://github.com/ncbo/bioportal-project/blob/master/contributing.md#code-of-conduct) (soon to be updated from the BioPortal source). 

#### Thank you to the contributors of this documentation!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>

### Background on technology

This site uses [Just the Docs] for its template.

If [Jekyll] is installed on your computer, you can build and preview the created site *locally*. This lets you test changes before committing them, and avoids waiting for GitHub Pages.[^2] And you will be able to deploy your local build to a different platform than GitHub Pages.

More specifically, the created site:
- uses a gem-based approach, i.e. uses a `Gemfile` and loads the `just-the-docs` gem
- uses the [GitHub Pages / Actions workflow] to build and publish the site on GitHub Pages

{: .note }
See the theme [README][Just the Docs README] for how to use the theme as a gem without creating a new site.
Just the Docs is a theme for generating static websites with [Jekyll]. You can write source files for your web pages using [Markdown], the [Liquid] templating language, and HTML.[^1] Jekyll builds your site by converting all files that have [front matter] to HTML. Your [Jekyll configuration] file determines which theme to use, and sets general parameters for your site, such as the URL of its home page.

----

[^1]: The [source file for this page] uses all three markup languages.

[^2]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Jekyll]: https://jekyllrb.com
[Markdown]: https://daringfireball.net/projects/markdown/
[Liquid]: https://github.com/Shopify/liquid/wiki
[Front matter]: https://jekyllrb.com/docs/front-matter/
[Jekyll configuration]: https://jekyllrb.com/docs/configuration/
[source file for this page]: https://github.com/just-the-docs/just-the-docs/blob/main/index.md
[Just the Docs Template]: https://just-the-docs.github.io/just-the-docs-template/
[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[Just the Docs repo]: https://github.com/just-the-docs/just-the-docs
[Just the Docs README]: https://github.com/just-the-docs/just-the-docs/blob/main/README.md
[GitHub Pages]: https://pages.github.com/
[Template README]: https://github.com/just-the-docs/just-the-docs-template/blob/main/README.md
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[customize]: {{ site.baseurl }}{% link docs/documentation-docs/customization.md %}
[use the template]: https://github.com/just-the-docs/just-the-docs-template/generate
