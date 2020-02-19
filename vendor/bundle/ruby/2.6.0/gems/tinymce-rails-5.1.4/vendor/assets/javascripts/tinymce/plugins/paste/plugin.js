/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.4 (2019-12-11)
 */
!function(f){"use strict";function t(){}function i(t){return function(){return t}}function e(){return v}var n,d=function(t){function e(){return n}var n=t;return{get:e,set:function(t){n=t},clone:function(){return d(e())}}},r=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(t){return!(!/(^|[ ,])powerpaste([, ]|$)/.test(t.settings.plugins)||!r.get("powerpaste"))&&("undefined"!=typeof f.window.console&&f.window.console.log&&f.window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0)},a=function(t,e){return{clipboard:t,quirks:e}},s=function(t,e,n,r){return t.fire("PastePreProcess",{content:e,internal:n,wordContent:r})},c=function(t,e,n,r){return t.fire("PastePostProcess",{node:e,internal:n,wordContent:r})},o=function(t,e){return t.fire("PastePlainTextToggle",{state:e})},m=function(t,e){return t.fire("paste",{ieFake:e})},l=function(t,e){"text"===e.pasteFormat.get()?(e.pasteFormat.set("html"),o(t,!1)):(e.pasteFormat.set("text"),o(t,!0)),t.focus()},p=function(t,n){t.addCommand("mceTogglePlainTextPaste",function(){l(t,n)}),t.addCommand("mceInsertClipboardContent",function(t,e){e.content&&n.pasteHtml(e.content,e.internal),e.text&&n.pasteText(e.text)})},g=i(!1),h=i(!0),v=(n={fold:function(t,e){return t()},is:g,isSome:g,isNone:h,getOr:w,getOrThunk:b,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(undefined),or:w,orThunk:b,map:e,each:t,bind:e,exists:g,forall:h,filter:e,equals:y,equals_:y,toArray:function(){return[]},toString:i("none()")},Object.freeze&&Object.freeze(n),n);function y(t){return t.isNone()}function b(t){return t()}function w(t){return t}function x(t,e){for(var n=t.length,r=new Array(n),o=0;o<n;o++){var i=t[o];r[o]=e(i,o)}return r}function _(t,e){for(var n=0,r=t.length;n<r;n++){e(t[n],n)}}var P,T,D,C,k,F=function(n){function t(){return o}function e(t){return t(n)}var r=i(n),o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:h,isNone:g,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:t,orThunk:t,map:function(t){return F(t(n))},each:function(t){t(n)},bind:e,exists:e,forall:e,filter:function(t){return t(n)?o:v},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(g,function(t){return e(n,t)})}};return o},S={some:F,none:e,from:function(t){return null===t||t===undefined?v:F(t)}},E=(P="function",function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"==e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e}(t)===P}),I=Array.prototype.slice,R=E(Array.from)?Array.from:function(t){return I.call(t)},O={},A={exports:O};T=undefined,D=O,C=A,k=undefined,function(t){"object"==typeof D&&void 0!==C?C.exports=t():"function"==typeof T&&T.amd?T([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=t()}(function(){return function l(i,u,a){function s(e,t){if(!u[e]){if(!i[e]){var n="function"==typeof k&&k;if(!t&&n)return n(e,!0);if(c)return c(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var o=u[e]={exports:{}};i[e][0].call(o.exports,function(t){return s(i[e][1][t]||t)},o,o.exports,l,i,u,a)}return u[e].exports}for(var c="function"==typeof k&&k,t=0;t<a.length;t++)s(a[t]);return s}({1:[function(t,e,n){var r,o,i=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(t){r=u}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,l=[],f=!1,d=-1;function m(){f&&c&&(f=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!f){var t=s(m);f=!0;for(var e=l.length;e;){for(c=l,l=[];++d<e;)c&&c[d].run();d=-1,e=l.length}c=null,f=!1,function n(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{return o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function h(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new g(t,e)),1!==l.length||f||s(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(t,f,e){(function(e){function r(){}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],l(t,this)}function o(r,o){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var t=1===r._state?o.onFulfilled:o.onRejected;if(null!==t){var e;try{e=t(r._value)}catch(n){return void a(o.promise,n)}u(o.promise,e)}else(1===r._state?u:a)(o.promise,r._value)})):r._deferreds.push(o)}function u(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void s(t);if("function"==typeof n)return void l(function r(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,s(t)}catch(o){a(t,o)}}function a(t,e){t._state=2,t._value=e,s(t)}function s(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)o(t,t._deferreds[e]);t._deferreds=null}function c(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,u(e,t))},function(t){n||(n=!0,a(e,t))})}catch(r){if(n)return;n=!0,a(e,r)}}var t,n;t=this,n=setTimeout,i.prototype["catch"]=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(r);return o(this,new c(t,e,n)),n},i.all=function(t){var s=Array.prototype.slice.call(t);return new i(function(o,i){if(0===s.length)return o([]);var u=s.length;function a(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){a(e,t)},i)}s[e]=t,0==--u&&o(s)}catch(r){i(r)}}for(var t=0;t<s.length;t++)a(t,s[t])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(n){return new i(function(t,e){e(n)})},i.race=function(o){return new i(function(t,e){for(var n=0,r=o.length;n<r;n++)o[n].then(t,e)})},i._immediateFn="function"==typeof e?function(t){e(t)}:function(t){n(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==f&&f.exports?f.exports=i:t.Promise||(t.Promise=i)}).call(this,t("timers").setImmediate)},{timers:3}],3:[function(s,t,c){(function(t,e){var r=s("process/browser.js").nextTick,n=Function.prototype.apply,o=Array.prototype.slice,i={},u=0;function a(t,e){this._id=t,this._clearFn=e}c.setTimeout=function(){return new a(n.call(setTimeout,window,arguments),clearTimeout)},c.setInterval=function(){return new a(n.call(setInterval,window,arguments),clearInterval)},c.clearTimeout=c.clearInterval=function(t){t.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},c.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},c.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},c._unrefActive=c.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;0<=e&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},c.setImmediate="function"==typeof t?t:function(t){var e=u++,n=!(arguments.length<2)&&o.call(arguments,1);return i[e]=!0,r(function(){i[e]&&(n?t.apply(null,n):t.call(null),c.clearImmediate(e))}),e},c.clearImmediate="function"==typeof e?e:function(t){delete i[t]}}).call(this,s("timers").setImmediate,s("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(t,e,n){var r=t("promise-polyfill"),o="undefined"!=typeof window?window:Function("return this;")();e.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)});function j(t){f.setTimeout(function(){throw t},0)}function M(i,t){return t(function(n){var r=[],o=0;0===i.length?n([]):_(i,function(t,e){t.get(function(e){return function(t){r[e]=t,++o>=i.length&&n(r)}}(e))})})}function L(t,e){return function(t){return M(t,z)}(x(t,e))}function N(t){return t.replace(/\r?\n/g,"<br>")}function B(t,e,n){var r=t.split(/\n\n/),o=function(t,e){var n,r=[],o="<"+t;if("object"==typeof e){for(n in e)e.hasOwnProperty(n)&&r.push(n+'="'+et.encodeAllRaw(e[n])+'"');r.length&&(o+=" "+r.join(" "))}return o+">"}(e,n),i="</"+e+">",u=q.map(r,function(t){return t.split(/\n/).join("<br />")});return 1===u.length?u[0]:q.map(u,function(t){return o+t+i}).join("")}var H=A.exports.boltExport,$=function(t){var n=S.none(),e=[],r=function(t){o()?u(t):e.push(t)},o=function(){return n.isSome()},i=function(t){_(t,u)},u=function(e){n.each(function(t){f.setTimeout(function(){e(t)},0)})};return t(function(t){n=S.some(t),i(e),e=[]}),{get:r,map:function(n){return $(function(e){r(function(t){e(n(t))})})},isReady:o}},W={nu:$,pure:function(e){return $(function(t){t(e)})}},U=function(n){function t(t){n().then(t,j)}return{map:function(t){return U(function(){return n().then(t)})},bind:function(e){return U(function(){return n().then(function(t){return e(t).toPromise()})})},anonBind:function(t){return U(function(){return n().then(function(){return t.toPromise()})})},toLazy:function(){return W.nu(t)},toCached:function(){var t=null;return U(function(){return null===t&&(t=n()),t})},toPromise:n,get:t}},z=function(t){return U(function(){return new H(t)})},V=tinymce.util.Tools.resolve("tinymce.Env"),K=tinymce.util.Tools.resolve("tinymce.util.Delay"),q=tinymce.util.Tools.resolve("tinymce.util.Tools"),G=tinymce.util.Tools.resolve("tinymce.util.VK"),X="x-tinymce/html",Y="\x3c!-- "+X+" --\x3e",Z=function(t){return Y+t},J=function(t){return t.replace(Y,"")},Q=function(t){return-1!==t.indexOf(Y)},tt=function(){return X},et=tinymce.util.Tools.resolve("tinymce.html.Entities"),nt=function(t){return!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(t)},rt=function(t,e,n){return e?B(t,!0===e?"p":e,n):N(t)},ot=tinymce.util.Tools.resolve("tinymce.html.DomParser"),it=tinymce.util.Tools.resolve("tinymce.html.Serializer"),ut=tinymce.util.Tools.resolve("tinymce.html.Node"),at=tinymce.util.Tools.resolve("tinymce.html.Schema"),st={shouldBlockDrop:function(t){return t.getParam("paste_block_drop",!1)},shouldPasteDataImages:function(t){return t.getParam("paste_data_images",!1)},shouldFilterDrop:function(t){return t.getParam("paste_filter_drop",!0)},getPreProcess:function(t){return t.getParam("paste_preprocess")},getPostProcess:function(t){return t.getParam("paste_postprocess")},getWebkitStyles:function(t){return t.getParam("paste_webkit_styles")},shouldRemoveWebKitStyles:function(t){return t.getParam("paste_remove_styles_if_webkit",!0)},shouldMergeFormats:function(t){return t.getParam("paste_merge_formats",!0)},isSmartPasteEnabled:function(t){return t.getParam("smart_paste",!0)},isPasteAsTextEnabled:function(t){return t.getParam("paste_as_text",!1)},getRetainStyleProps:function(t){return t.getParam("paste_retain_style_properties")},getWordValidElements:function(t){return t.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")},shouldConvertWordFakeLists:function(t){return t.getParam("paste_convert_word_fake_lists",!0)},shouldUseDefaultFilters:function(t){return t.getParam("paste_enable_default_filters",!0)}};function ct(e,t){return q.each(t,function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])}),e}var lt={filter:ct,innerText:function ae(t){var e=at(),n=ot({},e),r="",o=e.getShortEndedElements(),i=q.makeMap("script noscript style textarea video audio iframe object"," "),u=e.getBlockElements();return t=ct(t,[/<!\[[^\]]+\]>/g]),function a(t){var e=t.name,n=t;if("br"!==e){if("wbr"!==e)if(o[e]&&(r+=" "),i[e])r+=" ";else{if(3===t.type&&(r+=t.value),!t.shortEnded&&(t=t.firstChild))for(;a(t),t=t.next;);u[e]&&n.next&&(r+="\n","p"===e&&(r+="\n"))}}else r+="\n"}(n.parse(t)),r},trimHtml:function se(t){return t=ct(t,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function r(t,e,n){return e||n?"\xa0":" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])},createIdGenerator:function ce(t){var e=0;return function(){return t+e++}},isMsEdge:function(){return-1!==f.navigator.userAgent.indexOf(" Edge/")}};function ft(e){var n,t;return t=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],e=e.replace(/^[\u00a0 ]+/,""),q.each(t,function(t){if(t.test(e))return!(n=!0)}),n}function dt(t){var i,u,a=1;function n(t){var e="";if(3===t.type)return t.value;if(t=t.firstChild)for(;e+=n(t),t=t.next;);return e}function s(t,e){if(3===t.type&&e.test(t.value))return t.value=t.value.replace(e,""),!1;if(t=t.firstChild)do{if(!s(t,e))return!1}while(t=t.next);return!0}function e(t,e,n){var r=t._listLevel||a;r!==a&&(i=r<a?i&&i.parent.parent:(u=i,null)),i&&i.name===e?i.append(t):(u=u||i,i=new ut(e,1),1<n&&i.attr("start",""+n),t.wrap(i)),t.name="li",a<r&&u&&u.lastChild.append(i),a=r,function o(t){if(t._listIgnore)t.remove();else if(t=t.firstChild)for(;o(t),t=t.next;);}(t),s(t,/^\u00a0+/),s(t,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),s(t,/^\u00a0+/)}for(var r=[],o=t.firstChild;null!=o;)if(r.push(o),null!==(o=o.walk()))for(;void 0!==o&&o.parent!==t;)o=o.walk();for(var c=0;c<r.length;c++)if("p"===(t=r[c]).name&&t.firstChild){var l=n(t);if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(l)){e(t,"ul");continue}if(ft(l)){var f=/([0-9]+)\./.exec(l),d=1;f&&(d=parseInt(f[1],10)),e(t,"ol",d);continue}if(t._listLevel){e(t,"ul",1);continue}i=null}else u=i,i=null}function mt(n,r,o,i){var u,a={},t=n.dom.parseStyle(i);return q.each(t,function(t,e){switch(e){case"mso-list":(u=/\w+ \w+([0-9]+)/i.exec(i))&&(o._listLevel=parseInt(u[1],10)),/Ignore/i.test(t)&&o.firstChild&&(o._listIgnore=!0,o.firstChild._listIgnore=!0);break;case"horiz-align":e="text-align";break;case"vert-align":e="vertical-align";break;case"font-color":case"mso-foreground":e="color";break;case"mso-background":case"mso-highlight":e="background";break;case"font-weight":case"font-style":return void("normal"!==t&&(a[e]=t));case"mso-element":if(/^(comment|comment-list)$/i.test(t))return void o.remove()}0!==e.indexOf("mso-comment")?0!==e.indexOf("mso-")&&("all"===st.getRetainStyleProps(n)||r&&r[e])&&(a[e]=t):o.remove()}),/(bold)/i.test(a["font-weight"])&&(delete a["font-weight"],o.wrap(new ut("b",1))),/(italic)/i.test(a["font-style"])&&(delete a["font-style"],o.wrap(new ut("i",1))),(a=n.dom.serializeStyle(a,o.name))||null}function pt(t,e){return{content:t,cancelled:e}}function gt(t,e,n,r){var o=s(t,e,n,r),i=function(t,e){var n=ot({},t.schema);n.addNodeFilter("meta",function(t){q.each(t,function(t){return t.remove()})});var r=n.parse(e,{forced_root_block:!1,isRootContent:!0});return it({validate:t.settings.validate},t.schema).serialize(r)}(t,o.content);return t.hasEventListeners("PastePostProcess")&&!o.isDefaultPrevented()?function(t,e,n,r){var o=t.dom.create("div",{style:"display:none"},e),i=c(t,o,n,r);return pt(i.node.innerHTML,i.isDefaultPrevented())}(t,i,n,r):pt(i,o.isDefaultPrevented())}function ht(t,e){return t.insertContent(e,{merge:st.shouldMergeFormats(t),paste:!0}),!0}function vt(t){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(t)}function yt(t){return vt(t)&&/.(gif|jpe?g|png)$/.test(t)}function bt(t,e,n){return!(!1!==t.selection.isCollapsed()||!vt(e))&&function(t,e,n){return t.undoManager.extra(function(){n(t,e)},function(){t.execCommand("mceInsertLink",!1,e)}),!0}(t,e,n)}function wt(t,e,n){return!!yt(e)&&function(t,e,n){return t.undoManager.extra(function(){n(t,e)},function(){t.insertContent('<img src="'+e+'">')}),!0}(t,e,n)}function xt(t){return"\n"===t||"\r"===t}function _t(n){return function(t,e,n){return _(t,function(t){n=e(n,t)}),n}(n,function(t,e){return function(t){return-1!==" \f\t\x0B".indexOf(t)}(e)||"\xa0"===e?t.pcIsSpace||""===t.str||t.str.length===n.length-1||function(t,e){return e<t.length&&0<=e&&xt(t[e])}(n,t.str.length+1)?{pcIsSpace:!1,str:t.str+"\xa0"}:{pcIsSpace:!0,str:t.str+" "}:{pcIsSpace:xt(e),str:t.str+e}},{pcIsSpace:!1,str:""}).str}function Pt(t,e,n){var r=n||Q(e),o=Vt(t,J(e),r);!1===o.cancelled&&Kt(t,o.content)}function Tt(t,e){var n=t.dom.encode(e).replace(/\r\n/g,"\n"),r=_t(n),o=rt(r,t.settings.forced_root_block,t.settings.forced_root_block_attrs);Pt(t,o,!1)}function Dt(t){var e={};if(t){if(t.getData){var n=t.getData("Text");n&&0<n.length&&-1===n.indexOf("data:text/mce-internal,")&&(e["text/plain"]=n)}if(t.types)for(var r=0;r<t.types.length;r++){var o=t.types[r];try{e[o]=t.getData(o)}catch(i){e[o]=""}}}return e}function Ct(t,e){return e in t&&0<t[e].length}function kt(t){return Ct(t,"text/html")||Ct(t,"text/plain")}function Ft(e,t,n){var r=function(t){return"paste"===t.type}(t)?t.clipboardData:t.dataTransfer;if(e.settings.paste_data_images&&r){var o=function(t){var e=t.items?x(R(t.items),function(t){return t.getAsFile()}):[],n=t.files?R(t.files):[];return function(t,e){for(var n=[],r=0,o=t.length;r<o;r++){var i=t[r];e(i,r)&&n.push(i)}return n}(0<e.length?e:n,function(t){return/^image\/(jpeg|png|gif|bmp)$/.test(t.type)})}(r);if(0<o.length)return t.preventDefault(),function(t){return L(t,function(r){return z(function(t){var e=r.getAsFile?r.getAsFile():r,n=new window.FileReader;n.onload=function(){t({blob:e,uri:n.result})},n.readAsDataURL(e)})})}(o).get(function(t){n&&e.selection.setRng(n),_(t,function(t){!function(t,e){var n=function(t){var e;return-1!==(e=t.indexOf(","))?t.substr(e+1):null}(e.uri),r=qt(),o=t.settings.images_reuse_filename&&e.blob.name?function(t,e){var n=e.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i);return n?t.dom.encode(n[1]):null}(t,e.blob.name):r,i=new f.Image;if(i.src=e.uri,function(t,e){return!t.images_dataimg_filter||t.images_dataimg_filter(e)}(t.settings,i)){var u,a=t.editorUpload.blobCache,s=void 0;(u=a.findFirst(function(t){return t.base64()===n}))?s=u:(s=a.create(r,e.blob,n,o),a.add(s)),Pt(t,'<img src="'+s.blobUri()+'">',!1)}else Pt(t,'<img src="'+e.uri+'">',!1)}(e,t)})}),!0}return!1}function St(t){return G.metaKeyPressed(t)&&86===t.keyCode||t.shiftKey&&45===t.keyCode}function Et(u,a,i){var s,c=function(){var e=d(S.none());return{clear:function(){e.set(S.none())},set:function(t){e.set(S.some(t))},isSet:function(){return e.get().isSome()},on:function(t){e.get().each(t)}}}();function l(t,e,n,r){var o,i;Ct(t,"text/html")?o=t["text/html"]:(o=a.getHtml(),r=r||Q(o),a.isDefaultContent(o)&&(n=!0)),o=lt.trimHtml(o),a.remove(),i=!1===r&&nt(o),o.length&&!i||(n=!0),n&&(o=Ct(t,"text/plain")&&i?t["text/plain"]:lt.innerText(o)),a.isDefaultContent(o)?e||u.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):n?Tt(u,o):Pt(u,o,r)}u.on("keydown",function(t){function e(t){St(t)&&!t.isDefaultPrevented()&&a.remove()}if(St(t)&&!t.isDefaultPrevented()){if((s=t.shiftKey&&86===t.keyCode)&&V.webkit&&-1!==f.navigator.userAgent.indexOf("Version/"))return;if(t.stopImmediatePropagation(),c.set(t),window.setTimeout(function(){c.clear()},100),V.ie&&s)return t.preventDefault(),void m(u,!0);a.remove(),a.create(),u.once("keyup",e),u.once("paste",function(){u.off("keyup",e)})}}),u.on("paste",function(t){var e=c.isSet(),n=function(t,e){var n=Dt(e.clipboardData||t.getDoc().dataTransfer);return lt.isMsEdge()?q.extend(n,{"text/html":""}):n}(u,t),r="text"===i.get()||s,o=Ct(n,tt());s=!1,t.isDefaultPrevented()||function(t){var e=t.clipboardData;return-1!==f.navigator.userAgent.indexOf("Android")&&e&&e.items&&0===e.items.length}(t)?a.remove():kt(n)||!Ft(u,t,a.getLastRng()||u.selection.getRng())?(e||t.preventDefault(),!V.ie||e&&!t.ieFake||Ct(n,"text/html")||(a.create(),u.dom.bind(a.getEl(),"paste",function(t){t.stopPropagation()}),u.getDoc().execCommand("Paste",!1,null),n["text/html"]=a.getHtml()),Ct(n,"text/html")?(t.preventDefault(),o=o||Q(n["text/html"]),l(n,e,r,o)):K.setEditorTimeout(u,function(){l(n,e,r,o)},0)):a.remove()})}function It(t){return V.ie&&t.inline?f.document.body:t.getBody()}function Rt(e,t,n){!function(t){return It(t)!==t.getBody()}(e)||e.dom.bind(t,"paste keyup",function(t){Xt(e,n)||e.fire("paste")})}function Ot(t,e){return e===t}function At(t){var e=d(null),n="%MCEPASTEBIN%";return{create:function(){return function(t,e,n){var r,o=t.dom,i=t.getBody();e.set(t.selection.getRng()),r=t.dom.add(It(t),"div",{id:"mcepastebin","class":"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n),(V.ie||V.gecko)&&o.setStyle(r,"left","rtl"===o.getStyle(i,"direction",!0)?65535:-65535),o.bind(r,"beforedeactivate focusin focusout",function(t){t.stopPropagation()}),Rt(t,r,n),r.focus(),t.selection.select(r,!0)}(t,e,n)},remove:function(){return function(t,e){if(Gt(t)){for(var n=void 0,r=e.get();n=t.dom.get("mcepastebin");)t.dom.remove(n),t.dom.unbind(n);r&&t.selection.setRng(r)}e.set(null)}(t,e)},getEl:function(){return Gt(t)},getHtml:function(){return function(n){function e(t,e){t.appendChild(e),n.dom.remove(e,!0)}var r,t,o,i,u;for(t=q.grep(It(n).childNodes,function(t){return"mcepastebin"===t.id}),r=t.shift(),q.each(t,function(t){e(r,t)}),o=(i=n.dom.select("div[id=mcepastebin]",r)).length-1;0<=o;o--)u=n.dom.create("div"),r.insertBefore(u,i[o]),e(u,i[o]);return r?r.innerHTML:""}(t)},getLastRng:function(){return function(t){return t.get()}(e)},isDefault:function(){return Xt(t,n)},isDefaultContent:function(t){return Ot(n,t)}}}function jt(n,t){var e=At(n);return n.on("PreInit",function(){return function(u,t,e){var a;Et(u,t,e),u.parser.addNodeFilter("img",function(t,e,n){function r(t){t.attr("data-mce-object")||a===V.transparentSrc||t.remove()}var o;if(!u.settings.paste_data_images&&((o=n).data&&!0===o.data.paste))for(var i=t.length;i--;)(a=t[i].attr("src"))&&(0===a.indexOf("webkit-fake-url")?r(t[i]):u.settings.allow_html_data_urls||0!==a.indexOf("data:")||r(t[i]))})}(n,e,t)}),{pasteFormat:t,pasteHtml:function(t,e){return Pt(n,t,e)},pasteText:function(t){return Tt(n,t)},pasteImageData:function(t,e){return Ft(n,t,e)},getDataTransferItems:Dt,hasHtmlOrText:kt,hasContentType:Ct}}function Mt(){}function Lt(t,e,n){if(!function(t){return!1===V.iOS&&t!==undefined&&"function"==typeof t.setData&&!0!==lt.isMsEdge()}(t))return!1;try{return t.clearData(),t.setData("text/html",e),t.setData("text/plain",n),t.setData(tt(),e),!0}catch(r){return!1}}function Nt(t,e,n,r){Lt(t.clipboardData,e.html,e.text)?(t.preventDefault(),r()):n(e.html,r)}function Bt(a){return function(t,e){var n=Z(t),r=a.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),o=a.dom.create("div",{contenteditable:"true"},n);a.dom.setStyles(r,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),r.appendChild(o),a.dom.add(a.getBody(),r);var i=a.selection.getRng();o.focus();var u=a.dom.createRng();u.selectNodeContents(o),a.selection.setRng(u),K.setTimeout(function(){a.selection.setRng(i),r.parentNode.removeChild(r),e()},0)}}function Ht(t){return{html:t.selection.getContent({contextual:!0}),text:t.selection.getContent({format:"text"})}}function $t(t){return!t.selection.isCollapsed()||function(t){return!!t.dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())}(t)}function Wt(t,e){return Zt.getCaretRangeFromPoint(e.clientX,e.clientY,t.getDoc())}function Ut(t,e){t.focus(),t.selection.setRng(e)}var zt={preProcess:function(t,e){return st.shouldUseDefaultFilters(t)?function(r,t){var e,o;(e=st.getRetainStyleProps(r))&&(o=q.makeMap(e.split(/[, ]/))),t=lt.filter(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(t,e){return 0<e.length?e.replace(/./," ").slice(Math.floor(e.length/2)).split("").join("\xa0"):""}]]);var n=st.getWordValidElements(r),i=at({valid_elements:n,valid_children:"-li[p]"});q.each(i.elements,function(t){t.attributes["class"]||(t.attributes["class"]={},t.attributesOrder.push("class")),t.attributes.style||(t.attributes.style={},t.attributesOrder.push("style"))});var u=ot({},i);u.addAttributeFilter("style",function(t){for(var e,n=t.length;n--;)(e=t[n]).attr("style",mt(r,o,e,e.attr("style"))),"span"===e.name&&e.parent&&!e.attributes.length&&e.unwrap()}),u.addAttributeFilter("class",function(t){for(var e,n,r=t.length;r--;)n=(e=t[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&e.remove(),e.attr("class",null)}),u.addNodeFilter("del",function(t){for(var e=t.length;e--;)t[e].remove()}),u.addNodeFilter("a",function(t){for(var e,n,r,o=t.length;o--;)if(n=(e=t[o]).attr("href"),r=e.attr("name"),n&&-1!==n.indexOf("#_msocom_"))e.remove();else if(n&&0===n.indexOf("file://")&&(n=(n=n.split("#")[1])&&"#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){e.unwrap();continue}e.attr({href:n,name:r})}else e.unwrap()});var a=u.parse(t);return st.shouldConvertWordFakeLists(r)&&dt(a),t=it({validate:r.settings.validate},i).serialize(a)}(t,e):e},isWordContent:function le(t){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(t)||/class="OutlineElement/.test(t)||/id="?docs\-internal\-guid\-/.test(t)}},Vt=function(t,e,n){var r=zt.isWordContent(e),o=r?zt.preProcess(t,e):e;return gt(t,o,n,r)},Kt=function(t,e){!1===st.isSmartPasteEnabled(t)?ht(t,e):function(e,n){q.each([bt,wt,ht],function(t){return!0!==t(e,n,ht)})}(t,e)},qt=lt.createIdGenerator("mceclip"),Gt=function(t){return t.dom.get("mcepastebin")},Xt=function(t,e){var n=Gt(t);return function(t){return t&&"mcepastebin"===t.id}(n)&&Ot(e,n.innerHTML)},Yt=function(t){t.on("cut",function(e){return function(t){$t(e)&&Nt(t,Ht(e),Bt(e),function(){if(V.browser.isChrome()){var t=e.selection.getRng();K.setEditorTimeout(e,function(){e.selection.setRng(t),e.execCommand("Delete")},0)}else e.execCommand("Delete")})}}(t)),t.on("copy",function(e){return function(t){$t(e)&&Nt(t,Ht(e),Bt(e),Mt)}}(t))},Zt=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),Jt=function(i,u,a){st.shouldBlockDrop(i)&&i.on("dragend dragover draggesture dragdrop drop drag",function(t){t.preventDefault(),t.stopPropagation()}),st.shouldPasteDataImages(i)||i.on("drop",function(t){var e=t.dataTransfer;e&&e.files&&0<e.files.length&&t.preventDefault()}),i.on("drop",function(t){var e,n;if(n=Wt(i,t),!t.isDefaultPrevented()&&!a.get()){e=u.getDataTransferItems(t.dataTransfer);var r=u.hasContentType(e,tt());if((u.hasHtmlOrText(e)&&!function(t){var e=t["text/plain"];return!!e&&0===e.indexOf("file://")}(e)||!u.pasteImageData(t,n))&&n&&st.shouldFilterDrop(i)){var o=e["mce-internal"]||e["text/html"]||e["text/plain"];o&&(t.preventDefault(),K.setEditorTimeout(i,function(){i.undoManager.transact(function(){e["mce-internal"]&&i.execCommand("Delete"),Ut(i,n),o=lt.trimHtml(o),e["text/html"]?u.pasteHtml(o,r):u.pasteText(o)})}))}}}),i.on("dragstart",function(t){a.set(!0)}),i.on("dragover dragend",function(t){st.shouldPasteDataImages(i)&&!1===a.get()&&(t.preventDefault(),Ut(i,Wt(i,t))),"dragend"===t.type&&a.set(!1)})},Qt=function(t){var e=t.plugins.paste,n=st.getPreProcess(t);n&&t.on("PastePreProcess",function(t){n.call(e,e,t)});var r=st.getPostProcess(t);r&&t.on("PastePostProcess",function(t){r.call(e,e,t)})};function te(e,n){e.on("PastePreProcess",function(t){t.content=n(e,t.content,t.internal,t.wordContent)})}function ee(t,e){if(!zt.isWordContent(e))return e;var n=[];q.each(t.schema.getBlockElements(),function(t,e){n.push(e)});var r=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return e=lt.filter(e,[[r,"$1"]]),e=lt.filter(e,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function ne(t,e,n,r){if(r||n)return e;var c,o=st.getWebkitStyles(t);if(!1===st.shouldRemoveWebKitStyles(t)||"all"===o)return e;if(o&&(c=o.split(/[, ]/)),c){var l=t.dom,f=t.selection.getNode();e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(t,e,n,r){var o=l.parseStyle(l.decode(n)),i={};if("none"===c)return e+r;for(var u=0;u<c.length;u++){var a=o[c[u]],s=l.getStyle(f,c[u],!0);/color/.test(c[u])&&(a=l.toHex(a),s=l.toHex(s)),s!==a&&(i[c[u]]=a)}return(i=l.serializeStyle(i,"span"))?e+' style="'+i+'"'+r:e+r})}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(t,e,n,r){return e+' style="'+n+'"'+r})}function re(n,t){n.$("a",t).find("font,u").each(function(t,e){n.dom.remove(e,!0)})}function oe(n,r){return function(e){e.setActive("text"===r.pasteFormat.get());function t(t){return e.setActive(t.state)}return n.on("PastePlainTextToggle",t),function(){return n.off("PastePlainTextToggle",t)}}}var ie=function(t){V.webkit&&te(t,ne),V.ie&&(te(t,ee),function r(e,n){e.on("PastePostProcess",function(t){n(e,t.node)})}(t,re))},ue=function(t,e){t.ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:function(){return t.execCommand("mceTogglePlainTextPaste")},onSetup:oe(t,e)}),t.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",onAction:function(){return t.execCommand("mceTogglePlainTextPaste")},onSetup:oe(t,e)})};!function fe(){r.add("paste",function(t){if(!1===u(t)){var e=d(!1),n=d(st.isPasteAsTextEnabled(t)?"text":"html"),r=jt(t,n),o=ie(t);return ue(t,r),p(t,r),Qt(t),Yt(t),Jt(t,r,e),a(r,o)}})}()}(window);