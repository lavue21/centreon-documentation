"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[66736],{74183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"configuration",title:"Configure"},l=void 0,u={unversionedId:"graph-views/configuration",id:"version-23.10/graph-views/configuration",title:"Configure",description:"Administrate users rights",source:"@site/versioned_docs/version-23.10/graph-views/configuration.md",sourceDirName:"graph-views",slug:"/graph-views/configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/graph-views/configuration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/graph-views/configuration.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"configuration",title:"Configure"},sidebar:"version-23.10/docs",previous:{title:"Migrate the extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/graph-views/migrate"},next:{title:"Advanced configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/graph-views/advanced-configuration"}},p={},c=[{value:"Administrate users rights",id:"administrate-users-rights",level:2},{value:"Manage Map administrators",id:"manage-map-administrators",level:3},{value:"Give access on views to other users and manage their privileges",id:"give-access-on-views-to-other-users-and-manage-their-privileges",level:3},{value:"Load disabled resources (or not)",id:"load-disabled-resources-or-not",level:2},{value:"Define views &amp; status computation parameters",id:"define-views--status-computation-parameters",level:2},{value:"Change link colors",id:"change-link-colors",level:2},{value:"Understand how resources synchronization works",id:"understand-how-resources-synchronization-works",level:2},{value:"Highlight problems",id:"highlight-problems",level:2},{value:"Geo view configuration",id:"geo-view-configuration",level:2},{value:"Configure tiles provider",id:"configure-tiles-provider",level:3},{value:"Configure data layers",id:"configure-data-layers",level:3},{value:"Create and link a Mapbox account",id:"create-and-link-a-mapbox-account",level:2}],d={toc:c},g="wrapper";function h(e){var{components:t}=e,s=i(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"administrate-users-rights"},"Administrate users rights"),(0,a.kt)("p",null,"There are two kinds of administrator: Centreon admins and Map admins."),(0,a.kt)("p",null,"On a fresh install, only Centreon admins exist."),(0,a.kt)("p",null,"Centreon admins may grant Map admins privileges through ACL groups defined in\nCentreon."),(0,a.kt)("p",null,"Any user contained in that group then becomes a Map administrator."),(0,a.kt)("h3",{id:"manage-map-administrators"},"Manage Map administrators"),(0,a.kt)("p",null,"To grant Map administrator privileges on an ACL group:"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Preferences > Preferences"),", and then select the ",(0,a.kt)("em",{parentName:"p"},"Admin")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(47840).Z,width:"1436",height:"1434"})),(0,a.kt)("h3",{id:"give-access-on-views-to-other-users-and-manage-their-privileges"},"Give access on views to other users and manage their privileges"),(0,a.kt)("p",null,"By default, non-admin users have no access to views, and have no\nprivileges."),(0,a.kt)("p",null,"Administrators can grant these accesses and privileges to specific sets\nof users through ACL groups."),(0,a.kt)("p",null,"ACL groups can be allowed to view, create, modify and delete one or\nmore views independently."),(0,a.kt)("p",null,"Go into ",(0,a.kt)("strong",{parentName:"p"},"Preferences > Preferences")," and then select the ",(0,a.kt)("em",{parentName:"p"},"Views > ACLs")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(48536).Z,width:"1524",height:"1302"})),(0,a.kt)("p",null,"From the list, select the ACL group you want to configure. Then, for\neach view, define the specific rights to attribute."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GeoViews")),(0,a.kt)("p",null,"Two simple rules apply on this kind of view:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any user accessing the ",(0,a.kt)("strong",{parentName:"li"},"Monitoring > Map")," page will be able to see all the\ngeographic views created"),(0,a.kt)("li",{parentName:"ul"},'Users that have the "Creation" privilege (through the ACL group on the Centreon Map\ndesktop client) have all privileges on geographic views.')),(0,a.kt)("h2",{id:"load-disabled-resources-or-not"},"Load disabled resources (or not)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Mistakes when editing configuration files can lead to malfunctions of the software. We recommend that you make a backup of the file before editing it and that you only change the settings advised by Centreon.")),(0,a.kt)("p",null,"You can decide whether to load disabled resources into Centreon Map\ndesktop client. If you do (which is the default configuration), all\ndisabled resources will appear in the resource list. You will also be\nable to use them in your views."),(0,a.kt)("p",null,"They will have no status and appear as shown in the following screenshot:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(51026).Z,width:"305",height:"98"})),(0,a.kt)("p",null,"You may change this configuration by opening the file\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/studio-config.properties")," and adding the following\nline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"resource.load.enabled.only=true\n")),(0,a.kt)("p",null,"Then restart the Centreon MAP server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centreon-map\n")),(0,a.kt)("h2",{id:"define-views--status-computation-parameters"},"Define views & status computation parameters"),(0,a.kt)("p",null,"Centreon Map server gives you the possibility to customize how this\ninherited status is computed and rendered in views. You may use the\nfollowing parameters to adapt the behavior of inherited status\ncomputation to your use case."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Possible value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"drilldown.useHardState"),(0,a.kt)("td",{parentName:"tr",align:null},"true or false"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Only use hard state value for inherited status propagation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"drilldown.ignoreElementInDowntime"),(0,a.kt)("td",{parentName:"tr",align:null},"true or false"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Do not propagate status for resources in downtime")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"drilldown.ignoreElementAcknowledged"),(0,a.kt)("td",{parentName:"tr",align:null},"true or false"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Do not propagate status for acknowledged resources")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"drilldown.ignoreSeveritySuperior"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Do not propagate status for resources having severity superior to this value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gate.useResourcesAccess"),(0,a.kt)("td",{parentName:"tr",align:null},"true or false"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"Should Centreon Map consider resources ACL when calculating inherited status of view content")))),(0,a.kt)("p",null,"The following parameters can be configured in\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/studio-config.properties"),"."),(0,a.kt)("p",null,"If you add, remove or update a parameter, make sure to restart centreon-map."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What's an inherited status ?")),(0,a.kt)("p",null,"An inherited status is a Centreon Map custom status associated with some\nobjects that is based on the worst status of its children; here are the\nrules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A host has two statuses: its own status (up/down/pending) and an inherited\nstatus that is based on the worst state of its services."),(0,a.kt)("li",{parentName:"ul"},"A hostgroup only has an inherited status corresponding to the worst status\nof its children (hosts, services)"),(0,a.kt)("li",{parentName:"ul"},"A servicegroup has only an inherited status: the worst status of its\nchildren (services)"),(0,a.kt)("li",{parentName:"ul"},"A container has only an inherited status: the worst status of its children\n(hosts, services, meta-services, hotsgroups, servicegroups, BA, widgets)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherited status customization")),(0,a.kt)("p",null,"Centreon Map server gives you the possibility to customize how this\ninherited status is computed and rendered in views. You may use the\nfollowing parameters to adapt the behavior of inherited status\ncomputation to your use case:"),(0,a.kt)("p",null,"Specificity of ",(0,a.kt)("strong",{parentName:"p"},"gate.useResourcesAccess"),': Setting this parameter to\n"false" may highly improve Centreon Map performance. Here is why:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gate.useResourcesAccess = false: all users see the same status and same\nresources in views, irrespective of the ACL resources they have, they are ignored.\nIn that case, be careful who you're giving access to views"),(0,a.kt)("li",{parentName:"ul"},"gate.useResourcesAccess = true: users see different status and views regarding\nresource ACLs (decreased performance because you need to have one instance\nof each view for each user)")),(0,a.kt)("p",null,"To configure these parameters, you need to edit the following Centreon\nMAP server configuration file (modify or add missing parameters), then\nrestart centreon-map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/centreon-studio/studio-config.properties\nsystemctl restart centreon-map\n")),(0,a.kt)("h2",{id:"change-link-colors"},"Change link colors"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This property will only be applied to the user modifying it on the\ndesktop client.")),(0,a.kt)("p",null,"You can change the start and end color of a link based on a metric.\nThese colors represent a scale from 0% to 100% for the metric(s)\nassociated with the link."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(17956).Z,width:"639",height:"559"})),(0,a.kt)("h2",{id:"understand-how-resources-synchronization-works"},"Understand how resources synchronization works"),(0,a.kt)("p",null,"Each time you make changes to Centreon's configuration and push the\nconfiguration to any poller, the configuration is scanned and updated on\nCentreon MAP."),(0,a.kt)("p",null,"However, if you make any changes (add/delete/update) to Centreon's\nresources and want these changes to be immediately synchronized on your\nCentreon MAP without pushing the configuration, you can force a resource\nsynchronization from Centreon MAP's desktop client through the following\nmenu: ",(0,a.kt)("strong",{parentName:"p"},"Action > Synchronize resources"),"."),(0,a.kt)("p",null,"This operation may take a few seconds. A pop-up will tell you when the\nsynchronization is complete."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(97880).Z,width:"2204",height:"1732"})),(0,a.kt)("h2",{id:"highlight-problems"},"Highlight problems"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This property will only be applied to the user modifying it on the\ndesktop client.")),(0,a.kt)("p",null,"You can change the size of elements according to their status as a way\nof highlighting a problem. This only works when elements are expressed\nin the ",(0,a.kt)("em",{parentName:"p"},"geometric style"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(82754).Z,width:"1800",height:"592"})),(0,a.kt)("p",null,"To use this feature, edit the Status size properties in the desktop\nPreferences. Go to ",(0,a.kt)("strong",{parentName:"p"},"Status > Status size")," to configure it globally."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(43050).Z,width:"1282",height:"1070"})),(0,a.kt)("h2",{id:"geo-view-configuration"},"Geo view configuration"),(0,a.kt)("h3",{id:"configure-tiles-provider"},"Configure tiles provider"),(0,a.kt)("p",null,"You can choose the tile service provider or even add your own provider\nin ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extension > Map | Options"),". By default, Centreon Map\ngeoviews come with Open Street Map and Mapbox."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://operations.osmfoundation.org/policies/tiles/"},"this\nlink")," to understand the Open\nStreet Map Tile usage policy."),(0,a.kt)("p",null,"To change the tile provider, select one in the list and click Save."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(20254).Z,width:"1904",height:"919"})),(0,a.kt)("p",null,"If you want to use your own Tile service provider, if for example you\nhave an internal Open Street Map server, go to\n",(0,a.kt)("inlineCode",{parentName:"p"},"Administration > Extension > Map | Options"),' and choose the "Custom" style.'),(0,a.kt)("p",null,"Define the parameters needed and then save."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(15792).Z,width:"1904",height:"919"})),(0,a.kt)("h3",{id:"configure-data-layers"},"Configure data layers"),(0,a.kt)("p",null,"You can add any external data layer to Centreon GeoView by going to\n",(0,a.kt)("inlineCode",{parentName:"p"},"Administration > Extension > Map"),". The layer mechanism is the same as that of the\ntile provider: we are compatible with tiles map (TMS)."),(0,a.kt)("p",null,"Most of the time, the data layer configuration will consist of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Defining the URL,"),(0,a.kt)("li",{parentName:"ul"},"Setting your token,"),(0,a.kt)("li",{parentName:"ul"},"Adding any extra parameters in JSON format.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(23184).Z,width:"1119",height:"941"})),(0,a.kt)("h2",{id:"create-and-link-a-mapbox-account"},"Create and link a Mapbox account"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Mistakes when editing configuration files can lead to malfunctions of the software. We recommend that you make a backup of the file before editing it and that you only change the settings advised by Centreon.")),(0,a.kt)("p",null,"If you want to be able to have a geographic background on standard views\nand/or use it as a tile service provider in GeoView, you need to have a\nMapbox account and link it to your Centreon Map."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create an account")),(0,a.kt)("p",null,"Mapbox is a service that generates attractive and customizable maps. You\ncan use Mapbox with Centreon MAP for free by:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creating an account ",(0,a.kt)("a",{parentName:"li",href:"https://www.mapbox.com/"},"on Mapbox"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#creating-and-managing-access-tokens"},"Retrieving a private\ntoken"),"\nfrom your Mapbox account and add it to the configuration of the Centreon MAP\nServer (or during installation).")),(0,a.kt)("p",null,"During token creation, you are asked to select properties. Select:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Public scopes: ",(0,a.kt)("em",{parentName:"li"},"styles:read")," and ",(0,a.kt)("em",{parentName:"li"},"styles:tiles")),(0,a.kt)("li",{parentName:"ul"},"Secret scopes: ",(0,a.kt)("em",{parentName:"li"},"styles:list"))),(0,a.kt)("p",null,"Your account allows free limited use of the service up to 50k tiles/month."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A tile is an image used to compose the geographic view.")),(0,a.kt)("p",null,"If you need more tiles, you can upgrade your account\n(",(0,a.kt)("a",{parentName:"p",href:"https://www.mapbox.com/pricing/"},"pricing"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configuration on the Centreon MAP server")),(0,a.kt)("p",null,"Insert the token in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-studio/studio-config.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"##### GEO\nmapbox.token=sk.xxxxxxxx\n")),(0,a.kt)("p",null,"Then restart centreon-map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centreon-map\n")))}h.isMDXComponent=!0},48536:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acl_views_preference_page-c3d4f603b63578e1d22696b7e9dcdd2f.png"},47840:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/admin_preference_page-70a18f575964068b4fa590eaf853203b.png"},51026:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},15792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/geo_custom_provider-e50b78043c81f1a840fc27a226695c80.png"},23184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/geo_datalayers_conf_form-f6f8cc24fbc278464097987b1d451cf6.png"},20254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/geo_options-7d572005268550a5c92639ea32f2492d.png"},17956:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_link_color-51b8fcf2179ddd90c13dd32042637b9f.png"},82754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_object_ratio_example-bd08c4f4112c0adc589c19c825d516d1.png"},43050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guide_ratio_preferences-812c20d9802c5a6567fc7d26c0a57faf.png"},97880:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sync_resources-ddf2c3b3fdf976b7d057dd80113a75af.png"}}]);