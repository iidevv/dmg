(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{265:function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"default",(function(){return c}));e(4);var o=e(41),r=e(83),a=e(268);function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}var c=function(n){var e,o;function c(){return n.apply(this,arguments)||this}o=n,(e=c).prototype=Object.create(o.prototype),e.prototype.constructor=e,i(e,o);var u=c.prototype;return u.onReady=function(){this.registerContactFormValidation()},u.registerContactFormValidation=function(){var n="form[data-contact-form]",e=Object(r.a)({submit:n+' input[type="submit"]'}),o=t(n);e.add([{selector:n+' input[name="contact_email"]',validate:function(t,n){t(a.a.email(n))},errorMessage:this.context.contactEmail},{selector:n+' textarea[name="contact_question"]',validate:function(t,n){t(a.a.notEmpty(n))},errorMessage:this.context.contactQuestion}]),o.on("submit",(function(t){e.performCheck(),e.areAll("valid")||t.preventDefault()}))},c}(o.a)}.call(this,e(0))},268:function(t,n,e){"use strict";n.a={email:function(t){return/^.+@.+\..+/.test(t)},password:function(t){return this.notEmpty(t)},notEmpty:function(t){return t.length>0}}}}]);
//# sourceMappingURL=theme-bundle.chunk.14.js.map