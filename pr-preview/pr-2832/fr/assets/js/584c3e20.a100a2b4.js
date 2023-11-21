"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[28808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const i="tabItem_Ymn6";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return r.createElement("div",s({role:"tabpanel",className:(0,a.Z)(i,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(86010),i=n(90980),s=n(35715),l=n(8854),o=n(8241);const p="tabList__CuJ",u="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,s.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var A;const N=null===d?d:null!==(A=null!=d?d:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==A?A:k[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,l.U)(),[E,z]=(0,r.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=g){const e=y[g];null!=e&&e!==E&&h.some((t=>t.value===e))&&z(e)}const S=e=>{const t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==E&&(C(t),z(r),null!=g&&b(g,String(r)))},w=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[r])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var r;t=null!==(r=O[n])&&void 0!==r?r:O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},v)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:e=>O.push(e),onKeyDown:w,onFocus:S,onClick:S},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":E===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,c({key:String(t)},e))}},7243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905),a=n(67709),i=n(7626);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"autodisco-aws",title:"Utiliser Autodiscovery pour d\xe9couvrir des instances AWS EC2"},p=void 0,u={unversionedId:"getting-started/autodisco-aws",id:"version-23.10/getting-started/autodisco-aws",title:"Utiliser Autodiscovery pour d\xe9couvrir des instances AWS EC2",description:"Dans ce tutoriel, nous allons utiliser le module Autodiscovery pour d\xe9tecter des instances AWS EC2 et les mettre en supervision.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/autodisco-aws.md",sourceDirName:"getting-started",slug:"/getting-started/autodisco-aws",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/getting-started/autodisco-aws",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/autodisco-aws.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"autodisco-aws",title:"Utiliser Autodiscovery pour d\xe9couvrir des instances AWS EC2"},sidebar:"version-23.10/docs",previous:{title:"Superviser une base de donn\xe9es MySQL ou MariaDB",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/getting-started/monitor-mysql-server"},next:{title:"Superviser une imprimante en SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/getting-started/monitor-printer-snmp"}},c={},d=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"\xc9tape 1 : Installer le plugin Amazon EC2",id:"\xe9tape-1--installer-le-plugin-amazon-ec2",level:2},{value:"\xc9tape 2 : Configurer la t\xe2che de d\xe9couverte",id:"\xe9tape-2--configurer-la-t\xe2che-de-d\xe9couverte",level:2},{value:"\xc9tape 3 : Sauvegarder les h\xf4tes et les mettre en supervision",id:"\xe9tape-3--sauvegarder-les-h\xf4tes-et-les-mettre-en-supervision",level:2}],m={toc:d};function g(e){var{components:t}=e,o=l(e,["components"]);return(0,r.kt)("wrapper",s({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dans ce tutoriel, nous allons utiliser le module ",(0,r.kt)("a",s({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/discovery/hosts-discovery"}),"Autodiscovery")," pour d\xe9tecter des instances AWS EC2 et les mettre en supervision."),(0,r.kt)("h2",s({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,r.kt)("p",null,"Vous devez disposer :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"des informations d'identification pour le groupe d'instances AWS que vous souhaitez superviser (nom, AWS Access Key et AWS Secret Key)"),(0,r.kt)("li",{parentName:"ul"},"de la r\xe9gion dans laquelle se trouvent vos instances.")),(0,r.kt)("h2",s({},{id:"\xe9tape-1--installer-le-plugin-amazon-ec2"}),"\xc9tape 1 : Installer le plugin Amazon EC2"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assurez-vous que votre ",(0,r.kt)("a",s({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/administration/licenses"}),"licence")," commerciale ou votre licence gratuite ",(0,r.kt)("a",s({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/getting-started/IT100"}),"IT-100")," est install\xe9e.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",s({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/discovery/installation"}),"Installez")," le module d'autod\xe9couverte.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rendez les connecteurs de supervision disponibles :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Si vous avez une licence en ligne, les connecteurs de supervision sont d\xe9j\xe0 disponibles dans l'interface."),(0,r.kt)("li",{parentName:"ul"},"Si vous avez une licence hors ligne, dans le terminal de votre serveur central, entrez :")))),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"dnf install centreon-pack-*\n"))),(0,r.kt)(i.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"dnf install centreon-pack-*\n"))),(0,r.kt)(i.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"apt install centreon-pack-*\n")))),(0,r.kt)("ol",s({},{start:4}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pour installer le connecteur de supervision Amazon EC2, allez \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dans le champ ",(0,r.kt)("strong",{parentName:"p"},"Keyword"),", entrez ",(0,r.kt)("strong",{parentName:"p"},"Amazon EC2")," puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Rechercher"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur le ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," dans le coin sup\xe9rieur droit du connecteur de supervision. Le connecteur de supervision a maintenant une bordure verte et une coche dans le coin sup\xe9rieur droit : les mod\xe8les de configuration et les fournisseurs de d\xe9couverte sont maintenant install\xe9s.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Suivez ",(0,r.kt)("a",s({parentName:"p"},{href:"/pp/integrations/plugin-packs/procedures/cloud-aws-ec2"}),"cette proc\xe9dure"),"\n(sections ",(0,r.kt)("a",s({parentName:"p"},{href:"/pp/integrations/plugin-packs/procedures/cloud-aws-ec2#plugin-dependencies"}),"Plugin dependencies")," et\n",(0,r.kt)("a",s({parentName:"p"},{href:"/pp/integrations/plugin-packs/procedures/cloud-aws-ec2#setup"}),"Setup"),") pour finir d'installer le connecteur de supervision. (Vous pouvez \xe9galement acc\xe9der \xe0 la documentation d'un connecteur de supervision en cliquant sur le ",(0,r.kt)("inlineCode",{parentName:"p"},"i"),".)"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:n(18395).Z,width:"135",height:"135"})))),(0,r.kt)("h2",s({},{id:"\xe9tape-2--configurer-la-t\xe2che-de-d\xe9couverte"}),"\xc9tape 2 : Configurer la t\xe2che de d\xe9couverte"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > D\xe9couverte"),", puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Ajouter"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Entrez un nom pour votre t\xe2che de d\xe9couverte, puis s\xe9lectionnez le fournisseur ",(0,r.kt)("strong",{parentName:"p"},"Amazon AWS EC2"),". Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Suivant"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(9809).Z,width:"1381",height:"696"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Si votre infrastructure le demande, renseignez les d\xe9tails du proxy d\xe9sir\xe9.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur le ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," \xe0 droite de la liste ",(0,r.kt)("strong",{parentName:"p"},"Choisir des identifants"),". Renseignez les champs nom, AWS Access Key et AWS Secret Key,\npuis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Confirmer"),". Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Suivant"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Entrez la r\xe9gion o\xf9 se situent vos instances EC2 (par exemple, ",(0,r.kt)("strong",{parentName:"p"},"eu-north-1"),"). Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Suivant"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xc9ditez ou ajoutez des ",(0,r.kt)("a",s({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/discovery/hosts-discovery#comment-utiliser-les-modificateurs"}),"modificateurs")," :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Faites correspondre ",(0,r.kt)("inlineCode",{parentName:"li"},"host.name")," \xe0 l'attribut ",(0,r.kt)("inlineCode",{parentName:"li"},"discovery.results.name"),". Les noms de vos h\xf4tes dans Centreon seront ceux d\xe9finis dans cet attribut (c'est-\xe0-dire le hostname de l'instance)."),(0,r.kt)("li",{parentName:"ul"},'Dans notre exemple, nous allons exclure les instances dont le hostname contient "test".')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(96271).Z,width:"444",height:"308"})),(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Suivant"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez ",(0,r.kt)("strong",{parentName:"p"},"Analyse manuelle")," : nous devrons ajouter manuellement les h\xf4tes \xe0 la liste des h\xf4tes \xe0 superviser. Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Suivant"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez ",(0,r.kt)("strong",{parentName:"p"},"Ex\xe9cuter imm\xe9diatement")," puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Finir"),". La t\xe2che de d\xe9couverte appara\xeet dans la liste des t\xe2ches."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(78066).Z,width:"707",height:"233"})))),(0,r.kt)("h2",s({},{id:"\xe9tape-3--sauvegarder-les-h\xf4tes-et-les-mettre-en-supervision"}),"\xc9tape 3 : Sauvegarder les h\xf4tes et les mettre en supervision"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apr\xe8s quelques secondes, rafra\xeechissez la page. Une coche verte devrait appara\xeetre dans la colonne ",(0,r.kt)("strong",{parentName:"p"},"Statut"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(39451).Z,width:"706",height:"235"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Survolez la ligne correspondant \xe0 la t\xe2che qui vient de se terminer puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Afficher le r\xe9sultat de la t\xe2che")," (l'ic\xf4ne fl\xe8che). Une liste d'h\xf4tes appara\xeet."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"image",src:n(36855).Z,width:"912",height:"246"})),(0,r.kt)("p",{parentName:"li"}," Des ic\xf4nes vous permettent d'identifier l'action qui sera effectu\xe9e sur l'h\xf4te :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"L'ic\xf4ne ",(0,r.kt)("strong",{parentName:"li"},"plus")," signifie que cet h\xf4te n\u2019existe pas encore et sera cr\xe9\xe9."),(0,r.kt)("li",{parentName:"ul"},"L'ic\xf4ne ",(0,r.kt)("strong",{parentName:"li"},"fl\xe8che")," signifie que cet h\xf4te existe d\xe9j\xe0 et sa configuration sera mise \xe0 jour."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\xe9lectionnez les h\xf4tes que vous souhaitez ajouter \xe0 la liste des h\xf4tes supervis\xe9s, puis cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Enregistrer"),". ",(0,r.kt)("img",{alt:"image",src:n(20).Z,width:"29",height:"37"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > H\xf4tes")," et v\xe9rifiez que les h\xf4tes que vous avez s\xe9lectionn\xe9s \xe0 l'\xe9tape pr\xe9cedente apparaissent bien dans la liste. Attention, les h\xf4tes ont \xe9t\xe9 ajout\xe9s \xe0 la liste des h\xf4tes mais ils ne sont pas encore supervis\xe9s.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",s({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"}),"D\xe9ployez la configuration"),". Les h\xf4tes apparaissent \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Statut des ressources")," : ils sont maintenant supervis\xe9s."))))}g.isMDXComponent=!0},18395:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},78066:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-listofjobs-d5b8712131d2f6bbee6a6eb7efaee929.png"},96271:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-mapper-43a33065a2775d4154072f6aeb9c9980.png"},9809:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-provider-7e73e303707ee802c06dc892eb72a37e.png"},36855:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-results-79fd06d13a29232e0d58332ba909e1f9.png"},20:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADeSURBVFhH7dOxDgFBEMZxD6DT6FQ63XU0dPeSGoWGgkg8AC+hkWs1+wwr3ySTjM3cWhcjxBT/ZG/X7C8X9EII8dM5apqjpnVCB/0lpZ2V5Gg2R0v7XvR8usZ6sY9Nc6NniWIPZ/iMnMlVhNbzHSGzaksIo1hjD+vJeK3OaqkoX8rPuHxabWiPEbkeDVcPb8rn/JxWhCIJy1IQ8ZnckxWjKIU1ELXNcy+hiOE2EL0dRYBzv1YT9Fm/g+L74sGu5f63Kno8XGhIu6wkzOIO7W6kotY5apqjpjlq2r+gId4BMvb1+vKeY1YAAAAASUVORK5CYII="},39451:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-success-019dbe3951b911798fae0c4f47bdf638.png"}}]);