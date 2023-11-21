"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[22178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l({children:e,hidden:t,className:n}){return r.createElement("div",s({role:"tabpanel",className:(0,o.Z)(a,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),o=n(86010),a=n(90980),s=n(35715),l=n(8854),i=n(8241);const c="tabList__CuJ",u="tabItem_LNqP";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e){var t;const{lazy:n,block:a,defaultValue:p,values:m,groupId:h,className:b}=e,E=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:E.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var A;const N=null===p?p:null!==(A=null!=p?p:null===(t=E.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==A?A:E[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:v}=(0,l.U)(),[y,T]=(0,r.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:L}=(0,i.o5)();if(null!=h){const e=_[h];null!=e&&e!==y&&g.some((t=>t.value===e))&&T(e)}const k=e=>{const t=e.currentTarget,n=S.indexOf(t),r=g[n].value;r!==y&&(L(t),T(r),null!=h&&v(h,String(r)))},R=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=S.indexOf(e.currentTarget)+1;var n;t=null!==(n=S[r])&&void 0!==n?n:S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;var r;t=null!==(r=S[n])&&void 0!==r?r:S[S.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},b)},g.map((({value:e,label:t,attributes:n})=>r.createElement("li",d({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:e=>S.push(e),onKeyDown:R,onFocus:k,onClick:k},n,{className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":y===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(E.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},E.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,a.Z)();return r.createElement(p,d({key:String(t)},e))}},57456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905),o=n(67709),a=n(7626);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"troubleshooting-guide",title:"Troubleshooting HA"},c=void 0,u={unversionedId:"administration/centreon-ha/troubleshooting-guide",id:"version-23.10/administration/centreon-ha/troubleshooting-guide",title:"Troubleshooting HA",description:"A failed action is displayed in crm_mon but the resource seems to be working fine",source:"@site/versioned_docs/version-23.10/administration/centreon-ha/troubleshooting-guide.md",sourceDirName:"administration/centreon-ha",slug:"/administration/centreon-ha/troubleshooting-guide",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/centreon-ha/troubleshooting-guide",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/administration/centreon-ha/troubleshooting-guide.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"troubleshooting-guide",title:"Troubleshooting HA"},sidebar:"version-23.10/docs",previous:{title:"Operating guide",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/centreon-ha/operating-guide"},next:{title:"Updating Centreon-HA platform",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/update/update-centreon-ha"}},d={},p=[{value:"A failed action is displayed in <code>crm_mon</code> but the resource seems to be working fine",id:"a-failed-action-is-displayed-in-crm_mon-but-the-resource-seems-to-be-working-fine",level:2},{value:"Resource not starting",id:"resource-not-starting",level:2},{value:"One resource or resources group doesn&#39;t start on any node",id:"one-resource-or-resources-group-doesnt-start-on-any-node",level:2}],m={toc:p};function h(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",s({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",s({},{id:"a-failed-action-is-displayed-in-crm_mon-but-the-resource-seems-to-be-working-fine"}),"A failed action is displayed in ",(0,r.kt)("inlineCode",{parentName:"h2"},"crm_mon")," but the resource seems to be working fine"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"Cluster Summary:\n  * Stack: corosync\n  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum\n  * Last updated: Wed Sep 15 16:35:47 2021\n  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@\n  * 2 nodes configured\n  * 14 resource instances configured\nNode List:\n  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\nFull List of Resources:\n  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):\n    * Masters: [ @CENTRAL_MASTER_NAME@ ]\n    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]\n  * Clone Set: php-clone [php]:\n    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n  * Clone Set: cbd_rrd-clone [cbd_rrd]:\n    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n  * Resource Group: centreon:\n    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@\n    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@\n    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@\n    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@\n    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@\n    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@\n    * centreontrapd     (systemd:centreontrapd):         Stopped\n    * snmptrapd (systemd:snmptrapd):     Stopped\nFailed Resource Actions:\n* centreontrapd_start_0 on @CENTRAL_MASTER_NAME@ 'not running' (7): call=82, status=complete, exitreason='',\n    last-rc-change='Wed Sep 15 13:42:19 2021', queued=1ms, exec=2122ms\n")))),(0,r.kt)("h2",s({},{id:"resource-not-starting"}),"Resource not starting"),(0,r.kt)("p",null,"In the event of a Centreon resource (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"centreontrpad"),") failing to start, ",(0,r.kt)("em",{parentName:"p"},"failed actions")," will appear at the bottom of the ",(0,r.kt)("inlineCode",{parentName:"p"},"crm_mon")," command's output ",(0,r.kt)("strong",{parentName:"p"},"and")," the resources that are supposed to be started after it. It will look like this:"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"Cluster Summary:\n  * Stack: corosync\n  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum\n  * Last updated: Wed Sep 15 16:35:47 2021\n  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@\n  * 2 nodes configured\n  * 14 resource instances configured\nNode List:\n  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\nFull List of Resources:\n  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):\n    * Slaves: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n  * Clone Set: php-clone [php]:\n    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n  * Clone Set: cbd_rrd-clone [cbd_rrd]:\n    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n")))),(0,r.kt)("p",null,"In order to get more information regarding this failure, you should first check the service's status by running this command on the node ",(0,r.kt)("strong",{parentName:"p"},"where the service should be currently running"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"systemctl status centreontrapd -l\n")),(0,r.kt)("p",null,"If it does not provide enough information, you can try forcing it to start and check for error messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"pcs resource debug-start centreontrapd\n")),(0,r.kt)("p",null,'Once the root cause has been identified, run the following command for the cluster to "forget" these errors and restart the service:'),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"pcs resource cleanup centreontrapd\n")),(0,r.kt)("h2",s({},{id:"one-resource-or-resources-group-doesnt-start-on-any-node"}),"One resource or resources group doesn't start on any node"),(0,r.kt)("p",null,"If after a failover, could it be a manual one or after a server shutdown, the following situation happens:"),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"Stack: corosync\nCurrent DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el8_7.2-3c4c782f70) - partition with quorum\nLast updated: Thu Feb 20 14:48:12 2020\nLast change: Thu Feb 20 14:47:47 2020 by root via crm_resource on @CENTRAL_MASTER_NAME@\n\n2 nodes configured\n14 resources configured\n\nOnline: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n\nActive resources:\n\n Master/Slave Set: ms_mysql-clone [ms_mysql]\n     Slaves: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n Clone Set: php-clone [php]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n Clone Set: cbd_rrd-clone [cbd_rrd]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n")))),(0,r.kt)("p",null,"No error is displayed but the centreon group doesn't show up anymore and none of its resources is started. This mostly happens when there were multiples failover (",(0,r.kt)("inlineCode",{parentName:"p"},"pcs resource move ...."),") without deleting the constraint. To check that:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"pcs constraint show\n")),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"RHEL 8 / Oracle Linux 8",label:"RHEL 8 / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"Location Constraints:\n    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY) (role: Started)\n    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY) (role: Started)\nOrdering Constraints:\nColocation Constraints:\n  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)\n  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)\nTicket Constraints:\n")))),(0,r.kt)("p",null,"We notice that the centreon group isn't authorized to start on any node"),(0,r.kt)("p",null,"To free the resource group from its constraints, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"pcs resource clear centreon\n")),(0,r.kt)("p",null,"Resources should be starting now."))}h.isMDXComponent=!0}}]);