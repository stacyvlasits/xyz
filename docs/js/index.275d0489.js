(function(t){function e(e){for(var o,a,r=e[0],c=e[1],d=e[2],h=0,u=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={index:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/xyz/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("94bc")},"12bb":function(t,e,n){"use strict";n("2bad")},"2bad":function(t,e,n){},5110:function(t,e,n){"use strict";var o=n("f2bf");const i=Object(o["l"])("data-v-8eda959e");Object(o["g"])("data-v-8eda959e");const s={class:"coords-forms"},a=Object(o["d"])("span",{style:{width:"50pt"}},"System:",-1),r=Object(o["d"])("option",{value:"dms"},"Deg°/Min'/Sec\"",-1),c=Object(o["d"])("option",{value:"deg"},"Deg°",-1),d=Object(o["d"])("option",{value:"lv95"},"LV95",-1),l={name:"coords_dms",class:"coord-form"},h=Object(o["d"])("td",null,"Latitude:",-1),u=Object(o["c"])("° "),m=Object(o["c"])("' "),b=Object(o["c"])('" '),p=Object(o["d"])("td",null,"Longitude:",-1),w=Object(o["c"])("° "),j=Object(o["c"])("' "),O=Object(o["c"])('" '),f={name:"coords_degrees",class:"coord-form"},g=Object(o["d"])("td",null,"Latitude:",-1),y=Object(o["c"])("° N "),x=Object(o["d"])("td",null,"Longitude:",-1),v=Object(o["c"])("° E "),E={name:"coords_lv95",class:"coord-form"},M=Object(o["d"])("td",null,"Latitude:",-1),A=Object(o["c"])(" meters North"),N=Object(o["d"])("td",null,"Longitude:",-1),S=Object(o["c"])(" meters East");Object(o["f"])();const B=i((t,e,n,i,B,L)=>(Object(o["e"])(),Object(o["b"])("div",s,[a,Object(o["d"])("select",{name:"input_format",onChange:e[1]||(e[1]=t=>L.onSelect(t.target.value))},[r,c,d],32),Object(o["k"])(Object(o["d"])("form",l,[Object(o["d"])("table",null,[Object(o["d"])("tr",null,[h,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>B.dms.lat.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["i"],B.dms.lat.deg]]),u,Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>B.dms.lat.min=t),type:"number",step:"any",size:"3",class:"two-digit"},null,512),[[o["i"],B.dms.lat.min]]),m,Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>B.dms.lat.sec=t),type:"number",step:"0.05",size:"5",class:"five-digit"},null,512),[[o["i"],B.dms.lat.sec]]),b])]),Object(o["d"])("tr",null,[p,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>B.dms.lon.deg=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["i"],B.dms.lon.deg]]),w,Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>B.dms.lon.min=t),type:"number",step:"any",class:"two-digit"},null,512),[[o["i"],B.dms.lon.min]]),j,Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>B.dms.lon.sec=t),type:"number",step:"0.05",class:"five-digit"},null,512),[[o["i"],B.dms.lon.sec]]),O])])])],512),[[o["j"],B.dms.show]]),Object(o["k"])(Object(o["d"])("form",f,[Object(o["d"])("table",null,[Object(o["d"])("tr",null,[g,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>B.deg.lat=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["i"],B.deg.lat]]),y])]),Object(o["d"])("tr",null,[x,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>B.deg.lon=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["i"],B.deg.lon]]),v])])])],512),[[o["j"],B.deg.show]]),Object(o["k"])(Object(o["d"])("form",E,[Object(o["d"])("table",null,[Object(o["d"])("tr",null,[M,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[10]||(e[10]=t=>B.lv95.N=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["i"],B.lv95.N]]),A])]),Object(o["d"])("tr",null,[N,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[11]||(e[11]=t=>B.lv95.E=t),type:"number",step:"any",class:"ten-digit"},null,512),[[o["i"],B.lv95.E]]),S])])])],512),[[o["j"],B.lv95.show]])])));var L=n("ea67"),F={props:{coordinate:Object},data(){const[t,e]=Object(L["d"])(this.coordinate.lat,this.coordinate.lon);return{dms:{show:!0,lat:Object(L["a"])(this.coordinate.lat),lon:Object(L["a"])(this.coordinate.lon)},deg:{show:!1,lat:this.coordinate.lat,lon:this.coordinate.lon},lv95:{show:!1,N:t,E:e,nMin:Number.MIN_VALUE,nMax:Number.MAX_VALUE,eMin:Number.MIN_VALUE,eMax:Number.MAX_VALUE},coord:{lat:this.coordinate.lat,lon:this.coordinate.lon,latMin:Number.MIN_VALUE,latMax:Number.MAX_VALUE,lonMin:Number.MIN_VALUE,lonMax:Number.MAX_VALUE}}},methods:{setLatLon(t,e){this.deg.lat=t,this.deg.lon=e,this.dms.lat=Object(L["a"])(t),this.dms.lon=Object(L["a"])(e)},setLv95(t,e){this.lv95.N=t,this.lv95.E=e},onSelect(t){this.dms.show=!1,this.deg.show=!1,this.lv95.show=!1;const e=this.coord.lat,n=this.coord.lon;switch(t){case"dms":this.dms.lat=Object(L["a"])(e),this.dms.lon=Object(L["a"])(n);break;case"deg":[this.deg.lat,this.deg.lon]=[e,n];break;case"lv95":[this.lv95.N,this.lv95.E]=Object(L["d"])(e,n);break}this[t].show=!0}},emits:["coord-changed"],watch:{coordinate:{handler(){this.setLatLon(this.coordinate.lat,this.coordinate.lon)},deep:!0},coord:{handler(){const t=this.coord,e=Object(L["d"])(t.lat,t.lon),n={wgs:{lat:t.lat,lon:t.lon},lv95:{N:e[0],E:e[1]}};this.$root.$emit("coord-changed",n),this.$emit("coord-changed",n)},deep:!0},dms:{handler(){const t=this.dms;this.coord.lat=Object(L["b"])(parseFloat(t.lat.deg),parseFloat(t.lat.min),parseFloat(t.lat.sec)),this.coord.lon=Object(L["b"])(parseFloat(t.lon.deg),parseFloat(t.lon.min),parseFloat(t.lon.sec))},deep:!0},deg:{handler(){this.coord.lat=Object(L["b"])(parseFloat(this.deg.lat)),this.coord.lon=Object(L["b"])(parseFloat(this.deg.lon))},deep:!0},lv95:{handler(){[this.coord.lat,this.coord.lon]=Object(L["c"])(parseFloat(this.lv95.N),parseFloat(this.lv95.E))},deep:!0}}};n("9f7a");F.render=B,F.__scopeId="data-v-8eda959e";e["a"]=F},"7dcc":function(t,e,n){},"94bc":function(t,e,n){"use strict";n.r(e);var o=n("f2bf"),i=n("05a8"),s=n("6bdf"),a=n("b1d2");const r=Object(o["l"])("data-v-fb5d32d4");Object(o["g"])("data-v-fb5d32d4");const c={class:"coords-radius-form"},d=Object(o["d"])("td",null,"Radius:",-1),l=Object(o["c"])(" meters"),h=Object(o["d"])("a",{id:"dlbtn",class:"button",download:"extract.xyz"},"Download",-1);Object(o["f"])();const u=r((t,e,n,i,s,a)=>{const r=Object(o["h"])("coords-form");return Object(o["e"])(),Object(o["b"])("div",c,[Object(o["d"])(r,{coordinate:n.coordinate,onCoordChanged:a.onLVCoord},null,8,["coordinate","onCoordChanged"]),Object(o["d"])("form",null,[Object(o["d"])("table",null,[Object(o["d"])("tr",null,[d,Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>n.radius=t),type:"range",min:"0",max:"100",step:"0.5"},null,512),[[o["i"],n.radius]])]),Object(o["d"])("td",null,[Object(o["k"])(Object(o["d"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>n.radius=t),type:"number",step:"0.5"},null,512),[[o["i"],n.radius]]),l])])]),h])])});var m=n("5110"),b=n("ea67"),p={props:{coordinate:Object,radius:Number},components:{"coords-form":m["a"]},methods:{setLatLon(t,e){this.coordinate.lat=t,this.coordinate.lon=e,[this.coordinate.N,this.coordinate.E]=Object(b["d"])(t,e)},setLv95(t,e){this.coordinate.N=t,this.coordinate.E=e,[this.coordinate.lat,this.coordinate.lon]=Object(b["c"])(t,e)},setRadius(t){this.radius=t},onLVCoord(t){const e=this.coordinate;[e.lat,e.lon,e.N,e.E]=[t.wgs.lat,t.wgs.lon,t.lv95.N,t.lv95.E]}},watch:{coordinate:{handler(){this.$emit("coord-radius-change",{coordinate:this.coordinate,radius:parseFloat(this.radius)})},deep:!0},radius:{handler(){this.$emit("coord-radius-change",{coordinate:this.coordinate,radius:parseFloat(this.radius)})}}}};n("12bb");p.render=u,p.__scopeId="data-v-fb5d32d4";var w=p;class j{constructor(t,e){this.fileLoaderElt=t,this.fileLoaderElt.addEventListener("change",()=>{this.onFileSelected()},!1),this.loadCb=e}onFileSelected(){const t=this.fileLoaderElt.files[0],e=new FileReader;e.onload=t=>{const e=t.target.result,n=e.toString().split(",")[1],o=atob(n);this.loadCb(o)},e.readAsDataURL(t)}}class O{constructor(t,e,n,o){this.xyzObject=t,this.onZoomChangeCb=o;const i=e.min.x,s=e.min.y,a=e.max.x,r=e.max.y,c=a-i,d=r-s;Math.max(c,d);this.userSelection=null}processBounds(t,e){let n=!1;if(t.hasOwnProperty("Radius"))if(g(t.X)&&g(t.Y)&&Number.isFinite(t.Radius)&&t.Radius>0){parseFloat(t.X),parseFloat(t.Y);const o=parseFloat(t.Radius);this.userSelection={Xmin:t.X-o,Ymin:t.Y-o,Xmax:t.X+o,Ymax:t.Y+o},this.activateDownloadButton(e,t),n=!0}else this.deactivateDownloadButton(e);else g(t.Xmin)&&g(t.Ymin)&&f(t.Xmax,t.Xmin)&&f(t.Ymax,t.Ymin)?(this.userSelection=t,this.activateDownloadButton(e,t),n=!0):this.deactivateDownloadButton(e);n&&requestAnimationFrame(()=>{this.onZoomChangeCb(this.userSelection)})}activateDownloadButton(t,e){t.onclick=()=>{this.processBounds(e,t);const n=this.xyzObject.extractSectionAsXYZ(this.userSelection),o=new Blob([n],{type:"text/plain"}),i=window.URL.createObjectURL(o);t.href=i},t.setAttribute("href","")}deactivateDownloadButton(t){t.onclick=null,t.removeAttribute("href")}}function f(t,e){return void 0===e&&(e=0),Number.isFinite(t)&&t>e}function g(t,e){return void 0===e&&(e=0),Number.isFinite(t)&&t>=e}var y=n("5a89"),x=n("4721");class v{constructor(t){if(t.length<3||t.length%3!=0)throw new Error("Source array length must be mulitples of 3 and >= 3, but is: "+t.length);this.sourceArray=t}computeArrayShape(){const t=this.sourceArray,e=t.length/3;let n=t[1],o=e,i=1;for(let s=3;s<t.length;s+=3){const a=t[s+1];if(a!=n){o=s/3,i=e/o;break}}return[o,i]}fixupArray(t,e,n,o,i,s){const a=new Float32Array(3);t.splice(e,0,...a)}transferXYZ(t){const e=this.sourceArray;let n=e[1],o=0;for(let i=0;i<e.length&&i<t.length;i+=3){o++;const s=i,a=i+1,r=i+2,c=(e[s],e[a]);e[r];c!=n&&(o=0,n=c),t[s]=e[s],t[a]=e[a],t[r]=e[r]}}}class E extends y["p"]{constructor(t,e=!0){if(super(),this.origArr=[...t.attributes.position.array],this.srcArr=new v(this.origArr),isNaN(this.origArr[0]))throw console.log(this.origArr,this.srcArr),new Error("Bogus data in source geometry.. found NaNs");const n=new y["b"];t.computeBoundingBox(),n.copy(t.boundingBox),this.shape=e?M(this.srcArr.sourceArray,n):A(this.srcArr,n),this.add(this.shape)}extractSectionAsXYZ(t){const e=this.origArr,n=[`# ${new Date}, exported from XYZ tool`];for(let o=0;o<e.length;o+=3){const i=e[o],s=e[o+1],a=e[o+2];i<t.Xmin||s<t.Ymin||i>t.Xmax||s>t.Ymax||n.push(`${i} ${s} ${a}`)}return n.push(""),n.join("\n")}showSection(t,e,n,o){null==this.section&&(this.section=this.cutSection(t,e,n,o)),this.add(this.section)}}function M(t,e){const n=t.length/3,o=new Float32Array(t.length),i=new Float32Array(t.length),s=new Float32Array(n);for(let d=0;d<t.length;d+=3){const e=d,n=d+1,a=d+2;o[e]=t[e],o[n]=t[n],o[a]=t[a],i[n]=255,s[d/3]=1}const a=new y["e"];a.setAttribute("position",new y["d"](o,3)),a.setAttribute("size",new y["d"](s,1)),a.computeBoundingBox(),a.center();const r=new y["u"]({color:34816,sizeAttenuation:!1,size:1}),c=new y["t"](a,r);return c.sortParticles=!0,c.sourceBounds=e,c.viewBounds=a.boundingBox,c.rotateX(Math.PI/-2),c}function A(t,e){const[n,o]=t.computeArrayShape(),i=new y["r"](n,o,n-1,o-1),s=i.getAttribute("position"),a=s.array;t.transferXYZ(a),i.center(),i.computeBoundingBox(),i.computeFaceNormals(),i.computeVertexNormals();const r=new y["m"](i,new y["o"]({color:"green",side:y["g"],shininess:10,wireframe:!1}));return r.receiveShadow=!0,r.sourceBounds=e,r.viewBounds=i.boundingBox,r.rotateX(Math.PI/-2),r}const N=.3;class S extends y["w"]{constructor(t=document.querySelector("#view"),e=null){if(super(),!t)throw new Error("View container not found");this.container=t,this.animCb=e,this.width=t.innerWidth,this.height=t.innerHeight,this.camera=new y["q"](45,this.width/this.height,.1,1e10),this.camera.position.set(0,30,150),this.add(this.camera),this.add(new y["a"]);const n=6357e3,o=new y["m"](new y["x"](n,120,60),new y["o"]({flatShading:!1,wireframe:!0,color:11206570})),i=10;o.position.set(0,-n-i,0),o.rotateX(Math.PI/2),this.add(o),this.background=new y["f"](12571109);const a=new y["s"];a.castShadow=!0,a.intensity=N,a.shadow.camera.near=.5,a.shadow.camera.far=250,a.shadow.camera.width=256,a.shadow.camera.height=256,a.position.set(-50,1e6,-50),this.add(a),this.light=a;const r=a.clone();r.castShadow=!1,r.intensity=1-N,this.add(r),this.renderer=new y["C"]({antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.width,this.height),t.appendChild(this.renderer.domElement),this.controls=new x["a"](this.camera,this.renderer.domElement),this.fs=new s["a"](t,()=>{this.onWindowResize()}),this.onWindowResize(),window.addEventListener("resize",()=>{this.onWindowResize()}),this.animate(),document.view=this,this.zoomBox=null}displayXYZObject(t){this.xyzObj&&this.remove(this.xyzObj),this.add(t),this.xyzObj=t,this.light.target=t}focus(t){if(null==t)throw new Error("zoomBoundsIn null");const e={min:{x:t.Xmin,y:t.Ymin},max:{x:t.Xmax,y:t.Ymax}},n=this.xyzObj.children[0].sourceBounds,o=n.max.x-n.min.x,i=n.max.y-n.min.y,s=this.xyzObj.children[0].viewBounds,a=s.max.x-s.min.x,r=s.max.y-s.min.y,c=s.min.x,d=s.min.y,l=e.min.x,h=e.min.y,u=e.max.x-e.min.x,m=e.max.y-e.min.y,b=1,p=s.max.z-s.min.z+b,w=l-n.min.x,j=h-n.min.y,O=u/o*a,f=p,g=m/i*r,x=new y["c"](O,f,g);x.center();const v=new y["n"]({color:16777215,transparent:!0,opacity:N}),E=new y["m"](x,v);E.castShadow=!0,E.receiveShadow=!0;const M=E.clone();M.castShadow=!1,M.receiveShadow=!1,M.material=new y["n"]({color:13421823,transparent:!0,opacity:N,wireframe:!0}),E.add(M),this.zoomBox&&this.remove(this.zoomBox),this.add(this.zoomBox=E),E.position.x=c+w+O-O/2,E.position.z=-d-j-g+g/2,E.position.y-=b/2}animate(){this.controls.update(),this.renderer.render(this,this.camera),this.animCb&&this.animCb(this),requestAnimationFrame(()=>{this.animate()})}onWindowResize(){this.fs.isFullscreen()?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}}n("7dcc");let B;i["a"](),new s["a"](document.getElementById("view"));const L=new S;let F;const z=o["a"]({components:{"extract-tool":w},data(){return{coordinate:{lat:0,lon:0,N:0,E:0},radius:0}},created(){F=this,window.comp=F},methods:{setCoord(t,e,n){this.coordinate.N=t,this.coordinate.E=e,[this.coordinate.lat,this.coordinate.lon]=Object(b["c"])(t,e),this.radius=n,this.onCoordRadiusChange({coordinate:this.coordinate,radius:this.radius})},onCoordRadiusChange(t){const e=t.coordinate,n=t.radius,o={Xmin:e.E-n,Xmax:e.E+n,Ymin:e.N-n,Ymax:e.N+n};L.focus(o),B.processBounds(o,document.getElementById("dlbtn"))}},watch:{coord:{handler(){},deep:!0},radius:{handler(){},deep:!0}}});z.mount("#app");const X=t=>{const e=new E(t);L.displayXYZObject(e);const n=e.shape.sourceBounds;if(B=new O(e,e.shape.sourceBounds,e.shape.viewBounds,t=>{}),F){const t=n.min.y+(n.max.y-n.min.y)/2,e=n.min.x+(n.max.x-n.min.x)/2;F.setCoord(t,e,1)}},k=document.querySelector("select[name='sources']");k.addEventListener("change",()=>{(new a["a"]).load(k.value,X)}),(new a["a"]).load(k.value,X);const V=document.getElementById("fileLoader");new j(V,t=>{X((new a["a"]).parse(t))});function C(){location.hash.substr(1)}window.addEventListener("hashchange",C),C()},"9f7a":function(t,e,n){"use strict";n("ccd3")},ccd3:function(t,e,n){},ea67:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return b})),n.d(e,"c",(function(){return p}));const o=Math.PI,i=2*o,s=Math.sqrt,a=(Math.exp,Math.log,Math.sin),r=Math.cos,c=(Math.tan,Math.asin,Math.atan,1/360),d=1/360/60,l=1/360/3600;function h(t,e=0,n=0){return t+e/60+n/3600}function u(t,e=0,n=0){return i*(t*c+e*d+n*l)}function m(t){const e=Math.floor(t),n=t%1*60,o=Math.floor(n),i=n%1*60;return{deg:e,min:o,sec:i}}function b(t,e){const n=3600*t,o=3600*e,i=(n-169028.66)/1e4,s=(o-26782.5)/1e4,a=i*i,r=a*i,c=s*s,d=c*s,l=2600072.37+211455.93*s-10938.51*s*i-.36*s*a-44.54*d,h=1200147.07+308807.95*i+3745.25*c+76.63*a-194.56*c*i+119.79*r;return[parseFloat(h.toFixed(2))-.02,parseFloat(l.toFixed(2))+.02]}function p(t,e){const n=(e-26e5)/1e6,o=(t-12e5)/1e6,i=o,s=n,a=i*i,r=a*i,c=s*s,d=c*s,l=2.6779094+4.728982*s+.791484*s*i+.1306*s*a-.0436*d,h=16.9023892+3.238272*i-.270978*c-.002528*a-.0447*c*i-.014*r,u=100*l/36,m=100*h/36;return[m,u]}class w{constructor(t,e,n,o){this.semiMajor=t,this.semiMinor=e,this.flatteningInverse=this.semiMajor/(this.semiMajor-this.semiMinor);this.semiMajor,this.semiMajor,this.semiMinor,this.semiMinor;this.E2=.006674372230614,this.E=s(this.E2),this.φ0=n,this.λ0=o,this.R=this.radiusOfProjectionSphere(),this.α=1.00072913843038}radiusOfProjectionSphere(){return this.semiMajor*s(1-this.E2)/(1-this.E2*this.sin2(this.φ0))}"computeα"(){return s(1+this.E2/(1-this.E2)*this.cos4(this.φ0))}sin2(t){const e=a(t);return e*e}cos4(t){const e=r(t);return e*e*e*e}}class j extends w{constructor(t,e){super(6377397.155,6356078.962822,t,e)}}new j(u(46,57,8.66),u(7,26,22.5)),u(46,54,27.83324844)}});
//# sourceMappingURL=index.275d0489.js.map