!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";e.a=t.p+"42eb78b3137851e82fc97c0aa55a1476.png"},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){var o=t(4),r=t(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);n.exports=r.locals||{}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],s=e.base?i[0]+e.base:i[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var f=c(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:h(d,e),references:1}),o.push(l)}return o}function u(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var b=null,g=0;function h(n,e){var t,o,r;if(e.singleton){var i=g++;t=b||(b=u(e)),o=d.bind(null,t,i,!1),r=d.bind(null,t,i,!0)}else t=u(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=s(n,e),u=0;u<t.length;u++){var l=c(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),i=t(2),a=t.n(i),c=t(0),s=r()(!1),u=a()(c.a);s.push([n.i,"*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: red;\n  background-color: #ffffff;\n}\n\n.navcontainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  z-index: 1;\n  position: fixed;\n  padding: 1rem 4rem;\n}\n\n.socials i {\n  margin: 0 10px;\n  color: white;\n}\n\n.logo {\n  width: 200px;\n}\n\n.logo img {\n  width: 100%;\n}\n\n.menu {\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n}\n\n.menu-item {\n  margin: 0 5px;\n}\n\n.menu-item a {\n  text-decoration: none;\n}\n\n.hero {\n  font-family: 'Roboto', sans-serif;\n  background-image: url("+u+");\n  background-size: cover;\n  height: 100vh;\n}\n\n.heroitems {\n  position: relative;\n  width: 70%; \n  height: 100%;\n  margin: 0 auto;\n}\n\n.herotext.red{\n  position: absolute;\n  top: 30vh;\n  color: rgb(187, 31, 31);\n  font-size: 5rem;\n}\n\n.herotext.white{\n  position: absolute;\n  top: 36vh;\n  color: rgb(255, 255, 255);\n  font-size: 5rem;\n}\n\n.herotext.red.bottom {\n  top: 50vh;\n}\n\n.blackbox {\n  position: absolute;\n  background-color: rgb(32, 32, 32);\n  color: gray;\n  width: calc(70vh/2);\n  height: calc(55vh/2);\n  padding: 3rem 3rem;\n  bottom: 220px;\n  right: 35px;\n}\n\n.blackbox p {\n  font-size: 12px;\n}\n\n.beigebox {\n  position: absolute;\n  background-color: rgb(238, 227, 220);\n  color: gray;\n  width: calc(70vh/2);\n  height: calc(55vh/2);\n  padding: 3rem 3rem;\n  bottom: 20px;\n  right: 20rem;\n}\n\n.beigebox p {\n  font-size: 12px;\n}\n\n.btn {\n  padding: 15px 35px;\n  border-radius: 30px;\n  background: none;\n}\n\n.btn.light {\n  border: 2px solid rgb(238, 227, 220);\n  color: gray;\n}\n\n.btn.dark {\n  border: 2px solid rgb(58, 58, 58);\n  color: gray;\n}",""]),e.default=s},function(n,e,t){"use strict";t.r(e);t(3),t.p,t(0)}]);