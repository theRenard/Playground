(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{274:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},275:function(t,e,n){var o=n(2),r=n(28),c=n(70),f=n(7),l=n(10),d=n(56),y=n(280),h=n(4),m=r("Reflect","construct"),v=h((function(){function t(){}return!(m((function(){}),[],t)instanceof t)})),w=!h((function(){m((function(){}))})),P=v||w;o({target:"Reflect",stat:!0,forced:P,sham:P},{construct:function(t,e){c(t),f(e);var n=arguments.length<3?t:c(arguments[2]);if(w&&!v)return m(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(y.apply(t,o))}var r=n.prototype,h=d(l(r)?r:Object.prototype),P=Function.apply.call(t,h,e);return l(P)?P:h}})},276:function(t,e,n){"use strict";function o(t,p){return(o=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},277:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(279),r=n.n(o);function c(t,e){if(e&&("object"===r()(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}},278:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(130),r=n(131),c=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},279:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},280:function(t,e,n){"use strict";var o=n(70),r=n(10),c=[].slice,f={},l=function(t,e,n){if(!(e in f)){for(var o=[],i=0;i<e;i++)o[i]="a["+i+"]";f[e]=Function("C,a","return new C("+o.join(",")+")")}return f[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=c.call(arguments,1),f=function(){var o=n.concat(c.call(arguments));return this instanceof f?l(e,o.length,o):e.apply(t,o)};return r(e.prototype)&&(f.prototype=e.prototype),f}},359:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));n(275);var o=n(130),r=n(131),c=n(276),f=n(277),l=n(274),d=(n(24),n(287),n(8),n(311),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(273)),y=n(278);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="Fireflies",t}return Object(r.a)(n,[{key:"init",value:function(){this.firefliesGeometry=new d.j;for(var t=new Float32Array(90),e=new Float32Array(30),i=0;i<30;i+=1){var n=Math.random()*Math.PI*2,o=Math.random()*(2.8-1.5)+1.5,r=2.8-o+.2;t[3*i+0]=Math.cos(n)*r-1,t[3*i+1]=o,t[3*i+2]=0+Math.sin(n)*r,e[i]=.5*Math.random()+.1}this.firefliesGeometry.setAttribute("position",new d.i(t,3)),this.firefliesGeometry.setAttribute("aScale",new d.i(e,1)),this.firefliesMaterial=new d.zb({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:20}},vertexShader:"uniform float uTime;\nuniform float uPixelRatio;\nuniform float uSize;\n\nattribute float aScale;\n\nvoid main()\n{\n\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    float scale = cos(uTime * modelPosition.y * modelPosition.x) * aScale;\n    modelPosition.x += cos(uTime * (1.0 / aScale) / 2.0 + modelPosition.x * 100.0) * aScale * 0.2;\n    modelPosition.y += sin(uTime * (1.0 / aScale) / 2.0 + modelPosition.y * 100.0) * aScale * 0.3;\n    modelPosition.z += sin(uTime * (1.0 / aScale) / 2.0 + modelPosition.z * 100.0) * aScale * 0.2;\n\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectionPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectionPosition;\n\n    gl_PointSize = uSize * scale * uPixelRatio;\n    gl_PointSize *= (1.0 / - viewPosition.z);\n}",fragmentShader:"void main()\n{\n    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n    float strength = 0.05 / distanceToCenter - 0.1;\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, strength);\n}",transparent:!0,blending:d.a,depthWrite:!1}),this.getSketch().getGui().add(this.firefliesMaterial.uniforms.uSize,"value").min(0).max(500).step(1).name("firefliesSize");var c=new d.mb(this.firefliesGeometry,this.firefliesMaterial);this.getSketch().getScene().add(c)}},{key:"update",value:function(t){this.firefliesMaterial.uniforms.uTime.value=t}},{key:"destroy",value:function(){this.firefliesGeometry.dispose(),this.firefliesMaterial.dispose()}}]),n}(y.a)}}]);