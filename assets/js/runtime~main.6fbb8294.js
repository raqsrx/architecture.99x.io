!function(){"use strict";var e,t,c,r,f,n={},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var c=a[e]={id:e,loaded:!1,exports:{}};return n[e].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}o.m=n,o.c=a,e=[],o.O=function(t,c,r,f){if(!c){var n=1/0;for(u=0;u<e.length;u++){c=e[u][0],r=e[u][1],f=e[u][2];for(var a=!0,d=0;d<c.length;d++)(!1&f||n>=f)&&Object.keys(o.O).every((function(e){return o.O[e](c[d])}))?c.splice(d--,1):(a=!1,f<n&&(n=f));a&&(e.splice(u--,1),t=r())}return t}f=f||0;for(var u=e.length;u>0&&e[u-1][2]>f;u--)e[u]=e[u-1];e[u]=[c,r,f]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},c=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var n={};t=t||[null,c({}),c([]),c(c)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=c(a))Object.getOwnPropertyNames(a).forEach((function(t){n[t]=function(){return e[t]}}));return n.default=function(){return e},o.d(f,n),f},o.d=function(e,t){for(var c in t)o.o(t,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,c){return o.f[c](e,t),t}),[]))},o.u=function(e){return"assets/js/"+({53:"935f2afb",69:"c5629f56",453:"30a24c52",533:"b2b675dd",604:"b95ae07a",632:"d7c8af36",763:"87e65480",951:"b58ae0e0",997:"6a63c8ee",1261:"2655cd7d",1406:"a024543e",1449:"af172acd",1588:"da33604b",1633:"031793e1",1713:"a7023ddc",2810:"36e18736",2945:"de11274d",3085:"1f391b9e",3089:"a6aa9e1f",3205:"a80da1cf",3707:"3570154c",3973:"f8003cb5",4013:"01a85c17",4035:"8e9f0a8a",4061:"2868cdab",4195:"c4f5d8e4",4694:"bdd709f1",4904:"1ebf5371",5164:"f4c1694d",5668:"31649067",6050:"a4faa4ad",6103:"ccc49370",6176:"d610846f",6458:"572f8f0f",7294:"13736815",7394:"88758c4f",7414:"393be207",7560:"3c78cd12",7918:"17896441",8040:"e8493339",8415:"f4dad0e3",8584:"6d0809c6",8610:"6875c492",9222:"894e5682",9308:"fca71390",9514:"1be78505",9529:"c26121b1",9700:"e16015ca"}[e]||e)+"."+{53:"6602639c",69:"59b08b6a",453:"a8b0b8ec",533:"b607a3b2",604:"c5cd86e5",632:"acdef96c",763:"6cd89f9a",951:"a7e85187",997:"6c90a1a7",1261:"25128a47",1406:"d2d05e32",1449:"6998896f",1588:"d6bd0115",1633:"cf6c1b06",1713:"43ad0afa",2611:"1c1be6df",2810:"dd3627ce",2945:"32643e37",3085:"bccdc59b",3089:"c10db8d8",3205:"e5ed9a91",3707:"e14a54d7",3973:"12d8f96e",4013:"61867057",4035:"2a43fda7",4061:"b9001287",4195:"f464ae54",4608:"a523d967",4694:"eb706c7c",4904:"ff578aa0",5164:"641c55f8",5486:"87d8b431",5668:"b093d331",6050:"a5e59570",6103:"b0d90636",6176:"7e7edd13",6458:"0c83c767",7294:"6695ef76",7394:"305477ea",7414:"7466eb42",7560:"a073bf26",7918:"d500ab4b",8040:"90b73540",8415:"e3e67b3e",8584:"3aa1625d",8610:"ab8b7417",8796:"cf7647ec",9222:"45042ddc",9308:"7f2af2db",9514:"748ce496",9529:"cd146cdd",9700:"403b3a9a"}[e]+".js"},o.miniCssF=function(e){return"assets/css/styles.ec1187c2.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},f="architecture-at-99x:",o.l=function(e,t,c,n){if(r[e])r[e].push(t);else{var a,d;if(void 0!==c)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var b=u[i];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==f+c){a=b;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",f+c),a.src=e),r[e]=[t];var l=function(t,c){a.onerror=a.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),f&&f.forEach((function(e){return e(c)})),t)return t(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",o.gca=function(e){return e={13736815:"7294",17896441:"7918",31649067:"5668","935f2afb":"53",c5629f56:"69","30a24c52":"453",b2b675dd:"533",b95ae07a:"604",d7c8af36:"632","87e65480":"763",b58ae0e0:"951","6a63c8ee":"997","2655cd7d":"1261",a024543e:"1406",af172acd:"1449",da33604b:"1588","031793e1":"1633",a7023ddc:"1713","36e18736":"2810",de11274d:"2945","1f391b9e":"3085",a6aa9e1f:"3089",a80da1cf:"3205","3570154c":"3707",f8003cb5:"3973","01a85c17":"4013","8e9f0a8a":"4035","2868cdab":"4061",c4f5d8e4:"4195",bdd709f1:"4694","1ebf5371":"4904",f4c1694d:"5164",a4faa4ad:"6050",ccc49370:"6103",d610846f:"6176","572f8f0f":"6458","88758c4f":"7394","393be207":"7414","3c78cd12":"7560",e8493339:"8040",f4dad0e3:"8415","6d0809c6":"8584","6875c492":"8610","894e5682":"9222",fca71390:"9308","1be78505":"9514",c26121b1:"9529",e16015ca:"9700"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(t,c){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)c.push(r[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var f=new Promise((function(c,f){r=e[t]=[c,f]}));c.push(r[2]=f);var n=o.p+o.u(t),a=new Error;o.l(n,(function(c){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var f=c&&("load"===c.type?"missing":c.type),n=c&&c.target&&c.target.src;a.message="Loading chunk "+t+" failed.\n("+f+": "+n+")",a.name="ChunkLoadError",a.type=f,a.request=n,r[1](a)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,c){var r,f,n=c[0],a=c[1],d=c[2],u=0;for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(d)var i=d(o);for(t&&t(c);u<n.length;u++)f=n[u],o.o(e,f)&&e[f]&&e[f][0](),e[n[u]]=0;return o.O(i)},c=self.webpackChunkarchitecture_at_99x=self.webpackChunkarchitecture_at_99x||[];c.forEach(t.bind(null,0)),c.push=t.bind(null,c.push.bind(c))}()}();