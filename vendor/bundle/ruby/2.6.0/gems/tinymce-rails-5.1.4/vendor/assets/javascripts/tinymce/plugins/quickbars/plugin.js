/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.4 (2019-12-11)
 */
!function(u){"use strict";function e(){}function l(e){return function(){return e}}function n(){return p}var r,t=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=0,o=function(e,n,r){e.plugins.table?e.plugins.table.insertTable(n,r):function(r,t,o){r.undoManager.transact(function(){var e,n;r.insertContent(function(e,n){var r,t,o;for(o='<table data-mce-id="mce" style="width: 100%">',o+="<tbody>",t=0;t<n;t++){for(o+="<tr>",r=0;r<e;r++)o+="<td><br></td>";o+="</tr>"}return o+="</tbody>",o+="</table>"}(t,o)),(e=function(e){return e.dom.select("*[data-mce-id]")[0]}(r)).removeAttribute("data-mce-id"),n=r.dom.select("td,th",e),r.selection.setCursorLocation(n[0],0)})}(e,n,r)},c=function(e,n,r){var t,o;o=(t=e.editorUpload.blobCache).create(function(e){var n=(new Date).getTime();return e+"_"+Math.floor(1e9*Math.random())+ ++i+String(n)}("mceu"),r,n),t.add(o),e.insertContent(e.dom.createHTML("img",{src:o.blobUri()}))},s=tinymce.util.Tools.resolve("tinymce.util.Promise"),a=function(r){return new s(function(e){var n=new u.FileReader;n.onloadend=function(){e(n.result.split(",")[1])},n.readAsDataURL(r)})},f=tinymce.util.Tools.resolve("tinymce.Env"),d=tinymce.util.Tools.resolve("tinymce.util.Delay"),m=function(i){return new s(function(r){var t=u.document.createElement("input");t.type="file",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.opacity="0.001",u.document.body.appendChild(t);t.addEventListener("change",function(e){r(Array.prototype.slice.call(e.target.files))});var o=function(e){function n(){r([]),t.parentNode.removeChild(t)}f.os.isAndroid()&&"remove"!==e.type?d.setEditorTimeout(i,n,0):n(),i.off("focusin remove",o)};i.on("focusin remove",o),t.click()})},g=function(r){r.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:function(){m(r).then(function(e){if(0<e.length){var n=e[0];a(n).then(function(e){c(r,e,n)})}})}}),r.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:function(){o(r,2,2)}})},v=l(!1),h=l(!0),p=(r={fold:function(e,n){return e()},is:v,isSome:v,isNone:h,getOr:b,getOrThunk:O,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(undefined),or:b,orThunk:O,map:n,each:e,bind:n,exists:v,forall:h,filter:n,equals:N,equals_:N,toArray:function(){return[]},toString:l("none()")},Object.freeze&&Object.freeze(r),r);function N(e){return e.isNone()}function O(e){return e()}function b(e){return e}function E(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"==n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===n}}var w=function(r){function e(){return o}function n(e){return e(r)}var t=l(r),o={fold:function(e,n){return n(r)},is:function(e){return r===e},isSome:h,isNone:v,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(e){return w(e(r))},each:function(e){e(r)},bind:n,exists:n,forall:n,filter:function(e){return e(r)?o:p},toArray:function(){return[r]},toString:function(){return"some("+r+")"},equals:function(e){return e.is(r)},equals_:function(e,n){return e.fold(v,function(e){return n(r,e)})}};return o},T={some:w,none:n,from:function(e){return null===e||e===undefined?p:w(e)}},y=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:l(e)}},S={fromHtml:function(e,n){var r=(n||u.document).createElement("div");if(r.innerHTML=e,!r.hasChildNodes()||1<r.childNodes.length)throw u.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return y(r.childNodes[0])},fromTag:function(e,n){var r=(n||u.document).createElement(e);return y(r)},fromText:function(e,n){var r=(n||u.document).createTextNode(e);return y(r)},fromDom:y,fromPoint:function(e,n,r){var t=e.dom();return T.from(t.elementFromPoint(n,r)).map(y)}},x=(u.Node.ATTRIBUTE_NODE,u.Node.CDATA_SECTION_NODE,u.Node.COMMENT_NODE,u.Node.DOCUMENT_NODE,u.Node.DOCUMENT_TYPE_NODE,u.Node.DOCUMENT_FRAGMENT_NODE,u.Node.ELEMENT_NODE),D=(u.Node.TEXT_NODE,u.Node.PROCESSING_INSTRUCTION_NODE,u.Node.ENTITY_REFERENCE_NODE,u.Node.ENTITY_NODE,u.Node.NOTATION_NODE,"undefined"!=typeof u.window?u.window:Function("return this;")(),E("string")),k=E("object"),_=E("array"),C=E("boolean"),A=E("undefined"),M=E("function"),R=Array.prototype.slice;M(Array.from)&&Array.from;function I(e,n,r,t,o){return e(r,t)?T.some(r):M(o)&&o(r)?T.none():n(r,t,o)}function q(e,n,r){return 0!=(e.compareDocumentPosition(n)&r)}function L(e,n){var r=function(e,n){for(var r=0;r<e.length;r++){var t=e[r];if(t.test(n))return t}return undefined}(e,n);if(!r)return{major:0,minor:0};function t(e){return Number(n.replace(r,"$"+e))}return V(t(1),t(2))}function P(e,n){return function(){return n===e}}function F(e,n){return function(){return n===e}}function U(e,n){var r=String(n).toLowerCase();return function(e,n){for(var r=0,t=e.length;r<t;r++){var o=e[r];if(n(o,r))return T.some(o)}return T.none()}(e,function(e){return e.search(r)})}function B(e,n){return-1!==e.indexOf(n)}function j(n){return function(e){return B(e,n)}}function H(e,n){var r=e.dom();if(r.nodeType!==me)return!1;var t=r;if(t.matches!==undefined)return t.matches(n);if(t.msMatchesSelector!==undefined)return t.msMatchesSelector(n);if(t.webkitMatchesSelector!==undefined)return t.webkitMatchesSelector(n);if(t.mozMatchesSelector!==undefined)return t.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")}function X(e,n,r){for(var t=e.dom(),o=M(r)?r:l(!1);t.parentNode;){t=t.parentNode;var i=S.fromDom(t);if(n(i))return T.some(i);if(o(i))break}return T.none()}function z(e,n,r){return X(e,function(e){return H(e,n)},r)}var G,W=function(e,n){return q(e,n,u.Node.DOCUMENT_POSITION_CONTAINED_BY)},Y=function(e){function n(){return r}var r=e;return{get:n,set:function(e){r=e},clone:function(){return Y(n())}}},$=function(){return V(0,0)},V=function(e,n){return{major:e,minor:n}},J={nu:V,detect:function(e,n){var r=String(n).toLowerCase();return 0===e.length?$():L(e,r)},unknown:$},K="Firefox",Q=function(e){var n=e.current;return{current:n,version:e.version,isEdge:P("Edge",n),isChrome:P("Chrome",n),isIE:P("IE",n),isOpera:P("Opera",n),isFirefox:P(K,n),isSafari:P("Safari",n)}},Z={unknown:function(){return Q({current:undefined,version:J.unknown()})},nu:Q,edge:l("Edge"),chrome:l("Chrome"),ie:l("IE"),opera:l("Opera"),firefox:l(K),safari:l("Safari")},ee="Windows",ne="Android",re="Solaris",te="FreeBSD",oe=function(e){var n=e.current;return{current:n,version:e.version,isWindows:F(ee,n),isiOS:F("iOS",n),isAndroid:F(ne,n),isOSX:F("OSX",n),isLinux:F("Linux",n),isSolaris:F(re,n),isFreeBSD:F(te,n)}},ie={unknown:function(){return oe({current:undefined,version:J.unknown()})},nu:oe,windows:l(ee),ios:l("iOS"),android:l(ne),linux:l("Linux"),osx:l("OSX"),solaris:l(re),freebsd:l(te)},ue=function(e,r){return U(e,r).map(function(e){var n=J.detect(e.versionRegexes,r);return{current:e.name,version:n}})},ce=function(e,r){return U(e,r).map(function(e){var n=J.detect(e.versionRegexes,r);return{current:e.name,version:n}})},se=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,ae=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return B(e,"edge/")&&B(e,"chrome")&&B(e,"safari")&&B(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,se],search:function(e){return B(e,"chrome")&&!B(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return B(e,"msie")||B(e,"trident")}},{name:"Opera",versionRegexes:[se,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:j("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:j("firefox")},{name:"Safari",versionRegexes:[se,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(B(e,"safari")||B(e,"mobile/"))&&B(e,"applewebkit")}}],fe=[{name:"Windows",search:j("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return B(e,"iphone")||B(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:j("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:j("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:j("linux"),versionRegexes:[]},{name:"Solaris",search:j("sunos"),versionRegexes:[]},{name:"FreeBSD",search:j("freebsd"),versionRegexes:[]}],de={browsers:l(ae),oses:l(fe)},le=Y(function(e,n){var r=de.browsers(),t=de.oses(),o=ue(r,e).fold(Z.unknown,Z.nu),i=ce(t,e).fold(ie.unknown,ie.nu);return{browser:o,os:i,deviceType:function(e,n,r,t){var o=e.isiOS()&&!0===/ipad/i.test(r),i=e.isiOS()&&!o,u=e.isiOS()||e.isAndroid(),c=u||t("(pointer:coarse)"),s=o||!i&&u&&t("(min-device-width:768px)"),a=i||u&&!s,f=n.isSafari()&&e.isiOS()&&!1===/safari/i.test(r),d=!a&&!s&&!f;return{isiPad:l(o),isiPhone:l(i),isTablet:l(s),isPhone:l(a),isTouch:l(c),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:l(f),isDesktop:l(d)}}(i,o,e,n)}}(u.navigator.userAgent,function(e){return u.window.matchMedia(e).matches})),me=x,ge=(le.get().browser.isIE(),{getToolbarItemsOr:(G=D,function(e,n,r){return function(e,n){if(!n(e))throw new Error("Default value doesn't match requested type.")}(r,G),function(e,n){if(_(e)||k(e))throw new Error("expected a string but found: "+e);return A(e)?n:C(e)?!1===e?"":n:e}(e.getParam(n,r),r)})}),ve=function(e){return ge.getToolbarItemsOr(e,"quickbars_selection_toolbar","bold italic | quicklink h2 h3 blockquote")},he=function(e){return ge.getToolbarItemsOr(e,"quickbars_insert_toolbar","quickimage quicktable")},pe=function(o){var e=he(o);0<e.trim().length&&o.ui.registry.addContextToolbar("quickblock",{predicate:function(e){function n(e){return e.dom()===o.getBody()}var r=S.fromDom(e),t=o.schema.getTextBlockElements();return function(e,n,r){return I(H,z,e,n,r)}(r,"table",n).fold(function(){return function(e,n,r){return I(function(e,n){return n(e)},X,e,n,r)}(r,function(e){return function(e){return e.dom().nodeName.toLowerCase()}(e)in t&&o.dom.isEmpty(e.dom())},n).isSome()},function(){return!1})},items:e,position:"line",scope:"editor"})},Ne=function(n){n.ui.registry.addContextToolbar("imageselection",{predicate:function(e){return"IMG"===e.nodeName||"FIGURE"===e.nodeName&&/image/i.test(e.className)},items:"alignleft aligncenter alignright",position:"node"});var e=ve(n);0<e.trim().length&&n.ui.registry.addContextToolbar("textselection",{predicate:function(e){return!n.selection.isCollapsed()},items:e,position:"selection"})};!function Oe(){t.add("quickbars",function(e){g(e),pe(e),Ne(e)})}()}(window);