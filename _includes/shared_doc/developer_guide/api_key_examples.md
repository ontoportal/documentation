An API Key is required to access any API call. It can be provided in three ways:
- Using the API key query string parameter
```
#python code example
import requests
# example query string parameter on ontology media type:
# 'https://data.ecoportal.lifewatch.eu/{media types}/{acronym}?apikey=your api key'
res = requests.get('https://data.ecoportal.lifewatch.eu/ontologies/LUPO?apikey=7404e1c1-XXXX-XXXX-XXXX-XXXXXXXXXXX')
Ontology_name = res.json()["name"]
Ontology_id = res.json()["@id"]
print(Ontology_name, Ontology_id)
```
```
result : LifeWatch ERIC Upper Ontology https://data.ecoportal.lifewatch.eu/ontologies/LUPO
```

- Providing an authorization header:

Authorization: apikey token=your_apikey

```
#python code example
import urllib.request, urllib.error, urllib.parse
import json

REST_URL = 'https://data.ecoportal.lifewatch.eu'
API_KEY = "Your API Key"

def get_json(url):
opener = urllib.request.build_opener()
opener.addheaders = [('Authorization', 'apikey token=' + API_KEY)]
return json.loads(opener.open(url).read())


# https://data.ecoportal.lifewatch.eu/{media types}/{acronym}
resource = get_json(REST_URL + "/ontologies/LUPO")

# get a desired resource attribute like name and id
name = resource['name']
id = resource['@id']

print(name, id)
```

```
result : LifeWatch ERIC Upper Ontology https://data.ecoportal.lifewatch.eu/ontologies/LUPO
```

- When using a web browser to explore the API, if you provide your API key once using method 1, it will be stored in a cookie for subsequent requests. You can override this by providing a different API key in a new call.
