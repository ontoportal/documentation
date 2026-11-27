# Initial Configuration

These settings will configure your installation for your environment.

## Triple-store Configuration

Your {{site.opva}} can run with multiple RDF triple-stores as backend storage.

Starting with version 4.0, the virtual appliance ships with AllegroGraph as the default RDF store. To fully configure it, visit the <a href="{{site.baseurl}}/administration-guide/steps/allegrograph_configuration">AllegroGraph Configuration</a> page before you begin uploading content.

If you want to switch to using 4store instead (**not recommended**), visit the <a href="{{site.baseurl}}/administration-guide/steps/4store_configuration">4store Configuration</a> page for detailed instructions.

OntoPortal can also run with [Virtuoso](https://virtuoso.openlinksw.com/); see the <a href="{{site.baseurl}}/administration-guide/steps/virtuoso_configuration">Virtuoso Configuration</a> page. It can also run with [GraphDB](https://graphdb.ontotext.com/), which is not yet documented here — see [agroportal/project-management#229](https://github.com/agroportal/project-management/issues/229) for the current status and pointers.

{: .highlight }
If you use the Virtual Appliance 4.0 based on the AgroPortal codebase, it ships with **Virtuoso** as the default triple-store.

## Adding ontologies

The detailed ontology submission process is described in the <a href="{{site.baseurl}}/administration-guide/ontologies/submitting_ontologies">Submitting Ontologies</a> section.

To start, since you don't have any non-administration accounts, you can add an ontology using the OntoPortal Admin User at `http://{ip_address_of_appliance}/ontologies/new`.


## Enabling emails

To let the system send emails for lost passwords, notes, and ontology processing reports, 
you need to provide a valid mail server (smtp) configuration. 
The configuration should be provided in the `/srv/ontoportal/ontologies_api/current/config/environments/appliance.rb` file.

Here are the available settings:

```
 config.enable_notifications   = true # Set to 'true' to send emails
 config.email_sender           = "admin@example.org" # Default sender for emails
 config.email_disable_override = true # If this is set to 'false', all emails will be sent to the email configured in the 'email_override' setting
 config.email_override         = "admin@example.org"
 config.smtp_host              = "smtp.example.org"
 config.smtp_port              = 25
 config.smtp_auth_type         = :none # :none, :plain, :login, :cram_md5
 config.smtp_user              = "username" # only used if auth_type is not :none
 config.smtp_password          = "password" # only used if auth_type is not :none
 config.smtp_domain            = "example.org"
```

Once you have changed your settings, you will need to restart the server 
by running the command 
```
sudo opctl restart
```
or, if you run a VA before v4.0 
```
/sbin/service unicorn restart
```

## Next step

Move to go <a href="{{site.baseurl}}/administration-guide/steps/advanced_configuration">Advanced Configuration</a>.