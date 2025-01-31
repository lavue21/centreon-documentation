---
id: gdpr-compliance
title: Conformité RGPD
---

> Ce contenu s'adresse aux personnes utilisant Centreon via un fournisseur de services gérés (MSP).

## Stockage des informations d'identification de l'utilisateur

Pour chaque client du fournisseur, le serveur Centreon central stocke en base de données les informations d'identification de 
l'utilisateur afin d'accéder au serveur de supervision :

  - Nom (name)
  - Pseudo (alias/login), mot de passe
  - Adresse mail
  - Numéro de téléphone (optionnel, pour notification associée)

Le serveur central enregistre également des paramètres additionnels pour chaque utilisateur :

  - Langue, fuseau horaire
  - Paramétrage de la notification
  - Groupes de contrôle d'accès (ACL)

Gestion de l'information :
  - Chaque utilisateur peut accéder à ses informations via le menu **Administration > Paramètres > Mon compte**.
  - Les utilisateurs peuvent être créés, modifiés et supprimés depuis le menu **Configuration > Utilisateurs** par un 
  utilisateur possédant les droits nécessaires.

## Journalisation des actions utilisateur

Si un utilisateur possède les droits de configuration de la supervision (définis dans les accès utilisateur), une entrée dans le 
journal stockée en base de données et liée à son compte utilisateur sera présente pour chaque modification réalisée :
  - L'accès aux journaux est disponible via le menu **Administration > Logs** avec possibilité de filtrer par utilisateur.
  - Ces journaux ne peuvent être supprimés qu'en accédant à la base de données SQL et en supprimant tout enregistrement 
  pertinent.

## Transactions HTTP

Centreon recommande de sécuriser l'accès à la plate-forme de surveillance en activant le mode HTTPS sur le serveur Apache. Un 
certificat officiel signé est requis pour assurer un niveau de sécurité minimum.

## Authentification

Afin de rester cohérent avec votre politique de sécurité et de mieux gérer le cycle de vie et les approbations des 
utilisateurs, Centreon dispose d'une option pour activer la liaison vers un annuaire Active Directory ou LDAP. Centreon 
recommande d'activer cette option et de ne pas utiliser un compte local.

## Sauvegarde

Centreon fournit un module d'extraction de données Centreon pour permettre la mise en place d'une politique de sauvegarde des 
données de supervision. Centreon recommande fortement d'activer ce module et surtout d'exporter la sauvegarde sur un serveur 
tiers.
