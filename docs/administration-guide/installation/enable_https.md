---
title: Enable HTTPS
layout: default
summary: Enable HTTPS
status: In progress
nav_order: 5
parent: Installing OntoPortal
grand_parent: Administration Guide
permalink: /administration/steps/enable_https
---

# Overview

This section offers information on how to configure HTTPS for your {{site.opva}} > v3.1.x environment.

# Requirements
1. Domain name/URL.
1. TLS certificate.
1. OntoPortal Appliance version >= v3.1.0

# Steps:
## Deploy TLS/SSL certificate on the appliance
For this documentation we will use TLS certificate provideded by LetsEncrypt certificate authority so appliance has to be accessible from the outside world to complete HTTP-01 challenge.

Appliance v3.2.2+ includes certbot utility for obtaining and managing TLS
certificates.

For Appliances < v3.2.2 install certbot
`sudo yum install certbot`

1. Get certificate.

```
sudo opstop
sudo certbot certonly --standalone -d test.ontoportal.org  -m your_email@example.org  --agree-tos
```

This will create `/etc/letsencrypt/live/<your_domain_name>` directory with certificates which we will use in apache and nginx configs.

## Update nginx configuraion:
1. Add the following to `/etc/nginx/sites-enabled/ontologies_api.conf` file

```
server {
  listen       *:8443 ssl default_server;
  server_name  _;

  ssl_certificate           /etc/letsencrypt/live/test.ontoportal.org/fullchain.pem;
  ssl_certificate_key       /etc/letsencrypt/live/test.ontoportal.org/privkey.pem;

  access_log            /var/log/nginx/ssl-ontologies_api.access.log;
  error_log             /var/log/nginx/ssl-ontologies_api.error.log;

 location /annotatorplus/ {
    proxy_pass            http://localhost:8082/annotatorplus/;
    proxy_read_timeout    90s;
    proxy_connect_timeout 90s;
    proxy_send_timeout    90s;
    proxy_set_header      Host $host;
    proxy_set_header      X-Real-IP $remote_addr;
    proxy_set_header      X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header      Proxy "";
  }

  location / {
    proxy_pass            http://ontologies_api;
    proxy_read_timeout    90s;
    proxy_connect_timeout 90s;
    proxy_send_timeout    90s;
    proxy_set_header      X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header      Host $http_host;
    proxy_set_header      X-Real-IP $remote_addr;
  }
}
```

## Update Apache configuration:
1. edit `/etc/httpd/conf.d/10-appliance.ontoportal.org_tls.conf` and add change

```
 SSLCertificateFile      "/etc/pki/tls/certs/localhost.crt"
 SSLCertificateKeyFile   "/etc/pki/tls/private/localhost.key"
 SSLCertificateChainFile "/etc/pki/ca-trust/extracted/openssl/ca-bundle.trust.crt"
 ```
 to
 ```
 SSLCertificateFile      "/etc/letsencrypt/live/test.ontoportal.org/cert.pem"
 SSLCertificateKeyFile   "/etc/letsencrypt/live/test.ontoportal.org/privkey.pem"
 SSLCertificateChainFile "/etc/letsencrypt/live/test.ontoportal.org/chain.pem"
 ```

## Open firewall port 8433 (for appliances < v3.2.0)
1. Open port 8443 on host based firewall (iptables) 
On appliance v3.0.5 and ealier edit `/etc/sysconfig/iptables` file and add `-A INPUT -p tcp --dport 8443 -j ACCEPT` after `A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT` but before `-A INPUT -j REJECT --reject-with icmp-host-prohibited` 
then restart iptables service: 
`sudo systemctl restart iptables`

2. Open port 8443 in your cloud/on-prem Network Access Control List

## Modify ontoportal configuration files
1. Modify `/srv/ontoportal/virtual_appliance/appliance_config/site_config.rb` by setting $REST_HOSTNAME, $REST_PORT, $REST_URL_PREFIX and $REST_URL variables
```
$REST_HOSTNAME = 'test.ontoportal.org'
$REST_PORT = '8443'
$REST_URL_PREFIX = 'https://test.ontoportal.org:8443'. # Port number must be included for ports other than 80 or 443
$UI_HOSTNAME = 'test.ontoportal.org'
$REST_URL = "https://#{$REST_HOSTNAME}:#{$REST_PORT}"
```
NOTE:  port other than 80 or 443 has to be included in the $REST_URL_PREFIX.

2. Modify `/srv/ontoportal/virtual_appliance/appliance_config/bioportal_web_ui/config/bioportal_config_appliance.rb` by adding or verifying that the following lines exist:
```
# temporary fix for https://github.com/ncbo/bioportal_web_ui/issues/176 on CentOS7
ENV['SSL_CERT_FILE'] = '/etc/pki/tls/cert.pem'
```
3. If your certificate is locally or privately generated, see also the `Validating self-generated or privately issued certificates` section below.
4. Make sure that $BIOMIXER_URL contains `//` instead of `http://`
`$BIOMIXER_URL = "//#{$UI_HOSTNAME}/BioMixer"`

## Run deployment of UI and API.
## Set up cron job to automatically renew certificates

It's highly recommended that you automatically renew any private or public certificate for your system. [Let's Encrypt](letsencrypt.org) has detailed instructions.

# Using self-signed or privately issued certificates
Extra steps must be taken when using self-signed or private cerficiate becuase the SSL/TLS certificate used by the API has to be validatable by the UI.  A private certificate authority (CA) has to be added to the system's certificate authority trust.  If you choose to use a self-signed certificate then you need to generate a custom CA first and then sign your certificate with it.   
https://gist.github.com/fntlnz/cf14feb5a46b2eda428e000157447309#file-self-signed-certificate-with-custom-ca-md

To add a self-signed/private root Certificate Autority (CA) On CentOS 7 you would need to do the following:
1. copy the root Certificate Autority (CA) pem file to /etc/pki/ca-trust/source/anchors/
2. run `update-ca-trust`
3. make sure that `ENV['SSL_CERT_FILE'] = '/etc/pki/tls/cert.pem'` is added in the UI's config.
