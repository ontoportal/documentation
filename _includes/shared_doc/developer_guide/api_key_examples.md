Use of the {{ page.portal }} REST APIs requires an API key. The API key can be found in the Account Settings of logged in users.

![How to retrieve your API key]({{site.figures_link}}/{{page.portal}}/find_apikey.png)

1. Using the api key query string parameter: `'https://{{include.resturl}}/{media types}/{acronym}?apikey=your api key'`

2. Providing an Authorization header: `Authorization: apikey token=your_apikey` 

3. When using a web browser to explore the API, if you provide your API Key once using method 1, it will be stored in a cookie for subsequent requests. You can override this by providing a different API Key in a new call.
