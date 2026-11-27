# TLS and HTTPS

OntoPortal Appliance v4 comes with **HTTPS enabled by default**.  
A self-signed TLS certificate (“snake-oil” cert) is automatically generated on **first boot** by the appliance’s initialization scripts.  

All HTTP requests are automatically redirected to HTTPS.

The default self-signed certificate is **not trusted by browsers or clients**:
- **Web browsers** will show a prominent security warning page (e.g., “Your connection is not private” in Chrome, or “Warning: Potential Security Risk Ahead” in Firefox). You can proceed by adding a security exception, but this is not user-friendly and may alarm end users.  
- **API clients** (such as scripts or third-party applications) may reject the connection entirely if they require a trusted certificate chain. In such cases, the client must be explicitly configured to trust the self-signed certificate, or the certificate should be replaced with one from a trusted Certificate Authority.  

For production or public-facing deployments, the recommended solution is to install a trusted certificate (for example, from Let’s Encrypt). This eliminates browser warnings and ensures third-party applications can connect without additional configuration.

 The default self-signed certificate does **not** auto-renew. Only certificates obtained through `certbot` (Let’s Encrypt) are automatically checked and renewed.

# Requirements

1. A fully qualified domain name (FQDN), e.g. demo.ontoportal.org.
2. A TLS certificate (self-signed or CA-issued).
3. OntoPortal Appliance v4.0.0 or later.

# Managing Self-Signed or Privately Issued Certificates

The appliance generates a new self-signed certificate on first boot. If you need to create a new one manually, you can:

- Use the provided helper script:
```bash
  sudo /usr/local/ontoportal/bin/gen_tlscert
```
- Or generate a certificate/key pair directly with `openssl` and add them to system trust store.

When using private CA certificates, the API certificate must be trusted by the UI.  
This usually means importing your private CA certificate into the system’s trusted certificate store.

If you choose to use a custom self-signed certificate, you must first generate your own CA and sign your certificates with it.  
See: Guide to creating a self-signed certificate with a custom CA  
https://gist.github.com/fntlnz/cf14feb5a46b2eda428e000157447309#file-self-signed-certificate-with-custom-ca-md


---

# Using Let’s Encrypt Certificates

OntoPortal Appliance v4 includes the **certbot** utility for obtaining and managing Let’s Encrypt TLS certificates.  
This requires your appliance to be publicly accessible on the domain name you register.

## Step 1: Stop services
```bash
sudo opctl stop
```

## Step 2: Request a certificate
```bash
sudo certbot certonly --standalone   -d demo.ontoportal.org   -m your_email@example.org   --agree-tos
```

This will create `/etc/letsencrypt/live/demo.ontoportal.org/` with the following files:
- fullchain.pem
- privkey.pem

## Step 3: Update nginx configuration

Edit `/etc/nginx/sites-enabled/ontologies_api.conf` and `/etc/nginx/sites-enabled/ontoportal_web_ui.conf` and replace the default self-signed cert references:

```
ssl_certificate     /etc/letsencrypt/live/demo.ontoportal.org/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/demo.ontoportal.org/privkey.pem;
```

Then restart the stack:
```bash
sudo opctl start
```
---

# Automatic Renewal with Certbot

On systemd-based systems (including the OntoPortal Appliance), `certbot.timer` runs twice daily with a randomized delay and triggers `certbot.service`, which executes `certbot -q renew`. This ensures Let’s Encrypt certificates are automatically renewed before expiry.

You can confirm the timer is active with:
```
systemctl list-timers | grep certbot
systemctl cat certbot.timer
systemctl cat certbot.service
```