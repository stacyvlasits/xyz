(function(e){function o(o){for(var n,l,u=o[0],c=o[1],i=o[2],p=0,f=[];p<u.length;p++)l=u[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(o);while(f.length)f.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,o=0;o<a.length;o++){for(var t=a[o],n=!0,u=1;u<t.length;u++){var c=t[u];0!==r[c]&&(n=!1)}n&&(a.splice(o--,1),e=l(l.s=t[0]))}return e}var n={},r={coords:0},a=[];function l(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,o,t){l.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,o){if(1&o&&(e=l(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)l.d(t,n,function(o){return e[o]}.bind(null,n));return t},l.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(o,"a",o),o},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},l.p="/xyz/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=o,u=u.slice();for(var i=0;i<u.length;i++)o(u[i]);var s=c;a.push([3,"chunk-vendors","chunk-common"]),t()})({3:function(e,o,t){e.exports=t("9bf8")},"9bf8":function(e,o,t){"use strict";t.r(o);var n=t("f2bf"),r=t("05a8"),a=t("5110"),l=t("ea67");t("7dcc");r["a"](),document.querySelector("#diurnal-controls").style.visibility="hidden";const u={lat:46.951082773,lon:7.438632421,system:l["a"].WGS84},c=(l["a"].LV95,u);let i,s;const p=n["b"]({data(){return{coordinate:c}},components:{"coords-form":a["a"]},methods:{onCoordChanged(e){i=f.$refs.coords_form.getCoord(),s={lat:i.lat,lng:i.lon},m(s.lat,s.lon)}}}),f=p.mount("#app");let d,g;function m(e,o){g&&d&&(g.setPosition(new google.maps.LatLng(s.lat,s.lng)),d.panTo(new google.maps.LatLng(s.lat,s.lng)))}i=f.$refs.coords_form.getCoord(),s={lat:i.lat,lng:i.lon},window.initMap=()=>{d=new google.maps.Map(document.getElementById("map"),{zoom:17,center:s}),g=new google.maps.Marker({map:d,position:s})}}});
//# sourceMappingURL=coords.2fb914b7.js.map