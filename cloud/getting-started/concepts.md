---
id: concepts
title: Centreon basics
---

## How do I get my monitoring platform up and running?

Centreon provides you with a ready-to-use [central server](architecture.md). Before you can [start monitoring resources](monitoring.md), all you have to do is to:

1. [Install your pollers](../installation/deploy-poller.md) (following the [prerequisites](../installation/prerequisites.md)). They will monitor your resources.
2. Install the [plugin packs](../monitoring/pluginpacks.md) you will need to monitor your resources.

## What does Centreon monitor?

Centreon allows you to monitor resources. Resources can be hosts or services:

* A **host** is any device that has an IP address and that one wishes to monitor.
For example, a physical server, a virtual machine, a temperature probe, an IP camera, a printer or a storage space.
* A **service** is a check point to be monitored on a host. A service consists of one or several check commands that collect metrics concerning a specific aspect of a host (CPU usage rate, temperature, motion detection, bandwidth usage rate, disk I/O, and so on). For instance, a service called **Memory** has the following metrics: **buffer**, **cached**, **usage**, **free**, **shared** and **used_prct**.

## How does the monitoring work?

In order to collect each indicator value, monitoring plugins are used which are periodically executed by a collection engine called Centreon Engine.

## How do I see the resources being monitored?

Once hosts and services are monitored, they have a status in Centreon (e.g. **OK**, **Warning**, **Critical**...). You can keep track of any changes using the **Monitoring > Resources Status** page.

You can also use custom views to create dashboards.

If a problem occurs (not-OK/not-UP status), [contacts/users](../users/users.md) will be able to receive [notifications](../alerts-notifications/notif-configuration.md), within set time periods.

## What features can I use to help me monitor hosts?

In Centreon, monitoring is made easy by the following elements:

* Host templates and service templates, that allow you to define default values so as to speed up the creation of these objects.

* [Plugin Packs](../monitoring/pluginpacks.md), that provide ready-to-use host and service templates. These greatly simplify the configuration of hosts and services: for instance, all you have to do is to apply Plugin Pack templates to a host for it to be monitored.

* The autodiscovery feature for hosts and services, that allows you to get a list of new hosts and services and to add them automatically to the list of monitored resources.