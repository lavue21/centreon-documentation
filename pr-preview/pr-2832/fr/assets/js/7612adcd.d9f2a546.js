"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[11066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return r.createElement("div",i({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(86010),o=n(90980),i=n(35715),s=n(8854),l=n(8241);const p="tabList__CuJ",c="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:g,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const h=null===m?m:null!==(b=null!=m?m:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:k[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:z}=(0,s.U)(),[w,A]=(0,r.useState)(h),S=[],{blockElementScrollPositionUntilNextRender:Z}=(0,l.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&f.some((t=>t.value===e))&&A(e)}const O=e=>{const t=e.currentTarget,n=S.indexOf(t),r=f[n].value;r!==w&&(Z(t),A(r),null!=g&&z(g,String(r)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=S.indexOf(e.currentTarget)+1;var n;t=null!==(n=S[r])&&void 0!==n?n:S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;var r;t=null!==(r=S[n])&&void 0!==r?r:S[S.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},v)},f.map((({value:e,label:t,attributes:n})=>r.createElement("li",u({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>S.push(e),onKeyDown:E,onFocus:O,onClick:O},n,{className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,u({key:String(t)},e))}},85775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),a=n(67709),o=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"add-a-remote-server-to-configuration",title:"Rattacher un serveur distant \xe0 un serveur central"},p=void 0,c={unversionedId:"monitoring/monitoring-servers/add-a-remote-server-to-configuration",id:"version-23.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration",title:"Rattacher un serveur distant \xe0 un serveur central",description:"Pr\xe9requis",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration.md",sourceDirName:"monitoring/monitoring-servers",slug:"/monitoring/monitoring-servers/add-a-remote-server-to-configuration",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/monitoring-servers/add-a-remote-server-to-configuration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/monitoring-servers/add-a-remote-server-to-configuration.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"add-a-remote-server-to-configuration",title:"Rattacher un serveur distant \xe0 un serveur central"},sidebar:"version-23.10/docs",previous:{title:"Rattacher un collecteur \xe0 un serveur central ou distant",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/monitoring-servers/add-a-poller-to-configuration"},next:{title:"Communications",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/monitoring-servers/communications"}},u={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"\xc9tape 1 : Configurer un nouveau Remote Server",id:"\xe9tape-1--configurer-un-nouveau-remote-server",level:2},{value:"\xc9tape 2 : Activer la communication",id:"\xe9tape-2--activer-la-communication",level:2},{value:"\xc9tape 3 : Exporter la configuration",id:"\xe9tape-3--exporter-la-configuration",level:2},{value:"Premiers pas",id:"premiers-pas",level:2}],d={toc:m};function g(e){var{components:t}=e,l=s(e,["components"]);return(0,r.kt)("wrapper",i({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,r.kt)("p",null,"Installez le serveur distant ",(0,r.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/installation/installation-of-a-remote-server/using-packages"}),"en utilisant les paquets"),"."),(0,r.kt)("h2",i({},{id:"\xe9tape-1--configurer-un-nouveau-remote-server"}),"\xc9tape 1 : Configurer un nouveau Remote Server"),(0,r.kt)("p",null,"Depuis la version 18.10, un nouvel assistant de configuration permet de cr\xe9er\ntoutes les configurations n\xe9cessaires pour ajouter un Remote Server."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Collecteurs")," et cliquez sur\n",(0,r.kt)("strong",{parentName:"p"},"Ajouter")," pour acc\xe9der \xe0 l'assistant de\nconfiguration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez ",(0,r.kt)("strong",{parentName:"p"},"Ajouter un serveur distant Centreon")," et cliquez sur\n",(0,r.kt)("strong",{parentName:"p"},"Suivant")," :"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(5741).Z,width:"807",height:"329"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez l'option d\xe9sir\xe9e :"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Si vous avez activ\xe9 votre serveur en suivant la documentation, s\xe9lectionnez\nl'option ",(0,r.kt)("strong",{parentName:"p"},"S\xe9lectionnez un serveur distant"),". Dans la liste d\xe9roulante\ns\xe9lectionnez votre serveur, puis saisissez les informations demand\xe9es :"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(17352).Z,width:"794",height:"812"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sinon, s\xe9lectionnez l'option ",(0,r.kt)("strong",{parentName:"p"},"Cr\xe9er un nouveau serveur distant")," et saisissez les informations demand\xe9es :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(40065).Z,width:"799",height:"813"})),(0,r.kt)("p",{parentName:"li"},"Les champs ",(0,r.kt)("strong",{parentName:"p"},"Nom de l'utilisateur ayant acc\xe8s \xe0 la base de donn\xe9es")," et ",(0,r.kt)("strong",{parentName:"p"},"Mot de\npasse de l'utilisateur ayant acc\xe8s \xe0 la base de donn\xe9es")," sont les acc\xe8s aux\nbases de donn\xe9es Centreon d\xe9finis durant l'installation de votre serveur distant."),(0,r.kt)("p",{parentName:"li"},"Le champ ",(0,r.kt)("strong",{parentName:"p"},"Adresse IP du serveur")," est de la forme : ","[(http|https)://]","@IP","[:(port)]",".\nSi votre serveur distant est accessible en HTTPS, il est n\xe9cessaire de pr\xe9ciser\nla m\xe9thode d'acc\xe8s et le port si celui-ci n'est pas par d\xe9faut."),(0,r.kt)("p",{parentName:"li"},"L'option ",(0,r.kt)("strong",{parentName:"p"},"Do not check SSL certificate validation")," permet de contacter le\nserveur distant si celui-ci poss\xe8de un certificat SSL auto-sign\xe9."),(0,r.kt)("p",{parentName:"li"},"  L'option ",(0,r.kt)("strong",{parentName:"p"},"Do not use configured proxy to connect to this server")," permet de\ncontacter le serveur distant en n'utilisant pas la configuration du proxy\nconfigur\xe9e sur le serveur Central."))),(0,r.kt)("ol",i({},{start:4}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Suivant")," :")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez le(s) collecteur(s) \xe0 lier \xe0 ce serveur distant. Puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Appliquer")," :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(93264).Z,width:"802",height:"286"})),(0,r.kt)("p",{parentName:"li"},"L'assistant va configurer votre nouveau serveur :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(48530).Z,width:"829",height:"348"})),(0,r.kt)("p",{parentName:"li"},"Le serveur distant est maintenant configur\xe9 :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(56640).Z,width:"1315",height:"249"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Si vous avez personnalis\xe9 les noms des bases \xe0 l'\xe9tape 6 de ",(0,r.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/installation/web-and-post-installation"}),"l'installation web"),", effectuez les \xe9tapes suivantes:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Collecteurs > Configuration de Centreon broker"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez le service broker du serveur distant d\xe9sir\xe9.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dans l'onglet ",(0,r.kt)("strong",{parentName:"p"},"Output"),", dans la section ",(0,r.kt)("strong",{parentName:"p"},"Output 1 - Unified SQL"),", mettez \xe0 jour le nom de la base dans le champ ",(0,r.kt)("strong",{parentName:"p"},"DB name")," (le nom par d\xe9faut de la base est ",(0,r.kt)("strong",{parentName:"p"},"centreon_storage"),"), puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Sauvegarder"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"}),"Exportez la configuration")," du serveur distant.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Red\xe9marrez cbd:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"systemctl restart cbd\n")))),(0,r.kt)("p",{parentName:"li"},"Si besoin, consultez ",(0,r.kt)("strong",{parentName:"p"},"/var/log/centreon-broker/<nom-du-serveur-distant",">",".log")," pour identifier des erreurs. (Dans l'exemple ci-dessus, il s'agit du fichier ",(0,r.kt)("strong",{parentName:"p"},"/var/log/centreon-broker/remote-server.log"),".)"))),(0,r.kt)("h2",i({},{id:"\xe9tape-2--activer-la-communication"}),"\xc9tape 2 : Activer la communication"),(0,r.kt)("p",null,"La communication entre le serveur Central et un serveur distant est assur\xe9e par Gorgone et peut\n\xeatre faite en utilisant ZMQ (avec un Gorgone s'ex\xe9cutant sur le serveur distant,\nrecommand\xe9) ou en utilisant le protocole SSH."),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Avec ZMQ",label:"Avec ZMQ",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionner le type de communication :"),(0,r.kt)("p",{parentName:"li"},"\xc9ditez la configuration du serveur distant fra\xeechement cr\xe9\xe9, et s\xe9lectionnez ",(0,r.kt)("strong",{parentName:"p"},"ZMQ"),"\ncomme ",(0,r.kt)("strong",{parentName:"p"},"Protocole de connexion utilis\xe9 par Gorgone"),". D\xe9finissez le ",(0,r.kt)("strong",{parentName:"p"},"port"),"\nad\xe9quat (le port ",(0,r.kt)("strong",{parentName:"p"},"5556")," est recommand\xe9)."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(70690).Z,width:"1344",height:"545"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Sauvegarder"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Notez que le ",(0,r.kt)("em",{parentName:"p"},"SSH Legacy port")," n'est plus utilis\xe9 et sera supprim\xe9."),(0,r.kt)("p",{parentName:"blockquote"},"Si vous l'utilisiez dans des scripts personnalis\xe9s, pensez \xe0 changer pour\nutiliser le syst\xe8me de communication de Gorgone."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copier la configuration de Gorgone :"),(0,r.kt)("p",{parentName:"li"},"Depuis la liste des collecteurs, cliquez sur l'ic\xf4ne d'action ",(0,r.kt)("strong",{parentName:"p"},"Gorgone\nconfiguration")," sur la ligne correspondant \xe0 votre serveur distant ",(0,r.kt)("img",{alt:"image",src:n(52942).Z+"#thumbnail2",width:"32",height:"32"})),(0,r.kt)("p",{parentName:"li"},"Une pop-in affiche la configuration \xe0 copier dans le ",(0,r.kt)("strong",{parentName:"p"},"terminal du serveur\ndistant"),".\nCliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Copy to clipboard"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(42764).Z,width:"1320",height:"326"})),(0,r.kt)("p",{parentName:"li"},"Collez le contenu du presse-papier directement dans le ",(0,r.kt)("strong",{parentName:"p"},"terminal du serveur distant"),"\ncar celui-ci cr\xe9era le fichier de configuration attendu :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-shell"}),'cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml\nname: gorgoned-My Remote Server\ndescription: Configuration for remote server My Remote Server\ngorgone:\n  gorgonecore:\n    id: 3\n    external_com_type: tcp\n    external_com_path: "*:5556"\n    authorized_clients:\n      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI\n    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"\n    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"\n  modules:\n    - name: action\n      package: gorgone::modules::core::action::hooks\n      enable: true\n\n    - name: cron\n      package: "gorgone::modules::core::cron::hooks"\n      enable: true\n      cron: !include cron.d/*.yaml\n\n    - name: nodes\n      package: gorgone::modules::centreon::nodes::hooks\n      enable: true\n\n    - name: proxy\n      package: gorgone::modules::core::proxy::hooks\n      enable: true\n\n    - name: legacycmd\n      package: gorgone::modules::centreon::legacycmd::hooks\n      enable: true\n      cmd_file: "/var/lib/centreon/centcore.cmd"\n      cache_dir: "/var/cache/centreon/"\n      cache_dir_trap: "/etc/snmp/centreon_traps/"\n      remote_dir: "/var/cache/centreon/config/remote-data/"\n\n    - name: engine\n      package: gorgone::modules::centreon::engine::hooks\n      enable: true\n      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"\n\n    - name: statistics\n      package: "gorgone::modules::centreon::statistics::hooks"\n      enable: true\n      broker_cache_dir: "/var/cache/centreon/broker-stats/"\n      cron:\n        - id: broker_stats\n          timespec: "*/5 * * * *"\n          action: BROKERSTATS\n          parameters:\n            timeout: 10\n        - id: engine_stats\n          timespec: "*/5 * * * *"\n          action: ENGINESTATS\n          parameters:\n            timeout: 10\n\nEOF\n')),(0,r.kt)("p",{parentName:"li"},"Appuyer sur la touche ",(0,r.kt)("em",{parentName:"p"},"Entr\xe9e")," pour que la commande soit appliqu\xe9e."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Vous pouvez copier la configuration en s\xe9lectionnant le contenu de la pop-in\npour la copier dans un fichier de configuration personnalis\xe9."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"D\xe9marrer le daemon Gorgone :"),(0,r.kt)("p",{parentName:"li"},"  Depuis le serveur distant, ex\xe9cutez la commande suivante pour red\xe9marrer le\nservice Gorgone :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"systemctl restart gorgoned\n")),(0,r.kt)("p",{parentName:"li"},"  Assurez-vous que le service est d\xe9marr\xe9 en ex\xe9cutant la commande suivante :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"systemctl status gorgoned\n")),(0,r.kt)("p",{parentName:"li"},"  Le r\xe9sultat devrait \xeatre similaire :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"\u25cf gorgoned.service - Centreon Gorgone\n  Loaded: loaded (/etc/systemd/system/gorgoned.service; enabled; vendor preset: disabled)\n  Active: active (running) since Wed 2020-03-24 19:45:00 CET; 6s ago\nMain PID: 30902 (perl)\n  CGroup: /system.slice/gorgoned.service\n          \u251c\u250030902 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info\n          \u251c\u250030916 gorgone-nodes\n          \u251c\u250030917 gorgone-dbcleaner\n          \u251c\u250030924 gorgone-proxy\n          \u251c\u250030925 gorgone-proxy\n          \u251c\u250030938 gorgone-proxy\n          \u251c\u250030944 gorgone-proxy\n          \u251c\u250030946 gorgone-proxy\n          \u251c\u250030959 gorgone-engine\n          \u251c\u250030966 gorgone-action\n          \u2514\u250030967 gorgone-legacycmd\n\nMar 24 19:45:00 localhost.localdomain systemd[1]: Started Centreon Gorgone.\n")),(0,r.kt)("ol",i({parentName:"li"},{start:4}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pour forcer le Gorgone du Central \xe0 se connecter au serveur distant"),",\nred\xe9marrez-le avec la commande suivante depuis le ",(0,r.kt)("strong",{parentName:"p"},"serveur Central")," :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"systemctl restart gorgoned\n"))))))),(0,r.kt)(o.Z,{value:"Avec SSH (D\xe9pr\xe9ci\xe9)",label:"Avec SSH (D\xe9pr\xe9ci\xe9)",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"D\xe9pr\xe9ci\xe9")),(0,r.kt)("p",{parentName:"blockquote"},"Ce mode ne doit plus \xeatre utilis\xe9 car il n'autorise pas la\nsynchronisation des donn\xe9es entre l'interface utilisateur du Central\net du Remote Server.")))),(0,r.kt)("h2",i({},{id:"\xe9tape-3--exporter-la-configuration"}),"\xc9tape 3 : Exporter la configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Depuis la liste des collecteurs, s\xe9lectionnez le serveur distant et cliquez sur\n",(0,r.kt)("strong",{parentName:"p"},"Exporter la configuration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cochez ensuite les trois premi\xe8res cases et cliquez sur  ",(0,r.kt)("strong",{parentName:"p"},"Exporter")," :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(99720).Z,width:"1361",height:"347"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pour finir, depuis le serveur distant, d\xe9marrez/red\xe9marrez les services de\ncollecte :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{}),"```shell\nsystemctl restart cbd centengine\n```\n\nLe moteur de supervision du Remote Server va alors d\xe9marrer et se connecter au\nBroker Central.\n\n![image](../../assets/monitoring/monitoring-servers/remote-list-zmq-started.png)\n")))),(0,r.kt)("h2",i({},{id:"premiers-pas"}),"Premiers pas"),(0,r.kt)("p",null,"Rendez-vous dans le chapitre ",(0,r.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/getting-started/welcome"}),"Premiers pas"),"\npour mettre en place votre premi\xe8re supervision."))}g.isMDXComponent=!0},52942:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzODE5OUMzODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzODE5OUM0ODdDNDExRTVBM0NFRkI5Njg4NUZGRTE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM4MTk5QzE4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM4MTk5QzI4N0M0MTFFNUEzQ0VGQjk2ODg1RkZFMTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/QN5jAAADoUlEQVR42uxXW0iTURz/f3Nzm2O2uTTmZV6gHhStrOiiZaBBFkoSSJGg0UOlJIEPlq/R7SW0LKzAygp6KYqCKHroMiG76sOM1oVodjEv+9zaxd2+/mc7jem+uc0+8aUDP853Lv//+Z3/bWdMSUlpOgCcQpQhkkD49hLRotc/G+BbFCM6ETUwd60ccRVRxLcoQlTA3LfCSAvEAkzI+AnisUCHZiMaom0iBHwh45uIM/Gcgr7lnS8tXZ8XCwHRtLFGQLNnxbJJBPPc5p2AeIa1BMSaKHuIr0OH/RgTE0IRWEBiLM4LbUPcEYqADdGGkMahb0BIF0wijs82DYUgoEDcpn2sMdCEhN4KGYQbEIlx6FMJaQFLLP6fSxcQC6ygfawuMCAhi5Bp2Pc/DaMp6N1zXUs8QV9U3cylr+n+hV1ddtXnPlj4cxDUw+8B54VNQ6dCI/lUVK0FpzUVZMrwTJEpgc2v8APsZjJzFHEaMfzPaTiSswqMa+vxBakOzknlDJpMxIHDy4RpCuxro++DxtA4menX0IpIpcEYRG/dhVZj+cGA0kQUFzPQlJ8MltpMGK3RMlXZPO/aBOQkFXnxK51atTEWC3C0FgTznekxNYCXO0nGJ1aqwOYBOGKwQOfqQP3RSBm4XJICmiEH4L4pmjqXqxJ+e3xw6BVLZs5S3demW2AsEhsMolzsusj34aUqaC1MRmujZrcPQo4Cs8sXLuzjwIqHExkiSxshkSue5obtEZ9l1l+7QZkm3aJLgmPFyf4prTwgWvloFLrXqfFwDur0Y1Nv/zcmEwKhQWRfj7tcD012oqRnugvKKHiqAppOmTZlqhrJtKBJH5jskHHL6b8p3+EkBrZmyqcYNLik0+kKIv1pCG2pmM8/CjbBhwkvuDgGyrVSSJGKgMVb941MBg7n+GVbChbAzrxAcLa9scAVo5VkGHk5bSYEntJoz0B4aQEKg8Rln5TaWd+4rliiH3bCuJvzkyA3e2fxgMHs5j28Nk8BF9E9LiTY+JyFDkMwrutJHWM4jourdGIwNmPXQb6XpCRCO2ZDZYYM7poccOOLA/rZAJFlKgnsyJFDVZYc7n9zwt4XZqeJdcuomn2I83598RKgJGpoVcsk4xx1IntgscKXpRDL5GImycNxdoebsxkt7tH2j7Zk1urJoKJDiP2Ie0FdsyFASSzCrpkWlWgPEZL85/hK8awJhBAh1a0EsRGRT6sdad8Rg/S/Zi8dh7U/AgwAYk04ZraQjHUAAAAASUVORK5CYII="},70690:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-edit-zmq-40834c7cdb7d7a2aa05a531348749a37.png"},99720:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-generate-config-ac8ebd873bf8e37023ae47f8ce9a7fac.png"},42764:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-gorgone-display-config-dbedb13a4b5bfb710aff0e220511293d.png"},56640:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-list-zmq-cf7a2be3cc2e57fe236cfc5f70620ca9.png"},5741:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-1-641ce7369f2dff07dd0743ac25992fb9.png"},17352:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-2a-a510da74ffbd2f44f17dae4d01392465.png"},40065:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-2b-5cded616758900ab1b6934e092fa3962.png"},93264:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-3-6890d08346d083201dfc59fb1f67fd1b.png"},48530:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-add-remote-4-74219956b8b01ff83c13c0d0a9a8115a.png"}}]);