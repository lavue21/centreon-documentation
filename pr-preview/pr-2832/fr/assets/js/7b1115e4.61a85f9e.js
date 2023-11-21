"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[87840],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>g});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),g=o,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||a;return r?t.createElement(d,i(i({ref:n},s),{},{components:r})):t.createElement(d,i({ref:n},s))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24270:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(67294);var t=r(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"move-poller",title:"Rattacher un collecteur \xe0 un serveur distant diff\xe9rent"},l=void 0,c={unversionedId:"monitoring/monitoring-servers/move-poller",id:"version-23.10/monitoring/monitoring-servers/move-poller",title:"Rattacher un collecteur \xe0 un serveur distant diff\xe9rent",description:"Voici la proc\xe9dure pour attacher un collecteur du serveur Centreon Central \xe0 un serveur distant, ou \xe0 partir d'un",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/monitoring-servers/move-poller.md",sourceDirName:"monitoring/monitoring-servers",slug:"/monitoring/monitoring-servers/move-poller",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/monitoring-servers/move-poller",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/monitoring-servers/move-poller.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"move-poller",title:"Rattacher un collecteur \xe0 un serveur distant diff\xe9rent"},sidebar:"version-23.10/docs",previous:{title:"Communications",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/monitoring-servers/communications"},next:{title:"Configuration avanc\xe9e",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/monitoring-servers/advanced-configuration"}},u={},s=[{value:"Mise \xe0 jour de la configuration Centreon Poller",id:"mise-\xe0-jour-de-la-configuration-centreon-poller",level:2},{value:"Mise \xe0 jour de la configuration Centreon Gorgone",id:"mise-\xe0-jour-de-la-configuration-centreon-gorgone",level:2},{value:"Mise \xe0 jour de la configuration Centreon Broker",id:"mise-\xe0-jour-de-la-configuration-centreon-broker",level:2},{value:"Deploy the new configuration",id:"deploy-the-new-configuration",level:2}],p={toc:s};function m(e){var{components:n}=e,i=a(e,["components"]);return(0,t.kt)("wrapper",o({},p,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Voici la proc\xe9dure pour attacher un collecteur du serveur Centreon Central \xe0 un serveur distant, ou \xe0 partir d'un\nserveur distant \xe0 un autre."),(0,t.kt)("h2",o({},{id:"mise-\xe0-jour-de-la-configuration-centreon-poller"}),"Mise \xe0 jour de la configuration Centreon Poller"),(0,t.kt)("p",null,"Rendez-vous dans le menu ",(0,t.kt)("strong",{parentName:"p"},"Configuration > Pollers > Pollers")," et \xe9diter votre collecteur."),(0,t.kt)("p",null,"Dans le champ ",(0,t.kt)("strong",{parentName:"p"},"Attach to Master Remote Server")," s\xe9lectionn\xe9 le nouveau serveur :"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"image",src:r(8465).Z,width:"1766",height:"608"})),(0,t.kt)("p",null,"Cliquez sur ",(0,t.kt)("strong",{parentName:"p"},"Save"),"."),(0,t.kt)("h2",o({},{id:"mise-\xe0-jour-de-la-configuration-centreon-gorgone"}),"Mise \xe0 jour de la configuration Centreon Gorgone"),(0,t.kt)("p",null,"Depuis la liste des Pollers, cliquer sur l'icon d'action ",(0,t.kt)("strong",{parentName:"p"},"Gorgone\nconfiguration")," sur la ligne correspondant \xe0 votre Remote Server ",(0,t.kt)("img",{alt:"image",src:r(52942).Z+"#thumbnail2",width:"32",height:"32"})),(0,t.kt)("p",null,"Une pop-in affiche la configuration \xe0 copier dans le ",(0,t.kt)("strong",{parentName:"p"},"terminal du Remote\nServer"),".\nCliquer sur ",(0,t.kt)("strong",{parentName:"p"},"Copy to clipboard"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"image",src:r(42764).Z,width:"1320",height:"326"})),(0,t.kt)("p",null,"Coller le contenu du presse-papier directement dans le ",(0,t.kt)("strong",{parentName:"p"},"terminal du Remote\nServer")," car celui-ci cr\xe9era le fichier de configuration attendu :"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-shell"}),'cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml\nname: gorgoned-My Remote Server\ndescription: Configuration for remote server My Remote Server\ngorgone:\n  gorgonecore:\n    id: 3\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: cron\n      package: "gorgone::modules::core::cron::hooks"\n      enable: true\n      cron: !include cron.d/*.yaml\n\n    - name: nodes\n      package: gorgone::modules::centreon::nodes::hooks\n      enable: true\n\n    - name: proxy\n      package: gorgone::modules::core::proxy::hooks\n      enable: true\n\n    - name: legacycmd\n      package: gorgone::modules::centreon::legacycmd::hooks\n      enable: true\n      cmd_file: "/var/lib/centreon/centcore.cmd"\n      cache_dir: "/var/cache/centreon/"\n      cache_dir_trap: "/etc/snmp/centreon_traps/"\n      remote_dir: "/var/cache/centreon/config/remote-data/"\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\n    - name: statistics\n      package: "gorgone::modules::centreon::statistics::hooks"\n      enable: true\n      broker_cache_dir: "/var/cache/centreon/broker-stats/"\n      cron:\n        - id: broker_stats\n          timespec: "*/5 * * * *"\n          action: BROKERSTATS\n          parameters:\n            timeout: 10\n        - id: engine_stats\n          timespec: "*/5 * * * *"\n          action: ENGINESTATS\n          parameters:\n            timeout: 10\n\nEOF\n')),(0,t.kt)("p",null,"Appuyer sur la touche ",(0,t.kt)("em",{parentName:"p"},"Entr\xe9e")," pour que la commande soit appliqu\xe9e."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Vous pouvez copier la configuration en s\xe9lectionnant le contenu de la popin\npour la copier dans un fichier de configuration personnalis\xe9.")),(0,t.kt)("p",null,"Red\xe9marrez Centreon Gorgone:"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"systemctl restart gorgoned\n")),(0,t.kt)("h2",o({},{id:"mise-\xe0-jour-de-la-configuration-centreon-broker"}),"Mise \xe0 jour de la configuration Centreon Broker"),(0,t.kt)("p",null,"Rendez-vous dans le menu ",(0,t.kt)("strong",{parentName:"p"},"Configuration > Pollers > Pollers")," et \xe9ditez la configuration li\xe9e \xe0 votre collecteur."),(0,t.kt)("p",null,"Dans l'onglet ",(0,t.kt)("strong",{parentName:"p"},"Output")," , ajoutez ou modifiez l'entr\xe9e ",(0,t.kt)("strong",{parentName:"p"},"TCP - IPv4")," pour se connecter au nouveau serveur :"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"image",src:r(6830).Z,width:"1916",height:"688"})),(0,t.kt)("p",null,"Cliquez sur ",(0,t.kt)("strong",{parentName:"p"},"Save")),(0,t.kt)("h2",o({},{id:"deploy-the-new-configuration"}),"Deploy the new configuration"),(0,t.kt)("p",null,"Rendez-vous dans le menu ",(0,t.kt)("strong",{parentName:"p"},"Configuration > Pollers > Pollers")," et d\xe9ployez la configuration de votre collecteur."),(0,t.kt)("p",null,"Sur le serveur sur lequel vous avez connect\xe9 votre serveur, red\xe9marrez Centreon Gorgone :"),(0,t.kt)("pre",null,(0,t.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"systemctl restart gorgoned\n")))}m.isMDXComponent=!0},52942:(e,n,r)=>{r.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzODE5OUMzODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzODE5OUM0ODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM4MTk5QzE4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM4MTk5QzI4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/QN5jAAADoUlEQVR42uxXW0iTURz/f3Nzm2O2uTTmZV6gHhStrOiiZaBBFkoSSJGg0UOlJIEPlq/R7SW0LKzAygp6KYqCKHroMiG76sOM1oVodjEv+9zaxd2+/mc7jem+uc0+8aUDP853Lv//+Z3/bWdMSUlpOgCcQpQhkkD49hLRotc/G+BbFCM6ETUwd60ccRVRxLcoQlTA3LfCSAvEAkzI+AnisUCHZiMaom0iBHwh45uIM/Gcgr7lnS8tXZ8XCwHRtLFGQLNnxbJJBPPc5p2AeIa1BMSaKHuIr0OH/RgTE0IRWEBiLM4LbUPcEYqADdGGkMahb0BIF0wijs82DYUgoEDcpn2sMdCEhN4KGYQbEIlx6FMJaQFLLP6fSxcQC6ygfawuMCAhi5Bp2Pc/DaMp6N1zXUs8QV9U3cylr+n+hV1ddtXnPlj4cxDUw+8B54VNQ6dCI/lUVK0FpzUVZMrwTJEpgc2v8APsZjJzFHEaMfzPaTiSswqMa+vxBakOzknlDJpMxIHDy4RpCuxro++DxtA4menX0IpIpcEYRG/dhVZj+cGA0kQUFzPQlJ8MltpMGK3RMlXZPO/aBOQkFXnxK51atTEWC3C0FgTznekxNYCXO0nGJ1aqwOYBOGKwQOfqQP3RSBm4XJICmiEH4L4pmjqXqxJ+e3xw6BVLZs5S3demW2AsEhsMolzsusj34aUqaC1MRmujZrcPQo4Cs8sXLuzjwIqHExkiSxshkSue5obtEZ9l1l+7QZkm3aJLgmPFyf4prTwgWvloFLrXqfFwDur0Y1Nv/zcmEwKhQWRfj7tcD012oqRnugvKKHiqAppOmTZlqhrJtKBJH5jskHHL6b8p3+EkBrZmyqcYNLik0+kKIv1pCG2pmM8/CjbBhwkvuDgGyrVSSJGKgMVb941MBg7n+GVbChbAzrxAcLa9scAVo5VkGHk5bSYEntJoz0B4aQEKg8Rln5TaWd+4rliiH3bCuJvzkyA3e2fxgMHs5j28Nk8BF9E9LiTY+JyFDkMwrutJHWM4jourdGIwNmPXQb6XpCRCO2ZDZYYM7poccOOLA/rZAJFlKgnsyJFDVZYc7n9zwt4XZqeJdcuomn2I83598RKgJGpoVcsk4xx1IntgscKXpRDL5GImycNxdoebsxkt7tH2j7Zk1urJoKJDiP2Ie0FdsyFASSzCrpkWlWgPEZL85/hK8awJhBAh1a0EsRGRT6sdad8Rg/S/Zi8dh7U/AgwAYk04ZraQjHUAAAAASUVORK5CYII="},8465:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/move_poller_conf_1-392e55435ec6898cea53047938b7394b.png"},6830:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/move_poller_conf_2-217e8bfe3fd81decf2c9e88c781bb48d.png"},42764:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/remote-gorgone-display-config-dbedb13a4b5bfb710aff0e220511293d.png"}}]);