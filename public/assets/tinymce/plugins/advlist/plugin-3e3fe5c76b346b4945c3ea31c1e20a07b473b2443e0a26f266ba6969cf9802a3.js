!function(){"use strict";function n(){}function o(n){return function(){return n}}function t(){return p}function e(n){return n.isNone()}function r(n){return n()}function i(n){return n}function O(n,t,e){var r=function(n,t){for(var e=0;e<n.length;e++)if(t(n[e]))return e;return-1}(t.parents,L),i=-1!==r?t.parents.slice(0,r):t.parents,o=v.grep(i,N(n));return 0<o.length&&o[0].nodeName===e}function u(n,t,e,r,i,o){var u,l,c,s,f,a,d,g,p,m,y;0<o.length?(d=t,g=e,p=r,m=i,y=o,(a=n).ui.registry.addSplitButton(d,{tooltip:g,icon:"OL"===m?"ordered-list":"unordered-list",presets:"listpreview",columns:3,fetch:function(n){n(v.map(y,function(n){return{type:"choiceitem",value:"default"===n?"":n,icon:"list-"+("OL"===m?"num":"bull")+"-"+("disc"===n||"decimal"===n?"default":n),text:n.replace(/\-/g," ").replace(/\b\w/g,function(n){return n.toUpperCase()})}}))},onAction:function(){return a.execCommand(p)},onItemAction:function(n,t){h(a,m,t)},select:function(t){return S(a).map(function(n){return t===n}).getOr(!1)},onSetup:function(t){function n(n){t.setActive(O(a,n,m))}return a.on("NodeChange",n),function(){return a.off("NodeChange",n)}}})):(l=t,c=e,s=r,f=i,(u=n).ui.registry.addToggleButton(l,{active:!1,tooltip:c,icon:"OL"===f?"ordered-list":"unordered-list",onSetup:function(t){function n(n){t.setActive(O(u,n,f))}return u.on("NodeChange",n),function(){return u.off("NodeChange",n)}},onAction:function(){return u.execCommand(s)}}))}var l,c=tinymce.util.Tools.resolve("tinymce.PluginManager"),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),h=function(n,t,e){var r="UL"===t?"InsertUnorderedList":"InsertOrderedList";n.execCommand(r,!1,!1===e?null:{"list-style-type":e})},s=function(e){e.addCommand("ApplyUnorderedListStyle",function(n,t){h(e,"UL",t["list-style-type"])}),e.addCommand("ApplyOrderedListStyle",function(n,t){h(e,"OL",t["list-style-type"])})},f=function(n){var t=n.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman");return t?t.split(/[ ,]/):[]},a=function(n){var t=n.getParam("advlist_bullet_styles","default,circle,square");return t?t.split(/[ ,]/):[]},d=o(!1),g=o(!0),p=(l={fold:function(n){return n()},is:d,isSome:d,isNone:g,getOr:i,getOrThunk:r,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(undefined),or:i,orThunk:r,map:t,each:n,bind:t,exists:d,forall:g,filter:t,equals:e,equals_:e,toArray:function(){return[]},toString:o("none()")},Object.freeze&&Object.freeze(l),l),m=function(e){function n(){return i}function t(n){return n(e)}var r=o(e),i={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:g,isNone:d,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:n,orThunk:n,map:function(n){return m(n(e))},each:function(n){n(e)},bind:t,exists:t,forall:t,filter:function(n){return n(e)?i:p},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(d,function(n){return t(e,n)})}};return i},y=function(n){return null===n||n===undefined?p:m(n)},L=function(n){return n&&/^(TH|TD)$/.test(n.nodeName)},N=function(r){return function(n){return n&&/^(OL|UL|DL)$/.test(n.nodeName)&&(e=n,(t=r).$.contains(t.getBody(),e));var t,e}},S=function(n){var t=n.dom.getParent(n.selection.getNode(),"ol,ul"),e=n.dom.getStyle(t,"listStyleType");return y(e)},T=function(n){u(n,"numlist","Numbered list","InsertOrderedList","OL",f(n)),u(n,"bullist","Bullet list","InsertUnorderedList","UL",a(n))};!function b(){c.add("advlist",function(n){var t,e,r;e="lists",r=(t=n).settings.plugins?t.settings.plugins:"",-1!==v.inArray(r.split(/[ ,]/),e)&&(T(n),s(n))})}()}();