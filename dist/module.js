/*! For license information please see module.js.LICENSE.txt */
define(["react","emotion","@grafana/runtime","@grafana/data","@grafana/ui"],(function(e,t,n,r,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=10)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t,n){e.exports=function(){"use strict";var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"==typeof e}function r(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function a(e,t){return null!=e&&"object"==typeof e&&t in e}var i=RegExp.prototype.test,o=/\S/;function l(e){return!function(e,t){return i.call(e,t)}(o,e)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},s=/\s*/,u=/\s+/,p=/\s*=/,f=/\s*\}/,h=/#|\^|\/|>|\{|&|=|!/;function d(e){this.string=e,this.tail=e,this.pos=0}function A(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function g(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},d.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},A.prototype.push=function(e){return new A(e,this)},A.prototype.lookup=function(e){var t,r,i,o=this.cache;if(o.hasOwnProperty(e))t=o[e];else{for(var l,c,s,u=this,p=!1;u;){if(e.indexOf(".")>0)for(l=u.view,c=e.split("."),s=0;null!=l&&s<c.length;)s===c.length-1&&(p=a(l,c[s])||(r=l,i=c[s],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(i))),l=l[c[s++]];else l=u.view[e],p=a(u.view,e);if(p){t=l;break}u=u.parent}o[e]=t}return n(t)&&(t=t.call(this.view)),t},g.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},g.prototype.parse=function(e,n){var a=this.templateCache,i=e+":"+(n||v.tags).join(":"),o=void 0!==a,c=o?a.get(i):void 0;return null==c&&(c=function(e,n){if(!e)return[];var a,i,o,c=!1,A=[],g=[],m=[],C=!1,b=!1,y="",w=0;function E(){if(C&&!b)for(;m.length;)delete g[m.pop()];else m=[];C=!1,b=!1}function x(e){if("string"==typeof e&&(e=e.split(u,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);a=new RegExp(r(e[0])+"\\s*"),i=new RegExp("\\s*"+r(e[1])),o=new RegExp("\\s*"+r("}"+e[1]))}x(n||v.tags);for(var B,k,_,S,j,O,N=new d(e);!N.eos();){if(B=N.pos,_=N.scanUntil(a))for(var T=0,U=_.length;T<U;++T)l(S=_.charAt(T))?(m.push(g.length),y+=S):(b=!0,c=!0,y+=" "),g.push(["text",S,B,B+1]),B+=1,"\n"===S&&(E(),y="",w=0,c=!1);if(!N.scan(a))break;if(C=!0,k=N.scan(h)||"name",N.scan(s),"="===k?(_=N.scanUntil(p),N.scan(p),N.scanUntil(i)):"{"===k?(_=N.scanUntil(o),N.scan(f),N.scanUntil(i),k="&"):_=N.scanUntil(i),!N.scan(i))throw new Error("Unclosed tag at "+N.pos);if(j=">"==k?[k,_,B,N.pos,y,w,c]:[k,_,B,N.pos],w++,g.push(j),"#"===k||"^"===k)A.push(j);else if("/"===k){if(!(O=A.pop()))throw new Error('Unopened section "'+_+'" at '+B);if(O[1]!==_)throw new Error('Unclosed section "'+O[1]+'" at '+B)}else"name"===k||"{"===k||"&"===k?b=!0:"="===k&&x(_)}if(E(),O=A.pop())throw new Error('Unclosed section "'+O[1]+'" at '+N.pos);return function(e){for(var t,n=[],r=n,a=[],i=0,o=e.length;i<o;++i)switch((t=e[i])[0]){case"#":case"^":r.push(t),a.push(t),r=t[4]=[];break;case"/":a.pop()[5]=t[2],r=a.length>0?a[a.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],a=0,i=e.length;a<i;++a)(t=e[a])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(g))}(e,n),o&&a.set(i,c)),c},g.prototype.render=function(e,t,n,r){var a=this.getConfigTags(r),i=this.parse(e,a),o=t instanceof A?t:new A(t,void 0);return this.renderTokens(i,o,n,e,r)},g.prototype.renderTokens=function(e,t,n,r,a){for(var i,o,l,c="",s=0,u=e.length;s<u;++s)l=void 0,"#"===(o=(i=e[s])[0])?l=this.renderSection(i,t,n,r,a):"^"===o?l=this.renderInverted(i,t,n,r,a):">"===o?l=this.renderPartial(i,t,n,a):"&"===o?l=this.unescapedValue(i,t):"name"===o?l=this.escapedValue(i,t,a):"text"===o&&(l=this.rawValue(i)),void 0!==l&&(c+=l);return c},g.prototype.renderSection=function(e,r,a,i,o){var l=this,c="",s=r.lookup(e[1]);if(s){if(t(s))for(var u=0,p=s.length;u<p;++u)c+=this.renderTokens(e[4],r.push(s[u]),a,i,o);else if("object"==typeof s||"string"==typeof s||"number"==typeof s)c+=this.renderTokens(e[4],r.push(s),a,i,o);else if(n(s)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(s=s.call(r.view,i.slice(e[3],e[5]),(function(e){return l.render(e,r,a,o)})))&&(c+=s)}else c+=this.renderTokens(e[4],r,a,i,o);return c}},g.prototype.renderInverted=function(e,n,r,a,i){var o=n.lookup(e[1]);if(!o||t(o)&&0===o.length)return this.renderTokens(e[4],n,r,a,i)},g.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),a=e.split("\n"),i=0;i<a.length;i++)a[i].length&&(i>0||!n)&&(a[i]=r+a[i]);return a.join("\n")},g.prototype.renderPartial=function(e,t,r,a){if(r){var i=this.getConfigTags(a),o=n(r)?r(e[1]):r[e[1]];if(null!=o){var l=e[6],c=e[5],s=e[4],u=o;0==c&&s&&(u=this.indentPartial(o,s,l));var p=this.parse(u,i);return this.renderTokens(p,t,r,u,a)}}},g.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},g.prototype.escapedValue=function(e,t,n){var r=this.getConfigEscape(n)||v.escape,a=t.lookup(e[1]);if(null!=a)return"number"==typeof a&&r===v.escape?String(a):r(a)},g.prototype.rawValue=function(e){return e[1]},g.prototype.getConfigTags=function(e){return t(e)?e:e&&"object"==typeof e?e.tags:void 0},g.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!t(e)?e.escape:void 0};var v={name:"mustache.js",version:"4.1.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){m.templateCache=e},get templateCache(){return m.templateCache}},m=new g;return v.clearCache=function(){return m.clearCache()},v.parse=function(e,t){return m.parse(e,t)},v.render=function(e,n,r,a){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(i=e)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return m.render(e,n,r,a)},v.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return c[e]}))},v.Scanner=d,v.Context=A,v.Writer=g,v}()},function(e,t,n){var r=n(7),a=n(8);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=(r(a,i),a.locals?a.locals:{});e.exports=o},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function l(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],c=t.base?i[0]+t.base:i[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var p=l(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(o[p].references++,o[p].updater(f)):o.push({identifier:u,updater:g(f,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,A=0;function g(e,t){var n,r,a;if(t.singleton){var i=A++;n=d||(d=s(t)),r=f.bind(null,n,i,!1),a=f.bind(null,n,i,!0)}else n=s(t),r=h.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=l(n[r]);o[a].references--}for(var i=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=i}}}},function(e,t,n){(t=n(9)(!0)).push([e.i,".label-tag{margin-right:4px;margin-top:8px;white-space:nowrap;border-radius:3px;text-shadow:none;font-size:12px;padding:0 6px;line-height:20px;height:20px}.label{display:inline-block;font-weight:500;color:#fff;vertical-align:baseline;background-color:rgba(85,85,85,0)}.darklabel{display:inline-block;font-weight:500;color:#aaa;vertical-align:baseline;background-color:rgba(85,85,85,0)}.rule{display:block;font-weight:500;color:#fff;vertical-align:baseline;background-color:rgba(85,85,85,0);line-height:24px}.tag-container{white-space:pre-line;line-height:0}.state-alerting{color:red}.state-ok{color:green}.icon{display:inline-block;justify-content:center;align-items:center;width:24px;height:24px;vertical-align:bottom}.nowrap{white-space:nowrap}a{display:inline-block;font-weight:500;color:#fff;vertical-align:baseline;white-space:nowrap}\n","",{version:3,sources:["module.css"],names:[],mappings:"AAAA,WAAW,gBAAgB,CAAC,cAAc,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,cAAc,CAAC,aAAa,CAAC,gBAAgB,CAAC,WAAW,CAAC,OAAO,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,uBAAuB,CAAC,iCAAsB,CAAC,WAAW,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,uBAAuB,CAAC,iCAAsB,CAAC,MAAM,aAAa,CAAC,eAAe,CAAC,UAAU,CAAC,uBAAuB,CAAC,iCAAsB,CAAC,gBAAgB,CAAC,eAAe,oBAAoB,CAAC,aAAa,CAAC,gBAAgB,SAAS,CAAC,UAAU,WAAW,CAAC,MAAM,oBAAoB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,UAAU,CAAC,WAAW,CAAC,qBAAqB,CAAC,QAAQ,kBAAkB,CAAC,EAAE,oBAAoB,CAAC,eAAe,CAAC,UAAU,CAAC,uBAAuB,CAAC,kBAAkB",file:"module.css",sourcesContent:[".label-tag{margin-right:4px;margin-top:8px;white-space:nowrap;border-radius:3px;text-shadow:none;font-size:12px;padding:0 6px;line-height:20px;height:20px}.label{display:inline-block;font-weight:500;color:#fff;vertical-align:baseline;background-color:#5550}.darklabel{display:inline-block;font-weight:500;color:#aaa;vertical-align:baseline;background-color:#5550}.rule{display:block;font-weight:500;color:#fff;vertical-align:baseline;background-color:#5550;line-height:24px}.tag-container{white-space:pre-line;line-height:0}.state-alerting{color:red}.state-ok{color:green}.icon{display:inline-block;justify-content:center;align-items:center;width:24px;height:24px;vertical-align:bottom}.nowrap{white-space:nowrap}a{display:inline-block;font-weight:500;color:#fff;vertical-align:baseline;white-space:nowrap}\n"]}]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(3);function a(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var i,o,l=n(0),c=n.n(l),s=n(1),u=n(4),p=n(2),f=(n(6),n(5)),h=Object(u.stylesFactory)((function(){return{wrapper:Object(s.css)(o||(o=a(["\n      position: relative;\n    "],["\n      position: relative;\n    "])))}}));n.d(t,"plugin",(function(){return d}));var d=new r.PanelPlugin((function(e){var t=e.options,n=e.data,r=e.width,o=e.height,l=h(),u=["#D32D20","#1E72B8","#B240A2","#705DA0","#466803","#497A3C","#3D71AA","#B15415","#890F02","#6E6E6E","#0A437C","#6D1F62","#584477","#4C7A3F","#2F4F4F","#BF1B00","#7662B1","#8A2EB8","#517A00","#000000","#3F6833","#2F575E","#99440A","#AE561A","#0E4AB4","#58140C","#052B51","#511749","#3F2B5B"],d=["#FF7368","#459EE7","#E069CF","#9683C6","#6C8E29","#76AC68","#6AA4E2","#E7823D","#AF3528","#9B9B9B","#3069A2","#934588","#7E6A9D","#88C477","#557575","#E54126","#A694DD","#B054DE","#8FC426","#262626","#658E59","#557D84","#BF6A30","#FF9B53","#3470DA","#7E3A32","#2B5177","#773D6F","#655181"];function A(e){var t=function(e){for(var t=5381,n=0;n<e.length;n++)t=(t<<5)+t+e.charCodeAt(n);return t}(e.toLowerCase());return function(e){return{color:u[e],borderColor:d[e]}}(Math.abs(t%u.length))}function g(e){function t(e){return e>1?"s":""}var n=Math.floor(e/1e3),r=Math.floor(n/31536e3);if(r)return r+" year"+t(r);var a=Math.floor((n%=31536e3)/86400);if(a)return a+" day"+t(a);var i=Math.floor((n%=86400)/3600);if(i)return i+" hour"+t(i);var o=Math.floor((n%=3600)/60);if(o)return o+" minute"+t(o);var l=n%60;return l?l+" second"+t(l):"just now"}function v(e,t){for(var n=0;n<e.fields.length;n++)if(e.fields[n].name===t)return e.fields[n].values.get(0)}function m(e){var t="#6818B1",n="white";switch(e){case 1:t="#C13737";break;case 2:t="#F9851B",n="black";break;case 3:t="#FCDC01",n="black";break;case 4:t="#2374D9"}return{backgroundColor:t,color:n}}var C=c.a.createElement("span",null,c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"alert-state-ok"},c.a.createElement("path",{d:"M12,20.8623a2.75115,2.75115,0,0,1-1.94922-.80468L3.83691,13.84277A6.27238,6.27238,0,0,1,12,4.36328a6.27239,6.27239,0,0,1,8.16309,9.47949l-6.21338,6.21387A2.75,2.75,0,0,1,12,20.8623Z"}))),b=c.a.createElement("span",null,c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"alert-state-alerting"},c.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},c.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},c.a.createElement("path",{d:"M18.17,1.85h0A6.25,6.25,0,0,0,12.12.23L9.42,6.56l2.83.71a1,1,0,0,1,.67,1.41l-2,4a1,1,0,0,1-.9.56,1.13,1.13,0,0,1-.44-.1h0a1,1,0,0,1-.46-1.33l1.4-2.89-2.77-.7a1,1,0,0,1-.65-.53,1,1,0,0,1,0-.83L9.58,1a6.27,6.27,0,0,0-7.73,9.77L9.3,18.18a1,1,0,0,0,1.42,0h0l7.45-7.46A6.27,6.27,0,0,0,18.17,1.85Z"})))));return c.a.createElement("div",{className:Object(s.cx)(l.wrapper,Object(s.css)(i||(i=a(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),r,o))},function(){if(void 0!==n&&n.series.length>0){var e=n.series[0],r=v(e,"state"),a=v(e,"notes"),i=v(e,"metric_name"),o=v(e,"tags"),l=v(e,"cleared_timestamp"),s=v(e,"severity"),u=v(e,"alert_value"),h=v(e,"cleared_value"),d=v(e,"alert_timestamp"),y=v(e,"rule_text"),w=v(e,"metric_link"),E=v(e,"circonus_alert_url"),x=[];o&&o.length>0&&(x=o.split("|"));var B=new Date(d),k="ALERTING"===r?"alerting":"ok",_="alerting"===k?b:C,S="";if(""!==a)try{var j=JSON.parse(a);S=void 0!==j.summary?j.summary:i}catch(e){S=a}else S=i;var O="for ",N=(new Date).valueOf();O+=g(null!==l?N-l:N-d);for(var T=[],U={},F=0;F<x.length;F++){var M=x[F].split(":"),D=M[0];if(U[D+""]=M[1]+"",!(t.exclude.indexOf(D)>=0)){var P={backgroundColor:A(x[F]).color};T.push(c.a.createElement("div",{className:"label-tag label",style:P},x[F]))}}var L=[];if(y&&y.length>0)for(var W=y.split("|"),R=0;R<W.length;R++)L.push(c.a.createElement("div",{className:"rule"},R+1,". ",W[R]));var I=B;S=f.render(S,U);var V=" @ "+I.getFullYear()+"-"+(I.getMonth()+1)+"-"+I.getDate()+" ("+function(e){switch(e.getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday"}return""}(I)+") "+I.toTimeString(),q={fontSize:"18px",display:"inline-block"},z=!1,J=Object(p.getTemplateSrv)().getVariables();for(R=0;R<J.length;R++)"initial_range_set"===J[R].name&&(z="true"===Object(p.getTemplateSrv)().replace("{initial_range_set}"));var H={};return H["var-check_uuid"]=v(e,"check_uuid"),H["var-cn"]=v(e,"canonical_metric_name"),H["var-function"]=v(e,"function"),H["var-threshold_1"]=v(e,"threshold_1"),H["var-threshold_2"]=v(e,"threshold_2"),H["var-threshold_3"]=v(e,"threshold_3"),H["var-threshold_4"]=v(e,"threshold_4"),H["var-threshold_5"]=v(e,"threshold_5"),H["var-alert_id"]=v(e,"alert_id"),!1===z&&(H.from=v(e,"alert_window_start"),H.to=v(e,"alert_window_end"),H["var-initial_range_set"]="true"),Object(p.getLocationSrv)().update({partial:!0,query:H,replace:!0}),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("span",{className:"label",style:q},S),c.a.createElement("span",{className:"darklabel",style:q},V))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("hr",null))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("span",{className:"icon",style:q},_),c.a.createElement("span",{className:"state-"+k,style:q},r)," - ",c.a.createElement("span",{id:"severity",className:"label-tag label",style:m(s)},"P",s),c.a.createElement("span",{className:"label",style:q},O),c.a.createElement("span",{className:"label",style:q},"- Alert: ",i," == ",u),null!==l?c.a.createElement("span",{className:"label",style:q},"- Clear ",i," == ",h):null)),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("hr",null))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("span",{className:"label",style:q},i," | ",c.a.createElement("span",{className:"tag-container"},T)))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("hr",null))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5,valign:"top"},c.a.createElement("span",{id:"rule_text",className:"label",style:q},"Rules: ",L))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("hr",null))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5},c.a.createElement("span",{className:"label",style:q},"Links:"),c.a.createElement("span",{className:"label"},w?c.a.createElement("a",{href:w,target:"_blank"},"Alert info"):null)," ","|"," ",c.a.createElement("span",{className:"label"},c.a.createElement("a",{href:E,target:"_blank"},"Circonus Alert Page")))))}return c.a.createElement("p",{className:"label"},"Alert not found")}())})).setPanelOptions((function(e){return e.addStringArray({path:"exclude",name:"Exclude tag categories",description:"The list of tag categories to exclude from the tag listing on the detail page",defaultValue:[]})}))}])}));
//# sourceMappingURL=module.js.map