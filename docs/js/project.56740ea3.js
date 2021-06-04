(function(t){function n(n){for(var o,a,r=n[0],c=n[1],s=n[2],d=0,u=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&u.push(l[a][0]),l[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(n);while(u.length)u.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,r=1;r<e.length;r++){var c=e[r];0!==l[c]&&(o=!1)}o&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var o={},l={project:0},i=[];function a(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=o,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/xyz/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var s=0;s<r.length;s++)n(r[s]);var p=c;i.push([1,"chunk-vendors","chunk-common"]),e()})({1:function(t,n,e){t.exports=e("cf28")},cf28:function(t,n,e){"use strict";e.r(n);var o=e("f2bf"),l=e("ea67"),i=e("3fd7"),a=e("5110");const r=Object(o["e"])("h2",null,"XYZ extract tool",-1),c=Object(o["d"])(" Visit: "),s=Object(o["e"])("br",null,null,-1),p=Object(o["e"])("h2",null,"ArchiCAD Project",-1),d=Object(o["d"])(" Initial project file "),u=Object(o["e"])("br",null,null,-1),m=Object(o["e"])("p",null,null,-1),h=Object(o["d"])("Preview: "),g={ref:"xmlDisplay"};function b(t,n,e,l,i,a){return Object(o["f"])(),Object(o["c"])(o["a"],null,[r,c,Object(o["e"])("a",{target:"_new",href:"http://localhost:8080/extract#lat="+e.coordinate.lat+"&lon="+e.coordinate.lon+"&min_lat="+e.min.lat+"&min_lon="+e.min.lon+"&max_lat="+e.max.lat+"&max_lon="+e.max.lon},"lat: "+Object(o["k"])(e.coordinate.lat)+" lon: "+Object(o["k"])(e.coordinate.lon)+" min: "+Object(o["k"])(e.min.lat)+" "+Object(o["k"])(e.min.lon)+" max: "+Object(o["k"])(e.max.lat)+" "+Object(o["k"])(e.max.lon),9,["href"]),s,p,d,Object(o["e"])("button",{ref:"dlBtn",onClick:n[1]||(n[1]=(...t)=>a.onClick&&a.onClick(...t))},"Download",512),u,m,h,Object(o["e"])("div",g,null,512)],64)}let f=null;var v={props:{coordinate:Object,min:Object,max:Object,altitude:Number,northing:Number},data(){return{}},setup(){const t=Object(o["i"])(null),n=Object(o["i"])(null);return{dlBtn:t,xmlDisplay:n}},watch:{coordinate:{handler(){this.validateInput()},deep:!0},min:{handler(){this.validateInput()},deep:!0},max:{handler(){this.validateInput()},deep:!0},altitude:{handler(){this.validateInput()},deep:!0},northing:{handler(){this.validateInput()},deep:!0}},methods:{validateInput(){const t=Object(l["a"])(this.coordinate.lat),n=Object(l["a"])(this.coordinate.lon),e=`<?xml version="1.0" encoding="UTF-8"?>\n<ProjectLocation>\n  <Version val="1"/>\n  <LatitudeCoord deg="${t.deg}" min="${t.min}" sec="${t.sec.toFixed(5)}"/>\n  <LatitudeNorth val="${this.coordinate.N}"/>\n  <LongitudeCoord deg="${n.deg}" min="${n.min}" sec="${n.sec.toFixed(5)}"/>\n  <LongitudeEast val="${this.coordinate.E}"/>\n  <LongLatUnit val="11"/>\n  <TimeZoneHour val="1"/>\n  <TimeZoneMinute val="0"/>\n  <AltitudeMeter val="${this.altitude}"/>\n  <AltitudeUnit val="1"/>\n  <NorthDirection val="${this.northing}"/>\n  <NorthAngleUnit val="0"/>\n</ProjectLocation>`,o=Number.isFinite;if(!(o(t.deg)&&o(t.min)&&o(t.sec)&&o(n.deg)&&o(n.min)&&o(n.sec)))return console.log("Invalid coords: ",e),void(f=null);this.xmlDisplay.innerHTML="<pre>"+e.replaceAll("<","&lt;").replaceAll(">","&gt;")+"</pre>";const i=new Blob([e],{type:"text/xml;charset=utf-8"}),a=window.URL.createObjectURL(i);f=a},onClick(t){const n=document.createElement("a");n.href=f,n.target="_blank",n.download="project.xml",n.click()}}};v.render=b;var j=v;e("7dcc");let _,x,O,w;const N={lat:46.951082773,lng:7.438632421};[N.N,N.E]=Object(l["d"])(N.lat,N.lng);const y=o["b"]({components:{"coords-form":a["a"],"bounds-form":i["a"],"project-tools":j},data(){return{coordinate:{lat:N.lat,lon:N.lng,N:N.N,E:N.E},min:{lat:N.lat,lon:N.lng,N:N.N,E:N.E},max:{lat:N.lat,lon:N.lng,N:N.N,E:N.E},pri_coordinate:{lat:N.lat,lon:N.lng,N:N.N,E:N.E},pri_min:{lat:N.lat,lon:N.lng,N:N.N,E:N.E},pri_max:{lat:N.lat,lon:N.lng,N:N.N,E:N.E},pri_altitude:0,pri_northing:0}},created(){_=this,window.comp=_},methods:{onCoordChanged(t){this.pri_coordinate.lat=t.wgs.lat,this.pri_coordinate.lon=t.wgs.lon,this.pri_coordinate.N=t.lv95.N,this.pri_coordinate.E=t.lv95.E,E(t.wgs.lat,t.wgs.lon)},onBounds(t){console.log(t),this.pri_min.lat=t.min.wgs.lat,this.pri_min.lon=t.min.wgs.lon,this.pri_min.N=t.min.lv95.N,this.pri_min.E=t.min.lv95.E,this.pri_max.lat=t.max.wgs.lat,this.pri_max.lon=t.max.wgs.lon,this.pri_max.N=t.max.lv95.N,this.pri_max.E=t.max.lv95.E;const n=[{lat:this.pri_min.lat,lng:this.pri_min.lon},{lat:this.pri_min.lat,lng:this.pri_max.lon},{lat:this.pri_max.lat,lng:this.pri_max.lon},{lat:this.pri_max.lat,lng:this.pri_min.lon},{lat:this.pri_min.lat,lng:this.pri_min.lon}];w&&w.setMap(null),w=new google.maps.Rectangle({paths:n,strokeColor:"#000000",strokeOpacity:1,strokeWeight:3,map:x,bounds:{north:this.pri_max.lat,south:this.pri_min.lat,east:this.pri_max.lon,west:this.pri_min.lon}}),w.setMap(x),console.log(x,w),console.log("main.js#onBounds message received",this.pri_min,this.pri_max)}}});function E(t,n){O&&x&&(O.setPosition(new google.maps.LatLng(t,n)),x.panTo(new google.maps.LatLng(t,n)))}y.mount("#app"),window.initMap=()=>{x=new google.maps.Map(document.getElementById("map"),{zoom:17,center:N}),O=new google.maps.Marker({position:N,map:x})}}});
//# sourceMappingURL=project.56740ea3.js.map