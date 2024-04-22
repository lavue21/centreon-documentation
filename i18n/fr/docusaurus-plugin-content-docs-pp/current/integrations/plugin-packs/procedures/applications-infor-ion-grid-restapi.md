---
id: applications-infor-ion-grid-restapi
title: Infor ION Grid Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Infor ION Grid** apporte un modèle d'hôte :

* **App-Infor-Ion-Grid-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Infor-Ion-Grid-Restapi-custom" label="App-Infor-Ion-Grid-Restapi-custom">

| Alias              | Modèle de service                             | Description                                                      | Découverte |
|:-------------------|:----------------------------------------------|:-----------------------------------------------------------------|:----------:|
| Application-Status | App-Infor-Ion-Grid-Restapi-Application-custom | Contrôle du statut des applications Infor ION Grid               | X          |
| Node               | App-Infor-Ion-Grid-Restapi-Node-custom        | Contrôle du statut et des statistiques des noeuds Infor ION Grid | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Infor-Ion-Grid-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                             | Description                                                                      |
|:--------------------------------------------|:---------------------------------------------------------------------------------|
| App-Infor-Ion-Grid-Restapi-Application-Name | Découvre les points d'application Infor ION Grid et supervise leur statut        |
| App-Infor-Ion-Grid-Restapi-Node-Name        | Découvre les noeuds Infor ION Grid et supervise leur statut et leurs statistiques |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Application-Status" label="Application-Status">

| Métrique                          | Unité |
|:----------------------------------|:------|
| ion.grid.applications.total.count | count |
| *applications*#status             | N/A   |

</TabItem>
<TabItem value="Node" label="Node">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| *nodes*#status                     | N/A   |
| *nodes*#node.log.error.count       | count |
| *nodes*#node.log.warning.count     | count |
| *nodes*#node.uptime.seconds        | s     |
| *nodes*#node.cpu.usage.percentage  | %     |
| *nodes*#node.heap.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Pour superviser Infor ION Grid, merci de suivre la [documentation officielle](https://docs.infor.com/inforos/2022.x/en-us/useradminlist/inforos_2022.12_inforosrn_en-us_72746.pdf) et de vous assurer que vos droits sont correctement configurés.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

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

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Infor ION Grid**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

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

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Infor-Ion-Grid-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro        | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME  | API username                                                                                         |                   | X           |
| APIPASSWORD  | API password                                                                                         |                   | X           |
| APIPROTO     | Specify https if needed                                                                              | https             |             |
| APIPORT      | Set port                                                                                             | 443               |             |
| ADDRESS      | Set hostname                                                                                         |                   | X           |
| EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Application-Status" label="Application-Status">

| Macro          | Description                                                                                                                                                                                                                                                                                                           | Valeur par défaut                           | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|:-----------:|
| FILTERNAME     | Filter by application name (regexp can be used). Example: --filter-name='^application1$'                                                                                                                                                                                                                              |                                             |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{online} =~ /true/ && %{state} !~ /^(OK)/i'). Threshold can be matched on special variables like %{state}, %{online}, %{started}, %{name} or %{description} and Regexp can be used. Typical syntax: --critical-status='%{started} ne "true"' | %{online} =~ /true/ && %{state} !~ /^(OK)/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). Threshold can be matched on special variables like %{state}, %{online}, %{started}, %{name} or %{description} and Regexp can be used. Typical syntax: --warning-status='%{state} ne "OK"'                                                  |                                             |             |
| WARNINGTOTAL   | Define the conditions to match for the total to be WARNING (default: '').                                                                                                                                                                                                                                               |                                             |             |
| CRITICALTOTAL  | Define the conditions to match for the total to be CRITICAL (default: '').                                                                                                                                                                                                                                              |                                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                                                                                    |                                             |             |

</TabItem>
<TabItem value="Node" label="Node">

| Macro                 | Description                                                                                                                                                         | Valeur par défaut      | Obligatoire |
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
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                  |                        |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

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

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Node 'Registry' with PID '173' from application 'SYSTEM' on host 'THEHOST' state is 'online', Log error: 0, Log warning: 0, Uptime: 4M 2w 2d 2h 40m, CPU usage: 0.00%, Heap usage: 46.10MB/254.00MB (18.15%) | 'node.log.error.count'=0;;;0; 'node.log.warning.count'=0;;;0; 'node.cpu.usage.percentage'=0.00%;;;0;100 'node.heap.usage.percentage'=18.15%;0:90;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_infor_ion_grid_restapi.pl \
	--plugin=apps::infor::ion::grid::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                   | Modèle de service associé                     |
|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| application [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/infor/ion/grid/mode/application.pm)]            | App-Infor-Ion-Grid-Restapi-Application-custom |
| list-applications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/infor/ion/grid/mode/listapplications.pm)] | Used for service discovery                    |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/infor/ion/grid/mode/listnodes.pm)]               | Used for service discovery                    |
| node [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/infor/ion/grid/mode/node.pm)]                          | App-Infor-Ion-Grid-Restapi-Node-custom        |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

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

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

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

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_infor_ion_grid_restapi.pl \
	--plugin=apps::infor::ion::grid::plugin \
	--mode=node \
	--help
```