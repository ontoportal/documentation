---
title: Enable Recaptcha
layout: default
summary: enable Recaptcha verification for forms in Ontoportal 
status: In progress
nav_order: 12
parent: Installing OntoPortal
grand_parent: Administration Guide
permalink: /administration/steps/enable_recaptcha
---

## Enbaling the Recaptcha in Ontoportal

To enable Recaptcha in OntoPortal, you need to obtain a Recaptcha site key and secret key from [https://www.google.com/recaptcha/admin/create](https://www.google.com/recaptcha/admin/create)

The Recaptcha type required for this configuration is V2 (challenge), with the "I'm not a robot" checkbox.

![Recaptcha type]({{site.baseimgs}}/developers/recaptcha_type.png)

Once you have the keys, go to the root of the bioportal_web_ui project and run the following command:

```bash
RAILS_ENV="development" EDITOR="nano" bin/rails credentials:edit --environment development
```

it will open an editor (linux nano in this case), add the following lines

```yaml
 recaptcha:
       site_key:  <site_key>
       secret_key:  <secret_key>
```

Save the file and exit. Now you can restart the Rails server, and Recaptcha will be available in both the registration and feedback forms.