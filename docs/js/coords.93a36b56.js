(function(t){function e(e){for(var o,a,c=e[0],i=e[1],d=e[2],u=0,b=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&b.push(s[a][0]),s[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);r&&r(e);while(b.length)b.shift()();return l.push.apply(l,d||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==s[i]&&(o=!1)}o&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={coords:0},l=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/xyz/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var r=i;l.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("9bf8")},5110:function(t,e,n){"use strict";var o=n("f2bf");const s=Object(o["l"])("data-v-8eda959e");Object(o["g"])("data-v-8eda959e");const l={class:"coords-forms"},a=Object(o["d"])("span",{style:{width:"50pt"}},"System:",-1),c=Object(o["d"])("option",{value:"dms"},"Deg°/Min'/Sec\"",-1),i=Object(o["d"])("option",{value:"deg"},"Deg°",-1),d=Object(o["d"])("option",{value:"lv95"},"LV95",-1),r={name:"coords_dms",class:"coord-form"},u=Object(o["d"])("td",null,"Latitude:",-1),b=Object(o["c"])("° "),h=Object(o["c"])("' "),p=Object(o["c"])('" '),m=Object(o["d"])("td",null,"Longitude:",-1),j=Object(o["c"])("° "),O=Object(o["c"])("' "),f=Object(o["c"])('" '),g={name:"coords_degrees",class:"coord-form"},v=Object(o["d"])("td",null,"Latitude:",-1),M=Object(o["c"])("° N "),y=Object(o["d"])("td",null,"Longitude:",-1),w=Object(o["c"])("° E "),E={name:"coords_lv95",class:"coord-form"},L=Object(o["d"])("td",null,"Latitude:",-1),N=Object(o["c"])(" meters North"),k=Object(o["d"])("td",null,"Longitude:",-1),_=Object(o["c"])(" meters East");Object(o["f"])();const V=s((t,e,n,s,V,U)=>(Object(o["e"])(),Object(o["b"])("div",l,[a,Object(o["d"])("select",{name:"input_format",onChange:e[1]||(e[1]=t=>U.onSelect(t.target.value))},[c,i,d],32),Object(o["k"])(Object(o["d"])("form",r,[Object(o["d"])("table",null,[Object(o["d"])("tr",null,[u,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>V.dms.lat.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["i"],V.dms.lat.deg]]),b,Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>V.dms.lat.min=t),type:"number",step:"any",size:"3",class:"two-digit"},null,512),[[o["i"],V.dms.lat.min]]),h,Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>V.dms.lat.sec=t),type:"number",step:"0.05",size:"5",class:"five-digit"},null,512),[[o["i"],V.dms.lat.sec]]),p])]),Object(o["d"])("tr",null,[m,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>V.dms.lon.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["i"],V.dms.lon.deg]]),j,Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>V.dms.lon.min=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["i"],V.dms.lon.min]]),O,Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>V.dms.lon.sec=t),type:"number",step:"0.05",class:"five-digit"},null,512),[[o["i"],V.dms.lon.sec]]),f])])])],512),[[o["j"],V.dms.show]]),Object(o["k"])(Object(o["d"])("form",g,[Object(o["d"])("table",null,[Object(o["d"])("tr",null,[v,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>V.deg.lat=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["i"],V.deg.lat]]),M])]),Object(o["d"])("tr",null,[y,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>V.deg.lon=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["i"],V.deg.lon]]),w])])])],512),[[o["j"],V.deg.show]]),Object(o["k"])(Object(o["d"])("form",E,[Object(o["d"])("table",null,[Object(o["d"])("tr",null,[L,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[10]||(e[10]=t=>V.lv95.N=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["i"],V.lv95.N]]),N])]),Object(o["d"])("tr",null,[k,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[11]||(e[11]=t=>V.lv95.E=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["i"],V.lv95.E]]),_])])])],512),[[o["j"],V.lv95.show]])])));var U=n("ea67"),x={props:{coordinate:Object},data(){const[t,e]=Object(U["d"])(this.coordinate.lat,this.coordinate.lon);return{dms:{show:!0,lat:Object(U["a"])(this.coordinate.lat),lon:Object(U["a"])(this.coordinate.lon)},deg:{show:!1,lat:this.coordinate.lat,lon:this.coordinate.lon},lv95:{show:!1,N:t,E:e,nMin:Number.MIN_VALUE,nMax:Number.MAX_VALUE,eMin:Number.MIN_VALUE,eMax:Number.MAX_VALUE},coord:{lat:this.coordinate.lat,lon:this.coordinate.lon,latMin:Number.MIN_VALUE,latMax:Number.MAX_VALUE,lonMin:Number.MIN_VALUE,lonMax:Number.MAX_VALUE}}},methods:{setLatLon(t,e){this.deg.lat=t,this.deg.lon=e,this.dms.lat=Object(U["a"])(t),this.dms.lon=Object(U["a"])(e)},setLv95(t,e){this.lv95.N=t,this.lv95.E=e},onSelect(t){this.dms.show=!1,this.deg.show=!1,this.lv95.show=!1;const e=this.coord.lat,n=this.coord.lon;switch(t){case"dms":this.dms.lat=Object(U["a"])(e),this.dms.lon=Object(U["a"])(n);break;case"deg":[this.deg.lat,this.deg.lon]=[e,n];break;case"lv95":[this.lv95.N,this.lv95.E]=Object(U["d"])(e,n);break}this[t].show=!0}},emits:["coord-changed"],watch:{coordinate:{handler(){this.setLatLon(this.coordinate.lat,this.coordinate.lon)},deep:!0},coord:{handler(){const t=this.coord,e=Object(U["d"])(t.lat,t.lon),n={wgs:{lat:t.lat,lon:t.lon},lv95:{N:e[0],E:e[1]}};this.$root.$emit("coord-changed",n),this.$emit("coord-changed",n)},deep:!0},dms:{handler(){const t=this.dms;this.coord.lat=Object(U["b"])(parseFloat(t.lat.deg),parseFloat(t.lat.min),parseFloat(t.lat.sec)),this.coord.lon=Object(U["b"])(parseFloat(t.lon.deg),parseFloat(t.lon.min),parseFloat(t.lon.sec))},deep:!0},deg:{handler(){this.coord.lat=Object(U["b"])(parseFloat(this.deg.lat)),this.coord.lon=Object(U["b"])(parseFloat(this.deg.lon))},deep:!0},lv95:{handler(){[this.coord.lat,this.coord.lon]=Object(U["c"])(parseFloat(this.lv95.N),parseFloat(this.lv95.E))},deep:!0}}};n("9f7a");x.render=V,x.__scopeId="data-v-8eda959e";e["a"]=x},"7dcc":function(t,e,n){},"9bf8":function(t,e,n){"use strict";n.r(e);var o=n("f2bf"),s=n("05a8"),l=n("5110");n("ea67"),n("7dcc");s["a"](),document.querySelector("#diurnal-controls").style.visibility="hidden";const a={lat:46.951082773,lng:7.438632421},c=o["a"]({data(){return{coordinate:{lat:a.lat,lon:a.lng}}},components:{"coords-form":l["a"]},methods:{onCoordChanged(t){r(t.wgs.lat,t.wgs.lon)}}});let i,d;function r(t,e){d&&i&&(d.setPosition(new google.maps.LatLng(t,e)),i.panTo(new google.maps.LatLng(t,e)))}c.mount("#app"),window.initMap=()=>{i=new google.maps.Map(document.getElementById("map"),{zoom:17,center:a}),d=new google.maps.Marker({position:a,map:i})}},"9f7a":function(t,e,n){"use strict";n("ccd3")},ccd3:function(t,e,n){},ea67:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return m}));const o=Math.PI,s=2*o,l=Math.sqrt,a=(Math.exp,Math.log,Math.sin),c=Math.cos,i=(Math.tan,Math.asin,Math.atan,1/360),d=1/360/60,r=1/360/3600;function u(t,e=0,n=0){return t+e/60+n/3600}function b(t,e=0,n=0){return s*(t*i+e*d+n*r)}function h(t){const e=Math.floor(t),n=t%1*60,o=Math.floor(n),s=n%1*60;return{deg:e,min:o,sec:s}}function p(t,e){const n=3600*t,o=3600*e,s=(n-169028.66)/1e4,l=(o-26782.5)/1e4,a=s*s,c=a*s,i=l*l,d=i*l,r=2600072.37+211455.93*l-10938.51*l*s-.36*l*a-44.54*d,u=1200147.07+308807.95*s+3745.25*i+76.63*a-194.56*i*s+119.79*c;return[parseFloat(u.toFixed(2))-.02,parseFloat(r.toFixed(2))+.02]}function m(t,e){const n=(e-26e5)/1e6,o=(t-12e5)/1e6,s=o,l=n,a=s*s,c=a*s,i=l*l,d=i*l,r=2.6779094+4.728982*l+.791484*l*s+.1306*l*a-.0436*d,u=16.9023892+3.238272*s-.270978*i-.002528*a-.0447*i*s-.014*c,b=100*r/36,h=100*u/36;return[h,b]}class j{constructor(t,e,n,o){this.semiMajor=t,this.semiMinor=e,this.flatteningInverse=this.semiMajor/(this.semiMajor-this.semiMinor);this.semiMajor,this.semiMajor,this.semiMinor,this.semiMinor;this.E2=.006674372230614,this.E=l(this.E2),this.φ0=n,this.λ0=o,this.R=this.radiusOfProjectionSphere(),this.α=1.00072913843038}radiusOfProjectionSphere(){return this.semiMajor*l(1-this.E2)/(1-this.E2*this.sin2(this.φ0))}"computeα"(){return l(1+this.E2/(1-this.E2)*this.cos4(this.φ0))}sin2(t){const e=a(t);return e*e}cos4(t){const e=c(t);return e*e*e*e}}class O extends j{constructor(t,e){super(6377397.155,6356078.962822,t,e)}}new O(b(46,57,8.66),b(7,26,22.5)),b(46,54,27.83324844)}});
//# sourceMappingURL=coords.93a36b56.js.map