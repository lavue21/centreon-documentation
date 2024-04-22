---
id: applications-infor-ion-grid-restapi
title: Infor ION Grid Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Infor ION Grid** brings a host template:

* **App-Infor-Ion-Grid-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Infor-Ion-Grid-Restapi-custom" label="App-Infor-Ion-Grid-Restapi-custom">

| Service Alias      | Service Template                              | Service Description                             | Discovery  |
|:-------------------|:----------------------------------------------|:------------------------------------------------|:----------:|
| Application-Status | App-Infor-Ion-Grid-Restapi-Application-custom | Check Infor ION Grid applications status        | X          |
| Node               | App-Infor-Ion-Grid-Restapi-Node-custom        | Check Infor ION Grid node status and statistics | X          |

> The services listed above are created automatically when the **App-Infor-Ion-Grid-Restapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                   | Description |
|:--------------------------------------------|:------------|
| App-Infor-Ion-Grid-Restapi-Application-Name | Discover all application points for Infor ION Grid and monitor their status |
| App-Infor-Ion-Grid-Restapi-Node-Name        | Discovers any Infor ION Grid node and monitors their status and statistics |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Application-Status" label="Application-Status">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| ion.grid.applications.total.count | count |
| *applications*#status             | N/A   |

</TabItem>
<TabItem value="Node" label="Node">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| *nodes*#status                     | N/A   |
| *nodes*#node.log.error.count       | count |
| *nodes*#node.log.warning.count     | count |
| *nodes*#node.uptime.seconds        | s     |
| *nodes*#node.cpu.usage.percentage  | %     |
| *nodes*#node.heap.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

