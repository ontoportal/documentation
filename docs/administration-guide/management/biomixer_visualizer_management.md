---
title: BioMixer Replacement Visualizer
layout: default
summary: Deploying and enabling the maintained OntoPortal ontology visualizer
nav_order: 9
parent: Managing Your System
grand_parent: Administration Guide
permalink: /administration/management/biomixer_visualizer_management/
---

# BioMixer Replacement Visualizer

OntoPortal provides a maintained [BioMixer replacement visualizer](https://github.com/ontoportal/biomixer-visualizer). It is a new standalone static application, not a fork or redeployment of the legacy BioMixer source.

The replacement accepts the existing ontology, class, API, and embed parameters used by OntoPortal Web UI. It provides paths-to-root, neighborhood, mapping, ontology atlas, and diagram views, together with search, pan, zoom, print, and download controls.

## Deployment options

OntoPortal Web UI includes a bundled copy at `/biomixer-visualizer`. No separate service is required when that copy is suitable.

To serve the visualizer independently, deploy the static files or container image and set:

```ruby
$ONTOPANEL_VISUALIZER_URL = ENV["ONTOPANEL_VISUALIZER_URL"]
```

```bash
ONTOPANEL_VISUALIZER_URL=https://visualizer.example.org/
```

The [ontoportal-deployment](https://github.com/ontoportal/ontoportal-deployment) Helm chart can deploy it on the UI host at `/visualizer/`:

```bash
helm upgrade --install ontoportal chart/ontoportal \
  --namespace ontoportal \
  -f values/profiles/ontoportal-clean.yaml \
  -f values/profiles/k3s-local.yaml \
  -f values/addons/biomixer-visualizer.yaml
```

Use an immutable container tag or digest for production deployments.

## Enable the replacement

The replacement is disabled by default. After deploying a compatible Web UI release, enable the `biomixer_replacement` feature in the Web UI Flipper administration page.

Verify both the class visualization tab and the public visualization widget. Browser requests to the configured OntoPortal API must succeed from the visualizer origin.

## Rollback

Disable the `biomixer_replacement` feature to return to the existing BioMixer configuration. The legacy `$BIOMIXER_URL`, `$BIOMIXER_PUBLIC_APIKEY`, and `$USE_LEGACY_BIOMIXER` settings remain available during migration.
