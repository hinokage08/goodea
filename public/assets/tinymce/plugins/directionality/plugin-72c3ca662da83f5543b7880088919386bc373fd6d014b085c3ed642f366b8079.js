!function(c){"use strict";function n(){}function i(n){return function(){return n}}function e(){return O}function t(n){return n.isNone()}function r(n){return n()}function o(n){return n}function u(n,e){var t,r,o=n.dom(),i=c.window.getComputedStyle(o).getPropertyValue(e),u=""!==i||(r=v(t=n)?t.dom().parentNode:t.dom())!==undefined&&null!==r&&r.ownerDocument.body.contains(r)?i:A(o,e);return null===u?undefined:u}function d(e,r){return function(t){function n(n){var e=p.fromDom(n.element);t.setActive(("rtl"===u(e,"direction")?"rtl":"ltr")===r)}return e.on("NodeChange",n),function(){return e.off("NodeChange",n)}}}var f,l,a,m=tinymce.util.Tools.resolve("tinymce.PluginManager"),N=tinymce.util.Tools.resolve("tinymce.util.Tools"),s=function(n,e){var t,r=n.dom,o=n.selection.getSelectedBlocks();o.length&&(t=r.getAttrib(o[0],"dir"),N.each(o,function(n){r.getParent(n.parentNode,'*[dir="'+e+'"]',r.getRoot())||r.setAttrib(n,"dir",t!==e?e:null)}),n.nodeChanged())},g=function(n){n.addCommand("mceDirectionLTR",function(){s(n,"ltr")}),n.addCommand("mceDirectionRTL",function(){s(n,"rtl")})},T=i(!1),E=i(!0),O=(f={fold:function(n){return n()},is:T,isSome:T,isNone:E,getOr:o,getOrThunk:r,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(undefined),or:o,orThunk:r,map:e,each:n,bind:e,exists:T,forall:E,filter:e,equals:t,equals_:t,toArray:function(){return[]},toString:i("none()")},Object.freeze&&Object.freeze(f),f),y=function(t){function n(){return o}function e(n){return n(t)}var r=i(t),o={fold:function(n,e){return e(t)},is:function(n){return t===n},isSome:E,isNone:T,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:n,orThunk:n,map:function(n){return y(n(t))},each:function(n){n(t)},bind:e,exists:e,forall:e,filter:function(n){return n(t)?o:O},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(n){return n.is(t)},equals_:function(n,e){return n.fold(T,function(n){return e(t,n)})}};return o},D=function(n){return null===n||n===undefined?O:y(n)},h=function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:i(n)}},p={fromHtml:function(n,e){var t=(e||c.document).createElement("div");if(t.innerHTML=n,!t.hasChildNodes()||1<t.childNodes.length)throw c.console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return h(t.childNodes[0])},fromTag:function(n,e){var t=(e||c.document).createElement(n);return h(t)},fromText:function(n,e){var t=(e||c.document).createTextNode(n);return h(t)},fromDom:h,fromPoint:function(n,e,t){var r=n.dom();return D(r.elementFromPoint(e,t)).map(h)}},_=(l="function",function(n){return function(n){if(null===n)return"null";var e=typeof n;return"object"==e&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":e}(n)===l}),C=(Array.prototype.slice,_(Array.from)&&Array.from,c.Node.ATTRIBUTE_NODE,c.Node.CDATA_SECTION_NODE,c.Node.COMMENT_NODE,c.Node.DOCUMENT_NODE,c.Node.DOCUMENT_TYPE_NODE,c.Node.DOCUMENT_FRAGMENT_NODE,c.Node.ELEMENT_NODE,c.Node.TEXT_NODE),v=(c.Node.PROCESSING_INSTRUCTION_NODE,c.Node.ENTITY_REFERENCE_NODE,c.Node.ENTITY_NODE,c.Node.NOTATION_NODE,"undefined"!=typeof c.window?c.window:Function("return this;")(),a=C,function(n){return n.dom().nodeType===a}),A=function(n,e){return(t=n).style!==undefined&&_(t.style.getPropertyValue)?n.style.getPropertyValue(e):"";var t},w=function(n){n.ui.registry.addToggleButton("ltr",{tooltip:"Left to right",icon:"ltr",onAction:function(){return n.execCommand("mceDirectionLTR")},onSetup:d(n,"ltr")}),n.ui.registry.addToggleButton("rtl",{tooltip:"Right to left",icon:"rtl",onAction:function(){return n.execCommand("mceDirectionRTL")},onSetup:d(n,"rtl")})};!function S(){m.add("directionality",function(n){g(n),w(n)})}()}(window);