/*
jQWidgets v10.1.6 (2020-Oct)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxLayout","",{});a.extend(a.jqx._jqxLayout.prototype,{defineInstance:function(){var b={width:null,height:null,minGroupWidth:100,minGroupHeight:100,layout:[],resizable:true,contextMenu:false,rtl:false,events:["create","resize","pin","unpin","floatGroupClosed"]};if(this===a.jqx._jqxLayout.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){var b=this;b._originalElement=a(b.element.cloneNode(true));b._coordinates=[];b._oldIE=a.jqx.browser.msie&&a.jqx.browser.version<9;b._ie7=a.jqx.browser.msie&&a.jqx.browser.version<8;b._touchDevice=a.jqx.mobile.isTouchDevice();if(b.host.css("display")!=="none"&&document.body.contains(b.element)===true){b._initiallyHidden=false;b._initialization=true;b.render()}else{b._initiallyHidden=true}a.jqx.utilities.resize(this.host,function(){if(b._suppressResizeHandler===true){return}if(b._initiallyHidden===true){b._initialization=true}b.render();if(b._initiallyHidden===true){if(b.dockingLayout){b.dockingLayout._createOverlay();b.dockingLayout._createEdgeOverlays()}b._initiallyHidden=false}})},render:function(){var n=this,m,h,o=[];n._tabbedGroupsList=[];if(n.dockingLayout){n._overlayGroups=[];if(n._initialization===false){m=n.dockingLayout._overlay.detach();h=n.dockingLayout._dropOverlayHelper.detach();for(var f=0;f<n.dockingLayout._edgeOverlays.length;f++){o.push(a(n.dockingLayout._edgeOverlays[f]).detach())}}}if(n._rendered===true){n._detachContent(n.layout[0].items)}n.element.innerHTML="";if(!n.host.jqxRibbon){throw new Error("jqxLayout: Missing reference to jqxribbon.js.")}n._setSize();n._addClasses();n._removeHandlers();if(!n._rendered){if(n.layout[0].type!=="layoutGroup"){throw new Error('jqxLayout: Invalid layout structure. The first member of the layout array has to be with type: "layoutGroup".')}var e=n.layout[0].items[0].width,b=n.layout[0].items[0].height;if(!(e&&typeof e==="string"&&e.charAt(e.length-1)==="%"||b&&typeof b==="string"&&b.charAt(b.length-1)==="%")){n.layout[0].initialPxWidth=n.element.offsetWidth;n.layout[0].initialPxHeight=n.element.offsetHeight;n._pxToPercent(n.layout[0],true)}}n._createLayout(n.layout,n.host,{type:"host"},0);if(n.resizable===true){n._addResizeFeedbacks();n._getGroupCoordinates();n._addHandlers()}if(n.contextMenu===true){n._initMenu()}if(n._initialization===true){n._initialization=false;n._raiseEvent("0")}else{if(n.dockingLayout){if(!n._ie7){m.appendTo(n.host);h.appendTo(n.host);for(var d=0;d<o.length;d++){o[d].appendTo(n.host)}}else{a("body").append(m,h);for(var c=0;c<o.length;c++){a("body").append(o[c])}}n.dockingLayout._trackFloatGroups()}}for(var g=0;g<n._tabbedGroupsList.length;g++){n._validateTabbedGroup(n._tabbedGroupsList[g])}if(!n._rendered){n._rendered=true}},refresh:function(b){if(b!==true){this.render()}},destroy:function(){var b=this;b._mouseupHandler=null;b._docUP=null;b._removeHandlers();if(b.contextMenu===true){b._menu.jqxMenu("destroy")}b.host.remove()},saveLayout:function(){var d=this,b=[];for(var c=0;c<d.layout.length;c++){d._copyItem(d.layout[c],b)}return b},loadLayout:function(c){if(c!==undefined&&a.isEmptyObject(c)===false){var b=this;b.layout=c;b._rendered=false;b.render()}},propertyChangedHandler:function(d,k,c,j){if(k!=="layout"){if(j!==c){switch(k){case"width":case"height":d.element.style[k]=d._toPx(j);break;case"theme":a.jqx.utilities.setTheme(c,j,d.host);if(d._menuInitialized){a.jqx.utilities.setTheme(c,j,d._menu)}if(d.dockingLayout){if(a("."+d.element.id+"FloatGroup").length>0){a("."+d.element.id+"FloatGroup").jqxWindow({theme:j})}}break;case"layout":case"resizable":d.render();break;case"contextMenu":if(j===true&&!d._menuInitialized){d.render()}break;case"rtl":var l=j?"rtl":"ltr",f=j?"ltr":"rtl",b=function(w){var B=d._find(w,".jqx-layout-pseudo-window-title-"+f),r=d._find(w,".jqx-layout-pseudo-window-pin-background-"+f),x=d._find(w,".jqx-layout-pseudo-window-close-background-"+f),n=d._find(w,".jqx-layout-ribbon-header"),z=d._find(w,".jqx-ribbon");for(var v=0;v<B.length;v++){var p=a(B[v]);p.removeClass(d.toThemeProperty("jqx-layout-pseudo-window-title-"+f));p.addClass(d.toThemeProperty("jqx-layout-pseudo-window-title-"+l))}for(var u=0;u<r.length;u++){var y=a(r[u]);y.removeClass(d.toThemeProperty("jqx-layout-pseudo-window-pin-background-"+f));y.addClass(d.toThemeProperty("jqx-layout-pseudo-window-pin-background-"+l))}for(var t=0;t<x.length;t++){var o=a(x[t]);o.removeClass(d.toThemeProperty("jqx-layout-pseudo-window-close-background-"+f));o.addClass(d.toThemeProperty("jqx-layout-pseudo-window-close-background-"+l))}for(var s=0;s<n.length;s++){var A=a(n[s]);A.removeClass(d.toThemeProperty("jqx-layout-ribbon-header-"+f));A.addClass(d.toThemeProperty("jqx-layout-ribbon-header-"+l))}for(var q=0;q<z.length;q++){a(z[q]).jqxRibbon({rtl:j})}};b(d.host);if(d.dockingLayout){var h=d._find(document.body,"."+d.element.id+"FloatGroup");for(var e=0;e<h.length;e++){var g=a(h[e]);b(g);g.jqxWindow({rtl:j})}}break}}}else{d.render()}},_raiseEvent:function(f,c){if(c===undefined){c={owner:null}}var d=this.events[f];c.owner=this;var e=new a.Event(d);e.owner=this;e.args=c;if(e.preventDefault){e.preventDefault()}var b=this.host.trigger(e);return b},_setSize:function(){var b=this;b.element.style.width=b._toPx(b.width);b.element.style.height=b._toPx(b.height)},_addClasses:function(){var b=this;b.host.addClass(b.toThemeProperty("jqx-layout jqx-widget jqx-widget-content jqx-rc-all"))},_getPercentage:function(c,b,d){return(c/b.widget[d]())*100},_addHandlers:function(){var g=this,b=g.element.id,d,j;g._resize={allowed:false};g._clickedToResize=false;function i(l,o){for(var m=0;m<g._coordinates.length;m++){var n=g._coordinates[m];if(l>=n.x.from&&l<=n.x.to&&o>=n.y.from&&o<=n.y.to){if(n.orientation==="horizontal"){g.element.style.cursor="col-resize"}else{g.element.style.cursor="row-resize"}g._resize={allowed:true,widget:n.widget,side:n.side};break}else{g.element.style.cursor="default";g._resize.allowed=false}}}function k(l){if(g._resize.allowed===true){var r=g._resize.widget,w=r.current.parent,x=g._percentToPx("width",r.current.minWidth,w),t=g._percentToPx("height",r.current.minHeight,w),n=w.items[r.current.index-1],q=w.items[r.current.index+1];g._resizeStartPosition={x:l.pageX,y:l.pageY};if(!x){x=g._percentToPx("width",g.minGroupWidth,w)}x=Math.min(x,r.width());r.current.minWidth=x;if(!t){t=g._percentToPx("height",g.minGroupHeight,w)}t=Math.min(t,r.height());r.current.minHeight=t;switch(g._resize.side){case"left":var u=g._percentToPx("width",n.minWidth,w);if(!u){u=g._percentToPx("width",g.minGroupWidth,w)}d=n.widget.offset().left+u;j=r.offset().left+r.width()-x;break;case"right":var m=g._percentToPx("width",q.minWidth,w);if(!m){m=g._percentToPx("width",g.minGroupWidth,w)}d=r.offset().left+x;j=q.widget.offset().left+q.widget.width()-m;break;case"top":var v=g._percentToPx("height",n.minHeight,w);if(!v){v=g._percentToPx("height",g.minGroupHeight,w)}d=n.widget.offset().top+v;j=r.offset().top+r.height()-t;break;case"bottom":var o=g._percentToPx("height",q.minHeight,w);if(!o){o=g._percentToPx("height",g.minGroupHeight,w)}d=r.offset().top+t;j=q.widget.offset().top+q.widget.height()-o;break}var p=function(z,A){A=(typeof A==="undefined")?{top:0,left:0}:A;if(z!==top){var y=z.frameElement.getBoundingClientRect();A.left+=y.left;A.top+=y.top;A=p(z.parent,A)}return A},s;g._clickedToResize=true;g._overlay[0].style.display="block";if(g._resize.side==="left"||g._resize.side==="right"){g._verticalFeedback[0].style.height=g._resize.widget.height()+"px";s=g._ie7?p(window).top:0;g._verticalFeedback.offset({top:g._resize.widget.offset().top-g.host.offset().top+document.body.scrollTop-s})}else{g._horizontalFeedback[0].style.width=g._resize.widget.width()+"px";s=g._ie7?p(window).left:0;g._horizontalFeedback.offset({left:g._resize.widget.offset().left-g.host.offset().left+document.body.scrollLeft+1-s})}}}function c(n,o,t,r,m){var p=m.charAt(0).toUpperCase()+m.slice(1),s=o.parent,l,q;if(n){l=g._percentToPx(m,t["min"+p],s);q=parseFloat(t[m])/100*o.parent.widget[m]()-r}else{l=g._percentToPx(m,o["min"+p],s);q=parseFloat(o[m])/100*o.parent.widget[m]()-r}if(!l){l=g._percentToPx(m,g["minGroup"+p],s)}if(q<l){return l}else{return q}}function e(l){if(g._clickedToResize===true){var r=function(){g._clickedToResize=false;g._overlay[0].style.display="none";g._verticalFeedback[0].style.display="none";g._horizontalFeedback[0].style.display="none"},p=l.pageX,o=l.pageY,u=g._resize.widget.current,x=g._resize.widget.offset(),t=x.left,m=x.top,y,v,q,w,s,n;if(l.pageX===g._resizeStartPosition.x&&l.pageY===g._resizeStartPosition.y){r();return}if(g._resize.side==="left"||g._resize.side==="right"){n=u.width;if(g._resize.side==="left"){y=u.parent.items[u.index-1];v=t;q=p<v}else{y=u.parent.items[u.index+1];v=t+u.widget.width();q=p>=v}w=Math.abs(p-v);if(w===0){r();return}if(q){s=g._getPercentage(c(true,u,y,w,"width"),u.parent,"width");w=Math.abs(s-parseFloat(y.width));y.width=s+"%";u.width=parseFloat(u.width)+w+"%"}else{s=g._getPercentage(c(false,u,y,w,"width"),u.parent,"width");w=Math.abs(s-parseFloat(u.width));u.width=s+"%";y.width=parseFloat(y.width)+w+"%"}if(u.width===n){r();return}}else{n=u.height;if(g._resize.side==="top"){y=u.parent.items[u.index-1];v=m;q=o<v}else{y=u.parent.items[u.index+1];v=m+u.widget.height();q=o>=v}w=Math.abs(o-v);if(w===0){r();return}if(q){s=g._getPercentage(c(true,u,y,w,"height"),u.parent,"height");w=Math.abs(s-parseFloat(y.height));y.height=s+"%";u.height=parseFloat(u.height)+w+"%"}else{s=g._getPercentage(c(false,u,y,w,"height"),u.parent,"height");w=Math.abs(s-parseFloat(u.height));u.height=s+"%";y.height=parseFloat(y.height)+w+"%"}if(u.height===n){r();return}}r();g.render();g._raiseEvent("1",{item:u})}}function f(m){if(g._clickedToResize===true){var l=m.pageX,n=m.pageY;if(g._resize.side==="left"||g._resize.side==="right"){g._verticalFeedback[0].style.display="block";if(l<d){l=d;g._verticalFeedback.addClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}else{if(l>j){l=j;g._verticalFeedback.addClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}else{g._verticalFeedback.removeClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}}g._verticalFeedback.offset({left:l-2})}else{g._horizontalFeedback[0].style.display="block";if(n<d){n=d;g._horizontalFeedback.addClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}else{if(n>j){n=j;g._horizontalFeedback.addClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}else{g._horizontalFeedback.removeClass(g.toThemeProperty("jqx-layout-resize-feedback-warning"))}}g._horizontalFeedback.offset({top:n-2});g._horizontalFeedback.offset({left:g._resize.widget.offset().left+document.body.scrollLeft+1})}}}g._docUP=e;if(!g._touchDevice){g.addHandler(g.host,"mousemove.jqxLayout"+b,function(m){if(g._clickedToResize===false&&(!g.dockingLayout||g.dockingLayout&&g.dockingLayout._windowDragged!==true)){var l=m.pageX,n=m.pageY;i(l,n)}});g.addHandler(a(document),"mousemove.jqxLayout"+b,function(l){f(l)});g.addHandler(g.host,"mousedown.jqxLayout"+b,function(l){k(l)});g.addHandler(a(document),"mouseup.jqxLayout"+b,function(l){e(l)})}else{g.addHandler(a(document),"touchstart.jqxDockingLayout"+b,function(m){var l=m.originalEvent.touches[0];i(l.pageX,l.pageY);k(l)});g.addHandler(a(document),"touchmove.jqxDockingLayout"+b,function(m){var l=m.originalEvent.touches[0];f(l)});g.addHandler(a(document),"touchend.jqxDockingLayout"+b,function(m){var l=m.originalEvent.changedTouches[0];e(l)})}g.addHandler(a(document),"selectstart.jqxLayout"+b,function(){if(g._clickedToResize===true){return false}});if(g.dockingLayout){try{if(document.referrer!==""||window.frameElement){if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",g._mouseupHandler,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",g._mouseupHandler)}}}}catch(h){}}},_removeHandlers:function(){var e=this,f=e.element.id;if(!e._touchDevice){e.removeHandler(e.host,"mousemove.jqxLayout"+f);e.removeHandler(a(document),"mousemove.jqxLayout"+f);e.removeHandler(e.host,"mousedown.jqxLayout"+f);e.removeHandler(a(document),"mouseup.jqxLayout"+f)}else{e.removeHandler(a(document),"touchstart.jqxLayout"+f);e.removeHandler(a(document),"touchmove.jqxLayout"+f);e.removeHandler(a(document),"touchend.jqxLayout"+f)}e.removeHandler(a(document),"selectstart.jqxLayout"+f);if(e.dockingLayout){try{if(document.referrer!==""||window.frameElement){if(window.top.document.removeEventListener){window.top.document.removeEventListener("mouseup",e._mouseupHandler,false)}else{if(window.top.document.detachEvent){window.top.document.detachEvent("onmouseup",e._mouseupHandler)}}}}catch(b){}}if(!e._oldIE){var d=document.body.querySelectorAll("."+f+"FloatGroup");for(var c=0;c<d.length;c++){e.removeHandler(d[c],"close")}}else{a("."+f+"FloatGroup").off("close")}},_createLayout:function(v,e,q){function t(k){var j=e.children(),I=j[0],i=j[1];I.innerHTML=k.title;if(!k.content){var l=f._find(f._originalElement,'[data-container="'+k.contentContainer+'"]')[0];if(l!==undefined){c=l.innerHTML}else{c=""}}else{c=k.content}if(c===undefined){c=""}i.innerHTML=c}var f=this,d=q.type;for(var E=0;E<v.length;E++){var x=v[E],m,b,F,h,c,y,s,r;switch(x.type){case"layoutGroup":m=document.createElement("div");F="jqx-layout-group-default";if(x.orientation==="horizontal"){F+=" jqx-layout-group-default-horizontal"}if(d==="host"){F+=" jqx-layout-group-root"}else{var z=q.orientation==="horizontal"?x.width:"100%";var u=q.orientation==="horizontal"?"100%":x.height;m.style.width=f._toPx(z);m.style.height=f._toPx(u)}m.className=f.toThemeProperty(F);e[0].appendChild(m);b=a(m);break;case"tabbedGroup":if(d!=="floatGroup"){b=document.createElement("div");b.className=f.toThemeProperty("jqx-layout-group-tabbed");b.innerHTML='<div class="jqx-layout-window-header"><div></div></div><div><div class="jqx-layout-ribbon"><ul class="jqx-layout-ribbon-header jqx-layout-ribbon-header-'+(f.rtl?"rtl":"ltr")+'"></ul><div class="jqx-layout-ribbon-content"></div></div></div>';e[0].appendChild(b);b=a(b);f._addRightClickHandler(f._find(b,".jqx-layout-window-header")[0],b)}else{b=document.createElement("div");b.className="jqx-layout-ribbon";b.innerHTML='<ul class="jqx-layout-ribbon-header jqx-layout-ribbon-header-'+(f.rtl?"rtl":"ltr")+'"></ul><div class="jqx-layout-ribbon-content"></div>';e.children()[1].appendChild(b);b=a(b)}break;case"documentGroup":case"autoHideGroup":m=document.createElement("div");var o="";if(x.type==="documentGroup"){o="jqx-layout-ribbon-header jqx-layout-ribbon-header-"+(f.rtl?"rtl":"ltr")}m.innerHTML='<ul class="'+o+'"></ul><div></div>';if(f._ie7&&x.type==="autoHideGroup"){m.style.zIndex=9999-500*E}e[0].appendChild(m);b=a(m);break;case"floatGroup":if(!f._rendered||x.programmaticallyAdded===true){if(!f.dockingLayout){throw new Error("Float groups are only available in the jqxDockingLayout widget. Initialize a jqxDockingLayout (requires jqxdockinglayout.js) instead of a jqxLayout.")}b=document.createElement("div");b.className=f.toThemeProperty("jqx-docking-layout-group-floating");b.innerHTML="<div></div><div></div>";e[0].appendChild(b);b=a(b);if(x.programmaticallyAdded===true){delete x.programmaticallyAdded}}else{continue}break;case"layoutPanel":b={};if(d==="tabbedGroup"){var w=f._find(e,".jqx-layout-window-header")[0];if(w){var G=a(w).text();if(G===""){w.firstChild.innerHTML=x.title}}s=document.createElement("li");s.innerHTML=x.title;f._find(e,".jqx-layout-ribbon-header")[0].appendChild(s);if(!f._rendered&&!x.docked){h=f._find(f._originalElement,'[data-container="'+x.contentContainer+'"]')[0];if(h!==undefined){c=h.innerHTML}else{c=""}}else{c=x.detachedContent}y=document.createElement("div");if(typeof c==="string"){y.innerHTML=c}else{for(var C=0;C<c.length;C++){a(c[C]).appendTo(y)}}f._find(e,".jqx-layout-ribbon-content")[0].appendChild(y);f._addRightClickHandler(s,b)}else{if(d==="autoHideGroup"){r=e.children();s=document.createElement("li");s.innerHTML=x.title;r[0].appendChild(s);if(!f._rendered){h=f._find(f._originalElement,'[data-container="'+x.contentContainer+'"]')[0];if(h!==undefined){c=h.innerHTML}else{c=""}}else{c=x.detachedContent}y=document.createElement("div");if(typeof c==="string"){y.innerHTML=c}else{for(var B=0;B<c.length;B++){c[B].appendTo(y)}}var n;if(q.alignment==="left"||q.alignment==="right"){if(q.popupContentSize!==undefined){y.style.width=parseInt(q.popupContentSize,10)+"px"}n="jqx-layout-group-auto-hide-content-vertical"}else{if(q.popupContentSize!==undefined){y.style.height=parseInt(q.popupContentSize,10)+"px"}n="jqx-layout-group-auto-hide-content-horizontal"}y.className=f.toThemeProperty(n);var g=document.createElement("div");var D=document.createElement("div");D.className="jqx-layout-window";D.innerHTML="<div><div>"+x.title+"</div></div>";D.appendChild(y);g.appendChild(D);r[1].appendChild(g);f._addRightClickHandler(D,b)}else{if(d==="floatGroup"){t(x)}}}break;case"documentPanel":b={};if(d==="floatGroup"){t(x)}else{r=e.children();s=document.createElement("li");s.innerHTML=x.title;r[0].appendChild(s);if(!f._rendered&&!x.docked){h=f._find(f._originalElement,'[data-container="'+x.contentContainer+'"]')[0];if(h!==undefined){c=h.innerHTML}else{c=""}}else{c=x.detachedContent}y=document.createElement("div");if(typeof c==="string"){y.innerHTML=c}else{for(var A=0;A<c.length;A++){c[A].appendTo(y)}}r[1].appendChild(y);f._addRightClickHandler(s,b)}break}if(x.items&&x.items.length>0){var p=b;f._createLayout(x.items,p,x)}f._createWidget(q,e,x,b,E);if(f.dockingLayout&&(x.type==="documentGroup"||x.type==="tabbedGroup"||(x.type==="layoutGroup"&&x.items.length===0))){var H={element:b,width:b.width(),height:b.height(),offset:b.offset(),settings:x};f._overlayGroups.push(H);if(x.parent.type==="floatGroup"){x.parent._overlayGroup=H}}}},_createWidget:function(m,k,i,e,g){var f=this,b=m.orientation==="horizontal"?i.width:"100%",l=m.orientation==="horizontal"?"100%":i.height,d=false;i.parent=m;i.widget=e;i.index=g;if(i.widget){i.widget.current=i}function h(){var o=0;for(var n=0;n<i.items.length;n++){if(i.items[n].selected===true){o=n;break}}i.items[o].selected=true;return o}switch(i.type){case"tabbedGroup":var j,c;if(m.type!=="floatGroup"){j=f._initWindowPanel(e,b,l,i.type);c=a(f._find(e,".jqx-layout-ribbon")[0]);f._tabbedGroupsList.push(i)}else{c=e}if(f.dockingLayout&&(i.allowDrag!==false)){d=true}c.jqxRibbon({theme:f.theme,width:"100%",height:"100%",position:"bottom",selectionMode:"click",animationType:"none",rtl:f.rtl,_roundedCorners:false,initContent:function(n){var o=i.items[n];if(!o.initialized&&o.initContent){o.initContent(a(this._contentSections[n]));o.initialized=true}},_removeByDrag:d,reorder:true,_suppressReorder:false});c.on("select",function(p){p.stopPropagation();if(p.target.id===c[0].id){p.stopPropagation();var n=p.args.selectedIndex;i.items[n].selected=true;var o=a(a(c.children()[1]).children()[n]).text();if(m.type!=="floatGroup"){j[0].innerHTML=o}else{f._find(m.widget,".jqx-window-header")[0].firstChild.innerHTML=o}}});c.on("unselect",function(n){n.stopPropagation();if(n.target.id===c[0].id){i.items[n.args.unselectedIndex].selected=false}});c.on("reorder",function(o){f._swapPanelsInLayout(i.items,o.args.newIndex,o.args.oldIndex);var n=o.args.newIndex;setTimeout(function(){if(i.items[n]){f._addRightClickHandler(f._find(c,".jqx-ribbon-item")[n],i.items[n].widget)}},200)});if(d){c.on("_removeByDrag",function(n){f.dockingLayout._removeByDragHandler(n,i,c);if(i.parent.type==="floatGroup"&&i.items.length===1){c.jqxRibbon({_removeByDrag:false})}});if(i.parent.type!=="floatGroup"){f.dockingLayout._addTabbedGroupHandlers(i,e)}}c.jqxRibbon("selectAt",h());break;case"documentGroup":if(f.dockingLayout&&(i.allowDrag!==false)){d=true}e.jqxRibbon({theme:f.theme,width:b,height:l,_roundedCorners:false,position:"top",selectedIndex:h(),selectionMode:"click",animationType:"none",rtl:f.rtl,initContent:function(n){var o=i.items[n];if(!o.initialized&&o.initContent){o.initContent(a(this._contentSections[n]));o.initialized=true}},_removeByDrag:d,reorder:true,_suppressReorder:false});e.on("select",function(n){n.stopPropagation();if(n.target.id===e[0].id){i.items[n.args.selectedIndex].selected=true}});e.on("unselect",function(n){n.stopPropagation();if(n.target.id===e[0].id){i.items[n.args.unselectedIndex].selected=false}});e.on("reorder",function(o){f._swapPanelsInLayout(i.items,o.args.newIndex,o.args.oldIndex);var n=o.args.newIndex;setTimeout(function(){f._addRightClickHandler(f._find(e,".jqx-ribbon-item")[n],i.items[n].widget)},200)});if(d){e.on("_removeByDrag",function(n){f.dockingLayout._removeByDragHandler(n,i,e)})}e.addClass(f.toThemeProperty("jqx-layout-group-document"));break;case"autoHideGroup":e.jqxRibbon({theme:f.theme,width:b,height:l,mode:"popup",popupCloseMode:"click",position:i.alignment,selectionMode:"click",animationType:"none",_roundedCorners:false,rtl:f.rtl,initContent:function(o){var p=a(this._contentSections[o]),n=a(f._find(p,".jqx-layout-window")[0]);n.current=e.current.items[o];n[0].style.border="none";f._initWindowPanel(n,"100%","100%",i.type);if(!i.items[o].initialized&&i.items[o].initContent){i.items[o].initContent(a(n.children()[1]));i.items[o].initialized=true}}});e.addClass(f.toThemeProperty("jqx-layout-group-auto-hide"));break;case"floatGroup":e.addClass(f.element.id+"FloatGroup");e.jqxWindow({theme:f.theme,width:i.width,maxWidth:null,height:i.height,maxHeight:null,position:{x:i.position.x,y:i.position.y},showCloseButton:i.allowClose!==false,closeButtonAction:"close",rtl:f.rtl,initContent:function(){var s=this._header,p=f._touchDevice?"touchstart":"mousedown",o=".jqxLayout"+f.element.id;f.addHandler(s,p+o,function(){f.dockingLayout._windowDragged=true;if(i._overlayGroup){i._overlayGroup.self=true}f.dockingLayout._interval();if(f.resizable){f._overlay[0].style.display="block"}var v,t,u;if(i.items[0].type==="documentPanel"){v={type:"documentGroup"};t=i.items[0];u=t.title}else{if(i.items[0].type==="layoutPanel"){v={type:"tabbedGroup"};t=i.items[0];u=t.title}else{if(i.items[0].type==="tabbedGroup"){v=i.items[0]}}}f.dockingLayout._draggedWindow={fromGroup:v,fromPanel:t,title:u,element:e};f.dockingLayout._showEdgeOverlays()});f.addHandler(s,"mouseup"+o,function(){f.dockingLayout._hideOverlays()});if(i.items[0].type==="tabbedGroup"){var n=0;for(var q=0;q<i.items[0].items.length;q++){if(i.items[0].items[q].selected){n=q;break}}var r=i.items[0].items[n].title;e.jqxWindow("setTitle",r)}else{if(i.items[0].initContent){i.items[0].initContent(this._content)}}}});e.on("moved",function(n){i.position.x=n.args.x;i.position.y=n.args.y;if(i._overlayGroup){f.dockingLayout._updateOverlayGroup(i._overlayGroup)}f.dockingLayout._windowCreate=false;f.dockingLayout._hideOverlays();f.dockingLayout._clearTextSelection()});e.on("resized",function(n){i.width=n.args.width;i.height=n.args.height;var o=a(this).offset();i.position.x=o.left;i.position.y=o.top;if(i._overlayGroup){f.dockingLayout._updateOverlayGroup(i._overlayGroup)}});e.on("close",function(n){n.stopPropagation();if(n.target.id===e[0].id){f._raiseEvent("4",{element:e,floatGroup:e.current});if(e.current._overlayGroup){e.current._overlayGroup.removed=true;f.dockingLayout._updateOverlayGroups()}f.dockingLayout._removeFloatGroupObject(e.current)}});break}},_initWindowPanel:function(d,n,m,e){var i=this;d.addClass(i.toThemeProperty("jqx-widget jqx-widget-content jqx-window jqx-layout-pseudo-window jqx-rc-all"));if(!i._ie7){d[0].style.width=n;d[0].style.height=m}else{var k=d.parent();if(e==="tabbedGroup"){var b=parseInt(d.css("border-left-width"),10),u=parseInt(d.css("border-right-width"),10),s=parseInt(d.css("border-top-width"),10),g=parseInt(d.css("border-bottom-width"),10),r,t;if(n==="100%"){r=k.width()}else{r=parseFloat(n)/100*k.width()}r-=b+u;if(m==="100%"){t=k.height()}else{t=parseFloat(m)/100*k.height()}t-=s+g;d.css({width:r,height:t})}else{if(e==="autoHideGroup"){d.css({width:n,height:m})}}}var f=i.rtl?"rtl":"ltr";var p=a(d[0].firstChild);var v=a(p[0].firstChild);v.addClass(i.toThemeProperty("jqx-layout-pseudo-window-title jqx-layout-pseudo-window-title-"+f));p.addClass(i.toThemeProperty("jqx-widget-header jqx-window-header jqx-disableselect jqx-layout-pseudo-window-header"));if(i._ie7){p.css("width",p.width()-parseInt(p.css("padding-left"),10)-parseInt(p.css("padding-right"),10));p.css("height",p.height()-parseInt(p.css("padding-top"),10)-parseInt(p.css("padding-bottom"),10))}var j=0,c,h;function q(){if(i.dockingLayout){if(d.current.type==="layoutPanel"){return d.current.parent.allowClose===undefined||d.current.parent.allowClose===true}else{return d.current.allowClose===undefined||d.current.allowClose===true}}else{if(d.current.type==="layoutPanel"){return d.current.parent.allowClose===true}else{return d.current.allowClose===true}}}if(q()){c=document.createElement("div");c.className=i.toThemeProperty("jqx-window-close-button-background jqx-layout-pseudo-window-close-background jqx-layout-pseudo-window-close-background-"+f);c.setAttribute("title","Close");c.innerHTML='<div class="'+i.toThemeProperty("jqx-window-close-button jqx-icon-close jqx-layout-pseudo-window-close-icon")+'"></div>';p[0].appendChild(c);j+=16}if((e==="tabbedGroup"&&d.current.allowPin!==false)||(e==="autoHideGroup"&&d.current.parent.allowUnpin!==false)){var l;switch(e){case"tabbedGroup":l="jqx-layout-pseudo-window-pin-icon";d.pinned=false;break;case"autoHideGroup":l="jqx-layout-pseudo-window-pinned-icon";d.pinned=true;break}h=document.createElement("div");h.className=i.toThemeProperty("jqx-window-close-button-background jqx-layout-pseudo-window-pin-background");h.setAttribute("title","Auto Hide");h.innerHTML='<div class="'+i.toThemeProperty(l)+'"></div>';if(c){h.className+=" "+i.toThemeProperty("jqx-layout-pseudo-window-pin-background-"+f)}else{if(i.rtl===false){h.style.right="0px"}}p[0].appendChild(h);j+=16;if(i.dockingLayout&&e==="autoHideGroup"){i.dockingLayout._addAutoHideGroupHandlers(d.current,p,d.current.title,d.children()[1])}}v[0].style.maxWidth=i._toPx(p.width()-j);var o=d.children()[1];o.style.height=i._toPx(1+d.height()-p.outerHeight());o.style.marginLeft="-1px";o.style.marginRight="-1px";i._addWindowPanelHandlers(c,h,d);return v},_addWindowPanelHandlers:function(g,c,b){var f=this,h=f.element.id,e=b.current,d=e.type;if(g){f.addHandler(g,"click.jqxLayout"+h,function(){if(d==="tabbedGroup"&&e.items.length>1){var i=f._find(b,".jqx-ribbon-item-selected")[0]._index;f._close(e.items[i])}else{if(b.initAnimate){b.initAnimate()}b.fadeOut({complete:function(){f._close(e);b.remove()}})}})}if(c){f.addHandler(c,"click.jqxLayout"+h,function(){if(d==="tabbedGroup"&&e.pinValid===true){f._pin(e)}else{if(d==="layoutPanel"){f._unPin(e.parent)}}})}},_getGroupCoordinates:function(){var d=this;d._coordinates=[];function b(e){return e==="layoutGroup"||e==="tabbedGroup"||e==="documentGroup"}function c(n){for(var j=0;j<n.length;j++){var p=n[j];if(b(p.type)){var g=n[j-1],k=n[j+1],h=p.widget.offset(),o,e,m,f,l;if(g&&b(g.type)){if(p.parent.orientation==="horizontal"){o=h.left-5;e=o+10;m=h.top-5;f=m+p.widget.height()+10;l="left"}else{o=h.left-5;e=o+p.widget.width()+10;m=h.top-5;f=m+10;l="top"}d._coordinates.push({x:{from:o,to:e},y:{from:m,to:f},widget:p.widget,side:l,orientation:p.parent.orientation})}if(k&&b(k.type)){if(p.parent.orientation==="horizontal"){o=h.left+p.widget.width()-5;e=o+10;m=h.top-5;f=m+p.widget.height()+10;l="right"}else{o=h.left-5;e=o+p.widget.width()+10;m=h.top+p.widget.height()-5;f=m+10;l="bottom"}d._coordinates.push({x:{from:o,to:e},y:{from:m,to:f},widget:p.widget,side:l,orientation:p.parent.orientation})}if(p.items){c(p.items)}}}}c(d.layout[0].items)},_close:function(e){var k=this,b;e.removed=true;if(e.type==="tabbedGroup"||e.type==="autoHideGroup"||e.type==="documentGroup"){b=e.type==="tabbedGroup"?a(k._find(e.widget,".jqx-ribbon")[0]):e.widget;b.jqxRibbon("destroy");if(e.parent.items){var d=e.parent.items[e.index-1],h=e.parent.items[e.index+1],g=e.parent.orientation==="vertical"?"height":"width";var c=function(m){var i=(parseFloat(m[g])+parseFloat(e[g]))+"%";if(m.type==="documentGroup"){if(g==="height"){m.widget.jqxRibbon({height:i})}else{m.widget.jqxRibbon({width:i})}}else{if(m.type==="layoutGroup"||m.type==="tabbedGroup"){m.widget[0].style[g]=i}}m[g]=i;k._raiseEvent("1",{item:m})};if(d&&d.type!=="autoHideGroup"&&d.type!=="floatGroup"){c(d)}else{if(h&&h.type!=="autoHideGroup"&&h.type!=="floatGroup"){c(h)}}}}else{if(e.type==="layoutPanel"){if(e.parent.type==="tabbedGroup"){b=a(k._find(e.parent.widget,".jqx-ribbon")[0]);b.jqxRibbon("removeAt",e.index);k._updateLayout(k.layout);if(e.index===0){b.jqxRibbon("selectAt",0)}else{b.jqxRibbon("selectAt",e.index-1)}return}else{if(e.parent.type==="autoHideGroup"){b=e.parent.widget;b.jqxRibbon("removeAt",e.index);var l=b.children(),j=0;for(var f=0;f<l.length;f++){if(l[f].nodeName.toLowerCase()==="ul"){j=a(l[f]).children().length;break}}if(j===0){k._close(b.current)}}}}}k._updateLayout(k.layout);k.render()},_updateLayout:function(b){for(var d=0;d<b.length;d++){if(b[d].removed===true){b.splice(d,1);for(var c=0;c<b.length;c++){b[c].index=c}}else{if(b[d].items){this._updateLayout(b[d].items)}}}},_pin:function(d){var j=this,n=d.parent,m,h,k;if(d.alignment){m=d.alignment}else{var f=Math.abs(d.parent.items.length-1-d.index),c=Math.abs(0-d.index);if(c<f){m=d.parent.orientation==="horizontal"?"left":"top"}else{m=d.parent.orientation==="horizontal"?"right":"bottom"}}var b=m==="top"||m==="left"?d.index+1:d.index-1;if(m==="left"||m==="right"){h="width";k=d.pinnedWidth}else{h="height";k=d.pinnedHeight}if(typeof k==="number"){k=j._getPercentage(k,n,h)+"%"}if(!k){if(h==="width"){k=(8000/d.parent.widget.width())+"%"}else{if(h==="height"){k=(3000/d.parent.widget.height())+"%"}}}j._detachContent(d.items,true);var l={type:"autoHideGroup",alignment:m,items:d.items};l[h]=k;l["min"+h.charAt(0).toUpperCase()+h.slice(1)]=d["min"+h.charAt(0).toUpperCase()+h.slice(1)];l["unpinned"+h.charAt(0).toUpperCase()+h.slice(1)]=d[h];l.allowDrag=d.allowDrag;l.allowDrop=d.allowDrop;l.allowClose=d.allowClose;for(var g=0;g<l.items.length;g++){l.items[g].allowClose=d.allowClose}if(d.popupContentSize){l.popupContentSize=d.popupContentSize}var e=n.items[b];e[h]=parseFloat(e[h])+parseFloat(d[h])-parseFloat(k)+"%";n.items.splice(d.index,0,l);d.removed=true;a(j._find(d.widget,".jqx-ribbon")[0]).jqxRibbon("destroy");d.widget.remove();j._updateLayout(j.layout);j.render();j._raiseEvent("1",{item:e});j._raiseEvent("2",{item:l})},_unPin:function(f){var h=this,k=f.parent,j=f.alignment,b=j==="top"||j==="left"?f.index+1:f.index-1,m=k.items[b],g,c,e;if(j==="left"||j==="right"){g="width";c=f.unpinnedWidth}else{g="height";c=f.unpinnedHeight}if(!c){c="10%"}h._detachContent(f.items,true);var i={type:"tabbedGroup",alignment:j,items:f.items};i["pinned"+g.charAt(0).toUpperCase()+g.slice(1)]=f[g];i.allowDrag=f.allowDrag;i.allowDrop=f.allowDrop;i.allowClose=f.allowClose;if(f.popupContentSize){i.popupContentSize=f.popupContentSize}if(m){var d=parseFloat(m[g])+parseFloat(f[g])-parseFloat(c)+"%",l=m["min"+g.charAt(0).toUpperCase()+g.slice(1)];if(!l){l=h["minGroup"+g.charAt(0).toUpperCase()+g.slice(1)]}if(parseFloat(d)<h._getPercentage(l,k,g)){c=f[g];d=h._getPercentage(l,k,g)+"%";i["min"+g.charAt(0).toUpperCase()+g.slice(1)]=f.widget.width()}else{i["min"+g.charAt(0).toUpperCase()+g.slice(1)]=f["min"+g.charAt(0).toUpperCase()+g.slice(1)]}i[g]=c;m[g]=d;e=m}else{i["min"+g.charAt(0).toUpperCase()+g.slice(1)]=f["min"+g.charAt(0).toUpperCase()+g.slice(1)];i[g]="100%";e=i}k.items.splice(f.index,0,i);f.removed=true;f.widget.jqxRibbon("destroy");h._updateLayout(h.layout);h.render();h._raiseEvent("1",{item:e});h._raiseEvent("3",{item:i})},_copyItem:function(c,g){var f={};for(var e in c){if(c.hasOwnProperty(e)&&e!=="parent"&&e!=="widget"&&e!=="initialized"){if(e==="position"){f.position={x:c.position.x,y:c.position.y}}else{if(e==="items"){var b=[];for(var d=0;d<c.items.length;d++){this._copyItem(c.items[d],b)}f.items=b}else{f[e]=c[e]}}}}g.push(f)},_addResizeFeedbacks:function(){var b=this;b._horizontalFeedback=document.createElement("div");b._horizontalFeedback.className=b.toThemeProperty("jqx-fill-state-normal jqx-layout-resize-feedback jqx-layout-resize-feedback-horizontal");b._verticalFeedback=document.createElement("div");b._verticalFeedback.className=b.toThemeProperty("jqx-fill-state-normal jqx-layout-resize-feedback jqx-layout-resize-feedback-vertical");b._overlay=document.createElement("div");b._overlay.className=b.toThemeProperty("jqx-layout-overlay");if(b.dockingLayout&&b.dockingLayout._windowDragged){b._overlay.style.display="block"}b.element.appendChild(b._horizontalFeedback);b.element.appendChild(b._verticalFeedback);b.element.appendChild(b._overlay);b._horizontalFeedback=a(b._horizontalFeedback);b._verticalFeedback=a(b._verticalFeedback);b._overlay=a(b._overlay)},_detachContent:function(j,d){var f=this;function c(m){if(m.prevent===true){m.prevent=false}else{var i=f._find(m.parent.widget,".jqx-ribbon-content-section")[m.index];g=f._detachChildNodes(i);a(i).remove();m.detachedContent=g;if(d===true){m.prevent=true}}}for(var e=j.length-1;e>=0;e--){var l=j[e],k=l.type,g;if(k==="layoutGroup"||k==="tabbedGroup"||k==="documentGroup"||k==="autoHideGroup"||k==="floatGroup"){if(l.items&&l.items.length>0){this._detachContent(l.items)}}else{if(k==="layoutPanel"){if(l.parent.type==="tabbedGroup"){c(l)}else{if(l.parent.type==="autoHideGroup"){if(l.prevent===true){l.prevent=false}else{if(l.parent.alignment==="left"||l.parent.alignment==="right"){var b=f._find(l.parent.widget,".jqx-layout-group-auto-hide-content-vertical")[e];g=f._detachChildNodes(b);a(b).remove()}else{var h=f._find(l.parent.widget,".jqx-layout-group-auto-hide-content-horizontal")[e];g=f._detachChildNodes(h);a(h).remove()}l.detachedContent=g;if(d===true){l.prevent=true}}}}}else{if(k==="documentPanel"){c(l)}}}}},_pxToPercent:function(f,b){function g(k,j){var h,i;k=parseInt(k,10);if(b){i=e.element["offset"+j]}else{i=f["initialPx"+j]}h=(100*k/i).toString()+"%";return h}var e=this;for(var d=0;d<f.items.length;d++){var c=f.items[d];if(c.width!==undefined){c.initialPxWidth=c.width;c.width=g(c.width,"Width")}else{c.initialPxWidth=f.initialPxWidth}if(c.height!==undefined){c.initialPxHeight=c.height;c.height=g(c.height,"Height")}else{c.initialPxHeight=f.initialPxHeight}if(c.unpinnedWidth!==undefined){c.unpinnedWidth=g(c.unpinnedWidth,"Width")}if(c.pinnedWidth!==undefined){c.pinnedWidth=g(c.pinnedWidth,"Width")}if(c.unpinnedHeight!==undefined){c.unpinnedHeight=g(c.unpinnedHeight,"Height")}if(c.pinnedHeight!==undefined){c.pinnedHeight=g(c.pinnedHeight,"Height")}if(c.type==="layoutGroup"&&c.items&&c.items.length>0){e._pxToPercent(c,false)}}},_percentToPx:function(d,c,b){if(c===undefined){return undefined}else{if(typeof c!=="string"||(typeof c==="string"&&c.charAt(c.length-1)!=="%")){return parseFloat(c)}else{return parseFloat(c.slice(0,c.length-1))/100*b.widget[d]()}}},_swapPanelsInLayout:function(f,d,c){var e=f[d];f[d]=f[c];f[d].index=d;f[c]=e;f[c].index=c},_initMenu:function(){var c=this;if(!c._menuInitialized){var g=c.element.id,f="",e=function(i,h,j){c._menu.jqxMenu("disable","dockOption"+g,i);c._menu.jqxMenu("disable","autoHideOption"+g,h);c._menu.jqxMenu("disable","closeOption"+g,j)};if(!c.host.jqxMenu){throw new Error("jqxLayout: Missing reference to jqxmenu.js.")}if(c.dockingLayout){f='<li id="floatOption'+g+'">Float</li>'}var d=document.createElement("div");d.className=c.toThemeProperty("jqx-layout-context-menu jqx-layout-context-menu-"+g);d.innerHTML="<ul>"+f+'<li id="dockOption'+g+'">Dock</li><li id="autoHideOption'+g+'" style="white-space: nowrap;">Auto Hide</li><li id="closeOption'+g+'">Close</li></ul>';c._menu=a(d);document.body.appendChild(d);c._menu.jqxMenu({theme:c.theme,width:100,height:"auto",autoOpenPopup:false,mode:"popup",popupZIndex:99999,rtl:c.rtl});c._menuInitialized=true;c.addHandler(c._menu,"itemclick.jqxLayout"+g,function(h){c._handleMenuItemClick(a(h.target).text())});var b=function(h){if(c.dockingLayout){return h.allowClose===false}else{return h.allowClose!==true}};c.addHandler(c._menu,"shown.jqxLayout"+g,function(){switch(c._contextMenuTarget.type){case"tabbedGroup":e(true,c._contextMenuTarget.allowPin===false||c._contextMenuTarget.pinValid===false,b(c._contextMenuTarget));break;case"layoutPanel":var h=c._contextMenuTarget.parent;if(h.type==="tabbedGroup"){e(true,h.allowPin===false||c._isMiddleTabbedGroup(h),b(h))}else{if(h.type==="autoHideGroup"){e(h.allowUnpin===false,true,b(c._contextMenuTarget))}}break;case"documentPanel":e(true,true,b(c._contextMenuTarget));break}})}},_addRightClickHandler:function(d,b){var c=this;if(c.contextMenu===true){c.addHandler(d,"mousedown.jqxLayout"+c.element.id,function(e){if(c.contextMenu===true&&((e.which&&e.which===3)||(e.button&&e.button===2))){var f=document.body.scrollTop,g=a(window).scrollLeft();c._contextMenuTarget=b.current;c._menu.jqxMenu("open",parseInt(e.clientX,10)+5+g,parseInt(e.clientY,10)+5+f)}});c.addHandler(d,"contextmenu.jqxLayout"+c.element.id,function(){if(c.contextMenu===true){return false}})}},_handleMenuItemClick:function(f){var e=this,d=e._contextMenuTarget.type,c=e._contextMenuTarget.parent;switch(f){case"Float":switch(d){case"tabbedGroup":e.dockingLayout._floatTabbedGroup(e._contextMenuTarget,e._contextMenuTarget.widget);break;case"layoutPanel":if(c.type==="tabbedGroup"){e.dockingLayout._removeByDragHandler(undefined,c,c.widget,e._contextMenuTarget.index,false)}else{if(c.type==="autoHideGroup"){var b=e._find(a(a(e._find(e._contextMenuTarget.parent.widget,".jqx-ribbon-content")[0]).children()[e._contextMenuTarget.index]),".jqx-layout-window")[0].firstChild;e.dockingLayout._floatAutoHideGroup(e._contextMenuTarget,e._contextMenuTarget.title,b)}}break;case"documentPanel":e.dockingLayout._removeByDragHandler(undefined,c,c.widget,e._contextMenuTarget.index,false);break}break;case"Dock":e._unPin(e._contextMenuTarget.parent);break;case"Auto Hide":switch(d){case"tabbedGroup":e._pin(e._contextMenuTarget);break;case"layoutPanel":e._pin(e._contextMenuTarget.parent);break}break;case"Close":switch(d){case"tabbedGroup":e._close(e._contextMenuTarget);break;case"layoutPanel":if(e._contextMenuTarget.parent.items.length>1){e._close(e._contextMenuTarget)}else{e._close(e._contextMenuTarget.parent)}break;case"documentPanel":e._closeDocumentPanel(e._contextMenuTarget.index,e._contextMenuTarget.parent.items,e._contextMenuTarget.parent,e._contextMenuTarget.parent.widget,false);break}}},_closeDocumentPanel:function(c,f,b,j,e){var g=this;if(e===false){j.jqxRibbon("removeAt",c)}if(f.length>1){var h=false;f[c].removed=true;g._updateLayout(f);for(var d=0;d<f.length;d++){if(f[d].selected===true){h=true;break}}setTimeout(function(){if(h===false){if(f[c]){j.jqxRibbon("selectAt",c)}else{j.jqxRibbon("selectAt",c-1)}}else{j.jqxRibbon("render")}},0)}else{g._close(b)}},_isMiddleTabbedGroup:function(b){return !(b.index===0||b.index===b.parent.items.length-1)},_validateTabbedGroup:function(c){var e=this,d=true;d=d&&c.parent.items.length>1;if(d){if(c.parent.items.length===2){var b=c.index===0?1:0;if(c.parent.items[b].type==="autoHideGroup"){d=false}}}if(d){d=d&&!e._isMiddleTabbedGroup(c)}c.pinValid=d;if(d===false){a(e._find(c.widget,".jqx-layout-pseudo-window-pin-background")[0]).addClass("jqx-fill-state-disabled")}},_mouseupHandler:function(d){var c=this;try{if(c.dockingLayout){c._docUP(d);c.dockingLayout._windowCreate=false;c.dockingLayout._hideOverlays()}}catch(b){}},_toPx:function(b){if(typeof b==="number"){return b+"px"}else{return b}},_find:function(c,b){var d=this;if(!d._oldIE){if(c[0]){return c[0].querySelectorAll(b)}else{return c.querySelectorAll(b)}}else{return c.find(b)}},_detachChildNodes:function(c){if(c===undefined){return[]}var b=[],d=c.childNodes;if(d!==undefined){while(d.length>0){b.push(a(d[0]).detach())}}return b}})})(jqxBaseFramework);

