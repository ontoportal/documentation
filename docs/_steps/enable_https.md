---
title: Enable HTTPS
layout: default
description: Enable HTTPS
weight: 28
status: In progress
---

# Overview

This section offers information on how to configure HTTPS for your {{site.opva}} v3.0.x < v3.1 environment.

# Requirements
1. Domain name/URL. 
1. TLS certificate.
1. appliance verison >= v3.0.4 and < 3.1

# Steps:
## Deploy TLS/SSL certificate on the appliance
For this documentation we will use TLS certificate provideded by LetsEncrypt certificate authority.  Appliance needs to be accessible from the outside world.

1. Install certbot utility for obtaining and managing TLS certificates:
`sudo yum install certbot`
1. Get certificate. 
```
sudo opstop
sudo certbot certonly --standalone -d test.ontoportal.org  -m your_email@example.org  --agree-tos
```
This will create `/etc/letsencrypt/live/<your_domain_name>` directory with certificates which we will use in apache and nginx configs.
## Update Apache configuration:
1. Add the following to `/etc/nginx/sites-enabled/ontologies_api.conf`

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

## Update nginx configuraion
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

## Open firewall port 8433 
1. Open port 8443 on host based firewall (iptables)
```
sudo iptables -A INPUT -p tcp –dport 8443 -j ACCEPT
sudo service iptables save
```
1. Open port 8443 in your cloud/on-prem Network Access Control List
## Modify ontoportal configuration files
1. Modify `/srv/ontoportal/virtual_appliance/appliance_config/site_config.rb` by setting $REST_HOSTNAME, $REST_PORT, $REST_URL_PREFIX and $REST_URL variables
```
$REST_HOSTNAME = 'test.ontoportal.org'
$REST_PORT = '8443'
$REST_URL_PREFIX = 'https://test.ontoportal.org:8443'
$UI_HOSTNAME = 'test.ontoportal.org'
$REST_URL = "https://#{$REST_HOSTNAME}:#{$REST_PORT}"
```

1. Modify `/srv/rails/bioportal_web_ui/current/config/bioportal_config_appliance.rb` by adding or verifying that the following lines exist:
```
# temporary fix for https://github.com/ncbo/bioportal_web_ui/issues/176 on CentOS7
ENV['SSL_CERT_FILE'] = '/etc/pki/tls/cert.pem'
```
and make sure that $BIOMIXER_URL contains `//` instead of `http://`
`$BIOMIXER_URL = "//#{$UI_HOSTNAME}/BioMixer"`
## Finally run deployment of UI and API.

