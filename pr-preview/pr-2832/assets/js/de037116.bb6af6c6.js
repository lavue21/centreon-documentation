"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[36592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),o=n(90980),l=n(35715),i=n(8854),s=n(8241);const p="tabList__CuJ",c="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:f,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=d?d:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const b=null===m?m:null!==(v=null!=m?m:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[x,O]=(0,a.useState)(b),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==x&&k.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=_.indexOf(t),a=k[n].value;a!==x&&(T(t),O(a),null!=f&&w(f,String(a)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;var n;t=null!==(n=_[a])&&void 0!==n?n:_[0];break}case"ArrowLeft":{const n=_.indexOf(e.currentTarget)-1;var a;t=null!==(a=_[n])&&void 0!==a?a:_[_.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},k.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>_.push(e),onKeyDown:E,onFocus:C,onClick:C},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,u({key:String(t)},e))}},90208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(67709),o=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"postfix",title:"Configuring your Centreon to send emails"},p=void 0,c={unversionedId:"administration/postfix",id:"version-23.10/administration/postfix",title:"Configuring your Centreon to send emails",description:"For your Centreon to be able to send notification emails, you need to configure a local SMTP server. If your operating system is RHEL or Oracle Linux, Postfix is already installed.",source:"@site/versioned_docs/version-23.10/administration/postfix.md",sourceDirName:"administration",slug:"/administration/postfix",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/postfix",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/administration/postfix.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"postfix",title:"Configuring your Centreon to send emails"},sidebar:"version-23.10/docs",previous:{title:"Platform statistics",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/platform-statistics"},next:{title:"Update a Centreon 23.04 platform",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/update/update-centreon-platform"}},u={},m=[{value:"Step 1: Configuring Postfix",id:"step-1-configuring-postfix",level:2},{value:"Step 2: Configuring the credentials of the account that will send emails",id:"step-2-configuring-the-credentials-of-the-account-that-will-send-emails",level:2},{value:"Testing and troubleshooting email configuration",id:"testing-and-troubleshooting-email-configuration",level:2},{value:"Gmail configuration",id:"gmail-configuration",level:2}],d={toc:m};function f(e){var{components:t}=e,s=i(e,["components"]);return(0,a.kt)("wrapper",l({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For your Centreon to be able to send notification emails, you need to configure a local SMTP server. If your operating system is RHEL or Oracle Linux, Postfix is already installed. "),(0,a.kt)("p",null,"This page gives you an example of a possible configuration. Refer to the ",(0,a.kt)("a",l({parentName:"p"},{href:"http://www.postfix.org/BASIC_CONFIGURATION_README"}),"official Postfix documentation")," for more information."),(0,a.kt)("p",null,"Notifications commands are executed by the poller that monitors the resource: you need to configure the mail relay on all pollers."),(0,a.kt)("p",null,"We recommend that you use a dedicated email account to send notifications."),(0,a.kt)("h2",l({},{id:"step-1-configuring-postfix"}),"Step 1: Configuring Postfix"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your server's terminal, enter the following command:")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"dnf install mailx cyrus-sasl-plain\n"))),(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"dnf install s-nail cyrus-sasl-plain\n"))),(0,a.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"apt install mailx cyrus-sasl-plain\n")))),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart Postfix:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl restart postfix\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure Postfix to run at startup:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl enable postfix\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the following file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"vi /etc/postfix/main.cf\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following information:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"myhostname = hostname\nrelayhost = [smtp.isp.com]:port\nsmtp_use_tls = yes\nsmtp_sasl_auth_enable = yes\nsmtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd\nsmtp_tls_CAfile = /etc/ssl/certs/ca-bundle.crt\nsmtp_sasl_security_options = noanonymous\nsmtp_sasl_tls_security_options = noanonymous\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"myhostname")," is the hostname of the Centreon server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"relayhost")," is the email server for the account that will send notifications.")),(0,a.kt)("p",{parentName:"li"},"In the following example, Centreon will use a Gmail account to send notifications:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"myhostname = centreon-central\nrelayhost = [smtp.gmail.com]:587\nsmtp_use_tls = yes\nsmtp_sasl_auth_enable = yes\nsmtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd\nsmtp_tls_CAfile = /etc/ssl/certs/ca-bundle.crt\nsmtp_sasl_security_options = noanonymous\nsmtp_sasl_tls_security_options = noanonymous\n")))),(0,a.kt)("h2",l({},{id:"step-2-configuring-the-credentials-of-the-account-that-will-send-emails"}),"Step 2: Configuring the credentials of the account that will send emails"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/postfix/sasl_passwd")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"touch /etc/postfix/sasl_passwd\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following line (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"username:password")," by the credentials of the account that will send the notification emails):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"[smtp.isp.com]:port username:password\n")),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"[smtp.gmail.com]:587 username@gmail.com:XXXXXXXX\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the terminal, enter the following command: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"postmap /etc/postfix/sasl_passwd\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For security reasons, change the permissions on the file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"chown root:postfix /etc/postfix/sasl_passwd*\nchmod 640 /etc/postfix/sasl_passwd*\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reload Postfix so that chenges are taken into account:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl reload postfix\n")))),(0,a.kt)("h2",l({},{id:"testing-and-troubleshooting-email-configuration"}),"Testing and troubleshooting email configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To send a test email, enter the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),'echo "Test" | mail -s "Test" user@isp.com\n')),(0,a.kt)("p",{parentName:"li"},"  Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"user@isp.com")," by a real email address: the recipient should receive the test email.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the user hasn't received the message, check the following log file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"tail -f /var/log/maillog\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To check that your Postfix service is running, enter:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl status postfix\n")),(0,a.kt)("p",{parentName:"li"},"  The results should look like this:"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"image",src:n(73744).Z,width:"644",height:"323"})))),(0,a.kt)("h2",l({},{id:"gmail-configuration"}),"Gmail configuration"),(0,a.kt)("p",null,"If you want to send emails through a Gmail account, you will need to turn on the ",(0,a.kt)("strong",{parentName:"p"},"Allow less secure apps")," option on this account. See ",(0,a.kt)("a",l({parentName:"p"},{href:"https://support.google.com/accounts/answer/6010255"}),"Less secure apps & your Google Account"),"."))}f.isMDXComponent=!0},73744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postfix-status-ae9e2ca7127885e00ec2733602c5b75d.png"}}]);