**Hierarchy in SKOS vocabularies**

The only semantic relationship in SKOS vocabularies that {{page.portal}} uses to construct and display concept hierarchies is the skos:broader property.

```
ex:mammals rdf:type skos:Concept;
skos:inScheme :myScheme;
skos:narrower ex:cat;
skos:prefLabel "mammals"@en;
skos:broader ex:animals.
```

Other properties used to denote hierarchical relationships like skos:narrower, skos:broaderTransitive, and skos:narrowerTranstive, are ignored.
