if (self.CavalryLogger) { CavalryLogger.start_js(["x8N2HL2"]); }

__d("KaiOSSendMessageUtil",["Event"],(function(a,b,c,d,e,f){"use strict";f.postMessage=a;c=function(){function a(){this.$1=!1,this.$2=null,this.$3()}var c=a.prototype;c.$3=function(){var a=this;this.$2=b("Event").listen(window,"beforeunload",function(){a.$1=!0,a.$2&&(a.$2.remove(),a.$2=null)})};c.postMessage=function(a,b,c,d){if(a&&b&&!this.$1){var e=new Map();e.set(g,b);c&&e.set(h,c);d!=null&&e.set(i,d);a.postMessage(e,"*")}};return a}();d=Object.freeze({HANDLE_BACK:"handle_back",MESSAGE_RECEIVED:"received",OPEN_URL:"open_url",REGISTER_PUSH:"register_push",SCREEN_ORIENTATION_LOCK:"screen_orientation_lock",UNREGISTER_PUSH:"unregister_push",CHECK_FOR_PUSH_UPDATE:"check_for_push_update",PUSH_UPDATE_COMPLETED:"push_update_completed",SET_VOLUME:"set_volume",FBT_STRINGS:"fbt_strings",CONFIG_RESPONSE:"config_response",FETCH_MSISDN:"fetch_msisdn",GET_CONTACTS:"get_contacts",TOGGLE_SPATIAL_NAV:"toggle_spatial_nav",LITE_MIGRATION_STATUS:"lite_migration_status"});f.Type=d;var g="action";f.Action=g;var h="payload";f.ActionPayload=h;var i="callback_id";f.CallbackID=i;var j=new c();f._singletonImpl=j;function a(a,b,c,d){j.postMessage(a,b,c,d)}}),null);
__d("KaiOSConnectionHelper",["KaiOSSendMessageUtil"],(function(a,b,c,d,e,f){"use strict";var g="app://m.facebook.com";a=function(){function a(){this.hostWindow=null,this.resolveOnConnect=null}var c=a.prototype;c.receiveMessage=function(a){if(!a||a.origin!==g||!a.source)return!1;if(a.data==="ping"){this.hostWindow||(this.hostWindow=a.source,b("KaiOSSendMessageUtil").postMessage(this.hostWindow,b("KaiOSSendMessageUtil").Type.MESSAGE_RECEIVED));a=this.resolveOnConnect;a&&(a(),this.resolveOnConnect=null)}return!0};return a}();c=new a();d=c;e.exports=d}),null);
__d("KaiOSControllerConfig",[],(function(a,b,c,d,e,f){"use strict";a={};b=a;e.exports=b}),null);
__d("KaiOSControllerUtils",["KaiOSConnectionHelper","KaiOSSendMessageUtil","URLSearchParams"],(function(a,b,c,d,e,f){"use strict";f.keyDownEventHandledByRegPage=a;f.isOnHomeOrConfPage=c;f.shouldExitOnBackForLoggedOutPush=d;f.openUrl=e;f.createCallbackHandler=h;f.sendBasicPost=i;var g=function(){function a(){this.callbacks=new Map(),this.nextCallbackID=1}var b=a.prototype;b.setCallback=function(a){var b=(this.nextCallbackID++).toString();this.callbacks.set(b,a);return b};b.handleCallback=function(a,b){if(a){var c=this.callbacks.get(a);c&&(this.callbacks["delete"](a),c(b));return!0}return!1};return a}();function a(a){return!1}function c(){var a=location.pathname;a=a==="/"||a==="/kaiosapp/jio/home/"||a.startsWith("/home.php")||a.startsWith("/index.php")||a.startsWith("/confirmemail.php");var c=new(b("URLSearchParams"))(window.location.search);c=c.has("soft");return a&&!c}function d(){var a=new(b("URLSearchParams"))(window.location.search);return a.has("exit_on_back")}function e(a){var c=new Map();c.set("url",a);b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.OPEN_URL,c)}function h(){return new g()}function i(a,b,c){var d=new XMLHttpRequest();d.open("POST",a);d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a=[];for(var e in b)a.push(encodeURIComponent(e)+"="+encodeURIComponent(b[e]));d.onload=function(){c&&c(d)};d.send(a.join("&"))}}),null);
__d("KaiOSFullscreenVideoHandler",["KaiOSSendMessageUtil","getActiveElement"],(function(a,b,c,d,e,f){"use strict";var g=Object.freeze({RIGHT:6,LEFT:4,UP:2,DOWN:8,MIDDLE:5}),h=Object.freeze({KEY:"type",DOWN:-1,UP:1});a=function(){function a(a){this.hostWindow=a}var c=a.prototype;c.handleKeyDownEvent=function(a){var b=this.getVideoIfFullScreen();if(!b)return!1;if(a.key==="SoftLeft"){document.exitFullscreen();return!0}else if(a.key==="SoftRight"){b.muted=!b.muted;return!0}return!1};c.handleClickEvent=function(a){a=this.getVideoIfFullScreen();if(!a)return!1;this.togglePause(a);return!0};c.handleMouseMoveEvent=function(a){return!1};c.getVideoIfFullScreen=function(){return document.fullscreenElement&&document.fullscreenElement.nodeName&&document.fullscreenElement.nodeName=="VIDEO"?b("getActiveElement")():null};c.seek=function(a,b){b?a.currentTime=Math.min(a.duration,a.currentTime+10):a.currentTime=Math.max(0,a.currentTime-10)};c.togglePause=function(a){a.paused?a.play():a.pause()};c.volume=function(a){if(!a||a!=h.UP&&a!=h.DOWN)return;var c=new Map();c.set(h.KEY,a.toString());b("KaiOSSendMessageUtil").postMessage(this.hostWindow,b("KaiOSSendMessageUtil").Type.SET_VOLUME,c)};c.control=function(a,b){if(b)switch(b){case g.UP:this.volume(h.UP);break;case g.DOWN:this.volume(h.DOWN);break;case g.LEFT:this.seek(a,!1);break;case g.RIGHT:this.seek(a,!0);break;case g.MIDDLE:this.togglePause(a);break}};return a}();e.exports=a}),null);
__d("KaiOSHTMLElementUtils",["EventListener","Keys"],(function(a,b,c,d,e,f){"use strict";f.isTextfieldInput=a;f.isLink=i;f.isNTElement=c;f.isFileUploadElement=d;f.isSpatialNavElement=e;f.isVisible=j;f.getFirstLink=k;f.attachClickHandlerToSubmitFormOnElement=l;var g=["email","number","password","search","tel","text","url"];function h(a){var b=a.tabIndex;if(parseInt(b,10)<0)return!1;if(b>0||b===0&&a.getAttribute("tabIndex")!==null)return!0;if(a instanceof HTMLAnchorElement)return!!a.href&&a.rel!="ignore";else if(a instanceof HTMLInputElement)return a.type!="hidden"&&a.type!="file"&&!a.disabled;else if(a instanceof HTMLButtonElement||a instanceof HTMLSelectElement||a instanceof HTMLTextAreaElement)return!a.disabled;return!1}function a(a){return a instanceof HTMLTextAreaElement||a instanceof HTMLInputElement&&(g.includes(a.type)||a.type==="")}function i(a){return a.tagName==="A"}function c(a){return a.hasAttribute("data-nt")}function d(a){return a.hasAttribute("data-kaios-file-upload-element")}function e(a){return(a.hasAttribute("data-kaios-spatial-navigation")||a.hasAttribute("data-kaios-whitelist-nav")||h(a))&&!a.hasAttribute("data-kaios-blacklist-nav")&&j(a)}function j(a){return(a.offsetHeight!==0&&a.offsetWidth!==0||a.offsetParent!==null)&&window.getComputedStyle(a).visibility!=="hidden"}function k(a){for(var b=0;b<a.children.length;++b)if(i(a.children[b]))return a.children[b];for(var b=0;b<a.children.length;++b){var c=a.children[b];for(var d=0;d<c.children.length;++d)if(i(c.children[d]))return c.children[d]}return null}function l(a,c){b("EventListener").listen(a,"click",function(){c.submit()}),b("EventListener").listen(a,"keyup",function(a){a.keyCode===b("Keys").RETURN&&c.submit()})}}),null);
__d("KaiOSSoftkeyTrayLogger",["BanzaiLogger"],(function(a,b,c,d,e,f){"use strict";a=function(a){var c={event_category:"softkey_tray"};switch(a){case"kaios_tray_back":c.event="softkey_back_button_clicked";break;case"kaios_tray_menu":c.event="softkey_menu_button_clicked";break;case"kaios_tray_post":c.event="softkey_post_button_clicked";break;case"kaios_tray_menu_close":c.event="softkey_menu_close_button_clicked";break;default:c.event="softkey_other_button_clicked";c.miscellaneous={detail:a};break}b("BanzaiLogger").log("KaiOSEventsLoggerConfig",c)};f.logSoftkeyTrayButtonClicked=a}),null);
__d("KaiOSMenuHandler",["csx","cx","fbt","CSS","DOM","Event","KaiOSSoftkeyTrayLogger","MViewport","Stratcom","URI","regeneratorRuntime"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j;a=function(){function a(){var a=this;this.menuShown=!1;this.showPageSoftkeyTray=!1;this.toggleMenuVisibility=function(a,c){var d=b("MViewport").getScrollTop();if(d<=0)return;if(c)a.style.top="0px",a.classList.add("float");else{c=-Math.min(d,a.clientHeight);a.style.top=c+"px";a.classList.remove("float")}};this.$1=function(){a.showFloatingMenu()};this.$2=function(c){var d=a.leftButtonElement;c=c.getData().path;if(a.menuShown&&d!=null){var e=null;c!=null&&(e=new(j||(j=b("URI")))(c).getQueryData().soft);c=new CustomEvent("kaios_close_menu",{detail:{focusFirstNode:e!=="search"}});d.dispatchEvent(c);b("MViewport").scrollToTop()}};this.$3=function(c){c=c.detail;var d=c.leftButtonText;if(d!=null){a.showPageSoftkeyTray||b("DOM").show(a.softkeyTrayContainer);var e=c.leftButtonEvent,f=c.leftButtonLoggingId;f=b("DOM").create("div",{className:"_6ykc",id:f},d);b("DOM").replace(a.leftButtonElement,f);a.leftButtonElement=f;e!=null&&b("Event").listen(f,"click",function(){var b=new CustomEvent(e);window.dispatchEvent(b);a.restorePageTray()})}d=c.rightButtonText;if(d!=null){var g=c.rightButtonEvent;f=c.rightButtonLoggingId;f=b("DOM").create("div",{className:"_6ykd",id:f},d);b("DOM").replace(a.rightButtonElement,f);a.rightButtonElement=f;g!=null&&b("Event").listen(f,"click",function(){var a=new CustomEvent(g);window.dispatchEvent(a)})}d=c.centerButtonText;if(d!=null&&a.centerButtonElement!=null&&d!=a.centerButtonElement.textContent){f=b("DOM").create("div",{className:"_7gvg"},d);b("DOM").replace(a.centerButtonElement,f);a.centerButtonElement=f}};this.$4=function(b){a.restorePageTray()}}var c=a.prototype;c.handleKeyEvents=function(a){if(this.softkeyTrayContainer==null||this.softkeyTrayContainer.style.display!=""||this.viewportElement!=null&&this.viewportElement.style.display!="")return!1;switch(a.key){case"SoftLeft":a=this.leftButtonElement;if(a!=null){a.click();b("KaiOSSoftkeyTrayLogger").logSoftkeyTrayButtonClicked(a.getAttribute("id"));return!0}break;case"SoftRight":a=this.rightButtonElement;if(a!=null){a.click();b("KaiOSSoftkeyTrayLogger").logSoftkeyTrayButtonClicked(a.getAttribute("id"));return!0}break;case"Backspace":case"BrowserBack":case"ArrowUp":case"ArrowDown":if(this.menuShown&&this.leftButtonElement!=null){this.leftButtonElement.click();return!0}break}return!1};c.showFloatingMenu=function(){var a=this.menuContainerElement;a!=null&&(this.menuShown=!0,this.toggleMenuVisibility(a,!0),this.updateBackgroundOverlayVisibility(!0),this.setupCloseMenuButton())};c.setupCloseMenuButton=function(){var a=this,c,d=this.leftButtonElement,e=this.rightButtonElement,f=this.centerButtonElement,g=(c=b("DOM")).create("div",{className:"_6ykc",id:"kaios_tray_menu_close"},i._("Close"));c.replace(this.leftButtonElement,g);this.leftButtonElement=g;var h=c.create("div"),j=c.create("div");c.replace(this.rightButtonElement,h);this.rightButtonElement=h;c.replace(this.centerButtonElement,j);this.centerButtonElement=j;b("Event").listen(g,"click",function(){a.hideMenu(),a.swapButtons(g,d,h,e,j,f)});b("Event").listen(g,"kaios_close_menu",function(b){b=b.detail;var c=!0;typeof b==="object"&&("focusFirstNode"in b&&(c=b.focusFirstNode));a.hideMenu(c);a.swapButtons(g,d,h,e,j,f)})};c.hideMenu=function(a){var c;return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:a===void 0&&(a=!1),c=this.menuContainerElement,c&&(this.menuShown=!1,this.toggleMenuVisibility(c,!1),this.updateBackgroundOverlayVisibility(!1));case 3:case"end":return b.stop()}},null,this)};c.swapButtons=function(a,c,d,e,f,g){b("DOM").replace(a,c),b("DOM").replace(d,e),b("DOM").replace(f,g),this.leftButtonElement=c,this.rightButtonElement=e,this.centerButtonElement=g};c.updateBackgroundOverlayVisibility=function(a){this.backgroundElement&&(a?this.backgroundElement.classList.add("shown"):this.backgroundElement.classList.remove("shown"))};c.restorePageTray=function(){this.showPageSoftkeyTray||b("DOM").hide(this.softkeyTrayContainer),b("DOM").replace(this.leftButtonElement,this.pageLeftButtonElement),b("DOM").replace(this.rightButtonElement,this.pageRightButtonElement),this.leftButtonElement=this.pageLeftButtonElement,this.rightButtonElement=this.pageRightButtonElement};c.restoreMenuOnInitIfShown=function(){this.menuShown&&this.hideMenu()};c.setupSoftKeyElements=function(a,b,c,d,e){this.backgroundElement=a,this.menuContainerElement=b,this.menuRootElement=c,this.softkeyTrayContainer=d,this.viewportElement=e};c.setupLeftButton=function(a){this.leftButtonElement=a,this.pageLeftButtonElement=a};c.setupMenuButton=function(a){this.setupLeftButton(a),this.menuShown=!1,b("Event").listen(a,"click",this.$1)};c.setupRightButton=function(a){this.rightButtonElement=a,this.pageRightButtonElement=a};c.setupCenterButton=function(a){this.centerButtonElement=a};c.setupHistoryListener=function(){b("Stratcom").listen("history:change",null,this.$2)};c.setupNavigationUpdateListener=function(){b("Event").listen(window,"m:kaios:spatialnav:update_tray",this.$3)};c.setupRestoreTrayListener=function(){b("Stratcom").listen("m:kaios:spatialav:restore_tray",null,this.$4)};c.setupSoftKeyTrayShowHideListener=function(){var a=this;b("Stratcom").listen("m:kaios:spatialnav:hide_tray",null,function(){if(!a.softkeyTrayContainer)return;b("CSS").addClass(a.softkeyTrayContainer,"_7hj_")});b("Stratcom").listen("m:kaios:spatialnav:show_tray",null,function(){if(!a.softkeyTrayContainer)return;b("CSS").removeClass(a.softkeyTrayContainer,"_7hj_")})};return a}();var k={impl:new a(),setup:function(a){var c=document.querySelector("._6yui"),d=document.querySelector("._6ywo"),e=document.querySelector("._6usn"),f=document.getElementById("viewport"),g=document.getElementById("kaios_tray");k.impl.showPageSoftkeyTray=a;a||b("DOM").hide(g);k.impl.setupSoftKeyElements(c,d,e,g,f)},initForPage:function(a,b,c,d,e){k.setup(e),k.impl.setupNavigationUpdateListener(),k.impl.setupSoftKeyTrayShowHideListener(),k.impl.setupLeftButton(a),k.impl.setupCenterButton(d),k.impl.setupRightButton(b)},initForMenu:function(a){k.impl.restoreMenuOnInitIfShown(),k.impl.setupMenuButton(a),k.impl.setupHistoryListener(),k.impl.setupRestoreTrayListener(),k.impl.updateBackgroundOverlayVisibility(!1)},handleKeyEvents:function(a){return k.impl.handleKeyEvents(a)}};e.exports=k}),null);
__d("KaiOSNavigatorUtils",["KaiOSConnectionHelper","KaiOSSendMessageUtil"],(function(a,b,c,d,e,f){"use strict";f.showCursor=a;f.hideCursor=c;var g=new Map([["nav_mode","spatial"]]),h=new Map([["nav_mode","cursor"]]);function i(a){b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.TOGGLE_SPATIAL_NAV,a)}function a(){i(h)}function c(){i(g)}}),null);
__d("KaiOSKeyEventHandlers",["KaiOSConnectionHelper","KaiOSControllerConfig","KaiOSControllerUtils","KaiOSHTMLElementUtils","KaiOSMenuHandler","KaiOSNavigatorUtils","KaiOSSendMessageUtil","MViewport","URI","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";f.interceptClick=a;f.handleTextfieldFocus=c;f.handleTextfieldBlur=d;f.handleKeyDown=e;var g;function a(a){if(b("KaiOSControllerConfig").fullScreenVideoHandler&&b("KaiOSControllerConfig").fullScreenVideoHandler.handleClickEvent(a)){a.preventDefault();a.stopPropagation();return}var c=a.target,d=null;c&&c.tagName==="A"?d=c.href:c&&c.parentElement&&c.parentElement.tagName==="A"?d=c.parentElement.href:c&&c.parentElement&&c.parentElement.parentElement&&c.parentElement.parentElement.tagName==="A"&&(d=c.parentElement.parentElement.href);c=new(g||(g=b("URI")))(d);var e=d!=null&&d!==""&&!/\.facebook.com$/i.test(c.getDomain());d!=null&&(b("isLinkshimURI")(c)||e)&&(b("KaiOSControllerUtils").openUrl(d),a.preventDefault(),a.stopPropagation())}function h(a){return b("KaiOSControllerConfig").appVersion!=null&&b("KaiOSHTMLElementUtils").isTextfieldInput(a.target)}function c(a){h(a)&&b("KaiOSNavigatorUtils").hideCursor()}function d(a){h(a)&&b("KaiOSNavigatorUtils").showCursor()}function e(a){if(b("KaiOSMenuHandler").handleKeyEvents(a)||b("KaiOSControllerConfig").fullScreenVideoHandler&&b("KaiOSControllerConfig").fullScreenVideoHandler.handleKeyDownEvent(a)){a.preventDefault();a.stopPropagation();return}switch(a.key){case"Backspace":if(k())break;case"BrowserBack":i(a);break;case"Enter":j(a);break}}function i(a){document.fullscreenElement?(document.exitFullscreen(),a.preventDefault(),a.stopPropagation()):b("KaiOSControllerUtils").keyDownEventHandledByRegPage(a.key)?(a.preventDefault(),a.stopPropagation()):b("KaiOSControllerUtils").isOnHomeOrConfPage()&&b("MViewport").getScrollTop()>5?(a.preventDefault(),a.stopPropagation(),b("MViewport").scrollTo(0,0)):!b("KaiOSControllerUtils").isOnHomeOrConfPage()&&!b("KaiOSControllerUtils").shouldExitOnBackForLoggedOutPush()&&(b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.HANDLE_BACK),a.preventDefault(),a.stopPropagation())}function j(a){b("KaiOSControllerConfig").appVersion!=null&&a.target.type=="textarea"&&(a.target.blur(),a.preventDefault(),a.stopPropagation())}function k(){var a=document.activeElement;if(a&&a instanceof HTMLInputElement)return!0;else return!1}}),null);
__d("KaiOSLogger",["Banzai","BanzaiLogger"],(function(a,b,c,d,e,f){"use strict";a=function(a){b("BanzaiLogger").log("KaiOSEventsLoggerConfig",{event:"update_app_version",event_category:"app_info",app_version:a})};f.logAppVersion=a;c=function(a,c,d){b("BanzaiLogger").log("KaiOSEventsLoggerConfig",{event:a,event_category:c,extra_data:d})};f.logWithBanzai=c;d=function(a,c,d,e,f,g){var h=window.navigator.connection||null;b("Banzai").post("logger:KaiOSAppMigrationLoggerConfig",babelHelpers["extends"]({event:a,migration_phase:c,experiment_name:f||"unknown",experiment_group:g||"unknown",duration_ms:d?Math.floor(d):0,connection_type:h&&h.type?h.type:"",connection_effective_type:h&&h.effectiveType?h.effectiveType:""},e),{delay:b("Banzai").VITAL_WAIT})};f.logAppMigrationEvent=d}),null);
__d("XExternalShareComposerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/kaiosapp/composer/",{csid:{type:"String"},length:{type:"Int"},privacy_mutation_token:{type:"String"}})}),null);
__d("KaiOSShareHandler",["XAsyncRequest","XExternalShareComposerController"],(function(a,b,c,d,e,f){"use strict";f.handle=a;function a(a){if(a===void 0)return;var c=Math.min(a.length,3),d=new FormData();for(var e=0;e<c;e++)d.append("file_"+e,a[e]);e=b("XExternalShareComposerController").getURIBuilder().setInt("length",c).getURI();new(b("XAsyncRequest"))(e).setRawData(d).setMethod("POST").send()}}),null);
__d("XKaiOSAppJioTagController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/kaiosapp/jio/tag/",{})}),null);
__d("XKaiOSUpdatePushController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/kaiosapp/push/update/",{})}),null);
__d("KaiOSController",["KaiOSConnectionHelper","KaiOSControllerConfig","KaiOSControllerUtils","KaiOSFullscreenVideoHandler","KaiOSKeyEventHandlers","KaiOSLogger","KaiOSSendMessageUtil","KaiOSShareHandler","MRequest","Promise","Stratcom","XKaiOSAppJioTagController","XKaiOSUpdatePushController","getActiveElement","promiseDone","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";var g=b("KaiOSControllerUtils").createCallbackHandler(),h="app://m.facebook.com",i=Object.freeze({APP_INFO:"app_info",UPDATE_PUSH:"update_push",CONFIG_REQUEST:"config_request",SHARE_PHOTO:"share_photo",LOG_MIGRATION_EVENT:"log_migration_event",TIME_TO_BROWSER_IFRAME_INIT:"time_to_browser_iframe_init"});function j(a){if(!(a instanceof Map))return;var c=a.get(b("KaiOSSendMessageUtil").Action),d=a.get(b("KaiOSSendMessageUtil").ActionPayload);a=a.get(b("KaiOSSendMessageUtil").CallbackID);if(g.handleCallback(a,d))return;switch(c){case i.APP_INFO:d&&d.get&&(b("KaiOSControllerConfig").appVersion=d.get("app_version"),b("KaiOSControllerConfig").shouldLogAppVersion&&(b("KaiOSLogger").logAppVersion(b("KaiOSControllerConfig").appVersion),b("KaiOSControllerConfig").shouldLogAppVersion=!1),q.setup());break;case i.UPDATE_PUSH:if(d&&d.get){a=d.get("subscription");q.updatePush(a.endpoint,JSON.stringify(a.keys))}break;case i.CONFIG_REQUEST:c=new Map();c.set("show_news_feed_on_notification_back",b("KaiOSControllerConfig").showNewsFeedOnNotificationBack);b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.CONFIG_RESPONSE,c);break;case i.SHARE_PHOTO:b("KaiOSShareHandler").handle(d);break;case i.LOG_MIGRATION_EVENT:if(d&&d.get){a=d.get("migration_phase");c=d.get("roundtrip_durations");if(c&&c instanceof Array)for(var e=0;e<c.length;e++)b("KaiOSLogger").logAppMigrationEvent("completed_roundtrip",a,c[e],{roundtrip_count:e+1})}break;case i.TIME_TO_BROWSER_IFRAME_INIT:if(d&&d.get){e=d.get("timeToBrowserIframeInit");a=d.get("timestampAtBrowserIframeInit");c=d.get("migrationPhase");var f=d.get("experimentGroup");d=d.get("experimentName");e&&b("KaiOSLogger").logAppMigrationEvent("completed_browser_iframe_init",c,e,{timestamp_at_browser_iframe_init:a,lid:b("KaiOSControllerConfig").lid},d,f)}break}}function k(a){b("KaiOSControllerConfig").fullScreenVideoHandler&&b("KaiOSControllerConfig").fullScreenVideoHandler.handleMouseMoveEvent(a)&&(a.preventDefault(),a.stopPropagation())}function l(a){if(document.fullscreenElement)document.fullscreenElement.nodeName=="VIDEO"&&(screen.orientation&&screen.orientation.lock("landscape"),document.fullscreenElement.mozRequestPointerLock());else{a=new Map();a.set("orientation","natural");b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.SCREEN_ORIENTATION_LOCK,a)}}var m=null,n=!1,o=null,p=new(b("Promise"))(function(a){o=a}),q={waitForKaiOS:function(){return p},init:function(a){a.get("kaios__dev__")&&(o?o():function(){},q.setup()),b("KaiOSControllerConfig").appID=Number(a.get("app_id")),b("KaiOSControllerConfig").shouldLogAppVersion=!!a.get("should_log_app_version"),m=a.get("fbt_strings"),b("KaiOSControllerConfig").showNewsFeedOnNotificationBack=!!a.get("show_news_feed_on_notification_back"),b("KaiOSControllerConfig").userLoggedIn=!!a.get("user_logged_in"),b("KaiOSControllerConfig").inLatestMigrationPhase=!!a.get("in_latest_migration_phase"),b("KaiOSControllerConfig").migrationGroup=String(a.get("migration_group")),b("KaiOSControllerConfig").lid=String(a.get("lid")),window.addEventListener("message",q.receiveMessage,!1)},enableBackButtonOnRegPage:function(){b("KaiOSControllerConfig").backButtonOnRegPage=!0},setup:function(){var a;window.addEventListener("click",(a=b("KaiOSKeyEventHandlers")).interceptClick,!0);window.addEventListener("keydown",a.handleKeyDown,!1);window.addEventListener("mousemove",k,!0);window.addEventListener("focus",a.handleTextfieldFocus,!0);window.addEventListener("blur",a.handleTextfieldBlur,!0);b("KaiOSControllerConfig").appVersion!=null&&window.addEventListener("fullscreenchange",l,!1);b("Stratcom").listen("click",["m-composer","composer-submit"],function(a){b("setTimeoutAcrossTransitions")(function(){var c=b("getActiveElement")();c&&c==a.getNode("composer-submit")&&c.blur()},100)});b("KaiOSControllerConfig").userLoggedIn&&b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.CHECK_FOR_PUSH_UPDATE);if(m!=null&&m!==""){a=new Map();a.set("fbt_strings",m);b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.FBT_STRINGS,a)}a=new Map();a.set("inLatestMigrationPhase",b("KaiOSControllerConfig").inLatestMigrationPhase);a.set("migrationGroup",b("KaiOSControllerConfig").migrationGroup);b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.LITE_MIGRATION_STATUS,a);o?o():(function(){})},sendMessageToAppWithCallback:function(a,c){c=g.setCallback(c);b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,a,null,c)},maybeTagMeAsKaiOSApp:function(){b("KaiOSConnectionHelper").hostWindow!=null?q.tagMeAsKaiOSApp():n=!0},tagMeAsKaiOSApp:function(){var a=b("XKaiOSAppJioTagController").getURIBuilder().getURI();a=new(b("MRequest"))(a).setMethod("POST").setData({is_kaios_app:!0});n=!1;a.send()},registerPush:function(a){a=g.setCallback(a);b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.REGISTER_PUSH,null,a)},unregisterPush:function(){b("promiseDone")(q.waitForKaiOS(),function(){b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.UNREGISTER_PUSH)})},updatePush:function(a,c){var d=b("XKaiOSUpdatePushController").getURIBuilder().getURI();d=new(b("MRequest"))(d).setMethod("POST").setData({push_endpoint:a,app_id:b("KaiOSControllerConfig").appID,subscription_keys:c});d.listen("done",function(a){a.payload&&a.payload.success&&b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.PUSH_UPDATE_COMPLETED)});d.send()},receiveMessage:function(a){if(!a||h!=a.origin||!a.source)return;b("KaiOSConnectionHelper").hostWindow||(b("KaiOSConnectionHelper").hostWindow=a.source,b("KaiOSControllerConfig").fullScreenVideoHandler=new(b("KaiOSFullscreenVideoHandler"))(b("KaiOSConnectionHelper").hostWindow),b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.MESSAGE_RECEIVED));a.data&&j(a.data);n&&q.tagMeAsKaiOSApp()},_setHostWindowUnitTestsOnly:function(a){b("KaiOSConnectionHelper").hostWindow=a},isTagIfInsideApp:function(){return n},fetchMsisdn:function(a){a=g.setCallback(a);b("KaiOSSendMessageUtil").postMessage(b("KaiOSConnectionHelper").hostWindow,b("KaiOSSendMessageUtil").Type.FETCH_MSISDN,null,a)}};e.exports=q}),null);
__d("ServiceWorkerLoginAndLogout",["ClientServiceWorkerMessage"],(function(a,b,c,d,e,f){function g(a){new(b("ClientServiceWorkerMessage"))(a,null).sendViaController()}a={login:function(){g("login")},logout:function(){g("logout")}};c=a;e.exports=c}),null);
__d("XBrowserPushDisabledController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/client/push/disabled/",{})}),null);
__d("ServiceWorkerLoginAndLogoutListener",["KaiOSController","MRequest","MobileAppDetect","PushRegistration","ServiceWorkerLoginAndLogout","Stratcom","XBrowserPushDisabledController","killswitch"],(function(a,b,c,d,e,f){a={listen:function(a,c,d,e){b("Stratcom").listen("click",a,function(){if(b("MobileAppDetect").is_kaios){if(!e)return;if(b("killswitch")("NOTIFICATIONS_LOGGED_OUT_PUSH_KAIOS_TOKEN_HANDLING")){var a=b("PushRegistration").get(d,e);a.unregisterPushAndSWOnKaiOS(b("XBrowserPushDisabledController"),b("MRequest"),b("KaiOSController"),!1)}}else if(c==="login")b("ServiceWorkerLoginAndLogout").login();else if(c==="logout")b("ServiceWorkerLoginAndLogout").logout();else throw new Error("bad login type given")})}};e.exports=a}),null);