(function(){var l,m=this,p=function(a){return"string"==typeof a},aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ha=function(a,b,c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return t.apply(null,arguments)},ja=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},u=Date.now||function(){return+new Date},ka=function(){var a=v,b=w;function c(){}c.prototype=b.prototype;a.Ia=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ha=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var la;var ma=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},x=function(a,b){return a<b?-1:a>b?1:0};var oa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},pa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},qa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var ra=function(a,b,c,d){var e=null,f=null,g=null,h="";a&&(h+=a+":");c&&(h+="//",b&&(h+=b+"@"),h+=c,d&&(h+=":"+d));e&&(h+=e);f&&(h+="?"+f);g&&(h+="#"+g);return h},z=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,sa=function(a){var b=!0;return a?b?decodeURI(a):decodeURIComponent(a):a};var ta=["googleads.g.doubleclick.net","adclick.g.doubleclick.net","www.googleadservices.com","adclick.googleadservices.com"];var ua={CLOSE:"c",DIRECTIONS:"d",IN_APP_PURCHASE:"p",LOCATION:"l",TELEPHONE:"t",LOCATION_FORMAT_MAP:"l_m",LOCATION_FORMAT_LANDING_PAGE:"l_l",LOCATION_FORMAT_STORE_INFO:"l_s",LOCATION_FORMAT_DIRECTIONS:"l_d",LOCATION_FORMAT_CALL:"l_c",LOCATION_FORMAT_TEXT:"l_t",LOCATION_FORMAT_IMAGE:"l_i",QUERY:"q"};var va=document,A=window;var w=function(a,b){this.Ea=a;this.M=b;var c=document.documentMode;this.ca=c&&10>c;this.j={};this.F=!1},ya=function(a){a.F=!0;for(var b in a.j)a.j[b].R&&wa(a,b),xa(a,b)},za=function(a,b){var c=b.n;switch(b.t){case 1:var d=b.d;c=B(a,c);c.R(d);break;case 2:d=a;var e=B(d,c);e.S=!0;xa(d,c)}},B=function(a,b){a.j[b]||(a.j[b]={S:!1,H:[],R:null});return a.j[b]},xa=function(a,b){var c=B(a,b);if(c.S){for(var d=c.H.length,e=0;e<d;e++)a.sendMessage(b,c.H[e]);c.H=[]}},wa=function(a,b){if(a.F){var c={t:2};c.s=a.M;c.n=b;a.send(c)}};w.prototype.J=function(a,b){var c=B(this,a);c.R=b;wa(this,a)};w.prototype.sendMessage=function(a,b){var c=B(this,a);this.F&&c.S?(c={t:1},c.s=this.M,c.n=a,c.d=b,this.send(c)):c.H.push(b)};w.prototype.ua=function(){return this.F};var C;a:{var Aa=m.navigator;if(Aa){var Ba=Aa.userAgent;if(Ba){C=Ba;break a}}C=""}var D=function(a){var b=C;return-1!=b.indexOf(a)},Ca=function(){var a="WebKit",b=C;return-1!=b.toLowerCase().indexOf(a.toLowerCase())};var Da=function(a,b){var c,d;for(d in a)b.call(c,a[d],d,a)},Ea=function(a,b){var c,d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d},Fa=function(a,b){var c,d;for(d in a)if(b.call(c,a[d],d,a))return d};var E=function(a){E[" "](a);return a};E[" "]=aa;var Ha=function(a,b){var c=Ga;var d=d?d(a):a;Object.prototype.hasOwnProperty.call(c,d)||(c[d]=b(a))};var Ia=D("Opera"),F=D("Trident")||D("MSIE"),Ja=D("Edge"),G=D("Gecko")&&!(Ca()&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Ka=Ca()&&!D("Edge"),La=function(){var a=C;if(G)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ja)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ka)return/WebKit\/(\S+)/.exec(a);if(Ia)return/(?:Version)[ \/]?(\S+)/.exec(a)},Ma=function(){var a=m.document;return a?a.documentMode:void 0},H;a:{var I="",J=La();J&&(I=J?J[1]:"");if(F){var K=Ma();if(null!=K&&K>parseFloat(I)){H=String(K);break a}}H=I}var Na=H,Ga={},Oa=function(a){Ha(a,function(){var b=a;var c=Na;var d=0;c=na(String(c)).split(".");b=na(String(b)).split(".");for(var e=Math.max(c.length,b.length),f=0;0==d&&f<e;f++){var g=c[f]||"",h=b[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;d=0==g[1].length?0:parseInt(g[1],10);var n=0==h[1].length?0:parseInt(h[1],10);d=x(d,n)||x(0==g[2].length,0==h[2].length)||x(g[2],h[2]);g=g[3];h=h[3]}while(0==d)}c=d;return 0<=c})},Pa;var Qa=m.document,Ra=Ma();Pa=Qa&&F?Ra||("CSS1Compat"==Qa.compatMode?parseInt(Na,10):5):void 0;var Sa=Pa;var L;if(!(L=!G&&!F)){var M;if(M=F){var Ta=9;M=Number(Sa)>=Ta}L=M}L||G&&Oa("1.9.1");F&&Oa("9");var N=function(){this.aa="";this.ea=Ua},Ua={};var Va=function(a,b){var c=b instanceof N&&b.constructor===N&&b.ea===Ua?b.aa:"type_error:TrustedResourceUrl";a.src=c};var Wa=function(a,b,c){var d=1;function e(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var f=c[d];if(!ca(f)||da(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(da(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==ba(f)){g="function"==typeof f.item;break a}}g=!1}y(g?qa(f):f,e)}}},Xa=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0},Ya=function(a,b){a.appendChild(b)},Za=function(a,b){Wa(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments)},$a=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null},ab=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},bb=function(a){this.P=a||m.document||document};l=bb.prototype;l.getElementsByTagName=function(a,b){var c=b||this.P;return c.getElementsByTagName(String(a))};l.createElement=function(a){return this.P.createElement(String(a))};l.createTextNode=function(a){return this.P.createTextNode(String(a))};l.appendChild=Ya;l.append=Za;l.canHaveChildren=Xa;l.removeNode=$a;l.contains=ab;var db=function(a){cb();var b=new N;b.aa=a;return a=b},cb=aa;var eb=function(){var a=O;try{var b;if(b=!!a&&null!=a.location.href)a:{var c="foo";try{E(a[c]);b=!0;break a}catch(d){}b=!1}return b}catch(d){return!1}},fb=function(a,b){var c,d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var gb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var hb=gb(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(c){}return a});function ib(a){return a?a.passive&&hb()?a:a.capture||!1:a}var jb=function(a,b,c){var d;a.addEventListener?a.addEventListener(b,c,ib(d)):a.attachEvent&&a.attachEvent("on"+b,c)},kb=function(a,b,c){var d;a.removeEventListener?a.removeEventListener(b,c,ib(d)):a.detachEvent&&a.detachEvent("on"+b,c)};var mb=function(a,b){var c=m;lb(c,a,b)},lb=function(a,b,c){var d=!1;a.google_image_requests||(a.google_image_requests=[]);var e=a.document.createElement("img");if(c){var f=function(a){c(a);kb(e,"load",f);kb(e,"error",f)};jb(e,"load",f);jb(e,"error",f)}d&&(e.referrerPolicy="no-referrer");e.src=b;a.google_image_requests.push(e)};var nb=function(a,b){var c;var d=void 0===d?document:d;var e=(d?new bb(9==d.nodeType?d:d.ownerDocument||d.document):la||(la=new bb)).createElement("SCRIPT");e.type="text/javascript";b&&(void 0!==e.onreadystatechange?e.onreadystatechange=function(){if("complete"==e.readyState||"loaded"==e.readyState)try{b()}catch(g){}}:e.onload=b);c&&(e.id=c);Va(e,db(a));var f=d.getElementsByTagName("head")[0];if(f)try{m.setTimeout(function(){f.appendChild(e)},0)}catch(g){}},ob=function(){var a=void 0===a?A:a;return"http:"===a.location.protocol},pb,qb=window,rb=pb=!!qb.google_async_iframe_id,O=rb&&window.parent||window;var sb=function(a,b){this.ia=b;this.U=null;this.A="";this.a="1";nb(a,t(this.ta,this))};sb.prototype.ta=function(){this.a=null;if(window.botguard)if(window.botguard.bg)try{this.U=new window.botguard.bg(this.ia)}catch(a){this.a="5"}else this.a="3";else this.a="2"};var tb=function(a){if(a.a)return"";if(!a.U.invoke)return a.a="4","";try{var b=a.U.invoke()}catch(c){return a.a="6",""}return b&&b.length?b:(a.a="6","")};sb.prototype.getError=function(){return this.a?this.a:this.A.length?3>this.A.length?"7":1012<this.A.length?"8":null:null};var P=function(a,b){this.h=a;this.B=b;this.V=[];this.T=Infinity;this.I=this.D=null;this.W=0;var c=this.B.bg;c&&(this.D=new sb(c.u,c.c));this.h.J("event",t(this.ra,this));window.addEventListener("click",t(this.wa,this),!0);window.addEventListener("touchstart",t(this.za,this),!0);ub(this);this.exit=this.oa;this.exitNonCharging=this.pa;this.RedirectType=ua;this.reportInteraction_=this.Ba;this.updateUrls_=this.Ga;this.configureCloseButton=this.la},ub=function(a){a.h.J("exit-pmcfg",t(function(a){this.$=a},a))};l=P.prototype;l.oa=function(a,b){vb(this,a,void 0,b)};l.pa=function(a){vb(this,a,38)};l.Ba=function(a){var b={};b.i=a;a={};a.i=b;wb(this,a)||this.h.sendMessage("interactions",b)};l.Ga=function(a){var b={};b.f=a;a={};a.u=b;wb(this,a)||this.h.sendMessage("url_update",b)};l.la=function(a){var b={};b.t=a;this.h.sendMessage("mb_close_btn",b)};var vb=function(a,b,c,d){var e=Date.now();e<a.W?xb(a,b,c,d):a.I={fa:b,ka:c,Aa:d,qa:e+1500}},xb=function(a,b,c,d){if(1!=a.B.exit_strategy||d)var e=!1;else{var f;if(f=b)f=(f=(f=a.B.google_template_data)&&f.adData)&&f[0]&&f[0][b];f=f||a.B.redirect_url;e=p(f)&&(f.match(z)[1]||null);e=p(e)&&0==e.toLowerCase().indexOf("http")?null!=A.open(f,"_blank"):!1}f={};f.f=b;f.c=c;f.r=d;f.d=a.V;f.o=e;a.D&&(b=a.D,b.A=tb(b),b=b.A,f.br=b,f.be=a.D.getError());wb(a,f)||a.h.sendMessage("exit",f)},wb=function(a,b){if(a.$&&A.parent.postMessage){var c={};c.n=a.$;c.er=b;A.parent.postMessage(c,"*");return!0}return!1},yb=function(a,b,c,d){var e={};e.x=b;e.y=c;e.e=d;e.t=Date.now()-a.T;e.ts=Date.now();a.V.push(e)};P.prototype.wa=function(a){yb(this,a.clientX,a.clientY,0);a=Date.now();if(this.I){var b=this.I;a<b.qa&&xb(this,b.fa,b.ka,b.Aa)}this.I=null;this.W=a+200};P.prototype.za=function(a){a.changedTouches&&0<a.changedTouches.length&&yb(this,a.changedTouches[0].clientX,a.changedTouches[0].clientY,1)};P.prototype.ra=function(a){switch(a.e){case "onshow":this.T=u()}};var zb=function(a,b,c,d,e){this.Z=c||4E3;this.w=a||"&";this.ha=b||",$";this.N=void 0!==d?d:"trn";this.Fa=e||null;this.ga=!1;this.O={};this.va=0;this.C=[]},Bb=function(a,b,c,d,e){var f=[];fb(a,function(a,h){var g=Ab(a,b,c,d,e);g&&f.push(h+"="+g)});return f.join(b)},Ab=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Ab(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Bb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},Db=function(a,b,c,d){var e="";b=b+"//"+c+d;var f=Cb(a)-d.length-e.length;if(0>f)return"";a.C.sort(function(a,b){return a-b});d=null;c="";for(var g=0;g<a.C.length;g++)for(var h=a.C[g],n=a.O[h],k=0;k<n.length;k++){if(!f){d=null==d?h:d;break}var q=Bb(n[k],a.w,a.ha);if(q){q=c+q;if(f>=q.length){f-=q.length;b+=q;c=a.w;break}else a.ga&&(c=f,q[c-1]==a.w&&--c,b+=q.substr(0,c),c=a.w,f=0);d=null==d?h:d}}g="";a.N&&null!=d&&(d=a.Fa||d,g=c+a.N+"="+d);return b+g+e},Cb=function(a){if(!a.N)return a.Z;var b=1,c;for(c in a.O)b=c.length>b?c.length:b;return a.Z-a.N.length-b-a.w.length-1};var Eb=function(){var a=ob()?"http:":"https:";var b="pagead2.googlesyndication.com",c="/pagead/gen_204?id=",d=.01;this.ya=a;this.na=b;this.xa=c;this.ma=d;this.Da=Math.random()},Hb=function(a,b,c,d,e){var f=Fb;if(Gb(f,!!c,d))try{if(b instanceof zb)var g=b;else g=new zb,fb(b,function(a,b){var c=g,d=b,e=a,f=c.va++,h={};h[d]=e;d=[h];c.C.push(f);c.O[f]=d});var h=Db(g,f.ya,f.na,f.xa+a+"&");h&&("undefined"===typeof e?mb(h):mb(h,e))}catch(n){}},Gb=function(a,b,c){c=c||a.ma;a=b?a.Da:Math.random();return a<c};var Q=null;var Ib=function(){var a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):u()},Jb=function(){var a=m.performance;return a&&a.now?a.now():null};var Kb=function(a,b,c){var d;var e=void 0===e?0:e;this.label=a;this.type=b;this.value=c;this.duration=e;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=d};var R=function(a,b){this.l=[];this.v=b||m;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.l=b.google_js_reporting_queue,c=b.google_measure_js_timing);var d;if(null===Q){Q="";try{if(d=m.top.location.hash){var e=d.match(/\bdeid=([\d,]+)/);Q=e?e[1]:""}}catch(f){}}d=Q;d=d.indexOf&&0<=d.indexOf("1337");this.b=(this.b=null!=c?c:Math.random()<a)||d;c=this.v.performance;this.K=!!(c&&c.mark&&c.clearMarks&&d)};R.prototype.disable=function(){this.l!=this.v.google_js_reporting_queue&&(this.l.length=0,this.K&&y(this.l,this.ja,this));this.b=!1};R.prototype.ja=function(a){if(a&&this.K){var b=this.v.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};R.prototype.start=function(a,b){if(!this.b)return null;var c=Jb()||Ib();c=new Kb(a,b,c);this.K&&this.v.performance.mark("goog_"+c.uniqueId+"_start");return c};R.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=Jb()||Ib();a.duration=b-a.value;this.K&&this.v.performance.mark("goog_"+a.uniqueId+"_end");this.b&&this.l.push(a)}};var Fb,Lb;if(rb&&!eb()){var S="."+va.domain;try{for(;2<S.split(".").length&&!eb();)va.domain=S=S.substr(S.indexOf(".")+1),O=window.parent}catch(a){}eb()||(O=window)}var T=Lb=O,Mb=new R(1,T),Nb=function(){var a;null!=a&&(T.google_measure_js_timing=a);T.google_measure_js_timing||Mb.disable()};Fb=new Eb;"complete"==T.document.readyState?Nb():Mb.b&&jb(T,"load",function(){Nb()});var Pb=function(a){var b,c=b||Ob;return function(){var b=this||m;b=b.closure_memoize_cache_||(b.closure_memoize_cache_={});var e=c(a[ea]||(a[ea]=++fa),arguments);return b.hasOwnProperty(e)?b[e]:b[e]=a.apply(this,arguments)}},Ob=function(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")};var Qb=["destinationUrl","displayUrl"],Rb="googlesyndication.com googleadservices.com googleusercontent.com doubleclick.net youtube.com googleapis.com gstatic.com google-analytics.com".split(" "),Sb=Pb(function(a,b,c,d){d=d||{};d.i=a.creativeId;d.t=a.templateId;d.c=b;d.m=c;d.lp=a.layoutPath;a.experimentId&&(d.e=a.experimentId);a.X&&(d.gqi=a.X);a.ba&&(d.qqi=a.ba);a.Ca(d)}),Tb=function(a,b){return function(c,d,e){var f={};e&&(f.jsl=e);d&&(f.jsf=d);Sb(a,"j",c,f);b&&b(c,d,e)}},Ub=function(a){var b=a.match(z),c=function(a){return ma(b[3],a)};return pa(Rb,c)?a:ra(b[1],b[2],b[3],b[4])},Wb=function(a,b,c){var d={},e=0,f=function(a,b,c,f){d["a"+e]=a;null!=b&&(d["f"+e]=b);null!=c&&null!=f&&(d["s"+e]=c,d["d"+e]=f);e++};0!=b&&f("layout","layout",0,b.toFixed(4));if(b=window.performance&&window.performance.timing)b=b.responseEnd-b.navigationStart,f("http"+(ob()?"":"s"),"layout_html",0,b.toFixed(4));window.performance&&window.performance.getEntries&&(y(window.performance.getEntries(),function(b){var d=Fa(c,function(a){return b.name&&ma(b.name,a)});d&&d in c&&delete c[d];if(Vb(b.name)&&a.reportPerf){var e=0<b.startTime?b.startTime.toFixed(4):null,g=0<b.responseEnd?(b.responseEnd-b.startTime).toFixed(4):null;f(Ub(b.name),d,e,g)}}),(a.reportPerf||a.reportErrors)&&Da(c,function(a,b){f(a,b,-1,-1)}));0<e&&Sb(a,"p","",d)},Xb=function(a){return Ea(a,function(a,c){return p(a)&&Vb(a)&&!(0<=oa(Qb,c))})},Vb=function(a){var b;if(b=/^(https?:)?\/\//.test(a))(b=a)?(a=sa(b.match(z)[5]||null))?(b=b?(b=sa(b.match(z)[3]||null))?0<=oa(ta,b):!1:!1,a=b&&-1!=a.indexOf("/aclk")):a=!1:a=!1,b=!a;return b},Yb=function(a,b,c,d,e){var f=t(Function.prototype.apply,b,c,Array.prototype.slice.call(arguments,3));if(d&&d.monitoring){var g=d.monitoring;g={creativeId:g.creativeId||-1,templateId:g.templateId||-1,experimentId:g.experimentId,reportErrors:g.reportErrors||!1,reportPerf:g.reportPerf||!1,Ca:a,frameTiming:g.frameTiming||!1,measureBattery:g.measureBattery||!1,batteryMeasurementDuration:g.batteryMeasurementDuration||0,layoutPath:g.layoutPath,X:g.gqi,ba:g.qqi};var h=d.monitoring.loadTime?u()-d.monitoring.loadTime:0,n=d.google_template_data.adData[0],k=g;n=Xb(n);k=ja(Wb,k,h,n);window.setTimeout(k,1E4);if(g.reportErrors){k=window.onerror;window.onerror=Tb(g,k);try{f()}catch(r){f=Tb(g,k);g=r.toString();r.name&&-1==g.indexOf(r.name)&&(g+=": "+r.name);r.message&&-1==g.indexOf(r.message)&&(g+=": "+r.message);if(r.stack){k=r.stack;n=g;try{for(-1==k.indexOf(n)&&(k=n+"\n"+k);k!=q;){var q=k;k=k.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1")}g=k.replace(/\n */g,"\n")}catch(vc){g=n}}q=g;f(q,r.lineNumber,r.fileName)}}else f()}else f()},Zb=function(a){var b,c="html5-mon",d=1,e="jserror"!=c;Hb(c,a,e,d,b)};var v=function(a,b,c,d){try{var e=!!document.cookie}catch(f){e=!1}if(e&&(e=window.location.origin||window.location.protocol+"//"+window.location.host,!0!==window.secureChannel_allowAnyParent&&b!==e&&-1===c.indexOf(e)))throw Error();window.postMessage&&(w.call(this,a,d),this.da=!!window.MessageChannel,this.L=b,this.g=this.G=null,window.addEventListener("message",t(this.sa,this),!1),"complete"==m.document.readyState?this.Y():window.addEventListener("load",t(this.Y,this),!1))};ka();v.prototype.send=function(a){this.da?this.G&&this.G.postMessage(a):(a=this.ca?JSON.stringify(a):a,this.g.contentWindow.postMessage(a,"*"))};v.prototype.Y=function(){var a={t:0};a.s=this.M;if(this.da){var b=new MessageChannel;this.G=b.port1;this.G.onmessage=t(function(a){za(this,a.data)},this);this.Ea.postMessage(a,this.L,[b.port2]);ya(this)}else this.g=document.createElement("iframe"),this.g.style.display="none",b='<!doctype html><html><head><script>window.addEventListener("message",function(e){e.source.parent.postMessage(e.data,'+JSON.stringify(this.L)+");},false);\x3c/script></head><body></body></html>",this.g.srcdoc=b,this.g.src="javascript:'"+encodeURI(b)+"'",this.g.onload=t(function(){this.send(a);ya(this)},this),document.body.appendChild(this.g)};v.prototype.sa=function(a){var b=a.data;b=this.ca?JSON.parse(b):b;b.s!==this.M||a.source!==window.parent||"*"!==this.L&&a.origin!==this.L||za(this,b)};for(var $b,ac=window.location.hash.substring(1),bc={},cc=ac.split("&"),dc=0;dc<cc.length;dc++){var ec=cc[dc].split("=");bc[ec[0]]=decodeURIComponent(ec[1])}var U=$b=bc,fc=U.p&&0==U.p.indexOf("http")?U.p:"*",gc;var hc=window.parent,ic=fc,jc=["http://pagead2.googlesyndication.com","https://pagead2.googlesyndication.com","http://tpc.googlesyndication.com","https://tpc.googlesyndication.com","https://adwords-displayads.googleusercontent.com"],kc=U.t;try{gc=new v(hc,ic,jc,kc)}catch(a){gc=null}var V=gc;if(V){V.J("adData",function(a){if(window.onAdData){var b=new P(V,a);var c=Date.now();b.T=c;Yb(Zb,window.onAdData,window,a,b)}});var lc,W=V,mc=lc||"secureChannel",nc=W,oc,pc=mc,qc=nc,rc=oc,X=pc.split("."),Y=rc||m;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===qc?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=qc;var sc=W;sc.registerApplicationHandler=W.J;var tc=W;tc.sendMessage=W.sendMessage;var uc=W;uc.isInitialized=W.ua};}).call(this);