To monitor Infor ION Grid, please follow the [official documentation](https://docs.infor.com/inforos/2022.x/en-us/useradminlist/inforos_2022.12_inforosrn_en-us_72746.pdf) and make sure that all rights are properly configured.

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
dnf install centreon-pack-applications-infor-ion-grid-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-infor-ion-grid-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-infor-ion-grid-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-infor-ion-grid-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Infor ION Grid** connector through
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
dnf install centreon-plugin-Applications-Infor-Ion-Grid-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Infor-Ion-Grid-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-infor-ion-grid-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Infor-Ion-Grid-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Infor-Ion-Grid-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro        | Description                                                                                          | Default value     | Mandatory   |
|:-------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME  | API username                                                                                         |                   | X            |
| APIPASSWORD  | API password                                                                                         |                   | X           |
| APIPROTO     | Specify https if needed                                                                              | https             |             |
| APIPORT      | Set port                                                                                             | 443               |             |
| ADDRESS      | Set hostname                                                                                         |                   | X           |
| EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Application-Status" label="Application-Status">

| Macro          | Description                                                                                                                                                                                                                                                                                                           | Default value                               | Mandatory   |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|:-----------:|
| FILTERNAME     | Filter by application name (regexp can be used). Example: --filter-name='^application1$'                                                                                                                                                                                                                              |                                             |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{online} =~ /true/ && %{state} !~ /^(OK)/i'). Threshold can be matched on special variables like %{state}, %{online}, %{started}, %{name} or %{description} and Regexp can be used. Typical syntax: --critical-status='%{started} ne "true"' | %{online} =~ /true/ && %{state} !~ /^(OK)/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). Threshold can be matched on special variables like %{state}, %{online}, %{started}, %{name} or %{description} and Regexp can be used. Typical syntax: --warning-status='%{state} ne "OK"'                                                  |                                             |             |
| WARNINGTOTAL   | Define the conditions to match for the total to be WARNING (default: '').                                                                                                                                                                                                                                               |                                             |             |
| CRITICALTOTAL  | Define the conditions to match for the total to be CRITICAL (default: '').                                                                                                                                                                                                                                              |                                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                                    |                                             |             |

</TabItem>
<TabItem value="Node" label="Node">

| Macro                 | Description                                                                                                                                                         | Default value          | Mandatory   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERNAME            | Filter by node name                                                                                                                                                 |                        |             |
| FILTERTYPE            | Filter by node type                                                                                                                                                 |                        |             |
| FILTERAPPLICATIONNAME | Filter by application name                                                                                                                                          |                        |             |
| FILTERHOSTNAME        | Filter by host name                                                                                                                                                 |                        |             |
| WARNINGCPUUSAGE       | Set warning thresholds on cpu usage                                                                                                                                 |                        |             |
| CRITICALCPUUSAGE      | Set critical thresholds on cpu usage                                                                                                                                |                        |             |
| WARNINGHEAPUSAGE      | Set warning thresholds on heap usage                                                                                                                                |                        |             |
| CRITICALHEAPUSAGE     | Set critical thresholds on heap usage                                                                                                                               |                        |             |
| WARNINGLOGWARNING     | Set warning thresholds on log-warning                                                                                                                               |                        |             |
| CRITICALLOGWARNING    | Set critical thresholds on log-warning                                                                                                                              |                        |             |
| WARNINGLOGERROR       | Set warning thresholds on log-error                                                                                                                                 |                        |             |
| CRITICALLOGERROR      | Set critical thresholds on log-error                                                                                                                                |                        |             |
| CRITICALSTATUS        | Set critical threshold for status. Can use special variables like: %{state}, %{name}, %{host\_name}, %{application\_name}, %{type}                                  | '%{state} !~ /online/' |             |
| WARNINGSTATUS         | Set warning threshold for status (Default: "%{state} !~ /online/"). Can use special variables like: %{state}, %{name}, %{host\_name}, %{application\_name}, %{type} |                        |             |
| WARNINGUPTIME         | Set warning thresholds on uptime                                                                                                                                    |                        |             |
| CRITICALUPTIME        |Set critical thresholds on uptime                                                                                                                                    |                        |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                  |                        |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_infor_ion_grid_restapi.pl \
	--plugin=apps::infor::ion::grid::plugin \
	--mode=node \
	--hostname='HOSTNAME' \
	--port='' \
	--proto='' \
	--api-username='APIUSERNAME' \
	--api-password='APIUSERPASSWORD'  \
	--filter-name='^Registry$' \
	--filter-type='' \
	--filter-application-name='^SYSTEM$' \
	--filter-host-name='^THEHOST$' \
	--warning-status='%{state} !~ /online/' \
	--critical-status=''%{state} !~ /online/'' \
	--warning-log-error='' \
	--critical-log-error='' \
	--warning-log-warning='' \
	--critical-log-warning='' \
	--warning-uptime='' \
	--critical-uptime='' \
	--warning-cpu-usage='' \
	--critical-cpu-usage='' \
	--warning-heap-usage='' \
	--critical-heap-usage=''
	--change-perfdata='.*#(.*),$1'
```

The expected command output is shown below:

```bash
OK: Node 'Registry' with PID '173' from application 'SYSTEM' on host 'THEHOST' state is 'online', Log error: 0, Log warning: 0, Uptime: 4M 2w 2d 2h 40m, CPU usage: 0.00%, Heap usage: 46.10MB/254.00MB (18.15%) | 'node.log.error.count'=0;;;0; 'node.log.warning.count'=0;;;0; 'node.cpu.usage.percentage'=0.00%;;;0;100 'node.heap.usage.percentage'=18.15%;0:90;;0;100
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_infor_ion_grid_restapi.pl \
	--plugin=apps::infor::ion::grid::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                   | Linked service template                       |
|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| application [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/infor/ion/grid/mode/application.pm)]            | App-Infor-Ion-Grid-Restapi-Application-custom |
| list-applications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/infor/ion/grid/mode/listapplications.pm)] | Used for service discovery                    |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/infor/ion/grid/mode/listnodes.pm)]               | Used for service discovery                    |
| node [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/infor/ion/grid/mode/node.pm)]                          | App-Infor-Ion-Grid-Restapi-Node-custom        |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Set port (default: '443').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proto                                    | Specify https if needed (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Threshold for HTTP timeout (default: '20').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Application-Status" label="Application-Status">

| Option            | Description                                                                                                                                                                                                                                                                                                              |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter by application name (regexp can be used). Example: --filter-name='^application1$'                                                                                                                                                                                                                                 |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). Threshold can be matched on special variables like %{state}, %{online}, %{started}, %{name} or %{description} and Regexp can be used. Typical syntax: --warning-status='%{state} ne "OK"'                                                     |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{online} =~ /true/ && %{state} !~ /^(OK)/i'). Threshold can be matched on special variables like %{state}, %{online}, %{started}, %{name} or %{description} and Regexp can be used. Typical syntax: --critical-status='%{started} ne "true"'    |
| --warning-total  | Define the conditions to match for the total to be WARNING (default: '').  |
| --critical-total | Define the conditions to match for the total to be CRITICAL (default: ''). |

</TabItem>
<TabItem value="Node" label="Node">

| Option                    | Description                                                                                                                                                            |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-type             | Filter by node type.                                                                                                                                                   |
| --filter-name             | Filter by node name.                                                                                                                                                   |
| --filter-application-name | Filter by application name.                                                                                                                                            |
| --filter-host-name        | Filter by host name.                                                                                                                                                   |
| --warning-status          | Set warning threshold for status (Default: "%{state} !~ /online/"). Can use special variables like: %{state}, %{name}, %{host\_name}, %{application\_name}, %{type}.   |
| --critical-status         | Set critical threshold for status. Can use special variables like: %{state}, %{name}, %{host\_name}, %{application\_name}, %{type}.                                    |
| --warning-* --critical-*  | Thresholds. Can be: 'log-error', 'log-warning', 'uptime' (s), 'cpu-usage', 'heap-usage' (%).                                                                           |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_infor_ion_grid_restapi.pl \
	--plugin=apps::infor::ion::grid::plugin \
	--mode=node \
	--help
```