"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[9539],{84097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"developer-broker-stream-connector",title:"Stream connectors"},s=void 0,c={unversionedId:"developer/developer-broker-stream-connector",id:"version-23.10/developer/developer-broker-stream-connector",title:"Stream connectors",description:"Centreon Broker provides a stream connector. If no suitable connector is",source:"@site/versioned_docs/version-23.10/developer/developer-broker-stream-connector.md",sourceDirName:"developer",slug:"/developer/developer-broker-stream-connector",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/developer/developer-broker-stream-connector",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/developer/developer-broker-stream-connector.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"developer-broker-stream-connector",title:"Stream connectors"},sidebar:"version-23.10/docs",previous:{title:"How to write a widget",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/developer/developer-widget"},next:{title:"The BBDO protocol",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/developer/developer-broker-bbdo"}},p={},h=[{value:"The exposed Centreon Broker",id:"the-exposed-centreon-broker",level:2},{value:"The Broker Lua SDK",id:"the-broker-lua-sdk",level:2},{value:"The <em>broker_log</em> object",id:"the-broker_log-object",level:3},{value:"The TCP broker socket",id:"the-tcp-broker-socket",level:3},{value:"The <em>broker</em> table",id:"the-broker-table",level:3},{value:"The <em>broker_cache</em> object",id:"the-broker_cache-object",level:3},{value:"The init() function",id:"the-init-function",level:2},{value:"The write() function",id:"the-write-function",level:2},{value:"The filter() function",id:"the-filter-function",level:2},{value:"The flush() function",id:"the-flush-function",level:2}],m={toc:h},d="wrapper";function u(e){var{components:t}=e,l=o(e,["components"]);return(0,r.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centreon Broker provides a stream connector. If no suitable connector is\nfound among those provided, then this stream connector is sure to fulfill your\nneeds. Its principle is to expose a part of the Centreon Broker API\nthrough the Lua interpreter, and the user simply inputs their requirements."),(0,r.kt)("h2",{id:"the-exposed-centreon-broker"},"The exposed Centreon Broker"),(0,r.kt)("p",null,"Here is the minimal acceptable Lua code for operation as stream connector:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  function init(conf)\n  end\n\n  function write(d)\n    return true\n  end\n")),(0,r.kt)("p",null,"We recommend placing Lua scripts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/centreon-broker/lua"),"\ndirectory. If this directory does not exist, you can create it. Just make sure the\ndirectory is accessible to the centreon-broker user. If a stream connector\nis composed of several files (a main script and a module, for example), you can\nput them in that directory. If a dynamic library (",(0,r.kt)("inlineCode",{parentName:"p"},"\\*.so")," file) is used by\na Lua script, put it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/centreon-broker/lua/lib")," directory."),(0,r.kt)("p",null,"When Centreon Broker starts, it initializes all the configured connectors.\nFor the stream connector, it loads the Lua script, checks its syntax and\nverifies that the ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," functions exist."),(0,r.kt)("p",null,"Centreon Broker also checks if a ",(0,r.kt)("inlineCode",{parentName:"p"},"filter(category, element)")," function exists."),(0,r.kt)("p",null,"Let's focus on those functions. The ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function is called when the\nconnector is initialized. The argument provided to this function is a Lua\ntable containing information given by the user in the Centreon web output broker\nconfiguration interface. For example, if an IP address is provided with the\nname ",(0,r.kt)("em",{parentName:"p"},"address")," and the value ",(0,r.kt)("em",{parentName:"p"},"192.168.1.18"),", then this information will be\naccessible through ",(0,r.kt)("inlineCode",{parentName:"p"},'conf["address"]'),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," function is called each time an event is received from a poller\nthrough the broker. This event is configured to be sent to this connector.\nThis function needs one argument, which is the event translated as a Lua table."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," function must return a boolean that is true if the events are processed\nand false otherwise."),(0,r.kt)("p",null,"If this function does not return a boolean, Broker will raise an error."),(0,r.kt)("h2",{id:"the-broker-lua-sdk"},"The Broker Lua SDK"),(0,r.kt)("p",null,"To simplify the Lua developer's job, several objects are proposed and\nmade directly available to the script."),(0,r.kt)("h3",{id:"the-broker_log-object"},"The ",(0,r.kt)("em",{parentName:"h3"},"broker_log")," object"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"broker_log:set_parameters(level, filename)")," allows the user to set\na log level and a file name. The level is an integer from 1 to 3, from the\nmost important to least important. The file name must contain the full path.\nIn addition, the file must be accessible to centreon-broker. If this method is not\ncalled, then logs will be written in the centreon broker logs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"broker_log:info(level, content)")," writes an ",(0,r.kt)("em",{parentName:"li"},"information")," log if the\ngiven level is less than or equal to the one configured. The content is the\ntext to write in the logs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"broker_log:warning(level, content)")," works like ",(0,r.kt)("inlineCode",{parentName:"li"},"log_info")," but\nwrites a ",(0,r.kt)("em",{parentName:"li"},"warning"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"broker_log:error(level, content)")," works like ",(0,r.kt)("inlineCode",{parentName:"li"},"log_info")," but writes an\n",(0,r.kt)("em",{parentName:"li"},"error"),".")),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  function init(conf)\n    -- Here, we allow all logs with level 3 and set the output to\n    -- /tmp/test.log.\n    broker_log:set_parameters(3, "/tmp/test.log")\n  end\n\n  function write(d)\n    -- For each entry, we write the key and the value.\n    for k,v in pairs(d) do\n      broker_log:info(3, k .. " => " .. tostring(v))\n    end\n    return true\n  end\n')),(0,r.kt)("p",null,"Here, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," function is executed, the ",(0,r.kt)("em",{parentName:"p"},"broker_log")," object is\nconfigured with a max level of 3 and an output file ",(0,r.kt)("em",{parentName:"p"},"/tmp/test.log"),"."),(0,r.kt)("p",null,"Then on each ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," call, events received are logged as\ninfo. We get a result like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Fri Jan 26 08:31:49 2018: INFO: service_id => 21\n  Fri Jan 26 08:31:49 2018: INFO: type => 0\n  Fri Jan 26 08:31:49 2018: INFO: host_id => 13\n  Fri Jan 26 08:31:49 2018: INFO: element => 1\n  Fri Jan 26 08:31:49 2018: INFO: comment_data =>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To use a method in Lua, the separator between the object and the\nmethod is ",(0,r.kt)("inlineCode",{parentName:"p"},":")," . ",(0,r.kt)("em",{parentName:"p"},"broker_log")," is an object since it contains information\nsuch as the max level or the destination file.")),(0,r.kt)("h3",{id:"the-tcp-broker-socket"},"The TCP broker socket"),(0,r.kt)("p",null,"A basic TCP socket is available in the ",(0,r.kt)("em",{parentName:"p"},"Broker")," SDK. A simple example is the\nfollowing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local socket = broker_tcp_socket.new()\n  socket:connect("10.40.1.2", 9002)\n  socket:write(message)\n  answer = socket:read()\n  socket:close()\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In this example, the first call is ",(0,r.kt)("em",{parentName:"li"},"broker_tcp_socket.new()"),". It creates a\nnew socket by calling the function ",(0,r.kt)("em",{parentName:"li"},"new()")," stored in the table\n",(0,r.kt)("em",{parentName:"li"},"broker_tcp_socket"),"."),(0,r.kt)("li",{parentName:"ol"},"The next step is a call to the ",(0,r.kt)("em",{parentName:"li"},"connect")," method, which needs two arguments:\na string given an ip or a host name to connect to and the port to use."),(0,r.kt)("li",{parentName:"ol"},"The next step is a call to the ",(0,r.kt)("em",{parentName:"li"},"write")," method, which writes a string into\nthe socket. The method call is finished when the entire message is sent."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("em",{parentName:"li"},"read")," method gets a string as its result."),(0,r.kt)("li",{parentName:"ol"},"When the user has finished using the socket, they can close it with the\n",(0,r.kt)("em",{parentName:"li"},"close()")," method.")),(0,r.kt)("p",null,"This socket object also provides a ",(0,r.kt)("em",{parentName:"p"},"get_state()")," method that returns a string:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"unconnected"),": the socket is not connected"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"hostLookup"),": the socket is performing a host name lookup"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"connecting"),": the socket has started establishing a connection"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"connected"),": a connection is established"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"closing"),": the socket is about to close (data may still be waiting to be\nwritten).")),(0,r.kt)("h3",{id:"the-broker-table"},"The ",(0,r.kt)("em",{parentName:"h3"},"broker")," table"),(0,r.kt)("p",null,"Several functions are available in this table. These functions are not\nmethods; ",(0,r.kt)("em",{parentName:"p"},"broker")," is just a table containing them. It includes the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"json_encode(object)"),", which converts a Lua object into json. The json is\nreturned as a string by the function."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"json_decode(json)"),", which converts a json string into Lua. The object\nis directly returned by the method. A second value is also returned. it is\nonly defined when an error occurred and contains a string describing the\nerror."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parse_perfdata(str)"),", which takes a string containing perfdata as argument.\nA second boolean argument is available. If it is ",(0,r.kt)("em",{parentName:"li"},"true"),", the returned table\nis larger and gives all the details on the metrics as well as the ",(0,r.kt)("em",{parentName:"li"},"warning"),"\nand ",(0,r.kt)("em",{parentName:"li"},"critical")," thresholds. On success it returns a table containing the\nvalues retrieved from the perfdata. On failure it returns a nil object\nand an error description string."),(0,r.kt)("li",{parentName:"ol"},"`",(0,r.kt)("inlineCode",{parentName:"li"},"url_encode(text)"),", which` converts the string ",(0,r.kt)("em",{parentName:"li"},"text")," into an url encoded\nstring."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"stat(filename)"),", which calls the system ",(0,r.kt)("inlineCode",{parentName:"li"},"stat")," function on the file. On\nsuccess we get a table containing various information about the file (see\nexample below). Otherwise, this table is ",(0,r.kt)("inlineCode",{parentName:"li"},"nil")," and a second return value\nis given containing an error message."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"md5(str)"),", which computes the md5 of the string ",(0,r.kt)("inlineCode",{parentName:"li"},"str")," and returns it\nas a string."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bbdo_version()"),", which returns the BBDO version configured in Centreon\nBroker.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  local obj = {\n    a = 1,\n    b = 2,\n    c = { 'aa', 'bb', 'cc' }\n  }\n  local json = broker.json_encode(obj)\n  print(json)\n")),(0,r.kt)("p",null,"returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},"  { \"a\": 1, \"b\": 2, \"c\": [ 'aa', 'bb', 'cc' ] }\n")),(0,r.kt)("p",null,"A second example is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local json = { "a": 1, "b": 2, "c": [ \'aa\', \'bb\', \'cc\' ] }\n  local obj, err = broker.json_decode(json)\n\n  for i,v in pairs(obj) do\n    print(i .. " => " .. tostring(v))\n  end\n')),(0,r.kt)("p",null,"should return something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  a => 1\n  b => 2\n  c => table: 0x12ef67b5\n")),(0,r.kt)("p",null,"In this case (no error), ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,r.kt)("p",null,"It is also easy to access each field of the object; for example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"obj['a']")," gives 1, or ",(0,r.kt)("inlineCode",{parentName:"p"},"obj['c'][1]")," gives ",(0,r.kt)("em",{parentName:"p"},"aa"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"obj.b")," gives 2."),(0,r.kt)("p",null,"Here is an example showing the possibilities of the ",(0,r.kt)("inlineCode",{parentName:"p"},"parse_perfdata")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local perf, err_str = broker.parse_perfdata(" \'one value\'=2s;3;5;0;9 \'a b c\'=3.14KB;0.8;1;0;10")\n\n  if perf then\n    for i,v in pairs(perf) do\n      print(i .. " => " .. tostring(v))\n    end\n  else\n    print("parse_perfdata error: " .. err_str)\n  end\n')),(0,r.kt)("p",null,"should return something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  a b c => 3.14\n  one value => 2\n")),(0,r.kt)("p",null,"If now, we call the same function with ",(0,r.kt)("em",{parentName:"p"},"true")," as second argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local perf, err_str = broker.parse_perfdata("pl=45%;40;80;0;100", true)\n\n  if perf then\n    print("Content of \'pl\'")\n    for i,v in pairs(perf[\'pl\']) do\n      print(i .. " => " .. tostring(v))\n    end\n  else\n    print("parse_perfdata error: " .. err_str)\n  end\n')),(0,r.kt)("p",null,"should return something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Content of 'pl'\n  value => 45\n  uom => %\n  min => 0\n  max => 100\n  warning_low => 0\n  warning_high => 40\n  warning_mode => false\n  critical_low => 0\n  critical_high => 80\n  critical_mode => false\n")),(0,r.kt)("p",null,"Be careful: keys are not sorted in hash tables, so if you make such a program, you will probably not\nhave data in the same order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local str = broker.url_encode("La le\xe7on du ch\xe2teau de l\'araign\xe9e")\n  print(str)\n')),(0,r.kt)("p",null,"should return something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  La%20le%C3%A7on%20du%20ch%C3%A2teau%20de%20l%27araign%C3%A9e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  local s, err = broker.stat("filename")\n  for i,v in pairs(perf[\'pl\']) do\n    print(i .. " => " .. tostring(v))\n  end\n')),(0,r.kt)("p",null,"should return something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  uid=>1000\n  gif=>1000\n  size=>279\n  ctime=>1587641144\n  mtime=>1587641144\n  atime=>1587641144\n")),(0,r.kt)("p",null,"If an error occurs, ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"err")," contains a string\ncontaining an error message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  local info = broker.md5('Hello World!')\n  print(info)\n")),(0,r.kt)("p",null,"should return a string of the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  ed076287532e86365e841e92bfc50d8c\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  local v = broker.bbdo_version()\n  print(v)\n")),(0,r.kt)("p",null,"should return a string of the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  2.0.0\n")),(0,r.kt)("h3",{id:"the-broker_cache-object"},"The ",(0,r.kt)("em",{parentName:"h3"},"broker","_","cache")," object"),(0,r.kt)("p",null,"This object provides several methods to access the cache. Among data, we can\nget hostnames, etc..."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The functions described here need the cache to be filled. It is\nimportant for that to enable the NEB events, otherwise those functions will\njust return ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),". ",(0,r.kt)("strong",{parentName:"p"},"The cache is filled when an engine restarts"),".")),(0,r.kt)("p",null,"The available methods are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_ba(ba_id)"),", which gets ",(0,r.kt)("em",{parentName:"li"},"ba")," information from its id. This function\nreturns a table if found or ",(0,r.kt)("em",{parentName:"li"},"nil")," otherwise."),(0,r.kt)("li",{parentName:"ol"},"get_bv(bv_id)`, which gets ",(0,r.kt)("em",{parentName:"li"},"bv")," informations from its id. This function\nreturns a table if found or ",(0,r.kt)("em",{parentName:"li"},"nil")," otherwise."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_bvs(ba_id)"),", which gets all the ",(0,r.kt)("em",{parentName:"li"},"bv")," containing the ",(0,r.kt)("em",{parentName:"li"},"ba")," of id ",(0,r.kt)("em",{parentName:"li"},"ba_id"),".\nThis function returns an array of ",(0,r.kt)("em",{parentName:"li"},"bv")," ",(0,r.kt)("em",{parentName:"li"},"ids"),", potentially empty if no ",(0,r.kt)("em",{parentName:"li"},"bv"),"\nare found."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_check_command(host_id[, service_id])"),", which gets the check command\nconfigured in the host or service. The ",(0,r.kt)("em",{parentName:"li"},"service_id")," is optional; if given\nwe want the check command from a service, otherwise we want the check\ncommand from a host. If nothing is found in the cache, ",(0,r.kt)("em",{parentName:"li"},"nil")," is returned."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_hostgroup_name(id)"),", which gets from the cache the host group name of\nthe given id. This function returns a string or ",(0,r.kt)("em",{parentName:"li"},"nil")," otherwise."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_hostgroups(host_id)"),", which gets the list of host groups containing the\nhost corresponding to ",(0,r.kt)("em",{parentName:"li"},"host_id"),". The return value is an array of objects,\neach one containing two fields, ",(0,r.kt)("em",{parentName:"li"},"group_id")," and ",(0,r.kt)("em",{parentName:"li"},"group_name"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_hostname(id)"),", which gets from the cache the host name corresponding to\nthe given host id. This function returns a string with the host name or\n",(0,r.kt)("em",{parentName:"li"},"nil")," otherwise."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_index_mapping(index_id)"),", which gets from the cache the\nindex mapping object of the given index id. The result is a table containing\nthree keys, ",(0,r.kt)("inlineCode",{parentName:"li"},"index_id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"host_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"service_id"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_instance_name(instance_id)"),", which gets from the cache the\ninstance name corresponding to the instance id."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_metric_mapping(metric_id)"),", which gets from the cache the\nmetric mapping object of the given metric id. The result is a table\ncontaining two keys: ",(0,r.kt)("inlineCode",{parentName:"li"},"metric_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"index_id"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_service_description(host_id,service_id)"),", which gets from the cache the\nservice description of the given pair host_id / service_id. This function\nreturns a string or ",(0,r.kt)("em",{parentName:"li"},"nil")," otherwise."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_servicegroup_name(id)"),", which gets from the cache the service group name",(0,r.kt)("em",{parentName:"li"},"\nof the given id. This function returns a string or "),"nil* otherwise."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_servicegroups(host_id, service_id)"),", which gets the list of service\ngroups containing the service corresponding to the pair ",(0,r.kt)("em",{parentName:"li"},"host_id")," /\n",(0,r.kt)("em",{parentName:"li"},"service_id"),". The return value is an array of objects, each one containing\ntwo fields: ",(0,r.kt)("em",{parentName:"li"},"group_id")," and ",(0,r.kt)("em",{parentName:"li"},"group_name"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_notes(host_id[,service_id])"),", which gets the notes configured in the\nhost or service. The ",(0,r.kt)("em",{parentName:"li"},"service_id")," is optional. If given, we want notes from\na service, otherwise we want notes from a host. If the object is not found\nin the cache, ",(0,r.kt)("em",{parentName:"li"},"nil")," is returned."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_notes_url(host_id[, service_id])"),", which gets the notes url configured\nin the host or service. The ",(0,r.kt)("em",{parentName:"li"},"service_id")," is optional. If given, we want\n",(0,r.kt)("em",{parentName:"li"},"notes url")," from a service, otherwise we want it from a host. If the object\nis not found in the cache, ",(0,r.kt)("em",{parentName:"li"},"nil")," is returned."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_action_url(host_id)"),", which gets the action url configured in the host\nor service. The ",(0,r.kt)("em",{parentName:"li"},"service_id")," is optional. If given, we want ",(0,r.kt)("em",{parentName:"li"},"action url")," from\na service, otherwise we want it from a host. If the object is not found in\nthe cache, ",(0,r.kt)("em",{parentName:"li"},"nil")," is returned."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"get_severity(host_id[,service_id])"),", which gets the severity of a host or\na service. If you only provide the ",(0,r.kt)("em",{parentName:"li"},"host_id"),", we suppose you want to get\na host severity. If a host or a service does not have any severity, the\nfunction returns a ",(0,r.kt)("em",{parentName:"li"},"nil")," value.")),(0,r.kt)("h2",{id:"the-init-function"},"The init() function"),(0,r.kt)("p",null,"This function must ",(0,r.kt)("strong",{parentName:"p"},"not")," be defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", otherwise it will not be\ndetected by centreon broker."),(0,r.kt)("p",null,"Imagine we have made a configuration like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(97068).Z,width:"1230",height:"483"})),(0,r.kt)("p",null,"with two custom entries:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"an ",(0,r.kt)("em",{parentName:"li"},"elastic-address")," string with ",(0,r.kt)("inlineCode",{parentName:"li"},"172.17.0.1")," as content."),(0,r.kt)("li",{parentName:"ol"},"an ",(0,r.kt)("em",{parentName:"li"},"elastic-port")," number with 9200 as content.")),(0,r.kt)("p",null,"Then, the ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," function has access to them like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  function init(conf)\n    local my_address = conf['elastic-address']\n    local port = conf['elastic-port']\n  end\n")),(0,r.kt)("h2",{id:"the-write-function"},"The write() function"),(0,r.kt)("p",null,"This function must ",(0,r.kt)("strong",{parentName:"p"},"not")," be defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", otherwise it will not be\nseen by the broker."),(0,r.kt)("p",null,"The only argument given to the ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," function is an event. It is given\nwith the same data as the ones we can see in Centreon Broker."),(0,r.kt)("p",null,"To classify the event, we have two data, which are ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),".\nThose two pieces of information are integers. If we concatenate those two numbers,\nwe obtain a longer integer equal to the event ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," also available in the\nevent as ",(0,r.kt)("inlineCode",{parentName:"p"},"_type"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"int")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"short")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"short")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_type ="),(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"elem")))),(0,r.kt)("p",null,"Sometimes, you might want the hostname corresponding to an event, but you only get\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"host_id"),". It is possible to get the hostname using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"broker_cache:get_hostname(id)")," method."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},'  function write(d)\n    if d.category == 3 and d.element == 1 then\n      local hostname = broker_cache:get_hostname(d.host_id)\n      if hostname then\n        broker_log:info("host name "\n            .. hostname .. " corresponds to host id " .. d.host_id)\n      else\n        -- Unable to get the name, we wait for the next time, wishing\n        -- the cache will contain the name. And so return 0\n        return true\n      end\n    end\n    -- Here, we can add the event processing...\n\n    return true\n  end\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," function return value is a boolean. While this value is ",(0,r.kt)("em",{parentName:"p"},"false"),",\nBroker keeps the sent events in memory and if needed in retention. When you\nare sure all events are processed, the idea is that ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," returns ",(0,r.kt)("em",{parentName:"p"},"true"),"\nand then Broker frees the events stack."),(0,r.kt)("p",null,"Behind this, it is possible to avoid committing events one by one.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," function can store them in a stack and return ",(0,r.kt)("em",{parentName:"p"},"false"),", and when\na given limit is reached, it can send all of them to their destination and\nreturn ",(0,r.kt)("em",{parentName:"p"},"true"),"."),(0,r.kt)("h2",{id:"the-filter-function"},"The filter() function"),(0,r.kt)("p",null,"The function must ",(0,r.kt)("strong",{parentName:"p"},"not")," be defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", otherwise it will not be\ndetected by Centreon Broker."),(0,r.kt)("p",null,"It takes two parameters into account: ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"element"),". We have\nalready seen both in the previous section. The category is an integer from 1 to 7,\nor the value 65535. The ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," parameter gives details of the event, for example,\nfor the ",(0,r.kt)("em",{parentName:"p"},"category NEB"),", ",(0,r.kt)("em",{parentName:"p"},"elements")," are ",(0,r.kt)("em",{parentName:"p"},"Acknowledgement"),", ",(0,r.kt)("em",{parentName:"p"},"Comment"),", etc.\ngiven as integers."),(0,r.kt)("h2",{id:"the-flush-function"},"The flush() function"),(0,r.kt)("p",null,"When the Broker queue size reaches the maximum allowed size, it continues to fill this\nqueue into a file and does not send any more events to streams. While events in\nthe queue are not acknowledged, streams will not receive any more events."),(0,r.kt)("p",null,"In several cases, this can lead to issues. The idea is that the stream has kept\nevents in memory waiting for other events to send them to a database. But\nBroker queue is full and Broker does not call the stream's  ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," function\nanymore, since it writes events directly to its retention files waiting for an\nacknowledgement from the stream that will not arrive because ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," is not called."),(0,r.kt)("p",null,"The solution to fix this lock in Broker is a ",(0,r.kt)("inlineCode",{parentName:"p"},"flush")," function called regularly\nby Broker that just asks the stream to flush its data. This function returns\na boolean that is true if the stream managed to flush its queue. Once Broker\nreceives information of a successful flush, it can newly call the stream\n",(0,r.kt)("inlineCode",{parentName:"p"},"write")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-LUA"},"  function write(d)\n    if d.category ~= 3 or d.element ~= 1 then\n      return false\n    end\n\n    -- We don't send data each time. We fill a queue and when it is full we\n    -- send its content with the flush() function.\n    queue[#queue + 1] = serialize(d)\n    local retval = false\n    if #queue > max_queue_size then\n      retval = flush()\n    end\n    -- Here, we return retval that is false except when flush has sent the\n    -- queue content.\n    return retval\n  end\n\n  function flush()\n    -- if the queue is empty, nothing to do and we can tell Broker to empty its\n    -- retention\n    if #queue == 0 then\n      return true\n    end\n  \n    -- Here, we should write some code to send events stored in the queue.\n    --\n    -- ...\n    if success then\n      return true\n    else\n      return false\n    end\n  end\n")),(0,r.kt)("p",null,"For details on types, categories and their id, see ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/developer/developer-broker-bbdo"},"The BBDO protocol")))}u.isMDXComponent=!0},97068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/broker_config-4b0248e55bb7e9384619b9c9eaf0f2ea.png"}}]);