(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"080a":function(t,e,n){},"10d5":function(t,e,n){"use strict";n("7337")},"3fd7":function(t,e,n){"use strict";var o=n("f2bf");const s=Object(o["o"])("data-v-3e2e3ba0");Object(o["h"])("data-v-3e2e3ba0");const i={class:"bounds-forms"},a=Object(o["e"])("h3",null,"Min Coordindate",-1),l=Object(o["e"])("h3",null,"Max Coordindate",-1);Object(o["g"])();const c=s((t,e,n,s,c,d)=>{const r=Object(o["j"])("coords-form");return Object(o["f"])(),Object(o["c"])("div",i,[a,Object(o["e"])(r,{coordinate:n.min,onCoordChanged:d.onMin},null,8,["coordinate","onCoordChanged"]),l,Object(o["e"])(r,{coordinate:n.max,onCoordChanged:d.onMax},null,8,["coordinate","onCoordChanged"])])});var d=n("5110"),r=(n("ea67"),n("b03c")),u={props:{min:Object,max:Object},components:{"coords-form":d["a"]},data(){return{bounds:{min:{lat:null,lon:null},max:{lat:null,lon:null}}}},methods:{onMin(t){Object(r["b"])(t.lat,-360,360),Object(r["b"])(t.lon,-360,360),null==this.bounds.max.lat&&(this.bounds.max.lat=this.max.lat,this.bounds.max.lon=this.max.lon),this.bounds.min.lat=t.lat,this.bounds.min.lon=t.lon,this.$emit("bounds-changed",this.bounds)},onMax(t){Object(r["b"])(t.lat,-360,360),Object(r["b"])(t.lon,-360,360),null==this.bounds.min.lat&&(this.bounds.min.lat=this.min.lat,this.bounds.min.lon=this.min.lon),this.bounds.max.lat=t.lat,this.bounds.max.lon=t.lon,this.$emit("bounds-changed",this.bounds)}},emits:["bounds-changed"]};n("10d5");u.render=c,u.__scopeId="data-v-3e2e3ba0";e["a"]=u},5110:function(t,e,n){"use strict";var o=n("f2bf");const s=Object(o["o"])("data-v-5d136366");Object(o["h"])("data-v-5d136366");const i={class:"coords-forms"},a=Object(o["e"])("span",{style:{width:"50pt"}},"System:",-1),l={name:"coords_dms",class:"coord-form"},c=Object(o["e"])("td",null,"Latitude:",-1),d=Object(o["d"])("° "),r=Object(o["d"])("' "),u=Object(o["d"])('" '),h=Object(o["e"])("td",null,"Longitude:",-1),b=Object(o["d"])("° "),m=Object(o["d"])("' "),j=Object(o["d"])('" '),O={name:"coords_degrees",class:"coord-form"},p=Object(o["e"])("td",null,"Latitude:",-1),g=Object(o["d"])("° N "),f=Object(o["e"])("td",null,"Longitude:",-1),y=Object(o["d"])("° E "),v={name:"coords_lv95",class:"coord-form"},M=Object(o["e"])("td",null,"Latitude:",-1),C=Object(o["d"])(" meters North"),S=Object(o["e"])("td",null,"Longitude:",-1),w=Object(o["d"])(" meters East");Object(o["g"])();const _=s((t,e,n,s,_,E)=>(Object(o["f"])(),Object(o["c"])("div",i,[a,Object(o["e"])("select",{name:"input_format",onChange:e[1]||(e[1]=t=>E.onSelect(t.target.value))},[Object(o["e"])("option",{value:_.types.LV95},"LV95",8,["value"]),Object(o["e"])("option",{value:_.types.WGS84_DMS},"Deg°/Min'/Sec\"",8,["value"]),Object(o["e"])("option",{value:_.types.WGS84_DEG},"Deg°",8,["value"])],32),Object(o["n"])(Object(o["e"])("form",l,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[c,Object(o["e"])("td",null,[Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>_.dms.lat.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["l"],_.dms.lat.deg]]),d,Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>_.dms.lat.min=t),type:"number",step:"any",size:"3",class:"two-digit"},null,512),[[o["l"],_.dms.lat.min]]),r,Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>_.dms.lat.sec=t),type:"number",step:"0.05",size:"5",class:"five-digit"},null,512),[[o["l"],_.dms.lat.sec]]),u])]),Object(o["e"])("tr",null,[h,Object(o["e"])("td",null,[Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>_.dms.lon.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["l"],_.dms.lon.deg]]),b,Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>_.dms.lon.min=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["l"],_.dms.lon.min]]),m,Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>_.dms.lon.sec=t),type:"number",step:"0.05",class:"five-digit"},null,512),[[o["l"],_.dms.lon.sec]]),j])])])],512),[[o["m"],_.show==_.types.WGS84_DMS]]),Object(o["n"])(Object(o["e"])("form",O,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[p,Object(o["e"])("td",null,[Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>_.deg.lat=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["l"],_.deg.lat]]),g])]),Object(o["e"])("tr",null,[f,Object(o["e"])("td",null,[Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>_.deg.lon=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["l"],_.deg.lon]]),y])])])],512),[[o["m"],_.show==_.types.WGS84_DEG]]),Object(o["n"])(Object(o["e"])("form",v,[Object(o["e"])("table",null,[Object(o["e"])("tr",null,[M,Object(o["e"])("td",null,[Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[10]||(e[10]=t=>_.lv95.N=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["l"],_.lv95.N]]),C])]),Object(o["e"])("tr",null,[S,Object(o["e"])("td",null,[Object(o["n"])(Object(o["e"])("input",{"onUpdate:modelValue":e[11]||(e[11]=t=>_.lv95.E=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["l"],_.lv95.E]]),w])])])],512),[[o["m"],_.show==_.types.LV95]])])));var E=n("ea67"),V=n("b03c");function x(t){const e=parseFloat(t);return Number.isFinite(e)?e:0}function G(t,e){const n=t[e],o=x(n);if(0!=o)return o;t[e]="0"}var L={props:{coordinate:Object},data(){let t,e,n,o,s;if(this.originalCoordinate=this.coordinate,this.coordinate.system==E["a"].WGS84?([t,e,s]=[this.coordinate.lat,this.coordinate.lon,E["a"].WGS84],[n,o]=Object(E["e"])(t,e)):this.coordinate.system==E["a"].LV95?([t,e]=Object(E["d"])(this.coordinate.lat,this.coordinate.lon),s=E["a"].WGS84,[n,o]=[this.coordinate.lat,this.coordinate.lon],this.originalCoordinate=this.coordinate,this.originalCoordinate.system=E["a"].LV95):Object(V["a"])(E["a"].WGS84,this.coordinate.system,"Unknown coordinate system: ",this.coordinate.system),t>360||e>360||t<-360||e<-360)throw new Error("Coordinate not reified to WGS range [-360,360].");return{coord:{lat:t,lon:e},dms:{lat:Object(E["b"])(t),lon:Object(E["b"])(e)},deg:{lat:t,lon:e},lv95:{N:n,E:o},types:{WGS84_DMS:E["a"].WGS84+"-dms",WGS84_DEG:E["a"].WGS84+"-deg",LV95:E["a"].LV95},show:E["a"].LV95}},methods:{getCoord(){return this.originalCoordinate&&(this.coord.originalCoordinate=this.originalCoordinate),this.coord},onSelect(t){switch(t){case this.types.WGS84_DMS:[this.dms.lat,this.dms.lon]=[Object(E["b"])(this.coord.lat),Object(E["b"])(this.coord.lon)];break;case this.types.WGS84_DEG:[this.deg.lat,this.deg.lon]=[this.coord.lat,this.coord.lon];break;case this.types.LV95:this.originalCoordinate&&this.originalCoordinate.system==E["a"].LV95?[this.lv95.N,this.lv95.E]=[this.originalCoordinate.lat,this.originalCoordinate.lon]:[this.lv95.N,this.lv95.E]=Object(E["e"])(this.coord.lat,this.coord.lon);break;default:throw new Error("Invalid system in switch: "+t)}this.show=t}},emits:["coord-changed"],watch:{coord:{handler(){const t={lat:this.coord.lat,lon:this.coord.lon,system:E["a"].WGS84,originalCoordinate:this.originalCoordinate};this.$root.$emit("coord-changed",t),this.$emit("coord-changed",t)},deep:!0},dms:{handler(){const t=this.dms;this.coord.lat=Object(E["c"])(G(t.lat,"deg"),G(t.lat,"min"),G(t.lat,"sec")),this.coord.lon=Object(E["c"])(G(t.lon,"deg"),G(t.lon,"min"),G(t.lon,"sec")),this.originalCoordinate=null},deep:!0},deg:{handler(){this.coord.lat=Object(E["c"])(G(this.deg,"lat")),this.coord.lon=Object(E["c"])(G(this.deg,"lon")),this.originalCoordinate=null},deep:!0},lv95:{handler(){[this.coord.lat,this.coord.lon]=Object(E["d"])(G(this.lv95,"N"),G(this.lv95,"E")),this.originalCoordinate={lat:G(this.lv95,"N"),lon:G(this.lv95,"E"),system:E["a"].LV95}},deep:!0}}};n("9522");L.render=_,L.__scopeId="data-v-5d136366";e["a"]=L},7337:function(t,e,n){},"7dcc":function(t,e,n){},9522:function(t,e,n){"use strict";n("080a")},a911:function(t,e,n){"use strict";var o=n("72bf");const s=o["parse"](location.hash);let i=0,a=0,l=0,c=0,d=0,r=0;s&&(i=parseFloat(s.lat)||0,a=parseFloat(s.lon)||0,l=parseFloat(s.min_lat)||i,d=parseFloat(s.max_lat)||i,c=parseFloat(s.min_lon)||a,r=parseFloat(s.max_lon)||a);const u={lat:i,lon:a,min_lat:l,max_lat:d,min_lon:c,max_lon:r};if(""==location.hash){o["stringify"](u)}e["a"]=u},ea67:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return j})),n.d(e,"d",(function(){return O}));const o=Math.PI,s=2*o,i=Math.sqrt,a=(Math.exp,Math.log,Math.sin),l=Math.cos,c=(Math.tan,Math.asin,Math.atan,1/360),d=1/360/60,r=1/360/3600,u=Object.freeze({WGS84:"wgs84-system",LV95:"lv95-system"});function h(t,e=0,n=0){return t+e/60+n/3600}function b(t,e=0,n=0){return s*(t*c+e*d+n*r)}function m(t){const e=Math.floor(t),n=t%1*60,o=Math.floor(n),s=n%1*60;return{deg:e,min:o,sec:s}}function j(t,e){const n=3600*t,o=3600*e,s=(n-169028.66)/1e4,i=(o-26782.5)/1e4,a=s*s,l=a*s,c=i*i,d=c*i,r=2600072.37+211455.93*i-10938.51*i*s-.36*i*a-44.54*d,u=1200147.07+308807.95*s+3745.25*c+76.63*a-194.56*c*s+119.79*l;return[parseFloat(u.toFixed(2))-.02,parseFloat(r.toFixed(2))+.02]}function O(t,e){const n=(e-26e5)/1e6,o=(t-12e5)/1e6,s=o,i=n,a=s*s,l=a*s,c=i*i,d=c*i,r=2.6779094+4.728982*i+.791484*i*s+.1306*i*a-.0436*d,u=16.9023892+3.238272*s-.270978*c-.002528*a-.0447*c*s-.014*l,h=100*r/36,b=100*u/36;return[b,h]}class p{constructor(t,e,n,o){this.semiMajor=t,this.semiMinor=e,this.flatteningInverse=this.semiMajor/(this.semiMajor-this.semiMinor);this.semiMajor,this.semiMajor,this.semiMinor,this.semiMinor;this.E2=.006674372230614,this.E=i(this.E2),this.φ0=n,this.λ0=o,this.R=this.radiusOfProjectionSphere(),this.α=1.00072913843038}radiusOfProjectionSphere(){return this.semiMajor*i(1-this.E2)/(1-this.E2*this.sin2(this.φ0))}"computeα"(){return i(1+this.E2/(1-this.E2)*this.cos4(this.φ0))}sin2(t){const e=a(t);return e*e}cos4(t){const e=l(t);return e*e*e*e}}class g extends p{constructor(t,e){super(6377397.155,6356078.962822,t,e)}}new g(b(46,57,8.66),b(7,26,22.5)),b(46,54,27.83324844)}}]);
//# sourceMappingURL=chunk-common.bf8bc1a2.js.map