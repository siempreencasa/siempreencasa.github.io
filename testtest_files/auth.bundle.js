/*! honey-website v14.0.0 */
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[23],{1346:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,a=!1,s=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){a=!0,s=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw s}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=function(){var e=(O=i(regeneratorRuntime.mark((function e(r,t,n){var s,u,o,c,i,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(r,t);case 2:return s=e.sent,e.next=5,s.clone();case 5:return u=e.sent,e.next=8,u.json();case 8:if("object"!==(void 0===(o=e.sent)?"undefined":a(o))||!o.data||!o.data[n]){e.next=15;break}return c=o.data[n],i=c.accessToken,f=c.refreshToken,e.next=13,S.setAccessToken(A,i);case 13:return e.next=15,S.setRefreshToken(A,f);case 15:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e,this)}))),function(e,r,t){return O.apply(this,arguments)}),r=(T=i(regeneratorRuntime.mark((function e(r,t){var n,a,u,o,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({},t),e.next=3,(0,s.default)({tokenAudience:A,clientStorage:S,uri:r},{logger:m});case 3:return a=e.sent,u=a.accessToken,o=a.refreshToken,"string"==typeof u&&(n.headers=Object.assign({},t.headers,{authorization:"honey "+u})),c=JSON.parse(t.body),i=Object.assign({},c,{variables:{refreshToken:o}}),n.body=JSON.stringify(i),e.next=12,S.logout();case 12:return e.abrupt("return",d(r,n));case 13:case"end":return e.stop()}}),e,this)}))),function(e,r){return T.apply(this,arguments)}),t=(_=i(regeneratorRuntime.mark((function t(a,u){var c,i,p,h,b,v,y,w,_,T,O;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c={},"string"!=typeof u.body){t.next=9;break}t.prev=2,c=JSON.parse(u.body),t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(2),t.t0;case 9:if(i=c&&c.operationName&&" -> "+c.operationName||"",k?(0,o.default)(m,"debug","[SERVER]: making network request to",""+a+i):(0,o.default)(m,"debug","[CLIENT]: making network request to",""+a+i),p=Object.assign({},u),k){t.next=27;break}if(h=u.headers,!(b=c&&c.operationName)){t.next=21;break}if(!(v=Object.entries(f).find((function(e){var r=n(e,2);return r[0],r[1].includes(b)})))){t.next=19;break}return t.abrupt("return",e(a,u,v[0]));case 19:if(!Object.entries(l).some((function(e){var r=n(e,2);return r[0],r[1].includes(b)}))){t.next=21;break}return t.abrupt("return",r(a,u));case 21:return y=x||a,t.next=24,(0,s.default)({tokenAudience:A,clientStorage:S,uri:y},{logger:m});case 24:w=t.sent,"string"==typeof(_=w.accessToken)&&(p.headers=Object.assign({},h,{authorization:"honey "+_}));case 27:return t.next=29,d(a,p);case 29:if(T=t.sent,k){t.next=38;break}return t.next=33,T.clone();case 33:return O=t.sent,t.next=36,O.json();case 36:"InvalidCredentials"===t.sent.error&&"function"==typeof g&&g();case 38:return t.abrupt("return",T);case 39:case"end":return t.stop()}}),t,this,[[2,6]])}))),function(e,r){return _.apply(this,arguments)}),c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p=c.audience,g=c.loginRedirect,h=c.localStorage,b=c.getCookies,v=c.server,k=void 0!==v&&v,y=c.customRefreshUri,x=void 0===y?"":y,m=c.logger,w=c.fetchOverride;var _;var T;var O;w&&(d=w);if(!k&&("object"!==(void 0===h?"undefined":a(h))||"function"!=typeof h.get||"function"!=typeof h.set||"function"!=typeof h.del))throw new Error("InvalidParameters: missing localStorage object with get, set and del methods in authClient configs");b&&(0,o.default)(m,"warn",'The "getCookies" option for authClient is deprecated and can be safely removed.');var A=p||"d.joinhoney.com",S=(0,u.default)(h,{logger:m});return t.getAccessToken=function(e){var r=e.dataApi3Url;return(0,s.default)({tokenAudience:A,clientStorage:S,uri:r},{logger:m}).then((function(e){return e.accessToken}))},t},t(1347);var s=c(t(1348)),u=c(t(1351)),o=c(t(606));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(){var r=e.apply(this,arguments);return new Promise((function(e,t){return function n(a,s){try{var u=r[a](s),o=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(o)}("next")}))}}var f={logUserInApple:["users_logUserInApple"],logUserInEmail:["users_logUserInEmail"],logUserInFacebook:["users_logUserInFacebook"],logUserInGoogle:["users_logUserInGoogle"],logUserInPayPal:["users_logUserInPayPal"],registerUserApple:["users_registerUserApple"],registerUserEmail:["users_registerUserEmail"],registerUserFacebook:["users_registerUserFacebook"],registerUserGoogle:["users_registerUserGoogle"],registerUserPayPal:["users_registerUserPayPal"]},l={logUserOut:["users_logUserOut"]},d=fetch.bind()},1348:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=u(t(21)),a=u(t(682)),s=u(t(606));function u(e){return e&&e.__esModule?e:{default:e}}var o,c,i=null,f=null,l={accessToken:null,refreshToken:null};r.default=(o=regeneratorRuntime.mark((function e(r){var t,u,o,c,d,p,g,h=r.tokenAudience,b=r.clientStorage,v=r.uri,k=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=k.logger,u=(0,n.default)().unix(),e.next=4,b.getAccessToken(h);case 4:return i=e.sent,e.next=7,b.getRefreshToken(h,{logger:t});case 7:if(f=e.sent,"string"!=typeof i||3!==i.split(".").length){e.next=35;break}o=null,e.prev=10,o=(0,a.default)(i),e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(10),(0,s.default)(t,"warn","error decoding access token"),e.abrupt("return",l);case 18:if("access"===o.type){e.next=23;break}return(0,s.default)(t,"warn","accessToken type mismatch"),e.next=22,b.logout();case 22:return e.abrupt("return",l);case 23:if("auth.joinhoney.com"===o.iss){e.next=28;break}return(0,s.default)(t,"warn","accessToken iss mismatch"),e.next=27,b.logout();case 27:return e.abrupt("return",l);case 28:if(o.aud===h){e.next=33;break}return(0,s.default)(t,"warn","accessToken audience mismatch"),e.next=32,b.logout();case 32:return e.abrupt("return",l);case 33:if(!(o.exp>u)){e.next=35;break}return e.abrupt("return",{accessToken:i,refreshToken:f});case 35:if("string"!=typeof f||3!==f.split(".").length){e.next=85;break}c=null,e.prev=37,c=(0,a.default)(f),e.next=45;break;case 41:return e.prev=41,e.t1=e.catch(37),(0,s.default)(t,"warn","error decoding refresh token"),e.abrupt("return",l);case 45:if(!(null!=c.exp&&c.exp<u)){e.next=50;break}return(0,s.default)(t,"warn","refresh token expired"),e.next=49,b.logout();case 49:return e.abrupt("return",l);case 50:if("refresh"===c.type){e.next=55;break}return(0,s.default)(t,"warn","refreshToken type mismatch"),e.next=54,b.logout();case 54:return e.abrupt("return",l);case 55:if("auth.joinhoney.com"===c.iss){e.next=60;break}return(0,s.default)(t,"warn","refreshToken iss mismatch"),e.next=59,b.logout();case 59:return e.abrupt("return",l);case 60:if(c.aud===h){e.next=65;break}return(0,s.default)(t,"warn","refreshToken audience mismatch"),e.next=64,b.logout();case 64:return e.abrupt("return",l);case 65:return e.prev=65,e.next=68,fetch(v,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({operationName:"refreshUserAccessToken",variables:{token:f}})});case 68:return d=e.sent,e.next=71,d.json();case 71:if(!(p=e.sent)||!p.data||"string"!=typeof p.data.refreshUserAccessToken){e.next=77;break}return g=p.data.refreshUserAccessToken,e.next=76,b.setAccessToken(h,g);case 76:return e.abrupt("return",{accessToken:g,refreshToken:f});case 77:e.next=85;break;case 79:return e.prev=79,e.t2=e.catch(65),(0,s.default)(t,"warn","error refreshing tokens"),e.next=84,b.logout();case 84:return e.abrupt("return",l);case 85:return e.next=87,b.logout();case 87:return e.abrupt("return",l);case 88:case"end":return e.stop()}}),e,this,[[10,14],[37,41],[65,79]])})),c=function(){var e=o.apply(this,arguments);return new Promise((function(r,t){return function n(a,s){try{var u=e[a](s),o=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));r(o)}("next")}))},function(e){return c.apply(this,arguments)})},1351:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.logger;return{getRefreshToken:function(r){var n=this;return o(regeneratorRuntime.mark((function s(){var u,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.get("honey-refresh-audiences");case 3:if(u=n.sent){n.next=6;break}return n.abrupt("return",null);case 6:return o=JSON.parse(u),n.abrupt("return",o[r]);case 10:return n.prev=10,n.t0=n.catch(0),(0,a.default)(t,"warn","Error getting or decoding honey-refresh-audiences"),n.abrupt("return",null);case 14:case"end":return n.stop()}}),s,n,[[0,10]])})))()},setRefreshToken:function(r,t){var n=this;return o(regeneratorRuntime.mark((function a(){var s,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.get("honey-refresh-audiences");case 3:return s=n.sent,(o=JSON.parse(s))[r]=t,n.abrupt("return",e.set("honey-refresh-audiences",JSON.stringify(o)));case 9:return n.prev=9,n.t0=n.catch(0),c=u({},r,t),n.abrupt("return",e.set("honey-refresh-audiences",JSON.stringify(c)));case 13:case"end":return n.stop()}}),a,n,[[0,9]])})))()},getAccessToken:function(r){var s=this;return o(regeneratorRuntime.mark((function u(){var o,c,i;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if("string"!=typeof(o=n.default.getAccessToken(r))){s.next=3;break}return s.abrupt("return",o);case 3:return s.prev=3,s.next=6,e.get("honey-access-audiences");case 6:if(c=s.sent){s.next=9;break}return s.abrupt("return",null);case 9:return i=JSON.parse(c),s.abrupt("return",i[r]);case 13:return s.prev=13,s.t0=s.catch(3),(0,a.default)(t,"warn","Error getting or decoding honey-access-audiences"),s.abrupt("return",null);case 17:case"end":return s.stop()}}),u,s,[[3,13]])})))()},setAccessToken:function(r,t){var a=this;return o(regeneratorRuntime.mark((function s(){var o,c,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.default.setAccessToken(r,t),a.prev=1,a.next=4,e.get("honey-access-audiences");case 4:return o=a.sent,(c=JSON.parse(o))[r]=t,a.abrupt("return",e.set("honey-access-audiences",JSON.stringify(c)));case 10:return a.prev=10,a.t0=a.catch(1),i=u({},r,t),a.abrupt("return",e.set("honey-access-audiences",JSON.stringify(i)));case 14:case"end":return a.stop()}}),s,a,[[1,10]])})))()},logout:function(){var r=this;return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.default.logout(),r.next=3,e.del("honey-refresh-audiences");case 3:return r.next=5,e.del("honey-access-audiences");case 5:case"end":return r.stop()}}),t,r)})))()}}};var n=s(t(1352)),a=s(t(606));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e){return function(){var r=e.apply(this,arguments);return new Promise((function(e,t){return function n(a,s){try{var u=r[a](s),o=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(o)}("next")}))}}},1352:function(e,r,t){"use strict";var n={};e.exports={getAccessToken:function(e){return n[e]},setAccessToken:function(e,r){n[e]=r},logout:function(){n={}}}},388:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t(1149);var n,a=t(1346),s=(n=a)&&n.__esModule?n:{default:n};r.default=s.default},606:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){if(!e)return;for(var t=arguments.length,n=Array(t>2?t-2:0),a=2;a<t;a++)n[a-2]=arguments[a];n&&n.unshift("[authentication-client]"),e[r]&&e[r].apply(e,n)}}}]);