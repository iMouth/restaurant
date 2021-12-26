(()=>{"use strict";var e={98:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"#contact {\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n}\n\niframe {\n  height: 60vh;\n  width: 50vw;\n  outline: black solid 1px;\n  border: 0;\n}\n\n#site-info {\n  text-align: center;\n  margin-left: 100px;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: aliceblue;\n}\n\n#site-info p {\n  font-size: 1.2rem;\n}\n\n@media all and (max-width: 1024px) {\n  #contact {\n    flex-direction: column-reverse;\n    margin: 0;\n    gap: 5rem;\n  }\n\n  #site-info {\n    margin: auto;\n    padding: 0;\n    width: 90%;\n  }\n\n  iframe {\n    width: 90%;\n    margin: auto;\n  }\n}\n",""]);const c=i},850:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,'body {\n  background-color: rgb(255, 223, 0);\n}\n\n#content {\n  font-family: "Patrick Hand", cursive;\n  caret-color: transparent;\n}\n\n#header-main {\n  -webkit-text-stroke: 0;\n  color: black;\n  display: flex;\n  flex-direction: row;\n  font-size: 30px;\n  padding: 5px;\n}\n\n.title {\n  margin-left: 40px;\n}\n\n.user {\n  margin-left: auto;\n  list-style: none;\n}\n\n.user li {\n  float: left;\n  padding: 0 10px;\n  border-bottom: 2px solid transparent;\n}\n\n.user li:hover {\n  border-bottom: 2px solid orange;\n  transform: translateY(-2px);\n  cursor: pointer;\n}\n\n.user:last-child {\n  margin-right: 50px;\n}\n\n@media all and (max-width: 550px) {\n  #header-main {\n    justify-content: space-between;\n    padding-bottom: 2rem;\n  }\n\n  .title {\n    margin: 0;\n    margin: auto 0;\n  }\n\n  .user {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .user:last-child {\n    margin: 0;\n  }\n}\n',""]);const c=i},832:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"#pic-slogan {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 100px;\n}\n\n.berry {\n  margin: 0 30px;\n  width: auto;\n  height: 35rem;\n  filter: drop-shadow(2px 2px 0 black) drop-shadow(-2px 2px 0 black)\n    drop-shadow(2px -2px 0 black) drop-shadow(-2px -2px 0 black);\n}\n\n.slogan {\n  font-size: 5rem;\n  text-align: center;\n}\n\n.slogan p:nth-child(2) {\n  background-color: black;\n  color: orange;\n}\n\n@media all and (min-width: 300px) and (max-width: 500px) {\n  #pic-slogan {\n    margin: 0;\n    gap: 1.5rem;\n  }\n  .berry {\n    margin: 0;\n    height: 15rem;\n    width: auto;\n  }\n\n  .slogan {\n    font-size: 2rem;\n  }\n}\n",""]);const c=i},424:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"#menu {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  text-align: center;\n}\n\n#menu div {\n  display: flex;\n  flex-basis: 33.33%;\n  flex-direction: column;\n}\n\n#menu div img {\n  align-self: center;\n  height: auto;\n  width: 400px;\n}\n\n#menu div h1 {\n  background-color: aliceblue;\n  width: 300px;\n  align-self: center;\n}\n\n#menu div h2 {\n  align-self: center;\n  max-width: 300px;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);a&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var l=e[c],d=a.base?l[0]+a.base:l[0],s=o[d]||0,u="".concat(d," ").concat(s);o[d]=s+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,a);a.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var l=a(e,r),d=0;d<o.length;d++){var s=t(o[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),l=t.n(c),d=t(216),s=t.n(d),u=t(589),p=t.n(u),m=t(832),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(424),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=s(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var b=t(98),x={};x.styleTagTransform=p(),x.setAttributes=l(),x.insert=i().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=s(),n()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals;var v=t(850),y={};function w(e,n,t){let a=document.createElement("li");a.setAttribute("id",n),a.textContent=e,t.appendChild(a)}function A(){let e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","pic-slogan"),n.setAttribute("class","screen"),function(e){let n=document.createElement("img");n.setAttribute("src","img/berry.png"),n.setAttribute("alt","Açaí berries"),n.setAttribute("class","berry"),e.appendChild(n)}(n),function(e){let n=document.createElement("div");n.setAttribute("class","slogan"),C("Choose",n),C("Your",n),C("Blend",n),e.appendChild(n)}(n),e.appendChild(n)}function C(e,n){let t=document.createElement("p");t.textContent=e,n.appendChild(t)}function E(e,n,t,a,r){let o=document.createElement("div"),i=document.createElement("img");i.setAttribute("src",n),i.setAttribute("alt",t),o.appendChild(i);let c=document.createElement("h1");c.textContent=a,o.appendChild(c);let l=document.createElement("h2");l.textContent=r,o.appendChild(l),e.appendChild(o)}function T(){document.getElementsByClassName("screen")[0].remove()}y.styleTagTransform=p(),y.setAttributes=l(),y.insert=i().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=s(),n()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,function(){let e=document.getElementById("content"),n=document.createElement("header");n.setAttribute("id","header-main"),function(e){let n=document.createElement("p");n.setAttribute("class","title"),n.textContent="Açaí Bowls",e.appendChild(n)}(n),function(e){let n=document.createElement("ul");n.setAttribute("class","user",n),w("Home","home-user",n),w("Menu","menu-user",n),w("Contact","contact-user",n),e.appendChild(n)}(n),e.appendChild(n)}(),A(),document.getElementById("home-user").addEventListener("click",(function(){T(),A()})),document.getElementById("menu-user").addEventListener("click",(function(){T(),function(){let e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","menu"),n.setAttribute("class","screen"),function(e){E(e,"img/awaken.png","awaken Acai bow","AWAKEN BOWL","Topped With: granola, raspberry, golden raisin, almond, lemon zest and honey")}(n),function(e){E(e,"img/brazillian.png","brazillian Acai bow","BRAZILLIAN BOWL","Topped With: granola, mango, strawberry, kiwi and honey")}(n),function(e){E(e,"img/sedona.png","sedona Acai bow","SEDONA BOWL","Topped With: granola, strawberry, banana and honey")}(n),function(e){E(e,"img/volcano.png","volcano Acai bow","VOLCANO BOWL","Topped With: granola, kiwi, strawberry, blueberry, and coconut oil")}(n),function(e){E(e,"img/cleanse.png","cleanse Acai bow","CLEANSE BOWL","Topped With: granola, strawberry, pineapple, banana, lemon zest and coconut oil")}(n),function(e){E(e,"img/maui-waui.png","maui waui Acai bow","MAUI WAUI BOWL","Topped With: granola, pineapple, toasted coconut, cashew, cacaonibs, bee pollen and honey")}(n),function(e){E(e,"img/vortex.png","vortex Acai bow","VORTEX BOWL","Topped With: granola, blueberry, banana, chia and flax seed, toasted coconut and honey")}(n),function(e){E(e,"img/red-rock.png","red rock Acai bow","RED ROCK BOWL","Topped With: granola, raspberry, banana, goji berry and raspberry puree")}(n),function(e){E(e,"img/summit.png","summit Acai bow","SUMMIT BOWL","Topped With: strawberries, shaved chocolate, cashews, granola, and honey")}(n),e.appendChild(n)}()})),document.getElementById("contact-user").addEventListener("click",(function(){T(),function(){let e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","contact"),n.setAttribute("class","screen"),function(e){let n=document.createElement("iframe");n.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13499.201594887732!2d-110.9428758!3d32.2365405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfdf75f501ab267!2sBerry%20Divine%20Acai%20Bowls!5e0!3m2!1sen!2sus!4v1640251110948!5m2!1sen!2sus"),n.setAttribute("loading","lazy"),e.appendChild(n)}(n);let t=document.createElement("div");t.setAttribute("id","site-info"),function(e){let n=document.createElement("div");n.setAttribute("id","location");let t=document.createElement("h1");t.textContent="Location",n.appendChild(t);let a=document.createElement("p");a.textContent="1927 E Speedway Blvd Suite 109",n.appendChild(a);let r=document.createElement("p");r.textContent="Tucson, AZ 85719",n.appendChild(r),e.appendChild(n)}(t),function(e){let n=document.createElement("div");n.setAttribute("id","hours");let t=document.createElement("h1");t.textContent="Hours",n.appendChild(t);let a=document.createElement("p");a.textContent="Monday - Thursday | 8:00AM - 9:00PM",n.appendChild(a);let r=document.createElement("p");r.textContent="Friday - Sunday | 7:30AM - 10:00PM",n.appendChild(r),e.appendChild(n)}(t),function(e){let n=document.createElement("div");n.setAttribute("id","contact-info");let t=document.createElement("h1");t.textContent="Contact Us",n.appendChild(t);let a=document.createElement("p");a.textContent="Email | acaibowls@gmail.com",n.appendChild(a);let r=document.createElement("p");r.textContent="Phone | 520-000-0000",n.appendChild(r),e.appendChild(n)}(t),n.appendChild(t),e.appendChild(n)}()}))})()})();