(function(t){function e(e){for(var o,s,a=e[0],r=e[1],c=e[2],u=0,h=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&h.push(l[s][0]),l[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var r=n[a];0!==l[r]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},l={project:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/xyz/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=r;i.push([2,"chunk-vendors"]),n()})({"0fdf":function(t,e,n){"use strict";n("463f")},2:function(t,e,n){t.exports=n("cf28")},"463f":function(t,e,n){},5110:function(t,e,n){"use strict";var o=n("f2bf");const l=Object(o["n"])("data-v-8eda959e");Object(o["h"])("data-v-8eda959e");const i={class:"coords-forms"},s=Object(o["e"])("span",{style:{width:"50pt"}},"System:",-1),a=Object(o["e"])("option",{value:"dms"},"Deg°/Min'/Sec\"",-1),r=Object(o["e"])("option",{value:"deg"},"Deg°",-1),c=Object(o["e"])("option",{value:"lv95"},"LV95",-1),d={name:"coords_dms",class:"coord-form"},u=Object(o["e"])("td",null,"Latitude:",-1),h=Object(o["d"])("° "),m=Object(o["d"])("' "),b=Object(o["d"])('" '),p=Object(o["e"])("td",null,"Longitude:",-1),g=Object(o["d"])("° "),j=Object(o["d"])("' "),O=Object(o["d"])('" '),v={name:"coords_degrees",class:"coord-form"},f=Object(o["e"])("td",null,"Latitude:",-1),w=Object(o["d"])("° N "),x=Object(o["e"])("td",null,"Longitude:",-1),M=Object(o["d"])("° E "),_={name:"coords_lv95",class:"coord-form"},E=Object(o["e"])("td",null,"Latitude:",-1),N=Object(o["d"])(" meters North"),y=Object(o["e"])("td",null,"Longitude:",-1),L=Object(o["d"])(" meters East");Object(o["g"])();const k=l((t,e,n,l,k,U)=>(Object(o["f"])(),Object(o["c"])("div",i,[s,Object(o["e"])("select",{name:"input_format",onChange:e[1]||(e[1]=t=>U.onSelect(t.target.value))},[a,r,c],32),Object(o["m"])(Object(o["e"])("form",d,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[u,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>k.dms.lat.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["k"],k.dms.lat.deg]]),h,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>k.dms.lat.min=t),type:"number",step:"any",size:"3",class:"two-digit"},null,512),[[o["k"],k.dms.lat.min]]),m,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>k.dms.lat.sec=t),type:"number",step:"0.05",size:"5",class:"five-digit"},null,512),[[o["k"],k.dms.lat.sec]]),b])]),Object(o["e"])("tr",null,[p,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>k.dms.lon.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["k"],k.dms.lon.deg]]),g,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>k.dms.lon.min=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["k"],k.dms.lon.min]]),j,Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>k.dms.lon.sec=t),type:"number",step:"0.05",class:"five-digit"},null,512),[[o["k"],k.dms.lon.sec]]),O])])])],512),[[o["l"],k.dms.show]]),Object(o["m"])(Object(o["e"])("form",v,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[f,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>k.deg.lat=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["k"],k.deg.lat]]),w])]),Object(o["e"])("tr",null,[x,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>k.deg.lon=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["k"],k.deg.lon]]),M])])])],512),[[o["l"],k.deg.show]]),Object(o["m"])(Object(o["e"])("form",_,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[E,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[10]||(e[10]=t=>k.lv95.N=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["k"],k.lv95.N]]),N])]),Object(o["e"])("tr",null,[y,Object(o["e"])("td",null,[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[11]||(e[11]=t=>k.lv95.E=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["k"],k.lv95.E]]),L])])])],512),[[o["l"],k.lv95.show]])])));var U=n("ea67"),F={props:{coordinate:Object},data(){const[t,e]=Object(U["d"])(this.coordinate.lat,this.coordinate.lon);return{dms:{show:!0,lat:Object(U["a"])(this.coordinate.lat),lon:Object(U["a"])(this.coordinate.lon)},deg:{show:!1,lat:this.coordinate.lat,lon:this.coordinate.lon},lv95:{show:!1,N:t,E:e,nMin:Number.MIN_VALUE,nMax:Number.MAX_VALUE,eMin:Number.MIN_VALUE,eMax:Number.MAX_VALUE},coord:{lat:this.coordinate.lat,lon:this.coordinate.lon,latMin:Number.MIN_VALUE,latMax:Number.MAX_VALUE,lonMin:Number.MIN_VALUE,lonMax:Number.MAX_VALUE}}},methods:{setLatLon(t,e){this.deg.lat=t,this.deg.lon=e,this.dms.lat=Object(U["a"])(t),this.dms.lon=Object(U["a"])(e)},setLv95(t,e){this.lv95.N=t,this.lv95.E=e},onSelect(t){this.dms.show=!1,this.deg.show=!1,this.lv95.show=!1;const e=this.coord.lat,n=this.coord.lon;switch(t){case"dms":this.dms.lat=Object(U["a"])(e),this.dms.lon=Object(U["a"])(n);break;case"deg":[this.deg.lat,this.deg.lon]=[e,n];break;case"lv95":[this.lv95.N,this.lv95.E]=Object(U["d"])(e,n);break}this[t].show=!0}},emits:["coord-changed"],watch:{coordinate:{handler(){this.setLatLon(this.coordinate.lat,this.coordinate.lon)},deep:!0},coord:{handler(){const t=this.coord,e=Object(U["d"])(t.lat,t.lon),n={wgs:{lat:t.lat,lon:t.lon},lv95:{N:e[0],E:e[1]}};this.$root.$emit("coord-changed",n),this.$emit("coord-changed",n)},deep:!0},dms:{handler(){const t=this.dms;this.coord.lat=Object(U["b"])(parseFloat(t.lat.deg),parseFloat(t.lat.min),parseFloat(t.lat.sec)),this.coord.lon=Object(U["b"])(parseFloat(t.lon.deg),parseFloat(t.lon.min),parseFloat(t.lon.sec))},deep:!0},deg:{handler(){this.coord.lat=Object(U["b"])(parseFloat(this.deg.lat)),this.coord.lon=Object(U["b"])(parseFloat(this.deg.lon))},deep:!0},lv95:{handler(){[this.coord.lat,this.coord.lon]=Object(U["c"])(parseFloat(this.lv95.N),parseFloat(this.lv95.E))},deep:!0}}};n("9f7a");F.render=k,F.__scopeId="data-v-8eda959e";e["a"]=F},"7dcc":function(t,e,n){},"9f7a":function(t,e,n){"use strict";n("ccd3")},ccd3:function(t,e,n){},cf28:function(t,e,n){"use strict";n.r(e);var o=n("f2bf"),l=n("ea67");const i=Object(o["n"])("data-v-9507206e");Object(o["h"])("data-v-9507206e");const s={class:"bounds-forms"},a=Object(o["e"])("h3",null,"Min",-1),r=Object(o["e"])("h3",null,"Max",-1);Object(o["g"])();const c=i((t,e,n,l,i,c)=>{const d=Object(o["j"])("coords-form");return Object(o["f"])(),Object(o["c"])("div",s,[a,Object(o["e"])(d,{coordinate:n.min,onCoordChanged:c.onMin},null,8,["coordinate","onCoordChanged"]),r,Object(o["e"])(d,{coordinate:n.max,onCoordChanged:c.onMax},null,8,["coordinate","onCoordChanged"])])});var d=n("5110"),u={props:{min:Object,max:Object},components:{"coords-form":d["a"]},data(){return{bounds:{min:{wgs:{lat:null,lon:null},lv95:{N:null,E:null}},max:{wgs:{lat:null,lon:null},lv95:{N:null,E:null}}}}},methods:{onMin(t){null==this.bounds.max.wgs.lat&&(this.bounds.max.wgs.lat=this.max.lat,this.bounds.max.wgs.lon=this.max.lon,this.bounds.max.lv95.N=this.max.N,this.bounds.max.lv95.E=this.max.E),this.bounds.min.wgs.lat=t.wgs.lat,this.bounds.min.wgs.lon=t.wgs.lon,this.bounds.min.lv95.N=t.lv95.N,this.bounds.min.lv95.E=t.lv95.E,console.log("BoundsForm#onMin: "+this.bounds.min.wgs.lat,this.bounds),this.$emit("bounds-changed",this.bounds)},onMax(t){null==this.bounds.min.wgs.lat&&(this.bounds.min.wgs.lat=this.min.lat,this.bounds.min.wgs.lon=this.min.lon,this.bounds.min.lv95.N=this.min.N,this.bounds.min.lv95.E=this.min.E),this.bounds.max.wgs.lat=t.wgs.lat,this.bounds.max.wgs.lon=t.wgs.lon,this.bounds.max.lv95.N=t.lv95.N,this.bounds.max.lv95.E=t.lv95.E,console.log("BoundsForm#onMax: sending message",this.bounds),this.$emit("bounds-changed",this.bounds)}},emits:["bounds-changed"]};n("0fdf");u.render=c,u.__scopeId="data-v-9507206e";var h=u;const m=Object(o["e"])("h2",null,"ArchiCAD Project",-1),b=Object(o["d"])(" Initial project file "),p=Object(o["e"])("br",null,null,-1),g=Object(o["e"])("p",null,null,-1),j=Object(o["d"])("Preview: "),O={ref:"xmlDisplay"};function v(t,e,n,l,i,s){return Object(o["f"])(),Object(o["c"])(o["a"],null,[m,b,Object(o["e"])("button",{ref:"dlBtn",onClick:e[1]||(e[1]=(...t)=>s.onClick&&s.onClick(...t))},"Download",512),p,g,j,Object(o["e"])("div",O,null,512)],64)}let f=null;var w={props:{coordinate:Object,min:Object,max:Object,altitude:Number,northing:Number},data(){return{}},setup(){const t=Object(o["i"])(null),e=Object(o["i"])(null);return{dlBtn:t,xmlDisplay:e}},watch:{coordinate:{handler(){this.validateInput()},deep:!0},min:{handler(){this.validateInput()},deep:!0},max:{handler(){this.validateInput()},deep:!0},altitude:{handler(){this.validateInput()},deep:!0},northing:{handler(){this.validateInput()},deep:!0}},methods:{validateInput(){const t=Object(l["a"])(this.coordinate.lat),e=Object(l["a"])(this.coordinate.lon),n=`<?xml version="1.0" encoding="UTF-8"?>\n<ProjectLocation>\n  <Version val="1"/>\n  <LatitudeCoord deg="${t.deg}" min="${t.min}" sec="${t.sec.toFixed(5)}"/>\n  <LatitudeNorth val="${this.coordinate.N}"/>\n  <LongitudeCoord deg="${e.deg}" min="${e.min}" sec="${e.sec.toFixed(5)}"/>\n  <LongitudeEast val="${this.coordinate.E}"/>\n  <LongLatUnit val="11"/>\n  <TimeZoneHour val="1"/>\n  <TimeZoneMinute val="0"/>\n  <AltitudeMeter val="${this.altitude}"/>\n  <AltitudeUnit val="1"/>\n  <NorthDirection val="${this.northing}"/>\n  <NorthAngleUnit val="0"/>\n</ProjectLocation>`,o=Number.isFinite;if(!(o(t.deg)&&o(t.min)&&o(t.sec)&&o(e.deg)&&o(e.min)&&o(e.sec)))return console.log("Invalid coords: ",n),void(f=null);this.xmlDisplay.innerHTML="<pre>"+n.replaceAll("<","&lt;").replaceAll(">","&gt;")+"</pre>";const i=new Blob([n],{type:"text/xml;charset=utf-8"}),s=window.URL.createObjectURL(i);f=s},onClick(t){const e=document.createElement("a");e.href=f,e.target="_blank",e.download="project.xml",e.click()}}};w.render=v;var x=w;n("7dcc");let M,_,E,N;const y={lat:46.951082773,lng:7.438632421};[y.N,y.E]=Object(l["d"])(y.lat,y.lng);const L=o["b"]({components:{"coords-form":d["a"],"bounds-form":h,"project-tools":x},data(){return{coordinate:{lat:y.lat,lon:y.lng,N:y.N,E:y.E},min:{lat:0,lon:0,N:0,E:0},max:{lat:0,lon:0,N:0,E:0},pri_coordinate:{lat:y.lat,lon:y.lng,N:y.N,E:y.E},pri_min:{lat:0,lon:0,N:0,E:0},pri_max:{lat:0,lon:0,N:0,E:0},pri_altitude:0,pri_northing:0}},created(){M=this,window.comp=M},methods:{onCoordChanged(t){this.pri_coordinate.lat=t.wgs.lat,this.pri_coordinate.lon=t.wgs.lon,this.pri_coordinate.N=t.lv95.N,this.pri_coordinate.E=t.lv95.E,k(t.wgs.lat,t.wgs.lon)},onBounds(t){console.log(t),this.pri_min.lat=t.min.wgs.lat,this.pri_min.lon=t.min.wgs.lon,this.pri_min.N=t.min.lv95.N,this.pri_min.E=t.min.lv95.E,this.pri_max.lat=t.max.wgs.lat,this.pri_max.lon=t.max.wgs.lon,this.pri_max.N=t.max.lv95.N,this.pri_max.E=t.max.lv95.E;const e=[{lat:this.pri_min.lat,lng:this.pri_min.lon},{lat:this.pri_min.lat,lng:this.pri_max.lon},{lat:this.pri_max.lat,lng:this.pri_max.lon},{lat:this.pri_max.lat,lng:this.pri_min.lon},{lat:this.pri_min.lat,lng:this.pri_min.lon}];N&&N.setMap(null),N=new google.maps.Rectangle({paths:e,strokeColor:"#000000",strokeOpacity:1,strokeWeight:3,map:_,bounds:{north:this.pri_max.lat,south:this.pri_min.lat,east:this.pri_max.lon,west:this.pri_min.lon}}),N.setMap(_),console.log(_,N),console.log("main.js#onBounds message received",this.pri_min,this.pri_max)}}});function k(t,e){E&&_&&(E.setPosition(new google.maps.LatLng(t,e)),_.panTo(new google.maps.LatLng(t,e)))}L.mount("#app"),window.initMap=()=>{_=new google.maps.Map(document.getElementById("map"),{zoom:17,center:y}),E=new google.maps.Marker({position:y,map:_})}},ea67:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return b})),n.d(e,"c",(function(){return p}));const o=Math.PI,l=2*o,i=Math.sqrt,s=(Math.exp,Math.log,Math.sin),a=Math.cos,r=(Math.tan,Math.asin,Math.atan,1/360),c=1/360/60,d=1/360/3600;function u(t,e=0,n=0){return t+e/60+n/3600}function h(t,e=0,n=0){return l*(t*r+e*c+n*d)}function m(t){const e=Math.floor(t),n=t%1*60,o=Math.floor(n),l=n%1*60;return{deg:e,min:o,sec:l}}function b(t,e){const n=3600*t,o=3600*e,l=(n-169028.66)/1e4,i=(o-26782.5)/1e4,s=l*l,a=s*l,r=i*i,c=r*i,d=2600072.37+211455.93*i-10938.51*i*l-.36*i*s-44.54*c,u=1200147.07+308807.95*l+3745.25*r+76.63*s-194.56*r*l+119.79*a;return[parseFloat(u.toFixed(2))-.02,parseFloat(d.toFixed(2))+.02]}function p(t,e){const n=(e-26e5)/1e6,o=(t-12e5)/1e6,l=o,i=n,s=l*l,a=s*l,r=i*i,c=r*i,d=2.6779094+4.728982*i+.791484*i*l+.1306*i*s-.0436*c,u=16.9023892+3.238272*l-.270978*r-.002528*s-.0447*r*l-.014*a,h=100*d/36,m=100*u/36;return[m,h]}class g{constructor(t,e,n,o){this.semiMajor=t,this.semiMinor=e,this.flatteningInverse=this.semiMajor/(this.semiMajor-this.semiMinor);this.semiMajor,this.semiMajor,this.semiMinor,this.semiMinor;this.E2=.006674372230614,this.E=i(this.E2),this.φ0=n,this.λ0=o,this.R=this.radiusOfProjectionSphere(),this.α=1.00072913843038}radiusOfProjectionSphere(){return this.semiMajor*i(1-this.E2)/(1-this.E2*this.sin2(this.φ0))}"computeα"(){return i(1+this.E2/(1-this.E2)*this.cos4(this.φ0))}sin2(t){const e=s(t);return e*e}cos4(t){const e=a(t);return e*e*e*e}}class j extends g{constructor(t,e){super(6377397.155,6356078.962822,t,e)}}new j(h(46,57,8.66),h(7,26,22.5)),h(46,54,27.83324844)}});
//# sourceMappingURL=project.c279c63b.js.map