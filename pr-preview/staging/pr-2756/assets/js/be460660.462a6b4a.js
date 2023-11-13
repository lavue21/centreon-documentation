"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[63275],{93327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"event-handler",title:"Auto Remediation"},l=void 0,c={unversionedId:"monitoring/event-handler",id:"version-23.10/monitoring/event-handler",title:"Auto Remediation",description:"Introduction",source:"@site/versioned_docs/version-23.10/monitoring/event-handler.md",sourceDirName:"monitoring",slug:"/monitoring/event-handler",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/event-handler",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/event-handler.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"event-handler",title:"Auto Remediation"},sidebar:"version-23.10/docs",previous:{title:"Dynamic Service Management",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/passive-monitoring/dsm"},next:{title:"Import/Export",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/web-import-export"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"When Are Event Handlers Executed?",id:"when-are-event-handlers-executed",level:3},{value:"Event Handler Types",id:"event-handler-types",level:3},{value:"Enabling Event Handlers",id:"enabling-event-handlers",level:3},{value:"Event Handler Execution Order",id:"event-handler-execution-order",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Create a command",id:"create-a-command",level:3},{value:"Enable Event Handlers on your platform",id:"enable-event-handlers-on-your-platform",level:3},{value:"Configure Event Handlers",id:"configure-event-handlers",level:3},{value:"Globally",id:"globally",level:4},{value:"On selected resources",id:"on-selected-resources",level:4},{value:"Example",id:"example",level:3}],u={toc:h},p="wrapper";function m(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(p,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Event handlers or auto remediation are optional system commands (scripts or executables) that are run whenever a host\nor service state change occurs."),(0,r.kt)("p",null,"An obvious use for event handlers is the ability for Centreon to proactively fix problems before anyone is notified."),(0,r.kt)("h3",{id:"when-are-event-handlers-executed"},"When Are Event Handlers Executed?"),(0,r.kt)("p",null,"Event handlers are executed when a service or host:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is in a SOFT problem state"),(0,r.kt)("li",{parentName:"ul"},"Initially goes into a HARD problem state"),(0,r.kt)("li",{parentName:"ul"},"Initially recovers from a SOFT or HARD problem state"),(0,r.kt)("li",{parentName:"ul"},"SOFT and HARD states are described ",(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/alerts-notifications/concepts#status-confirmation"},"here"))),(0,r.kt)("h3",{id:"event-handler-types"},"Event Handler Types"),(0,r.kt)("p",null,"There are different types of optional event handlers that you can define to handle host and state changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Global host event handler"),(0,r.kt)("li",{parentName:"ul"},"Global service event handler"),(0,r.kt)("li",{parentName:"ul"},"Host-specific event handlers"),(0,r.kt)("li",{parentName:"ul"},"Service-specific event handlers")),(0,r.kt)("p",null,"Global host and service event handlers are run for every host or service state change that occurs, immediately prior to\nany host- or service-specific event handler that may be run."),(0,r.kt)("h3",{id:"enabling-event-handlers"},"Enabling Event Handlers"),(0,r.kt)("p",null,"Event handlers can be enabled or disabled on a poller."),(0,r.kt)("p",null,"Host- and service-specific event handlers can be enabled or disabled in your host and service definitions. Host- and\nservice-specific event handlers will not be executed if the global option is disabled on your poller."),(0,r.kt)("h3",{id:"event-handler-execution-order"},"Event Handler Execution Order"),(0,r.kt)("p",null,"As already mentioned, global host and service event handlers are executed immediately before host- or service-specific\nevent handlers."),(0,r.kt)("p",null,"Event handlers are executed for HARD problem and recovery states immediately after notifications are sent out."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"create-a-command"},"Create a command"),(0,r.kt)("p",null,"Event handler commands will likely be shell or perl scripts, but they can be any type of executable that can run from a\ncommand prompt. As a minimum, the scripts should take the following macros as arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Services: $SERVICESTATE$, $SERVICESTATETYPE$, $SERVICEATTEMPT$"),(0,r.kt)("li",{parentName:"ul"},"For Hosts: $HOSTSTATE$, $HOSTSTATETYPE$, $HOSTATTEMPT$")),(0,r.kt)("p",null,"The scripts should examine the values of the arguments passed to it and take any necessary action based upon those values."),(0,r.kt)("p",null,"Event handler commands will normally execute with the same permissions as the user under which Centreon Engine\n(centreon-engine user) is running on your machine. This can present a problem if you want to write an event handler that\nrestarts system services, as root privileges are generally required to perform tasks of that kind."),(0,r.kt)("p",null,"Ideally you should evaluate the types of event handlers you will be implementing and grant just enough permissions to\nthe Centreon Engine user to execute the necessary system commands. You might want to try using sudo to accomplish this."),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/commands#adding-a-command"},"this procedure to create a command"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use ",(0,r.kt)("strong",{parentName:"p"},"Misc")," for the command type to classify your commands.")),(0,r.kt)("h3",{id:"enable-event-handlers-on-your-platform"},"Enable Event Handlers on your platform"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Engine configuration")," menu and edit all the Centreon Engine configurations on\nwhich you want to enable auto remediation."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Check Options")," tab, enable the ",(0,r.kt)("strong",{parentName:"p"},"Event Handler Option")," option:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(76467).Z,width:"1350",height:"396"})),(0,r.kt)("h3",{id:"configure-event-handlers"},"Configure Event Handlers"),(0,r.kt)("h4",{id:"globally"},"Globally"),(0,r.kt)("p",null,"To configure auto remediation globally for all resources of a poller, go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Pollers > Engine\nconfiguration")," menu and edit all the Centreon Engine configurations on which you want to enable global auto remediation."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Check Options")," tab, select a command for the hosts and/or services event handler:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(87306).Z,width:"1810",height:"224"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("h4",{id:"on-selected-resources"},"On selected resources"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For hosts")),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Hosts > Hosts")," menu and edit your hosts. In the ",(0,r.kt)("strong",{parentName:"p"},"Data Processing")," tab, select the command:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(55343).Z,width:"1682",height:"276"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can configure this command on templates.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For services")),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Services by host")," menu and edit your services. In the ",(0,r.kt)("strong",{parentName:"p"},"Data Processing")," tab,\nselect the command:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(55343).Z,width:"1682",height:"276"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can configure this command on templates.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The example below assumes that you are monitoring the HTTP server on the local machine. We will assume that the Max\nCheck Attempts option for the service is a value of 4 or greater (i.e., the service is checked 4 times before it is\nconsidered to have a real problem). An abbreviated example service definition might look like this..."),(0,r.kt)("p",null,"The event handler script (this is the /usr/lib/centreon/plugins/eventhandlers/restart-httpd script)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'#!/bin/sh\n#\n# Event handler script for restarting the web server on the local machine\n#\n# Note: This script will only restart the web server if the service is\n#       retried 3 times (in a "soft" state) or if the web service somehow\n#       manages to fall into a "hard" error state.\n#\n\n# What state is the HTTP service in?\ncase "$1" in\nOK)\n    # The service just came back up, so don\'t do anything...\n    ;;\nWARNING)\n    # We don\'t really care about warning states, since the service is probably still running...\n    ;;\nUNKNOWN)\n    # We don\'t know what might be causing an unknown error, so don\'t do anything...\n    ;;\nCRITICAL)\n    # Aha!  The HTTP service appears to have a problem - perhaps we should restart the server...\n    # Is this a "soft" or a "hard" state?\n    case "$2" in\n\n    # We\'re in a "soft" state, meaning that Centreon is in the middle of retrying the\n    # check before it turns into a "hard" state and contacts get notified...\n    SOFT)\n\n        # What check attempt are we on?  We don\'t want to restart the web server on the first\n        # check, because it may just be a fluke!\n        case "$3" in\n\n        # Wait until the check has been tried 3 times before restarting the web server.\n        # If the check fails on the 4th time (after we restart the web server), the state\n        # type will turn to "hard" and contacts will be notified of the problem.\n        # Hopefully this will restart the web server successfully, so the 4th check will\n        # result in a "soft" recovery.  If that happens no one gets notified because we\n        # fixed the problem!\n        3)\n            echo -n "Restarting HTTP service (3rd soft critical state)..."\n            # Call the init script to restart the HTTPD server\n            /etc/rc.d/init.d/httpd restart\n            ;;\n            esac\n        ;;\n\n    # The HTTP service somehow managed to turn into a hard error without getting fixed.\n    # It should have been restarted by the code above, but for some reason it didn\'t.\n    # Let\'s give it one last try, shall we?  \n    # Note: Contacts have already been notified of a problem with the service at this\n    # point (unless you disabled notifications for this service)\n    HARD)\n        echo -n "Restarting HTTP service..."\n        # Call the init script to restart the HTTPD server\n        /etc/rc.d/init.d/httpd restart\n        ;;\n    esac\n    ;;\nesac\nexit 0\n')),(0,r.kt)("p",null,"The sample script provided above will attempt to restart the web server on the local machine in two different cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After the service has been rechecked for the 3rd time and is in a SOFT CRITICAL state"),(0,r.kt)("li",{parentName:"ul"},"After the service first goes into a HARD CRITICAL state")),(0,r.kt)("p",null,"The script should theoretically restart the web server and fix the problem before the service goes into a HARD problem\nstate, but we include a fallback case in the event that it doesn't work the first time. Note that the event\nhandler will only be executed the first time the service falls into a HARD problem state. This prevents Centreon\nfrom continuously executing the script to restart the web server if the service remains in a HARD problem state. You\ndon't want that."),(0,r.kt)("p",null,"Then create a command like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command Name: restart-httpd"),(0,r.kt)("li",{parentName:"ul"},"Command Type: Misc"),(0,r.kt)("li",{parentName:"ul"},"Command Line: $CENTREONPLUGINS$/eventhandlers/restart-httpd  $SERVICESTATE$ $SERVICESTATETYPE$ $SERVICEATTEMPT$")),(0,r.kt)("p",null,"Now, in your service definition, select the ",(0,r.kt)("strong",{parentName:"p"},"restart-httpd")," command for your event handler definition."))}m.isMDXComponent=!0},76467:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enableeventhnadleronpoller-60a56204e5d2e70ad3ce38faa3d8fb73.png"},55343:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enableeventhnadleronresources-39eb45b1ed641b4c7dbbc8a2d768d7d6.png"},87306:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enableglobaleventhnadleronpoller-b18a21f6825f20d01b6eed34cd0d0f83.png"}}]);