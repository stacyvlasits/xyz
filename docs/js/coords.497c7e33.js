(function(t){function e(e){for(var o,a,c=e[0],r=e[1],i=e[2],u=0,b=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&b.push(s[a][0]),s[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);d&&d(e);while(b.length)b.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],o=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(o=!1)}o&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={coords:0},l=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/xyz/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var d=r;l.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("9bf8")},5110:function(t,e,n){"use strict";var o=n("f2bf");const s=Object(o["n"])("data-v-8eda959e");Object(o["h"])("data-v-8eda959e");const l={class:"coords-forms"},a=Object(o["e"])("span",{style:{width:"50pt"}},"System:",-1),c=Object(o["e"])("option",{value:"dms"},"Deg°/Min'/Sec\"",-1),r=Object(o["e"])("option",{value:"deg"},"Deg°",-1),i=Object(o["e"])("option",{value:"lv95"},"LV95",-1),d={name:"coords_dms",class:"coord-form"},u=Object(o["e"])("td",null,"Latitude:",-1),b=Object(o["d"])("° "),h=Object(o["d"])("' "),m=Object(o["d"])('" '),p=Object(o["e"])("td",null,"Longitude:",-1),j=Object(o["d"])("° "),O=Object(o["d"])("' "),f=Object(o["d"])('" '),g={name:"coords_degrees",class:"coord-form"},v=Object(o["e"])("td",null,"Latitude:",-1),M=Object(o["d"])("° N "),y=Object(o["e"])("td",null,"Longitude:",-1),w=Object(o["d"])("° E "),E={name:"coords_lv95",class:"coord-form"},L=Object(o["e"])("td",null,"Latitude:",-1),N=Object(o["d"])(" meters North"),_=Object(o["e"])("td",null,"Longitude:",-1),V=Object(o["d"])(" meters East");Object(o["g"])();const U=s((t,e,n,s,U,k)=>(Object(o["f"])(),Object(o["c"])("div",l,[a,Object(o["e"])("select",{name:"input_format",onChange:e[1]||(e[1]=t=>k.onSelect(t.target.value))},[c,r,i],32),Object(o["m"])(Object(o["e"])("form",d,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[u,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>U.dms.lat.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["k"],U.dms.lat.deg]]),b,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>U.dms.lat.min=t),type:"number",step:"any",size:"3",class:"two-digit"},null,512),[[o["k"],U.dms.lat.min]]),h,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>U.dms.lat.sec=t),type:"number",step:"0.05",size:"5",class:"five-digit"},null,512),[[o["k"],U.dms.lat.sec]]),m])]),Object(o["e"])("tr",null,[p,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>U.dms.lon.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["k"],U.dms.lon.deg]]),j,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>U.dms.lon.min=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["k"],U.dms.lon.min]]),O,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>U.dms.lon.sec=t),type:"number",step:"0.05",class:"five-digit"},null,512),[[o["k"],U.dms.lon.sec]]),f])])])],512),[[o["l"],U.dms.show]]),Object(o["m"])(Object(o["e"])("form",g,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[v,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>U.deg.lat=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["k"],U.deg.lat]]),M])]),Object(o["e"])("tr",null,[y,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>U.deg.lon=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["k"],U.deg.lon]]),w])])])],512),[[o["l"],U.deg.show]]),Object(o["m"])(Object(o["e"])("form",E,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[L,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[10]||(e[10]=t=>U.lv95.N=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["k"],U.lv95.N]]),N])]),Object(o["e"])("tr",null,[_,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[11]||(e[11]=t=>U.lv95.E=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["k"],U.lv95.E]]),V])])])],512),[[o["l"],U.lv95.show]])])));var k=n("ea67"),x={props:{coordinate:Object},data(){const[t,e]=Object(k["d"])(this.coordinate.lat,this.coordinate.lon);return{dms:{show:!0,lat:Object(k["a"])(this.coordinate.lat),lon:Object(k["a"])(this.coordinate.lon)},deg:{show:!1,lat:this.coordinate.lat,lon:this.coordinate.lon},lv95:{show:!1,N:t,E:e,nMin:Number.MIN_VALUE,nMax:Number.MAX_VALUE,eMin:Number.MIN_VALUE,eMax:Number.MAX_VALUE},coord:{lat:this.coordinate.lat,lon:this.coordinate.lon,latMin:Number.MIN_VALUE,latMax:Number.MAX_VALUE,lonMin:Number.MIN_VALUE,lonMax:Number.MAX_VALUE}}},methods:{setLatLon(t,e){this.deg.lat=t,this.deg.lon=e,this.dms.lat=Object(k["a"])(t),this.dms.lon=Object(k["a"])(e)},setLv95(t,e){this.lv95.N=t,this.lv95.E=e},onSelect(t){this.dms.show=!1,this.deg.show=!1,this.lv95.show=!1;const e=this.coord.lat,n=this.coord.lon;switch(t){case"dms":this.dms.lat=Object(k["a"])(e),this.dms.lon=Object(k["a"])(n);break;case"deg":[this.deg.lat,this.deg.lon]=[e,n];break;case"lv95":[this.lv95.N,this.lv95.E]=Object(k["d"])(e,n);break}this[t].show=!0}},emits:["coord-changed"],watch:{coordinate:{handler(){this.setLatLon(this.coordinate.lat,this.coordinate.lon)},deep:!0},coord:{handler(){const t=this.coord,e=Object(k["d"])(t.lat,t.lon),n={wgs:{lat:t.lat,lon:t.lon},lv95:{N:e[0],E:e[1]}};this.$root.$emit("coord-changed",n),this.$emit("coord-changed",n)},deep:!0},dms:{handler(){const t=this.dms;this.coord.lat=Object(k["b"])(parseFloat(t.lat.deg),parseFloat(t.lat.min),parseFloat(t.lat.sec)),this.coord.lon=Object(k["b"])(parseFloat(t.lon.deg),parseFloat(t.lon.min),parseFloat(t.lon.sec))},deep:!0},deg:{handler(){this.coord.lat=Object(k["b"])(parseFloat(this.deg.lat)),this.coord.lon=Object(k["b"])(parseFloat(this.deg.lon))},deep:!0},lv95:{handler(){[this.coord.lat,this.coord.lon]=Object(k["c"])(parseFloat(this.lv95.N),parseFloat(this.lv95.E))},deep:!0}}};n("9f7a");x.render=U,x.__scopeId="data-v-8eda959e";e["a"]=x},"7dcc":function(t,e,n){},"9bf8":function(t,e,n){"use strict";n.r(e);var o=n("f2bf"),s=n("05a8"),l=n("5110");n("ea67"),n("7dcc");s["a"](),document.querySelector("#diurnal-controls").style.visibility="hidden";const a={lat:46.951082773,lng:7.438632421},c=o["b"]({data(){return{coordinate:{lat:a.lat,lon:a.lng}}},components:{"coords-form":l["a"]},methods:{onCoordChanged(t){d(t.wgs.lat,t.wgs.lon)}}});let r,i;function d(t,e){i&&r&&(i.setPosition(new google.maps.LatLng(t,e)),r.panTo(new google.maps.LatLng(t,e)))}c.mount("#app"),window.initMap=()=>{r=new google.maps.Map(document.getElementById("map"),{zoom:17,center:a}),i=new google.maps.Marker({position:a,map:r})}},"9f7a":function(t,e,n){"use strict";n("ccd3")},ccd3:function(t,e,n){},ea67:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return p}));const o=Math.PI,s=2*o,l=Math.sqrt,a=(Math.exp,Math.log,Math.sin),c=Math.cos,r=(Math.tan,Math.asin,Math.atan,1/360),i=1/360/60,d=1/360/3600;function u(t,e=0,n=0){return t+e/60+n/3600}function b(t,e=0,n=0){return s*(t*r+e*i+n*d)}function h(t){const e=Math.floor(t),n=t%1*60,o=Math.floor(n),s=n%1*60;return{deg:e,min:o,sec:s}}function m(t,e){const n=3600*t,o=3600*e,s=(n-169028.66)/1e4,l=(o-26782.5)/1e4,a=s*s,c=a*s,r=l*l,i=r*l,d=2600072.37+211455.93*l-10938.51*l*s-.36*l*a-44.54*i,u=1200147.07+308807.95*s+3745.25*r+76.63*a-194.56*r*s+119.79*c;return[parseFloat(u.toFixed(2))-.02,parseFloat(d.toFixed(2))+.02]}function p(t,e){const n=(e-26e5)/1e6,o=(t-12e5)/1e6,s=o,l=n,a=s*s,c=a*s,r=l*l,i=r*l,d=2.6779094+4.728982*l+.791484*l*s+.1306*l*a-.0436*i,u=16.9023892+3.238272*s-.270978*r-.002528*a-.0447*r*s-.014*c,b=100*d/36,h=100*u/36;return[h,b]}class j{constructor(t,e,n,o){this.semiMajor=t,this.semiMinor=e,this.flatteningInverse=this.semiMajor/(this.semiMajor-this.semiMinor);this.semiMajor,this.semiMajor,this.semiMinor,this.semiMinor;this.E2=.006674372230614,this.E=l(this.E2),this.φ0=n,this.λ0=o,this.R=this.radiusOfProjectionSphere(),this.α=1.00072913843038}radiusOfProjectionSphere(){return this.semiMajor*l(1-this.E2)/(1-this.E2*this.sin2(this.φ0))}"computeα"(){return l(1+this.E2/(1-this.E2)*this.cos4(this.φ0))}sin2(t){const e=a(t);return e*e}cos4(t){const e=c(t);return e*e*e*e}}class O extends j{constructor(t,e){super(6377397.155,6356078.962822,t,e)}}new O(b(46,57,8.66),b(7,26,22.5)),b(46,54,27.83324844)}});
//# sourceMappingURL=coords.497c7e33.js.map