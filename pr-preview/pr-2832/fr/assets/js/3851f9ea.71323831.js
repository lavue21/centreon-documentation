"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[93635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=s,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const o={id:"event-handler",title:"Auto Remediation"},a=void 0,l={unversionedId:"monitoring/event-handler",id:"version-23.10/monitoring/event-handler",title:"Auto Remediation",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/event-handler.md",sourceDirName:"monitoring",slug:"/monitoring/event-handler",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/event-handler",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/event-handler.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"event-handler",title:"Auto Remediation"},sidebar:"version-23.10/docs",previous:{title:"Dynamic Service Management",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/passive-monitoring/dsm"},next:{title:"Import/Export",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/web-import-export"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Quand le gestionnaire d&#39;\xe9v\xe9nements est-il ex\xe9cut\xe9 ?",id:"quand-le-gestionnaire-d\xe9v\xe9nements-est-il-ex\xe9cut\xe9-",level:3},{value:"Types de gestionnaires d&#39;\xe9v\xe9nements",id:"types-de-gestionnaires-d\xe9v\xe9nements",level:3},{value:"Activation des gestionnaires d&#39;\xe9v\xe9nements",id:"activation-des-gestionnaires-d\xe9v\xe9nements",level:3},{value:"Ordre d&#39;ex\xe9cution du gestionnaire d&#39;\xe9v\xe9nements",id:"ordre-dex\xe9cution-du-gestionnaire-d\xe9v\xe9nements",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Cr\xe9er une commande",id:"cr\xe9er-une-commande",level:3},{value:"Activer les gestionnaires d&#39;\xe9v\xe9nements sur votre plate-forme",id:"activer-les-gestionnaires-d\xe9v\xe9nements-sur-votre-plate-forme",level:3},{value:"Configurer les gestionnaires d&#39;\xe9v\xe9nements",id:"configurer-les-gestionnaires-d\xe9v\xe9nements",level:3},{value:"Globalement",id:"globalement",level:4},{value:"Sur des ressources s\xe9lectionn\xe9es",id:"sur-des-ressources-s\xe9lectionn\xe9es",level:4},{value:"Exemple",id:"exemple",level:3}],d={toc:c};function p(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)("wrapper",s({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",s({},{id:"introduction"}),"Introduction"),(0,r.kt)("p",null,"Le gestionnaire d'\xe9v\xe9nements ou la correction automatique sont des commandes syst\xe8me facultatives (scripts ou\nex\xe9cutables) qui sont ex\xe9cut\xe9es chaque fois qu'un changement d'\xe9tat d'un h\xf4te ou d'un service se produit."),(0,r.kt)("p",null,"Une utilisation \xe9vidente du gestionnaire d'\xe9v\xe9nements est la possibilit\xe9 pour Centreon de r\xe9soudre proactivement les\nprobl\xe8mes avant que quiconque ne soit averti."),(0,r.kt)("h3",s({},{id:"quand-le-gestionnaire-d\xe9v\xe9nements-est-il-ex\xe9cut\xe9-"}),"Quand le gestionnaire d'\xe9v\xe9nements est-il ex\xe9cut\xe9 ?"),(0,r.kt)("p",null,"Le gestionnaire d'\xe9v\xe9nements est ex\xe9cut\xe9 lorsqu'un service ou un h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Est dans un \xe9tat probl\xe9matique SOFT"),(0,r.kt)("li",{parentName:"ul"},"Entre initialement dans un \xe9tat probl\xe9matique HARD"),(0,r.kt)("li",{parentName:"ul"},"R\xe9cup\xe8re initialement d'un \xe9tat probl\xe9matique SOFT ou HARD"),(0,r.kt)("li",{parentName:"ul"},"Les \xe9tats SOFT et HARD sont d\xe9crits ",(0,r.kt)("a",s({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/alerts-notifications/concepts#confirmation-du-statut"}),"ici"))),(0,r.kt)("h3",s({},{id:"types-de-gestionnaires-d\xe9v\xe9nements"}),"Types de gestionnaires d'\xe9v\xe9nements"),(0,r.kt)("p",null,"Il existe diff\xe9rents types de gestionnaires d'\xe9v\xe9nements que vous pouvez d\xe9finir pour g\xe9rer les changements d'\xe9tat :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gestionnaire d'\xe9v\xe9nements global pour les h\xf4tes"),(0,r.kt)("li",{parentName:"ul"},"Gestionnaire d'\xe9v\xe9nements global pour les services"),(0,r.kt)("li",{parentName:"ul"},"Gestionnaire d'\xe9v\xe9nements sp\xe9cifiques \xe0 un h\xf4te"),(0,r.kt)("li",{parentName:"ul"},"Gestionnaire d'\xe9v\xe9nements sp\xe9cifiques \xe0 un service")),(0,r.kt)("p",null,"Les gestionnaires d'\xe9v\xe9nements globaux d'h\xf4tes et de services sont ex\xe9cut\xe9s pour chaque changement d'\xe9tat d'h\xf4te ou de\nservice qui se produit, imm\xe9diatement avant tout gestionnaire d'\xe9v\xe9nement sp\xe9cifique \xe0 l'h\xf4te ou au service."),(0,r.kt)("h3",s({},{id:"activation-des-gestionnaires-d\xe9v\xe9nements"}),"Activation des gestionnaires d'\xe9v\xe9nements"),(0,r.kt)("p",null,"Les gestionnaires d'\xe9v\xe9nements peuvent \xeatre activ\xe9s ou d\xe9sactiv\xe9s sur un collecteur."),(0,r.kt)("p",null,"Les gestionnaires d'\xe9v\xe9nements sp\xe9cifiques \xe0 l'h\xf4te et au service peuvent \xeatre activ\xe9s ou d\xe9sactiv\xe9s dans vos d\xe9finitions\nd'h\xf4te et de service. Les gestionnaires d'\xe9v\xe9nements sp\xe9cifiques ne seront pas ex\xe9cut\xe9s si l'option globale est d\xe9sactiv\xe9e\nsur votre collecteur."),(0,r.kt)("h3",s({},{id:"ordre-dex\xe9cution-du-gestionnaire-d\xe9v\xe9nements"}),"Ordre d'ex\xe9cution du gestionnaire d'\xe9v\xe9nements"),(0,r.kt)("p",null,"Comme d\xe9j\xe0 mentionn\xe9, les gestionnaires d'\xe9v\xe9nements globaux d'h\xf4te et de service sont ex\xe9cut\xe9s imm\xe9diatement avant les\ngestionnaires d'\xe9v\xe9nements sp\xe9cifiques \xe0 l'h\xf4te ou au service."),(0,r.kt)("p",null,"Les gestionnaires d'\xe9v\xe9nements sont ex\xe9cut\xe9s pour les probl\xe8mes HARD et les \xe9tats de r\xe9cup\xe9ration imm\xe9diatement apr\xe8s\nl'envoi des notifications."),(0,r.kt)("h2",s({},{id:"configuration"}),"Configuration"),(0,r.kt)("h3",s({},{id:"cr\xe9er-une-commande"}),"Cr\xe9er une commande"),(0,r.kt)("p",null,"Les commandes du gestionnaire d'\xe9v\xe9nements seront probablement des scripts shell ou perl, mais il peut s'agir de\nn'importe quel type d'ex\xe9cutable pouvant \xeatre ex\xe9cut\xe9 \xe0 partir d'un invite de commande. Au minimum, les scripts doivent\nprendre les macros suivantes comme arguments :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pour les services : $SERVICESTATE$, $SERVICESTATETYPE$, $SERVICEATTEMPT$"),(0,r.kt)("li",{parentName:"ul"},"Pour les h\xf4tes : $HOSTSTATE$, $HOSTSTATETYPE$, $HOSTATTEMPT$")),(0,r.kt)("p",null,"Les scripts doivent examiner les valeurs des arguments qui leur sont transmis et prendre toutes les mesures n\xe9cessaires\nen fonction de ces valeurs."),(0,r.kt)("p",null,"Les commandes du gestionnaire d'\xe9v\xe9nements s'ex\xe9cuteront normalement avec les m\xeames autorisations que l'utilisateur sous\nlequel Centreon Engine (utilisateur centreon-engine) s'ex\xe9cute sur votre machine. Cela peut poser un probl\xe8me si vous\nsouhaitez \xe9crire un gestionnaire d'\xe9v\xe9nements qui red\xe9marre les services syst\xe8me, car les privil\xe8ges root sont\ng\xe9n\xe9ralement requis pour effectuer ce type de t\xe2ches."),(0,r.kt)("p",null,"Id\xe9alement, vous devez \xe9valuer les types de gestionnaires d'\xe9v\xe9nements que vous allez impl\xe9menter et accorder juste\nassez de permissions \xe0 l'utilisateur Centreon Engine pour ex\xe9cuter les commandes syst\xe8me n\xe9cessaires. Vous voudrez\npeut-\xeatre essayer d'utiliser sudo pour ce faire."),(0,r.kt)("p",null,"Suivre ",(0,r.kt)("a",s({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/basic-objects/commands#adding-a-command"}),"cette proc\xe9dure pour cr\xe9er une commande"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Utilisez ",(0,r.kt)("strong",{parentName:"p"}," Misc ")," pour le type de commande pour classer vos commandes.")),(0,r.kt)("h3",s({},{id:"activer-les-gestionnaires-d\xe9v\xe9nements-sur-votre-plate-forme"}),"Activer les gestionnaires d'\xe9v\xe9nements sur votre plate-forme"),(0,r.kt)("p",null,"Rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Engine configuration")," et \xe9diter toutes les configuration Centreon\nEngine sur lesquelles vous souhaitez activer le gestionnaire d'\xe9v\xe8nements."),(0,r.kt)("p",null,"Dans l'onglet ",(0,r.kt)("strong",{parentName:"p"},"Check Options"),", activer l'option ",(0,r.kt)("strong",{parentName:"p"},"Event Handler Option")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(38753).Z,width:"1350",height:"396"})),(0,r.kt)("h3",s({},{id:"configurer-les-gestionnaires-d\xe9v\xe9nements"}),"Configurer les gestionnaires d'\xe9v\xe9nements"),(0,r.kt)("h4",s({},{id:"globalement"}),"Globalement"),(0,r.kt)("p",null,"Pour configurer globalement la correction automatique pour toutes les ressources d'un poller, se rendre dans le menu\n",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Engine configuration")," et \xe9diter la configuration Centreon Engine sur lesquelles vous\nsouhaitez activer la correction automatique globale."),(0,r.kt)("p",null,"Dans l'onglet ",(0,r.kt)("strong",{parentName:"p"},"Check Options"),", s\xe9lectionnez la commande pour les options ",(0,r.kt)("strong",{parentName:"p"},"hosts and/or services event handler")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(46322).Z,width:"1810",height:"224"})),(0,r.kt)("p",null,"Cliquer sur ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("h4",s({},{id:"sur-des-ressources-s\xe9lectionn\xe9es"}),"Sur des ressources s\xe9lectionn\xe9es"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pour les h\xf4tes")),(0,r.kt)("p",null,"Se rendre dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Hosts > Hosts")," et \xe9diter la configuration de votre h\xf4te. Dans l'onglet\n",(0,r.kt)("strong",{parentName:"p"},"Data Processing")," s\xe9lectionner la commande :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(80675).Z,width:"1682",height:"276"})),(0,r.kt)("p",null,"Cliquer sur ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez configurer cette commande sur les mod\xe8les.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pour les services")),(0,r.kt)("p",null,"Se rendre dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Services by host")," et \xe9diter la configuration de votre h\xf4te. Dans l'onglet\n",(0,r.kt)("strong",{parentName:"p"},"Data Processing")," s\xe9lectionner la commande :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(80675).Z,width:"1682",height:"276"})),(0,r.kt)("p",null,"Cliquer sur ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez configurer cette commande sur les mod\xe8les.")),(0,r.kt)("h3",s({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"L'exemple ci-dessous suppose que vous surveillez le serveur HTTP sur la machine locale. Nous supposerons que l'option\nMax Check Attempts pour le service a une valeur de 4 ou plus (c'est-\xe0-dire que le service est v\xe9rifi\xe9 4 fois avant\nqu'il ne soit consid\xe9r\xe9 comme ayant un r\xe9el probl\xe8me). Un exemple de d\xe9finition de service abr\xe9g\xe9 pourrait ressembler\n\xe0 ceci ..."),(0,r.kt)("p",null,"Le script du gestionnaire d'\xe9v\xe9nements (/usr/lib/centreon/plugins/eventhandlers/restart-httpd)."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-Shell"}),'#!/bin/sh\n#\n# Event handler script for restarting the web server on the local machine\n#\n# Note: This script will only restart the web server if the service is\n#       retried 3 times (in a "soft" state) or if the web service somehow\n#       manages to fall into a "hard" error state.\n#\n\n# What state is the HTTP service in?\ncase "$1" in\nOK)\n    # The service just came back up, so don\'t do anything...\n    ;;\nWARNING)\n    # We don\'t really care about warning states, since the service is probably still running...\n    ;;\nUNKNOWN)\n    # We don\'t know what might be causing an unknown error, so don\'t do anything...\n    ;;\nCRITICAL)\n    # Aha!  The HTTP service appears to have a problem - perhaps we should restart the server...\n    # Is this a "soft" or a "hard" state?\n    case "$2" in\n\n    # We\'re in a "soft" state, meaning that Centreon is in the middle of retrying the\n    # check before it turns into a "hard" state and contacts get notified...\n    SOFT)\n\n        # What check attempt are we on?  We don\'t want to restart the web server on the first\n        # check, because it may just be a fluke!\n        case "$3" in\n\n        # Wait until the check has been tried 3 times before restarting the web server.\n        # If the check fails on the 4th time (after we restart the web server), the state\n        # type will turn to "hard" and contacts will be notified of the problem.\n        # Hopefully this will restart the web server successfully, so the 4th check will\n        # result in a "soft" recovery.  If that happens no one gets notified because we\n        # fixed the problem!\n        3)\n            echo -n "Restarting HTTP service (3rd soft critical state)..."\n            # Call the init script to restart the HTTPD server\n            /etc/rc.d/init.d/httpd restart\n            ;;\n            esac\n        ;;\n\n    # The HTTP service somehow managed to turn into a hard error without getting fixed.\n    # It should have been restarted by the code above, but for some reason it didn\'t.\n    # Let\'s give it one last try, shall we?  \n    # Note: Contacts have already been notified of a problem with the service at this\n    # point (unless you disabled notifications for this service)\n    HARD)\n        echo -n "Restarting HTTP service..."\n        # Call the init script to restart the HTTPD server\n        /etc/rc.d/init.d/httpd restart\n        ;;\n    esac\n    ;;\nesac\nexit 0\n')),(0,r.kt)("p",null,"L'exemple de script fourni ci-dessus tentera de red\xe9marrer le serveur Web sur la machine locale :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Une fois que le service a \xe9t\xe9 rev\xe9rifi\xe9 pour la troisi\xe8me fois et est dans un \xe9tat SOFT CRITICAL"),(0,r.kt)("li",{parentName:"ul"},"Une fois que le service passe pour la premi\xe8re fois dans un \xe9tat HARD CRITICAL")),(0,r.kt)("p",null,"Le script devrait th\xe9oriquement red\xe9marrer et le serveur Web et r\xe9soudre le probl\xe8me avant que le service ne passe dans\nun \xe9tat de probl\xe8me HARD, mais nous incluons un cas de secours dans le cas o\xf9 cela ne fonctionne pas la premi\xe8re fois.\nIl convient de noter que le gestionnaire d'\xe9v\xe9nements ne sera ex\xe9cut\xe9 que la premi\xe8re fois que le service tombe dans un\n\xe9tat de probl\xe8me HARD. Cela emp\xeache Centreon d'ex\xe9cuter en continu le script pour red\xe9marrer le serveur Web si le\nservice reste dans un \xe9tat de probl\xe8me HARD, vous ne souhaitez pas ce comportement."),(0,r.kt)("p",null,"Ensuite, cr\xe9ez une commande comme:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command Name: restart-httpd"),(0,r.kt)("li",{parentName:"ul"},"Command Type: Misc"),(0,r.kt)("li",{parentName:"ul"},"Command Line: $CENTREONPLUGINS$/eventhandlers/restart-httpd  $SERVICESTATE$ $SERVICESTATETYPE$ $SERVICEATTEMPT$")),(0,r.kt)("p",null,"Maintenant, dans la d\xe9finition du service, s\xe9lectionner la commande ",(0,r.kt)("strong",{parentName:"p"},"restart-httpd")," pour votre d\xe9finition de\ngestionnaire d'\xe9v\xe9nements."))}p.isMDXComponent=!0},38753:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enableeventhnadleronpoller-60a56204e5d2e70ad3ce38faa3d8fb73.png"},80675:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enableeventhnadleronresources-39eb45b1ed641b4c7dbbc8a2d768d7d6.png"},46322:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enableglobaleventhnadleronpoller-b18a21f6825f20d01b6eed34cd0d0f83.png"}}]);