# Joining the Alliance

Joining the OntoPortal Alliance means setting up and operating your own portal based on the OntoPortal technology. This section describes the steps involved from installing your own instance, to customizing it and self-declaring your portal on the OntoPortal website so it appears alongside the other portals of the Alliance.

## 0. Install OntoPortal and choose domain name

Before customizing your portal, you first need to install your own instance of OntoPortal. See the [Installation Steps]({{site.baseurl}}/administration-guide/steps/) section for detailed instructions.

In parallel, engage in the procedures to get a domain name for your portal. Your are going to need multiple sub-domains. For instance, if you choose myportal.eu, you will need at least: 
* https://myportal.eu - for the Web application
* https://data.myportal.eu - for the API
* https://services.myportal.eu - for the additionnal running services
* https://sparql.myportal.eu - for the public SPARQL endpoint
* https://sliceN.myportal.eu - for any of the Slices specific to your portal

## 1. Setup your GitHub environment

Deploying a customized version of OntoPortal — with the same functionalities but with your own look and feel, name, footer, etc., and served at your own specific URL — requires modifying the code's configuration files and re-deploying your own version of the code. This therefore has to be done at least once manually, or by setting up a CI/CD pipeline to automate the build and deployment of your portal.

For this reason, we ask that your code repositories be, whenever possible, **forks of the upstream OntoPortal repositories**. This makes it easier for you to pull in updates and to contribute your changes back to the Alliance. At a minimum, you need to fork the following two repositories:

* <https://github.com/ontoportal/ontoportal_web_ui>
* <https://github.com/ontoportal/ontologies_api>
* <https://github.com/ontoportal/website>

## 2. Custom look-and-feel

### 2.1 Choose colors 

We need 4 colors for the portal: (i) Primary color, (ii) Hover color, (iii) Secondary color and (iv)Light color. As described on the image bellow. 

 ![](https://wiki.agroportal.eu/api/files.get?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1cGxvYWRzLzVmNTFjMmUyLTZlMDMtNGQzZS04ZWNiLTE2NzJkYTcxN2ZmYi85MDhlNTRiZS1mMGEyLTQzNmYtOTczNy1jMjhiNDg4N2NiMDYvU2NyZWVuc2hvdCAyMDI2LTA2LTA5IGF0IDEyLjAxLjAzLnBuZyIsInR5cGUiOiJhdHRhY2htZW50IiwiaWF0IjoxNzgyODM4MTUxLCJleHAiOjE3ODM0NDI5NTF9.YylvG_Rr_onSm_5gfD2zNpJezl7YtL0Wnd-CI3uwPyI " =431x400")

* Change the colors here: <https://github.com/ontoportal/ontoportal_web_ui/blob/master/app/assets/stylesheets/theme-variables.scss.erb>

### 2.2 Choose the logos to display in the homepage 

* Choose the logos to display and upload them to <https://github.com/ontoportal/ontoportal_web_ui/tree/master/app/assets/images>

 ![](https://wiki.agroportal.eu/api/files.get?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1cGxvYWRzLzVmNTFjMmUyLTZlMDMtNGQzZS04ZWNiLTE2NzJkYTcxN2ZmYi8xNDlkYTNhNi03ZDIxLTQ0MjItOGYyNS00NmZjMzc4ZmU0NTcvU2NyZWVuc2hvdCAyMDI2LTA2LTA5IGF0IDExLjMzLjEyLnBuZyIsInR5cGUiOiJhdHRhY2htZW50IiwiaWF0IjoxNzgyODM4MTUxLCJleHAiOjE3ODM0NDI5NTF9.SdzqzntEquH_KXkSqeVI6UAhWj0JxtBab8uPuVcj5f0 " =1199x202")

## 3. Text content customization

Lookup the text you would like to change for your portal user interface (e.g., portal description on the Home page, examples in serach fields, etc.). All the applciation text is internationalized, and all changes must be done to these YAML files:

* <https://github.com/ontoportal/ontoportal_web_ui/blob/master/config/locales/en.yml>
* <https://github.com/ontoportal/ontoportal_web_ui/blob/master/config/locales/fr.yml>

### 4. Modify the main configuration file

(more details to come)
<https://github.com/ontoportal/ontoportal_web_ui/blob/master/config/bioportal_config_env.rb.sample>

## 5. Suggest changes to the Alliance website

* Add your logo to the alliance poster: <https://www.figma.com/design/n2tOIfgVlVvFAr3F00Ab5m/Ontoportal-alliance?node-id=0-1&t=xwBAXIAKOH2QTQSf-1>
* Make a PR to the website project to declare yourself. Include (i) new poster; (ii) list of portals updated; (iii) list of sponsors.

An example of PR on the web site is done available here: https://github.com/ontoportal/website/pull/19

## 6. Other 

### 6.1 Setup Google reCAPTCHA

* <https://www.google.com/recaptcha/admin/create>
