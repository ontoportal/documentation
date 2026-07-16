---
title: Matomo Analytics and Cookie Consent
layout: default
summary: Configuring optional Matomo page-view tracking and analytics consent
status: Preliminary
nav_order: 12
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/matomo_cookie_consent_management
---

# Matomo Analytics and Cookie Consent

OntoPortal Web UI can send browser page-view analytics to Matomo. The integration is optional and only requires a Matomo HTTP(S) endpoint that users' browsers can reach. Matomo does not need to run in Kubernetes or alongside OntoPortal.

## Configuration

Set the provider, Matomo URL, and site ID in the Web UI environment:

```bash
ANALYTICS_PROVIDER=matomo
MATOMO_URL=https://analytics.example.org/matomo
MATOMO_SITE_ID=1
```

`MATOMO_URL` may include a path but must use `http` or `https`. The Web UI loads `matomo.js` and sends tracking requests to `matomo.php` under this URL.

`ANALYTICS_PROVIDER` accepts `google`, `matomo`, or `none`. An invalid explicit value disables browser analytics. When the provider is unset, an existing Google Analytics ID remains the first choice; Matomo is inferred only when both its URL and site ID are configured.

## Requiring consent

The compatibility default does not require analytics consent. If your deployment requires opt-in tracking, enable it when you configure Matomo:

```bash
ANALYTICS_REQUIRE_CONSENT=true
```

With this setting, the Web UI does not render tracking code until the visitor accepts analytics cookies. Visitors can reject optional cookies or reopen **Manage cookie preferences** from the footer. Rejecting a previous choice prevents subsequent tracking and asks Matomo to clear its consent and first-party analytics cookies.

The default consent cookie is `analytics_consent`. These optional settings change its name and scope:

```bash
ANALYTICS_CONSENT_COOKIE_NAME=analytics_consent
ANALYTICS_CONSENT_COOKIE_DOMAIN=.stage.matportal.org
```

Leave the domain unset for a host-only cookie. Set a parent domain when the main portal and slice subdomains should share one decision.

## Settings file alternative

The same values can be configured in `config/settings.yml`:

```yaml
shared:
  analytics:
    provider: matomo
    require_consent: true
    consent_cookie_name: analytics_consent
    consent_cookie_domain: .stage.matportal.org
    matomo:
      url: https://analytics.example.org/matomo
      site_id: 1
```

Environment variables take precedence over settings-file values.

## Content Security Policy

If the deployment uses a restrictive Content Security Policy, allow the Matomo origin in the directives used for scripts and tracking images, commonly `script-src` and `img-src`.

## Validation

After restarting the Web UI, use a clean browser profile to verify:

1. Before acceptance, no request is made to `matomo.js` or `matomo.php` when consent is required.
2. The privacy link points to the policy configured for the portal.
3. Accepting analytics loads `matomo.js` and produces a `matomo.php` request.
4. Rejecting or revoking analytics stops those requests after navigation.
5. **Manage cookie preferences** remains available after either choice.
6. For portal slices, the consent cookie has the configured parent domain, `Secure` where applicable, and path `/`.

## Disable or roll back

Set the provider to `none` and restart the Web UI:

```bash
ANALYTICS_PROVIDER=none
```

You can also remove the Matomo URL and site ID. Existing Google Analytics configuration remains unchanged unless `ANALYTICS_PROVIDER` explicitly selects another provider or `none`.
