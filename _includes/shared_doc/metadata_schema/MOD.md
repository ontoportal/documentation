## {{ page.portal }} Metadata Schema
The {{ page.portal }} Metadata Schema is built upon the Metadata Vocabulary for Ontology Description and Publication ([MOD 2.0](https://w3id.org/mod/2.0)). This comprehensive schema integrates various vocabularies, such as Dublin Core, OMV, DCAT, and VoID, and was introduced by [Dutta et al. 2017](http://dx.doi.org/10.1007/978-3-319-70863-8_17). Its primary purpose is to empower ontology developers to annotate and describe their ontologies, while also enabling ontology libraries to provide semantic descriptions of ontologies in the form of linked data.

{{ page.portal }} with other members of the OntoPortal Alliance has embraced a set of metadata elements, comprising classes and properties organised into distinct categories. Each metadata element is linked to a FAIR principle, adding a layer of semantic richness to the description. The assessment of metadata elements is facilitated through the O'FAIRe tool, ensuring a systematic evaluation of the ontology's Findability, Accessibility, Interoperability, and Reusability aspects.
The table below lists all the metadata fields used in EcoPortal, and the FAIR sub-principles to which they are associated for the computation of the FAIR score.

__Note__: The column Cardinality indicates the quantity constraints for the metadata field. The possible values are:
- 0-n = optional and repeatable;
- 0-1 = optional, but not repeatable;
- 1-n = mandatory and repeatable;
- 1 = mandatory, but not repeatable.
