(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{292:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(43),c=n(79),o=function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},352:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));n(104);var r=n(43),c=n(79),o=n(54),h=n(55),l=n(34),f=(n(27),n(291));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var x=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="Earth",t}return Object(c.a)(n,[{key:"init",value:function(){this.textures={galaxy:this.getSketch().getLoaders().textureLoader.load("./textures/earth/galaxy.png")},this.galaxyGeometry=new f.Db(80,64,64),this.galaxyMaterial=new f.S({map:this.textures.galaxy,side:f.e}),this.galaxyMesh=new f.R(this.galaxyGeometry,this.galaxyMaterial),this.getSketch().getScene().add(this.galaxyMesh)}},{key:"update",value:function(){this.galaxyMesh.rotation.y-=.002}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.galaxyMesh),this.galaxyGeometry.dispose(),this.galaxyMaterial.dispose(),this.textures.galaxy.dispose(),console.log("removed Galaxy")}}]),n}(n(292).a)}}]);