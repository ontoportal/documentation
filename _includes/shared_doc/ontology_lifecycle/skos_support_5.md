**Example of valid SKOS**
This example provides a simple illustration of the composition of a SKOS file that complies with the above constraints.
- **Example header**. The provided header establishes several common namespaces that could prove valuable. The final namespace is the one responsible for defining the specific SKOS vocabulary in question. Ideally, the IRI associated with the "myskosid" namespace should be a resolvable location pointing to the SKOS ontology.
    ```
   <xml version="1.0" encoding="UTF-8"?>
   <rdf:RDF
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
     xmlns:skos="http://www.w3.org/2004/02/skos/core#"
     xmlns:dct="http://purl.org/dc/terms/"
     xmlns:myskosid="https://example.org/ontologies/myskosontology/" >
    ```
- **Example {{ page.atom }} description**. In the rdf:type item, this namespace is declared as the ConceptScheme. It's important to note that the ConceptScheme doesn't necessarily have to match the ontology's namespace. Additional metadata examples are given as good practices in ontology metadata. While dct:creator doesn't necessarily need to be an ORCID ID, having a unique identifier is recommended for identifying the creator, whether an individual or organisation. This {{ page.atom }} comprises only two concepts (to be defined later), resulting in only two skos:hasTopConcept declarations.
    ```
    <rdf:Description rdf:about="https://example.org/ontologies/myskosontology/">
    <rdfs:label xml:lang="en">Example SKOS ontology for {{ page.portal }}</rdfs:label>
    <rdf:type rdf:resource="http://www.w3.org/2004/02/skos/core#ConceptScheme"/>
    <rdfs:comment xml:lang="en">Example created to simplify understanding and creation of a SKOS  vocab for {{ page.portal }}</rdfs:comment>
    <dct:created rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2024-02-02</dct:created>
    <dct:modified rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2024-02-02</dct:modified>
    <dct:license rdf:resource="https://creativecommons.org/licenses/by/4.0/"/>
    <dct:creator rdf:resource="https://orcid.org/0000-0001-6875-5360"/>
    <skos:hasTopConcept df:resource="https://example.org/ontologies/myskosontology/fragmentid001"/>
    <skos:hasTopConcept rdf:resource="https://example.org/ontologies/myskosontology/fragmentid002"/>
    </rdf:Description>
    ```

- **Example term definitions**. This section shows the two concepts and a few typical annotations about those concepts. The first rdf:Description line of each group names the concept that is being defined in the indented lines that follows. The rdf:Type and skos:prefLabel are required annotation content for {{ page.portal }} to work effectively. Other items are optional. The skos:topConceptOf is not strictly required for {{ page.portal }} SKOS {{ page.atoms }}, but provides useful contextualization if there is more than one topConcept.
    ```
    <rdf:Description rdf:about="https://example.org/ontologies/myskosontology/fragmentid001"">
    <rdf:type rdf:resource="http://www.w3.org/2004/02/skos/core#Concept"/>
    <skos:prefLabel xml:lang="en">First concept</skos:prefLabel>
    <skos:definition xml:lang="en">The very first example provided as part of this {{ page.atom }}.</skos:definition>
    <skos:topConceptOf rdf:resource="https://example.org/ontologies/myskosontology/"/>
    </rdf:Description>
    <rdf:Description rdf:about="https://example.org/ontologies/myskosontology/fragmentid002"">
    <rdf:type rdf:resource="http://www.w3.org/2004/02/skos/core#Concept"/>
    <skos:prefLabel xml:lang="en">Second concept</skos:prefLabel>
    <skos:definition xml:lang="en">The very first example provided as part of this {{ page.atom }}.</skos:definition>
    <skos:topConceptOf rdf:resource="https://example.org/ontologies/myskosontology/"/>
    </rdf:Description>
    ```

- **Closing XML**. Needed for a complete, parseable RDF file!
    `</rdf:RDF>`
