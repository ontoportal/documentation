### Get {{ page.portal }} URIs to use with your {{ page.atoms }}
If you do not have URIs to use for your semantic artefact or you wish to change them, it is possible to get generic URIs that will redirect to {{ page.portal }}.
Any URI starting this way: {{ page.genericuribase }}/ACRONYM will redirect to the summary of the {{ page.atom }}.
Classes, concepts and every entity in the {{ page.atom }} can be redirected by adding an ID for it after the acronym: {{ include.genericuribase }}/ACRONYM/classid

If you have not published your {{ page.atom }} yet and you are still building it, make sure register an acronym for it on {{ page.portal }} to make sure URIs you are using will be associated to your {{ page.atom }}.