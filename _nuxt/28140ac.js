(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{338:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return c}));var n=r(47),o=r(74),h=(r(312),r(8),r(336),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(37),r(25),r(36),r(14),r(26),r(38),r(39),r(16),r(283));function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,h=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return h=t.done,t},e:function(t){l=!0,o=t},f:function(){try{h||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var c=function(){function t(e){var r=e.group,o=e.offset,h=e.scale,l=e.width,f=e.heightGenerators;Object(n.a)(this,t),this.group=r,this.offset=o,this.scale=h,this.width=l,this.heightGenerators=f,this.init()}return Object(o.a)(t,[{key:"init",value:function(){var t=new h.Ob(this.width*this.scale,0,this.width*this.scale);this.plane=new h.R(new h.jb(t.x,t.z,128,128),new h.Y({wireframe:!1,color:255,side:h.v})),this.plane.position.add(this.offset),this.plane.castShadow=!1,this.plane.receiveShadow=!0,this.group.add(this.plane),this.rebuild()}},{key:"rebuild",value:function(){var t=this.offset;console.log("rebuild terrain chunks");for(var e=this.plane.geometry.getAttribute("position"),r=new Float32Array(3*e.count),i=0;i<e.count;i+=1){var n,o=3*i,f=e.array[o+0],c=e.array[o+1],y=0,d=[],v=0,w=l(this.heightGenerators);try{for(w.s();!(n=w.n()).done;){var m=n.value;d.push(m.Get(f+t.x,c+t.y)),v+=d[d.length-1][1]}}catch(t){w.e(t)}finally{w.f()}if(v>0){var A,S=l(d);try{for(S.s();!(A=S.n()).done;){var j=A.value;y+=j[0]*j[1]/v}}catch(t){S.e(t)}finally{S.f()}}r[o+0]=f,r[o+1]=c,r[o+2]=y}var k=new h.i(r,3);this.plane.geometry.setAttribute("position",k),this.heightGenerators.length>1&&0===t.x&&t.y,this.plane.geometry.computeVertexNormals()}}]),t}()}}]);