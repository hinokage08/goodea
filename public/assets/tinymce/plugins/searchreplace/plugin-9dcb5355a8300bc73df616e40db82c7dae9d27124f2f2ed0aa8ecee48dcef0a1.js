!function(){"use strict";function x(e){return e&&1===e.nodeType&&"false"===e.contentEditable}function g(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t}function p(e){var t=e.parentNode;e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function c(e,t){var n,r=[];if((n=T.toArray(e.getBody().getElementsByTagName("span"))).length)for(var o=0;o<n.length;o++){var a=g(n[o]);null!==a&&a.length&&a===t.toString()&&r.push(n[o])}return r}function h(e,t,n){var r=t.get(),o=r.index,a=e.dom;(n=!1!==n)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,a.removeClass(c(e,r.index),"mce-match-marker-selected");var i=c(e,o);return i.length?(a.addClass(c(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(i[0]),o):-1}function v(e,t){var n=t.parentNode;e.remove(t),e.isEmpty(n)&&e.remove(n)}function f(e,t,n,r,o){var a,i,c,u,d,s,l,f=(s=o,l=n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n]"),s?"\\b"+l+"\\b":l),m=(a=e,i=t,c=new RegExp(f,r?"g":"gi"),(d=a.dom.create("span",{"data-mce-bogus":1})).className="mce-match-marker",u=a.getBody(),O(a,i,!1),S.findAndReplaceDOMText(c,u,d,!1,a.schema));if(m){var g=h(e,t,!0);t.set({index:g,count:m,text:n,matchCase:r,wholeWord:o})}return m}function y(e,t){var n=h(e,t,!0);t.set(C(C({},t.get()),{index:n}))}function b(e,t){var n=h(e,t,!1);t.set(C(C({},t.get()),{index:n}))}function N(e){var t=g(e);return null!==t&&0<t.length}function m(e,t,n,r,o){var a,i,c,u,d,s=t.get(),l=s.index,f=l;for(r=!1!==r,c=e.getBody(),i=T.grep(T.toArray(c.getElementsByTagName("span")),N),a=0;a<i.length;a++){var m=g(i[a]);if(u=d=parseInt(m,10),o||u===s.index){for(n.length?(i[a].firstChild.nodeValue=n,p(i[a])):v(e.dom,i[a]);i[++a];){if((u=parseInt(g(i[a]),10))!==d){a--;break}v(e.dom,i[a])}r&&f--}else l<d&&i[a].setAttribute("data-mce-index",String(d-1))}return t.set(C(C({},s),{count:o?0:s.count-1,index:f})),r?y(e,t):b(e,t),!o&&0<t.get().count}function e(){}function a(e){return function(){return e}}function t(){return B}function n(e){return e.isNone()}function r(e){return e()}function o(e){return e}function i(e,t){return function(){R(e,t)}}var u,d,w=function(e){function t(){return n}var n=e;return{get:t,set:function(e){n=e},clone:function(){return w(t())}}},s=tinymce.util.Tools.resolve("tinymce.PluginManager"),C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},T=tinymce.util.Tools.resolve("tinymce.util.Tools"),S={findAndReplaceDOMText:function P(e,t,n,r,o){function a(e,t){if(t=t||0,!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");var n=e.index;if(0<t){var r=e[t];if(!r)throw new Error("Invalid capture group");n+=e[0].indexOf(r),e[0]=r}return[n,n+e[0].length,[e[0]]]}var i,c,h,f,m,g,u=[],d=0;if(h=t.ownerDocument,f=o.getBlockElements(),m=o.getWhiteSpaceElements(),g=o.getShortEndedElements(),c=function s(e){var t;if(3===e.nodeType)return e.data;if(m[e.nodeName]&&!f[e.nodeName])return"";if(t="",x(e))return"\n";if((f[e.nodeName]||g[e.nodeName])&&(t+="\n"),e=e.firstChild)for(;t+=s(e),e=e.nextSibling;);return t}(t)){if(e.global)for(;i=e.exec(c);)u.push(a(i,r));else i=c.match(e),u.push(a(i,r));return u.length&&(d=u.length,function p(e,t,n){var r,o,a,i,c=[],u=0,d=e,s=t.shift(),l=0;e:for(;;){if((f[d.nodeName]||g[d.nodeName]||x(d))&&u++,3===d.nodeType&&(!o&&d.length+u>=s[1]?(o=d,i=s[1]-u):r&&c.push(d),!r&&d.length+u>s[0]&&(r=d,a=s[0]-u),u+=d.length),r&&o){if(d=n({startNode:r,startNodeIndex:a,endNode:o,endNodeIndex:i,innerNodes:c,match:s[2],matchIndex:l}),u-=o.length-i,o=r=null,c=[],l++,!(s=t.shift()))break}else if(m[d.nodeName]&&!f[d.nodeName]||!d.firstChild){if(d.nextSibling){d=d.nextSibling;continue}}else if(!x(d)){d=d.firstChild;continue}for(;;){if(d.nextSibling){d=d.nextSibling;break}if(d.parentNode===e)break e;d=d.parentNode}}}(t,u,function l(e){var p;if("function"!=typeof e){var r=e.nodeType?e:h.createElement(e);p=function(e,t){var n=r.cloneNode(!1);return n.setAttribute("data-mce-index",t),e&&n.appendChild(h.createTextNode(e)),n}}else p=e;return function(e){var t,n,r,o=e.startNode,a=e.endNode,i=e.matchIndex;if(o===a){var c=o;r=c.parentNode,0<e.startNodeIndex&&(t=h.createTextNode(c.data.substring(0,e.startNodeIndex)),r.insertBefore(t,c));var u=p(e.match[0],i);return r.insertBefore(u,c),e.endNodeIndex<c.length&&(n=h.createTextNode(c.data.substring(e.endNodeIndex)),r.insertBefore(n,c)),c.parentNode.removeChild(c),u}t=h.createTextNode(o.data.substring(0,e.startNodeIndex)),n=h.createTextNode(a.data.substring(e.endNodeIndex));for(var d=p(o.data.substring(e.startNodeIndex),i),s=0,l=e.innerNodes.length;s<l;++s){var f=e.innerNodes[s],m=p(f.data,i);f.parentNode.replaceChild(m,f)}var g=p(a.data.substring(0,e.endNodeIndex),i);return(r=o.parentNode).insertBefore(t,o),r.insertBefore(d,o),r.removeChild(o),(r=a.parentNode).insertBefore(g,a),r.insertBefore(n,a),r.removeChild(a),g}}(n))),d}}},O=function(e,t,n){var r,o,a,i,c=t.get();for(o=T.toArray(e.getBody().getElementsByTagName("span")),r=0;r<o.length;r++){var u=g(o[r]);null!==u&&u.length&&(u===c.index.toString()&&(a=a||o[r].firstChild,i=o[r].firstChild),p(o[r]))}if(t.set(C(C({},c),{index:-1,count:0,text:""})),a&&i){var d=e.dom.createRng();return d.setStart(a,0),d.setEnd(i,i.data.length),!1!==n&&e.selection.setRng(d),d}},l=function(r,o){return{done:function(e){return O(r,o,e)},find:function(e,t,n){return f(r,o,e,t,n)},next:function(){return y(r,o)},prev:function(){return b(r,o)},replace:function(e,t,n){return m(r,o,e,t,n)}}},A=a(!1),k=a(!0),B=(u={fold:function(e){return e()},is:A,isSome:A,isNone:k,getOr:o,getOrThunk:r,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(undefined),or:o,orThunk:r,map:t,each:e,bind:t,exists:A,forall:k,filter:t,equals:n,equals_:n,toArray:function(){return[]},toString:a("none()")},Object.freeze&&Object.freeze(u),u),I=function(n){function e(){return o}function t(e){return e(n)}var r=a(n),o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:k,isNone:A,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(e){return I(e(n))},each:function(e){e(n)},bind:t,exists:t,forall:t,filter:function(e){return e(n)?o:B},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(A,function(e){return t(n,e)})}};return o},E={some:I,none:t,from:function(e){return null===e||e===undefined?B:I(e)}},M=(d="function",function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"==t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t}(e)===d}),D=(Array.prototype.slice,M(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.Env")),R=function(a,i){function c(e){(1<i.get().count?e.enable:e.disable)("next"),(1<i.get().count?e.enable:e.disable)("prev")}function u(e,t){!function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}(["replace","replaceall","prev","next"],t?e.disable:e.enable)}function d(e,t){D.browser.isSafari()&&D.deviceType.isTouch()&&("find"===t||"replace"===t||"replaceall"===t)&&e.focus(t)}function s(e){O(a,i,!1),u(e,!0),c(e)}function l(e){var t=e.getData(),n=i.get();if(t.findtext.length){if(n.text===t.findtext&&n.matchCase===t.matchcase&&n.wholeWord===t.wholewords)y(a,i);else{var r=f(a,i,t.findtext,t.matchcase,t.wholewords);r<=0&&function o(e){a.windowManager.alert("Could not find the specified string.",function(){e.focus("findtext")})}(e),u(e,0===r)}c(e)}else s(e)}var t,e=(t=w(E.none()),{clear:function(){t.set(E.none())},set:function(e){t.set(E.some(e))},isSet:function(){return t.get().isSome()},on:function(e){t.get().each(e)}});a.undoManager.add();var n=T.trim(a.selection.getContent({format:"text"})),r=i.get(),o={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",disabled:!0}],initialData:{findtext:n,replacetext:"",wholewords:r.wholeWord,matchcase:r.matchCase},onChange:function(e,t){"findtext"===t.name&&0<i.get().count&&s(e)},onAction:function(e,t){var n,r,o=e.getData();switch(t.name){case"find":l(e);break;case"replace":m(a,i,o.replacetext)?c(e):s(e);break;case"replaceall":m(a,i,o.replacetext,!0,!0),s(e);break;case"prev":b(a,i),c(e);break;case"next":y(a,i),c(e);break;case"matchcase":case"wholewords":n=e.getData(),r=i.get(),i.set(C(C({},r),{matchCase:n.matchcase,wholeWord:n.wholewords})),s(e)}d(e,t.name)},onSubmit:function(e){l(e),d(e,"find")},onClose:function(){a.focus(),O(a,i),a.undoManager.add()}};e.set(a.windowManager.open(o,{inline:"toolbar"}))},F=function(e,t){e.addCommand("SearchReplace",function(){R(e,t)})},j=function(e,t){e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:i(e,t),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:i(e,t),icon:"search"}),e.shortcuts.add("Meta+F","",i(e,t))};!function W(){s.add("searchreplace",function(e){var t=w({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1});return F(e,t),j(e,t),l(e,t)})}()}();