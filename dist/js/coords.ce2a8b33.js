(function(t){function e(e){for(var o,r,a=e[0],l=e[1],d=e[2],u=0,m=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},s={coords:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var c=l;i.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("fe14")},"7dcc":function(t,e,n){},"8dc3":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return v}));const o=Math.PI,s=2*o,i=Math.sqrt,r=(Math.exp,Math.log,Math.sin),a=Math.cos,l=(Math.tan,Math.asin,Math.atan,1/360),d=1/360/60,c=1/360/3600;function u(t,e=0,n=0){return t+e/60+n/3600}function m(t,e=0,n=0){return s*(t*l+e*d+n*c)}function p(t){const e=Math.floor(t),n=t%1*60,o=Math.floor(n),s=n%1*60;return[e,o,s]}function h(t,e){const n=3600*t,o=3600*e,s=(n-169028.66)/1e4,i=(o-26782.5)/1e4,r=s*s,a=r*s,l=i*i,d=l*i,c=2600072.37+211455.93*i-10938.51*i*s-.36*i*r-44.54*d,u=1200147.07+308807.95*s+3745.25*l+76.63*r-194.56*l*s+119.79*a;return[parseFloat(u.toFixed(2))-.02,parseFloat(c.toFixed(2))+.02]}function v(t,e){const n=(e-26e5)/1e6,o=(t-12e5)/1e6,s=o,i=n,r=s*s,a=r*s,l=i*i,d=l*i,c=2.6779094+4.728982*i+.791484*i*s+.1306*i*r-.0436*d,u=16.9023892+3.238272*s-.270978*l-.002528*r-.0447*l*s-.014*a,m=100*c/36,p=100*u/36;return[p,m]}class g{constructor(t,e,n,o){this.semiMajor=t,this.semiMinor=e,this.flatteningInverse=this.semiMajor/(this.semiMajor-this.semiMinor);this.semiMajor,this.semiMajor,this.semiMinor,this.semiMinor;this.E2=.006674372230614,this.E=i(this.E2),this.φ0=n,this.λ0=o,this.R=this.radiusOfProjectionSphere(),this.α=1.00072913843038}radiusOfProjectionSphere(){return this.semiMajor*i(1-this.E2)/(1-this.E2*this.sin2(this.φ0))}"computeα"(){return i(1+this.E2/(1-this.E2)*this.cos4(this.φ0))}sin2(t){const e=r(t);return e*e}cos4(t){const e=a(t);return e*e*e*e}}class f extends g{constructor(t,e){super(6377397.155,6356078.962822,t,e)}}new f(m(46,57,8.66),m(7,26,22.5)),m(46,54,27.83324844)},cbe4:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("select",{attrs:{name:"input_format"},on:{change:function(e){return t.onSelect(e.target.value)}}},[n("option",{attrs:{value:"dms"}},[t._v("Deg°/Min'/Sec\"")]),n("option",{attrs:{value:"deg"}},[t._v("Deg°")]),n("option",{attrs:{value:"lv95"}},[t._v("LV95")])])]),n("form",{directives:[{name:"show",rawName:"v-show",value:t.dms.show,expression:"dms.show"}],attrs:{name:"coords_dms"}},[n("table",[n("tr",[n("td",[t._v("Latitude:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dms.lat.deg,expression:"dms.lat.deg"}],attrs:{type:"number",step:"any"},domProps:{value:t.dms.lat.deg},on:{input:function(e){e.target.composing||t.$set(t.dms.lat,"deg",e.target.value)}}}),t._v("° "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dms.lat.min,expression:"dms.lat.min"}],attrs:{type:"number",step:"any"},domProps:{value:t.dms.lat.min},on:{input:function(e){e.target.composing||t.$set(t.dms.lat,"min",e.target.value)}}}),t._v("' "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dms.lat.sec,expression:"dms.lat.sec"}],attrs:{type:"number",step:"0.05"},domProps:{value:t.dms.lat.sec},on:{input:function(e){e.target.composing||t.$set(t.dms.lat,"sec",e.target.value)}}})])]),n("tr",[n("td",[t._v("Longitude:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dms.lon.deg,expression:"dms.lon.deg"}],attrs:{type:"number",step:"any"},domProps:{value:t.dms.lon.deg},on:{input:function(e){e.target.composing||t.$set(t.dms.lon,"deg",e.target.value)}}}),t._v("° "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dms.lon.min,expression:"dms.lon.min"}],attrs:{type:"number",step:"any"},domProps:{value:t.dms.lon.min},on:{input:function(e){e.target.composing||t.$set(t.dms.lon,"min",e.target.value)}}}),t._v("' "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dms.lon.sec,expression:"dms.lon.sec"}],attrs:{type:"number",step:"0.05"},domProps:{value:t.dms.lon.sec},on:{input:function(e){e.target.composing||t.$set(t.dms.lon,"sec",e.target.value)}}})])])])]),n("form",{directives:[{name:"show",rawName:"v-show",value:t.deg.show,expression:"deg.show"}],attrs:{name:"coords_degrees"}},[n("table",[n("tr",[n("td",[t._v("Latitude:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.deg.lat,expression:"deg.lat"}],attrs:{type:"number",step:"any"},domProps:{value:t.deg.lat},on:{input:function(e){e.target.composing||t.$set(t.deg,"lat",e.target.value)}}}),t._v("° N ")])]),n("tr",[n("td",[t._v("Longitude:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.deg.lon,expression:"deg.lon"}],attrs:{type:"number",step:"any"},domProps:{value:t.deg.lon},on:{input:function(e){e.target.composing||t.$set(t.deg,"lon",e.target.value)}}}),t._v("° E ")])])])]),n("form",{directives:[{name:"show",rawName:"v-show",value:t.lv95.show,expression:"lv95.show"}],attrs:{name:"coords_lv95"}},[n("table",[n("tr",[n("td",[t._v("X:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ESlider,expression:"ESlider"}],attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.ESlider},on:{__r:function(e){t.ESlider=e.target.value}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.lv95.E,expression:"lv95.E"}],attrs:{type:"number",step:"any"},domProps:{value:t.lv95.E},on:{input:function(e){e.target.composing||t.$set(t.lv95,"E",e.target.value)}}})])]),n("tr",[n("td",[t._v("Y:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.NSlider,expression:"NSlider"}],attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.NSlider},on:{__r:function(e){t.NSlider=e.target.value}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.lv95.N,expression:"lv95.N"}],attrs:{type:"number",step:"any"},domProps:{value:t.lv95.N},on:{input:function(e){e.target.composing||t.$set(t.lv95,"N",e.target.value)}}})])])])])])},s=[],i=n("8dc3"),r={props:{initCoord:Object,initLv:Object},data(){return{dms:{show:!0,lat:{deg:this.initCoord.latDeg||2,min:this.initCoord.latMin||0,sec:this.initCoord.latSec||0},lon:{deg:this.initCoord.lonDeg||0,min:this.initCoord.lonMin||0,sec:this.initCoord.lonSec||0}},deg:{show:!1,lat:this.initCoord.lat||0,lon:this.initCoord.lon||0},lv95:{show:!1,N:this.initLv.N||12e5,E:this.initLv.E||26e5,nMin:this.initLv.nMin||Number.MIN_VALUE,nMax:this.initLv.nMax||Number.MAX_VALUE,eMin:this.initLv.eMin||Number.MIN_VALUE,eMax:this.initLv.eMax||Number.MAX_VALUE},NSlider:50,ESlider:50,coord:{lat:this.initCoord.lat||0,lon:this.initCoord.lon||0,latMin:Number.MIN_VALUE,latMax:Number.MAX_VALUE,lonMin:Number.MIN_VALUE,lonMax:Number.MAX_VALUE}}},methods:{setLatLon(t,e){this.deg.lat=t,this.deg.lon=e},setLv95(t,e){this.lv95.N=t,this.lv95.E=e},onSelect(t){this.dms.show=!1,this.deg.show=!1,this.lv95.show=!1;const e=this.coord.lat,n=this.coord.lon;switch(t){case"dms":const t=this.dms;[t.lat.deg,t.lat.min,t.lat.sec]=Object(i["a"])(e),[t.lon.deg,t.lon.min,t.lon.sec]=Object(i["a"])(n);break;case"deg":[this.deg.lat,this.deg.lon]=[e,n];break;case"lv95":[this.lv95.N,this.lv95.E]=Object(i["d"])(e,n);break}this[t].show=!0}},watch:{coord:{handler(){const t=this.coord,e=Object(i["d"])(t.lat,t.lon),n={wgs:{lat:t.lat,lon:t.lon},lv95:{N:e[0],E:e[1]}};this.$root.$emit("coord-changed",n),this.$emit("coord-changed",n)},deep:!0},dms:{handler(){const t=this.dms;this.coord.lat=Object(i["b"])(parseFloat(t.lat.deg),parseFloat(t.lat.min),parseFloat(t.lat.sec)),this.coord.lon=Object(i["b"])(parseFloat(t.lon.deg),parseFloat(t.lon.min),parseFloat(t.lon.sec))},deep:!0},deg:{handler(){this.coord.lat=Object(i["b"])(parseFloat(this.deg.lat)),this.coord.lon=Object(i["b"])(parseFloat(this.deg.lon))},deep:!0},lv95:{handler(){[this.coord.lat,this.coord.lon]=Object(i["c"])(parseFloat(this.lv95.N),parseFloat(this.lv95.E))},deep:!0},NSlider:{handler(){const t=this.lv95.nMin,e=this.lv95.nMax,n=this.NSlider,o=parseFloat((t+n/100*(e-t)).toFixed(2));this.lv95.N=o,[this.coord.lat,this.coord.lon]=Object(i["c"])(this.lv95.N,this.lv95.E)}},ESlider:{handler(){const t=this.lv95.eMin,e=this.lv95.eMax,n=this.ESlider,o=parseFloat((t+n/100*(e-t)).toFixed(2));this.lv95.E=o,[this.coord.lat,this.coord.lon]=Object(i["c"])(this.lv95.N,this.lv95.E)}}}},a=r,l=n("2877"),d=Object(l["a"])(a,o,s,!1,null,null,null);e["a"]=d.exports},fe14:function(t,e,n){"use strict";n.r(e);var o=n("05a8"),s=n("2b0e"),i=n("cbe4");n("8dc3"),n("7dcc");o["a"](),document.querySelector("#diurnal-controls").style.visibility="hidden";const r=new s["a"]({el:"#app",render:t=>t(i["a"])});let a,l;function d(t,e){l&&a&&(l.setPosition(new google.maps.LatLng(t,e)),a.panTo(new google.maps.LatLng(t,e)))}r.$on("coord-changed",t=>{d(t.wgs[0],t.wgs[1])}),window.initMap=()=>{const t={lat:46.951082773,lng:7.438632421};a=new google.maps.Map(document.getElementById("map"),{zoom:17,center:t}),l=new google.maps.Marker({position:t,map:a})}}});
//# sourceMappingURL=coords.ce2a8b33.js.map