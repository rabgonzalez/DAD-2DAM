parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DEhP":[function(require,module,exports) {
module.exports="/DAD-2DAM/song1.2f429b9d.mp3";
},{}],"duI9":[function(require,module,exports) {
module.exports="/DAD-2DAM/song2.98aa624f.mp3";
},{}],"lBIj":[function(require,module,exports) {
module.exports="/DAD-2DAM/song3.a5aa4cbe.mp3";
},{}],"NLqZ":[function(require,module,exports) {
module.exports={song1:require("./song1.mp3"),song2:require("./song2.mp3"),song3:require("./song3.mp3")};
},{"./song1.mp3":"DEhP","./song2.mp3":"duI9","./song3.mp3":"lBIj"}],"sbrF":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r(n.key),n)}}function o(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(t){var o=n(t,"string");return"symbol"==e(o)?o:o+""}function n(t,o){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,o||"default");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.play_song=a;var u=exports.default=o(function e(t,o){i(this,e),this.nombre=document.querySelector(t),this.audio=new Audio(o)});function a(e){e.nombre.onclick=function(){e.audio.paused?(e.nombre.classList.add("playing"),e.audio.play()):(e.nombre.classList.remove("playing"),e.audio.pause())}}
},{}],"eDsD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./song.js"));function r(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(r=function(t){return t?n:e})(t)}function e(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=r(e);if(n&&n.has(t))return n.get(t);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&{}.hasOwnProperty.call(t,u)){var a=i?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=t[u]}return o.default=t,n&&n.set(t,o),o}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,r){return f(t)||l(t,r)||u(t,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,r){if(t){if("string"==typeof t)return a(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function l(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,a=[],l=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);l=!0);}catch(t){f=!0,o=t}finally{try{if(!l&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(f)throw o}}return a}}function f(t){if(Array.isArray(t))return t}function c(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function s(t,r,e){return r&&c(t.prototype,r),e&&c(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t){var r=p(t,"string");return"symbol"==n(r)?r:r+""}function p(t,r){if("object"!=n(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,r||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}function b(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var v=exports.default=s(function r(e){b(this,r),this.songs=[],Object.entries(e);for(var n=0,i=0,u=Object.entries(e);i<u.length;i++){var a=o(u[i],2),l=a[0],f=a[1];this.songs.push(new t.default(l,f)),(0,t.play_song)(this.songs[n]),n++}});
},{"./song.js":"sbrF"}],"QvaY":[function(require,module,exports) {
"use strict";var e=t(require("../assets/songs/*.mp3")),r=t(require("./player.js"));function t(e){return e&&e.__esModule?e:{default:e}}for(var a={},s=1,u=0,l=Object.keys(e.default);u<l.length;u++){var f=l[u];a[".item-"+s]=e.default[f],s++}var n=new r.default(a);
},{"../assets/songs/*.mp3":"NLqZ","./player.js":"eDsD"}]},{},["QvaY"], null)
//# sourceMappingURL=/DAD-2DAM/js.94a9206d.js.map