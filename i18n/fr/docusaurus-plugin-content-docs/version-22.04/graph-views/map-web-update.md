---
id: map-web-update
title: Mettre à jour MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Une réinitialisation de votre base de données MAP est nécessaire : les modifications que vous avez apportées à vos cartes à l'aide de l'éditeur web seront perdues. En revanche, notez que la base de données MAP Legacy (et donc les anciennes cartes) ne sera pas impactée.

Suivez cette procédure pour mettre à jour la version de MAP :

1. Arrêtez le service **centreon-map-engine** en exécutant la commande suivante sur la machine hébergeant le service Centreon MAP :
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. Mettez à jour les paquets en exécutant la commande suivante sur la ou les machines hébergeant le service du central et le service Centreon MAP :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
sudo dnf update centreon-map-engine centreon-map-web-client
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

``` shell
sudo yum update centreon-map-engine centreon-map-web-client
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

``` shell
sudo apt update centreon-map-engine centreon-map-web-client
```

</TabItem>
</Tabs>

3. Purgez la base de données MAP en vous y connectant et en exécutant les requêtes suivantes :
 
  ```shell
  drop database centreon_map; create database centreon_map; grant all privileges on centreon_map.* to 'centreon_map'@'%' identified by 'centreon_map';
  ```

4. Videz le cache de votre navigateur.
 

5. Redémarrez le service **centreon-map-engine** en exécutant la commande suivante :
 
  ```shell
  sudo systemctl start centreon-map-engine
  ```