/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.4 (2019-12-11)
 */
!function(n){"use strict";function r(t,e){var n=t||e,r=/^(\d+)([ms]?)$/.exec(""+n);return(r[2]?{s:1e3,m:6e4}[r[2]]:1)*parseInt(n,10)}function o(t){var e=t.getParam("autosave_prefix","tinymce-autosave-{path}{query}{hash}-{id}-");return e=(e=(e=(e=e.replace(/\{path\}/g,n.document.location.pathname)).replace(/\{query\}/g,n.document.location.search)).replace(/\{hash\}/g,n.document.location.hash)).replace(/\{id\}/g,t.id)}function a(t,e){var n=t.settings.forced_root_block;return""===(e=d.trim(void 0===e?t.getBody().innerHTML:e))||new RegExp("^<"+n+"[^>]*>((\xa0|&nbsp;|[ \t]|<br[^>]*>)+?|)</"+n+">|<br>$","i").test(e)}function i(t){var e=parseInt(v.getItem(o(t)+"time"),10)||0;return!((new Date).getTime()-e>function(t){return r(t.settings.autosave_retention,"20m")}(t))||(g(t,!1),!1)}function u(t){var e=o(t);!a(t)&&t.isDirty()&&(v.setItem(e+"draft",t.getContent({format:"raw",no_events:!0})),v.setItem(e+"time",(new Date).getTime().toString()),function(t){t.fire("StoreDraft")}(t))}function s(t){var e=o(t);i(t)&&(t.setContent(v.getItem(e+"draft"),{format:"raw"}),function(t){t.fire("RestoreDraft")}(t))}function c(t,e){var n=function(t){return r(t.settings.autosave_interval,"30s")}(t);e.get()||(m.setInterval(function(){t.removed||u(t)},n),e.set(!0))}function f(t){t.undoManager.transact(function(){s(t),g(t)}),t.focus()}var l=function(t){function e(){return n}var n=t;return{get:e,set:function(t){n=t},clone:function(){return l(e())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),m=tinymce.util.Tools.resolve("tinymce.util.Delay"),v=tinymce.util.Tools.resolve("tinymce.util.LocalStorage"),d=tinymce.util.Tools.resolve("tinymce.util.Tools"),g=function(t,e){var n=o(t);v.removeItem(n+"draft"),v.removeItem(n+"time"),!1!==e&&function(t){t.fire("RemoveDraft")}(t)};function y(r){for(var o=[],t=1;t<arguments.length;t++)o[t-1]=arguments[t];return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=o.concat(t);return r.apply(null,n)}}function p(n,t){return function(t){t.setDisabled(!i(n));function e(){return t.setDisabled(!i(n))}return n.on("StoreDraft RestoreDraft RemoveDraft",e),function(){return n.off("StoreDraft RestoreDraft RemoveDraft",e)}}}var D=tinymce.util.Tools.resolve("tinymce.EditorManager");!function e(){t.add("autosave",function(t){var e=l(!1);return function(t){t.editorManager.on("BeforeUnload",function(t){var e;d.each(D.get(),function(t){t.plugins.autosave&&t.plugins.autosave.storeDraft(),!e&&t.isDirty()&&function(t){return t.getParam("autosave_ask_before_unload",!0)}(t)&&(e=t.translate("You have unsaved changes are you sure you want to navigate away?"))}),e&&(t.preventDefault(),t.returnValue=e)})}(t),function(t,e){c(t,e),t.ui.registry.addButton("restoredraft",{tooltip:"Restore last draft",icon:"restore-draft",onAction:function(){f(t)},onSetup:p(t)}),t.ui.registry.addMenuItem("restoredraft",{text:"Restore last draft",icon:"restore-draft",onAction:function(){f(t)},onSetup:p(t)})}(t,e),t.on("init",function(){(function(t){return t.getParam("autosave_restore_when_empty",!1)})(t)&&t.dom.isEmpty(t.getBody())&&s(t)}),function(t){return{hasDraft:y(i,t),storeDraft:y(u,t),restoreDraft:y(s,t),removeDraft:y(g,t),isEmpty:y(a,t)}}(t)})}()}(window);