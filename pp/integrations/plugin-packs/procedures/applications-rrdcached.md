---
id: applications-rrdcached
title: RRDCached
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **RRDcached** brings 2 host templates:

* **App-Rrdcached-Tcp-custom**
* **App-Rrdcached-Unix-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Rrdcached-Tcp-custom" label="App-Rrdcached-Tcp-custom">

| Service Alias | Service Template                    | Service Description                      |
|:--------------|:------------------------------------|:-----------------------------------------|
| Ping-Socket | App-Rrdcached-Ping-Socket-Tcp-custom  | Check the availability of the RRDCached service using the PING command.  |
| Stats       | App-Rrdcached-Stats-Tcp-custom        | Monitor the performance of the RRDcached daemon using the STATS command.  |

> The services listed above are created automatically when the **App-Rrdcached-Tcp-custom** host template is used.

</TabItem>
<TabItem value="App-Rrdcached-Unix-custom" label="App-Rrdcached-Unix-custom">

| Service Alias | Service Template                    | Service Description                      |
|:------------|:--------------------------------------|:-----------------------------------------|
| Ping-Socket | App-Rrdcached-Ping-Socket-Unix-custom | Check the availability of the RRDCached service using the PING command. |
| Stats       | App-Rrdcached-Stats-Unix-custom       | Monitor the performance of the RRDcached daemon using the STATS command.  |

> The services listed above are created automatically when the **App-Rrdcached-Unix-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Ping-Socket*" label="Ping-Socket*">

No metrics for this service.

> Applies to the following service templates: App-Rrdcached-Ping-Socket-Tcp-custom and App-Rrdcached-Ping-Socket-Unix-custom.

</TabItem>
<TabItem value="Stats*" label="Stats*">

| Metric name               | Unit  |
|:--------------------------|:------|
| rrdcached.queue-length    | N/A   |
| rrdcached.waiting-updates | N/A   |

> Applies to the following service templates: App-Rrdcached-Stats-Tcp-custom and App-Rrdcached-Stats-Unix-custom.

</TabItem>
</Tabs>

## Prerequisites

