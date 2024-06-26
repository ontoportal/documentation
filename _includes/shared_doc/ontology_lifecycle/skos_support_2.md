**Required SKOS constructs**
skos:Concept. Concepts are the fundamental elements of SKOS vocabularies and are asserted using the skos:Concept class, e.g.: <http://www.example.com/animals> rdf:type skos:Concept
In SKOS vocabularies, {{ page.portal }} only treats the SKOS concept assertions as concepts to be displayed. If the vocabulary contains other assertions about other types of concepts, {{ page.portal }} will not treat these as concepts in any of its displays or features. See the W3C's SKOS System Primer and SKOS Reference for concept documentation and examples.

Note: Some OWL ontologies declare the SKOS namespace to facilitate minimal use of SKOS constructs for things like labels (e.g., skos:prefLabel, skos:altLabel) or mappings (e.g., skos:exactMatch, skos:broaderMatch). In these cases, the proper format for new ontology submissions is OWL, not SKOS.
skos:ConceptScheme and skos:hasTopConcept. For every {{ page.atom }} entry in {{ page.portal }}, the application provides a tabbed interface with various views of the {{ page.atom }} data, e.g., a "Classes" tab with a tree structure to graphically depict the hierarchical collection of {{ page.atom }} classes.
In the case of SKOS vocabularies, {{ page.portal }} determines which concepts to display as roots in the concept tree by querying vocabulary content for occurrences of skos:hasTopConcept property assertions. Top concepts are the most general concepts contained in SKOS concept schemes (an aggregation of one or more SKOS concepts).
The following example, taken from the SKOS System Primer, shows how to define a concept scheme and link it to the most general concepts it contains:

```
@prefix skos: <http://www.w3.org/2004/02/skos/core#> 
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
@prefix ex: <http://www.example.com/>

ex:animalThesaurus rdf:type skos:ConceptScheme
skos:hasTopConcept ex:mammals
skos:hasTopConcept ex:fish
```

SKOS vocabularies submitted to {{ page.portal }} must contain a minimum of one concept scheme and top concept assertion. See the SKOS System Primer and SKOS Reference for more documentation of concept schemes and top concepts.
If your vocabulary declares more than one concept scheme, all of the top concepts will be aggregated and displayed as root level concepts. The {{ page.portal }} user interface offers functionality to group these top-level concepts based on their respective concept schemes, accessible through the implemented filters.
