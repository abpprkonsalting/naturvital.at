"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(e,r,n){function t(t){var n=r.console;l[t]||(l[t]=!0,e.migrateWarnings.push(t),n&&n.warn&&!e.migrateMute&&(n.warn("JQMIGRATE: "+t),e.migrateTrace&&n.trace&&n.trace()))};function o(r,n,a,o){if(Object.defineProperty)try{return void Object.defineProperty(r,n,{configurable:!0,enumerable:!0,get:function(){return t(o),a},set:function(e){t(o),a=e}})}catch(i){};e._definePropertyBroken=!0,r[n]=a};e.migrateVersion="1.4.1";var l={};e.migrateWarnings=[],r.console&&r.console.log&&r.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){l={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&t("jQuery is not compatible with Quirks Mode");var d=e("<input/>",{size:1}).attr("size")&&e.attrFn,b=e.attr,E=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},J=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},B=/^(?:input|button)$/i,D=/^[238]$/,I=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,P=/^(?:checked|selected)$/i;o(e,"attrFn",d||{},"jQuery.attrFn is deprecated"),e.attr=function(r,a,o,i){var s=a.toLowerCase(),u=r&&r.nodeType;return i&&(b.length<4&&t("jQuery.fn.attr( props, pass ) is deprecated"),r&&!D.test(u)&&(d?a in d:e.isFunction(e.fn[a])))?e(r)[a](o):("type"===a&&o!==n&&B.test(r.nodeName)&&r.parentNode&&t("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[s]&&I.test(s)&&(e.attrHooks[s]={get:function(t,r){var a,o=e.prop(t,r);return o===!0||"boolean"!=typeof o&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,r,n){var a;return r===!1?e.removeAttr(t,n):(a=e.propFix[n]||n,a in t&&(t[a]=!0),t.setAttribute(n,n.toLowerCase())),n}},P.test(s)&&t("jQuery.fn.attr('"+s+"') might use property instead of attribute")),b.call(e,r,a,o))},e.attrHooks.value={get:function(e,r){var n=(e.nodeName||"").toLowerCase();return"button"===n?E.apply(this,arguments):("input"!==n&&"option"!==n&&t("jQuery.fn.attr('value') no longer gets properties"),r in e?e.value:null)},set:function(e,r){var n=(e.nodeName||"").toLowerCase();return"button"===n?J.apply(this,arguments):("input"!==n&&"option"!==n&&t("jQuery.fn.attr('value', val) no longer sets properties"),void(e.value=r))}};var s,a,y=e.fn.init,u=e.find,A=e.parseJSON,L=/^\s*</,O=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,F=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,R=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(r,a,o){var s,i;return r&&"string"==typeof r&&!e.isPlainObject(a)&&(s=R.exec(e.trim(r)))&&s[0]&&(L.test(r)||t("$(html) HTML strings must start with '<' character"),s[3]&&t("$(html) HTML text after last tag is ignored"),"#"===s[0].charAt(0)&&(t("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),a&&a.context&&a.context.nodeType&&(a=a.context),e.parseHTML)?y.call(this,e.parseHTML(s[2],a&&a.ownerDocument||a||document,!0),a,o):(i=y.apply(this,arguments),r&&r.selector!==n?(i.selector=r.selector,i.context=r.context):(i.selector="string"==typeof r?r:"",r&&(i.context=r.nodeType?r:a||document)),i)},e.fn.init.prototype=e.fn,e.find=function(e){var r=Array.prototype.slice.call(arguments);if("string"==typeof e&&O.test(e))try{document.querySelector(e)}catch(n){e=e.replace(F,function(e,t,r,n){return"["+t+r+"\""+n+"\"]"});try{document.querySelector(e),t("Attribute selector with '#' must be quoted: "+r[0]),r[0]=e}catch(n){t("Attribute selector with '#' was not fixed: "+r[0])}};return u.apply(this,r)};var i;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e.find[i]=u[i]);e.parseJSON=function(e){return e?A.apply(this,arguments):(t("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(s=e.uaMatch(navigator.userAgent),a={},s.browser&&(a[s.browser]=!0,a.version=s.version),a.chrome?a.webkit=!0:a.webkit&&(a.safari=!0),e.browser=a),o(e,"browser",e.browser,"jQuery.browser is deprecated"),e.boxModel=e.support.boxModel="CSS1Compat"===document.compatMode,o(e,"boxModel",e.boxModel,"jQuery.boxModel is deprecated"),o(e.support,"boxModel",e.support.boxModel,"jQuery.support.boxModel is deprecated"),e.sub=function(){function r(e,t){return new r.fn.init(e,t)};e.extend(!0,r,this),r.superclass=this,r.fn=r.prototype=this(),r.fn.constructor=r,r.sub=this.sub,r.fn.init=function(t,a){var o=e.fn.init.call(this,t,a,n);return o instanceof r?o:r(o)},r.fn.init.prototype=r.fn;var n=r(document);return t("jQuery.sub() is deprecated"),r},e.fn.size=function(){return t("jQuery.fn.size() is deprecated; use the .length property"),this.length};var c=!1;e.swap&&e.each(["height","width","reliableMarginRight"],function(t,r){var n=e.cssHooks[r]&&e.cssHooks[r].get;n&&(e.cssHooks[r].get=function(){var e;return c=!0,e=n.apply(this,arguments),c=!1,e})}),e.swap=function(e,r,n,a){var i,o,s={};c||t("jQuery.swap() is undocumented and deprecated");for(o in r)s[o]=e.style[o],e.style[o]=r[o];i=n.apply(e,a||[]);for(o in r)e.style[o]=s[o];return i},e.ajaxSetup({converters:{"text json":e.parseJSON}});var H=e.fn.data;e.fn.data=function(r){var o,a,i=this[0];return!i||"events"!==r||1!==arguments.length||(o=e.data(i,r),a=e._data(i,r),o!==n&&o!==a||a===n)?H.apply(this,arguments):(t("Use of jQuery.fn.data('events') is deprecated"),a)};var N=/\/(java|ecma)script/i;e.clean||(e.clean=function(r,n,a,o){n=n||document,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,t("jQuery.clean() is deprecated");var s,i,c,d,u=[];if(e.merge(u,e.buildFragment(r,n).childNodes),a)for(c=function(e){return!e.type||N.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):a.appendChild(e):void 0},s=0;null!=(i=u[s]);s++)e.nodeName(i,"script")&&c(i)||(a.appendChild(i),"undefined"!=typeof i.getElementsByTagName&&(d=e.grep(e.merge([],i.getElementsByTagName("script")),c),u.splice.apply(u,[s+1,0].concat(d)),s+=d.length));return u});var k=e.event.add,M=e.event.remove,C=e.event.trigger,S=e.fn.toggle,p=e.fn.live,f=e.fn.die,T=e.fn.load,g="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",m=new RegExp("\\b(?:"+g+")\\b"),h=/(?:^|\s)hover(\.\S+|)\b/,v=function(r){return"string"!=typeof r||e.event.special.hover?r:(h.test(r)&&t("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),r&&r.replace(h,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&o(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,r,n,a,o){e!==document&&m.test(r)&&t("AJAX events should be attached to document: "+r),k.call(this,e,v(r||""),n,a,o)},e.event.remove=function(e,t,r,n,a){M.call(this,e,v(t)||"",r,n,a)},e.each(["load","unload","error"],function(r,n){e.fn[n]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===n&&"string"==typeof e[0]?T.apply(this,e):(t("jQuery.fn."+n+"() is deprecated"),e.splice(0,0,n),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),e.fn.toggle=function(r,n){if(!e.isFunction(r)||!e.isFunction(n))return S.apply(this,arguments);t("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=r.guid||e.guid++,o=0,s=function(t){var n=(e._data(this,"lastToggle"+r.guid)||0)%o;return e._data(this,"lastToggle"+r.guid,n+1),t.preventDefault(),a[n].apply(this,arguments)||!1};for(s.guid=i;o<a.length;)a[o++].guid=i;return this.click(s)},e.fn.live=function(r,n,a){return t("jQuery.fn.live() is deprecated"),p?p.apply(this,arguments):(e(this.context).on(r,this.selector,n,a),this)},e.fn.die=function(r,n){return t("jQuery.fn.die() is deprecated"),f?f.apply(this,arguments):(e(this.context).off(r,this.selector||"**",n),this)},e.event.trigger=function(e,r,n,a){return n||m.test(e)||t("Global events are undocumented and deprecated"),C.call(this,e,r,n||document,a)},e.each(g.split("|"),function(t,r){e.event.special[r]={setup:function(){var t=this;return t!==document&&(e.event.add(document,r+"."+e.guid,function(){e.event.trigger(r,Array.prototype.slice.call(arguments,1),t,!0)}),e._data(this,r,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,r+"."+e._data(this,r)),!1}}}),e.event.special.ready={setup:function(){this===document&&t("'ready' event is deprecated")}};var x=e.fn.andSelf||e.fn.addBack,Q=e.fn.find;if(e.fn.andSelf=function(){return t("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),x.apply(this,arguments)},e.fn.find=function(e){var t=Q.apply(this,arguments);return t.context=this.context,t.selector=this.selector?this.selector+" "+e:e,t},e.Callbacks){var w=e.Deferred,j=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];e.Deferred=function(r){var n=w(),a=n.promise();return n.pipe=a.pipe=function(){var r=arguments;return t("deferred.pipe() is deprecated"),e.Deferred(function(t){e.each(j,function(o,i){var s=e.isFunction(r[o])&&r[o];n[i[1]](function(){var r=s&&s.apply(this,arguments);r&&e.isFunction(r.promise)?r.promise().done(t.resolve).fail(t.reject).progress(t.notify):t[i[0]+"With"](this===a?t.promise():this,s?[r]:arguments)})}),r=null}).promise()},n.isResolved=function(){return t("deferred.isResolved is deprecated"),"resolved"===n.state()},n.isRejected=function(){return t("deferred.isRejected is deprecated"),"rejected"===n.state()},r&&r.call(n,n),n}}}(jQuery,window);(function(){jQuery(document).ready(function(){var s=jQuery('#search-placeholder');s.append('<form action="/" id="searchform" method="get" class="" style="margin-right: 30%;"><div><input style="background: transparent;line-height: 28px;color: gray;" type="submit" value="\ue803" id="searchsubmit" class="button avia-font-entypo-fontello"><input style="min-width: 250px;padding: 5px;" type="text" id="s" name="s" value="" placeholder="Search"></div></form>');var t=jQuery('#second-menu-placeholder'),i=jQuery('#second-menu-placeholder .avia-menu.av-main-nav-wrap'),n=jQuery('#container_wrap');t.remove();n.append(i);if(jQuery('body').hasClass('home')){var e=jQuery('#av-layout-grid-1 .flex_cell_inner .avia-button');e.each(function(){jQuery(this).attr('href','');jQuery(this).click(e,function(e){e.preventDefault();e.data.css('background','transparent');e.data.css('color','#017635');jQuery(this).css('background','#017635');jQuery(this).css('color','white');var a=jQuery('#av_section_1 .slide-entry-wrap ');a.removeClass('active-slide');a.css('visibility','hidden');var t=jQuery(this).text(),r=a.filter(function(e,r){var i=jQuery(r).find('.content-slider-slide'),a=i.attr('id').split('-');if(a.length>0&&a[1]==t)return!0;else return!1});r.addClass('active-slide');r.css('visibility','visible');r.css('transform','translate3d(0px, 0px, 0px)')})});var a=jQuery('#av_section_1  .avia-slideshow-arrows a.next-slide');a.each(function(e,r){jQuery(r).click(function(){var n=jQuery('#av_section_1 .slide-entry-wrap.active-slide .content-slider-slide'),s=n.attr('id').split('-')[1],e=jQuery('#av-layout-grid-1 .flex_cell_inner .avia-button'),r=e.filter(function(e,r){var a=jQuery(r).find('span').text();return a==s});r.css('background','transparent');r.css('color','#017635');var t=e.index(r),i=0;if(t<e.length-1)i=t+1;var a=jQuery(e[i]);a.css('background','#017635');a.css('color','white')})});var r=jQuery('#av_section_1  .avia-slideshow-arrows a.prev-slide');r.each(function(e,r){jQuery(r).click(function(){var n=jQuery('#av_section_1 .slide-entry-wrap.active-slide .content-slider-slide'),s=n.attr('id').split('-')[1],e=jQuery('#av-layout-grid-1 .flex_cell_inner .avia-button'),r=e.filter(function(e,r){var a=jQuery(r).find('span').text();return a==s});r.css('background','transparent');r.css('color','#017635');var t=e.index(r),i=e.length-1;if(t>0)i=t-1;var a=jQuery(e[i]);a.css('background','#017635');a.css('color','white')})})}})})();