To use this connector you must have [installed and configured RRDCached](https://oss.oetiker.ch/rrdtool/doc/rrdcached.en.html).

### On a Centreon central or remote server

To install it on a Centreon central or remote server, you may follow [this how-to](https://thewatch.centreon.com/product-how-to-21/how-to-limit-disk-i-o-usage-with-rrdcached-348) or find the main steps below.

> You can choose between two methods, **TCP** and **UNIX Socket**. The first one allows the central to be monitored by a poller, whereas the second one requires that the central server monitors itself.

1. Declare the **rrdcached** service.

<Tabs groupId="sync">
<TabItem value="TCP" label="TCP">

```
cat > /etc/systemd/system/rrdcached.service <<EOF
[Unit]
Description=Data caching daemon for rrdtool

[Service]
Type=forking
User=rrdcached
PIDFile=/var/rrdtool/rrdcached/rrdcached.pid
ExecStart=/usr/bin/rrdcached -m 775 -s rrdcached -L -p /var/rrdtool/rrdcached/rrdcached.pid -b /var/rrdtool/rrdcached -w 3600 -z 3600 -f 600

[Install]
WantedBy=default.target
EOF
```

</TabItem>
<TabItem value="UNIX socket" label="UNIX socket">

```
cat > /etc/systemd/system/rrdcached.service <<EOF
[Unit]
Description=Data caching daemon for rrdtool

[Service]
Type=forking
User=rrdcached
PIDFile=/var/rrdtool/rrdcached/rrdcached.pid
ExecStart=/usr/bin/rrdcached -m 775 -s rrdcached -l unix:/var/rrdtool/rrdcached/rrdcached.sock -p /var/rrdtool/rrdcached/rrdcached.pid -b /var/rrdtool/rrdcached -w 3600 -z 3600 -f 7200

[Install]
WantedBy=default.target
EOF
```

</TabItem>
</Tabs>

2. Change the following permissions.

```
mkdir -p /var/rrdtool/rrdcached/
useradd rrdcached -d '/var/rrdtool/rrdcached' -G centreon-broker,centreon -m
chown -R rrdcached: /var/rrdtool
chmod 775 -R /var/rrdtool
usermod -a -G rrdcached centreon-broker
usermod -a -G rrdcached apache
usermod -a -G centreon rrdcached
usermod -a -G centreon-broker rrdcached
```

3. Activer et démarrer le service.

```
systemctl daemon-reload
systemctl enable rrdcached
systemctl start rrdcached
```

4. Change the Broker output of **central-rrd-master** under **Configuration > Pollers > Broker configuration**.

At **Output** tab, in **Output 1 - RRD file generator** output, the following parameters must be adapted.

<Tabs groupId="sync">
<TabItem value="TCP" label="TCP">

| Paremeter                       | Value    |
| ------------------------------- | -------- |
| Enable RRDCached                | TCP Port |
| RRDCacheD listening socket/port | 42217    |

</TabItem>
<TabItem value="UNIX socket" label="UNIX socket">

| Paremeter                       | Value                                 |
| ------------------------------- | ------------------------------------- |
| Enable RRDCached                | UNIX socket                           |
| RRDCacheD listening socket/port | /var/rrdtool/rrdcached/rrdcached.sock |

</TabItem>
</Tabs>

5. **Export the central server's configuration** and restart the Broker service.

```
systemctl restart cbd
```

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-rrdcached
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-rrdcached
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-rrdcached
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-rrdcached
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **RRDcached** connector through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-RRDCached
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-RRDCached
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-rrdcached
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-RRDCached
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="App-Rrdcached-Tcp-custom" label="App-Rrdcached-Tcp-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Rrdcached-Tcp-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                          | Default value     | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RRDCACHEDPORT         | TCP port to connect to.                                                                              | 42217             |             |
| RRDCACHEDTIMEOUT      | Connection timeout.                                                                                | 5                 |             |
| RRDCACHEDEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="App-Rrdcached-Unix-custom" label="App-Rrdcached-Unix-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Rrdcached-Unix-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                 | Description                                                                                          | Default value                         | Mandatory   |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| RRDCACHEDSOCKETPATH   | Path to the UNIX socket.           | /var/rrdtool/rrdcached/rrdcached.sock |             |
| RRDCACHEDTIMEOUT      | Connection timeout.                                                                   | 5                                     |             |
| RRDCACHEDEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                                       |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Ping-Socket" label="Ping-Socket">

| Macro            | Description                                                                                        | Default value         | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| CRITICALRESPONSE | Define the conditions to match for the status to be CRITICAL. You can use the variable '%{response}'. | %{response} !~ /PONG/ |             |
| WARNINGRESPONSE  | Define the conditions to match for the status to be WARNING. You can use the variable '%{response}'.  |                       |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose             |             |

</TabItem>
<TabItem value="Stats" label="Stats">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGQUEUELENGTH     | Warning threshold for the number of nodes currently enqueued in the update queue.  |                   |             |
| CRITICALQUEUELENGTH    | Critical threshold for the number of nodes currently enqueued in the update queue.  |                   |             |
| WARNINGWAITINGUPDATES  | Warning threshold for cached RRD updates (one update can include several values).  |                   |             |
| CRITICALWAITINGUPDATES | Critical threshold for cached RRD updates (one update can include several values) |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_rrdcached.pl \
	--plugin=apps::rrdcached::plugin \
	--custommode=unix \
	--mode=stats \
	--socket-path='' \
	--timeout='5'   \
	--warning-queue-length='' \
	--critical-queue-length='' \
	--warning-waiting-updates='' \
	--critical-waiting-updates='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: queue length: 9, waiting updates: 42 | 'rrdcached.queue-length'=9;;;0; 'rrdcached.waiting-updates'=42;;;0;
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_rrdcached.pl \
	--plugin=apps::rrdcached::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                       | Linked service template                                                         |
|:-----------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|
| ping [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rrdcached/mode/ping.pm)]   | App-Rrdcached-Ping-Socket-Tcp-custom<br />App-Rrdcached-Ping-Socket-Unix-custom |
| stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rrdcached/mode/stats.pm)] | App-Rrdcached-Stats-Tcp-custom<br />App-Rrdcached-Stats-Unix-custom             |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Custom modes options

All **custom modes** specific options are listed here:

<Tabs groupId="sync">
<TabItem value="tcp" label="tcp">

| Option           | Description                                  |
|:-----------------|:---------------------------------------------|
| --hostname       | Hostname to connect to (default: 127.0.0.1). |
| --port           | TCP port to connect to(default: 42217).      |
| --timeout        | Connection timeout.                          |

</TabItem>
<TabItem value="unix" label="unix">

| Option        | Description                                                                 |
|:--------------|:----------------------------------------------------------------------------|
| --socket-path | Path to the UNIX socket (default is /var/rrdtool/rrdcached/rrdcached.sock). |
| --timeout     | Connection timeout.                                                         |

</TabItem>
</Tabs>

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Ping-Socket*" label="Ping-Socket*">

| Option | Description |
|:-------|:------------|
| --warning-response | Define the conditions to match for the status to be WARNING. You can use the variable '%{response}'. |
| --critical-response | Define the conditions to match for the status to be CRITICAL.  You can use the variable '%{response}'. Default: '%{response} !~ /PONG/'. |

</TabItem>
<TabItem value="Stats*" label="Stats*">

| Option | Description |
|:-------|:------------|
| --warning-rrdcached-waiting-updates | Warning threshold for cached RRD updates (one update can include several values). |
| --critical-rrdcached-waiting-updates | Critical threshold for cached RRD updates (one update can include several values). |
| --warning-rrdcached-queue-length | Warning threshold for the number of nodes currently enqueued in the update queue. |
| --critical-rrdcached-queue-length | Critical  threshold for the number of nodes currently enqueued in the update queue. |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_rrdcached.pl \
	--plugin=apps::rrdcached::plugin \
	--custommode=unix \
	--help
```