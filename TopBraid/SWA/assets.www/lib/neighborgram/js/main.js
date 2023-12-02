(function(f){var g;if(typeof window!=='undefined'){g=window}else if(typeof self!=='undefined'){g=self}g.NeighborGram=f()})(function(){var _defi_,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof _defi_&&_defi_.amd)_defi_([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.TQGramUI=e()}}(function(){return function(){function e(t,n,o){function r(l,a){if(!n[l]){if(!t[l]){var s="function"==typeof _dereq_&&_dereq_;if(!a&&s)return s(l,!0);if(i)return i(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[l]={exports:{}};t[l][0].call(d.exports,function(e){var n=t[l][1][e];return r(n?n:e)},d,d.exports,e,t,n,o)}return n[l].exports}for(var i="function"==typeof _dereq_&&_dereq_,l=0;l<o.length;l++)r(o[l]);return r}return e}()({1:[function(e,t,n){"use strict";function o(e){function t(){i.rootHtml.innerHTML="",i.rootHtml.style.borderTop=0!==i.buttons.length?"1px solid #cccccc":null,i.rootHtml.style.borderBottom=0!==i.buttons.length?"1px solid #cccccc":null,i.buttons.forEach(function(e){var t=document.createElement("BUTTON");t.title=e.label,t.className="tq-ui-toolbar__button tq-ui-colored-button",t.innerHTML='<span style="color: '+e.borderColor+'">'+n(e.label)+"</span>",t.style.backgroundColor=e.backgroundColor||"white",t.style.borderColor=e.borderColor||"black",t.onclick=function(t){e.callback(e,t)},i.rootHtml.appendChild(t)})}function n(e){if(e){var t=e.match(/[a-z'\-]+/gi);return t.filter(function(e){return"and"!==e.toLowerCase()&&"&"!==e}).map(function(e){return e[0]}).join("")}}function o(){var e=document.createElement("DIV");return e.className="tq-ui-colored-buttons-list",e.innerHTML="",e}var i=this;e||(e={}),i.rootHtml=o(),i.id=e.id||"coloredButtons-"+r++,i.rootHtml.id=i.id,i.buttons=e.buttons||[],t(),i.removeAll=function(){i.buttons=[],t()},i.addButton=function(e){i.buttons.map(function(e){return e.id}).indexOf(e.id)===-1&&(i.buttons.push(e),t())},i.removeButton=function(e){i.buttons.splice(i.buttons.indexOf(e),1),t()}}Object.defineProperty(n,"__esModule",{value:!0}),n.ColoredButtonsList=o;var r=0;n["default"]=o},{}],2:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){function t(){if(e.body instanceof Object){var t=r.rootHtml.querySelector(".tq-ui-body_container");t.appendChild(e.body.rootHtml)}var a=r.rootHtml.querySelector(".tq-ui-flying-panel_header");a.addEventListener("mousedown",o);var s=r.rootHtml.querySelector(".tq-ui-windows-collapse-button");if(s.onclick=r.hide,e.resizable){var u=r.rootHtml.querySelector(".tq-ui-flying-panel__border.tq-ui-top-border");u.addEventListener("mousedown",function(e){o(e,"n")});var d=r.rootHtml.querySelector(".tq-ui-flying-panel__border.tq-ui-right-border");d.addEventListener("mousedown",function(e){o(e,"e")});var c=r.rootHtml.querySelector(".tq-ui-flying-panel__border.tq-ui-bottom-border");c.addEventListener("mousedown",function(e){o(e,"s")});var f=r.rootHtml.querySelector(".tq-ui-flying-panel__border.tq-ui-left-border");f.addEventListener("mousedown",function(e){o(e,"w")});var p=r.rootHtml.querySelector(".tq-ui-flying-panel__border.tq-ui-top-right-border");p.addEventListener("mousedown",function(e){o(e,"ne")});var b=r.rootHtml.querySelector(".tq-ui-flying-panel__border.tq-ui-top-left-border");b.addEventListener("mousedown",function(e){o(e,"nw")});var m=r.rootHtml.querySelector(".tq-ui-flying-panel__border.tq-ui-bottom-right-border");m.addEventListener("mousedown",function(e){o(e,"se")});var y=r.rootHtml.querySelector(".tq-ui-flying-panel__border.tq-ui-bottom-left-border");y.addEventListener("mousedown",function(e){o(e,"sw")})}r._triggerButton=i(e.triggerButton),n(),r._triggerButton&&(r._triggerButton.onclick=function(){l?r.show():r.hide()})}function n(){l?(r._triggerButton&&(r._triggerButton.className=r._triggerButton.className.replace(/ tq-ui-selected/gi,"")),r.rootHtml.className=r.rootHtml.className+" tq-ui-collapsed"):(r._triggerButton&&(r._triggerButton.className=r._triggerButton.className+" tq-ui-selected"),r.rootHtml.className=r.rootHtml.className.replace(/ tq-ui-collapsed/gi,""))}function o(e,t){function n(e){r._mouseMove=!0;var n=0;e.pageX?n=e.pageX:e.clientX&&(n=e.clientX);var o=n-l;l=n,t||(r.rootHtml.style.left=r.rootHtml.offsetLeft+o+"px");var s=0;e.pageY?s=e.pageY:e.clientY&&(s=e.clientY);var u=s-a;a=s,t||(r.rootHtml.style.top=r.rootHtml.offsetTop+u+"px"),t?(i(o,u,t),r.trigger("size-changed",{width:r.rootHtml.offsetWidth,height:r.rootHtml.offsetHeight}),t.indexOf("n")===-1&&t.indexOf("w")===-1||r.trigger("position-changed",{x:r.rootHtml.offsetLeft,y:r.rootHtml.offsetTop})):r.trigger("position-changed",{x:r.rootHtml.offsetLeft,y:r.rootHtml.offsetTop})}function o(e){r._mouseMove&&(n(e,!0),r._mouseMove=!1),document.body.onmousemove=document.body.onmouseup=null,document.body.removeEventListener("mousemove",n),document.body.removeEventListener("mouseup",o)}function i(e,t,n){switch(n){case"n":r.rootHtml.style.height=r.rootHtml.offsetHeight-t+"px",r.rootHtml.style.top=r.rootHtml.offsetTop+t+"px";break;case"e":r.rootHtml.style.width=r.rootHtml.offsetWidth+e+"px";break;case"s":r.rootHtml.style.height=r.rootHtml.offsetHeight+t+"px";break;case"w":r.rootHtml.style.width=r.rootHtml.offsetWidth-e+"px",r.rootHtml.style.left=r.rootHtml.offsetLeft+e+"px";break;case"ne":r.rootHtml.style.width=r.rootHtml.offsetWidth+e+"px",r.rootHtml.style.height=r.rootHtml.offsetHeight-t+"px",r.rootHtml.style.top=r.rootHtml.offsetTop+t+"px";break;case"nw":r.rootHtml.style.height=r.rootHtml.offsetHeight-t+"px",r.rootHtml.style.top=r.rootHtml.offsetTop+t+"px",r.rootHtml.style.width=r.rootHtml.offsetWidth-e+"px",r.rootHtml.style.left=r.rootHtml.offsetLeft+e+"px";break;case"se":r.rootHtml.style.width=r.rootHtml.offsetWidth+e+"px",r.rootHtml.style.height=r.rootHtml.offsetHeight+t+"px";break;case"sw":r.rootHtml.style.height=r.rootHtml.offsetHeight+t+"px",r.rootHtml.style.width=r.rootHtml.offsetWidth-e+"px",r.rootHtml.style.left=r.rootHtml.offsetLeft+e+"px"}}var l=0,a=0;e.pageX?l=e.pageX:e.clientX&&(l=e.clientX),e.pageY?a=e.pageY:e.clientY&&(a=e.clientY),window.getSelection().removeAllRanges(),document.body.addEventListener("mousemove",n),document.body.addEventListener("mouseup",o)}s["default"].apply(this);var r=this;e||(e={});var l=!e.active;r.markup='\n        <div class="tq-ui-flying-panel"\n            style="\n                width: '+(e.size?e.size.width:"")+";\n                height: "+(e.size?e.size.height:"")+";\n                left: "+(e.position?e.position.x:"")+";\n                top: "+(e.position?e.position.y:"")+';\n            "\n        >\n            <div class="tq-ui-flying-panel_header">\n                <div class="tq-ui-flying-panel_header__header">\n                    <label class="tq-ui-window-header-label">'+(e.header?e.header:"")+'</label>\n                    <img alt="Collapse Button" class="tq-ui-windows-collapse-button"/>\n                </div>\n            </div>\n            <div class="tq-ui-body">\n                <div class="tq-ui-body_container '+(e.removeBackground?"tq-ui-body_empty-container":"tq-ui-body_default-container")+'">\n                    '+(e.body&&"string"==typeof e.body?e.body:"")+"\n                </div>\n            </div>\n            "+(e.resizable?'\n                <div class="tq-ui-flying-panel__border tq-ui-top-border"></div>\n                <div class="tq-ui-flying-panel__border tq-ui-right-border"></div>\n                <div class="tq-ui-flying-panel__border tq-ui-bottom-border"></div>\n                <div class="tq-ui-flying-panel__border tq-ui-left-border"></div>\n                <div class="tq-ui-flying-panel__border tq-ui-top-left-border"></div>\n                <div class="tq-ui-flying-panel__border tq-ui-top-right-border"></div>\n                <div class="tq-ui-flying-panel__border tq-ui-bottom-left-border"></div>\n                <div class="tq-ui-flying-panel__border tq-ui-bottom-right-border"></div>\n            ':"")+"\n        </div>";var a=i(e.baseElement);a.innerHTML=r.markup,r.rootHtml=a.querySelector(".tq-ui-flying-panel"),r.id=e.id||"flyingPanel-"+u++,r.rootHtml.id=r.id,r.show=function(e){e&&e.stopPropagation(),l&&(l=!1,n())},r.hide=function(e){e&&e.stopPropagation(),l||(l=!0,n())},t()}function i(e){var t=void 0;return"string"==typeof e?t=document.getElementById(e):"object"===("undefined"==typeof e?"undefined":l(e))&&(t=e),t}Object.defineProperty(n,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.FlyingPanel=r;var a=e("./subscriptionAPI/subscribeable"),s=o(a),u=0;n["default"]=r},{"./subscriptionAPI/subscribeable":8}],3:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){function t(e){function t(e){var t=e.label,n=e.label+" ("+e.id+")",o=document.createElement("LI");return o.className="tq-ui-property-button",o.title=n,o.innerText=t,o.onclick=function(){r.trigger("selected-element-changed",e.id)},o}var n=r.rootHtml.querySelector("#relatedElements");n.innerHTML="";var o=e.incomings||[];if(o.length){var i=document.createElement("LABEL");i.className="tq-label",i.innerText="Incoming nodes:",n.appendChild(i);var l=document.createElement("UL");l.className="tq-ui-info-panel_related-elements_list",n.appendChild(l),o.forEach(function(e){l.appendChild(t(e))})}var a=e.outgoings||[];if(a.length){var s=document.createElement("LABEL");s.className="tq-label",s.innerText="Outgoing nodes:",n.appendChild(s);var u=document.createElement("UL");u.className="tq-ui-info-panel_related-elements_list",n.appendChild(u),a.forEach(function(e){u.appendChild(t(e))})}}function n(e){var t="";return Object.keys(e).forEach(function(n){t+='<label for="'+n+'" class="tq-label">'+n+'</label>\n                        <input id="'+n+'" type="text" class="tq-ui-property" value="'+e[n]+'" disabled></input>'}),t}function o(){var e=document.createElement("DIV");return e.className="tq-ui-info-panel",e.innerHTML=r.markup,e}l["default"].apply(this),e||(e={});var r=this,i=e.placeholder||"Select a diagram element",s='<div class="tq-ui-info-panel_empty-stuff">'+i+"</div>";r.rootHtml=o(),r.rootHtml.innerHTML=s,r.id=e.id||"infoPanel-"+a++,r.rootHtml.id=r.id,r.setSelectedElement=function(o){if(o){if(r.rootHtml.innerHTML=""+(e.launchExternal&&"node"===o.diagramType?'<div class="tq-ui-group">\n                      <button id="tqLaunchExternalBtn" class="tq-button" title="View more in new tab.">\n                        More &nbsp;\n                      <span class="glyphicon glyphicon-new-window"></span></button>\n                     </div>':"")+(o.id?'\n                    <label class="tq-label">ID</label>\n                    <input value="'+o.id+'" type="text" aria-label="Input for ID" class="tq-ui-property" disabled></input>\n                ':"")+(o.label?'\n                    <label class="tq-label">Label</label>\n                    <input value="'+o.label+'" type="text" aria-label="Input for Label" class="tq-ui-property" disabled></input>\n                ':"")+(o.types?'\n                    <label class="tq-label">Types</label>\n                    <input value="'+o.types+'" type="text" aria-label="Input for Types" class="tq-ui-property" disabled></input>\n                ':"")+(o.source?'\n                    <label for="linkFrom" class="tq-label">Source</label>\n                    <div id="linkFrom" type="text" class="tq-ui-property-button"></div>\n                ':"")+(o.target?'\n                    <label for="linkTo" class="tq-label">Target</label>\n                    <div id="linkTo" type="text" class="tq-ui-property-button"></div>\n                ':"")+(o.thickness?'\n                    <label for="thickness" class="tq-label">Thickness</label>\n                    <input value="'+o.thickness+'" type="text" class="tq-ui-property" disabled></input>\n                ':"")+(o.data?n(o.data):"")+(o.relations?'\n                    <label for="relatedElements" class="tq-label">Related elements</label>\n                    <div   id="relatedElements" class="tq-ui-info-panel_related-elements"></div>\n                ':""),e.launchExternal&&"node"===o.diagramType){var i=document.getElementById("tqLaunchExternalBtn");i.onclick=function(){e.launchExternal(o)}}if(o.relations&&t(o.relations),o.source){var l=document.getElementById("linkFrom");l.innerText=o.source.label,l.title=o.source.label+"(ID: "+o.source.id+")",l.onclick=function(){r.trigger("selected-element-changed",o.source.id)}}if(o.target){var a=document.getElementById("linkTo");a.innerText=o.target.label,a.title=o.target.label+"(ID: "+o.target.id+")",a.onclick=function(){r.trigger("selected-element-changed",o.target.id)}}}else r.rootHtml.innerHTML=s},e.selectedElement&&r.setSelectedElement(e.selectedElement)}Object.defineProperty(n,"__esModule",{value:!0}),n.InfoPanel=r;var i=e("./subscriptionAPI/subscribeable"),l=o(i),a=0;n["default"]=r},{"./subscriptionAPI/subscribeable":8}],4:[function(e,t,n){"use strict";function o(e){function t(){var e=document.createElement("DIV");return e.innerHTML=n.markup,e.querySelector(".tq-ui-legend-panel_body_legends")}var n=this;e||(e={});var o=e.legends||[];n.markup='\n        <div class="tq-ui-legend-panel_body_legends">\n        '+o.map(function(e){return'\n                <div class="tq-ui-legend-panel_body_legends_legend" title="'+e.description+'">\n                    <div class="tq-ui-legend-panel_body_legends_legend_img"><img src="'+e.image+'"></div>\n                    <label class="tq-label">'+e.label+"</label>\n                </div>\n            "}).join("")+"\n        </div>\n    ",n.rootHtml=t(),n.id=e.id||"legends-"+r++,n.rootHtml.id=n.id}Object.defineProperty(n,"__esModule",{value:!0}),n.Legends=o;var r=0;n["default"]=o},{}],5:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=e("./coloredButtonsList"),i=o(r),l=e("./flyingPanel"),a=o(l),s=e("./infoPanel"),u=o(s),d=e("./legends"),c=o(d),f=e("./progressScreen"),p=o(f),b=e("./searchPanel"),m=o(b),y=e("./switcher"),v=o(y),g=e("./tabPanel"),h=o(g),H=e("./toolbar"),q=o(H);t.exports={ColoredButtonsList:i["default"],FlyingPanel:a["default"],InfoPanel:u["default"],Legends:c["default"],ProgressScreen:p["default"],SearchPanel:m["default"],Switcher:v["default"],TabPanel:h["default"],Toolbar:q["default"]}},{"./coloredButtonsList":1,"./flyingPanel":2,"./infoPanel":3,"./legends":4,"./progressScreen":6,"./searchPanel":7,"./switcher":9,"./tabPanel":10,"./toolbar":11}],6:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){function t(){var e=document.createElement("DIV");return e.className="tq-ui-progress-screen",e.innerHTML=o.markup,e}function n(e){var t=void 0;return"string"==typeof e?t=document.getElementById(e):"object"===("undefined"==typeof e?"undefined":i(e))&&(t=e),t}a["default"].apply(this);var o=this;e||(e={}),o.markup="",o.state="completed",o.rootHtml=t(),o.id=e.id||"tabPanel-"+s++,o.rootHtml.id=o.id;var r=n(e.baseElement);r.appendChild(o.rootHtml),o.setState=function(e,t){e&&(o.state=e,"active"===e?(o.rootHtml.innerHTML="<h1>"+(t||u)+'</h1><div class="tq-ui-progress-screen__progress"></div>',o.rootHtml.style.display=null):"completed"===e?(o.rootHtml.innerHTML="",o.rootHtml.style.display="none"):"error"===e&&(o.rootHtml.innerHTML="<h1>"+(t||d)+"</h1>",o.rootHtml.style.display=null),o.trigger("diagram-state-changed",e))},o.setState(e.state,e.text)}Object.defineProperty(n,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.ProgressScreen=r;var l=e("./subscriptionAPI/subscribeable"),a=o(l),s=Math.floor(50*Math.random())+1,u="Loading",d="Error has occurred!";n["default"]=r},{"./subscriptionAPI/subscribeable":8}],7:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){l["default"].apply(this),e||(e={});var t=e.searchButtonId||"tqLgSearchButton",n=e.searchId||"search",o=e.ariaLabel||"Search Flyout Panel";s["default"].apply(this,[{id:e.id,baseElement:e.baseElement,active:e.active,header:e.header||"Search panel",triggerButton:e.triggerButton,body:"\n            <span id="+t+' class="tq-ui-search-icon glyphicon glyphicon-search" aria-hidden="true"></span>\n            <input aria-label="'+o+'" id="'+n+'" placeHolder="Search..." class="tq-ui-search-input"></input>\n        ',removeBackground:!0,size:{width:"260px",height:"70px"}}])}Object.defineProperty(n,"__esModule",{value:!0}),n.SearchPanel=r;var i=e("./subscriptionAPI/subscribeable"),l=o(i),a=e("./flyingPanel"),s=o(a);n["default"]=r},{"./flyingPanel":2,"./subscriptionAPI/subscribeable":8}],8:[function(e,t,n){"use strict";function o(){var e=this;e._subscribtions={},e.on=function(t,n){e._subscribtions[t]||(e._subscribtions[t]=[]),e._subscribtions[t].push(n)},e.unsubscribe=function(t){Object.keys(e._subscribtions).map(function(t){return e._subscribtions[t]}).forEach(function(e){var n=e.indexOf(t);n!==-1&&e.splice(n,1)})},e.trigger=function(t,n){var o=this;n instanceof Array||(n=[n]),e._subscribtions&&e._subscribtions[t]&&e._subscribtions[t].forEach(function(e){e.apply(o,n)})}}Object.defineProperty(n,"__esModule",{value:!0}),n.Subscribable=o,n["default"]=o},{}],9:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){function t(){var t=document.createElement("DIV");return t.className="tq-ui-switch-buttons"+(e.verticalOrientation?"-vertical":""),t.innerHTML=n.markup,t}l["default"].apply(this),e||(e={});var n=this,o=e.states||[];n.markup=o.map(function(t,n){return'<button id="'+t.id+'" '+(0!==n?"":"disabled")+' title="'+(t.label||t.id)+'">\n            '+(e.verticalOrientation&&t.icon?'<span class="'+t.icon+'" aria-hidden="true"></span>':t.label||t.id)+"\n        </button>"}).join(""),n.rootHtml=t(),n.id=e.id||"switcher-"+a++,n.rootHtml.id=n.id;var r=null;o.forEach(function(e,t){var o=n.rootHtml.querySelector("#"+e.id);0===t&&(r=o),o.onclick=function(){o.disabled=!0,r.disabled=!1,r=o,n.trigger("state-changed",e.id)}}),n.setState=function(e){var t=n.rootHtml.querySelector("#"+e);t&&e!==r.id&&(t.disabled=!0,r.disabled=!1,r=t)}}Object.defineProperty(n,"__esModule",{value:!0}),n.Switcher=r;var i=e("./subscriptionAPI/subscribeable"),l=o(i),a=0;n["default"]=r},{"./subscriptionAPI/subscribeable":8}],10:[function(e,t,n){"use strict";function o(e){function t(){var e=document.createElement("DIV");return e.className="tq-ui-tab-panel",e.innerHTML=n.markup,e}var n=this;e||(e={});var o=e.tabs||[];n.markup='\n        <div class="tq-ui-tab-switcher tq-ui-switch-buttons">'+o.map(function(e,t){return'\n            <button id="'+e.id+'" '+(0!==t?"":"disabled")+">\n                "+(e.label||e.id)+"\n            </button>  \n        "}).join("")+"</div>"+o.map(function(e,t){return'\n            <div id="'+e.id+'Panel" class="tq-ui-tab-panel_page" style="display: '+(0===t?"":"none")+'">\n                <div class="tq-ui-tab-panel_page_body">\n                    '+("string"==typeof e.body?e.body:"")+"\n                </div>\n            </div>\n        "}).join(""),n.rootHtml=t(),n.id=e.id||"tabPanel-"+r,n.rootHtml.id=n.id,o.map(function(e){if(e.body instanceof Object&&e.body.rootHtml){var t=n.rootHtml.querySelector("#"+e.id+"Panel .tq-ui-tab-panel_page_body");t.appendChild(e.body.rootHtml)}});var i=null;o.forEach(function(e,t){var o=n.rootHtml.querySelector("#"+e.id),r=n.rootHtml.querySelector("#"+e.id+"Panel");0===t&&(i={tabBtn:o,tabPanel:r}),o.onclick=function(){o.disabled=!0,r.style.display="",i.tabBtn.disabled=!1,i.tabPanel.style.display="none",i={tabBtn:o,tabPanel:r}}})}Object.defineProperty(n,"__esModule",{value:!0}),n.TabPanel=o;var r=Math.floor(50*Math.random())+1;n["default"]=o},{}],11:[function(e,t,n){"use strict";function o(e){function t(e){var t=void 0;if("string"==typeof e){var n=document.createElement("DIV");n.innerHTML=e,t=n.firstChild}else if(e.id&&e.icon){var o=document.createElement("DIV");if(o.innerHTML='<button id="'+e.id+'" title="'+(e.label||e.id)+'" class="tq-ui-toolbar__button">\n                <span class="'+e.icon+'" aria-hidden="true"></span>\n            </button>',t=o.firstChild,e.icon2){var r=!0;t.onclick=function(n){t.innerHTML='<span class="'+(r?e.icon2:e.icon)+'" aria-hidden="true"></span>',e.callback(n),r=!r}}else t.onclick=e.callback}else e.rootHtml&&(t=e.rootHtml);return t}function n(){var t=void 0;return"string"==typeof e.baseElement?t=document.getElementById(e.baseElement):"object"===r(e.baseElement)&&(t=e.baseElement),t?(t.innerHTML=o.markup,t):null}var o=this,l="toolbarRootElement-"+i++;if(e||(e={}),o.markup='\n        <div id="'+l+'" class="tq-ui-toolbar">\n        </div>\n    ',o.rootHtml=n(),o.id=e.id||"toolbar-"+i++,o.rootHtml.id=o.id,!o.rootHtml)throw new Error("The root element is not specified!");o.container=o.rootHtml.querySelector("#"+l),o.pushTool=function(e){var n=t(e);n&&("string"!=typeof n?a.push(e):a.push({id:"customhtml"+i++,markup:e,rootHtml:n}),o.container.appendChild(n))},o.insertTool=function(e,n){var r=Math.min(Math.max(n,0),a.length-1),i=o.container.querySelector("#"+a[r].id);if(i){var l=t(e);l&&(a.splice(r,0,e),o.container.insertBefore(l,i))}else o.pushTool(e)},o.removeTool=function(e){var t="string"==typeof e?e:e.id;a.splice(a.indexOf(e),1);var n=o.container.querySelector("#"+t);o.container.removeChild(n)};var a=[];e.tools.forEach(function(e){o.pushTool(e)})}Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.Toolbar=o;var i=Math.floor(50*Math.random())+1;n["default"]=o},{}]},{},[5])(5)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(_dereq_,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof _defi_ === 'function' && _defi_.amd ? _defi_(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = _dereq_;
    var vertx = r('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof _dereq_ === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));

}).call(this,_dereq_('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":4}],3:[function(_dereq_,module,exports){
/*! FileSaver.js v1.3.6
 *
 * A saveAs() FileSaver implementation.
 *
 * By Travis Clarke, https://travismclarke.com
 * By Eli Grey, http://eligrey.com
 *
 * License: MIT (https://github.com/clarketm/FileSaver.js/blob/master/LICENSE.md)
 */

;(function (root, factory) {
    if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        module.exports = root.document ? factory(root, true) : function (w) {
            if (!w.document) {
                throw new Error("FileSaver requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(root);
    }
}(window || this, function (window, noGlobal) {
        "use strict";
        // IE <10 is explicitly unsupported
        if (typeof window === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
            return;
        }
        var
            doc = window.document
            // only get URL when necessary in case Blob.js hasn't overridden it yet
            , get_URL = function () {
                return window.URL || window.webkitURL || window;
            }
            , save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
            , can_use_save_link = "download" in save_link
            , click = function (node) {
                var event = new MouseEvent("click");
                node.dispatchEvent(event);
            }
            , is_safari = /constructor/i.test(window.HTMLElement) || window.safari
            , is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent)
            , throw_outside = function (ex) {
                (window.setImmediate || window.setTimeout)(function () {
                    throw ex;
                }, 0);
            }
            , force_saveable_type = "application/octet-stream"
            // the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
            , arbitrary_revoke_timeout = 1000 * 40 // in ms
            , revoke = function (file) {
                var revoker = function () {
                    if (typeof file === "string") { // file is an object URL
                        get_URL().revokeObjectURL(file);
                    } else { // file is a File
                        file.remove();
                    }
                };
                setTimeout(revoker, arbitrary_revoke_timeout);
            }
            , dispatch = function (filesaver, event_types, event) {
                event_types = [].concat(event_types);
                var i = event_types.length;
                while (i--) {
                    var listener = filesaver["on" + event_types[i]];
                    if (typeof listener === "function") {
                        try {
                            listener.call(filesaver, event || filesaver);
                        } catch (ex) {
                            throw_outside(ex);
                        }
                    }
                }
            }
            , auto_bom = function (blob) {
                // prepend BOM for UTF-8 XML and text/* types (including HTML)
                // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
                if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
                    return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
                }
                return blob;
            }
            , FileSaver = function (blob, name, no_auto_bom) {
                if (!no_auto_bom) {
                    blob = auto_bom(blob);
                }
                // First try a.download, then web filesystem, then object URLs
                var
                    filesaver = this
                    , type = blob.type
                    , force = type === force_saveable_type
                    , object_url
                    , dispatch_all = function () {
                        dispatch(filesaver, "writestart progress write writeend".split(" "));
                    }
                    // on any filesys errors revert to saving with object URLs
                    , fs_error = function () {
                        if ((is_chrome_ios || (force && is_safari)) && window.FileReader) {
                            // Safari doesn't allow downloading of blob urls
                            var reader = new FileReader();
                            reader.onloadend = function () {
                                var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
                                var popup = window.open(url, '_blank');
                                if (!popup) window.location.href = url;
                                url = undefined; // release reference before dispatching
                                filesaver.readyState = filesaver.DONE;
                                dispatch_all();
                            };
                            reader.readAsDataURL(blob);
                            filesaver.readyState = filesaver.INIT;
                            return;
                        }
                        // don't create more object URLs than needed
                        if (!object_url) {
                            object_url = get_URL().createObjectURL(blob);
                        }
                        if (force) {
                            window.location.href = object_url;
                        } else {
                            var opened = window.open(object_url, "_blank");
                            if (!opened) {
                                // Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
                                window.location.href = object_url;
                            }
                        }
                        filesaver.readyState = filesaver.DONE;
                        dispatch_all();
                        revoke(object_url);
                    }
                    ;
                filesaver.readyState = filesaver.INIT;

                if (can_use_save_link) {
                    object_url = get_URL().createObjectURL(blob);
                    setTimeout(function () {
                        save_link.href = object_url;
                        save_link.download = name;
                        click(save_link);
                        dispatch_all();
                        revoke(object_url);
                        filesaver.readyState = filesaver.DONE;
                    });
                    return;
                }

                fs_error();
            }
            , FS_proto = FileSaver.prototype
            , saveAs = function (blob, name, no_auto_bom) {
                return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
            }
            ;
        // IE 10+ (native saveAs)
        if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
            saveAs = function (blob, name, no_auto_bom) {
                name = name || blob.name || "download";

                if (!no_auto_bom) {
                    blob = auto_bom(blob);
                }
                return navigator.msSaveOrOpenBlob(blob, name);
            };
        }

        FS_proto.abort = function () {
        };
        FS_proto.readyState = FS_proto.INIT = 0;
        FS_proto.WRITING = 1;
        FS_proto.DONE = 2;

        FS_proto.error =
            FS_proto.onwritestart =
                FS_proto.onprogress =
                    FS_proto.onwrite =
                        FS_proto.onabort =
                            FS_proto.onerror =
                                FS_proto.onwriteend =
                                    null;

        if (typeof _defi_ === "function" && _defi_.amd) {
            _defi_("file-saverjs", [], function () {
                return saveAs;
            });
        }

        if (typeof noGlobal === 'undefined') {
            window.saveAs = saveAs;
        }
        return saveAs;
    }
));

},{}],4:[function(_dereq_,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],5:[function(_dereq_,module,exports){
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (typeof input === 'string') {
      this.url = input
    } else {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split('\r\n').forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);

},{}],6:[function(_dereq_,module,exports){
'use strict';

var defaultOptions = {
    COLOR_CLASS_COUNT: 10,
    COLOR_CLASS_MAP: {
        'subClassOf': 'color-class-sub-class-of',
        'type': 'color-class-type'
    }
};

/**
 * ColorConfigurator.
 * Generate color templates for graph elements.
 *
 * Constructor parameters:
 *      _options: {
 *          DEFAULT_PAGE_SIZE: number, 
 *          COLOR_CLASS_COUNT: number, 
 *          MAX_LABEL_LENGTH: number, 
 *          COL_OFFSET: number, 
 *          ROW_OFFSET: number, 
 *          CROSS_NODE_OFFSET: number, 
 *          COLOR_CLASS_MAP: {
 *              'subClassOf': string, 
 *              'type': string
 *          }
 *      }
 *
 * Public methods:
 *      getColorTemplate(): { color:string, colorFill:string, colorFont:string, colorFillFocused:string }
 */
function ColorConfigurator (_options) {
    var COLOR_CLASS_COUNT = (_options && _options.COLOR_CLASS_COUNT != undefined ? _options.COLOR_CLASS_COUNT : defaultOptions.COLOR_CLASS_COUNT);
    var _colorClassMap = (_options && _options.COLOR_CLASS_MAP ? _options.COLOR_CLASS_MAP : defaultOptions.COLOR_CLASS_MAP);

    var self = this;
    var _index = 1;

    function _init () {
        _index = Math.round(1 + Math.random() * (COLOR_CLASS_COUNT - 1));
    }

    /**
     * Returns color template for element.
     * @param {string} id - id of element
     * @returns {Object} Color template
     */
    self.getColorClassForElement = function (id) {
        id = verifyId(id);
        if (!_colorClassMap[id]) _colorClassMap[id] = _getNextClass();
        return _colorClassMap[id];
    };

    function verifyId (id) {
        return id.replace(/[^\w\d]/gi, '-');
    }

    function _getNextClass () {
        var className = 'color-class-' + _index++;
        if (_index > COLOR_CLASS_COUNT) _index = 1;
        return className;
    }

    _init();
}

module.exports = ColorConfigurator;

},{}],7:[function(_dereq_,module,exports){
'use strict';

var Promise = _dereq_('es6-promise').Promise;
_dereq_('whatwg-fetch');

var DEFAULT_SERVER_URL = 'http://view.edg.topbraid.net/edg/tbl/swp';
var DEFAULT_BASE = 'http://rdfex.org/withImports?uri=urn:x-evn-pub:fibo';
var DEFAULT_VIEW_CLASS = 'swa:NeighborGramPropertiesDataService';

/**
 * DataProvider.
 * Provides data for the graph.
 *
 * Constructor parameters:
 *      serverURL: string
 *      base: string
 *      viewClass: string
 *
 * Public methods:
 *      getGraphData(focusNode:string, successCallback: function, errorCallback: function): void
 */
function DataProvider (serverURL, base, viewClass) {
    var self = this;

    /**
     * Private function which used as constructor.
     * @param  {String} serverURL - URL of the server
     * @param  {String} base - Base
     * @param  {String} viewClass - View class
     */
    function _initialize(serverURL, base, viewClass) {
        if (!serverURL) serverURL = DEFAULT_SERVER_URL;
        if (!base) base = DEFAULT_BASE;
        if (!viewClass) viewClass = DEFAULT_VIEW_CLASS;

        self.viewClass = viewClass;
        self.base = base;
        self.serverURL = serverURL;
    }

    /**
     * Requests and returns data.
     * @param  {String} focusNode - Focuse node id
     * @param  {function} successCallback - Handler
     * @param  {function} errorCallback - Handler
     */
    self.getGraphData = function (focusNode, successCallback, errorCallback) {

        if (!viewClass) viewClass = DEFAULT_VIEW_CLASS;

        var url = self.serverURL + '?' +
            '_base=' + self.base + '&' +
            '_viewClass=' + self.viewClass + '&' +
            'focusNode=' + encodeURIComponent(focusNode);
        fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            mode: 'cors',
            cache: 'default'
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }).catch(function (error) {
            errorCallback(error.message);
        }).then(function (response) {
            successCallback(_filterData(response));
        });
    };

    /**
     * It is filtering response data. It's needed to remove duplicate nodes.
     * @param  {Object} data - Data
     * @returns {Object} Corrected data!
     */
    function _filterData (data) {
        var nodes = data.nodes;

        var newNodes = [];

        var findNodeById = function (nodeId) {
            for (var i = 0; i < newNodes.length; i++) {
                if (newNodes[i].id === nodeId) return newNodes[i];
            }
            return null;
        };

        nodes.forEach(function (node) {
            var baseNode = findNodeById(node.id);
            if (!baseNode) {
                node.canExpand = true;
                newNodes.push(node);
            }
        });

        data.nodes = newNodes;
        
        return data;
    }
    
    // Here we call constructor after defining all functions
    _initialize.call(self, serverURL, base, viewClass);
}

module.exports = DataProvider;


},{"es6-promise":2,"whatwg-fetch":5}],8:[function(_dereq_,module,exports){
'use strict';

var joint = _dereq_('rappid');
var uniqueId = _dereq_('lodash').uniqueId;
var cloneDeep = _dereq_('lodash').cloneDeep;

var defaultOptions = { ELEMENT_WIDTH: 130, ELEMENT_HEIGHT: 30, FULL_NODE_LABELS: false };
/**
 * Node of the graph.
 * It's a model of a graph element.
 *
 * Constructor parameters
 *      dataModel: {
 *          typeId: string,
 *          label: string,
 *          colorClass: string,
 *          fullNodeLabels: boolean,
 *      }
 *      _options: {
 *          DEFAULT_PAGE_SIZE: number, 
 *          COLOR_CLASS_COUNT: number, 
 *          MAX_LABEL_LENGTH: number,
 *          COL_OFFSET: number, 
 *          ROW_OFFSET: number, 
 *          CROSS_NODE_OFFSET: number, 
 *          COLOR_CLASS_MAP: {
 *              'subClassOf': string, 
 *              'type': string
 *          }
 *      }
 *
 * Public properties:
 *      dataModel: any
 *      parentEdge: Edge = null
 *      _edges: Edge[] = []
 *      expanded: boolean = false
 *      customPosition: boolean = false
 *      hasPosition: boolean = false
 *      hidden: boolean = false
 *      pagination: Pagination
 *      typeId: string
 *      fullLabel: boolean = false
 *
 * Public methods:
 *      reinit(): void
 *      setLayout(layout: GraphLayout): void
 *      isRootNode(): boolean
 *      nodePlacement(): boolean
 *      getSize(): { width: number, height: number}
 *      getParent(): Node
 *      getPrevNode(): Node | CrossNode
 *      hasChildren(): boolean
*       getChildren(expandCrossNodes?: boolean): (Node | CrossNode)[]
 *      getVisibleChildren(expandCrossNodes?: boolean): (Node | CrossNode)[]
 *      pushEdge(edge: Edge): voide
 *      getEdgeByType(typeId: string)
 *      disconnectEdge(edge: Edge): void
 *      setPagination(pagination: Pagination): void
 *      getPagination(): Pagination
 *      sortEdges(comparator: function): void
 *      getDirection(): boolean
 *      getDirectionRelativeToNode(relativeNode: Node): boolean
 *      setColorClass(colorClass: string): void
 *      getColorClass(): string
 *      badPosition(value: boolean): boolean
 *      addHighlighting(): void
 *      removeHighlighting(): void
 */
function Node (dataModel, _options) {
    var self = this;

    var ELEMENT_WIDTH = _options && _options.ELEMENT_WIDTH != undefined ? _options.ELEMENT_WIDTH : defaultOptions.ELEMENT_WIDTH;
    var ELEMENT_HEIGHT = _options && _options.ELEMENT_HEIGHT != undefined ? _options.ELEMENT_HEIGHT : defaultOptions.ELEMENT_HEIGHT;

    joint.shapes.devs.Model.apply(self, [{
        id: uniqueId('node_'),
        size: {width: ELEMENT_WIDTH, height: ELEMENT_HEIGHT},
        inPorts: ['left'],
        outPorts: ['right'],
        attrs: {
            '.inPorts circle': {r: 0, magnet: 'passive'},
            '.outPorts circle': {r: 0, magnet: 'passive'},
            rect: {
                rx: 20,
                ry: 160,
                'stroke-width': 2
            },
            '.label': {
                'font-size': 11,
                text: dataModel.label ? dataModel.label : 'Unnamed',
                fill: '#333'
            },
            'class': 'body ' + 'default-color-class'
        }
    }]);

    var _layout = null;
    var _colorClass = null;
    var _badPosition = false;
    var _edgeMap = {};

    self.pagination = null;
    self.dataModel = dataModel;
    self.parentEdge = null;
    self.edges = [];
    self.typeId = dataModel.typeId;
    self.set('fullLabel', dataModel.fullNodeLabels || defaultOptions.FULL_NODE_LABELS);

    self.set('expanded', false);
    self.set('customPosition', false); // true if node moved by user
    self.set('hasPosition', false); // true if node is located on _layout and there is way from him to root node
    self.set('hidden', true); // true if node has position, but not presents on graph
    
    self.configurationSet = {
        filterType: 'ALL', // INCOMING, OUTGOING
        filterKey: '',
        visibilityMap: {},
        visibilityMapReverse: {},
    };

    self.on('change:position', function () {
        _reBindEdges();
    });

    self.on('change:fullLabel', _calculateSize);

    self.reinit = function () {
        if (!_layout) return;

        _reBindEdges();

        if (_layout.getRootNode().id === self.id) {
            self.attr({
                rect: {
                    rx: 1,
                    ry: 5
                }
            });
            self.setColorClass('focus-node');
        }
    };

    self.setLayout = function (layout) {
        _layout = layout;
    };

    self.isRootNode = function () {
        return (_layout && _layout.getRootNode().id === self.id);
    };

    self.isReverseDirection = function () {
        return this.parentEdge.isReverseDirection;
    };

    self.nodePlacement = function () { // true - west; false - east;
        return (this.parentEdge && this.parentEdge.getOrientation() ? true : false);
    };

    self.getSize = function () {
        return self.get('size');
    };

    self.getParent = function () { // It can't be a CrossNode
        if (!self.parentEdge) return null;
        var prevNode = self.getPrevNode();
        if (!prevNode) return null;
        return (prevNode instanceof CrossNode ? prevNode.getParent() : prevNode);
    };

    self.getPrevNode = function () { // It can be a CrossNode
        if (!self.parentEdge) return null;
        return self.parentEdge.getOtherEnd(self);
    };

    self.hasChildren = function () {
        return (self.edges && self.edges.length > 0);
    };

    self.getChildren = function (expandCrossNodes) {
        var children = [];
        self.edges.forEach(function (edge) {
            var child = (edge.source.id === self.id ? edge.target : edge.source);
            if (child instanceof CrossNode && expandCrossNodes) {
                child.getChildren().forEach(function (chl2) {
                    children.push(chl2);
                });
            } else {
                children.push(child);
            }
        });
        return children;
    };

    self.getVisibleChildren = function (expandCrossNodes) {
        var children = [];
        self.edges.forEach(function (edge) {
            var child = (edge.source.id === self.id ? edge.target : edge.source);
            if (child instanceof CrossNode && expandCrossNodes) {
                child.getChildren().forEach(function (chl2) {
                    children.push(chl2);
                });
            } else if (!child.get('hidden')) {
                children.push(child);
            }
        });
        return children;
    };

    self.pushEdge = function (edge) {
        self.edges.push(edge);
        _edgeMap[edge.typeId + (edge.isReverseDirection ? '$$reverse' : '') + (edge.getOrientation() ? '$$west' : '$$east')] = edge;
    };

    self.getEdgeByType = function (typeId, isReverseDirection, orientation) {
        var res = _edgeMap[typeId + (isReverseDirection ? '$$reverse' : '') + (orientation ? '$$west' : '$$east')];
        return res;
    };

    self.disconnectEdge = function (edge) {
        if (self.parentEdge === edge) {
            self.parentEdge = null;
        } else {
            self.edges.splice(self.edges.indexOf(edge), 1);
            _edgeMap[edge.typeId + (edge.isReverseDirection ? '$$reverse' : '') + (edge.getOrientation() ? '$$west' : '$$east')] = null;
        }
    };

    self.setPagination = function (pagination) {
        self.pagination = pagination;
    };

    self.getPagination = function () {
        return self.pagination;
    };

    self.sortEdges = function (comparator) {
        if (self.edges) self.edges.sort(comparator);
    };

    /**
     * Returns position relative to center
     * false => on the left of the center
     * true => on the right of the center
     */
    self.getDirection = function () {
        var rootNode = _getRootForNode(self);
        if (rootNode && rootNode !== self) {
            return (_layout && self.position().x >= rootNode.position().x);
        } else {
            return !self.nodePlacement();
        }
    };

    /**
     * Returns position relative to the node
     * false => on the left of the relativeNode
     * true => on the right of the relativeNode
     */
    self.getDirectionRelativeToNode = function (relativeNode) {
        return (relativeNode && self.position().x > relativeNode.position().x);
    };

    /**
     * Sets new color class for node
     * @param {string} colorClass - css class
     */
    self.setColorClass = function (colorClass) {
        if (colorClass != undefined) {
            _colorClass = colorClass;
            self.dataModel.colorClass = colorClass;
        }
        _refreshColorClass();
    };

    /**
     * Returns color class
     * @returns {string} color class
     */
    self.getColorClass = function () {
        return _colorClass;
    };

    self.badPosition = function (value) {
        if (value != undefined) {
            _badPosition = value;
            _refreshColorClass();
        }
        return _badPosition;
    };
    
    self.addHighlighting = function () {
        self.attr('rect/stroke-width', 4);
    };
    
    self.removeHighlighting = function () {
        self.attr('rect/stroke-width', 2);
    };

    self.setParent = function (parentEdge) {
        self.parentEdge = parentEdge;
        // getting the configurationSet from parent
        var parent = self.getParent();
        if (parent && !self.configurationSet.modified) {
            self.configurationSet = cloneDeep(parent.configurationSet);
            self.configurationSet.connections = undefined;
            self.configurationSet.modified = false;
            self.configurationSet.expandTransitively = false;
        }
    };

    function _getRootForNode (node) {
        if (!node) return undefined;
        if (node.isRootNode() || node.get('customPosition')) {
            return node;
        } else {
            return _getRootForNode(node.getParent());
        }
    }

    function _refreshColorClass () {
        if (!_badPosition) {
            self.attr({
                rect: {
                    'class': 'body ' + _colorClass
                }
            });
            self.set('z', 100);
        } else {
            self.attr({
                rect: {
                    'class': 'body ' + _colorClass + ' bad-node-position'
                }
            });
            self.set('z', 200);
        }
    }

    function _calculateSize () {
        if (!self.dataModel.label) return;
        var label = self.dataModel.label;
        var wraptext = joint.util.breakText(label, {
            width: self.getSize().width
        });
        var rows = wraptext.split('\n');
        if (self.get('fullLabel')) {
            self.attr({
                '.label': {
                    text: wraptext
                }
            });
            var rowCount = rows.length - 1;
            var selfSize = self.getSize();
            var fontSize = self.attributes.attrs['.label']['font-size'];
            self.resize(selfSize.width, selfSize.height + rowCount * fontSize);
            selfSize = self.getSize();
            if (_layout && _layout.getRootNode().id === self.id) {
                self.attr({
                    rect: {
                        rx: 1,
                        ry: 5,
                        'class': 'body ' + ' focus-node'
                    }
                });
            } else {
                self.attr({
                    rect: {
                        rx: 20,
                        ry: 20 * (selfSize.width / selfSize.height) * 2
                    }
                });
            }
        } else {
            
            self.attr({
                '.label': {
                    text: (rows.length === 1 ? label : label.substring(0, wraptext.indexOf('\n')) + '...')
                }
            });
            self.resize(ELEMENT_WIDTH, ELEMENT_HEIGHT);
            if (_layout && _layout.getRootNode().id === self.id) {
                self.attr({
                    rect: {
                        rx: 1,
                        ry: 5,
                        'class': 'body ' + ' focus-node'
                    }
                });
            } else {
                self.attr({
                    rect: {
                        rx: 20,
                        ry: 160
                    }
                });
            }
        }
    }
    _calculateSize();

    function _reBindEdges () {
        var rebind = function (edge, direction) {
            if (direction) {
                edge.set('source', {id: edge.get('source').id, port: 'left'});
                edge.set('target', {id: edge.get('target').id, port: 'right'});
            } else {
                edge.set('target', {id: edge.get('target').id, port: 'left'});
                edge.set('source', {id: edge.get('source').id, port: 'right'});
            }
        };
        if (self.parentEdge) rebind(self.parentEdge, self.getPrevNode().position().x > self.position().x);
        if (self.edges) self.edges.forEach(function (edge) {
            rebind(edge, edge.getOtherEnd(self).position().x <= self.position().x);
        });
    }
}
Node.prototype = Object.create(joint.shapes.devs.Model.prototype);

/**
 * CrossNode of the graph.
 * It's a model of a graph element. Extend of Node.
 *
 * Constructor parameters:
 *      colorClass: string
 */
function CrossNode (colorClass) {
    var self = this;
    var DEFAULT_CROSS_NODE_OFFSET = 30; // It defines offset of the cross node relative to the next column position
    Node.apply(self, [{typeId: 'crossNode'}]);

    self.resize(5, 5);
    self.attr({
        rect: {
            rx: 500,
            ry: 500,
            'stroke-width': 2
        },
        '.label': {
            text: ''
        }
    });
    self.reinit = function () {
    };
    self.setColorClass(colorClass);

    self.getEdgeByType = function (typeId) {
        self.edges.filter(function (edge) { return edge.typeId === typeId; })[0];
    };

    self.alignRelativeToChildren = function (CROSS_NODE_OFFSET) {
        var offset = (CROSS_NODE_OFFSET != undefined ? CROSS_NODE_OFFSET : DEFAULT_CROSS_NODE_OFFSET);
        var children = self.getVisibleChildren();
        var filteredChildren = children.filter(function (ch) {
            return !ch.get('customPosition');
        });
        if (filteredChildren.length === 0 && children.length !== 0) {
            filteredChildren = children;
        } else if (children.length === 0) return;
        var firstChield = filteredChildren[0];
        var lastChield = filteredChildren[filteredChildren.length - 1];
        var firstChildPos = firstChield.position();
        var lastChieldPos = lastChield.position();
        var lastChieldSize = firstChield.getSize();
        var x = firstChildPos.x;
        var y = (lastChieldPos.y + firstChildPos.y + lastChieldSize.height - self.getSize().height) / 2;
        if (!self.nodePlacement()) x -= offset;
        if (self.nodePlacement()) x += lastChieldSize.width + offset;
        self.position(x, y);
    };

}
CrossNode.prototype = Object.create(Node.prototype);

/**
 * Edge of the graph.
 * It's a model of a graph link.
 *
 * Constructor parameters:
 *      dataModel: {
 *          typeId: string
 *          sourceTypeId: string,
 *          targetTypeId: string,
 *          label: string,
 *          colorTemplate?: {
 *              color: string, 
 *              colorFill: string, 
 *              colorFont: string,
 *              colorFillFocused: string
 *          },
 *          isReverseDirection?: boolean,
 *      }
 *
 * Public properties:
 *      dataModel: {dataModel}
 *      source: Node
 *      target: Node
 *      typeId: string
 *      sourceTypeId: string
 *      targetTypeId: string
 *
 * Public methods:
 *      getOtherEnd(me: Node): Node
 *      getOrientation(): boolean  // true - west; false - east;
 *      setSource(source: Node, isParent: boolean, port: string): void
 *      setTarget(source: Node, isParent: boolean, port: string): void
 *      disconnect(): void
 *      reverseEdgeDirection(): void
 *      setColorClass(colorClass: string): void
 */
function Edge (dataModel) {
    var self = this;

    joint.dia.Link.apply(self, [{
        z: 0,
        source: {id: null, port: 'right'},
        target: {id: null, port: 'left'},
        // smooth: true,
        // router: { name: 'orthogonal' },
        // router: { name: 'metro' },
        // connector: { name: 'rounded' },
        attrs: {
            '.connection': {
                'stroke-width': 2,
                'class': 'connection ' + (dataModel.colorClass ? dataModel.colorClass : 'default-color-class')
            }
        },
        labels: [{
            position: 0.5,
            attrs: {
                text: {
                    'class': (dataModel.colorClass ? dataModel.colorClass : 'default-color-class'),
                    'font-family': 'Arial, Helvetica, sans-serif',
                    'font-size': 11,
                    text: dataModel.label
                }
            }
        }]
    }]);

    self.isReverseDirection = false;
    self.source = null;
    self.target = null;
    self.dataModel = dataModel;
    self.sourceTypeId = dataModel.sourceTypeId;
    self.targetTypeId = dataModel.targetTypeId;
    self.typeId = dataModel.typeId;
    self.placement = dataModel.placement;

    self.getOtherEnd = function (me) {
        return (me.id === self.source.id ? self.target : self.source);
    };

    self.setSource = function (source, isParent, port) {
        self.set('source', {id: source.id, port: port});
        self.source = source;
        if (isParent) {
            self.source.pushEdge(self);
        } else {
            self.source.setParent(self);
        }
    };

    self.setTarget = function (target, isParent, port) {
        self.set('target', {id: target.id, port: port});
        self.target = target;
        if (isParent) {
            self.target.pushEdge(self);
        } else {
            self.target.setParent(self);
        }
    };

    self.disconnect = function () {
        self.target.disconnectEdge(self);
        self.source.disconnectEdge(self);
        self.remove();
    };

    self.setColorClass = function (colorClass) {
        self.attr({
            '.connection': {
                'class': 'connection ' + colorClass
            },
            '.marker-target': {
                'class': colorClass
            },
            '.marker-source': {
                'class': colorClass
            },
        });
        self.dataModel.colorClass = colorClass;
    };

    self.getOrientation = function () { // true - west; false - east;
        if (
            self.placement &&
            (self.placement === 'forward' || self.placement === 'backward')
        ) {
            return self.isReverseDirection &&
                   self.placement === 'forward' ||
                   !self.isReverseDirection &&
                   self.placement === 'backward';
        } else {
            return self.isReverseDirection;
        }
    };
    
    /**
     * Functions which reverses the direction 
     * of the Edge (For the first iteration)
     */
    self.reverseEdgeDirection = function (isReverseDirection) {
        if (self.isReverseDirection !== isReverseDirection) {
            self.isReverseDirection = isReverseDirection;
            var targetId = self.targetTypeId;
            self.targetTypeId = self.sourceTypeId;
            self.sourceTypeId = targetId;
            self.updateMarker();
        }
    };

    self.updateMarker = function () {
        var marker = {
            'stroke-width': 2,
            'class': (dataModel.colorClass ? dataModel.colorClass : 'default-color-class'),
            d: 'M0 32 L8 35 L11 32 L08 29 Z' // M10 34 L0 32 L10 30 Z //M 10 0 L 0 5 L 10 10 z - fatter arrow
        };
        var attrs = {
            '.marker-target': (self.targetTypeId !== 'crossNode' && !self.isReverseDirection ? marker : { d: '' }),
            '.marker-source': (self.sourceTypeId !== 'crossNode' && self.isReverseDirection ? marker : { d: '' })
        };
        self.attr(attrs);
    }
    self.updateMarker();
}
Edge.prototype = Object.create(joint.dia.Link.prototype);

module.exports = {
    Node: Node,
    CrossNode: CrossNode,
    Edge: Edge
};


},{"lodash":"lodash","rappid":"rappid"}],9:[function(_dereq_,module,exports){
'use strict';

var Node = _dereq_('./graphElements').Node,
    CrossNode = _dereq_('./graphElements').CrossNode,
    Edge = _dereq_('./graphElements').Edge;

var Pagination = _dereq_('./pagination');

var LayoutPaginationManager = _dereq_('./layoutPaginationManager');
var LayoutPositionManager = _dereq_('./layoutPositionManager');

var ColorConfigurator = _dereq_('./colorConfigurator');

/**
 * Layout of the graph.
 * Contain all graph elements, controls the placement of nodes.
 *
 * Constructor parameters:
 *      graph: joint.dia.Graph
 *      paper: joint.dia.Paper
 *      scroller: joint.ui.PaperScroller
 *      _options: {
 *          DEFAULT_PAGE_SIZE: number, 
 *          COLOR_CLASS_COUNT: number, 
 *          MAX_LABEL_LENGTH: number, 
 *          COL_OFFSET: number, 
 *          ROW_OFFSET: number, 
 *          CROSS_NODE_OFFSET: number, 
 *          COLOR_CLASS_MAP: {
 *              'subClassOf': string, 
 *              'type': string
 *          }
 *      }
 *
 * Public methods:
 *      cleanLayout(): void
 *      setRootNode(rootNode: Node): void
 *      getRootNode(): Node
 *      getNodes(): Node[]
 *      getEdges(): Edge[]
 *      removeEdge(edge: Edge): void
 *      collapseNode(unbindFromId: string): void
 *      removeNode(node: Node, removeChildren: boolean = false): void
 *      putAll(cells: (Node|Edge), bindToId?: string): void - (by default: bindToId = _rootNode.id)
 *      put(cell: (Node|Edge), bindToId?: string): void
 *      cloneNode(node: Node): Node
 *      recalculateLayout(): void
 *      getScale(): {sx: number, sy: number}
 *      hideNode(node: Node): void
 *      showNode(node: Node): void
 *      doForBrunch(node: Node, callBack: function): void
 */
function GraphLayout (graph,
                     paper,
                     scroller,
                     _options) {
    var self = this;

    /**
     * Private filds
     */
    var _graph = null;
    var _rootNode = null;
    var _nodesById = null;
    var _nodesByType = null;
    var _edges = null;
    var _scroller = null;
    var _positionManager = null;
    var _paginationManager = null;
    var _colorConfigurator = null;

    /**
     * Private function which used as constructor.
     * @param  {joint.dia.Graph} graph - joint.dia.Graph
     * @param  {joint.dia.Paper} paper - joint.dia.Paper
     * @param  {joint.ui.PaperScroller} scroller - joint.ui.PaperScroller
     */
    function _initialize (graph, paper, scroller) {

        _graph = graph;
        _scroller = scroller;

        _positionManager = new LayoutPositionManager(_options);
        _paginationManager = new LayoutPaginationManager(self, _options);

        _colorConfigurator = new ColorConfigurator();

        self.blockValidation = false;
        self.cleanLayout();
    }

    self.loadState = function (state) {
        if (_rootNode) self.cleanLayout();
        
        _rootNode = state.rootNode;
        _edges = state.edges;
        _nodesById = {};
        _nodesByType = {};
        state.nodes.forEach(function (node) {
            if (node.getPrevNode()) {
                _embedNode(node, node.getPrevNode());
            }
            if (node.pagination) {
                _embedNode(node.pagination, node);
            }
            if (!_nodesByType[node.typeId]) _nodesByType[node.typeId] = [];
            _nodesByType[node.typeId].push(node);
            _nodesById[node.id] = node;
        });
        _graph.addCells(state.visibleElements);
    };

    self.getState = function () {
        return {
            rootNode: _rootNode,
            edges: _edges,
            nodes: self.getNodes(),
            visibleElements: _graph.getElements()
            .concat(_graph.getLinks()),
        };
    };

    /**
     * Returns value of scale by x and y axis
     */
    self.getScale = function () {
        return {sx: _scroller._sx, sy: _scroller._sy};
    };

    /**
     * Function is used for clean layout and remove all nodes and edges.
     */
    self.cleanLayout = function () {
        _rootNode = null;
        _nodesById = {};
        _nodesByType = {};
        _edges = [];
        _graph.clear();
    };

    /**
     * Sets root node for layout.
     * If we there is one, then we clean layout.
     * @param {Node} rootNode - Node which will be used as root
     */
    self.setRootNode = function (rootNode) {
        if (_rootNode) self.cleanLayout();

        _rootNode = rootNode;
        _putNode(rootNode);
        _rootNode.set('expanded', true);

        _locateNode(_rootNode, rootNode.id);
        self.showNode(_rootNode);
    };

    /**
     * Returns root node of layout.
     * @returns {Array} Nodes of the layout
     */
    self.getRootNode = function () {
        return _rootNode;
    };

    /**
     * Returns all nodes of the layout.
     * @returns {Array} Edges of the layout
     */
    self.getNodes = function () {
        return Object.keys(_nodesById).filter(function (id) {
            return _nodesById[id];
        }).map(function (id) {
            return _nodesById[id];
        });
    };

    /**
     * Returns all edges of the layout.
     */
    self.getEdges = function () {
        return _edges;
    };

    /**
     * Implements opportunity to remove edge from the layout
     * @param {Edge} edge - Edge which must be removed
     */
    self.removeEdge = function (edge) {
        _edges.splice(_edges.indexOf(edge), 1);
        edge.disconnect();
    };

    /**
     * Collapses node and removes all children
     * of the Node from the layout
     * @param {string} unbindFromId - Id of the node from layout
     */
    self.collapseNode = function (unbindFromId) {
        if (_nodesById[unbindFromId]) {
            var node = _nodesById[unbindFromId];
            if (node.id === _rootNode.id) {
                self.leftTree = [];
                self.rightTree = [];
            }
            _paginationManager.removePagination(node);
            var children = node.getChildren();
            children.forEach(function (ch) {
                self.removeNode(ch, true);
            });
        }
    };

    /**
     * Removes node from the layout and (if needed) removes all his children
     * @param {string} node - Id of the node from layout
     * @param {boolean} removeChildren - If true then children will be removed
     */
    self.removeNode = function (node, removeChildren) {
        _paginationManager.removePagination(node);

        if (node.parentEdge) self.removeEdge(node.parentEdge);
        node.set('hasPosition', false);

        if (removeChildren) {
            var children = node.getChildren();
            children.forEach(function (ch) {
                self.removeNode(ch, true);
            });
        }
        
        if (_nodesById[node.id]) _nodesById[node.id] = null;
        if (_nodesByType[node.typeId] && _nodesByType[node.typeId].length > 0)
            _nodesByType[node.typeId].splice(_nodesByType[node.typeId].indexOf(node), 1);

        if (!node.get('hidden')) self.hideNode(node);
    };

    /**
     * Adds all nodes or edges on the layout
     * @param {Array} cells - Array of cells (Edge|Node)
     * @param {string} bindToId - Source node
     * which will be added on the layout
     */
    self.putAll = function (cells, bindToId) {
        cells.forEach(function (cell) {
            self.put(cell, bindToId);
        });
    };

    /**
     * Adds one node or edge on the layout
     * @param {Node|Edge} cell - Cell which
     * @param {string} bindToId - Source node
     * will be added on the layout
     */
    self.put = function (cell, bindToId) {
        if (cell instanceof Node) {
            _putNode(cell);
        } else if (cell instanceof Edge) {
            _putEdge(cell, bindToId);
        } else if (cell instanceof Pagination) {
            _putPagination(cell, bindToId);
        }
    };

    /**
     * Relocates all nodes of layout on their position
     */
    self.recalculateLayout = function () {
        if (!_rootNode) return;

        self.blockValidation = true;

        var x = _rootNode.position().x;
        var y = _rootNode.position().y;

        if (!_rootNode.get('customPosition')) {
            var ph = _scroller.options.baseHeight;
            var pw = _scroller.options.baseWidth;
            x = (pw - _rootNode.getSize().width) / 2;
            y = (ph - _rootNode.getSize().height) / 2;

            var dx = x - _rootNode.position().x;
            var dy = y - _rootNode.position().y;
            _rootNode.translate(dx, dy);
        }

        _paginationManager.paginateNode(_rootNode);

        _positionManager.calculateLayoutForNode(_rootNode);

        _paginationManager.setPaginationPosition(_rootNode);
        
        self.blockValidation = false;
    };

    /**
     * Implements opportunity to create copy of any Node
     * @param {Node} node - The copied node
     */
    self.cloneNode = function (node) {
        return new Node({
            typeId: node.dataModel.typeId,
            label: node.dataModel.label,
            colorClass: node.dataModel.colorClass,
            canExpand: node.dataModel.canExpand
        });
    };

    /**
     * Hides one node - removes only from graph, not from layout.
     * @param {Node} node - Node which will be hidden
     */
    self.hideNode = function (node) {
        if (!node.get('hidden')) {
            node.remove();

            var prev = node.getPrevNode();
            if (prev) _unembedNode(node, prev);
            
            node.set('hidden', true);
            _paginationManager.hidePagination(node);
            node.getChildren().forEach(function (ch) {
                self.hideNode(ch);
            });
        }
    };

    /**
     * Shows one node - puts node on the graph.
     * @param {Node} node - Node which will be showed
     * @param {boolean} withoutChildren - if true children aren't counted
     */
    self.showNode = function (node, withoutChildren) {
        if (node.get('hidden')) {
            _graph.addCell(node);
            if (node.parentEdge) {
                self.showNode(node.getPrevNode());
                _graph.addCell(node.parentEdge);
            }
            node.set('hidden', false);

            var prev = node.getPrevNode();
            if (prev) _embedNode(node, prev);

            _paginationManager.showPagination(node);
            if (!withoutChildren) {
                node.getChildren().forEach(function (ch) {
                    self.showNode(ch);
                });
            }
        }
    };

    /**
     * Performs action for branch
     * @param {Node} node - root node of the branch
     * @param {function} callBack - performed action
     */
    self.doForBrunch = function (node, callBack) {
        node.getChildren().forEach(function (child) {
            self.doForBrunch(child, callBack);
        });
        callBack(node);
    };

    //Private functions
    //=========================================================
    //=========================================================

    /**
     * Adds and embeds pagination to node
     * @param {Pagination} pagination - Pagination for node
     * @param {string} nodeId - edges of this node will be poginated
     */
    function _putPagination (pagination, nodeId) {
        if (_nodesById[nodeId] && !_nodesById[nodeId].get('hidden')) {
            _graph.addCell(pagination);
            _nodesById[nodeId].embed(pagination);
        }
    }

    /**
     * Adds node to the node list (not on layout)
     * Not does it if edge already exists
     * @param {Node} node - New node
     * @param {boolean} ignorRepeated - Ignore repeating
     */
    function _putNode (node, ignorRepeated) {
        if (!_nodesByType[node.typeId] || _nodesByType[node.typeId].length === 0 || ignorRepeated) {
            if (!_nodesByType[node.typeId]) _nodesByType[node.typeId] = [];

            if (_nodesByType[node.typeId].indexOf(node) === -1) _nodesByType[node.typeId].push(node);
            _nodesById[node.id] = node;
            node.setLayout(self);
        }
    }

    /**
     * Adds edge to the edge list, then
     * add source and target and source node
     * on the layout (if they aren't yet) and
     * next adds edge on the layout.
     * Not does it if edge already exists
     * @param {Edge} edge - New edge
     * @param {string} bindToId - Id of the source node
     */
    function _putEdge (edge, bindToId) {
        if (!bindToId || !_nodesById[bindToId]) bindToId = _rootNode.id;

        if (_nodesByType[edge.sourceTypeId] &&
            _nodesByType[edge.targetTypeId] &&
            edge.targetTypeId === _nodesById[bindToId].typeId) {
            
            edge.reverseEdgeDirection(true);
        }

        var port = _getSourcePort(edge, _nodesById[bindToId]);
        if (port === _nodesById[bindToId]) {
            var completeEdge = _enrichEdge(edge, bindToId);

            if (completeEdge) {

                if (!completeEdge.target.get('hasPosition')) {
                    _putNode(completeEdge.target, true);
                    _locateNode(completeEdge.target, bindToId);
                }

                if (!completeEdge.source.get('hasPosition')) {
                    _putNode(completeEdge.source, true);
                    _locateNode(completeEdge.source, bindToId);
                }
                _edges.push(completeEdge);
            }
        } else {
            _putEdge(edge, port.id);
        }
    }

    /**
     * It Checks there is same edge in the layout
     * @param {Edge} newEdge - New edge
     * @param {string} bindToId - Id of the source node
     * @returns {boolean}
     */
    function _isEdgeExists (newEdge, bindToId) {
        return _edges.filter(function (edge) {
            if (newEdge.isReverseDirection === edge.isReverseDirection || newEdge.isReverseDirection && edge.isReverseDirection) {
                return ( edge.typeId === newEdge.typeId &&
                    edge.sourceTypeId === newEdge.sourceTypeId) &&
                    edge.targetTypeId === newEdge.targetTypeId &&
                    (
                        edge.source.id === bindToId ||
                        edge.target.id === bindToId
                    );
            } else {
                return ( edge.typeId === newEdge.typeId &&
                    edge.sourceTypeId === newEdge.targetTypeId) &&
                    edge.targetTypeId === newEdge.sourceTypeId &&
                    (
                        edge.source.id === bindToId ||
                        edge.target.id === bindToId
                    );
            }
        }).length > 0;
    }

    /**
     * Get source and target type ids, and basing on it,
     * puts concrete source and target objects into edge
     * @param {Edge} edge - Edge
     * @param {string} bindToId - Id of the source node
     * @returns {Edge} Enriched edge
     */
    function _enrichEdge (edge, bindToId) {
        if (_isEdgeExists(edge, bindToId)) return null;
        
        if (!bindToId) bindToId = _rootNode.id;

        if (_nodesByType[edge.sourceTypeId] &&
            _nodesByType[edge.targetTypeId] &&
            edge.sourceTypeId === _nodesById[bindToId].typeId
        ) {
            var source = _nodesById[bindToId];
            var target = _getFreeNodeByType(edge.targetTypeId);
            if (!target && _nodesByType[edge.targetTypeId][0]) {
                target = self.cloneNode(_nodesByType[edge.targetTypeId][0]);
            }

            edge.setSource(source, true);
            edge.setTarget(target, false);

            edge.setColorClass(_colorConfigurator.getColorClassForElement(edge.dataModel.label));
            target.setColorClass(edge.dataModel.colorClass);
            return edge;
        }
        return null;
    }

    /**
     * Returns (target/source) node as a port, or, if there are edges 
     * with same type, it will return crossNode
     * @param {Edge} edge - Edge
     * @param {Node} rootNode - (target/source) node, which is for contecting by edge
     * @returns {Node} (target/source or crossNode)
     */
    function _getSourcePort (edge, rootNode) {
        if (rootNode.typeId === 'crossNode') {
            edge.set('labels', []);
            edge.sourceTypeId = 'crossNode';
            edge.updateMarker();
            return rootNode;
        }

        var existedEdge = rootNode.getEdgeByType(edge.typeId, edge.isReverseDirection, edge.getOrientation());

        if (!existedEdge) {
            return rootNode;
        } else {
            var crossNode;
            if (existedEdge.targetTypeId !== 'crossNode' && existedEdge.sourceTypeId !== 'crossNode') {
                var target = existedEdge.target;
                var source = existedEdge.source;
                self.removeEdge(existedEdge);

                crossNode = new CrossNode(existedEdge.dataModel.colorClass);
                _putNode(crossNode, true);

                var typeEdge = new Edge({
                    typeId: existedEdge.dataModel.typeId,
                    sourceTypeId: existedEdge.sourceTypeId,
                    targetTypeId: 'crossNode',
                    label: existedEdge.dataModel.label,
                    colorClass: existedEdge.dataModel.colorClass,
                    placement: existedEdge.placement,
                });

                typeEdge.isReverseDirection = edge.isReverseDirection;
                typeEdge.updateMarker();
                typeEdge.setSource(source, true, 'left');
                typeEdge.setTarget(crossNode, false, 'right');
                _edges.push(typeEdge);
                
                _locateNode(crossNode, rootNode.id);

                var secondPart = new Edge({
                    typeId: existedEdge.dataModel.typeId,
                    sourceTypeId: 'crossNode',
                    targetTypeId: existedEdge.targetTypeId,
                    label: '',
                    colorClass: existedEdge.dataModel.colorClass,
                    placement: existedEdge.placement,
                });

                secondPart.isReverseDirection = edge.isReverseDirection;
                secondPart.updateMarker();
                secondPart.setSource(crossNode, true, 'left');
                secondPart.setTarget(target, false, 'right');
                _edges.push(secondPart);
            } else {
                crossNode = existedEdge.target;
            }

            return crossNode;
        }
    }

    /**
     * Get node from the node list.
     * If node is present on diagram, returns copy.
     * @param {string} typeId - Id of the source node
     * @returns {Node} Free node
     */
    function _getFreeNodeByType (typeId) {
        var nodes = _nodesByType[typeId];
        if (!nodes || nodes.length === 0) return null;
        for (var i = 0; i < nodes.length; i++) {

            if (!nodes[i].get('hasPosition')) return nodes[i];
        }
        return null;
    }

    /**
     * Puts node into layout.
     * @param {Node} node - Node which will be posted
     * @param {string} bindToId - Source node
     */
    function _locateNode (node) {
        if (!_rootNode) {
            self.setRootNode(node);
        }

        node.set('hasPosition', true);
        node.reinit();
        // self.recalculateLayout();
    }

    /**
     * Embed a node into parent node
     * @param {Node} node - Node of the branch
     * @param {Node} parent - Parent node
     */

    function _embedNode (node, parent) {
        if (!node.isEmbeddedIn(parent)) parent.embed(node);
    }

    /**
     * Free up an embedded node from parent node
     * @param {Node} node - Node of the branch
     * @param {Node} parent - Parent node
     */
    function _unembedNode (node, parent) {
        if (node.isEmbeddedIn(parent)) parent.unembed(node);
    }

    //Here we call constructor after defining all functions
    _initialize.call(self, graph, paper, scroller);
}
module.exports = GraphLayout;


},{"./colorConfigurator":6,"./graphElements":8,"./layoutPaginationManager":13,"./layoutPositionManager":14,"./pagination":17}],10:[function(_dereq_,module,exports){
var TQGramUI = _dereq_("visualizations-library");
var InfoPanel = _dereq_("./infoPanel");
var OptionsPanel = _dereq_("./optionsPanel");

function DefaultUI(options) {
    // Initialization
    // =======================================================
    var _neighborGram = options.lineageGram;
    var markup =
        '<div class="tq-ng-default-user-ui">' +
        '<div id="tqLgToolbar"></div>' +
        '<div id="tqLgInfoPanel"></div>' +
        '<div id="tqLgOptionsPanel"></div>' +
        '<div id="tqLgSearchPanel"></div>' +
        "</div>";

    var _el;
    if (typeof options.baseElement === "string") {
        _el = document.getElementById(options.baseElement);
    } else if (typeof options.baseElement === "object") {
        _el = options.baseElement;
    }
    if (!_el) return;
    _el.innerHTML = markup;

    var tqLgToolbar = _el.querySelector("#tqLgToolbar");
    var tqLgInfoPanel = _el.querySelector("#tqLgInfoPanel");
    var tqLgOptionsPanel = _el.querySelector("#tqLgOptionsPanel");
    var tqLgSearchPanel = _el.querySelector("#tqLgSearchPanel");
    var _expandAll = true;
    // ========================================================

    var tools = [];

    //default is true
    var includeSearch = true;

    if (Object.prototype.hasOwnProperty.call(options, "includeSearch")) {
        includeSearch = options.includeSearch;
    }

    if (includeSearch) {
        tools.push({
            id: "tqLgSearchButton",
            icon: "fas fa-search",
            label: "Search",
        });
    }

    tools = tools.concat([
        {
            id: "tqNgUndo",
            icon: "fas fa-chevron-left",
            label: "Back",
            callback: function () {
                _neighborGram.undoState();
            },
        },
        {
            id: "tqNgRedo",
            icon: "fas fa-chevron-right",
            label: "Forward",
            callback: function () {
                _neighborGram.redoState();
            },
        },
        {
            id: "tqLgZoomIn",
            icon: "fas fa-search-plus",
            label: "Zoom in",
            callback: function () {
                _neighborGram.zoom(0.2, { max: 4 });
            },
        },
        {
            id: "tqLgZoomOut",
            icon: "fas fa-search-minus",
            label: "Zoom out",
            callback: function () {
                _neighborGram.zoom(-0.2, { min: 0.2 });
            },
        },
        {
            id: "zoomToFit",
            icon: "fas fa-expand",
            label: "Zoom to fit",
            callback: function () {
                _neighborGram.zoom();
            },
        },
        {
            id: "tqLgReset",
            icon: "fas fa-sync",
            label: "Reset layout",
            callback: function () {
                _neighborGram.getNodes().forEach(function (node) {
                    node.set("customPosition", false);
                });
                _neighborGram.refreshLayout();
            },
        },
        {
            id: "expandAll",
            icon: "fas fa-expand-alt",
            icon2: "fas fa-compress-alt",
            label: "Expand labels",
            callback: function () {
                _neighborGram.fullNodeLabels(_expandAll);
                _expandAll = !_expandAll;
            },
        },
        '<div style="flex-grow: 1"></div>',
        {
            id: "infoPanelBtn",
            icon: "fas fa-info-circle",
            label: "Node info",
        },
        {
            id: "tqLgOptionsButton",
            icon: "fas fa-bars",
            label: "Options",
        },
    ]);

    // Toolbar
    var toolbar = new TQGramUI.Toolbar({
        baseElement: tqLgToolbar,
        tools: tools,
    });
    
    if (includeSearch) {
        new TQGramUI.SearchPanel({
            baseElement: tqLgSearchPanel,
            triggerButton: toolbar.rootHtml.querySelector("#tqLgSearchButton"),
            header: "Search this NeighborGram™",
            searchButtonId: "tqNgSearchBtn",
            searchId: "tqNgSearch",
            active: false,
            ariaLabel: "Input search for this NeighborGram",
        });
    }

    new OptionsPanel({
        neighborGram: _neighborGram,
        baseElement: tqLgOptionsPanel,
        active: false,
        triggerButton: toolbar.rootHtml.querySelector("#tqLgOptionsButton"),
        legends: options.legends,
    });

    new InfoPanel({
        baseElement: tqLgInfoPanel,
        active: false,
        triggerButton: toolbar.rootHtml.querySelector("#infoPanelBtn"),
        neighborGram: _neighborGram,
    });
}
module.exports = DefaultUI;

},{"./infoPanel":11,"./optionsPanel":12,"visualizations-library":1}],11:[function(_dereq_,module,exports){
var graphElements = _dereq_('../graphElements');
var Subscribable = _dereq_('../subscriptionAPI/subscribeable');
var TQGramUI = _dereq_('visualizations-library');

function InfoPanel (options) {
    Subscribable.apply(this);   // make this class Subscribable

    var infoTemplate = new TQGramUI.InfoPanel({
        placeholder: 'Select a node',
    });
    var _neighborGram = options.neighborGram;

    TQGramUI.FlyingPanel.apply(this, [{
        baseElement: options.baseElement,
        active: options.active,
        header: 'Node Info',
        triggerButton: options.triggerButton,
        emptyBody: false,
        size: { width: '300px', height: '450px'},
        body: infoTemplate,
    }]);

    _neighborGram.onNodeSelected(_setSelectedElement);

    infoTemplate.on('selected-element-changed', function (selectedId) {
        var nodes = _neighborGram.getNodes();
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id === selectedId) {
                _neighborGram.setSelectedNode(nodes[i]);
                _setSelectedElement(nodes[i]);
                break; 
            }
        }
    });

    function _setSelectedElement (element) {
        if (element && element instanceof graphElements.Node && element.dataModel) {
            var node = element;
            var model = node.dataModel;

            infoTemplate.setSelectedElement({
                id: node.id,
                label: model.label,
                types: model.typeId,
                data: model.data,
                relations: _getRelations(element),
            });

        } else {
            infoTemplate.setSelectedElement();
        }
    }

    function _getRelations (element) {
        var parentNode = element.getParent();
        var relatedNodes = element.getChildren(true);

        var sources = relatedNodes.filter(function (n) {
            return (!n.getDirectionRelativeToNode(element));
        });
        if (parentNode && (!element.isReverseDirection())) {
            sources.push(parentNode);
        }
        
        var targets = relatedNodes.filter(function (n) {
            return (n.getDirectionRelativeToNode(element));
        });
        if (parentNode && (element.isReverseDirection())) {
            targets.push(parentNode);
        }
        
        if (sources && sources.length > 0 || targets && targets.length > 0) {
            return {
                incomings: sources.map(function (el) { 
                    return {
                        id: el.id,
                        label: el.dataModel.label,
                    };
                }),
                outgoings: targets.map(function (el) { 
                    return {
                        id: el.id,
                        label: el.dataModel.label,
                    };
                }),
            };
        }
        return undefined;
    }
            
}
module.exports = InfoPanel;

},{"../graphElements":8,"../subscriptionAPI/subscribeable":20,"visualizations-library":1}],12:[function(_dereq_,module,exports){
var Subscribable = _dereq_("../subscriptionAPI/subscribeable");
var TQGramUI = _dereq_("visualizations-library");

function OptionsPanel(options) {
    Subscribable.apply(this); // make this class Subscribable

    var _legends = options.legends || [];
    var _neighborGram = options.neighborGram;
    var self = this;

    TQGramUI.FlyingPanel.apply(this, [
        {
            baseElement: options.baseElement,
            active: options.active,
            header: "Options",
            triggerButton: options.triggerButton,
            removeBackground: true,
            size: {
                width: "400px",
                height: "500px",
            },
            body: new TQGramUI.TabPanel({
                tabs: [
                    {
                        id: "tqUiGeneral",
                        label: "General",
                        body:
                            '<label for="exportGroup" class="tq-label">Export as</label>                                ' +
                            '<div id="exportGroup" class="tq-ui-group tq-ui-export-group">                              ' +
                            '    <button id="tqUiExportSVG" title="Export diagram to SVG" class="tq-button">SVG</button>' +
                            '    <button id="tqUiExportPNG" title="Export diagram to PNG" class="tq-button">PNG</button>' +
                            "</div>                                                                                     " +
                            '<label for="howToUseGroup" class="tq-label">How to use</label>                             ' +
                            '<div id="howToUseGroup" class="tq-ui-group tq-ui-opt-group">                               ' +
                            '    <button id="tqUiHelpBtn" title="Help" class="tq-button">                               ' +
                            '        <span class="fas fa-info-circle" aria-hidden="true"></span>             ' +
                            "    </button>                                                                              " +
                            '    <a class="tq-button" title="Documentation" href="./documentation/index.html">DOC</a>   ' +
                            "</div>                                                                                     ",
                    },
                    {
                        id: "tqUiLegends",
                        label: "Legends",
                        body: new TQGramUI.Legends({ legends: _legends }),
                    },
                ],
            }),
        },
    ]);

    // General

    var svgButton = self.rootHtml.querySelector("#tqUiExportSVG");
    var pngButton = self.rootHtml.querySelector("#tqUiExportPNG");
    var helpButton = self.rootHtml.querySelector("#tqUiHelpBtn");

    svgButton.onclick = function () {
        _neighborGram.export({
            type: "svg",
        });
    };

    pngButton.onclick = function () {
        _neighborGram.export({
            type: "png",
        });
    };

    helpButton.onclick = options.onPressHelp;
}
module.exports = OptionsPanel;

},{"../subscriptionAPI/subscribeable":20,"visualizations-library":1}],13:[function(_dereq_,module,exports){
'use strict';

var Pagination = _dereq_('./pagination');

var CrossNode = _dereq_('./graphElements').CrossNode;

// They are used when we need to locate nodes on the graph
var defaultOptions = {
    DEFAULT_PAGE_SIZE: 5
};

/**
 * LayoutPaginationManager.
 * Manage pagination.
 *
 * Constructor parameters:
 *      _layout: GraphLayout
 *      _options: {
 *          DEFAULT_PAGE_SIZE: number, 
 *          COLOR_CLASS_COUNT: number, 
 *          MAX_LABEL_LENGTH: number, 
 *          COL_OFFSET: number, 
 *          ROW_OFFSET: number, 
 *          CROSS_NODE_OFFSET: number, 
 *          COLOR_CLASS_MAP: {
 *              'subClassOf': string, 
 *              'type': string
 *          }
 *      }
 *
 * Public methods:
 *      paginateNodes(nodes: Array): void
 *      paginateNode(rootNode: Node): void
 *      hidePagination(node: Node): void
 *      showPagination(node: Node): void
 *      removePagination(node: Node): void
 *      setPaginationPosition(node: Node): void
 *      defaultEdgeComparator(edge1: Edge, edge2: Edge): number
 */
function LayoutPaginationManager (_layout,
                                 _options) {
    var self = this;

    var DEFAULT_PAGE_SIZE = (_options && _options.DEFAULT_PAGE_SIZE != undefined ? _options.DEFAULT_PAGE_SIZE : defaultOptions.DEFAULT_PAGE_SIZE);

    /**
     * It does pagination for all nodes from the list
     * @param {Array} nodes - array of nodes
     */
    self.paginateNodes = function (nodes) {
        if (nodes) nodes.forEach(function (node) {
            self.paginateNode(node);
        });
    };

    /**
     * It does pagination for the node and for his children
     * @param {Node} rootNode
     */
    self.paginateNode = function (rootNode) {
        if (!rootNode.get('hidden')) {
            var children = _paginateAndSortChildrenOfNode(rootNode);
            self.paginateNodes(children);
        }
    };

    /**
     * Hide the pagination element
     * @param {Node} node
     */
    self.hidePagination = function (node) {
        if (node.getPagination()) {
            node.getPagination().remove();
        }
    };

    /**
     * Show the pagination element
     * @param {Node} node
     */
    self.showPagination = function (node) {
        if (node.getPagination()) {
            _layout.put(node.getPagination(), node.id);
        }
    };

    /**
     * Removes the pagination element from the graph
     * @param {Node} node
     */
    self.removePagination = function (node) {
        if (node.getPagination()) {
            node.getPagination().remove();
            node.setPagination(null);
        }
    };

    /**
     * Calculates the new position of the pagination element and moves it to that position
     * @param {Node} node
     */
    self.setPaginationPosition = function (node) {
        if (node.getPagination()) {
            var pagination = node.getPagination(),
                x = 0,
                y = 0;
            var scale = _layout.getScale();
            var paginationWidth = pagination.get('size').width / scale.sx;
            var paginationHeight = pagination.get('size').height / scale.sy;

            if (pagination.getType() === 'nodes') {
                if (node.id === _layout.getRootNode().id) {
                    x = node.position().x + (node.getSize().width - paginationWidth) / 2;
                    y = node.position().y - paginationHeight - (5 / scale.sy);
                } else {
                    var children = node.getChildren().filter(function (child) {
                            return !child.get('hidden') && !child.get('customPosition');
                        }),
                        firstNode;

                    if (children.length) firstNode = children[0];

                    if (firstNode) {
                        x = firstNode.position().x + (firstNode.getSize().width - paginationWidth) / 2;
                        y = firstNode.position().y - paginationHeight - (5 / scale.sy);
                    } else {
                        x = node.position().x - paginationWidth - (3 / scale.sx);
                        y = node.position().y + (node.getSize().height - paginationHeight) / 2;
                    }
                }
            } else {
                x = node.position().x + (node.getDirection() ? node.getSize().width + (3 / scale.sx) : -paginationWidth - (3 / scale.sx));
                y = node.position().y + (node.getSize().height - paginationHeight) / 2;
            }
            if (pagination.position().x == x && pagination.position().y == y) {
                pagination.updateViewPosition();
            } else {
                pagination.set('position', {x: x, y: y});
            }
        }

        node.getChildren().forEach(function (child) {
            self.setPaginationPosition(child);
        });
    };

    /**
     * Function comparator for sorting child-branches of the node
     * @param  {Edge} edge1
     * @param  {Edge} edge2
     * @returns {number}
     */
    self.defaultEdgeComparator = function (edge1, edge2) {
        var node1 = (edge1.target ? edge1.target : {dataModel: {}});
        var node2 = (edge2.target ? edge2.target : {dataModel: {}});

        var a = null;

        if (node1 instanceof CrossNode && node1.hasChildren()) {
            node1.sortEdges(self.defaultEdgeComparator);
            a = node1.getChildren()[0].dataModel.label;
        } else {

            a = node1.dataModel.label;
        }
        if (a) a = a.toLowerCase();

        var b = null;
        if (node2 instanceof CrossNode && node2.hasChildren()) {
            node2.sortEdges(self.defaultEdgeComparator);
            b = node2.getChildren()[0].dataModel.label;
        } else {
            b = node2.dataModel.label;
        }
        if (b) b = b.toLowerCase();

        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    };

    /**
     * Returns only nodes which exists on current page and hides other nodes.
     * @param {Node} rootNode - Parent of the paginated nodes
     * @retunrs {Array} Nodes which exists on current page
     */
    function _paginateAndSortChildrenOfNode (rootNode) {
        var maxPageSize = (rootNode.isRootNode() ? DEFAULT_PAGE_SIZE * 2 : DEFAULT_PAGE_SIZE);

        rootNode.sortEdges(self.defaultEdgeComparator);
        var children = rootNode.getChildren();
        
        if (children.length > maxPageSize) {
            if (!rootNode.getPagination()) {
                _createPagination(rootNode, maxPageSize);
            }
            return _paginate(children, rootNode.getPagination().getState());
        } else {
            children.forEach(function (node) {
                _layout.showNode(node, true);
            });
            return children;
        }
    }


    /**
     * Paginates array of nodes.
     * @param {Array} nodes - Array of nodes
     * @param {Object} pagination - { pageSize:number, curPage:number, totalCount:number, pageCount:number }
     * @retunrs {Array} Nodes which exists on current page
     */
    function _paginate (nodes, pagination) {
        var paginatedNodes = [];
        var curMin = pagination.curPage * pagination.pageSize;
        var curMax = (pagination.curPage + 1) * pagination.pageSize;
        for (var index = 0; index < nodes.length; index++) {
            var node = nodes[index];
            if (index >= curMin && index < curMax) {
                _layout.showNode(node, true);
                paginatedNodes.push(node);
            } else {
                _layout.hideNode(node);
            }
        }
        return paginatedNodes;
    }

    /**
     * Creates the pagination element, adds it to the graph and embeds it into the node
     * @param {Node} node
     * @param {number} max - maximum number of nodes
     */
    function _createPagination (node, max) {
        var pagination,
            type;

        if (node instanceof CrossNode || node.id === _layout.getRootNode().id) {
            type = 'nodes';
        } else {
            type = 'edges';
        }

        pagination = new Pagination(node, _layout, max, type, _options);
        node.setPagination(pagination);
        _layout.put(pagination, node.id);
    }
}
module.exports = LayoutPaginationManager;

},{"./graphElements":8,"./pagination":17}],14:[function(_dereq_,module,exports){
'use strict';

var CrossNode = _dereq_('./graphElements').CrossNode;

// They are used when we need  to locate nodes on the graph
var defaultOptions = {
    COL_OFFSET: 100,        // It needed to calculate distance between columns in the graph
    ROW_OFFSET: 30,        // It needed to calculate distance between rows in the graph
    CROSS_NODE_OFFSET: 30, // It defines offset of the cross node relative to the next column position
    ELEMENT_WIDTH: 130
};

/**
 * LayoutPositionManager.
 * Manage position of nodes.
 *
 * Constructor parameters:
 *      _options: {
 *          DEFAULT_PAGE_SIZE: number, 
 *          COLOR_CLASS_COUNT: number, 
 *          MAX_LABEL_LENGTH: number, 
 *          COL_OFFSET: number, 
 *          ROW_OFFSET: number, 
 *          CROSS_NODE_OFFSET: number, 
 *          COLOR_CLASS_MAP: {
 *              'subClassOf': string, 
 *              'type': string
 *          }
 *      }
 *
 * Public methods:
 *      getVerticalBranchOffsetRelativeToNode(tree: Array, middleNode: Node): number
 *      calculateTree(rootNodes: Array, columnPosition: number, direction: boolean): void
 *      translateBrunch(rootNodes: node, xOffset: number, yOffset: number): void
 */
function LayoutPositionManager (_options) {
    var self = this;

    var COL_OFFSET = (_options && _options.COL_OFFSET != undefined ? _options.COL_OFFSET : defaultOptions.COL_OFFSET);
    var ROW_OFFSET = (_options && _options.ROW_OFFSET != undefined ? _options.ROW_OFFSET : defaultOptions.ROW_OFFSET);
    var CROSS_NODE_OFFSET = (_options && _options.CROSS_NODE_OFFSET != undefined ? _options.CROSS_NODE_OFFSET : defaultOptions.CROSS_NODE_OFFSET);

    /**
     * Takes given node as a root and places
     * all children around the root according to our layout.
     * @param {Node} rootNode - root node or node which has custom position
     * @return nothing;
     */
    self.calculateLayoutForNode = function (rootNode) {
        var pos = rootNode.position();
        var trees = _getLeftRightTrees(rootNode);

        var col_offset = (rootNode instanceof CrossNode ? CROSS_NODE_OFFSET : COL_OFFSET);
        var columns = { 0: (rootNode instanceof CrossNode ? [] : [rootNode]) };
        var columnsR = _calculateTree(trees.rightTree, pos.x + rootNode.getSize().width + col_offset, true);
        var columnsL = _calculateTree(trees.leftTree, pos.x - col_offset, false);

        columnsR.forEach(function (column, index) {
            columns[index + 1] = column;
        });
        columnsL.forEach(function (column, index) {
            columns[-(index + 1)] = column;
        });

        var leftBrunchTopOffset = _getVerticalBranchOffsetRelativeToNode(trees.leftTree, rootNode);
        var rightBrunchTopOffset = _getVerticalBranchOffsetRelativeToNode(trees.rightTree, rootNode);

        self.translateBrunch(trees.leftTree, 0, leftBrunchTopOffset);
        self.translateBrunch(trees.rightTree, 0, rightBrunchTopOffset);

        _calculateReverseBranchesOfTree(rootNode, columns);

        var newPos = rootNode.position();
        rootNode.position(pos.x, pos.y);

        self.translateBrunch(trees.leftTree, 0, pos.y - newPos.y);
        self.translateBrunch(trees.rightTree, 0, pos.y - newPos.y);

        _getAllCustomPositionNodesOfTheRootNode(rootNode).forEach(function (node) {
            self.calculateLayoutForNode(node);
        });
    };

    /**
     * Returns left and right trees of the root node
     * @return {Object} Result: { leftTree: Array, rightTree: Array };
     */
    function _getLeftRightTrees (rootNode) {
        var result = {leftTree: [], rightTree: []};
        var nodes = rootNode.getVisibleChildren();
        nodes.forEach(function (node) {
            if (node.nodePlacement()) {
                result.leftTree.push(node);
            } else {
                result.rightTree.push(node);
            }
        });
        return result;
    }

    /**
     * It pushes reverse nodes into the layout after the main part of the algorithm was done
     * @param {Node} rootNode - current node (on this loop of the recursion)
     * @param { [key: string]: Array of Node } columns - map (deep -> column), which contains columns of the nodes
     *  deep === 0 -> rootNode;
     *  deep < 0 -> left tree
     *  deep > 0 -> right tree
     * @param deep - number of current column from map
     */
    function _calculateReverseBranchesOfTree (rootNode, columns, deep) {
        if (!rootNode) return;
        if (deep === undefined) deep = 0;

        var nodeDirection = _getDirectionForReverseNode(rootNode);
        var children = rootNode.getVisibleChildren();
        var hasUnnormalDirection = (nodeDirection && rootNode.nodePlacement()) || (!nodeDirection && !rootNode.nodePlacement());
        var isntRootNode = !rootNode.isRootNode() &&
                                !rootNode.get('customPosition') &&

                                !rootNode.getPrevNode().isRootNode() &&
                                !rootNode.getPrevNode().get('customPosition') &&

                                !rootNode.getParent().isRootNode() &&
                                !rootNode.getParent().get('customPosition');
                                
        var calculateAfterChildren = false;

        if (isntRootNode && (hasUnnormalDirection || !columns[deep] || columns[deep].indexOf(rootNode) === -1)) {
            if(!(rootNode instanceof CrossNode)) {
                _pushNodeInTheColumn (columns, deep, rootNode);
            } else {
                calculateAfterChildren = true;
            }
        }

        children.forEach(function (node) {
            if (!node.get('customPosition')) {
                var nextDeep = (node.nodePlacement() ? deep - 1 : deep + 1);
                _calculateReverseBranchesOfTree(
                    node,
                    columns,
                    (rootNode instanceof CrossNode &&  !rootNode.isRootNode() && !rootNode.get('customPosition') ? deep : nextDeep)
                );
            }
        });

        if (calculateAfterChildren) {
            rootNode.alignRelativeToChildren();
        }
    }

    /**
     * It pushes the given node into the given column, and translate the overlayed nodes
     * @param { [key: string]: Array of Node } columns - map (deep -> column), which contains columns of the nodes
     *  deep === 0 -> rootNode;
     *  deep < 0 -> left tree
     *  deep > 0 -> right tree
     * @param deep - number of current column from map
     * @param targetNode - current node (on this loop of the recursion)
     *  or to the first node with custom position
     */
    function _pushNodeInTheColumn (columns, deep, targetNode) {
        if (!columns) return;
        if (!columns[deep]) columns[deep] = [];
        var column =columns[deep];

        var parent = targetNode.getParent();
        var parentPos = parent.position();
        var index = _getPlaceInColumn(column, parent);
        var baseElement = column[index];
        if (baseElement) {
            var baseElementPosition = baseElement.position();
            var toMoveDown = [];
            var toMoveUp = [];
            var before = _afterOrBefore(baseElementPosition, parent, column);

            column.forEach(function (node, i) {
                if (i > index) {
                    toMoveDown.push(node);
                }
                if (i < index) {
                    toMoveUp.push(node); 
                }
            });

            column.splice((before ? index : index + 1), 0, targetNode);
            targetNode.position(baseElementPosition.x, parentPos.y);
            if (
                (before && parentPos.y >= baseElementPosition.y || !before && parentPos.y <= baseElementPosition.y) ||
                (_hitTestWithNeigbours(targetNode, column))
            ) {
                var targetPos = {
                    x: baseElementPosition.x,
                    y: baseElementPosition.y + (!before ? ROW_OFFSET + targetNode.getSize().height : -(ROW_OFFSET + targetNode.getSize().height))
                };
                targetNode.position(targetPos.x, targetPos.y);
                if (targetPos.y <= parentPos.y && toMoveUp.length > 0 && _hitTest(toMoveUp[toMoveUp.length - 1], targetNode)) {
                    for (var i = toMoveUp.length - 1; i >= 0; i--) {
                        var node = toMoveUp[i];
                        var prev = toMoveUp[i + 1];

                        if (i === toMoveUp.length - 1 && _hitTest (node, targetNode) || _hitTest (node, prev)) {
                            var offset = ((prev || targetNode).position().y - ROW_OFFSET - node.getSize().height) - node.position().y;
                            _translateReverseNode(node, 0, offset);
                        }
                    }
                } else if (targetPos.y > parentPos.y && toMoveDown.length > 0 && _hitTest(toMoveDown[0], targetNode)) {
                    toMoveDown.forEach(function (node, i, arr) {
                        var prev = arr[i - 1];

                        if (i===0 && _hitTest (node, targetNode) || _hitTest (node, prev)) {
                            var offset = ((prev || targetNode).position().y +  ROW_OFFSET + targetNode.getSize().height) - node.position().y;
                            _translateReverseNode(node, 0, offset);
                        }
                    });
                }
            }
            
        } else {
            var nextColumnPosition = 
                parentPos.x + (targetNode.nodePlacement() ? -(targetNode.getSize().width + COL_OFFSET) :
                (targetNode.getSize().width + COL_OFFSET));
            var nextColumnPositionForNode = targetNode instanceof CrossNode ? parentPos.x : nextColumnPosition;
            
            targetNode.position(nextColumnPositionForNode, parentPos.y);
            targetNode.pushedAfterLayout = true;
            column.push(targetNode);
        }
        return column;
    }

    /**
     * It's kind of shell for the function "getDirection" 
     *  but it's not takes (root nodes / custom positioned), but it takes
     *  the first children of this node, and return orientation
     * @param targetNode - current node (on this loop of the recursion)
     * @returns {boolean} orientation
     */
    function _getDirectionForReverseNode (node) {
        var parent = node.getPrevNode();
        if ((!parent || parent.isRootNode() || parent.get('customPosition')) && (!node.nodePlacement())) {
            return node.getDirectionRelativeToNode(parent);
        } else {
            return _getDirectionForReverseNode(parent);
        }
    }

    /**
     * Answer for question: "Push the new node after or before the existed node?"
     * @param {Point} baseElementPos - existed node
     * @param {Node} parent - parent node 
     * @param {Array of Node} column
     * @returns {boolean} before -> true | afrer -> false
     */
    function _afterOrBefore (baseElementPos, parent, column) {
        var parentPos = parent.position();
        var before = parentPos.y - baseElementPos.y;
        var after = baseElementPos.y - parentPos.y;

        parent.getVisibleChildren().forEach(function (curNode) {
            var direction = _getDirectionForReverseNode(curNode);
            if (column.indexOf(curNode) !== -1 && (direction && curNode.nodePlacement() || !(direction || curNode.nodePlacement()))) {
                var curNodePose = curNode.position();
                if (curNodePose.y > baseElementPos.y) {
                    after += (curNodePose.y - baseElementPos.y);
                } else if (curNodePose.y < baseElementPos.y) {
                    before += (baseElementPos.y - curNodePose.y);
                }
            }
        });
        return before < after;
    }

    /**
     * Selects the suitable place in the column for the new node.
     * @param {Array of Node} column
     * @param {Node} parent - parent Node
     * @returns {number} index - index in the column array
     */
    function _getPlaceInColumn (column, parent) {
        if (column.length === 0) return -1;
        var parentPos = parent.position();
        var index = 0;
        var curVal = column[index].position.y >= parentPos.y;
        for (var i = 0; i < column.length ; i++) {
            var pos = column[i].position();
            var newVal = pos.y >= parentPos.y;
            if (newVal !== curVal) {
                index = i;
                break;
            } else if (pos.y <= parentPos.y) index = i;
            curVal = newVal;
        }
        if (index === column.length - 1 && column[column.length - 1].position.y <= parentPos.y) index = i;
        return index;
    }

    /**
     * Translates node, and align the root crossNode if exist.
     * @param {Node} targetNode - translated Node
     * @param {number} xOffset - Column offset (on x-axis)
     * @param {number} yOffset - Row offset (on y-axis)
     */
    function _translateReverseNode (targetNode, xOffset, yOffset) {
        targetNode.position(
            targetNode.position().x + xOffset,
            targetNode.position().y + yOffset
        );
        var prevNode = targetNode.getPrevNode();
        if (prevNode && prevNode instanceof CrossNode) prevNode.alignRelativeToChildren();
    }

    /**
     * Calculate positions of all elements of the tree.
     * @param {Array} rootNodes - list of root nodes
     * @param {number} columnPosition - first column offset on x-axis
     * @param {boolean} direction - Direction: false => left; true => right
     * @returns {Array of Array of Nodes} Elements by columns
     */
    function _calculateTree (rootNodes, columnPosition, direction) {
        var columns = [];
        if (!rootNodes || rootNodes.length == 0) return columns;

        var filteredRootNodes = rootNodes.filter(function (node) {
            return !node.get('customPosition');
        });
        
        filteredRootNodes.forEach(function (node) {
            _calculateBranch(
                node,
                columnPosition,
                direction,
                0,
                columns
            );
        });

        return columns;
    }

    /**
     * Translate all elements of the branch.
     * @param {Array} rootNodes - Root nodes of the branch
     * @param {number} xOffset - Column offset (on x-axis)
     * @param {number} yOffset - Row offset (on y-axis)
     */
    self.translateBrunch = function (rootNodes, xOffset, yOffset) {
        if (!rootNodes || rootNodes.length == 0) return;
        var nodes = rootNodes.filter(function (node) {
            return !node.get('customPosition');
        });

        nodes.forEach(function (node) {
            self.translateBrunch(node.getVisibleChildren(), xOffset, yOffset);
            node.position(
                node.position().x + xOffset,
                node.position().y + yOffset
            );
        });
    };

    /**
     * Returns vertical offset of the tree relative to the root node
     * @param {Array} tree - list of root nodes
     * @param {Node} middleNode - We do align relative to this node
     * @return {number} Vertical branch offset
     */
    function _getVerticalBranchOffsetRelativeToNode (tree, middleNode) {
        if (tree && tree.length > 0) {
            tree = tree.filter(function (node) {
                return !node.get('customPosition');
            });
            if (tree.length == 0) return 0;
        } else {
            return 0;
        }

        var firstChield = tree[0];
        if (firstChield instanceof CrossNode) {
            var firstNodeChildren = firstChield.getVisibleChildren(true).filter(function (node) {
                return !node.get('customPosition');
            });

            for (var i = 0; i < firstNodeChildren.length; i++) {
                if (firstNodeChildren[i] && !firstNodeChildren[i].get('hidden')) {
                    firstChield = firstNodeChildren[i];
                    break;
                }
            }
        }

        var lastChield = tree[tree.length - 1];
        if (lastChield instanceof CrossNode) {
            var lastNodeChildren = lastChield.getVisibleChildren(true).filter(function (node) {
                return !node.get('customPosition');
            });

            for (i = lastNodeChildren.length - 1; i >= 0; i--) {
                if (lastNodeChildren[i] && !lastNodeChildren[i].get('hidden')) {
                    lastChield = lastNodeChildren[i];
                    break;
                }
            }
        }

        if (!lastChield || !firstChield) return 0;
        var columnCenter = (lastChield.position().y + lastChield.getSize().height + firstChield.position().y) / 2;
        return middleNode.position().y + middleNode.getSize().height / 2 - columnCenter;
    }

    /**
     * Calculate positions of all elements of branch.
     * @param {Node} rootNode - Root node of the branch
     * @param {number} columnPosition - Column offset (on x-axis)
     * @param {number} rowPosition - Row offset (on y-axis)
     * @param {boolean} direction - Direction: false => left; true => right
     * @param {number} deep - column number
     * @param {Array} columns - columns list
     * @returns {number} Height of the column, which include height of the child columns
     */
    function _calculateBranch (rootNode, columnPosition, direction, deep, columns) {
        var children = rootNode.getVisibleChildren();
        var filteredChildren = children.filter(function (node) {
            return !node.get('customPosition') && (direction && !node.nodePlacement() || node.nodePlacement() && !direction);
        }); // filter all nodes with custom position

        var columnWidth = rootNode.getSize().width; // set starting width for the column for case when there are no children

        // calculate next column position (if one of the children is cross node then next column position is current column position)
        var nextColumnPosition = columnPosition + (direction ? (columnWidth + COL_OFFSET) : -(columnWidth + COL_OFFSET));

        // Enter the recursion by nodes without custome position and calculation height of child column
        filteredChildren.forEach(function (node) {
            // if there is cross node then hist children placing in same column with parent, but parent (crossNode) has offset
            var nextColumnPositionForNode = rootNode instanceof CrossNode ? columnPosition : nextColumnPosition;
            _calculateBranch(
                node,
                nextColumnPositionForNode,
                direction,
                (rootNode instanceof CrossNode ? deep : deep + 1), // if node is cross node then we don't increase column index
                columns
            );
        });

        // Set position of the current node
        _setPositionOfTheNode(
            filteredChildren,
            rootNode,
            columnPosition,
            direction,
            deep,
            columns
        );
    }

    /**
     * Defines node position and return recursion result-data for function _calculateBranch.
     * @param {Array} filteredChildren - sorted, paginated, filtered children list
     * @param {Node} rootNode - Root node of the branch
     * @param {number} columnPosition - Column offset (on x-axis)
     * @param {number} rowPosition - Row offset (on y-axis)
     * @param {boolean} direction - Direction: false => left; true => right
     * @param {number} deep - column number
     * @param {Array} columns - columns list
     * @param {number} childrensColumnHeight - Height of the child column
     * @param {boolean} ableToCondensing - true if node can be raised to the nodes which located in this column above current node
     * @returns {number} Height of the column, which include height of the child columns
     */
    function _setPositionOfTheNode (filteredChildren,
                                   rootNode,
                                   columnPosition,
                                   direction,
                                   deep,
                                   columns) {
        if (!columns[deep]) columns[deep] = []; // if there aren't elements in this column create array
        var column = columns[deep];
        var isCrossNode = rootNode instanceof CrossNode;

        var xPosition = columnPosition - (!direction ? rootNode.getSize().width : 0);
        xPosition = (isCrossNode ?
            (xPosition + (direction ?
                -CROSS_NODE_OFFSET :
                +CROSS_NODE_OFFSET)) :
            xPosition);

        var yPosition = 0;

        var yPosRealtiveToChildren = 0;
        if (filteredChildren.length > 0) {
            var lastChield = filteredChildren[filteredChildren.length - 1];
            var firstChield = filteredChildren[0];
            yPosRealtiveToChildren = (
                lastChield.position().y
                + firstChield.getSize().height
                + firstChield.position().y
                - rootNode.getSize().height
            ) / 2;
        }

        var yPosMin = 0;
        if (column.length > 0) {
            var bottomNode = column[column.length - 1];
            yPosMin = bottomNode.position().y + bottomNode.getSize().height + ROW_OFFSET;
        }

        if (isCrossNode || yPosMin <= yPosRealtiveToChildren) {
            yPosition = yPosRealtiveToChildren;
        } else {
            yPosition = yPosMin;
            if (!isCrossNode) {
                self.translateBrunch(filteredChildren, 0, yPosMin - yPosRealtiveToChildren);
            }
        }
        
        rootNode.position(xPosition, yPosition);

        if (!isCrossNode) {
            column.push(rootNode);
        } 
    }

    function _getAllCustomPositionNodesOfTheRootNode (rootNode) {
        var children = rootNode.getVisibleChildren();
        var customChildren = children.filter(function (node) {
            return node.get('customPosition');
        });
        children.forEach(function (n) {
            customChildren = customChildren.concat(_getAllCustomPositionNodesOfTheRootNode(n));
        });
        return customChildren;
    }

    /**
     * Checks whether the node is overlapped with some of the neigbours in the column.
     * @param {Node} node
     * @param {Array of Node} column
     * @returns {boolean}
     */
    function _hitTestWithNeigbours (node, column) {
        var index = column.indexOf(node);
        if (index === -1) return false;
        return _hitTest (node, column[index - 1]) || _hitTest (node, column[index + 1]);
    }

    /**
     * Checks whether the node number one and the number two are overlapped.
     * @param {Node} node1
     * @param {Node} node2
     * @returns {boolean}
     */
    function _hitTest (node1, node2) {
        if (!node1 || !node2) return false;
        var bBox = null;
        var testedNode = null;

        if (node1.getSize().height > node2.getSize().height) {
            bBox = node1.getBBox();
            testedNode = node2;
        } else {
            bBox = node2.getBBox();
            testedNode = node1;
        }
        var p = testedNode.position();
        var size = testedNode.getSize();
        var xCenter = p.x + size.width / 2;
        return (
            bBox.containsPoint({x: xCenter, y: p.y}) ||
            bBox.containsPoint({x: xCenter, y: p.y + size.height}) ||
            bBox.containsPoint({x: xCenter, y: p.y - ROW_OFFSET}) ||
            bBox.containsPoint({x: xCenter, y: p.y + ROW_OFFSET})
        );
    }
}
module.exports = LayoutPositionManager;

},{"./graphElements":8}],15:[function(_dereq_,module,exports){
'use strict';

var NeighborGram = _dereq_('./neighborGram');
var DataProvider = _dereq_('./dataProvider');

var InfoPanel = _dereq_('./htmlUI/infoPanel');
var OptionsPanel = _dereq_('./htmlUI/optionsPanel');
var DefaultUI = _dereq_('./htmlUI/defaultUI');

module.exports = {
    getDefaultProperties: function () {
        return {
            DEFAULT_PAGE_SIZE:      5,   // It's for pagination
            COLOR_CLASS_COUNT:      10,
            COL_OFFSET:             100, // It used to calculate distance between columns in the graph
            ROW_OFFSET:             30,  // It used to calculate distance between rows in the graph
            CROSS_NODE_OFFSET:      30,  // It define offset of the cross node relative to the next column position
            ELEMENT_WIDTH:          130,
            ELEMENT_HEIGHT:         30,
            TRANSITIVE_EXPANSION_LIMIT_STEP: 10, // It says how much nodes will be expanded transitively
                                                 // before the question 'Do you want to continue?'
            FULL_NODE_LABELS: false,             // Tells whether or not should we expand node labels
            COLOR_CLASS_MAP: {
                'subClassOf': 'color-class-sub-class-of',
                'type': 'color-class-type'
            }
        };
    },

    create: function (el, dataProvider, focusNodeId, resourcePath, options) {
        return new NeighborGram(
            dataProvider, 
            {el: el}, // paper properties
            focusNodeId,
            resourcePath,
            options
        );
    },
    
    getDefaultDataProvider: function (serverUrl, base, viewClass) {
        return new DataProvider(serverUrl, base, viewClass);
    },

    uiUtils: {
        DefaultUI: DefaultUI,
        InfoPanel: InfoPanel,
        OptionsPanel: OptionsPanel,
    },
};

},{"./dataProvider":7,"./htmlUI/defaultUI":10,"./htmlUI/infoPanel":11,"./htmlUI/optionsPanel":12,"./neighborGram":16}],16:[function(_dereq_,module,exports){
'use strict';

var cloneDeep = _dereq_('lodash').cloneDeep;
var joint = _dereq_('rappid');
var TQGramUI = _dereq_('visualizations-library');
var GraphLayout = _dereq_('./graphLayout');
var StateStorage = _dereq_('./stateStorage');
var PopUpMenu = _dereq_('./popUpMenu');
// var ArrayBuffer = require('typedarray').ArrayBuffer;
// var Uint8Array = require('typedarray').Uint8Array;
var graphElements = _dereq_('./graphElements');
var saveAs = _dereq_('file-saverjs');

var Node = graphElements.Node;
var Edge = graphElements.Edge;
var CrossNode = graphElements.CrossNode;

/**
 * NeighborGram.
 * Contain graph layout and manage all data.
 *
 * Constructor parameters:
 *      dataProvider: DataProvider
 *      paperProperties: {jointjs graph properties}
 *      focusNodeId: string
 *      resourcePath: string
 *      _options: {
 *          DEFAULT_PAGE_SIZE: number, 
 *          COLOR_CLASS_COUNT: number, 
 *          MAX_LABEL_LENGTH: number, 
 *          ELEMENT_WIDTH: number;
 *          ELEMENT_HEIGHT: number;
 *          COL_OFFSET: number, 
 *          ROW_OFFSET: number, 
 *          CROSS_NODE_OFFSET: number, 
 *          COLOR_CLASS_MAP: {
 *              'subClassOf': string, 
 *              'type': string
 *          }
 *      }
 *
 * Public methods:
 *      setFocusNode(focusNodeId: string): void
 *      onNodeSelected(callback: function): void
 *      onNodeFocused(callback: function): void
 *      clean(): void
 *      getNodes(): Node[]
 *      getEdges(): Edge[]
 *      getStatesHistory(): {
 *          states: [],
 *          currentIndex: number,
 *      }
 *      refreshLayout(): void
 *      center(x: number, y: number, opt: opt): void
 *      zoom(scale: number, opt: opt): void
 *      undoState(): void - returns to state with previous focusNode
 *      redoState(): boid - returns to state with next(previous before undo) focusNode
 */
function NeighborGram (dataProvider, paperProperties, focusNodeId, resourcePath, options) {
    var self = this;

    /**
     * Private filds
     */
    var _paper = null;
    var _options = cloneDeep(options);
    var _layout = null;
    var _onNodeFocusedCallBack = null;
    var _onStateChangedCallBack = null;
    var _graph = null;
    var _paperScroller = null;
    var _el = null;
    var _stateStorage = null;
    var _uiLayer = null;
    var _popUpMenu = null;
    var _asynkOperation = false;
    var _dataCache = {};
    var _transitiveCore = new TransitiveCore(self);
    var _fullNodeLabels = _options.FULL_NODE_LABELS;
    var _progressScreen = null;


    /**
     * Private function which used as constructor
     * @param  {DataProvider} dataProvider - Object which provide data for graph
     * @param  {Object} paperProperties - Properties for joint.dia.Paper
     * @param  {string} focusNodeId - Id which used to set focus node
     * @param  {string} resourcePath - Path to icon resources, used for runtime URLs
     * @param  {Object} options - options for the application
     */
    function _initialize (dataProvider, paperProperties, focusNodeId, resourcePath, options) {
        self.resourcePath = resourcePath;
        self.dataProvider = dataProvider;
        _graph = paperProperties.graph ? paperProperties.graph : new joint.dia.Graph();

        var defaultProp = {
            el: 'graphPlace',
            model: _graph,
            gridSize: 1,
            width: '5000',
            height: '5000',
            async: true
        };
        
        var properties = _extendProperties(defaultProp, paperProperties);
        var elId = properties.el;
        properties.el = undefined;
        _paper = new joint.dia.Paper(properties);

        _paperScroller = new joint.ui.PaperScroller({
            paper: _paper
        });

        var commandManager = new joint.dia.CommandManager({graph: _graph});
        var validator = new joint.dia.Validator({commandManager: commandManager});
        validator.validate('change:position', _validatePosition);
        validator.on('invalid', function (err) {
            console.log(err);
            _layout.getNodes().forEach(function (node) {
                node.badPosition(false);
            });
        });

        _paper.on('cell:mousewheel', function (cell, evt, x, y, delta) {
            onWheelScroll (evt, x, y, delta);
        });
        _paper.on('blank:mousewheel', function (evt, x, y, delta) {
            onWheelScroll (evt, x, y, delta);
        });
        
        var root = document.getElementById(elId);
        root.innerHTML = '';
        _el = document.createElement('DIV');
        root.appendChild(_el);

        _el.className = 'tq-ng-root';
        _el.appendChild(_paperScroller.render().el);
        _configuratePaperListeners();

        _progressScreen = new TQGramUI.ProgressScreen({
            baseElement: _el,
        });
    

        _layout = new GraphLayout(_graph, _paper, _paperScroller, options);
        _stateStorage = new StateStorage(_layout, options);

        _onNodeFocusedCallBack = [];

        _onStateChangedCallBack = [];

        if (focusNodeId) self.setFocusNode(focusNodeId);

        function onWheelScroll (evt, x, y, delta) {
            if (evt.ctrlKey) {
                if (delta > 0) {
                    self.zoom(0.2, { max: 4 });
                } else {
                    self.zoom(-0.2, { min: 0.2 });
                }
                if (_popUpMenu) _popUpMenu.refresh();
                evt.preventDefault();
            }
        }

        _uiLayer = _createUILayer();
    }

    /**
     * Function used to clean graph (Remove all nodes and edges from layout).
     */
    self.clean = function () {
        _layout.cleanLayout();
    };

    self.fullNodeLabels = function (value) {
        if (value !== undefined) {
            _fullNodeLabels = value;
            var nodes = _layout.getNodes();
            nodes.forEach(function (node) {
                node.set('fullLabel', _fullNodeLabels);
            });
            _layout.recalculateLayout();
        }
        return _fullNodeLabels;
    };

    /**
     * Function do request data through data provider and set new node as focused.
     * @param  {string} focusNodeId - Id of focus node
     */
    self.setFocusNode = function (focusNodeId) {
        _loadingIndication ('fetching');
        _asynkOperation = true;
        _requestData(focusNodeId,
            function (result) {
                _asynkOperation = false;
                _loadingIndication ('rendering');
                requestAnimationFrame(function () { // it's necessary to make able js change loading title.
                    var index = result.nodes.map(function (node) {
                        return node.id;
                    }).indexOf(focusNodeId);
                    if (index != -1) {
                        if (_layout.getRootNode()) _stateStorage.pushState();

                        self.clean();
                        var centralNode = _setCentralNode(result.nodes[index]);
                        result.nodes.splice(index, 1);

                        _expandNode(centralNode.id, result);
                        self.refreshLayout();
                        _onNodeFocusedCallBack.forEach(function (callBack) {
                            callBack(centralNode);
                        });
                        _loadingIndication ('completed');
                    } else {
                        _loadingIndication ('completed');
                    }
                });
            },
            function (message) {
                _loadingIndication ('error');
                _asynkOperation = false;
                _loadingIndication ('completed');
                new joint.ui.Dialog({
                    type: 'alert',
                    width: 300,
                    title: 'Alert',
                    content: message
                }).open();
            });
    };

    /**
     * Function which needed to set handler on 'Node selected' event.
     * @param  {function} callback - Handler
     */
    self.onNodeSelected = function (callback) {
        _paper.on('cell:pointerdown', function (cell) {
            if (cell && cell.model instanceof Node) {
                callback(cell.model);
            } else {
                callback(null);
            }
        });
        _paper.on('blank:pointerdown', function () {
            callback(null);
        });
    };

    /**
     * Function which needed to set handler on 'Node focused' event.
     * @param  {function} callback - Handler
     */
    self.onNodeFocused = function (callback) {
        _onNodeFocusedCallBack.push(callback);
    };

    /**
     * Function which needed to set handler on 'State changed' event.
     * @param  {function} callback - Handler
     */
    self.onStateChanged = function (callback) {
        _onStateChangedCallBack.push(callback);
    };

    /**
     * Return all nodes of the graph.
     * @returns {Array} Nodes of the graph
     */
    self.getNodes = function () {
        return _layout.getNodes();
    };

    /**
     * Return all edges of the graph.
     * @returns {Array} Edges of the graph
     */
    self.getEdges = function () {
        return _layout.getEdges();
    };

    /**
     * Recalculates the layout
     */
    self.refreshLayout = function () {
        _layout.recalculateLayout();
        self.center();
    };

    /**
     * Centers paper
     * @param {number} x - coordinate of the center on x axis
     * @param {number} y - coordinate of the center on y axis
     * @param {opt} opt - (optional) options of paperScroller
     */
    self.center = function (x, y, opt) {
        if (x && y) _paperScroller.center(x, y, opt);
        else {
            var root = _layout.getRootNode();
            _paperScroller.center(
                root.position().x + root.getSize().width / 2,
                root.position().y + root.getSize().height / 2,
                opt
            );
        }
    };

    /**
     * It centers paper
     * @param {number} scale - offset values of scale
     * @param {opt} opt - (optional) options of paperScroller zooming
     */
    self.zoom = function (scale, opt) {
        if (!scale) _paperScroller.zoomToFit(opt);
        else _paperScroller.zoom(scale, opt);
        _layout.recalculateLayout();
        if (_popUpMenu) _popUpMenu.refresh();
    };

    /**
     * Set previous focuseNode as cur focusNode
     */
    self.undoState = function () {
        var state = _stateStorage.undoState();
        if (state) {
            _layout.loadState(state);
            _layout.recalculateLayout();
            _onStateChangedCallBack.forEach(function (callBack) {
                callBack(state);
            });
        }
    };

    /**
     * Set previous (before self.undoState) focuseNode as cur focusNode
     */
    self.redoState = function () {
        var state = _stateStorage.redoState();
        if (state) {
            _layout.loadState(state);
            _layout.recalculateLayout();
            _onStateChangedCallBack.forEach(function (callBack) {
                callBack(state);
            });
        }
    };

    /**
     * Return list of focusNodes and current index.
     * @returns {
     *  states: [],
     *  currentIndex: number,
     * }
     */
    self.getStatesHistory = function () {
        return _stateStorage.getHistory();
    };

    /**
     * Exports graph to png or svg file
     * @param {
     *  name?: string - file name
     *  type?: string - (png/svg)
     * } options
    */
    self.export = function (options) {
        if (!options) options = {};
        var fileName = options.name || 'NeighborGram_snapshot_' + date2String(new Date());

        if (options.type === 'png') {
            _paper.toPNG(function (image) {
                saveData(image, fileName, 'png');
            });
        } else {
            _paper.toSVG(function (svgString) {
                saveData(svgString, fileName, 'svg');
            },{
                convertImagesToDataUris: true,
                area: _paper.getContentBBox(),
                preserveDimensions: true,
            });
        }

        function saveData (data, fileName, type) {            
            var blob;
            if (type === 'svg') {
                blob = new Blob([data], { type: type });
            } else if (type === 'png') {
                blob = png2Blob (data);
            }
            saveAs(blob, fileName + '.' + type);
        }
    };

    self.setSelectedNode = _setSelectedNode;

    //Private functions
    //=========================================================
    //=========================================================

    function date2String (date) {
        return padStr(date.getFullYear()) + '_' +
                padStr(1 + date.getMonth()) + '_' +
                padStr(date.getDate()) + '_' +
                padStr(date.getHours()) + '_' +
                padStr(date.getMinutes()) + '_' +
                padStr(date.getSeconds());

        function padStr (i) {
            return (i < 10) ? '0' + i : '' + i;
        }
    }

    function png2Blob (dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        var bb = new Blob([ab], { type: 'image/png' });
        return bb;
    }

    // states: fetching, rendering, completed
    function _loadingIndication (state) {
        if (state === 'fetching') {
            _progressScreen.setState('active', 'Fetching data');
        } else if (state === 'rendering') {
            _progressScreen.setState('active', 'Rendering graph');
        } else if (state === 'completed') {
            _progressScreen.setState('completed');
        } else if (state === 'error') {
            _progressScreen.setState('error', 'Error has occurred!');
        }
    }

    function _createUILayer () {
        var uiLayer = document.createElement('DIV');
        uiLayer.className = 'ng-ui';
        _el.querySelector('.paper.joint-theme-default').appendChild(uiLayer);
        return uiLayer;
    }

    /**
     * Validates position of the node q.v. joint.dia.Validator
     */
    function _validatePosition (err, command, next) {
        var cell = command.data.attributes || _graph.getCell(command.data.id);
        if (!_layout.blockValidation && cell && !_checkPosition(cell)) {
            return next('Another cell in the way!');
        } else
            return next();
    }

    /**
     * Checks position of the node and change color-class if needed
     * @param {Node} node - checked node
     * @param {boolean} recursively - flag if we needed check recursively
     */
    function _checkPosition (node, recursively) {
        if (!(node instanceof Node)) return true;

        var hitTest = function (node1, node2) {
            if (!node1 || !node2 || node1 instanceof CrossNode || node2 instanceof CrossNode) return false;
            var bBox = null;
            var testedNode = null;

            if (node1.getSize().height > node2.getSize().height) {
                bBox = node1.getBBox();
                testedNode = node2;
            } else {
                bBox = node2.getBBox();
                testedNode = node1;
            }
            var p = testedNode.position();
            var size = testedNode.getSize();
            return (bBox.containsPoint({x: p.x, y: p.y}) ||
            bBox.containsPoint({x: p.x + size.width, y: p.y}) ||
            bBox.containsPoint({x: p.x, y: p.y + size.height}) ||
            bBox.containsPoint({x: p.x + size.width, y: p.y + size.height}));
        };

        var result = _graph.get('cells').filter(function (cell) {
            if ((cell instanceof Node || cell instanceof CrossNode) &&
                cell.id !== node.id &&
                hitTest(cell, node)) {
                return true;
            } else {
                return false;
            }
        }).length == 0;

        if (recursively) {
            node.getVisibleChildren().forEach(function (child) {
                result = _checkPosition(child, recursively) && result;
            });
        }
        node.badPosition(!result);
        return result;
    }

    /**
     * Converts node from server into simple node and sets it as root into layout.
     * @param  {Object} serverNode - Server node
     */
    function _setCentralNode (serverNode) {
        var centralNode = _createNode(serverNode);
        _layout.setRootNode(centralNode);
        // _paperScroller.center(_layout.getRootNode().position());
        return centralNode;
    }

    /**
     * Simplified set up paper. Enrich old properties by new one.
     * @param {Object} oldProp - Old properties
     * @param {Object} newProp - New properties
     * @returns {Object} Exstended properties
     */
    function _extendProperties (oldProp, newProp) {
        var extendedObject = {};
        if (oldProp) {
            Object.keys(oldProp).forEach(function (p) {
                extendedObject[p] = oldProp[p];
            });
        }
        if (newProp) {
            Object.keys(newProp).forEach(function (p) {
                extendedObject[p] = newProp[p];
            });
        }
        return extendedObject;
    }

    /**
     * Highlights target element
     */
    function _setSelectedNode (cell) {
        self.getNodes().forEach(function (node) {
            node.removeHighlighting();
        });
        if (cell) {
            var node;
            if (cell.model && cell.model.addHighlighting) {
                node = cell.model;
            } else if (cell.addHighlighting) {
                node = cell;
            }
            if (!node.get('hidden')) {
                node.addHighlighting();
            } else {
                var prevNode = node.getPrevNode();

                if (prevNode.pagination) {
                    prevNode.getChildren(true).forEach(function (child, index) {
                        if (child === node) {
                            prevNode.pagination.focusOn(index);
                        }
                    });
                }
                node.addHighlighting();
            }
        }
    }

    /**
     * Sets event handlers
     */
    function _configuratePaperListeners () {
        var lastPosition = null;
        var THRESHOLD = 15;
        _paper.on('cell:pointerdown', function (cell) {
            if (cell && cell.model instanceof Node) {
                if (!lastPosition) lastPosition = cell.model.position();

                _setSelectedNode(cell);
            }
        });

        _paper.on('cell:pointermove', function (cell) {
            if (cell && cell.model instanceof Node) {
                joint.ui.Halo.clear(_paper);
                if (Math.sqrt(
                        Math.pow((lastPosition.x - cell.model.position().x), 2) +
                        Math.pow((lastPosition.y - cell.model.position().y), 2)
                    ) < THRESHOLD && !cell.model.get('customPosition')
                ) return;

                if (!cell.model.get('customPosition')) {
                    cell.model.set('customPosition', true);
                    _layout.recalculateLayout();
                }
                _checkPosition(cell.model, true);
            }
        });

        _paper.on('cell:pointerdblclick', function (cell) {
            if (cell && cell.model instanceof Node) {
                cell.model.set('fullLabel', !cell.model.get('fullLabel'));
                _layout.recalculateLayout();
            }
        });

        _paper.on('cell:pointerup', function (cell) {
            if (cell && cell.model instanceof Node) {
                _configurateHalo(cell);
                lastPosition = null;

                _setLinkPaginationControlsInactive();
                _setLinkPaginationControlActive(cell.model);
            }
        });

        _paper.on('blank:pointerdown', _paperScroller.startPanning);
        _paper.on('blank:pointerdown', function () {
            _setSelectedNode(undefined);

            _setLinkPaginationControlsInactive();
        });
    }

    /**
     * Configurates halo for Node
     * @param {Object} cellView - View of node
     */
    function _configurateHalo (cellView) {
        if (_popUpMenu && _popUpMenu.target !== cellView.model) {
            _removePopUp();
        }

        var node = cellView.model;
        var halo = new joint.ui.Halo({
            graph: _graph,
            paper: _paper,
            cellView: cellView,
            className: 'halo' + (node.id === _layout.getRootNode().id ? ' halo-of-root-node' : '')
        });
        halo.removeHandles();

        if (node.get('customPosition')) {
            halo.addHandle({name: 'reset-node-position', position: 's'});
            halo.on('action:reset-node-position:pointerdown', function (evt) {
                evt.stopPropagation();
                _layout.doForBrunch(node, function (node) {
                    node.set('customPosition', false);
                });
                _layout.recalculateLayout();
            });
        }

        if (node.dataModel.typeId !== 'crossNode') {
            var configButtonClass = node.getDirection() ? 
                'expansion-config' + (node.configurationSet.modified ? '-modified' : '') :
                'expansion-config' + (node.configurationSet.modified ? '-modified' : '') + '-reverse';
            halo.addHandle({name: configButtonClass});
            halo.on('action:' + configButtonClass + ':pointerdown', function (evt) {
                evt.stopPropagation();
                _openConfigPopUp(cellView);
            });

            if (node.id !== _layout.getRootNode().id) {
                var setFocusNodeClass = node.getDirection() ? 'set-focus-node' : 'set-focus-node-reverse';
                halo.addHandle({
                    name: setFocusNodeClass,
                });
                halo.on('action:' + setFocusNodeClass + ':pointerdown', function (evt) {
                    if (_asynkOperation) return;
                    evt.stopPropagation();
                    self.setFocusNode(node.dataModel.typeId);
                });
            }

            var expandCollapseClass = node.getDirection() ? 'expand-collapse' : 'expand-collapse-reverse';

            halo.addHandle({
                name: (node.dataModel.canExpand ? expandCollapseClass : expandCollapseClass + ' disabled'),
                position: (!node.get('expanded') ? ' ng-expand': ' ng-collapse')
            });

            halo.on(
                'action:' + expandCollapseClass + ':pointerdown',
                function () {
                    if (node.dataModel.canExpand) {
                        _onExpandEvent(cellView.model);
                    }
                }
            );

            halo.listenTo(node, 'change:customPosition', function () {
                _configurateHalo(cellView);
            });
            halo.listenTo(node, 'change:expanded', function () {
                _configurateHalo(cellView);
            });
        }
        halo.render();
    }

    function _openConfigPopUp (cell) {
        if (cell && cell.model instanceof Node) {
            if (!_popUpMenu || !_popUpMenu.alive) {
                var isExpanded;
                var localPopUp = _popUpMenu = new PopUpMenu({
                    base: _uiLayer,
                    target: cell.model,
                    scroller: _paperScroller,
                    beforeApply: function () {
                        isExpanded = cell.model.get('expanded');
                        if (isExpanded) {
                            cell.model.set('expanded', false);
                            _layout.collapseNode(cell.model.id);
                        }
                    },
                    afterApply: function () {
                        _onExpandEvent(cell.model);
                        _configurateHalo(cell);
                    }
                });
                if (!cell.model.configurationSet.connections) {
                    _requestData(cell.model.typeId,
                        function (result) {
                            if (localPopUp === _popUpMenu) {
                                _popUpMenu.putData(result.edges || []);
                            }
                        },
                        function (message) {
                            new joint.ui.Dialog({
                                type: 'alert',
                                width: 300,
                                title: 'Alert',
                                content: message
                            }).open();
                        }
                    );
                }
            } else {
                _removePopUp();
            }
        }
    }

    /**
     * It's called on expand-event.
     * @param {Object} cell - View of Node
     * @param {string} orientation
     */
    function _onExpandEvent (node) {
        if (_asynkOperation) return;

        if (node.configurationSet && node.configurationSet.expandTransitively) {
            _transitiveCore.start(node);
        } else {
            if (node instanceof Node) {
                if (!node.get('expanded')) {
                    var loading = _addLoading(node);
                    node.set('expanded', true);
                    
                    _setLinkPaginationControlsInactive();
                    if (!_dataCache[node.id]) {
                        _asynkOperation = true;
                        _requestData(
                            node.typeId,
                            successCallback,
                            function (message) {
                                _asynkOperation = false;
                                new joint.ui.Dialog({
                                    type: 'alert',
                                    width: 300,
                                    title: 'Alert',
                                    content: message
                                }).open();
                                _removeLoading(loading);
                                _setLinkPaginationControlActive(node);
                            }
                        );
                    } else {
                        successCallback(_dataCache[node.id], {fromCache: true});
                    }
                } else {
                    node.set('expanded', false);
                    _collapseNode(node.id);
                }
            }
        }

        function successCallback (result, props) {
            _asynkOperation = false;
            _expandNode(node, result, props && props.fromCache);
            _layout.recalculateLayout();
            _removeLoading(loading);
            _setLinkPaginationControlActive(node);
        }
    }

    function _removePopUp () {
        _popUpMenu.remove();
        _popUpMenu = null;
    }

    /**
     * Request data throw data provider.
     * @param {String} typeId - Type id
     * @param {Function} successCallback - Handler
     * @param {Function} errorCallback - Handler
     */
    function _requestData (typeId, successCallback, errorCallback) {
        try {
            self.dataProvider.getGraphData(typeId, successCallback, errorCallback);
        } catch (error) {
            errorCallback.apply(self, [error]);
            if (typeof error === 'string') {
                console.error(error);
            } else {
                console.error(error.stack);
            }
        }
    }

    /**
     * It expands node by obtained data.
     * Binds new nodes and edges to source node.
     * @param {string | Node} node - Type id or Node
     * @param {Object} data - Data
     * @param {boolena} fromCache - equals true if data are passed from the cache
     */
    function _expandNode (node, data, fromCache) {
        var isNode = typeof node !== 'string';
        var nodeId = isNode ? node.id : node;

        var config = node.configurationSet;
        var mapForNodeFiltering = {};

        var preparedData;
        if (!fromCache) {
            preparedData = {
                nodes: data.nodes ? _prepareNodes(data.nodes) : [],
                edges: data.edges ? _prepareEdges(data.edges) : [],
            };
            _dataCache[nodeId] = preparedData;
        } else {
            preparedData = data;
        }

        // the data filtering
        var filteredData;
        if (typeof node !== 'string') {
            filteredData = {
                edges: preparedData.edges.filter(function (edge) {
                    var direction = node.dataModel.typeId === edge.dataModel.targetTypeId;
                    var verdict = (
                            config.filterType === 'ALL' ||
                            config.filterType === 'INCOMING' && direction ||
                            config.filterType === 'OUTGOING' && !direction
                        ) &&
                        (!config.filterKey || config.filterKey && edge.dataModel.label.toLowerCase().indexOf(config.filterKey.toLowerCase()) !== -1)
                        && (
                            direction && (
                                config.visibilityMap[edge.dataModel.typeId] === undefined || config.visibilityMap[edge.dataModel.typeId]
                            ) ||
                            !direction && (
                                config.visibilityMapReverse[edge.dataModel.typeId] === undefined || config.visibilityMapReverse[edge.dataModel.typeId]
                            )
                        );
                    
                    if (verdict) {
                        if (direction) {
                            mapForNodeFiltering[edge.dataModel.sourceTypeId] = true;
                        } else {
                            mapForNodeFiltering[edge.dataModel.targetTypeId] = true;
                        }
                    }

                    return verdict;
                }),
                nodes: preparedData.nodes.filter(function (node) {
                    return mapForNodeFiltering[node.dataModel.typeId];
                }),
            };
        } else {
            filteredData = preparedData;
        }

        if (filteredData.nodes.length > 0) {
            _layout.putAll(filteredData.nodes);
        }

        if (filteredData.edges.length > 0) {
            _layout.putAll(filteredData.edges, nodeId);
        }

        if (fromCache && isNode) {
            node.getChildren(true).forEach(function (children, index) {
                if (children.get('expanded')) {
                    if (children.pagination) {
                        node.pagination.focusOn(index);
                    }
                    _expandNode(children, _dataCache[children.id], fromCache);
                    _layout.recalculateLayout();
                }
            });
        }
        
    }

    /**
     * Collapses node and removes all children
     * of the Node from the layout.
     * Then recalculates layout.
     * @param {string} unbindFrom - Node id
     */
    function _collapseNode (unbindFrom) {
        _layout.collapseNode(unbindFrom);
        _layout.recalculateLayout();
    }

    /**
     * Converts list of server nodes
     * to List of graph nodes
     * @param {Array} serverNodes - List of server nodes
     * @returns {Array} Graph nodes
     */
    function _prepareNodes (serverNodes) {
        var nodes = [];

        serverNodes.forEach(function (node) {
            var newNode = _createNode(node);
            nodes.push(newNode);
        });
        return nodes;
    }

    /**
     * Converts list of server edges
     * to List of graph edges
     * @param {Array} serverEdge - List of server edges
     * @returns {Array} Graph edges
     */
    function _prepareEdges (serverEdge) {
        var edges = [];

        serverEdge.forEach(function (edge) {
            var newEdge = _createEdge(edge);
            edges.push(newEdge);
        });
        return edges;
    }

    /**
     * Converts server node
     * to graph node
     * @param {Object} node - Server node
     * @returns {Node} Graph node
     */
    function _createNode (node) {
        var newNode;

        newNode = new Node({
            typeId: node.id,
            label: node.label,
            canExpand: node.canExpand,
            fullNodeLabels: _fullNodeLabels,
        }, _options);
        return newNode;
    }

    /**
     * Converts server edge
     * to graph edge
     * @param {Object} edge - Server edge
     * @returns {Edge} Graph edge
     */
    function _createEdge (edge) {
        var newEdge = new Edge({
            typeId: edge.id,
            sourceTypeId: edge.source,
            targetTypeId: edge.target,
            label: edge.label,
            placement: edge.placement,
        });
        return newEdge;
    }

    /**
     * Sets all link pagination controls inactive
     */
    function _setLinkPaginationControlsInactive () {
        var nodes = self.getNodes();
        nodes.forEach(function (node) {
            var pagination = node.getPagination();
            if (pagination && pagination.getType() === 'edges') {
                pagination.setInactive();
            }
        });
    }

    /**
     * Sets link pagination control active
     * to graph edge
     * @param {Node} node
     */
    function _setLinkPaginationControlActive (node) {
        var pagination = node.getPagination();
        if (pagination && pagination.getType() === 'edges') {
            pagination.setActive();
        }
    }

    function _addLoading (node) {
        var loading = new joint.shapes.basic.Rect({
            size: {width: 55, height: 15},
            attrs: {
                rect: {'fill-opacity': 0, 'stroke-opacity': 0},
                text: {
                    text: 'Loading...',
                    'font-family': 'Arial, Helvetica, sans-serif',
                    'font-size': 11
                }
            },
            z: 100
        });

        var x = node.position().x,
            y = node.position().y;

        if (node.id === _layout.getRootNode().id) {
            x += (node.getSize().width - loading.get('size').width) / 2;
            y -= loading.get('size').height;
        } else {
            y += (node.getSize().height - loading.get('size').height) / 2;
            var direction = node.getDirection();

            if (direction) {
                x += node.getSize().width;
            } else {
                x -= loading.get('size').width;
            }
        }

        loading.position(x, y);

        _graph.addCell(loading);
        node.embed(loading);

        return loading;
    }

    function _removeLoading (loading) {
        loading.remove();
    }

    // inner class
    function TransitiveCore () {
        var self = this;
        var _repeatedElements = [];
        var _expandCounter = 0;

        self.initialNode = null;
        self.inUse = false;
        
        self.start = function (initialNode) {
            if (
                !initialNode.configurationSet.expandTransitively ||
                !(initialNode instanceof Node)
            ) return;
            
            self.initialNode = initialNode;
            _repeatedElements = [];
            _expandCounter = 0;

            _expandTransitively(initialNode);
        };

        function _expandTransitively (initialNode) {
            expandNode(initialNode, function (root, nodes) {
                _recursiveCall(nodes);
            });

            function expandNode (root, callback) {
                if (_repeatedElements.indexOf(root.dataModel.typeId) !== -1) {
                    if (callback) callback(root, null);
                    return;
                }

                _repeatedElements.push(root.dataModel.typeId);
                _expandCounter++;

                if (root instanceof Node && !root.get('expanded')) {
                    if (!root.get('hidden')) {
                        var loading = _addLoading(root);
                        _setLinkPaginationControlsInactive();
                        _asynkOperation = true;
                    }
                    
                    requestAnimationFrame(function () {
                        _requestData(
                            root.typeId,
                            function successCallback (result, props) {
                                root.set('expanded', true);

                                if (!root.get('hidden')) {
                                    _setLinkPaginationControlActive(root);
                                    _asynkOperation = false;
                                    _removeLoading(loading);
                                }

                                _expandNode(root, result, props && props.fromCache);
                                if (!root.get('hidden')) {
                                    _layout.recalculateLayout();
                                    _paperScroller.zoomToFit();
                                }
                                if (callback) callback(root, root.getVisibleChildren(true));
                            },
                            function (message) {

                                if (!root.get('hidden')) {
                                    _setLinkPaginationControlActive(root);
                                    _asynkOperation = false;
                                    _removeLoading(loading);
                                }

                                new joint.ui.Dialog({
                                    type: 'alert',
                                    width: 300,
                                    title: 'Alert',
                                    content: message
                                }).open();

                                if (callback) callback(root, []);
                            }
                        );
                    });
                } else if (root.get('expanded')) {
                    if (callback) callback(root, root.getVisibleChildren(true));
                }
            }

            function _recursiveCall (nodes) {
                var index = 0;
                var nextNodes = [];
                var shouldBeOpened = nodes.length;
                recursiveCycle(index);

                function recursiveCycle (index) {
                    var node = nodes[index];
                    if (node) {
                        if (_expandCounter >= _options.TRANSITIVE_EXPANSION_LIMIT_STEP) {
                            var dialog = new joint.ui.Dialog({
                                type: 'neutral',
                                width: 300,
                                title: 'Alert',
                                content: 'The ' + (_repeatedElements.length) + ' nodes were expanded. Do you want to continue?',
                                closeButton: false,
                                modal: true,
                                buttons: [
                                    { action: 'continue', content: 'Continue' },
                                    { action: 'stop', content: 'Stop' }
                                ]
                            });
                            dialog.on('action:continue', function () {
                                dialog.close();
                                _expandCounter = 0;
                                expandNode(node, callBack);
                            });
                            dialog.on('action:stop', function () {
                                dialog.close();
                            });
                            dialog.open();
                        } else {
                            expandNode(node, callBack);
                        }
                    }

                    function callBack (rootNode, nNodes) {
                        if (nNodes) {
                            var filteredNodes = filterList(nNodes);
                            if (filteredNodes.length === 0 && node.pagination) {
                                var allChildren = rootNode.getChildren(true);
                                var allFiltered = filterList(allChildren);
                                if (allFiltered.length > 0) {
                                    var firstGood = allFiltered[0];
                                    rootNode.pagination.focusOnElement(firstGood);
                                    var nodesToAdd = rootNode.pagination.getCurrentNodes(true);
                                    nextNodes = nextNodes.concat(nodesToAdd);
                                }
                            } else if (filteredNodes.length !== 0) {
                                nextNodes = nextNodes.concat(nNodes);
                            }
                        } else {
                            shouldBeOpened--;
                        }

                        recursiveCycle(index + 1);
                        if (nodes.filter(function (n) { return n.get('expanded'); }).length === shouldBeOpened) {
                            _recursiveCall(nextNodes);
                        }

                        function filterList (list) {
                            return list.filter(function (n) {
                                return nextNodes.map(function (n) {
                                    return n.dataModel.typeId;
                                }).indexOf(n.dataModel.typeId) === -1;
                            });
                        }
                    }
                } 
            }
        }
    }

    // Here we call constructor after defining all functions
    _initialize.call(self, dataProvider, paperProperties, focusNodeId, resourcePath, _options);
}

module.exports = NeighborGram;



},{"./graphElements":8,"./graphLayout":9,"./popUpMenu":18,"./stateStorage":19,"file-saverjs":3,"lodash":"lodash","rappid":"rappid","visualizations-library":1}],17:[function(_dereq_,module,exports){
var joint = _dereq_('rappid');
var _ = _dereq_('lodash');
var CrossNode = _dereq_('./graphElements').CrossNode;

var defaultOptions = {DEFAULT_PAGE_SIZE: 5};

// Create a custom element.
// ------------------------

if (!joint.shapes.html) joint.shapes.html = {};

joint.shapes.html.Pagination = joint.shapes.basic.Rect.extend({
    defaults: joint.util.deepSupplement({
        type: 'html.Pagination',
        attrs: {
            rect: {stroke: 'none', 'fill-opacity': 0, style: {'pointer-events': 'none'}}
        }
    }, joint.shapes.basic.Rect.prototype.defaults)
});

// Create a custom view for that element that displays an HTML div above it.
// -------------------------------------------------------------------------

joint.shapes.html.PaginationView = joint.dia.ElementView.extend({

    template: [
        '<button type="button" class="ng-prev" title="Prev"></button>',
        '<div class="ng-pages"><span class="ng-pages-cur"></span>/<span class="ng-pages-total"></span></div>',
        '<button type="button" class="ng-next" title="Next"></button>'
    ].join(''),

    initialize: function () {
        _.bindAll(this, 'updateBox');
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        this.box = document.createElement('div');

        if (this.model.getType() === 'nodes') {
            this.box.className = 'ng-pagination-nodes';
        } else {
            this.box.className = 'ng-pagination-edges';
        }

        this.box.innerHTML = this.template;

        // Events
        var self = this;

        var buttonPrev = this.box.querySelector('.ng-prev');
        var buttonNext = this.box.querySelector('.ng-next');

        buttonPrev.onclick = function () {
            self.model.prev();
            updateButtonsState();
        };
        buttonNext.onclick = function () {
            self.model.next();
            updateButtonsState();
        };

        function updateButtonsState () {
            buttonPrev.disabled = self.model.state.curPage === 0;
            buttonNext.disabled = self.model.state.curPage === self.model.state.pageCount - 1;
        }
        updateButtonsState();

        // Update the box position whenever the underlying model changes.
        this.model.on('change', this.updateBox, this);
        // Remove the box when the model gets removed from the graph.
        this.model.on('remove', this.removeBox, this);
        // if we use zoom +/-
        this.model.on('updateViewPosition', this.updateBox, this);

        this.model.on('setActive', function () {
            this.addClass('active');
        }, this);
        this.model.on('setInactive', function () {
            this.removeClass('active');
        }, this);

        this.model.on('startLoading', function () {
            this.addClass('loading');
        }, this);
        this.model.on('finishLoading', function () {
            this.removeClass('loading');
            this.updatePages();
        }, this);

        this.updateBox();
        this.updatePages();
    },
    render: function () {
        joint.dia.ElementView.prototype.render.apply(this, arguments);
        this.paper.el.appendChild(this.box);
        this.updateBox();
        return this;
    },
    updateBox: function () {
        var bbox = this.model.getMyBBox();

        this.box.style.width = bbox.width + 'px';
        this.box.style.height = bbox.height + 'px';
        this.box.style.left = bbox.x + 'px';
        this.box.style.top = bbox.y + 'px';
        this.box.style.transform = 'rotate(' + (this.model.get('angle') || 0) + 'deg)';
    },
    removeBox: function () {
        this.box.remove();
    },
    updatePages: function () {
        this.box.querySelector('.ng-pages-cur').innerHTML = this.model.getState().curPage + 1;
        this.box.querySelector('.ng-pages-total').innerHTML = this.model.getState().pageCount;
    },
    addClass: function (className) {
        this.box.className = this.box.className + ' ' + className;
    },
    removeClass: function (className) {
        var box = this.box;
        var classes = box.className.split(' ');

        for (var i = 0; i < classes.length; i++) {
            if (classes[i] == className) {
                classes.splice(i, 1);
                i--;
            }
        }
        box.className = classes.join(' ');
    }
});

/**
 * Pagination - it will be new graph element,
 * which provides pagination
 *
 * Constructor parameters:
 *      node: Node
 *      _layout: GraphLayout
 *      pageSize: number
 *      type: string
 *      _options: {
 *          DEFAULT_PAGE_SIZE: number, 
 *          COLOR_CLASS_COUNT: number, 
 *          MAX_LABEL_LENGTH: number, 
 *          COL_OFFSET: number, 
 *          ROW_OFFSET: number, 
 *          CROSS_NODE_OFFSET: number, 
 *          COLOR_CLASS_MAP: {
 *              'subClassOf': string, 
 *              'type': string
 *          }
 *      }
 *
 * Public methods:
 *      next(): void
 *      prev(): void
 *      getState(): { totalCount: number, pageSize: number, curPage: number, pageCount: number }
 *      getType(): string
 *      getMyBBox(): return {width: number, height: number, x: number, y: number}
 *      updateViewPosition(): void
 *      setActive(): void
 *      setInactive(): void
 */
function Pagination (node, _layout, pageSize, type, _options) {
    var self = this;

    var DEFAULT_PAGE_SIZE = (_options && _options.DEFAULT_PAGE_SIZE != undefined ? _options.DEFAULT_PAGE_SIZE : defaultOptions.DEFAULT_PAGE_SIZE);

    function initialize (node, layout, pageSize, type) {

        var totalCount = node.getChildren().length;
        pageSize = (pageSize ? pageSize : DEFAULT_PAGE_SIZE);


        self.state = {
            totalCount: totalCount,
            pageSize: pageSize,
            curPage: 0,
            prevPage: 0,
            pageCount: Math.ceil(totalCount / pageSize)
        };
        self.type = type;
        self.refreshLayout = layout.recalculateLayout;

        var options = self.type === 'nodes' ? {size: {width: 100, height: 23}} : {size: {width: 20, height: 46}};

        joint.shapes.html.Pagination.apply(self, [options]);
    }

    // go to next page
    self.next = function () {
        if (self.state.curPage < self.state.pageCount - 1) {
            self.trigger('startLoading');
            self.state.prevPage = self.state.curPage;
            self.state.curPage++;
            setTimeout(function () {
                self.refreshLayout();
                self.trigger('finishLoading');
            }, 50);
        }
    };

    // returns nodes of current page
    self.getCurrentNodes = function (expandCrossNodes) {
        var pageSize = self.state.pageSize;
        var curPage =  self.state.curPage;
        var children = node.getChildren(expandCrossNodes);
        return children.slice(pageSize * curPage, (curPage + 1) * pageSize);
    };

    // go to previous page
    self.prev = function () {
        if (self.state.curPage !== 0) {
            self.trigger('startLoading');
            self.state.prevPage = self.state.curPage;
            self.state.curPage--;
            setTimeout(function () {
                self.refreshLayout();
                self.trigger('finishLoading');
            }, 50);
        }
    };

    // go to specific page
    self.goTo = function (number) {
        if (
            number <= self.state.pageCount &&
            number >= 0 &&
            number !== self.state.curPage
        ) {
            self.trigger('startLoading');
            self.state.prevPage = self.state.curPage;
            self.state.curPage = number;
            setTimeout(function () {
                self.refreshLayout();
                self.trigger('finishLoading');
            }, 50);
        }
    };

    self.getPageByElementIndex = function (index) {
        if (index > self.state.totalCount) return -1;
        return Math.floor(index / self.state.pageSize);
    };

    self.focusOn = function (elementIndex) {
        self.goTo(self.getPageByElementIndex(elementIndex));
    };

    self.focusOnElement = function (element) {
        var children = node.getChildren();
        var index = children.indexOf(element);
        if (index === -1) {
            var crossNodes = children.filter(function (n) {
                return n instanceof CrossNode;
            });
            for (var i = 0; i < crossNodes.length; i++) {
                var crossChildren = crossNodes[i].getChildren();
                if (crossChildren.indexOf(element) !== -1) {
                    if (crossChildren.pagination) crossChildren.pagination.focusOnElement(element);
                    index = children.indexOf(crossNodes[i]);
                    return self.goTo(self.getPageByElementIndex(index));
                }
            }
        } else {
            return self.goTo(self.getPageByElementIndex(index));
        }
    };


    self.getState = function () {
        return self.state;
    };

    self.getType = function () {
        return self.type;
    };

    self.getMyBBox = function () {
        var size = self.get('size');
        var position = self.position();
        var scale = _layout.getScale();
        return {
            width: size.width,
            height: size.height,
            x: position.x * scale.sx,
            y: position.y * scale.sy
        };
    };

    self.updateViewPosition = function () {
        self.trigger('updateViewPosition');
    };

    self.setActive = function () {
        self.trigger('setActive');
    };

    self.setInactive = function () {
        self.trigger('setInactive');
    };

    initialize(node, _layout, pageSize, type);
}
Pagination.prototype = Object.create(joint.shapes.html.Pagination.prototype);

module.exports = Pagination;

},{"./graphElements":8,"lodash":"lodash","rappid":"rappid"}],18:[function(_dereq_,module,exports){
'use strict';
var cloneDeep = _dereq_('lodash').cloneDeep;

/**
 * 
 * @param {
 *  base: HTMLElement,
 *  target: Node,
 *  scroller: joint.ui.PaperScroller
 * } _options 
 */
function PopUpMenu (options) {
    var self = this;
    // ============================================
    self.alive = true;
    self.tempConfiguration = cloneDeep(options.target.configurationSet);
    self.tempConfiguration.modified = true;

    var _base = options.base;
    var _target = self.target = options.target;
    var _scroller = options.scroller;

    var _searchInput = null;
    var _linksRow = null;
    var _radioButtons = null;
    
    var _root = document.createElement('DIV');
    _createMarkup();

    var targetPosition = _getTargetPosition();
    _updatePosition(targetPosition);

    if (_target && _target.on) {
        _target.on('change:position', function () {
            _refresh();
        });
    }

    _scroller.options.paper.on('blank:pointerdown', function () {
        self.remove();
    });

    _scroller.options.paper.on('change:customPosition', function () {
        self.refresh();
    });

    _target.on('change:hidden', function () {
        self.remove();
    });

    _scroller.scrollToElement(_target);

    // ============================================

    self.remove = function () {
        if (self.alive) {
            _base.removeChild(_root);
            self.alive = false;
        }
    };

    self.refresh = function () {
        if (self.alive) {
            _refresh();
        }
    };

    self.putData = function (edges) {
        var connections = _createConnectionsList(edges);
        _target.configurationSet.connections = connections;
        _refresh();
    };

    function _createMarkup () {
        _root.className = 'ng-ui_pop-up';
        _root.style.position = 'relative';
        _base.appendChild(_root);

        var body = document.createElement('DIV');
        body.className = 'ng-ui_pop-up_body';
        _root.appendChild(body);

        var searchRow = createRow('ng-ui_pop-up_body_search-row');
        _searchInput = document.createElement('INPUT');
        _searchInput.setAttribute('type', 'text');
        _searchInput.setAttribute('placeholder', 'Search..');
        _searchInput.className='ng-ui_pop-up_body_search-row__input';
        searchRow.appendChild(_searchInput);
        _searchInput.onkeyup = function () {
            self.tempConfiguration.filterKey = _searchInput.value;
            _updateConnectionList();
        };

        var radioRow = createRow('ng-ui_pop-up_body_radio-row', 'FORM');
        radioRow.name = 'filterTypeForm';
        radioRow.innerHTML = 
            '<span class="ng-ui_pop-up_body_radio-row__radio-button">' + 
                '<input class="ng-ui_pop-up_body_radio-row__radio-button-input" name="filterType" value="ALL" type="radio" />' +
                '<img class="ng-all-connections"/>' +
                '<label> Both</label>' +
            '</span>' +
            '<span class="ng-ui_pop-up_body_radio-row__radio-button">' + 
                '<input class="ng-ui_pop-up_body_radio-row__radio-button-input" name="filterType" value="INCOMING" type="radio" />' +
                '<img class="ng-incoming-connections"/>' +
                '<label> Incoming</label>' +
            '</span>' +
            '<span class="ng-ui_pop-up_body_radio-row__radio-button">' + 
                '<input class="ng-ui_pop-up_body_radio-row__radio-button-input" name="filterType" value="OUTGOING" type="radio" />' +
                '<img class="ng-outgoing-connections"/>' +
                '<label> Outgoing</label>' +
            '</span>';
        _radioButtons = document.querySelector('form[name=filterTypeForm]').querySelectorAll('input[name=filterType]');
        for(var i = 0; i < _radioButtons.length; i++) {
            _radioButtons[i].onclick = function () {
                self.tempConfiguration.filterType = this.value;
                _updateConnectionList();
            };
        }
        var radioRowButtons = radioRow.querySelectorAll('.ng-ui_pop-up_body_radio-row__radio-button');
        for (i = 0; i < radioRowButtons.length; i++) {
            radioRowButtons[i].onclick = function () {
                var input = this.querySelector('input');
                input.checked = true;
                self.tempConfiguration.filterType = input.value;
                _updateConnectionList();
            };
        }

        var transitiveRow = createRow('ng-ui_pop-up_body_transitive-row');
        var transitiveCheckBox = document.createElement('INPUT');
        transitiveCheckBox.setAttribute('type', 'checkBox');
        transitiveCheckBox.checked = self.tempConfiguration.expandTransitively;
        transitiveRow.appendChild(transitiveCheckBox);
        transitiveRow.onclick = function () {
            transitiveCheckBox.checked = !transitiveCheckBox.checked;
            self.tempConfiguration.expandTransitively = transitiveCheckBox.checked;
        };
        var transitiveLabel = document.createElement('LABEL');
        transitiveLabel.innerText = 'Transitive expansion';
        transitiveRow.appendChild(transitiveLabel);

        _linksRow = createRow('ng-ui_pop-up_body_links-row');
        _updateConnectionList (_linksRow);

        var buttonsRow = createRow('ng-ui_pop-up_body_buttons-row');

        var selectAll = document.createElement('BUTTON');
        selectAll.className = 'ng-ui_pop-up_body_buttons-row_button tq-button';
        selectAll.innerText = 'Select all';
        buttonsRow.appendChild(selectAll);
        selectAll.onclick = function () {
            checkAll(true);
            _updateConnectionList();
        };

        var clearSelection = document.createElement('BUTTON');
        clearSelection.className = 'ng-ui_pop-up_body_buttons-row_button tq-button';
        clearSelection.innerText = 'Clear selection';
        buttonsRow.appendChild(clearSelection);
        clearSelection.onclick = function () {
            checkAll(false);
            _updateConnectionList();
        };

        var span = document.createElement('SPAN');
        span.style.flexGrow = 1;
        buttonsRow.appendChild(span);

        var resetFilter = document.createElement('BUTTON');
        resetFilter.className = 'ng-ui_pop-up_body_buttons-row_button tq-button';
        resetFilter.innerText = 'Reset filter';
        buttonsRow.appendChild(resetFilter);
        resetFilter.onclick = function () {
            var parent = _target.getParent();
            if (options.beforeApply) options.beforeApply(_target.configurationSet);
            
            if (parent) {
                _target.configurationSet = cloneDeep(parent.configurationSet);
            } else {
                _target.configurationSet = {
                    filterType: 'ALL', // INCOMING, OUTGOING
                    filterKey: '',
                    visibilityMap: {},
                    visibilityMapReverse: {},
                };
            }

            _target.configurationSet.connections = self.tempConfiguration.connections;
            _target.configurationSet.modified = false;
            self.tempConfiguration = cloneDeep(_target.configurationSet);
            self.tempConfiguration.modified = true;
            _updateConnectionList();
            self.remove();

            if (options.afterApply) options.afterApply(_target.configurationSet);
        };

        var go = document.createElement('BUTTON');
        go.className = 'ng-ui_pop-up_body_buttons-row_button go-button';
        go.innerText = 'Go';
        go.onclick = function () {
            if (options.beforeApply) options.beforeApply(_target.configurationSet);

            _target.configurationSet = self.tempConfiguration;
            self.remove();
            
            if (options.afterApply) options.afterApply(_target.configurationSet);
        };

        buttonsRow.appendChild(go);

        function createRow (className, teg) {
            var row = document.createElement(teg || 'DIV');
            row.className = className;
            body.appendChild(row);
            return row;
        }

        function checkAll (value) {
            var config = self.tempConfiguration;
            var filteredConnections = filterConnections(config);
            filteredConnections.forEach(function (conection) {
                conection.checked = value;
            });
        }
    }

    function _updateConnectionList () {
        if (self.tempConfiguration.connections) {
            for(var i = 0; i < _radioButtons.length; i++) {
                if(_radioButtons[i].value === self.tempConfiguration.filterType) {
                    _radioButtons[i].checked = true;
                    break;
                }
            }

            if (_searchInput.value !== self.tempConfiguration.filterKey) {
                _searchInput.value = self.tempConfiguration.filterKey;
            }

            if (self.tempConfiguration.connections.length === 0) {
                _linksRow.innerHTML = '<div class="ng-ui_pop-up_body_links-row__disabled">List is empty</div>';
            } else {
                _linksRow.innerHTML = '';

                var div = document.createElement('DIV');
                div.className = 'ng-ui_pop-up_body_links-row_container';
                _linksRow.appendChild(div);

                var list = document.createElement('UL');
                list.className = 'ng-ui_pop-up_body_links-row_container_connection-list';
                fillList(list);
                div.appendChild(list);
            }
        }else {
            _linksRow.innerHTML = '<div class="ng-ui_pop-up_body_links-row__disabled">Loading..</div>';
        }

        function fillList (listRoot) {
            var config = self.tempConfiguration;
            
            var filteredConnections = filterConnections(config);
            filteredConnections.forEach(function (connection) {
                listRoot.appendChild(calculateConnectionRows(connection));
            });
        }

        function calculateConnectionRows (connection) {
            var row = document.createElement('DIV');
            row.className = 'ng-ui_pop-up_body_links-row_container_connection-list_row';
            row.setAttribute('title', connection.label);

            // connection checkBox
            // ----------------------------------

            var checkBox = document.createElement('INPUT');
            checkBox.setAttribute('type', 'checkBox');
            checkBox.checked = connection.checked;
            checkBox.style.pointerEvents = 'none';
            row.appendChild(checkBox);
            function updateCheckBoxValue () {
                if (connection.direction) {
                    self.tempConfiguration.visibilityMap[connection.typeId] = checkBox.checked;
                } else {
                    self.tempConfiguration.visibilityMapReverse[connection.typeId] = checkBox.checked;
                }
            }
            updateCheckBoxValue();
            row.onclick = function () {
                checkBox.checked = !checkBox.checked;
                connection.checked = checkBox.checked;
                updateCheckBoxValue();
            };
            
            // Icon
            // ----------------------------------

            var image = document.createElement('IMG');
            image.className = connection.direction ? 'ng-ui_pop-up_body_links-row_container_connection-list_row__incoming-image'
                                             : 'ng-ui_pop-up_body_links-row_container_connection-list_row__outgoing-image';
            row.appendChild(image);

            // Label
            // ----------------------------------

            var label = document.createElement('SPAN');
            label.className = 'ng-ui_pop-up_body_links-row_container_connection-list_row__label';
            label.innerText = connection.label; 
            row.appendChild(label);

            // Buble counter
            // ----------------------------------

            var bubble = document.createElement('SPAN');
            bubble.className = 'ng-ui_pop-up_body_links-row_container_connection-list_row__bubble';
            bubble.innerText = connection.count; 
            row.appendChild(bubble);

            return row;
        }
    }

    function filterConnections (config) {
        return self.tempConfiguration.connections.filter(function (connection) {
            return (config.filterType === 'ALL' ||
                    config.filterType === 'INCOMING' && connection.direction ||
                    config.filterType === 'OUTGOING' && !connection.direction) &&
                    (!config.filterKey || config.filterKey && connection.label.toLowerCase().indexOf(config.filterKey.toLowerCase()) !== -1);
        });
    }

    function _createConnectionsList (edges) {
        var connectionCounter = {};
        var connectionCounterReverse = {};
        var config = self.tempConfiguration;

        function putIntoMap (edges, label) {
            edges.forEach(function (edge) {
                var map = null;
                var checkMap = null;
                var direction = _target.dataModel.typeId === edge.target;
                
                if (direction) {
                    map = connectionCounter;
                    checkMap = config.visibilityMap;
                } else {
                    map = connectionCounterReverse;
                    checkMap = config.visibilityMapReverse;
                }
                if (!map[edge.id]) {
                    map[edge.id] = {
                        typeId: edge.id,
                        label: label || edge.label,
                        count: 1,
                        direction: direction,
                        checked: checkMap[edge.id] || checkMap[edge.id] === undefined,
                    };
                } else {
                    map[edge.id].count++;
                }
            });
        }
        putIntoMap(edges);

        return Object.keys(connectionCounter).map(function (key) { return connectionCounter[key]; }).concat(
            Object.keys(connectionCounterReverse).map(function (key) { return connectionCounterReverse[key]; })
        ).sort(function (a, b) {
            if (a.label > b.label) {
                return 1;
            } else if (a.label < b.label) {
                return -1;
            } else {
                if (a.direction && !b.direction) {
                    return 1;
                } else if (!a.direction && b.direction) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });
    }

    function _refresh () {
        self.tempConfiguration = cloneDeep(_target.configurationSet);
        self.tempConfiguration.modified = true;
        
        targetPosition = _getTargetPosition(_target);
        _updatePosition(targetPosition);
        _updateConnectionList();
    }

    function _getTargetPosition () {
        if (_target && _target.position) return _target.position();
        else return { x: 0, y: 0 };
    }

    function _updatePosition (position) {
        var targetSize = _target.get('size');
        var popUpSize = { width: _root.clientWidth, height: _root.clientHeight };
        
        if (_target.getDirection()) {
            setToTheEast();
        } else {
            setToTheWest();
        }

        function setToTheEast () {
            _root.style.left = (position.x + targetSize.width) * _scroller._sx + 'px';
            _root.style.top = (position.y + targetSize.height / 2) * _scroller._sx - popUpSize.height / 2 + 'px';
        }

        function setToTheWest () {
            _root.style.left = (position.x) * _scroller._sx - popUpSize.width + 'px';
            _root.style.top = (position.y + targetSize.height / 2) * _scroller._sx - popUpSize.height / 2 + 'px';
        }
    }
}

module.exports = PopUpMenu;

},{"lodash":"lodash"}],19:[function(_dereq_,module,exports){
'use strict';
var cloneDeep = _dereq_('lodash').cloneDeep;

var DEFAULT_DECK_LENGTH = 4;

/**
 * Description
 * 
 * Constructor parameters
 *  @param {GraphLayout} layout
 *  @param {Object} parameters

 * Public methods:
 * pushState (): void
 * getHistory: {
 *  states: [],
 *  currentIndex: number,
 * }
 * undoState (): void
 * redoState (): void
 */
function StateStorage (layout, parameters) {
    var self = this;
    if (!parameters) parameters = {};

    var _layout = layout;
    var _stateDeck = [];
    var _stateMap = {};
    var _deckLength = parameters.deckLength || DEFAULT_DECK_LENGTH;
    var _currentIndex = -1;

    self.pushState = function () {
        if (_stateDeck.length - 1 > _currentIndex) {
            _stateDeck.splice(_currentIndex + 1, _stateDeck.length);
        }
        if (_saveState()) {
            _check();
            _currentIndex = _stateDeck.length;
        }
    };

    self.getHistory = function () {
        return {
            states: cloneDeep(_stateDeck),
            currentIndex: _currentIndex,
        };
    };

    self.undoState = function () {
        if (_currentIndex === _stateDeck.length) {
            if (_saveState()) {
                _check();
            }
        } else {
            _updateMap();
        }
        if (_currentIndex > 0) {
            _currentIndex--;
            return _returnState();
        } else {
            return null;
        }
    };

    self.redoState = function () {
        _updateMap();
        if (_currentIndex + 1 < _stateDeck.length) {
            _currentIndex++;
            return _returnState();
        } else {
            return null;
        }
    };
    
    function _returnState () {
        return _stateMap[_stateDeck[_currentIndex]];
    }

    function _saveState () {
        var state = _layout.getState();
        if (state.rootNode) {
            _stateMap[state.rootNode.typeId] = state;

            if (_stateDeck[_stateDeck.length - 1] !== state.rootNode.typeId) _stateDeck.push(state.rootNode.typeId);
            return true;
        } else {
            return false;
        }
    }

    function _updateMap () {
        var state = _layout.getState();
        if (state.rootNode) {
            _stateMap[state.rootNode.typeId] = state;
        }
    }

    function _check () {
        if (_stateDeck.length > _deckLength) _stateDeck.shift();

        Object.keys(_stateMap).forEach(function (key) {
            if (_stateDeck.indexOf(key) === -1) {
                if(!delete _stateMap[key]) {
                    _stateMap[key] = undefined;
                }
            }
        });
    }
}

module.exports = StateStorage;


},{"lodash":"lodash"}],20:[function(_dereq_,module,exports){
var _ = _dereq_('lodash');

/** 
 * It's base class which provides subscription API for successors.
 * @class
*/

function Subscribable () {
    var self = this;
    self._subscribtions = {};

    /**
     * Method allows to subscribe on a some specific event.
     * @param {string} event - event id
     * @param {function} callback - event handler
     * @memberof Subscribable
     * @method
    */
    self.on = function (event, callback) {
        if (!self._subscribtions[event]) self._subscribtions[event] = [];
        self._subscribtions[event].push(callback);
    };

    /**
     * Method allows to unsubscribe from a some specific event.
     * @param {function} callback - event handler
     * @memberof Subscribable
     * @method
    */
    self.unsubscribe = function (callback) {
        _.values(self._subscribtions).forEach(function (subscribers) {
            var index = subscribers.indexOf(callback);
            if (index !== -1) subscribers.splice(index, 1);
        });
    };

    /**
     * Method which fires the event.
     * @param {string} event - event id
     * @param {Object[]} parameters
     * @memberof Subscribable
     * @method
    */
    self.trigger = function (event, parameters) {
        if (!(parameters instanceof Array)) parameters = [parameters];
        if (self._subscribtions && self._subscribtions[event]) {
            self._subscribtions[event].forEach(function (c) {
                c.apply(this, parameters);
            });
        }
    };
}
module.exports = Subscribable;

},{"lodash":"lodash"}]},{},[15])(15)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9WaXN1YWxpemF0aW9uc0xpYnJhcnkvYnVpbGQvanMvbm9kZV9tb2R1bGVzL3Zpc3VhbGl6YXRpb25zLWxpYnJhcnkvYnVpbGQvanMvbWFpbi5taW4uanMiLCJub2RlX21vZHVsZXMvZXM2LXByb21pc2UvZGlzdC9lczYtcHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9maWxlLXNhdmVyanMvRmlsZVNhdmVyLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJzcmMvanMvY29sb3JDb25maWd1cmF0b3IuanMiLCJzcmMvanMvZGF0YVByb3ZpZGVyLmpzIiwic3JjL2pzL2dyYXBoRWxlbWVudHMuanMiLCJzcmMvanMvZ3JhcGhMYXlvdXQuanMiLCJzcmMvanMvaHRtbFVJL2RlZmF1bHRVSS5qcyIsInNyYy9qcy9odG1sVUkvaW5mb1BhbmVsLmpzIiwic3JjL2pzL2h0bWxVSS9vcHRpb25zUGFuZWwuanMiLCJzcmMvanMvbGF5b3V0UGFnaW5hdGlvbk1hbmFnZXIuanMiLCJzcmMvanMvbGF5b3V0UG9zaXRpb25NYW5hZ2VyLmpzIiwic3JjL2pzL21haW4uanMiLCJzcmMvanMvbmVpZ2hib3JHcmFtLmpzIiwic3JjL2pzL3BhZ2luYXRpb24uanMiLCJzcmMvanMvcG9wVXBNZW51LmpzIiwic3JjL2pzL3N0YXRlU3RvcmFnZS5qcyIsInNyYy9qcy9zdWJzY3JpcHRpb25BUEkvc3Vic2NyaWJlYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDam9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbG9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzltQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5akJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2c0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgdDt0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyx0LlRRR3JhbVVJPWUoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4sbyl7ZnVuY3Rpb24gcihsLGEpe2lmKCFuW2xdKXtpZighdFtsXSl7dmFyIHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighYSYmcylyZXR1cm4gcyhsLCEwKTtpZihpKXJldHVybiBpKGwsITApO3ZhciB1PW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbCtcIidcIik7dGhyb3cgdS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLHV9dmFyIGQ9bltsXT17ZXhwb3J0czp7fX07dFtsXVswXS5jYWxsKGQuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W2xdWzFdW2VdO3JldHVybiByKG4/bjplKX0sZCxkLmV4cG9ydHMsZSx0LG4sbyl9cmV0dXJuIG5bbF0uZXhwb3J0c31mb3IodmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxsPTA7bDxvLmxlbmd0aDtsKyspcihvW2xdKTtyZXR1cm4gcn1yZXR1cm4gZX0oKSh7MTpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7ZnVuY3Rpb24gdCgpe2kucm9vdEh0bWwuaW5uZXJIVE1MPVwiXCIsaS5yb290SHRtbC5zdHlsZS5ib3JkZXJUb3A9MCE9PWkuYnV0dG9ucy5sZW5ndGg/XCIxcHggc29saWQgI2NjY2NjY1wiOm51bGwsaS5yb290SHRtbC5zdHlsZS5ib3JkZXJCb3R0b209MCE9PWkuYnV0dG9ucy5sZW5ndGg/XCIxcHggc29saWQgI2NjY2NjY1wiOm51bGwsaS5idXR0b25zLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTt0LnRpdGxlPWUubGFiZWwsdC5jbGFzc05hbWU9XCJ0cS11aS10b29sYmFyX19idXR0b24gdHEtdWktY29sb3JlZC1idXR0b25cIix0LmlubmVySFRNTD0nPHNwYW4gc3R5bGU9XCJjb2xvcjogJytlLmJvcmRlckNvbG9yKydcIj4nK24oZS5sYWJlbCkrXCI8L3NwYW4+XCIsdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ZS5iYWNrZ3JvdW5kQ29sb3J8fFwid2hpdGVcIix0LnN0eWxlLmJvcmRlckNvbG9yPWUuYm9yZGVyQ29sb3J8fFwiYmxhY2tcIix0Lm9uY2xpY2s9ZnVuY3Rpb24odCl7ZS5jYWxsYmFjayhlLHQpfSxpLnJvb3RIdG1sLmFwcGVuZENoaWxkKHQpfSl9ZnVuY3Rpb24gbihlKXtpZihlKXt2YXIgdD1lLm1hdGNoKC9bYS16J1xcLV0rL2dpKTtyZXR1cm4gdC5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuXCJhbmRcIiE9PWUudG9Mb3dlckNhc2UoKSYmXCImXCIhPT1lfSkubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlWzBdfSkuam9pbihcIlwiKX19ZnVuY3Rpb24gbygpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7cmV0dXJuIGUuY2xhc3NOYW1lPVwidHEtdWktY29sb3JlZC1idXR0b25zLWxpc3RcIixlLmlubmVySFRNTD1cIlwiLGV9dmFyIGk9dGhpcztlfHwoZT17fSksaS5yb290SHRtbD1vKCksaS5pZD1lLmlkfHxcImNvbG9yZWRCdXR0b25zLVwiK3IrKyxpLnJvb3RIdG1sLmlkPWkuaWQsaS5idXR0b25zPWUuYnV0dG9uc3x8W10sdCgpLGkucmVtb3ZlQWxsPWZ1bmN0aW9uKCl7aS5idXR0b25zPVtdLHQoKX0saS5hZGRCdXR0b249ZnVuY3Rpb24oZSl7aS5idXR0b25zLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5pZH0pLmluZGV4T2YoZS5pZCk9PT0tMSYmKGkuYnV0dG9ucy5wdXNoKGUpLHQoKSl9LGkucmVtb3ZlQnV0dG9uPWZ1bmN0aW9uKGUpe2kuYnV0dG9ucy5zcGxpY2UoaS5idXR0b25zLmluZGV4T2YoZSksMSksdCgpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxuLkNvbG9yZWRCdXR0b25zTGlzdD1vO3ZhciByPTA7bltcImRlZmF1bHRcIl09b30se31dLDI6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ZnVuY3Rpb24gcihlKXtmdW5jdGlvbiB0KCl7aWYoZS5ib2R5IGluc3RhbmNlb2YgT2JqZWN0KXt2YXIgdD1yLnJvb3RIdG1sLnF1ZXJ5U2VsZWN0b3IoXCIudHEtdWktYm9keV9jb250YWluZXJcIik7dC5hcHBlbmRDaGlsZChlLmJvZHkucm9vdEh0bWwpfXZhciBhPXIucm9vdEh0bWwucXVlcnlTZWxlY3RvcihcIi50cS11aS1mbHlpbmctcGFuZWxfaGVhZGVyXCIpO2EuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLG8pO3ZhciBzPXIucm9vdEh0bWwucXVlcnlTZWxlY3RvcihcIi50cS11aS13aW5kb3dzLWNvbGxhcHNlLWJ1dHRvblwiKTtpZihzLm9uY2xpY2s9ci5oaWRlLGUucmVzaXphYmxlKXt2YXIgdT1yLnJvb3RIdG1sLnF1ZXJ5U2VsZWN0b3IoXCIudHEtdWktZmx5aW5nLXBhbmVsX19ib3JkZXIudHEtdWktdG9wLWJvcmRlclwiKTt1LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixmdW5jdGlvbihlKXtvKGUsXCJuXCIpfSk7dmFyIGQ9ci5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiLnRxLXVpLWZseWluZy1wYW5lbF9fYm9yZGVyLnRxLXVpLXJpZ2h0LWJvcmRlclwiKTtkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixmdW5jdGlvbihlKXtvKGUsXCJlXCIpfSk7dmFyIGM9ci5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiLnRxLXVpLWZseWluZy1wYW5lbF9fYm9yZGVyLnRxLXVpLWJvdHRvbS1ib3JkZXJcIik7Yy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oZSl7byhlLFwic1wiKX0pO3ZhciBmPXIucm9vdEh0bWwucXVlcnlTZWxlY3RvcihcIi50cS11aS1mbHlpbmctcGFuZWxfX2JvcmRlci50cS11aS1sZWZ0LWJvcmRlclwiKTtmLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixmdW5jdGlvbihlKXtvKGUsXCJ3XCIpfSk7dmFyIHA9ci5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiLnRxLXVpLWZseWluZy1wYW5lbF9fYm9yZGVyLnRxLXVpLXRvcC1yaWdodC1ib3JkZXJcIik7cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oZSl7byhlLFwibmVcIil9KTt2YXIgYj1yLnJvb3RIdG1sLnF1ZXJ5U2VsZWN0b3IoXCIudHEtdWktZmx5aW5nLXBhbmVsX19ib3JkZXIudHEtdWktdG9wLWxlZnQtYm9yZGVyXCIpO2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGUpe28oZSxcIm53XCIpfSk7dmFyIG09ci5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiLnRxLXVpLWZseWluZy1wYW5lbF9fYm9yZGVyLnRxLXVpLWJvdHRvbS1yaWdodC1ib3JkZXJcIik7bS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oZSl7byhlLFwic2VcIil9KTt2YXIgeT1yLnJvb3RIdG1sLnF1ZXJ5U2VsZWN0b3IoXCIudHEtdWktZmx5aW5nLXBhbmVsX19ib3JkZXIudHEtdWktYm90dG9tLWxlZnQtYm9yZGVyXCIpO3kuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGUpe28oZSxcInN3XCIpfSl9ci5fdHJpZ2dlckJ1dHRvbj1pKGUudHJpZ2dlckJ1dHRvbiksbigpLHIuX3RyaWdnZXJCdXR0b24mJihyLl90cmlnZ2VyQnV0dG9uLm9uY2xpY2s9ZnVuY3Rpb24oKXtsP3Iuc2hvdygpOnIuaGlkZSgpfSl9ZnVuY3Rpb24gbigpe2w/KHIuX3RyaWdnZXJCdXR0b24mJihyLl90cmlnZ2VyQnV0dG9uLmNsYXNzTmFtZT1yLl90cmlnZ2VyQnV0dG9uLmNsYXNzTmFtZS5yZXBsYWNlKC8gdHEtdWktc2VsZWN0ZWQvZ2ksXCJcIikpLHIucm9vdEh0bWwuY2xhc3NOYW1lPXIucm9vdEh0bWwuY2xhc3NOYW1lK1wiIHRxLXVpLWNvbGxhcHNlZFwiKTooci5fdHJpZ2dlckJ1dHRvbiYmKHIuX3RyaWdnZXJCdXR0b24uY2xhc3NOYW1lPXIuX3RyaWdnZXJCdXR0b24uY2xhc3NOYW1lK1wiIHRxLXVpLXNlbGVjdGVkXCIpLHIucm9vdEh0bWwuY2xhc3NOYW1lPXIucm9vdEh0bWwuY2xhc3NOYW1lLnJlcGxhY2UoLyB0cS11aS1jb2xsYXBzZWQvZ2ksXCJcIikpfWZ1bmN0aW9uIG8oZSx0KXtmdW5jdGlvbiBuKGUpe3IuX21vdXNlTW92ZT0hMDt2YXIgbj0wO2UucGFnZVg/bj1lLnBhZ2VYOmUuY2xpZW50WCYmKG49ZS5jbGllbnRYKTt2YXIgbz1uLWw7bD1uLHR8fChyLnJvb3RIdG1sLnN0eWxlLmxlZnQ9ci5yb290SHRtbC5vZmZzZXRMZWZ0K28rXCJweFwiKTt2YXIgcz0wO2UucGFnZVk/cz1lLnBhZ2VZOmUuY2xpZW50WSYmKHM9ZS5jbGllbnRZKTt2YXIgdT1zLWE7YT1zLHR8fChyLnJvb3RIdG1sLnN0eWxlLnRvcD1yLnJvb3RIdG1sLm9mZnNldFRvcCt1K1wicHhcIiksdD8oaShvLHUsdCksci50cmlnZ2VyKFwic2l6ZS1jaGFuZ2VkXCIse3dpZHRoOnIucm9vdEh0bWwub2Zmc2V0V2lkdGgsaGVpZ2h0OnIucm9vdEh0bWwub2Zmc2V0SGVpZ2h0fSksdC5pbmRleE9mKFwiblwiKT09PS0xJiZ0LmluZGV4T2YoXCJ3XCIpPT09LTF8fHIudHJpZ2dlcihcInBvc2l0aW9uLWNoYW5nZWRcIix7eDpyLnJvb3RIdG1sLm9mZnNldExlZnQseTpyLnJvb3RIdG1sLm9mZnNldFRvcH0pKTpyLnRyaWdnZXIoXCJwb3NpdGlvbi1jaGFuZ2VkXCIse3g6ci5yb290SHRtbC5vZmZzZXRMZWZ0LHk6ci5yb290SHRtbC5vZmZzZXRUb3B9KX1mdW5jdGlvbiBvKGUpe3IuX21vdXNlTW92ZSYmKG4oZSwhMCksci5fbW91c2VNb3ZlPSExKSxkb2N1bWVudC5ib2R5Lm9ubW91c2Vtb3ZlPWRvY3VtZW50LmJvZHkub25tb3VzZXVwPW51bGwsZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsbiksZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLG8pfWZ1bmN0aW9uIGkoZSx0LG4pe3N3aXRjaChuKXtjYXNlXCJuXCI6ci5yb290SHRtbC5zdHlsZS5oZWlnaHQ9ci5yb290SHRtbC5vZmZzZXRIZWlnaHQtdCtcInB4XCIsci5yb290SHRtbC5zdHlsZS50b3A9ci5yb290SHRtbC5vZmZzZXRUb3ArdCtcInB4XCI7YnJlYWs7Y2FzZVwiZVwiOnIucm9vdEh0bWwuc3R5bGUud2lkdGg9ci5yb290SHRtbC5vZmZzZXRXaWR0aCtlK1wicHhcIjticmVhaztjYXNlXCJzXCI6ci5yb290SHRtbC5zdHlsZS5oZWlnaHQ9ci5yb290SHRtbC5vZmZzZXRIZWlnaHQrdCtcInB4XCI7YnJlYWs7Y2FzZVwid1wiOnIucm9vdEh0bWwuc3R5bGUud2lkdGg9ci5yb290SHRtbC5vZmZzZXRXaWR0aC1lK1wicHhcIixyLnJvb3RIdG1sLnN0eWxlLmxlZnQ9ci5yb290SHRtbC5vZmZzZXRMZWZ0K2UrXCJweFwiO2JyZWFrO2Nhc2VcIm5lXCI6ci5yb290SHRtbC5zdHlsZS53aWR0aD1yLnJvb3RIdG1sLm9mZnNldFdpZHRoK2UrXCJweFwiLHIucm9vdEh0bWwuc3R5bGUuaGVpZ2h0PXIucm9vdEh0bWwub2Zmc2V0SGVpZ2h0LXQrXCJweFwiLHIucm9vdEh0bWwuc3R5bGUudG9wPXIucm9vdEh0bWwub2Zmc2V0VG9wK3QrXCJweFwiO2JyZWFrO2Nhc2VcIm53XCI6ci5yb290SHRtbC5zdHlsZS5oZWlnaHQ9ci5yb290SHRtbC5vZmZzZXRIZWlnaHQtdCtcInB4XCIsci5yb290SHRtbC5zdHlsZS50b3A9ci5yb290SHRtbC5vZmZzZXRUb3ArdCtcInB4XCIsci5yb290SHRtbC5zdHlsZS53aWR0aD1yLnJvb3RIdG1sLm9mZnNldFdpZHRoLWUrXCJweFwiLHIucm9vdEh0bWwuc3R5bGUubGVmdD1yLnJvb3RIdG1sLm9mZnNldExlZnQrZStcInB4XCI7YnJlYWs7Y2FzZVwic2VcIjpyLnJvb3RIdG1sLnN0eWxlLndpZHRoPXIucm9vdEh0bWwub2Zmc2V0V2lkdGgrZStcInB4XCIsci5yb290SHRtbC5zdHlsZS5oZWlnaHQ9ci5yb290SHRtbC5vZmZzZXRIZWlnaHQrdCtcInB4XCI7YnJlYWs7Y2FzZVwic3dcIjpyLnJvb3RIdG1sLnN0eWxlLmhlaWdodD1yLnJvb3RIdG1sLm9mZnNldEhlaWdodCt0K1wicHhcIixyLnJvb3RIdG1sLnN0eWxlLndpZHRoPXIucm9vdEh0bWwub2Zmc2V0V2lkdGgtZStcInB4XCIsci5yb290SHRtbC5zdHlsZS5sZWZ0PXIucm9vdEh0bWwub2Zmc2V0TGVmdCtlK1wicHhcIn19dmFyIGw9MCxhPTA7ZS5wYWdlWD9sPWUucGFnZVg6ZS5jbGllbnRYJiYobD1lLmNsaWVudFgpLGUucGFnZVk/YT1lLnBhZ2VZOmUuY2xpZW50WSYmKGE9ZS5jbGllbnRZKSx3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsbiksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLG8pfXNbXCJkZWZhdWx0XCJdLmFwcGx5KHRoaXMpO3ZhciByPXRoaXM7ZXx8KGU9e30pO3ZhciBsPSFlLmFjdGl2ZTtyLm1hcmt1cD0nXFxuICAgICAgICA8ZGl2IGNsYXNzPVwidHEtdWktZmx5aW5nLXBhbmVsXCJcXG4gICAgICAgICAgICBzdHlsZT1cIlxcbiAgICAgICAgICAgICAgICB3aWR0aDogJysoZS5zaXplP2Uuc2l6ZS53aWR0aDpcIlwiKStcIjtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIisoZS5zaXplP2Uuc2l6ZS5oZWlnaHQ6XCJcIikrXCI7XFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiKyhlLnBvc2l0aW9uP2UucG9zaXRpb24ueDpcIlwiKStcIjtcXG4gICAgICAgICAgICAgICAgdG9wOiBcIisoZS5wb3NpdGlvbj9lLnBvc2l0aW9uLnk6XCJcIikrJztcXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cS11aS1mbHlpbmctcGFuZWxfaGVhZGVyXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cS11aS1mbHlpbmctcGFuZWxfaGVhZGVyX19oZWFkZXJcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRxLXVpLXdpbmRvdy1oZWFkZXItbGFiZWxcIj4nKyhlLmhlYWRlcj9lLmhlYWRlcjpcIlwiKSsnPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiQ29sbGFwc2UgQnV0dG9uXCIgY2xhc3M9XCJ0cS11aS13aW5kb3dzLWNvbGxhcHNlLWJ1dHRvblwiLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRxLXVpLWJvZHlcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRxLXVpLWJvZHlfY29udGFpbmVyICcrKGUucmVtb3ZlQmFja2dyb3VuZD9cInRxLXVpLWJvZHlfZW1wdHktY29udGFpbmVyXCI6XCJ0cS11aS1ib2R5X2RlZmF1bHQtY29udGFpbmVyXCIpKydcIj5cXG4gICAgICAgICAgICAgICAgICAgICcrKGUuYm9keSYmXCJzdHJpbmdcIj09dHlwZW9mIGUuYm9keT9lLmJvZHk6XCJcIikrXCJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgXCIrKGUucmVzaXphYmxlPydcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRxLXVpLWZseWluZy1wYW5lbF9fYm9yZGVyIHRxLXVpLXRvcC1ib3JkZXJcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRxLXVpLWZseWluZy1wYW5lbF9fYm9yZGVyIHRxLXVpLXJpZ2h0LWJvcmRlclwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHEtdWktZmx5aW5nLXBhbmVsX19ib3JkZXIgdHEtdWktYm90dG9tLWJvcmRlclwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHEtdWktZmx5aW5nLXBhbmVsX19ib3JkZXIgdHEtdWktbGVmdC1ib3JkZXJcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRxLXVpLWZseWluZy1wYW5lbF9fYm9yZGVyIHRxLXVpLXRvcC1sZWZ0LWJvcmRlclwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHEtdWktZmx5aW5nLXBhbmVsX19ib3JkZXIgdHEtdWktdG9wLXJpZ2h0LWJvcmRlclwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHEtdWktZmx5aW5nLXBhbmVsX19ib3JkZXIgdHEtdWktYm90dG9tLWxlZnQtYm9yZGVyXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cS11aS1mbHlpbmctcGFuZWxfX2JvcmRlciB0cS11aS1ib3R0b20tcmlnaHQtYm9yZGVyXCI+PC9kaXY+XFxuICAgICAgICAgICAgJzpcIlwiKStcIlxcbiAgICAgICAgPC9kaXY+XCI7dmFyIGE9aShlLmJhc2VFbGVtZW50KTthLmlubmVySFRNTD1yLm1hcmt1cCxyLnJvb3RIdG1sPWEucXVlcnlTZWxlY3RvcihcIi50cS11aS1mbHlpbmctcGFuZWxcIiksci5pZD1lLmlkfHxcImZseWluZ1BhbmVsLVwiK3UrKyxyLnJvb3RIdG1sLmlkPXIuaWQsci5zaG93PWZ1bmN0aW9uKGUpe2UmJmUuc3RvcFByb3BhZ2F0aW9uKCksbCYmKGw9ITEsbigpKX0sci5oaWRlPWZ1bmN0aW9uKGUpe2UmJmUuc3RvcFByb3BhZ2F0aW9uKCksbHx8KGw9ITAsbigpKX0sdCgpfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9dm9pZCAwO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk6XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmwoZSkpJiYodD1lKSx0fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9O24uRmx5aW5nUGFuZWw9cjt2YXIgYT1lKFwiLi9zdWJzY3JpcHRpb25BUEkvc3Vic2NyaWJlYWJsZVwiKSxzPW8oYSksdT0wO25bXCJkZWZhdWx0XCJdPXJ9LHtcIi4vc3Vic2NyaXB0aW9uQVBJL3N1YnNjcmliZWFibGVcIjo4fV0sMzpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1mdW5jdGlvbiByKGUpe2Z1bmN0aW9uIHQoZSl7ZnVuY3Rpb24gdChlKXt2YXIgdD1lLmxhYmVsLG49ZS5sYWJlbCtcIiAoXCIrZS5pZCtcIilcIixvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMSVwiKTtyZXR1cm4gby5jbGFzc05hbWU9XCJ0cS11aS1wcm9wZXJ0eS1idXR0b25cIixvLnRpdGxlPW4sby5pbm5lclRleHQ9dCxvLm9uY2xpY2s9ZnVuY3Rpb24oKXtyLnRyaWdnZXIoXCJzZWxlY3RlZC1lbGVtZW50LWNoYW5nZWRcIixlLmlkKX0sb312YXIgbj1yLnJvb3RIdG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmVsYXRlZEVsZW1lbnRzXCIpO24uaW5uZXJIVE1MPVwiXCI7dmFyIG89ZS5pbmNvbWluZ3N8fFtdO2lmKG8ubGVuZ3RoKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7aS5jbGFzc05hbWU9XCJ0cS1sYWJlbFwiLGkuaW5uZXJUZXh0PVwiSW5jb21pbmcgbm9kZXM6XCIsbi5hcHBlbmRDaGlsZChpKTt2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVUxcIik7bC5jbGFzc05hbWU9XCJ0cS11aS1pbmZvLXBhbmVsX3JlbGF0ZWQtZWxlbWVudHNfbGlzdFwiLG4uYXBwZW5kQ2hpbGQobCksby5mb3JFYWNoKGZ1bmN0aW9uKGUpe2wuYXBwZW5kQ2hpbGQodChlKSl9KX12YXIgYT1lLm91dGdvaW5nc3x8W107aWYoYS5sZW5ndGgpe3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKTtzLmNsYXNzTmFtZT1cInRxLWxhYmVsXCIscy5pbm5lclRleHQ9XCJPdXRnb2luZyBub2RlczpcIixuLmFwcGVuZENoaWxkKHMpO3ZhciB1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJVTFwiKTt1LmNsYXNzTmFtZT1cInRxLXVpLWluZm8tcGFuZWxfcmVsYXRlZC1lbGVtZW50c19saXN0XCIsbi5hcHBlbmRDaGlsZCh1KSxhLmZvckVhY2goZnVuY3Rpb24oZSl7dS5hcHBlbmRDaGlsZCh0KGUpKX0pfX1mdW5jdGlvbiBuKGUpe3ZhciB0PVwiXCI7cmV0dXJuIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24obil7dCs9JzxsYWJlbCBmb3I9XCInK24rJ1wiIGNsYXNzPVwidHEtbGFiZWxcIj4nK24rJzwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiJytuKydcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwidHEtdWktcHJvcGVydHlcIiB2YWx1ZT1cIicrZVtuXSsnXCIgZGlzYWJsZWQ+PC9pbnB1dD4nfSksdH1mdW5jdGlvbiBvKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtyZXR1cm4gZS5jbGFzc05hbWU9XCJ0cS11aS1pbmZvLXBhbmVsXCIsZS5pbm5lckhUTUw9ci5tYXJrdXAsZX1sW1wiZGVmYXVsdFwiXS5hcHBseSh0aGlzKSxlfHwoZT17fSk7dmFyIHI9dGhpcyxpPWUucGxhY2Vob2xkZXJ8fFwiU2VsZWN0IGEgZGlhZ3JhbSBlbGVtZW50XCIscz0nPGRpdiBjbGFzcz1cInRxLXVpLWluZm8tcGFuZWxfZW1wdHktc3R1ZmZcIj4nK2krXCI8L2Rpdj5cIjtyLnJvb3RIdG1sPW8oKSxyLnJvb3RIdG1sLmlubmVySFRNTD1zLHIuaWQ9ZS5pZHx8XCJpbmZvUGFuZWwtXCIrYSsrLHIucm9vdEh0bWwuaWQ9ci5pZCxyLnNldFNlbGVjdGVkRWxlbWVudD1mdW5jdGlvbihvKXtpZihvKXtpZihyLnJvb3RIdG1sLmlubmVySFRNTD1cIlwiKyhlLmxhdW5jaEV4dGVybmFsJiZcIm5vZGVcIj09PW8uZGlhZ3JhbVR5cGU/JzxkaXYgY2xhc3M9XCJ0cS11aS1ncm91cFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidHFMYXVuY2hFeHRlcm5hbEJ0blwiIGNsYXNzPVwidHEtYnV0dG9uXCIgdGl0bGU9XCJWaWV3IG1vcmUgaW4gbmV3IHRhYi5cIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3JlICZuYnNwO1xcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbmV3LXdpbmRvd1wiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nOlwiXCIpKyhvLmlkPydcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRxLWxhYmVsXCI+SUQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPVwiJytvLmlkKydcIiB0eXBlPVwidGV4dFwiIGFyaWEtbGFiZWw9XCJJbnB1dCBmb3IgSURcIiBjbGFzcz1cInRxLXVpLXByb3BlcnR5XCIgZGlzYWJsZWQ+PC9pbnB1dD5cXG4gICAgICAgICAgICAgICAgJzpcIlwiKSsoby5sYWJlbD8nXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0cS1sYWJlbFwiPkxhYmVsPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT1cIicrby5sYWJlbCsnXCIgdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPVwiSW5wdXQgZm9yIExhYmVsXCIgY2xhc3M9XCJ0cS11aS1wcm9wZXJ0eVwiIGRpc2FibGVkPjwvaW5wdXQ+XFxuICAgICAgICAgICAgICAgICc6XCJcIikrKG8udHlwZXM/J1xcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidHEtbGFiZWxcIj5UeXBlczwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9XCInK28udHlwZXMrJ1wiIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD1cIklucHV0IGZvciBUeXBlc1wiIGNsYXNzPVwidHEtdWktcHJvcGVydHlcIiBkaXNhYmxlZD48L2lucHV0PlxcbiAgICAgICAgICAgICAgICAnOlwiXCIpKyhvLnNvdXJjZT8nXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGlua0Zyb21cIiBjbGFzcz1cInRxLWxhYmVsXCI+U291cmNlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsaW5rRnJvbVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0cS11aS1wcm9wZXJ0eS1idXR0b25cIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgJzpcIlwiKSsoby50YXJnZXQ/J1xcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxpbmtUb1wiIGNsYXNzPVwidHEtbGFiZWxcIj5UYXJnZXQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxpbmtUb1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0cS11aS1wcm9wZXJ0eS1idXR0b25cIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgJzpcIlwiKSsoby50aGlja25lc3M/J1xcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRoaWNrbmVzc1wiIGNsYXNzPVwidHEtbGFiZWxcIj5UaGlja25lc3M8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPVwiJytvLnRoaWNrbmVzcysnXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cInRxLXVpLXByb3BlcnR5XCIgZGlzYWJsZWQ+PC9pbnB1dD5cXG4gICAgICAgICAgICAgICAgJzpcIlwiKSsoby5kYXRhP24oby5kYXRhKTpcIlwiKSsoby5yZWxhdGlvbnM/J1xcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlbGF0ZWRFbGVtZW50c1wiIGNsYXNzPVwidHEtbGFiZWxcIj5SZWxhdGVkIGVsZW1lbnRzPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgICBpZD1cInJlbGF0ZWRFbGVtZW50c1wiIGNsYXNzPVwidHEtdWktaW5mby1wYW5lbF9yZWxhdGVkLWVsZW1lbnRzXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICc6XCJcIiksZS5sYXVuY2hFeHRlcm5hbCYmXCJub2RlXCI9PT1vLmRpYWdyYW1UeXBlKXt2YXIgaT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRxTGF1bmNoRXh0ZXJuYWxCdG5cIik7aS5vbmNsaWNrPWZ1bmN0aW9uKCl7ZS5sYXVuY2hFeHRlcm5hbChvKX19aWYoby5yZWxhdGlvbnMmJnQoby5yZWxhdGlvbnMpLG8uc291cmNlKXt2YXIgbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtGcm9tXCIpO2wuaW5uZXJUZXh0PW8uc291cmNlLmxhYmVsLGwudGl0bGU9by5zb3VyY2UubGFiZWwrXCIoSUQ6IFwiK28uc291cmNlLmlkK1wiKVwiLGwub25jbGljaz1mdW5jdGlvbigpe3IudHJpZ2dlcihcInNlbGVjdGVkLWVsZW1lbnQtY2hhbmdlZFwiLG8uc291cmNlLmlkKX19aWYoby50YXJnZXQpe3ZhciBhPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua1RvXCIpO2EuaW5uZXJUZXh0PW8udGFyZ2V0LmxhYmVsLGEudGl0bGU9by50YXJnZXQubGFiZWwrXCIoSUQ6IFwiK28udGFyZ2V0LmlkK1wiKVwiLGEub25jbGljaz1mdW5jdGlvbigpe3IudHJpZ2dlcihcInNlbGVjdGVkLWVsZW1lbnQtY2hhbmdlZFwiLG8udGFyZ2V0LmlkKX19fWVsc2Ugci5yb290SHRtbC5pbm5lckhUTUw9c30sZS5zZWxlY3RlZEVsZW1lbnQmJnIuc2V0U2VsZWN0ZWRFbGVtZW50KGUuc2VsZWN0ZWRFbGVtZW50KX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxuLkluZm9QYW5lbD1yO3ZhciBpPWUoXCIuL3N1YnNjcmlwdGlvbkFQSS9zdWJzY3JpYmVhYmxlXCIpLGw9byhpKSxhPTA7bltcImRlZmF1bHRcIl09cn0se1wiLi9zdWJzY3JpcHRpb25BUEkvc3Vic2NyaWJlYWJsZVwiOjh9XSw0OltmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtmdW5jdGlvbiB0KCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtyZXR1cm4gZS5pbm5lckhUTUw9bi5tYXJrdXAsZS5xdWVyeVNlbGVjdG9yKFwiLnRxLXVpLWxlZ2VuZC1wYW5lbF9ib2R5X2xlZ2VuZHNcIil9dmFyIG49dGhpcztlfHwoZT17fSk7dmFyIG89ZS5sZWdlbmRzfHxbXTtuLm1hcmt1cD0nXFxuICAgICAgICA8ZGl2IGNsYXNzPVwidHEtdWktbGVnZW5kLXBhbmVsX2JvZHlfbGVnZW5kc1wiPlxcbiAgICAgICAgJytvLm1hcChmdW5jdGlvbihlKXtyZXR1cm4nXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cS11aS1sZWdlbmQtcGFuZWxfYm9keV9sZWdlbmRzX2xlZ2VuZFwiIHRpdGxlPVwiJytlLmRlc2NyaXB0aW9uKydcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cS11aS1sZWdlbmQtcGFuZWxfYm9keV9sZWdlbmRzX2xlZ2VuZF9pbWdcIj48aW1nIHNyYz1cIicrZS5pbWFnZSsnXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0cS1sYWJlbFwiPicrZS5sYWJlbCtcIjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIFwifSkuam9pbihcIlwiKStcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgIFwiLG4ucm9vdEh0bWw9dCgpLG4uaWQ9ZS5pZHx8XCJsZWdlbmRzLVwiK3IrKyxuLnJvb3RIdG1sLmlkPW4uaWR9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbi5MZWdlbmRzPW87dmFyIHI9MDtuW1wiZGVmYXVsdFwiXT1vfSx7fV0sNTpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX12YXIgcj1lKFwiLi9jb2xvcmVkQnV0dG9uc0xpc3RcIiksaT1vKHIpLGw9ZShcIi4vZmx5aW5nUGFuZWxcIiksYT1vKGwpLHM9ZShcIi4vaW5mb1BhbmVsXCIpLHU9byhzKSxkPWUoXCIuL2xlZ2VuZHNcIiksYz1vKGQpLGY9ZShcIi4vcHJvZ3Jlc3NTY3JlZW5cIikscD1vKGYpLGI9ZShcIi4vc2VhcmNoUGFuZWxcIiksbT1vKGIpLHk9ZShcIi4vc3dpdGNoZXJcIiksdj1vKHkpLGc9ZShcIi4vdGFiUGFuZWxcIiksaD1vKGcpLEg9ZShcIi4vdG9vbGJhclwiKSxxPW8oSCk7dC5leHBvcnRzPXtDb2xvcmVkQnV0dG9uc0xpc3Q6aVtcImRlZmF1bHRcIl0sRmx5aW5nUGFuZWw6YVtcImRlZmF1bHRcIl0sSW5mb1BhbmVsOnVbXCJkZWZhdWx0XCJdLExlZ2VuZHM6Y1tcImRlZmF1bHRcIl0sUHJvZ3Jlc3NTY3JlZW46cFtcImRlZmF1bHRcIl0sU2VhcmNoUGFuZWw6bVtcImRlZmF1bHRcIl0sU3dpdGNoZXI6dltcImRlZmF1bHRcIl0sVGFiUGFuZWw6aFtcImRlZmF1bHRcIl0sVG9vbGJhcjpxW1wiZGVmYXVsdFwiXX19LHtcIi4vY29sb3JlZEJ1dHRvbnNMaXN0XCI6MSxcIi4vZmx5aW5nUGFuZWxcIjoyLFwiLi9pbmZvUGFuZWxcIjozLFwiLi9sZWdlbmRzXCI6NCxcIi4vcHJvZ3Jlc3NTY3JlZW5cIjo2LFwiLi9zZWFyY2hQYW5lbFwiOjcsXCIuL3N3aXRjaGVyXCI6OSxcIi4vdGFiUGFuZWxcIjoxMCxcIi4vdG9vbGJhclwiOjExfV0sNjpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1mdW5jdGlvbiByKGUpe2Z1bmN0aW9uIHQoKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO3JldHVybiBlLmNsYXNzTmFtZT1cInRxLXVpLXByb2dyZXNzLXNjcmVlblwiLGUuaW5uZXJIVE1MPW8ubWFya3VwLGV9ZnVuY3Rpb24gbihlKXt2YXIgdD12b2lkIDA7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/dD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKTpcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6aShlKSkmJih0PWUpLHR9YVtcImRlZmF1bHRcIl0uYXBwbHkodGhpcyk7dmFyIG89dGhpcztlfHwoZT17fSksby5tYXJrdXA9XCJcIixvLnN0YXRlPVwiY29tcGxldGVkXCIsby5yb290SHRtbD10KCksby5pZD1lLmlkfHxcInRhYlBhbmVsLVwiK3MrKyxvLnJvb3RIdG1sLmlkPW8uaWQ7dmFyIHI9bihlLmJhc2VFbGVtZW50KTtyLmFwcGVuZENoaWxkKG8ucm9vdEh0bWwpLG8uc2V0U3RhdGU9ZnVuY3Rpb24oZSx0KXtlJiYoby5zdGF0ZT1lLFwiYWN0aXZlXCI9PT1lPyhvLnJvb3RIdG1sLmlubmVySFRNTD1cIjxoMT5cIisodHx8dSkrJzwvaDE+PGRpdiBjbGFzcz1cInRxLXVpLXByb2dyZXNzLXNjcmVlbl9fcHJvZ3Jlc3NcIj48L2Rpdj4nLG8ucm9vdEh0bWwuc3R5bGUuZGlzcGxheT1udWxsKTpcImNvbXBsZXRlZFwiPT09ZT8oby5yb290SHRtbC5pbm5lckhUTUw9XCJcIixvLnJvb3RIdG1sLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpOlwiZXJyb3JcIj09PWUmJihvLnJvb3RIdG1sLmlubmVySFRNTD1cIjxoMT5cIisodHx8ZCkrXCI8L2gxPlwiLG8ucm9vdEh0bWwuc3R5bGUuZGlzcGxheT1udWxsKSxvLnRyaWdnZXIoXCJkaWFncmFtLXN0YXRlLWNoYW5nZWRcIixlKSl9LG8uc2V0U3RhdGUoZS5zdGF0ZSxlLnRleHQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9O24uUHJvZ3Jlc3NTY3JlZW49cjt2YXIgbD1lKFwiLi9zdWJzY3JpcHRpb25BUEkvc3Vic2NyaWJlYWJsZVwiKSxhPW8obCkscz1NYXRoLmZsb29yKDUwKk1hdGgucmFuZG9tKCkpKzEsdT1cIkxvYWRpbmdcIixkPVwiRXJyb3IgaGFzIG9jY3VycmVkIVwiO25bXCJkZWZhdWx0XCJdPXJ9LHtcIi4vc3Vic2NyaXB0aW9uQVBJL3N1YnNjcmliZWFibGVcIjo4fV0sNzpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1mdW5jdGlvbiByKGUpe2xbXCJkZWZhdWx0XCJdLmFwcGx5KHRoaXMpLGV8fChlPXt9KTt2YXIgdD1lLnNlYXJjaEJ1dHRvbklkfHxcInRxTGdTZWFyY2hCdXR0b25cIixuPWUuc2VhcmNoSWR8fFwic2VhcmNoXCIsbz1lLmFyaWFMYWJlbHx8XCJTZWFyY2ggRmx5b3V0IFBhbmVsXCI7c1tcImRlZmF1bHRcIl0uYXBwbHkodGhpcyxbe2lkOmUuaWQsYmFzZUVsZW1lbnQ6ZS5iYXNlRWxlbWVudCxhY3RpdmU6ZS5hY3RpdmUsaGVhZGVyOmUuaGVhZGVyfHxcIlNlYXJjaCBwYW5lbFwiLHRyaWdnZXJCdXR0b246ZS50cmlnZ2VyQnV0dG9uLGJvZHk6XCJcXG4gICAgICAgICAgICA8c3BhbiBpZD1cIit0KycgY2xhc3M9XCJ0cS11aS1zZWFyY2gtaWNvbiBnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cIicrbysnXCIgaWQ9XCInK24rJ1wiIHBsYWNlSG9sZGVyPVwiU2VhcmNoLi4uXCIgY2xhc3M9XCJ0cS11aS1zZWFyY2gtaW5wdXRcIj48L2lucHV0PlxcbiAgICAgICAgJyxyZW1vdmVCYWNrZ3JvdW5kOiEwLHNpemU6e3dpZHRoOlwiMjYwcHhcIixoZWlnaHQ6XCI3MHB4XCJ9fV0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG4uU2VhcmNoUGFuZWw9cjt2YXIgaT1lKFwiLi9zdWJzY3JpcHRpb25BUEkvc3Vic2NyaWJlYWJsZVwiKSxsPW8oaSksYT1lKFwiLi9mbHlpbmdQYW5lbFwiKSxzPW8oYSk7bltcImRlZmF1bHRcIl09cn0se1wiLi9mbHlpbmdQYW5lbFwiOjIsXCIuL3N1YnNjcmlwdGlvbkFQSS9zdWJzY3JpYmVhYmxlXCI6OH1dLDg6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKCl7dmFyIGU9dGhpcztlLl9zdWJzY3JpYnRpb25zPXt9LGUub249ZnVuY3Rpb24odCxuKXtlLl9zdWJzY3JpYnRpb25zW3RdfHwoZS5fc3Vic2NyaWJ0aW9uc1t0XT1bXSksZS5fc3Vic2NyaWJ0aW9uc1t0XS5wdXNoKG4pfSxlLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHQpe09iamVjdC5rZXlzKGUuX3N1YnNjcmlidGlvbnMpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gZS5fc3Vic2NyaWJ0aW9uc1t0XX0pLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIG49ZS5pbmRleE9mKHQpO24hPT0tMSYmZS5zcGxpY2UobiwxKX0pfSxlLnRyaWdnZXI9ZnVuY3Rpb24odCxuKXt2YXIgbz10aGlzO24gaW5zdGFuY2VvZiBBcnJheXx8KG49W25dKSxlLl9zdWJzY3JpYnRpb25zJiZlLl9zdWJzY3JpYnRpb25zW3RdJiZlLl9zdWJzY3JpYnRpb25zW3RdLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5hcHBseShvLG4pfSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG4uU3Vic2NyaWJhYmxlPW8sbltcImRlZmF1bHRcIl09b30se31dLDk6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ZnVuY3Rpb24gcihlKXtmdW5jdGlvbiB0KCl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtyZXR1cm4gdC5jbGFzc05hbWU9XCJ0cS11aS1zd2l0Y2gtYnV0dG9uc1wiKyhlLnZlcnRpY2FsT3JpZW50YXRpb24/XCItdmVydGljYWxcIjpcIlwiKSx0LmlubmVySFRNTD1uLm1hcmt1cCx0fWxbXCJkZWZhdWx0XCJdLmFwcGx5KHRoaXMpLGV8fChlPXt9KTt2YXIgbj10aGlzLG89ZS5zdGF0ZXN8fFtdO24ubWFya3VwPW8ubWFwKGZ1bmN0aW9uKHQsbil7cmV0dXJuJzxidXR0b24gaWQ9XCInK3QuaWQrJ1wiICcrKDAhPT1uP1wiXCI6XCJkaXNhYmxlZFwiKSsnIHRpdGxlPVwiJysodC5sYWJlbHx8dC5pZCkrJ1wiPlxcbiAgICAgICAgICAgICcrKGUudmVydGljYWxPcmllbnRhdGlvbiYmdC5pY29uPyc8c3BhbiBjbGFzcz1cIicrdC5pY29uKydcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+Jzp0LmxhYmVsfHx0LmlkKStcIlxcbiAgICAgICAgPC9idXR0b24+XCJ9KS5qb2luKFwiXCIpLG4ucm9vdEh0bWw9dCgpLG4uaWQ9ZS5pZHx8XCJzd2l0Y2hlci1cIithKyssbi5yb290SHRtbC5pZD1uLmlkO3ZhciByPW51bGw7by5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIG89bi5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiI1wiK2UuaWQpOzA9PT10JiYocj1vKSxvLm9uY2xpY2s9ZnVuY3Rpb24oKXtvLmRpc2FibGVkPSEwLHIuZGlzYWJsZWQ9ITEscj1vLG4udHJpZ2dlcihcInN0YXRlLWNoYW5nZWRcIixlLmlkKX19KSxuLnNldFN0YXRlPWZ1bmN0aW9uKGUpe3ZhciB0PW4ucm9vdEh0bWwucXVlcnlTZWxlY3RvcihcIiNcIitlKTt0JiZlIT09ci5pZCYmKHQuZGlzYWJsZWQ9ITAsci5kaXNhYmxlZD0hMSxyPXQpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxuLlN3aXRjaGVyPXI7dmFyIGk9ZShcIi4vc3Vic2NyaXB0aW9uQVBJL3N1YnNjcmliZWFibGVcIiksbD1vKGkpLGE9MDtuW1wiZGVmYXVsdFwiXT1yfSx7XCIuL3N1YnNjcmlwdGlvbkFQSS9zdWJzY3JpYmVhYmxlXCI6OH1dLDEwOltmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtmdW5jdGlvbiB0KCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtyZXR1cm4gZS5jbGFzc05hbWU9XCJ0cS11aS10YWItcGFuZWxcIixlLmlubmVySFRNTD1uLm1hcmt1cCxlfXZhciBuPXRoaXM7ZXx8KGU9e30pO3ZhciBvPWUudGFic3x8W107bi5tYXJrdXA9J1xcbiAgICAgICAgPGRpdiBjbGFzcz1cInRxLXVpLXRhYi1zd2l0Y2hlciB0cS11aS1zd2l0Y2gtYnV0dG9uc1wiPicrby5tYXAoZnVuY3Rpb24oZSx0KXtyZXR1cm4nXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIicrZS5pZCsnXCIgJysoMCE9PXQ/XCJcIjpcImRpc2FibGVkXCIpK1wiPlxcbiAgICAgICAgICAgICAgICBcIisoZS5sYWJlbHx8ZS5pZCkrXCJcXG4gICAgICAgICAgICA8L2J1dHRvbj4gIFxcbiAgICAgICAgXCJ9KS5qb2luKFwiXCIpK1wiPC9kaXY+XCIrby5tYXAoZnVuY3Rpb24oZSx0KXtyZXR1cm4nXFxuICAgICAgICAgICAgPGRpdiBpZD1cIicrZS5pZCsnUGFuZWxcIiBjbGFzcz1cInRxLXVpLXRhYi1wYW5lbF9wYWdlXCIgc3R5bGU9XCJkaXNwbGF5OiAnKygwPT09dD9cIlwiOlwibm9uZVwiKSsnXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cS11aS10YWItcGFuZWxfcGFnZV9ib2R5XCI+XFxuICAgICAgICAgICAgICAgICAgICAnKyhcInN0cmluZ1wiPT10eXBlb2YgZS5ib2R5P2UuYm9keTpcIlwiKStcIlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwifSkuam9pbihcIlwiKSxuLnJvb3RIdG1sPXQoKSxuLmlkPWUuaWR8fFwidGFiUGFuZWwtXCIrcixuLnJvb3RIdG1sLmlkPW4uaWQsby5tYXAoZnVuY3Rpb24oZSl7aWYoZS5ib2R5IGluc3RhbmNlb2YgT2JqZWN0JiZlLmJvZHkucm9vdEh0bWwpe3ZhciB0PW4ucm9vdEh0bWwucXVlcnlTZWxlY3RvcihcIiNcIitlLmlkK1wiUGFuZWwgLnRxLXVpLXRhYi1wYW5lbF9wYWdlX2JvZHlcIik7dC5hcHBlbmRDaGlsZChlLmJvZHkucm9vdEh0bWwpfX0pO3ZhciBpPW51bGw7by5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7dmFyIG89bi5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiI1wiK2UuaWQpLHI9bi5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiI1wiK2UuaWQrXCJQYW5lbFwiKTswPT09dCYmKGk9e3RhYkJ0bjpvLHRhYlBhbmVsOnJ9KSxvLm9uY2xpY2s9ZnVuY3Rpb24oKXtvLmRpc2FibGVkPSEwLHIuc3R5bGUuZGlzcGxheT1cIlwiLGkudGFiQnRuLmRpc2FibGVkPSExLGkudGFiUGFuZWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixpPXt0YWJCdG46byx0YWJQYW5lbDpyfX19KX1PYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxuLlRhYlBhbmVsPW87dmFyIHI9TWF0aC5mbG9vcig1MCpNYXRoLnJhbmRvbSgpKSsxO25bXCJkZWZhdWx0XCJdPW99LHt9XSwxMTpbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7ZnVuY3Rpb24gdChlKXt2YXIgdD12b2lkIDA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7bi5pbm5lckhUTUw9ZSx0PW4uZmlyc3RDaGlsZH1lbHNlIGlmKGUuaWQmJmUuaWNvbil7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtpZihvLmlubmVySFRNTD0nPGJ1dHRvbiBpZD1cIicrZS5pZCsnXCIgdGl0bGU9XCInKyhlLmxhYmVsfHxlLmlkKSsnXCIgY2xhc3M9XCJ0cS11aS10b29sYmFyX19idXR0b25cIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCInK2UuaWNvbisnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPicsdD1vLmZpcnN0Q2hpbGQsZS5pY29uMil7dmFyIHI9ITA7dC5vbmNsaWNrPWZ1bmN0aW9uKG4pe3QuaW5uZXJIVE1MPSc8c3BhbiBjbGFzcz1cIicrKHI/ZS5pY29uMjplLmljb24pKydcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+JyxlLmNhbGxiYWNrKG4pLHI9IXJ9fWVsc2UgdC5vbmNsaWNrPWUuY2FsbGJhY2t9ZWxzZSBlLnJvb3RIdG1sJiYodD1lLnJvb3RIdG1sKTtyZXR1cm4gdH1mdW5jdGlvbiBuKCl7dmFyIHQ9dm9pZCAwO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLmJhc2VFbGVtZW50P3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5iYXNlRWxlbWVudCk6XCJvYmplY3RcIj09PXIoZS5iYXNlRWxlbWVudCkmJih0PWUuYmFzZUVsZW1lbnQpLHQ/KHQuaW5uZXJIVE1MPW8ubWFya3VwLHQpOm51bGx9dmFyIG89dGhpcyxsPVwidG9vbGJhclJvb3RFbGVtZW50LVwiK2krKztpZihlfHwoZT17fSksby5tYXJrdXA9J1xcbiAgICAgICAgPGRpdiBpZD1cIicrbCsnXCIgY2xhc3M9XCJ0cS11aS10b29sYmFyXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgJyxvLnJvb3RIdG1sPW4oKSxvLmlkPWUuaWR8fFwidG9vbGJhci1cIitpKyssby5yb290SHRtbC5pZD1vLmlkLCFvLnJvb3RIdG1sKXRocm93IG5ldyBFcnJvcihcIlRoZSByb290IGVsZW1lbnQgaXMgbm90IHNwZWNpZmllZCFcIik7by5jb250YWluZXI9by5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiI1wiK2wpLG8ucHVzaFRvb2w9ZnVuY3Rpb24oZSl7dmFyIG49dChlKTtuJiYoXCJzdHJpbmdcIiE9dHlwZW9mIG4/YS5wdXNoKGUpOmEucHVzaCh7aWQ6XCJjdXN0b21odG1sXCIraSsrLG1hcmt1cDplLHJvb3RIdG1sOm59KSxvLmNvbnRhaW5lci5hcHBlbmRDaGlsZChuKSl9LG8uaW5zZXJ0VG9vbD1mdW5jdGlvbihlLG4pe3ZhciByPU1hdGgubWluKE1hdGgubWF4KG4sMCksYS5sZW5ndGgtMSksaT1vLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI1wiK2Fbcl0uaWQpO2lmKGkpe3ZhciBsPXQoZSk7bCYmKGEuc3BsaWNlKHIsMCxlKSxvLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUobCxpKSl9ZWxzZSBvLnB1c2hUb29sKGUpfSxvLnJlbW92ZVRvb2w9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplLmlkO2Euc3BsaWNlKGEuaW5kZXhPZihlKSwxKTt2YXIgbj1vLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI1wiK3QpO28uY29udGFpbmVyLnJlbW92ZUNoaWxkKG4pfTt2YXIgYT1bXTtlLnRvb2xzLmZvckVhY2goZnVuY3Rpb24oZSl7by5wdXNoVG9vbChlKX0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9O24uVG9vbGJhcj1vO3ZhciBpPU1hdGguZmxvb3IoNTAqTWF0aC5yYW5kb20oKSkrMTtuW1wiZGVmYXVsdFwiXT1vfSx7fV19LHt9LFs1XSkoNSl9KTsiLCIvKiFcbiAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3RlZmFucGVubmVyL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDMuMy4xXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsLkVTNlByb21pc2UgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9iamVjdE9yRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59XG5cbnZhciBfaXNBcnJheSA9IHVuZGVmaW5lZDtcbmlmICghQXJyYXkuaXNBcnJheSkge1xuICBfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcbn0gZWxzZSB7XG4gIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbn1cblxudmFyIGlzQXJyYXkgPSBfaXNBcnJheTtcblxudmFyIGxlbiA9IDA7XG52YXIgdmVydHhOZXh0ID0gdW5kZWZpbmVkO1xudmFyIGN1c3RvbVNjaGVkdWxlckZuID0gdW5kZWZpbmVkO1xuXG52YXIgYXNhcCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICBxdWV1ZVtsZW5dID0gY2FsbGJhY2s7XG4gIHF1ZXVlW2xlbiArIDFdID0gYXJnO1xuICBsZW4gKz0gMjtcbiAgaWYgKGxlbiA9PT0gMikge1xuICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICBpZiAoY3VzdG9tU2NoZWR1bGVyRm4pIHtcbiAgICAgIGN1c3RvbVNjaGVkdWxlckZuKGZsdXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVGbHVzaCgpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gc2V0U2NoZWR1bGVyKHNjaGVkdWxlRm4pIHtcbiAgY3VzdG9tU2NoZWR1bGVyRm4gPSBzY2hlZHVsZUZuO1xufVxuXG5mdW5jdGlvbiBzZXRBc2FwKGFzYXBGbikge1xuICBhc2FwID0gYXNhcEZuO1xufVxuXG52YXIgYnJvd3NlcldpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xudmFyIGJyb3dzZXJHbG9iYWwgPSBicm93c2VyV2luZG93IHx8IHt9O1xudmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBpc05vZGUgPSB0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICh7fSkudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4vLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxudmFyIGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuLy8gbm9kZVxuZnVuY3Rpb24gdXNlTmV4dFRpY2soKSB7XG4gIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N1am9qcy93aGVuL2lzc3Vlcy80MTAgZm9yIGRldGFpbHNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gIH07XG59XG5cbi8vIHZlcnR4XG5mdW5jdGlvbiB1c2VWZXJ0eFRpbWVyKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZlcnR4TmV4dChmbHVzaCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gIHZhciBpdGVyYXRpb25zID0gMDtcbiAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbm9kZS5kYXRhID0gaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDI7XG4gIH07XG59XG5cbi8vIHdlYiB3b3JrZXJcbmZ1bmN0aW9uIHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VTZXRUaW1lb3V0KCkge1xuICAvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBlczYtcHJvbWlzZSB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbiAgLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXG4gIHZhciBnbG9iYWxTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2xvYmFsU2V0VGltZW91dChmbHVzaCwgMSk7XG4gIH07XG59XG5cbnZhciBxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbmZ1bmN0aW9uIGZsdXNoKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG4gICAgdmFyIGFyZyA9IHF1ZXVlW2kgKyAxXTtcblxuICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICBxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICBxdWV1ZVtpICsgMV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBsZW4gPSAwO1xufVxuXG5mdW5jdGlvbiBhdHRlbXB0VmVydHgoKSB7XG4gIHRyeSB7XG4gICAgdmFyIHIgPSByZXF1aXJlO1xuICAgIHZhciB2ZXJ0eCA9IHIoJ3ZlcnR4Jyk7XG4gICAgdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICByZXR1cm4gdXNlVmVydHhUaW1lcigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHVzZVNldFRpbWVvdXQoKTtcbiAgfVxufVxuXG52YXIgc2NoZWR1bGVGbHVzaCA9IHVuZGVmaW5lZDtcbi8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG5pZiAoaXNOb2RlKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VOZXh0VGljaygpO1xufSBlbHNlIGlmIChCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTXV0YXRpb25PYnNlcnZlcigpO1xufSBlbHNlIGlmIChpc1dvcmtlcikge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTWVzc2FnZUNoYW5uZWwoKTtcbn0gZWxzZSBpZiAoYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSBhdHRlbXB0VmVydHgoKTtcbn0gZWxzZSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VTZXRUaW1lb3V0KCk7XG59XG5cbmZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cbiAgdmFyIHBhcmVudCA9IHRoaXM7XG5cbiAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaWYgKGNoaWxkW1BST01JU0VfSURdID09PSB1bmRlZmluZWQpIHtcbiAgICBtYWtlUHJvbWlzZShjaGlsZCk7XG4gIH1cblxuICB2YXIgX3N0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuICBpZiAoX3N0YXRlKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IF9hcmd1bWVudHNbX3N0YXRlIC0gMV07XG4gICAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGludm9rZUNhbGxiYWNrKF9zdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCBwYXJlbnQuX3Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9IGVsc2Uge1xuICAgIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbi8qKlxuICBgUHJvbWlzZS5yZXNvbHZlYCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIHJlc29sdmVkIHdpdGggdGhlXG4gIHBhc3NlZCBgdmFsdWVgLiBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgcmVzb2x2ZSgxKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyB2YWx1ZSA9PT0gMVxuICB9KTtcbiAgYGBgXG5cbiAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoMSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyB2YWx1ZSA9PT0gMVxuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCByZXNvbHZlXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBbnl9IHZhbHVlIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgZnVsZmlsbGVkIHdpdGggdGhlIGdpdmVuXG4gIGB2YWx1ZWBcbiovXG5mdW5jdGlvbiByZXNvbHZlKG9iamVjdCkge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcbiAgX3Jlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBQUk9NSVNFX0lEID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDE2KTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBQRU5ESU5HID0gdm9pZCAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xuXG52YXIgR0VUX1RIRU5fRVJST1IgPSBuZXcgRXJyb3JPYmplY3QoKTtcblxuZnVuY3Rpb24gc2VsZkZ1bGZpbGxtZW50KCkge1xuICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG59XG5cbmZ1bmN0aW9uIGNhbm5vdFJldHVybk93bigpIHtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGhlbihwcm9taXNlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBHRVRfVEhFTl9FUlJPUi5lcnJvciA9IGVycm9yO1xuICAgIHJldHVybiBHRVRfVEhFTl9FUlJPUjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgdHJ5IHtcbiAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgYXNhcChmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICB2YXIgZXJyb3IgPSB0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgX3JlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgfVxuICB9LCBwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gRlVMRklMTEVEKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgX3JlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHJldHVybiBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuJCQpIHtcbiAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IgJiYgdGhlbiQkID09PSB0aGVuICYmIG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gcmVzb2x2ZSkge1xuICAgIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGVuJCQgPT09IEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICB9IGVsc2UgaWYgKHRoZW4kJCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGVuJCQpKSB7XG4gICAgICBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbiQkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgX3JlamVjdChwcm9taXNlLCBzZWxmRnVsZmlsbG1lbnQoKSk7XG4gIH0gZWxzZSBpZiAob2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCBnZXRUaGVuKHZhbHVlKSk7XG4gIH0gZWxzZSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICB9XG5cbiAgcHVibGlzaChwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fc3RhdGUgPSBGVUxGSUxMRUQ7XG5cbiAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgIGFzYXAocHVibGlzaCwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3JlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByb21pc2UuX3N0YXRlID0gUkVKRUNURUQ7XG4gIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICBhc2FwKHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgdmFyIF9zdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gIHZhciBsZW5ndGggPSBfc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG4gIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgX3N1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgX3N1YnNjcmliZXJzW2xlbmd0aCArIEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgUkVKRUNURURdID0gb25SZWplY3Rpb247XG5cbiAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgYXNhcChwdWJsaXNoLCBwYXJlbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2gocHJvbWlzZSkge1xuICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdW5kZWZpbmVkLFxuICAgICAgY2FsbGJhY2sgPSB1bmRlZmluZWQsXG4gICAgICBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICB9XG4gIH1cblxuICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xufVxuXG5mdW5jdGlvbiBFcnJvck9iamVjdCgpIHtcbiAgdGhpcy5lcnJvciA9IG51bGw7XG59XG5cbnZhciBUUllfQ0FUQ0hfRVJST1IgPSBuZXcgRXJyb3JPYmplY3QoKTtcblxuZnVuY3Rpb24gdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICB0cnkge1xuICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgVFJZX0NBVENIX0VSUk9SLmVycm9yID0gZTtcbiAgICByZXR1cm4gVFJZX0NBVENIX0VSUk9SO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgdmFyIGhhc0NhbGxiYWNrID0gaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZCxcbiAgICAgIGVycm9yID0gdW5kZWZpbmVkLFxuICAgICAgc3VjY2VlZGVkID0gdW5kZWZpbmVkLFxuICAgICAgZmFpbGVkID0gdW5kZWZpbmVkO1xuXG4gIGlmIChoYXNDYWxsYmFjaykge1xuICAgIHZhbHVlID0gdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICBpZiAodmFsdWUgPT09IFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICB2YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIGNhbm5vdFJldHVybk93bigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBkZXRhaWw7XG4gICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIC8vIG5vb3BcbiAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgX3JlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgdHJ5IHtcbiAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSkge1xuICAgICAgX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBfcmVqZWN0KHByb21pc2UsIGUpO1xuICB9XG59XG5cbnZhciBpZCA9IDA7XG5mdW5jdGlvbiBuZXh0SWQoKSB7XG4gIHJldHVybiBpZCsrO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvbWlzZShwcm9taXNlKSB7XG4gIHByb21pc2VbUFJPTUlTRV9JRF0gPSBpZCsrO1xuICBwcm9taXNlLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgcHJvbWlzZS5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICBwcm9taXNlLl9zdWJzY3JpYmVycyA9IFtdO1xufVxuXG5mdW5jdGlvbiBFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcblxuICBpZiAoIXRoaXMucHJvbWlzZVtQUk9NSVNFX0lEXSkge1xuICAgIG1ha2VQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gIH1cblxuICBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMubGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICB0aGlzLl9lbnVtZXJhdGUoKTtcbiAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIF9yZWplY3QodGhpcy5wcm9taXNlLCB2YWxpZGF0aW9uRXJyb3IoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbn07XG5cbkVudW1lcmF0b3IucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgdmFyIF9pbnB1dCA9IHRoaXMuX2lucHV0O1xuXG4gIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLl9lYWNoRW50cnkoX2lucHV0W2ldLCBpKTtcbiAgfVxufTtcblxuRW51bWVyYXRvci5wcm90b3R5cGUuX2VhY2hFbnRyeSA9IGZ1bmN0aW9uIChlbnRyeSwgaSkge1xuICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gIHZhciByZXNvbHZlJCQgPSBjLnJlc29sdmU7XG5cbiAgaWYgKHJlc29sdmUkJCA9PT0gcmVzb2x2ZSkge1xuICAgIHZhciBfdGhlbiA9IGdldFRoZW4oZW50cnkpO1xuXG4gICAgaWYgKF90aGVuID09PSB0aGVuICYmIGVudHJ5Ll9zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgdGhpcy5fcmVzdWx0W2ldID0gZW50cnk7XG4gICAgfSBlbHNlIGlmIChjID09PSBQcm9taXNlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBjKG5vb3ApO1xuICAgICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBlbnRyeSwgX3RoZW4pO1xuICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHByb21pc2UsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl93aWxsU2V0dGxlQXQobmV3IGMoZnVuY3Rpb24gKHJlc29sdmUkJCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSQkKGVudHJ5KTtcbiAgICAgIH0pLCBpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fd2lsbFNldHRsZUF0KHJlc29sdmUkJChlbnRyeSksIGkpO1xuICB9XG59O1xuXG5FbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24gKHN0YXRlLCBpLCB2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICB9XG59O1xuXG5FbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24gKHByb21pc2UsIGkpIHtcbiAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gIHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KFJFSkVDVEVELCBpLCByZWFzb24pO1xuICB9KTtcbn07XG5cbi8qKlxuICBgUHJvbWlzZS5hbGxgIGFjY2VwdHMgYW4gYXJyYXkgb2YgcHJvbWlzZXMsIGFuZCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2hcbiAgaXMgZnVsZmlsbGVkIHdpdGggYW4gYXJyYXkgb2YgZnVsZmlsbG1lbnQgdmFsdWVzIGZvciB0aGUgcGFzc2VkIHByb21pc2VzLCBvclxuICByZWplY3RlZCB3aXRoIHRoZSByZWFzb24gb2YgdGhlIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIGJlIHJlamVjdGVkLiBJdCBjYXN0cyBhbGxcbiAgZWxlbWVudHMgb2YgdGhlIHBhc3NlZCBpdGVyYWJsZSB0byBwcm9taXNlcyBhcyBpdCBydW5zIHRoaXMgYWxnb3JpdGhtLlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuICBsZXQgcHJvbWlzZTIgPSByZXNvbHZlKDIpO1xuICBsZXQgcHJvbWlzZTMgPSByZXNvbHZlKDMpO1xuICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgLy8gVGhlIGFycmF5IGhlcmUgd291bGQgYmUgWyAxLCAyLCAzIF07XG4gIH0pO1xuICBgYGBcblxuICBJZiBhbnkgb2YgdGhlIGBwcm9taXNlc2AgZ2l2ZW4gdG8gYGFsbGAgYXJlIHJlamVjdGVkLCB0aGUgZmlyc3QgcHJvbWlzZVxuICB0aGF0IGlzIHJlamVjdGVkIHdpbGwgYmUgZ2l2ZW4gYXMgYW4gYXJndW1lbnQgdG8gdGhlIHJldHVybmVkIHByb21pc2VzJ3NcbiAgcmVqZWN0aW9uIGhhbmRsZXIuIEZvciBleGFtcGxlOlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuICBsZXQgcHJvbWlzZTIgPSByZWplY3QobmV3IEVycm9yKFwiMlwiKSk7XG4gIGxldCBwcm9taXNlMyA9IHJlamVjdChuZXcgRXJyb3IoXCIzXCIpKTtcbiAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oYXJyYXkpe1xuICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zIGJlY2F1c2UgdGhlcmUgYXJlIHJlamVjdGVkIHByb21pc2VzIVxuICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgIC8vIGVycm9yLm1lc3NhZ2UgPT09IFwiMlwiXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIGFsbFxuICBAc3RhdGljXG4gIEBwYXJhbSB7QXJyYXl9IGVudHJpZXMgYXJyYXkgb2YgcHJvbWlzZXNcbiAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIGFsbCBgcHJvbWlzZXNgIGhhdmUgYmVlblxuICBmdWxmaWxsZWQsIG9yIHJlamVjdGVkIGlmIGFueSBvZiB0aGVtIGJlY29tZSByZWplY3RlZC5cbiAgQHN0YXRpY1xuKi9cbmZ1bmN0aW9uIGFsbChlbnRyaWVzKSB7XG4gIHJldHVybiBuZXcgRW51bWVyYXRvcih0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xufVxuXG4vKipcbiAgYFByb21pc2UucmFjZWAgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoIGlzIHNldHRsZWQgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZVxuICBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBzZXR0bGUuXG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgbGV0IHByb21pc2UyID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDInKTtcbiAgICB9LCAxMDApO1xuICB9KTtcblxuICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAvLyByZXN1bHQgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgaXQgd2FzIHJlc29sdmVkIGJlZm9yZSBwcm9taXNlMVxuICAgIC8vIHdhcyByZXNvbHZlZC5cbiAgfSk7XG4gIGBgYFxuXG4gIGBQcm9taXNlLnJhY2VgIGlzIGRldGVybWluaXN0aWMgaW4gdGhhdCBvbmx5IHRoZSBzdGF0ZSBvZiB0aGUgZmlyc3RcbiAgc2V0dGxlZCBwcm9taXNlIG1hdHRlcnMuIEZvciBleGFtcGxlLCBldmVuIGlmIG90aGVyIHByb21pc2VzIGdpdmVuIHRvIHRoZVxuICBgcHJvbWlzZXNgIGFycmF5IGFyZ3VtZW50IGFyZSByZXNvbHZlZCwgYnV0IHRoZSBmaXJzdCBzZXR0bGVkIHByb21pc2UgaGFzXG4gIGJlY29tZSByZWplY3RlZCBiZWZvcmUgdGhlIG90aGVyIHByb21pc2VzIGJlY2FtZSBmdWxmaWxsZWQsIHRoZSByZXR1cm5lZFxuICBwcm9taXNlIHdpbGwgYmVjb21lIHJlamVjdGVkOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICB9LCAyMDApO1xuICB9KTtcblxuICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3Byb21pc2UgMicpKTtcbiAgICB9LCAxMDApO1xuICB9KTtcblxuICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAvLyBDb2RlIGhlcmUgbmV2ZXIgcnVuc1xuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIHByb21pc2UgMiBiZWNhbWUgcmVqZWN0ZWQgYmVmb3JlXG4gICAgLy8gcHJvbWlzZSAxIGJlY2FtZSBmdWxmaWxsZWRcbiAgfSk7XG4gIGBgYFxuXG4gIEFuIGV4YW1wbGUgcmVhbC13b3JsZCB1c2UgY2FzZSBpcyBpbXBsZW1lbnRpbmcgdGltZW91dHM6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBQcm9taXNlLnJhY2UoW2FqYXgoJ2Zvby5qc29uJyksIHRpbWVvdXQoNTAwMCldKVxuICBgYGBcblxuICBAbWV0aG9kIHJhY2VcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FycmF5fSBwcm9taXNlcyBhcnJheSBvZiBwcm9taXNlcyB0byBvYnNlcnZlXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHdoaWNoIHNldHRsZXMgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZSBmaXJzdCBwYXNzZWRcbiAgcHJvbWlzZSB0byBzZXR0bGUuXG4qL1xuZnVuY3Rpb24gcmFjZShlbnRyaWVzKSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgaWYgKCFpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAoXywgcmVqZWN0KSB7XG4gICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICBgUHJvbWlzZS5yZWplY3RgIHJldHVybnMgYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIHBhc3NlZCBgcmVhc29uYC5cbiAgSXQgaXMgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyBDb2RlIGhlcmUgZG9lc24ndCBydW4gYmVjYXVzZSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCFcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcbiAgfSk7XG4gIGBgYFxuXG4gIEluc3RlYWQgb2Ygd3JpdGluZyB0aGUgYWJvdmUsIHlvdXIgY29kZSBub3cgc2ltcGx5IGJlY29tZXMgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdXSE9PUFMnKSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyBDb2RlIGhlcmUgZG9lc24ndCBydW4gYmVjYXVzZSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCFcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgcmVqZWN0XG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBbnl9IHJlYXNvbiB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aC5cbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgZ2l2ZW4gYHJlYXNvbmAuXG4qL1xuZnVuY3Rpb24gcmVqZWN0KHJlYXNvbikge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcbiAgX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gbmVlZHNSZXNvbHZlcigpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xufVxuXG5mdW5jdGlvbiBuZWVkc05ldygpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbn1cblxuLyoqXG4gIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gIFRlcm1pbm9sb2d5XG4gIC0tLS0tLS0tLS0tXG5cbiAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgQmFzaWMgVXNhZ2U6XG4gIC0tLS0tLS0tLS0tLVxuXG4gIGBgYGpzXG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gb24gc3VjY2Vzc1xuICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgLy8gb24gZmFpbHVyZVxuICAgIHJlamVjdChyZWFzb24pO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBvbiBmdWxmaWxsbWVudFxuICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAvLyBvbiByZWplY3Rpb25cbiAgfSk7XG4gIGBgYFxuXG4gIEFkdmFuY2VkIFVzYWdlOlxuICAtLS0tLS0tLS0tLS0tLS1cblxuICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gIGBgYGpzXG4gIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgIC8vIG9uIHJlamVjdGlvblxuICB9KTtcbiAgYGBgXG5cbiAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICBgYGBqc1xuICBQcm9taXNlLmFsbChbXG4gICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9KTtcbiAgYGBgXG5cbiAgQGNsYXNzIFByb21pc2VcbiAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAY29uc3RydWN0b3JcbiovXG5mdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gIHRoaXNbUFJPTUlTRV9JRF0gPSBuZXh0SWQoKTtcbiAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgaWYgKG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIG5lZWRzUmVzb2x2ZXIoKTtcbiAgICB0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSA/IGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKSA6IG5lZWRzTmV3KCk7XG4gIH1cbn1cblxuUHJvbWlzZS5hbGwgPSBhbGw7XG5Qcm9taXNlLnJhY2UgPSByYWNlO1xuUHJvbWlzZS5yZXNvbHZlID0gcmVzb2x2ZTtcblByb21pc2UucmVqZWN0ID0gcmVqZWN0O1xuUHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gc2V0U2NoZWR1bGVyO1xuUHJvbWlzZS5fc2V0QXNhcCA9IHNldEFzYXA7XG5Qcm9taXNlLl9hc2FwID0gYXNhcDtcblxuUHJvbWlzZS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBQcm9taXNlLFxuXG4gIC8qKlxuICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIENoYWluaW5nXG4gICAgLS0tLS0tLS1cbiAgXG4gICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgfSk7XG4gIFxuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgIH0pO1xuICAgIGBgYFxuICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBBc3NpbWlsYXRpb25cbiAgICAtLS0tLS0tLS0tLS1cbiAgXG4gICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgU2ltcGxlIEV4YW1wbGVcbiAgICAtLS0tLS0tLS0tLS0tLVxuICBcbiAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG4gIFxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcmVzdWx0O1xuICBcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfVxuICAgIGBgYFxuICBcbiAgICBFcnJiYWNrIEV4YW1wbGVcbiAgXG4gICAgYGBganNcbiAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBQcm9taXNlIEV4YW1wbGU7XG4gIFxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAtLS0tLS0tLS0tLS0tLVxuICBcbiAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG4gIFxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgYXV0aG9yLCBib29rcztcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9XG4gICAgYGBgXG4gIFxuICAgIEVycmJhY2sgRXhhbXBsZVxuICBcbiAgICBgYGBqc1xuICBcbiAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG4gIFxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcbiAgXG4gICAgfVxuICBcbiAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9XG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIFByb21pc2UgRXhhbXBsZTtcbiAgXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGZpbmRBdXRob3IoKS5cbiAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEBtZXRob2QgdGhlblxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuICB0aGVuOiB0aGVuLFxuXG4gIC8qKlxuICAgIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuICBcbiAgICBgYGBqc1xuICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICAgIH1cbiAgXG4gICAgLy8gc3luY2hyb25vdXNcbiAgICB0cnkge1xuICAgICAgZmluZEF1dGhvcigpO1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH1cbiAgXG4gICAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQG1ldGhvZCBjYXRjaFxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICovXG4gICdjYXRjaCc6IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICB2YXIgbG9jYWwgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbG9jYWwgPSBnbG9iYWw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbG9jYWwgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cbiAgICBpZiAoUCkge1xuICAgICAgICB2YXIgcHJvbWlzZVRvU3RyaW5nID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb21pc2VUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChQLnJlc29sdmUoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIHNpbGVudGx5IGlnbm9yZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlVG9TdHJpbmcgPT09ICdbb2JqZWN0IFByb21pc2VdJyAmJiAhUC5jYXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbC5Qcm9taXNlID0gUHJvbWlzZTtcbn1cblxucG9seWZpbGwoKTtcbi8vIFN0cmFuZ2UgY29tcGF0Li5cblByb21pc2UucG9seWZpbGwgPSBwb2x5ZmlsbDtcblByb21pc2UuUHJvbWlzZSA9IFByb21pc2U7XG5cbnJldHVybiBQcm9taXNlO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXM2LXByb21pc2UubWFwIiwiLyohIEZpbGVTYXZlci5qcyB2MS4zLjZcbiAqXG4gKiBBIHNhdmVBcygpIEZpbGVTYXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBCeSBUcmF2aXMgQ2xhcmtlLCBodHRwczovL3RyYXZpc21jbGFya2UuY29tXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKlxuICogTGljZW5zZTogTUlUIChodHRwczovL2dpdGh1Yi5jb20vY2xhcmtldG0vRmlsZVNhdmVyLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXG4gKi9cblxuOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcm9vdC5kb2N1bWVudCA/IGZhY3Rvcnkocm9vdCwgdHJ1ZSkgOiBmdW5jdGlvbiAodykge1xuICAgICAgICAgICAgaWYgKCF3LmRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmlsZVNhdmVyIHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5KHcpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3Rvcnkocm9vdCk7XG4gICAgfVxufSh3aW5kb3cgfHwgdGhpcywgZnVuY3Rpb24gKHdpbmRvdywgbm9HbG9iYWwpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIC8vIElFIDwxMCBpcyBleHBsaWNpdGx5IHVuc3VwcG9ydGVkXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgWzEtOV1cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXJcbiAgICAgICAgICAgIGRvYyA9IHdpbmRvdy5kb2N1bWVudFxuICAgICAgICAgICAgLy8gb25seSBnZXQgVVJMIHdoZW4gbmVjZXNzYXJ5IGluIGNhc2UgQmxvYi5qcyBoYXNuJ3Qgb3ZlcnJpZGRlbiBpdCB5ZXRcbiAgICAgICAgICAgICwgZ2V0X1VSTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICwgc2F2ZV9saW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpXG4gICAgICAgICAgICAsIGNhbl91c2Vfc2F2ZV9saW5rID0gXCJkb3dubG9hZFwiIGluIHNhdmVfbGlua1xuICAgICAgICAgICAgLCBjbGljayA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKTtcbiAgICAgICAgICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLCBpc19zYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgd2luZG93LnNhZmFyaVxuICAgICAgICAgICAgLCBpc19jaHJvbWVfaW9zID0gL0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICAgICAgICAsIHRocm93X291dHNpZGUgPSBmdW5jdGlvbiAoZXgpIHtcbiAgICAgICAgICAgICAgICAod2luZG93LnNldEltbWVkaWF0ZSB8fCB3aW5kb3cuc2V0VGltZW91dCkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICwgZm9yY2Vfc2F2ZWFibGVfdHlwZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJcbiAgICAgICAgICAgIC8vIHRoZSBCbG9iIEFQSSBpcyBmdW5kYW1lbnRhbGx5IGJyb2tlbiBhcyB0aGVyZSBpcyBubyBcImRvd25sb2FkZmluaXNoZWRcIiBldmVudCB0byBzdWJzY3JpYmUgdG9cbiAgICAgICAgICAgICwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0ID0gMTAwMCAqIDQwIC8vIGluIG1zXG4gICAgICAgICAgICAsIHJldm9rZSA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldm9rZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZSA9PT0gXCJzdHJpbmdcIikgeyAvLyBmaWxlIGlzIGFuIG9iamVjdCBVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldF9VUkwoKS5yZXZva2VPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJldm9rZXIsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAsIGRpc3BhdGNoID0gZnVuY3Rpb24gKGZpbGVzYXZlciwgZXZlbnRfdHlwZXMsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnRfdHlwZXMgPSBbXS5jb25jYXQoZXZlbnRfdHlwZXMpO1xuICAgICAgICAgICAgICAgIHZhciBpID0gZXZlbnRfdHlwZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZmlsZXNhdmVyW1wib25cIiArIGV2ZW50X3R5cGVzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoZmlsZXNhdmVyLCBldmVudCB8fCBmaWxlc2F2ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvd19vdXRzaWRlKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICwgYXV0b19ib20gPSBmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgICAgICAgIC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXG4gICAgICAgICAgICAgICAgLy8gbm90ZTogeW91ciBicm93c2VyIHdpbGwgYXV0b21hdGljYWxseSBjb252ZXJ0IFVURi0xNiBVK0ZFRkYgdG8gRUYgQkIgQkZcbiAgICAgICAgICAgICAgICBpZiAoL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYmxvYi50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoW1N0cmluZy5mcm9tQ2hhckNvZGUoMHhGRUZGKSwgYmxvYl0sIHt0eXBlOiBibG9iLnR5cGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAsIEZpbGVTYXZlciA9IGZ1bmN0aW9uIChibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuICAgICAgICAgICAgICAgIGlmICghbm9fYXV0b19ib20pIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBGaXJzdCB0cnkgYS5kb3dubG9hZCwgdGhlbiB3ZWIgZmlsZXN5c3RlbSwgdGhlbiBvYmplY3QgVVJMc1xuICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgICBmaWxlc2F2ZXIgPSB0aGlzXG4gICAgICAgICAgICAgICAgICAgICwgdHlwZSA9IGJsb2IudHlwZVxuICAgICAgICAgICAgICAgICAgICAsIGZvcmNlID0gdHlwZSA9PT0gZm9yY2Vfc2F2ZWFibGVfdHlwZVxuICAgICAgICAgICAgICAgICAgICAsIG9iamVjdF91cmxcbiAgICAgICAgICAgICAgICAgICAgLCBkaXNwYXRjaF9hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmaWxlc2F2ZXIsIFwid3JpdGVzdGFydCBwcm9ncmVzcyB3cml0ZSB3cml0ZWVuZFwiLnNwbGl0KFwiIFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gb24gYW55IGZpbGVzeXMgZXJyb3JzIHJldmVydCB0byBzYXZpbmcgd2l0aCBvYmplY3QgVVJMc1xuICAgICAgICAgICAgICAgICAgICAsIGZzX2Vycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChpc19jaHJvbWVfaW9zIHx8IChmb3JjZSAmJiBpc19zYWZhcmkpKSAmJiB3aW5kb3cuRmlsZVJlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgdXJsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBpc19jaHJvbWVfaW9zID8gcmVhZGVyLnJlc3VsdCA6IHJlYWRlci5yZXN1bHQucmVwbGFjZSgvXmRhdGE6W147XSo7LywgJ2RhdGE6YXR0YWNobWVudC9maWxlOycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9wdXAgPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwb3B1cCkgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHVuZGVmaW5lZDsgLy8gcmVsZWFzZSByZWZlcmVuY2UgYmVmb3JlIGRpc3BhdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoX2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBjcmVhdGUgbW9yZSBvYmplY3QgVVJMcyB0aGFuIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmplY3RfdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGVuZWQgPSB3aW5kb3cub3BlbihvYmplY3RfdXJsLCBcIl9ibGFua1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBsZSBkb2VzIG5vdCBhbGxvdyB3aW5kb3cub3Blbiwgc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L3NhZmFyaS9kb2N1bWVudGF0aW9uL1Rvb2xzL0NvbmNlcHR1YWwvU2FmYXJpRXh0ZW5zaW9uR3VpZGUvV29ya2luZ3dpdGhXaW5kb3dzYW5kVGFicy9Xb3JraW5nd2l0aFdpbmRvd3NhbmRUYWJzLmh0bWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBvYmplY3RfdXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaF9hbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldm9rZShvYmplY3RfdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblxuICAgICAgICAgICAgICAgIGlmIChjYW5fdXNlX3NhdmVfbGluaykge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlX2xpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soc2F2ZV9saW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoX2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2b2tlKG9iamVjdF91cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmc19lcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLCBGU19wcm90byA9IEZpbGVTYXZlci5wcm90b3R5cGVcbiAgICAgICAgICAgICwgc2F2ZUFzID0gZnVuY3Rpb24gKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWxlU2F2ZXIoYmxvYiwgbmFtZSB8fCBibG9iLm5hbWUgfHwgXCJkb3dubG9hZFwiLCBub19hdXRvX2JvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIC8vIElFIDEwKyAobmF0aXZlIHNhdmVBcylcbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgICAgICAgIHNhdmVBcyA9IGZ1bmN0aW9uIChibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lIHx8IGJsb2IubmFtZSB8fCBcImRvd25sb2FkXCI7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5vX2F1dG9fYm9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2IgPSBhdXRvX2JvbShibG9iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJsb2IsIG5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIEZTX3Byb3RvLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgICBGU19wcm90by5yZWFkeVN0YXRlID0gRlNfcHJvdG8uSU5JVCA9IDA7XG4gICAgICAgIEZTX3Byb3RvLldSSVRJTkcgPSAxO1xuICAgICAgICBGU19wcm90by5ET05FID0gMjtcblxuICAgICAgICBGU19wcm90by5lcnJvciA9XG4gICAgICAgICAgICBGU19wcm90by5vbndyaXRlc3RhcnQgPVxuICAgICAgICAgICAgICAgIEZTX3Byb3RvLm9ucHJvZ3Jlc3MgPVxuICAgICAgICAgICAgICAgICAgICBGU19wcm90by5vbndyaXRlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIEZTX3Byb3RvLm9uYWJvcnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZTX3Byb3RvLm9uZXJyb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGU19wcm90by5vbndyaXRlZW5kID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgICAgICBkZWZpbmUoXCJmaWxlLXNhdmVyanNcIiwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F2ZUFzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG5vR2xvYmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LnNhdmVBcyA9IHNhdmVBcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2F2ZUFzO1xuICAgIH1cbikpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcblxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBsaXN0ID0gdGhpcy5tYXBbbmFtZV1cbiAgICBpZiAoIWxpc3QpIHtcbiAgICAgIGxpc3QgPSBbXVxuICAgICAgdGhpcy5tYXBbbmFtZV0gPSBsaXN0XG4gICAgfVxuICAgIGxpc3QucHVzaCh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgICByZXR1cm4gdmFsdWVzID8gdmFsdWVzWzBdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSB8fCBbXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IFtub3JtYWxpemVWYWx1ZSh2YWx1ZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLm1hcCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB0aGlzLm1hcFtuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpXG4gICAgICB9LCB0aGlzKVxuICAgIH0sIHRoaXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy51cmwgPSBpbnB1dFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KCdcXHJcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIENPTE9SX0NMQVNTX0NPVU5UOiAxMCxcbiAgICBDT0xPUl9DTEFTU19NQVA6IHtcbiAgICAgICAgJ3N1YkNsYXNzT2YnOiAnY29sb3ItY2xhc3Mtc3ViLWNsYXNzLW9mJyxcbiAgICAgICAgJ3R5cGUnOiAnY29sb3ItY2xhc3MtdHlwZSdcbiAgICB9XG59O1xuXG4vKipcbiAqIENvbG9yQ29uZmlndXJhdG9yLlxuICogR2VuZXJhdGUgY29sb3IgdGVtcGxhdGVzIGZvciBncmFwaCBlbGVtZW50cy5cbiAqXG4gKiBDb25zdHJ1Y3RvciBwYXJhbWV0ZXJzOlxuICogICAgICBfb3B0aW9uczoge1xuICogICAgICAgICAgREVGQVVMVF9QQUdFX1NJWkU6IG51bWJlciwgXG4gKiAgICAgICAgICBDT0xPUl9DTEFTU19DT1VOVDogbnVtYmVyLCBcbiAqICAgICAgICAgIE1BWF9MQUJFTF9MRU5HVEg6IG51bWJlciwgXG4gKiAgICAgICAgICBDT0xfT0ZGU0VUOiBudW1iZXIsIFxuICogICAgICAgICAgUk9XX09GRlNFVDogbnVtYmVyLCBcbiAqICAgICAgICAgIENST1NTX05PREVfT0ZGU0VUOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MT1JfQ0xBU1NfTUFQOiB7XG4gKiAgICAgICAgICAgICAgJ3N1YkNsYXNzT2YnOiBzdHJpbmcsIFxuICogICAgICAgICAgICAgICd0eXBlJzogc3RyaW5nXG4gKiAgICAgICAgICB9XG4gKiAgICAgIH1cbiAqXG4gKiBQdWJsaWMgbWV0aG9kczpcbiAqICAgICAgZ2V0Q29sb3JUZW1wbGF0ZSgpOiB7IGNvbG9yOnN0cmluZywgY29sb3JGaWxsOnN0cmluZywgY29sb3JGb250OnN0cmluZywgY29sb3JGaWxsRm9jdXNlZDpzdHJpbmcgfVxuICovXG5mdW5jdGlvbiBDb2xvckNvbmZpZ3VyYXRvciAoX29wdGlvbnMpIHtcbiAgICB2YXIgQ09MT1JfQ0xBU1NfQ09VTlQgPSAoX29wdGlvbnMgJiYgX29wdGlvbnMuQ09MT1JfQ0xBU1NfQ09VTlQgIT0gdW5kZWZpbmVkID8gX29wdGlvbnMuQ09MT1JfQ0xBU1NfQ09VTlQgOiBkZWZhdWx0T3B0aW9ucy5DT0xPUl9DTEFTU19DT1VOVCk7XG4gICAgdmFyIF9jb2xvckNsYXNzTWFwID0gKF9vcHRpb25zICYmIF9vcHRpb25zLkNPTE9SX0NMQVNTX01BUCA/IF9vcHRpb25zLkNPTE9SX0NMQVNTX01BUCA6IGRlZmF1bHRPcHRpb25zLkNPTE9SX0NMQVNTX01BUCk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIF9pbmRleCA9IDE7XG5cbiAgICBmdW5jdGlvbiBfaW5pdCAoKSB7XG4gICAgICAgIF9pbmRleCA9IE1hdGgucm91bmQoMSArIE1hdGgucmFuZG9tKCkgKiAoQ09MT1JfQ0xBU1NfQ09VTlQgLSAxKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjb2xvciB0ZW1wbGF0ZSBmb3IgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBpZCBvZiBlbGVtZW50XG4gICAgICogQHJldHVybnMge09iamVjdH0gQ29sb3IgdGVtcGxhdGVcbiAgICAgKi9cbiAgICBzZWxmLmdldENvbG9yQ2xhc3NGb3JFbGVtZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlkID0gdmVyaWZ5SWQoaWQpO1xuICAgICAgICBpZiAoIV9jb2xvckNsYXNzTWFwW2lkXSkgX2NvbG9yQ2xhc3NNYXBbaWRdID0gX2dldE5leHRDbGFzcygpO1xuICAgICAgICByZXR1cm4gX2NvbG9yQ2xhc3NNYXBbaWRdO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB2ZXJpZnlJZCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGlkLnJlcGxhY2UoL1teXFx3XFxkXS9naSwgJy0nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0TmV4dENsYXNzICgpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICdjb2xvci1jbGFzcy0nICsgX2luZGV4Kys7XG4gICAgICAgIGlmIChfaW5kZXggPiBDT0xPUl9DTEFTU19DT1VOVCkgX2luZGV4ID0gMTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBfaW5pdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yQ29uZmlndXJhdG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnJlcXVpcmUoJ3doYXR3Zy1mZXRjaCcpO1xuXG52YXIgREVGQVVMVF9TRVJWRVJfVVJMID0gJ2h0dHA6Ly92aWV3LmVkZy50b3BicmFpZC5uZXQvZWRnL3RibC9zd3AnO1xudmFyIERFRkFVTFRfQkFTRSA9ICdodHRwOi8vcmRmZXgub3JnL3dpdGhJbXBvcnRzP3VyaT11cm46eC1ldm4tcHViOmZpYm8nO1xudmFyIERFRkFVTFRfVklFV19DTEFTUyA9ICdzd2E6TmVpZ2hib3JHcmFtUHJvcGVydGllc0RhdGFTZXJ2aWNlJztcblxuLyoqXG4gKiBEYXRhUHJvdmlkZXIuXG4gKiBQcm92aWRlcyBkYXRhIGZvciB0aGUgZ3JhcGguXG4gKlxuICogQ29uc3RydWN0b3IgcGFyYW1ldGVyczpcbiAqICAgICAgc2VydmVyVVJMOiBzdHJpbmdcbiAqICAgICAgYmFzZTogc3RyaW5nXG4gKiAgICAgIHZpZXdDbGFzczogc3RyaW5nXG4gKlxuICogUHVibGljIG1ldGhvZHM6XG4gKiAgICAgIGdldEdyYXBoRGF0YShmb2N1c05vZGU6c3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s6IGZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrOiBmdW5jdGlvbik6IHZvaWRcbiAqL1xuZnVuY3Rpb24gRGF0YVByb3ZpZGVyIChzZXJ2ZXJVUkwsIGJhc2UsIHZpZXdDbGFzcykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIFByaXZhdGUgZnVuY3Rpb24gd2hpY2ggdXNlZCBhcyBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHNlcnZlclVSTCAtIFVSTCBvZiB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBiYXNlIC0gQmFzZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gdmlld0NsYXNzIC0gVmlldyBjbGFzc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pbml0aWFsaXplKHNlcnZlclVSTCwgYmFzZSwgdmlld0NsYXNzKSB7XG4gICAgICAgIGlmICghc2VydmVyVVJMKSBzZXJ2ZXJVUkwgPSBERUZBVUxUX1NFUlZFUl9VUkw7XG4gICAgICAgIGlmICghYmFzZSkgYmFzZSA9IERFRkFVTFRfQkFTRTtcbiAgICAgICAgaWYgKCF2aWV3Q2xhc3MpIHZpZXdDbGFzcyA9IERFRkFVTFRfVklFV19DTEFTUztcblxuICAgICAgICBzZWxmLnZpZXdDbGFzcyA9IHZpZXdDbGFzcztcbiAgICAgICAgc2VsZi5iYXNlID0gYmFzZTtcbiAgICAgICAgc2VsZi5zZXJ2ZXJVUkwgPSBzZXJ2ZXJVUkw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYW5kIHJldHVybnMgZGF0YS5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGZvY3VzTm9kZSAtIEZvY3VzZSBub2RlIGlkXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IHN1Y2Nlc3NDYWxsYmFjayAtIEhhbmRsZXJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gZXJyb3JDYWxsYmFjayAtIEhhbmRsZXJcbiAgICAgKi9cbiAgICBzZWxmLmdldEdyYXBoRGF0YSA9IGZ1bmN0aW9uIChmb2N1c05vZGUsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuXG4gICAgICAgIGlmICghdmlld0NsYXNzKSB2aWV3Q2xhc3MgPSBERUZBVUxUX1ZJRVdfQ0xBU1M7XG5cbiAgICAgICAgdmFyIHVybCA9IHNlbGYuc2VydmVyVVJMICsgJz8nICtcbiAgICAgICAgICAgICdfYmFzZT0nICsgc2VsZi5iYXNlICsgJyYnICtcbiAgICAgICAgICAgICdfdmlld0NsYXNzPScgKyBzZWxmLnZpZXdDbGFzcyArICcmJyArXG4gICAgICAgICAgICAnZm9jdXNOb2RlPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9jdXNOb2RlKTtcbiAgICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ2RlZmF1bHQnXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhfZmlsdGVyRGF0YShyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSXQgaXMgZmlsdGVyaW5nIHJlc3BvbnNlIGRhdGEuIEl0J3MgbmVlZGVkIHRvIHJlbW92ZSBkdXBsaWNhdGUgbm9kZXMuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIC0gRGF0YVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IENvcnJlY3RlZCBkYXRhIVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9maWx0ZXJEYXRhIChkYXRhKSB7XG4gICAgICAgIHZhciBub2RlcyA9IGRhdGEubm9kZXM7XG5cbiAgICAgICAgdmFyIG5ld05vZGVzID0gW107XG5cbiAgICAgICAgdmFyIGZpbmROb2RlQnlJZCA9IGZ1bmN0aW9uIChub2RlSWQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3Tm9kZXNbaV0uaWQgPT09IG5vZGVJZCkgcmV0dXJuIG5ld05vZGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIGJhc2VOb2RlID0gZmluZE5vZGVCeUlkKG5vZGUuaWQpO1xuICAgICAgICAgICAgaWYgKCFiYXNlTm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2FuRXhwYW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkYXRhLm5vZGVzID0gbmV3Tm9kZXM7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgXG4gICAgLy8gSGVyZSB3ZSBjYWxsIGNvbnN0cnVjdG9yIGFmdGVyIGRlZmluaW5nIGFsbCBmdW5jdGlvbnNcbiAgICBfaW5pdGlhbGl6ZS5jYWxsKHNlbGYsIHNlcnZlclVSTCwgYmFzZSwgdmlld0NsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhUHJvdmlkZXI7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGpvaW50ID0gcmVxdWlyZSgncmFwcGlkJyk7XG52YXIgdW5pcXVlSWQgPSByZXF1aXJlKCdsb2Rhc2gnKS51bmlxdWVJZDtcbnZhciBjbG9uZURlZXAgPSByZXF1aXJlKCdsb2Rhc2gnKS5jbG9uZURlZXA7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHsgRUxFTUVOVF9XSURUSDogMTMwLCBFTEVNRU5UX0hFSUdIVDogMzAsIEZVTExfTk9ERV9MQUJFTFM6IGZhbHNlIH07XG4vKipcbiAqIE5vZGUgb2YgdGhlIGdyYXBoLlxuICogSXQncyBhIG1vZGVsIG9mIGEgZ3JhcGggZWxlbWVudC5cbiAqXG4gKiBDb25zdHJ1Y3RvciBwYXJhbWV0ZXJzXG4gKiAgICAgIGRhdGFNb2RlbDoge1xuICogICAgICAgICAgdHlwZUlkOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDogc3RyaW5nLFxuICogICAgICAgICAgY29sb3JDbGFzczogc3RyaW5nLFxuICogICAgICAgICAgZnVsbE5vZGVMYWJlbHM6IGJvb2xlYW4sXG4gKiAgICAgIH1cbiAqICAgICAgX29wdGlvbnM6IHtcbiAqICAgICAgICAgIERFRkFVTFRfUEFHRV9TSVpFOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MT1JfQ0xBU1NfQ09VTlQ6IG51bWJlciwgXG4gKiAgICAgICAgICBNQVhfTEFCRUxfTEVOR1RIOiBudW1iZXIsXG4gKiAgICAgICAgICBDT0xfT0ZGU0VUOiBudW1iZXIsIFxuICogICAgICAgICAgUk9XX09GRlNFVDogbnVtYmVyLCBcbiAqICAgICAgICAgIENST1NTX05PREVfT0ZGU0VUOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MT1JfQ0xBU1NfTUFQOiB7XG4gKiAgICAgICAgICAgICAgJ3N1YkNsYXNzT2YnOiBzdHJpbmcsIFxuICogICAgICAgICAgICAgICd0eXBlJzogc3RyaW5nXG4gKiAgICAgICAgICB9XG4gKiAgICAgIH1cbiAqXG4gKiBQdWJsaWMgcHJvcGVydGllczpcbiAqICAgICAgZGF0YU1vZGVsOiBhbnlcbiAqICAgICAgcGFyZW50RWRnZTogRWRnZSA9IG51bGxcbiAqICAgICAgX2VkZ2VzOiBFZGdlW10gPSBbXVxuICogICAgICBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlXG4gKiAgICAgIGN1c3RvbVBvc2l0aW9uOiBib29sZWFuID0gZmFsc2VcbiAqICAgICAgaGFzUG9zaXRpb246IGJvb2xlYW4gPSBmYWxzZVxuICogICAgICBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZVxuICogICAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gKiAgICAgIHR5cGVJZDogc3RyaW5nXG4gKiAgICAgIGZ1bGxMYWJlbDogYm9vbGVhbiA9IGZhbHNlXG4gKlxuICogUHVibGljIG1ldGhvZHM6XG4gKiAgICAgIHJlaW5pdCgpOiB2b2lkXG4gKiAgICAgIHNldExheW91dChsYXlvdXQ6IEdyYXBoTGF5b3V0KTogdm9pZFxuICogICAgICBpc1Jvb3ROb2RlKCk6IGJvb2xlYW5cbiAqICAgICAgbm9kZVBsYWNlbWVudCgpOiBib29sZWFuXG4gKiAgICAgIGdldFNpemUoKTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn1cbiAqICAgICAgZ2V0UGFyZW50KCk6IE5vZGVcbiAqICAgICAgZ2V0UHJldk5vZGUoKTogTm9kZSB8IENyb3NzTm9kZVxuICogICAgICBoYXNDaGlsZHJlbigpOiBib29sZWFuXG4qICAgICAgIGdldENoaWxkcmVuKGV4cGFuZENyb3NzTm9kZXM/OiBib29sZWFuKTogKE5vZGUgfCBDcm9zc05vZGUpW11cbiAqICAgICAgZ2V0VmlzaWJsZUNoaWxkcmVuKGV4cGFuZENyb3NzTm9kZXM/OiBib29sZWFuKTogKE5vZGUgfCBDcm9zc05vZGUpW11cbiAqICAgICAgcHVzaEVkZ2UoZWRnZTogRWRnZSk6IHZvaWRlXG4gKiAgICAgIGdldEVkZ2VCeVR5cGUodHlwZUlkOiBzdHJpbmcpXG4gKiAgICAgIGRpc2Nvbm5lY3RFZGdlKGVkZ2U6IEVkZ2UpOiB2b2lkXG4gKiAgICAgIHNldFBhZ2luYXRpb24ocGFnaW5hdGlvbjogUGFnaW5hdGlvbik6IHZvaWRcbiAqICAgICAgZ2V0UGFnaW5hdGlvbigpOiBQYWdpbmF0aW9uXG4gKiAgICAgIHNvcnRFZGdlcyhjb21wYXJhdG9yOiBmdW5jdGlvbik6IHZvaWRcbiAqICAgICAgZ2V0RGlyZWN0aW9uKCk6IGJvb2xlYW5cbiAqICAgICAgZ2V0RGlyZWN0aW9uUmVsYXRpdmVUb05vZGUocmVsYXRpdmVOb2RlOiBOb2RlKTogYm9vbGVhblxuICogICAgICBzZXRDb2xvckNsYXNzKGNvbG9yQ2xhc3M6IHN0cmluZyk6IHZvaWRcbiAqICAgICAgZ2V0Q29sb3JDbGFzcygpOiBzdHJpbmdcbiAqICAgICAgYmFkUG9zaXRpb24odmFsdWU6IGJvb2xlYW4pOiBib29sZWFuXG4gKiAgICAgIGFkZEhpZ2hsaWdodGluZygpOiB2b2lkXG4gKiAgICAgIHJlbW92ZUhpZ2hsaWdodGluZygpOiB2b2lkXG4gKi9cbmZ1bmN0aW9uIE5vZGUgKGRhdGFNb2RlbCwgX29wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgRUxFTUVOVF9XSURUSCA9IF9vcHRpb25zICYmIF9vcHRpb25zLkVMRU1FTlRfV0lEVEggIT0gdW5kZWZpbmVkID8gX29wdGlvbnMuRUxFTUVOVF9XSURUSCA6IGRlZmF1bHRPcHRpb25zLkVMRU1FTlRfV0lEVEg7XG4gICAgdmFyIEVMRU1FTlRfSEVJR0hUID0gX29wdGlvbnMgJiYgX29wdGlvbnMuRUxFTUVOVF9IRUlHSFQgIT0gdW5kZWZpbmVkID8gX29wdGlvbnMuRUxFTUVOVF9IRUlHSFQgOiBkZWZhdWx0T3B0aW9ucy5FTEVNRU5UX0hFSUdIVDtcblxuICAgIGpvaW50LnNoYXBlcy5kZXZzLk1vZGVsLmFwcGx5KHNlbGYsIFt7XG4gICAgICAgIGlkOiB1bmlxdWVJZCgnbm9kZV8nKSxcbiAgICAgICAgc2l6ZToge3dpZHRoOiBFTEVNRU5UX1dJRFRILCBoZWlnaHQ6IEVMRU1FTlRfSEVJR0hUfSxcbiAgICAgICAgaW5Qb3J0czogWydsZWZ0J10sXG4gICAgICAgIG91dFBvcnRzOiBbJ3JpZ2h0J10sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAnLmluUG9ydHMgY2lyY2xlJzoge3I6IDAsIG1hZ25ldDogJ3Bhc3NpdmUnfSxcbiAgICAgICAgICAgICcub3V0UG9ydHMgY2lyY2xlJzoge3I6IDAsIG1hZ25ldDogJ3Bhc3NpdmUnfSxcbiAgICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgICAgICByeDogMjAsXG4gICAgICAgICAgICAgICAgcnk6IDE2MCxcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJzogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcubGFiZWwnOiB7XG4gICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IDExLFxuICAgICAgICAgICAgICAgIHRleHQ6IGRhdGFNb2RlbC5sYWJlbCA/IGRhdGFNb2RlbC5sYWJlbCA6ICdVbm5hbWVkJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnIzMzMydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnY2xhc3MnOiAnYm9keSAnICsgJ2RlZmF1bHQtY29sb3ItY2xhc3MnXG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICB2YXIgX2xheW91dCA9IG51bGw7XG4gICAgdmFyIF9jb2xvckNsYXNzID0gbnVsbDtcbiAgICB2YXIgX2JhZFBvc2l0aW9uID0gZmFsc2U7XG4gICAgdmFyIF9lZGdlTWFwID0ge307XG5cbiAgICBzZWxmLnBhZ2luYXRpb24gPSBudWxsO1xuICAgIHNlbGYuZGF0YU1vZGVsID0gZGF0YU1vZGVsO1xuICAgIHNlbGYucGFyZW50RWRnZSA9IG51bGw7XG4gICAgc2VsZi5lZGdlcyA9IFtdO1xuICAgIHNlbGYudHlwZUlkID0gZGF0YU1vZGVsLnR5cGVJZDtcbiAgICBzZWxmLnNldCgnZnVsbExhYmVsJywgZGF0YU1vZGVsLmZ1bGxOb2RlTGFiZWxzIHx8IGRlZmF1bHRPcHRpb25zLkZVTExfTk9ERV9MQUJFTFMpO1xuXG4gICAgc2VsZi5zZXQoJ2V4cGFuZGVkJywgZmFsc2UpO1xuICAgIHNlbGYuc2V0KCdjdXN0b21Qb3NpdGlvbicsIGZhbHNlKTsgLy8gdHJ1ZSBpZiBub2RlIG1vdmVkIGJ5IHVzZXJcbiAgICBzZWxmLnNldCgnaGFzUG9zaXRpb24nLCBmYWxzZSk7IC8vIHRydWUgaWYgbm9kZSBpcyBsb2NhdGVkIG9uIF9sYXlvdXQgYW5kIHRoZXJlIGlzIHdheSBmcm9tIGhpbSB0byByb290IG5vZGVcbiAgICBzZWxmLnNldCgnaGlkZGVuJywgdHJ1ZSk7IC8vIHRydWUgaWYgbm9kZSBoYXMgcG9zaXRpb24sIGJ1dCBub3QgcHJlc2VudHMgb24gZ3JhcGhcbiAgICBcbiAgICBzZWxmLmNvbmZpZ3VyYXRpb25TZXQgPSB7XG4gICAgICAgIGZpbHRlclR5cGU6ICdBTEwnLCAvLyBJTkNPTUlORywgT1VUR09JTkdcbiAgICAgICAgZmlsdGVyS2V5OiAnJyxcbiAgICAgICAgdmlzaWJpbGl0eU1hcDoge30sXG4gICAgICAgIHZpc2liaWxpdHlNYXBSZXZlcnNlOiB7fSxcbiAgICB9O1xuXG4gICAgc2VsZi5vbignY2hhbmdlOnBvc2l0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfcmVCaW5kRWRnZXMoKTtcbiAgICB9KTtcblxuICAgIHNlbGYub24oJ2NoYW5nZTpmdWxsTGFiZWwnLCBfY2FsY3VsYXRlU2l6ZSk7XG5cbiAgICBzZWxmLnJlaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfbGF5b3V0KSByZXR1cm47XG5cbiAgICAgICAgX3JlQmluZEVkZ2VzKCk7XG5cbiAgICAgICAgaWYgKF9sYXlvdXQuZ2V0Um9vdE5vZGUoKS5pZCA9PT0gc2VsZi5pZCkge1xuICAgICAgICAgICAgc2VsZi5hdHRyKHtcbiAgICAgICAgICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIHJ4OiAxLFxuICAgICAgICAgICAgICAgICAgICByeTogNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5zZXRDb2xvckNsYXNzKCdmb2N1cy1ub2RlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5zZXRMYXlvdXQgPSBmdW5jdGlvbiAobGF5b3V0KSB7XG4gICAgICAgIF9sYXlvdXQgPSBsYXlvdXQ7XG4gICAgfTtcblxuICAgIHNlbGYuaXNSb290Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChfbGF5b3V0ICYmIF9sYXlvdXQuZ2V0Um9vdE5vZGUoKS5pZCA9PT0gc2VsZi5pZCk7XG4gICAgfTtcblxuICAgIHNlbGYuaXNSZXZlcnNlRGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRFZGdlLmlzUmV2ZXJzZURpcmVjdGlvbjtcbiAgICB9O1xuXG4gICAgc2VsZi5ub2RlUGxhY2VtZW50ID0gZnVuY3Rpb24gKCkgeyAvLyB0cnVlIC0gd2VzdDsgZmFsc2UgLSBlYXN0O1xuICAgICAgICByZXR1cm4gKHRoaXMucGFyZW50RWRnZSAmJiB0aGlzLnBhcmVudEVkZ2UuZ2V0T3JpZW50YXRpb24oKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgfTtcblxuICAgIHNlbGYuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuZ2V0KCdzaXplJyk7XG4gICAgfTtcblxuICAgIHNlbGYuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKCkgeyAvLyBJdCBjYW4ndCBiZSBhIENyb3NzTm9kZVxuICAgICAgICBpZiAoIXNlbGYucGFyZW50RWRnZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBwcmV2Tm9kZSA9IHNlbGYuZ2V0UHJldk5vZGUoKTtcbiAgICAgICAgaWYgKCFwcmV2Tm9kZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiAocHJldk5vZGUgaW5zdGFuY2VvZiBDcm9zc05vZGUgPyBwcmV2Tm9kZS5nZXRQYXJlbnQoKSA6IHByZXZOb2RlKTtcbiAgICB9O1xuXG4gICAgc2VsZi5nZXRQcmV2Tm9kZSA9IGZ1bmN0aW9uICgpIHsgLy8gSXQgY2FuIGJlIGEgQ3Jvc3NOb2RlXG4gICAgICAgIGlmICghc2VsZi5wYXJlbnRFZGdlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHNlbGYucGFyZW50RWRnZS5nZXRPdGhlckVuZChzZWxmKTtcbiAgICB9O1xuXG4gICAgc2VsZi5oYXNDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChzZWxmLmVkZ2VzICYmIHNlbGYuZWRnZXMubGVuZ3RoID4gMCk7XG4gICAgfTtcblxuICAgIHNlbGYuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiAoZXhwYW5kQ3Jvc3NOb2Rlcykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSAoZWRnZS5zb3VyY2UuaWQgPT09IHNlbGYuaWQgPyBlZGdlLnRhcmdldCA6IGVkZ2Uuc291cmNlKTtcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIENyb3NzTm9kZSAmJiBleHBhbmRDcm9zc05vZGVzKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGwyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hsMik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH07XG5cbiAgICBzZWxmLmdldFZpc2libGVDaGlsZHJlbiA9IGZ1bmN0aW9uIChleHBhbmRDcm9zc05vZGVzKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IChlZGdlLnNvdXJjZS5pZCA9PT0gc2VsZi5pZCA/IGVkZ2UudGFyZ2V0IDogZWRnZS5zb3VyY2UpO1xuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgQ3Jvc3NOb2RlICYmIGV4cGFuZENyb3NzTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5nZXRDaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24gKGNobDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGwyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoaWxkLmdldCgnaGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9O1xuXG4gICAgc2VsZi5wdXNoRWRnZSA9IGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgICAgIHNlbGYuZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgX2VkZ2VNYXBbZWRnZS50eXBlSWQgKyAoZWRnZS5pc1JldmVyc2VEaXJlY3Rpb24gPyAnJCRyZXZlcnNlJyA6ICcnKSArIChlZGdlLmdldE9yaWVudGF0aW9uKCkgPyAnJCR3ZXN0JyA6ICckJGVhc3QnKV0gPSBlZGdlO1xuICAgIH07XG5cbiAgICBzZWxmLmdldEVkZ2VCeVR5cGUgPSBmdW5jdGlvbiAodHlwZUlkLCBpc1JldmVyc2VEaXJlY3Rpb24sIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIHZhciByZXMgPSBfZWRnZU1hcFt0eXBlSWQgKyAoaXNSZXZlcnNlRGlyZWN0aW9uID8gJyQkcmV2ZXJzZScgOiAnJykgKyAob3JpZW50YXRpb24gPyAnJCR3ZXN0JyA6ICckJGVhc3QnKV07XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcblxuICAgIHNlbGYuZGlzY29ubmVjdEVkZ2UgPSBmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICBpZiAoc2VsZi5wYXJlbnRFZGdlID09PSBlZGdlKSB7XG4gICAgICAgICAgICBzZWxmLnBhcmVudEVkZ2UgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5lZGdlcy5zcGxpY2Uoc2VsZi5lZGdlcy5pbmRleE9mKGVkZ2UpLCAxKTtcbiAgICAgICAgICAgIF9lZGdlTWFwW2VkZ2UudHlwZUlkICsgKGVkZ2UuaXNSZXZlcnNlRGlyZWN0aW9uID8gJyQkcmV2ZXJzZScgOiAnJykgKyAoZWRnZS5nZXRPcmllbnRhdGlvbigpID8gJyQkd2VzdCcgOiAnJCRlYXN0JyldID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLnNldFBhZ2luYXRpb24gPSBmdW5jdGlvbiAocGFnaW5hdGlvbikge1xuICAgICAgICBzZWxmLnBhZ2luYXRpb24gPSBwYWdpbmF0aW9uO1xuICAgIH07XG5cbiAgICBzZWxmLmdldFBhZ2luYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnBhZ2luYXRpb247XG4gICAgfTtcblxuICAgIHNlbGYuc29ydEVkZ2VzID0gZnVuY3Rpb24gKGNvbXBhcmF0b3IpIHtcbiAgICAgICAgaWYgKHNlbGYuZWRnZXMpIHNlbGYuZWRnZXMuc29ydChjb21wYXJhdG9yKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBwb3NpdGlvbiByZWxhdGl2ZSB0byBjZW50ZXJcbiAgICAgKiBmYWxzZSA9PiBvbiB0aGUgbGVmdCBvZiB0aGUgY2VudGVyXG4gICAgICogdHJ1ZSA9PiBvbiB0aGUgcmlnaHQgb2YgdGhlIGNlbnRlclxuICAgICAqL1xuICAgIHNlbGYuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdE5vZGUgPSBfZ2V0Um9vdEZvck5vZGUoc2VsZik7XG4gICAgICAgIGlmIChyb290Tm9kZSAmJiByb290Tm9kZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIChfbGF5b3V0ICYmIHNlbGYucG9zaXRpb24oKS54ID49IHJvb3ROb2RlLnBvc2l0aW9uKCkueCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gIXNlbGYubm9kZVBsYWNlbWVudCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIG5vZGVcbiAgICAgKiBmYWxzZSA9PiBvbiB0aGUgbGVmdCBvZiB0aGUgcmVsYXRpdmVOb2RlXG4gICAgICogdHJ1ZSA9PiBvbiB0aGUgcmlnaHQgb2YgdGhlIHJlbGF0aXZlTm9kZVxuICAgICAqL1xuICAgIHNlbGYuZ2V0RGlyZWN0aW9uUmVsYXRpdmVUb05vZGUgPSBmdW5jdGlvbiAocmVsYXRpdmVOb2RlKSB7XG4gICAgICAgIHJldHVybiAocmVsYXRpdmVOb2RlICYmIHNlbGYucG9zaXRpb24oKS54ID4gcmVsYXRpdmVOb2RlLnBvc2l0aW9uKCkueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgbmV3IGNvbG9yIGNsYXNzIGZvciBub2RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yQ2xhc3MgLSBjc3MgY2xhc3NcbiAgICAgKi9cbiAgICBzZWxmLnNldENvbG9yQ2xhc3MgPSBmdW5jdGlvbiAoY29sb3JDbGFzcykge1xuICAgICAgICBpZiAoY29sb3JDbGFzcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF9jb2xvckNsYXNzID0gY29sb3JDbGFzcztcbiAgICAgICAgICAgIHNlbGYuZGF0YU1vZGVsLmNvbG9yQ2xhc3MgPSBjb2xvckNsYXNzO1xuICAgICAgICB9XG4gICAgICAgIF9yZWZyZXNoQ29sb3JDbGFzcygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGNvbG9yIGNsYXNzXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY29sb3IgY2xhc3NcbiAgICAgKi9cbiAgICBzZWxmLmdldENvbG9yQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfY29sb3JDbGFzcztcbiAgICB9O1xuXG4gICAgc2VsZi5iYWRQb3NpdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfYmFkUG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIF9yZWZyZXNoQ29sb3JDbGFzcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfYmFkUG9zaXRpb247XG4gICAgfTtcbiAgICBcbiAgICBzZWxmLmFkZEhpZ2hsaWdodGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5hdHRyKCdyZWN0L3N0cm9rZS13aWR0aCcsIDQpO1xuICAgIH07XG4gICAgXG4gICAgc2VsZi5yZW1vdmVIaWdobGlnaHRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuYXR0cigncmVjdC9zdHJva2Utd2lkdGgnLCAyKTtcbiAgICB9O1xuXG4gICAgc2VsZi5zZXRQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50RWRnZSkge1xuICAgICAgICBzZWxmLnBhcmVudEVkZ2UgPSBwYXJlbnRFZGdlO1xuICAgICAgICAvLyBnZXR0aW5nIHRoZSBjb25maWd1cmF0aW9uU2V0IGZyb20gcGFyZW50XG4gICAgICAgIHZhciBwYXJlbnQgPSBzZWxmLmdldFBhcmVudCgpO1xuICAgICAgICBpZiAocGFyZW50ICYmICFzZWxmLmNvbmZpZ3VyYXRpb25TZXQubW9kaWZpZWQpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlndXJhdGlvblNldCA9IGNsb25lRGVlcChwYXJlbnQuY29uZmlndXJhdGlvblNldCk7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZ3VyYXRpb25TZXQuY29ubmVjdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZ3VyYXRpb25TZXQubW9kaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuY29uZmlndXJhdGlvblNldC5leHBhbmRUcmFuc2l0aXZlbHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfZ2V0Um9vdEZvck5vZGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAobm9kZS5pc1Jvb3ROb2RlKCkgfHwgbm9kZS5nZXQoJ2N1c3RvbVBvc2l0aW9uJykpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9nZXRSb290Rm9yTm9kZShub2RlLmdldFBhcmVudCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZWZyZXNoQ29sb3JDbGFzcyAoKSB7XG4gICAgICAgIGlmICghX2JhZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBzZWxmLmF0dHIoe1xuICAgICAgICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JvZHkgJyArIF9jb2xvckNsYXNzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLnNldCgneicsIDEwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmF0dHIoe1xuICAgICAgICAgICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2JvZHkgJyArIF9jb2xvckNsYXNzICsgJyBiYWQtbm9kZS1wb3NpdGlvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGYuc2V0KCd6JywgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jYWxjdWxhdGVTaXplICgpIHtcbiAgICAgICAgaWYgKCFzZWxmLmRhdGFNb2RlbC5sYWJlbCkgcmV0dXJuO1xuICAgICAgICB2YXIgbGFiZWwgPSBzZWxmLmRhdGFNb2RlbC5sYWJlbDtcbiAgICAgICAgdmFyIHdyYXB0ZXh0ID0gam9pbnQudXRpbC5icmVha1RleHQobGFiZWwsIHtcbiAgICAgICAgICAgIHdpZHRoOiBzZWxmLmdldFNpemUoKS53aWR0aFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJvd3MgPSB3cmFwdGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGlmIChzZWxmLmdldCgnZnVsbExhYmVsJykpIHtcbiAgICAgICAgICAgIHNlbGYuYXR0cih7XG4gICAgICAgICAgICAgICAgJy5sYWJlbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogd3JhcHRleHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByb3dDb3VudCA9IHJvd3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBzZWxmU2l6ZSA9IHNlbGYuZ2V0U2l6ZSgpO1xuICAgICAgICAgICAgdmFyIGZvbnRTaXplID0gc2VsZi5hdHRyaWJ1dGVzLmF0dHJzWycubGFiZWwnXVsnZm9udC1zaXplJ107XG4gICAgICAgICAgICBzZWxmLnJlc2l6ZShzZWxmU2l6ZS53aWR0aCwgc2VsZlNpemUuaGVpZ2h0ICsgcm93Q291bnQgKiBmb250U2l6ZSk7XG4gICAgICAgICAgICBzZWxmU2l6ZSA9IHNlbGYuZ2V0U2l6ZSgpO1xuICAgICAgICAgICAgaWYgKF9sYXlvdXQgJiYgX2xheW91dC5nZXRSb290Tm9kZSgpLmlkID09PSBzZWxmLmlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcng6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICByeTogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib2R5ICcgKyAnIGZvY3VzLW5vZGUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcng6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnk6IDIwICogKHNlbGZTaXplLndpZHRoIC8gc2VsZlNpemUuaGVpZ2h0KSAqIDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZWxmLmF0dHIoe1xuICAgICAgICAgICAgICAgICcubGFiZWwnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IChyb3dzLmxlbmd0aCA9PT0gMSA/IGxhYmVsIDogbGFiZWwuc3Vic3RyaW5nKDAsIHdyYXB0ZXh0LmluZGV4T2YoJ1xcbicpKSArICcuLi4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5yZXNpemUoRUxFTUVOVF9XSURUSCwgRUxFTUVOVF9IRUlHSFQpO1xuICAgICAgICAgICAgaWYgKF9sYXlvdXQgJiYgX2xheW91dC5nZXRSb290Tm9kZSgpLmlkID09PSBzZWxmLmlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcng6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICByeTogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdib2R5ICcgKyAnIGZvY3VzLW5vZGUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcng6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnk6IDE2MFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NhbGN1bGF0ZVNpemUoKTtcblxuICAgIGZ1bmN0aW9uIF9yZUJpbmRFZGdlcyAoKSB7XG4gICAgICAgIHZhciByZWJpbmQgPSBmdW5jdGlvbiAoZWRnZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWRnZS5zZXQoJ3NvdXJjZScsIHtpZDogZWRnZS5nZXQoJ3NvdXJjZScpLmlkLCBwb3J0OiAnbGVmdCd9KTtcbiAgICAgICAgICAgICAgICBlZGdlLnNldCgndGFyZ2V0Jywge2lkOiBlZGdlLmdldCgndGFyZ2V0JykuaWQsIHBvcnQ6ICdyaWdodCd9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWRnZS5zZXQoJ3RhcmdldCcsIHtpZDogZWRnZS5nZXQoJ3RhcmdldCcpLmlkLCBwb3J0OiAnbGVmdCd9KTtcbiAgICAgICAgICAgICAgICBlZGdlLnNldCgnc291cmNlJywge2lkOiBlZGdlLmdldCgnc291cmNlJykuaWQsIHBvcnQ6ICdyaWdodCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHNlbGYucGFyZW50RWRnZSkgcmViaW5kKHNlbGYucGFyZW50RWRnZSwgc2VsZi5nZXRQcmV2Tm9kZSgpLnBvc2l0aW9uKCkueCA+IHNlbGYucG9zaXRpb24oKS54KTtcbiAgICAgICAgaWYgKHNlbGYuZWRnZXMpIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICAgICAgcmViaW5kKGVkZ2UsIGVkZ2UuZ2V0T3RoZXJFbmQoc2VsZikucG9zaXRpb24oKS54IDw9IHNlbGYucG9zaXRpb24oKS54KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGpvaW50LnNoYXBlcy5kZXZzLk1vZGVsLnByb3RvdHlwZSk7XG5cbi8qKlxuICogQ3Jvc3NOb2RlIG9mIHRoZSBncmFwaC5cbiAqIEl0J3MgYSBtb2RlbCBvZiBhIGdyYXBoIGVsZW1lbnQuIEV4dGVuZCBvZiBOb2RlLlxuICpcbiAqIENvbnN0cnVjdG9yIHBhcmFtZXRlcnM6XG4gKiAgICAgIGNvbG9yQ2xhc3M6IHN0cmluZ1xuICovXG5mdW5jdGlvbiBDcm9zc05vZGUgKGNvbG9yQ2xhc3MpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIERFRkFVTFRfQ1JPU1NfTk9ERV9PRkZTRVQgPSAzMDsgLy8gSXQgZGVmaW5lcyBvZmZzZXQgb2YgdGhlIGNyb3NzIG5vZGUgcmVsYXRpdmUgdG8gdGhlIG5leHQgY29sdW1uIHBvc2l0aW9uXG4gICAgTm9kZS5hcHBseShzZWxmLCBbe3R5cGVJZDogJ2Nyb3NzTm9kZSd9XSk7XG5cbiAgICBzZWxmLnJlc2l6ZSg1LCA1KTtcbiAgICBzZWxmLmF0dHIoe1xuICAgICAgICByZWN0OiB7XG4gICAgICAgICAgICByeDogNTAwLFxuICAgICAgICAgICAgcnk6IDUwMCxcbiAgICAgICAgICAgICdzdHJva2Utd2lkdGgnOiAyXG4gICAgICAgIH0sXG4gICAgICAgICcubGFiZWwnOiB7XG4gICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2VsZi5yZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcbiAgICBzZWxmLnNldENvbG9yQ2xhc3MoY29sb3JDbGFzcyk7XG5cbiAgICBzZWxmLmdldEVkZ2VCeVR5cGUgPSBmdW5jdGlvbiAodHlwZUlkKSB7XG4gICAgICAgIHNlbGYuZWRnZXMuZmlsdGVyKGZ1bmN0aW9uIChlZGdlKSB7IHJldHVybiBlZGdlLnR5cGVJZCA9PT0gdHlwZUlkOyB9KVswXTtcbiAgICB9O1xuXG4gICAgc2VsZi5hbGlnblJlbGF0aXZlVG9DaGlsZHJlbiA9IGZ1bmN0aW9uIChDUk9TU19OT0RFX09GRlNFVCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gKENST1NTX05PREVfT0ZGU0VUICE9IHVuZGVmaW5lZCA/IENST1NTX05PREVfT0ZGU0VUIDogREVGQVVMVF9DUk9TU19OT0RFX09GRlNFVCk7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHNlbGYuZ2V0VmlzaWJsZUNoaWxkcmVuKCk7XG4gICAgICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaCkge1xuICAgICAgICAgICAgcmV0dXJuICFjaC5nZXQoJ2N1c3RvbVBvc2l0aW9uJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlsdGVyZWRDaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZENoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIHZhciBmaXJzdENoaWVsZCA9IGZpbHRlcmVkQ2hpbGRyZW5bMF07XG4gICAgICAgIHZhciBsYXN0Q2hpZWxkID0gZmlsdGVyZWRDaGlsZHJlbltmaWx0ZXJlZENoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgZmlyc3RDaGlsZFBvcyA9IGZpcnN0Q2hpZWxkLnBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBsYXN0Q2hpZWxkUG9zID0gbGFzdENoaWVsZC5wb3NpdGlvbigpO1xuICAgICAgICB2YXIgbGFzdENoaWVsZFNpemUgPSBmaXJzdENoaWVsZC5nZXRTaXplKCk7XG4gICAgICAgIHZhciB4ID0gZmlyc3RDaGlsZFBvcy54O1xuICAgICAgICB2YXIgeSA9IChsYXN0Q2hpZWxkUG9zLnkgKyBmaXJzdENoaWxkUG9zLnkgKyBsYXN0Q2hpZWxkU2l6ZS5oZWlnaHQgLSBzZWxmLmdldFNpemUoKS5oZWlnaHQpIC8gMjtcbiAgICAgICAgaWYgKCFzZWxmLm5vZGVQbGFjZW1lbnQoKSkgeCAtPSBvZmZzZXQ7XG4gICAgICAgIGlmIChzZWxmLm5vZGVQbGFjZW1lbnQoKSkgeCArPSBsYXN0Q2hpZWxkU2l6ZS53aWR0aCArIG9mZnNldDtcbiAgICAgICAgc2VsZi5wb3NpdGlvbih4LCB5KTtcbiAgICB9O1xuXG59XG5Dcm9zc05vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShOb2RlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogRWRnZSBvZiB0aGUgZ3JhcGguXG4gKiBJdCdzIGEgbW9kZWwgb2YgYSBncmFwaCBsaW5rLlxuICpcbiAqIENvbnN0cnVjdG9yIHBhcmFtZXRlcnM6XG4gKiAgICAgIGRhdGFNb2RlbDoge1xuICogICAgICAgICAgdHlwZUlkOiBzdHJpbmdcbiAqICAgICAgICAgIHNvdXJjZVR5cGVJZDogc3RyaW5nLFxuICogICAgICAgICAgdGFyZ2V0VHlwZUlkOiBzdHJpbmcsXG4gKiAgICAgICAgICBsYWJlbDogc3RyaW5nLFxuICogICAgICAgICAgY29sb3JUZW1wbGF0ZT86IHtcbiAqICAgICAgICAgICAgICBjb2xvcjogc3RyaW5nLCBcbiAqICAgICAgICAgICAgICBjb2xvckZpbGw6IHN0cmluZywgXG4gKiAgICAgICAgICAgICAgY29sb3JGb250OiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgY29sb3JGaWxsRm9jdXNlZDogc3RyaW5nXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAgaXNSZXZlcnNlRGlyZWN0aW9uPzogYm9vbGVhbixcbiAqICAgICAgfVxuICpcbiAqIFB1YmxpYyBwcm9wZXJ0aWVzOlxuICogICAgICBkYXRhTW9kZWw6IHtkYXRhTW9kZWx9XG4gKiAgICAgIHNvdXJjZTogTm9kZVxuICogICAgICB0YXJnZXQ6IE5vZGVcbiAqICAgICAgdHlwZUlkOiBzdHJpbmdcbiAqICAgICAgc291cmNlVHlwZUlkOiBzdHJpbmdcbiAqICAgICAgdGFyZ2V0VHlwZUlkOiBzdHJpbmdcbiAqXG4gKiBQdWJsaWMgbWV0aG9kczpcbiAqICAgICAgZ2V0T3RoZXJFbmQobWU6IE5vZGUpOiBOb2RlXG4gKiAgICAgIGdldE9yaWVudGF0aW9uKCk6IGJvb2xlYW4gIC8vIHRydWUgLSB3ZXN0OyBmYWxzZSAtIGVhc3Q7XG4gKiAgICAgIHNldFNvdXJjZShzb3VyY2U6IE5vZGUsIGlzUGFyZW50OiBib29sZWFuLCBwb3J0OiBzdHJpbmcpOiB2b2lkXG4gKiAgICAgIHNldFRhcmdldChzb3VyY2U6IE5vZGUsIGlzUGFyZW50OiBib29sZWFuLCBwb3J0OiBzdHJpbmcpOiB2b2lkXG4gKiAgICAgIGRpc2Nvbm5lY3QoKTogdm9pZFxuICogICAgICByZXZlcnNlRWRnZURpcmVjdGlvbigpOiB2b2lkXG4gKiAgICAgIHNldENvbG9yQ2xhc3MoY29sb3JDbGFzczogc3RyaW5nKTogdm9pZFxuICovXG5mdW5jdGlvbiBFZGdlIChkYXRhTW9kZWwpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBqb2ludC5kaWEuTGluay5hcHBseShzZWxmLCBbe1xuICAgICAgICB6OiAwLFxuICAgICAgICBzb3VyY2U6IHtpZDogbnVsbCwgcG9ydDogJ3JpZ2h0J30sXG4gICAgICAgIHRhcmdldDoge2lkOiBudWxsLCBwb3J0OiAnbGVmdCd9LFxuICAgICAgICAvLyBzbW9vdGg6IHRydWUsXG4gICAgICAgIC8vIHJvdXRlcjogeyBuYW1lOiAnb3J0aG9nb25hbCcgfSxcbiAgICAgICAgLy8gcm91dGVyOiB7IG5hbWU6ICdtZXRybycgfSxcbiAgICAgICAgLy8gY29ubmVjdG9yOiB7IG5hbWU6ICdyb3VuZGVkJyB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgJy5jb25uZWN0aW9uJzoge1xuICAgICAgICAgICAgICAgICdzdHJva2Utd2lkdGgnOiAyLFxuICAgICAgICAgICAgICAgICdjbGFzcyc6ICdjb25uZWN0aW9uICcgKyAoZGF0YU1vZGVsLmNvbG9yQ2xhc3MgPyBkYXRhTW9kZWwuY29sb3JDbGFzcyA6ICdkZWZhdWx0LWNvbG9yLWNsYXNzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzOiBbe1xuICAgICAgICAgICAgcG9zaXRpb246IDAuNSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAoZGF0YU1vZGVsLmNvbG9yQ2xhc3MgPyBkYXRhTW9kZWwuY29sb3JDbGFzcyA6ICdkZWZhdWx0LWNvbG9yLWNsYXNzJyksXG4gICAgICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6ICdBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IDExLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBkYXRhTW9kZWwubGFiZWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgfV0pO1xuXG4gICAgc2VsZi5pc1JldmVyc2VEaXJlY3Rpb24gPSBmYWxzZTtcbiAgICBzZWxmLnNvdXJjZSA9IG51bGw7XG4gICAgc2VsZi50YXJnZXQgPSBudWxsO1xuICAgIHNlbGYuZGF0YU1vZGVsID0gZGF0YU1vZGVsO1xuICAgIHNlbGYuc291cmNlVHlwZUlkID0gZGF0YU1vZGVsLnNvdXJjZVR5cGVJZDtcbiAgICBzZWxmLnRhcmdldFR5cGVJZCA9IGRhdGFNb2RlbC50YXJnZXRUeXBlSWQ7XG4gICAgc2VsZi50eXBlSWQgPSBkYXRhTW9kZWwudHlwZUlkO1xuICAgIHNlbGYucGxhY2VtZW50ID0gZGF0YU1vZGVsLnBsYWNlbWVudDtcblxuICAgIHNlbGYuZ2V0T3RoZXJFbmQgPSBmdW5jdGlvbiAobWUpIHtcbiAgICAgICAgcmV0dXJuIChtZS5pZCA9PT0gc2VsZi5zb3VyY2UuaWQgPyBzZWxmLnRhcmdldCA6IHNlbGYuc291cmNlKTtcbiAgICB9O1xuXG4gICAgc2VsZi5zZXRTb3VyY2UgPSBmdW5jdGlvbiAoc291cmNlLCBpc1BhcmVudCwgcG9ydCkge1xuICAgICAgICBzZWxmLnNldCgnc291cmNlJywge2lkOiBzb3VyY2UuaWQsIHBvcnQ6IHBvcnR9KTtcbiAgICAgICAgc2VsZi5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIGlmIChpc1BhcmVudCkge1xuICAgICAgICAgICAgc2VsZi5zb3VyY2UucHVzaEVkZ2Uoc2VsZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnNvdXJjZS5zZXRQYXJlbnQoc2VsZik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5zZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBpc1BhcmVudCwgcG9ydCkge1xuICAgICAgICBzZWxmLnNldCgndGFyZ2V0Jywge2lkOiB0YXJnZXQuaWQsIHBvcnQ6IHBvcnR9KTtcbiAgICAgICAgc2VsZi50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGlmIChpc1BhcmVudCkge1xuICAgICAgICAgICAgc2VsZi50YXJnZXQucHVzaEVkZ2Uoc2VsZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnRhcmdldC5zZXRQYXJlbnQoc2VsZik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnRhcmdldC5kaXNjb25uZWN0RWRnZShzZWxmKTtcbiAgICAgICAgc2VsZi5zb3VyY2UuZGlzY29ubmVjdEVkZ2Uoc2VsZik7XG4gICAgICAgIHNlbGYucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIHNlbGYuc2V0Q29sb3JDbGFzcyA9IGZ1bmN0aW9uIChjb2xvckNsYXNzKSB7XG4gICAgICAgIHNlbGYuYXR0cih7XG4gICAgICAgICAgICAnLmNvbm5lY3Rpb24nOiB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2Nvbm5lY3Rpb24gJyArIGNvbG9yQ2xhc3NcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnLm1hcmtlci10YXJnZXQnOiB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY29sb3JDbGFzc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcubWFya2VyLXNvdXJjZSc6IHtcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjb2xvckNsYXNzXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5kYXRhTW9kZWwuY29sb3JDbGFzcyA9IGNvbG9yQ2xhc3M7XG4gICAgfTtcblxuICAgIHNlbGYuZ2V0T3JpZW50YXRpb24gPSBmdW5jdGlvbiAoKSB7IC8vIHRydWUgLSB3ZXN0OyBmYWxzZSAtIGVhc3Q7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHNlbGYucGxhY2VtZW50ICYmXG4gICAgICAgICAgICAoc2VsZi5wbGFjZW1lbnQgPT09ICdmb3J3YXJkJyB8fCBzZWxmLnBsYWNlbWVudCA9PT0gJ2JhY2t3YXJkJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pc1JldmVyc2VEaXJlY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICBzZWxmLnBsYWNlbWVudCA9PT0gJ2ZvcndhcmQnIHx8XG4gICAgICAgICAgICAgICAgICAgIXNlbGYuaXNSZXZlcnNlRGlyZWN0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgc2VsZi5wbGFjZW1lbnQgPT09ICdiYWNrd2FyZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pc1JldmVyc2VEaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB3aGljaCByZXZlcnNlcyB0aGUgZGlyZWN0aW9uIFxuICAgICAqIG9mIHRoZSBFZGdlIChGb3IgdGhlIGZpcnN0IGl0ZXJhdGlvbilcbiAgICAgKi9cbiAgICBzZWxmLnJldmVyc2VFZGdlRGlyZWN0aW9uID0gZnVuY3Rpb24gKGlzUmV2ZXJzZURpcmVjdGlvbikge1xuICAgICAgICBpZiAoc2VsZi5pc1JldmVyc2VEaXJlY3Rpb24gIT09IGlzUmV2ZXJzZURpcmVjdGlvbikge1xuICAgICAgICAgICAgc2VsZi5pc1JldmVyc2VEaXJlY3Rpb24gPSBpc1JldmVyc2VEaXJlY3Rpb247XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SWQgPSBzZWxmLnRhcmdldFR5cGVJZDtcbiAgICAgICAgICAgIHNlbGYudGFyZ2V0VHlwZUlkID0gc2VsZi5zb3VyY2VUeXBlSWQ7XG4gICAgICAgICAgICBzZWxmLnNvdXJjZVR5cGVJZCA9IHRhcmdldElkO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVNYXJrZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLnVwZGF0ZU1hcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1hcmtlciA9IHtcbiAgICAgICAgICAgICdzdHJva2Utd2lkdGgnOiAyLFxuICAgICAgICAgICAgJ2NsYXNzJzogKGRhdGFNb2RlbC5jb2xvckNsYXNzID8gZGF0YU1vZGVsLmNvbG9yQ2xhc3MgOiAnZGVmYXVsdC1jb2xvci1jbGFzcycpLFxuICAgICAgICAgICAgZDogJ00wIDMyIEw4IDM1IEwxMSAzMiBMMDggMjkgWicgLy8gTTEwIDM0IEwwIDMyIEwxMCAzMCBaIC8vTSAxMCAwIEwgMCA1IEwgMTAgMTAgeiAtIGZhdHRlciBhcnJvd1xuICAgICAgICB9O1xuICAgICAgICB2YXIgYXR0cnMgPSB7XG4gICAgICAgICAgICAnLm1hcmtlci10YXJnZXQnOiAoc2VsZi50YXJnZXRUeXBlSWQgIT09ICdjcm9zc05vZGUnICYmICFzZWxmLmlzUmV2ZXJzZURpcmVjdGlvbiA/IG1hcmtlciA6IHsgZDogJycgfSksXG4gICAgICAgICAgICAnLm1hcmtlci1zb3VyY2UnOiAoc2VsZi5zb3VyY2VUeXBlSWQgIT09ICdjcm9zc05vZGUnICYmIHNlbGYuaXNSZXZlcnNlRGlyZWN0aW9uID8gbWFya2VyIDogeyBkOiAnJyB9KVxuICAgICAgICB9O1xuICAgICAgICBzZWxmLmF0dHIoYXR0cnMpO1xuICAgIH1cbiAgICBzZWxmLnVwZGF0ZU1hcmtlcigpO1xufVxuRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGpvaW50LmRpYS5MaW5rLnByb3RvdHlwZSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIE5vZGU6IE5vZGUsXG4gICAgQ3Jvc3NOb2RlOiBDcm9zc05vZGUsXG4gICAgRWRnZTogRWRnZVxufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9kZSA9IHJlcXVpcmUoJy4vZ3JhcGhFbGVtZW50cycpLk5vZGUsXG4gICAgQ3Jvc3NOb2RlID0gcmVxdWlyZSgnLi9ncmFwaEVsZW1lbnRzJykuQ3Jvc3NOb2RlLFxuICAgIEVkZ2UgPSByZXF1aXJlKCcuL2dyYXBoRWxlbWVudHMnKS5FZGdlO1xuXG52YXIgUGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vcGFnaW5hdGlvbicpO1xuXG52YXIgTGF5b3V0UGFnaW5hdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2xheW91dFBhZ2luYXRpb25NYW5hZ2VyJyk7XG52YXIgTGF5b3V0UG9zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9sYXlvdXRQb3NpdGlvbk1hbmFnZXInKTtcblxudmFyIENvbG9yQ29uZmlndXJhdG9yID0gcmVxdWlyZSgnLi9jb2xvckNvbmZpZ3VyYXRvcicpO1xuXG4vKipcbiAqIExheW91dCBvZiB0aGUgZ3JhcGguXG4gKiBDb250YWluIGFsbCBncmFwaCBlbGVtZW50cywgY29udHJvbHMgdGhlIHBsYWNlbWVudCBvZiBub2Rlcy5cbiAqXG4gKiBDb25zdHJ1Y3RvciBwYXJhbWV0ZXJzOlxuICogICAgICBncmFwaDogam9pbnQuZGlhLkdyYXBoXG4gKiAgICAgIHBhcGVyOiBqb2ludC5kaWEuUGFwZXJcbiAqICAgICAgc2Nyb2xsZXI6IGpvaW50LnVpLlBhcGVyU2Nyb2xsZXJcbiAqICAgICAgX29wdGlvbnM6IHtcbiAqICAgICAgICAgIERFRkFVTFRfUEFHRV9TSVpFOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MT1JfQ0xBU1NfQ09VTlQ6IG51bWJlciwgXG4gKiAgICAgICAgICBNQVhfTEFCRUxfTEVOR1RIOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MX09GRlNFVDogbnVtYmVyLCBcbiAqICAgICAgICAgIFJPV19PRkZTRVQ6IG51bWJlciwgXG4gKiAgICAgICAgICBDUk9TU19OT0RFX09GRlNFVDogbnVtYmVyLCBcbiAqICAgICAgICAgIENPTE9SX0NMQVNTX01BUDoge1xuICogICAgICAgICAgICAgICdzdWJDbGFzc09mJzogc3RyaW5nLCBcbiAqICAgICAgICAgICAgICAndHlwZSc6IHN0cmluZ1xuICogICAgICAgICAgfVxuICogICAgICB9XG4gKlxuICogUHVibGljIG1ldGhvZHM6XG4gKiAgICAgIGNsZWFuTGF5b3V0KCk6IHZvaWRcbiAqICAgICAgc2V0Um9vdE5vZGUocm9vdE5vZGU6IE5vZGUpOiB2b2lkXG4gKiAgICAgIGdldFJvb3ROb2RlKCk6IE5vZGVcbiAqICAgICAgZ2V0Tm9kZXMoKTogTm9kZVtdXG4gKiAgICAgIGdldEVkZ2VzKCk6IEVkZ2VbXVxuICogICAgICByZW1vdmVFZGdlKGVkZ2U6IEVkZ2UpOiB2b2lkXG4gKiAgICAgIGNvbGxhcHNlTm9kZSh1bmJpbmRGcm9tSWQ6IHN0cmluZyk6IHZvaWRcbiAqICAgICAgcmVtb3ZlTm9kZShub2RlOiBOb2RlLCByZW1vdmVDaGlsZHJlbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZFxuICogICAgICBwdXRBbGwoY2VsbHM6IChOb2RlfEVkZ2UpLCBiaW5kVG9JZD86IHN0cmluZyk6IHZvaWQgLSAoYnkgZGVmYXVsdDogYmluZFRvSWQgPSBfcm9vdE5vZGUuaWQpXG4gKiAgICAgIHB1dChjZWxsOiAoTm9kZXxFZGdlKSwgYmluZFRvSWQ/OiBzdHJpbmcpOiB2b2lkXG4gKiAgICAgIGNsb25lTm9kZShub2RlOiBOb2RlKTogTm9kZVxuICogICAgICByZWNhbGN1bGF0ZUxheW91dCgpOiB2b2lkXG4gKiAgICAgIGdldFNjYWxlKCk6IHtzeDogbnVtYmVyLCBzeTogbnVtYmVyfVxuICogICAgICBoaWRlTm9kZShub2RlOiBOb2RlKTogdm9pZFxuICogICAgICBzaG93Tm9kZShub2RlOiBOb2RlKTogdm9pZFxuICogICAgICBkb0ZvckJydW5jaChub2RlOiBOb2RlLCBjYWxsQmFjazogZnVuY3Rpb24pOiB2b2lkXG4gKi9cbmZ1bmN0aW9uIEdyYXBoTGF5b3V0IChncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgIHBhcGVyLFxuICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsZXIsXG4gICAgICAgICAgICAgICAgICAgICBfb3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIFByaXZhdGUgZmlsZHNcbiAgICAgKi9cbiAgICB2YXIgX2dyYXBoID0gbnVsbDtcbiAgICB2YXIgX3Jvb3ROb2RlID0gbnVsbDtcbiAgICB2YXIgX25vZGVzQnlJZCA9IG51bGw7XG4gICAgdmFyIF9ub2Rlc0J5VHlwZSA9IG51bGw7XG4gICAgdmFyIF9lZGdlcyA9IG51bGw7XG4gICAgdmFyIF9zY3JvbGxlciA9IG51bGw7XG4gICAgdmFyIF9wb3NpdGlvbk1hbmFnZXIgPSBudWxsO1xuICAgIHZhciBfcGFnaW5hdGlvbk1hbmFnZXIgPSBudWxsO1xuICAgIHZhciBfY29sb3JDb25maWd1cmF0b3IgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUHJpdmF0ZSBmdW5jdGlvbiB3aGljaCB1c2VkIGFzIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSAge2pvaW50LmRpYS5HcmFwaH0gZ3JhcGggLSBqb2ludC5kaWEuR3JhcGhcbiAgICAgKiBAcGFyYW0gIHtqb2ludC5kaWEuUGFwZXJ9IHBhcGVyIC0gam9pbnQuZGlhLlBhcGVyXG4gICAgICogQHBhcmFtICB7am9pbnQudWkuUGFwZXJTY3JvbGxlcn0gc2Nyb2xsZXIgLSBqb2ludC51aS5QYXBlclNjcm9sbGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2luaXRpYWxpemUgKGdyYXBoLCBwYXBlciwgc2Nyb2xsZXIpIHtcblxuICAgICAgICBfZ3JhcGggPSBncmFwaDtcbiAgICAgICAgX3Njcm9sbGVyID0gc2Nyb2xsZXI7XG5cbiAgICAgICAgX3Bvc2l0aW9uTWFuYWdlciA9IG5ldyBMYXlvdXRQb3NpdGlvbk1hbmFnZXIoX29wdGlvbnMpO1xuICAgICAgICBfcGFnaW5hdGlvbk1hbmFnZXIgPSBuZXcgTGF5b3V0UGFnaW5hdGlvbk1hbmFnZXIoc2VsZiwgX29wdGlvbnMpO1xuXG4gICAgICAgIF9jb2xvckNvbmZpZ3VyYXRvciA9IG5ldyBDb2xvckNvbmZpZ3VyYXRvcigpO1xuXG4gICAgICAgIHNlbGYuYmxvY2tWYWxpZGF0aW9uID0gZmFsc2U7XG4gICAgICAgIHNlbGYuY2xlYW5MYXlvdXQoKTtcbiAgICB9XG5cbiAgICBzZWxmLmxvYWRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBpZiAoX3Jvb3ROb2RlKSBzZWxmLmNsZWFuTGF5b3V0KCk7XG4gICAgICAgIFxuICAgICAgICBfcm9vdE5vZGUgPSBzdGF0ZS5yb290Tm9kZTtcbiAgICAgICAgX2VkZ2VzID0gc3RhdGUuZWRnZXM7XG4gICAgICAgIF9ub2Rlc0J5SWQgPSB7fTtcbiAgICAgICAgX25vZGVzQnlUeXBlID0ge307XG4gICAgICAgIHN0YXRlLm5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmdldFByZXZOb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBfZW1iZWROb2RlKG5vZGUsIG5vZGUuZ2V0UHJldk5vZGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZS5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX2VtYmVkTm9kZShub2RlLnBhZ2luYXRpb24sIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdKSBfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdID0gW107XG4gICAgICAgICAgICBfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdLnB1c2gobm9kZSk7XG4gICAgICAgICAgICBfbm9kZXNCeUlkW25vZGUuaWRdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9ncmFwaC5hZGRDZWxscyhzdGF0ZS52aXNpYmxlRWxlbWVudHMpO1xuICAgIH07XG5cbiAgICBzZWxmLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm9vdE5vZGU6IF9yb290Tm9kZSxcbiAgICAgICAgICAgIGVkZ2VzOiBfZWRnZXMsXG4gICAgICAgICAgICBub2Rlczogc2VsZi5nZXROb2RlcygpLFxuICAgICAgICAgICAgdmlzaWJsZUVsZW1lbnRzOiBfZ3JhcGguZ2V0RWxlbWVudHMoKVxuICAgICAgICAgICAgLmNvbmNhdChfZ3JhcGguZ2V0TGlua3MoKSksXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdmFsdWUgb2Ygc2NhbGUgYnkgeCBhbmQgeSBheGlzXG4gICAgICovXG4gICAgc2VsZi5nZXRTY2FsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtzeDogX3Njcm9sbGVyLl9zeCwgc3k6IF9zY3JvbGxlci5fc3l9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBpcyB1c2VkIGZvciBjbGVhbiBsYXlvdXQgYW5kIHJlbW92ZSBhbGwgbm9kZXMgYW5kIGVkZ2VzLlxuICAgICAqL1xuICAgIHNlbGYuY2xlYW5MYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9yb290Tm9kZSA9IG51bGw7XG4gICAgICAgIF9ub2Rlc0J5SWQgPSB7fTtcbiAgICAgICAgX25vZGVzQnlUeXBlID0ge307XG4gICAgICAgIF9lZGdlcyA9IFtdO1xuICAgICAgICBfZ3JhcGguY2xlYXIoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyByb290IG5vZGUgZm9yIGxheW91dC5cbiAgICAgKiBJZiB3ZSB0aGVyZSBpcyBvbmUsIHRoZW4gd2UgY2xlYW4gbGF5b3V0LlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gcm9vdE5vZGUgLSBOb2RlIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyByb290XG4gICAgICovXG4gICAgc2VsZi5zZXRSb290Tm9kZSA9IGZ1bmN0aW9uIChyb290Tm9kZSkge1xuICAgICAgICBpZiAoX3Jvb3ROb2RlKSBzZWxmLmNsZWFuTGF5b3V0KCk7XG5cbiAgICAgICAgX3Jvb3ROb2RlID0gcm9vdE5vZGU7XG4gICAgICAgIF9wdXROb2RlKHJvb3ROb2RlKTtcbiAgICAgICAgX3Jvb3ROb2RlLnNldCgnZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgICAgICBfbG9jYXRlTm9kZShfcm9vdE5vZGUsIHJvb3ROb2RlLmlkKTtcbiAgICAgICAgc2VsZi5zaG93Tm9kZShfcm9vdE5vZGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHJvb3Qgbm9kZSBvZiBsYXlvdXQuXG4gICAgICogQHJldHVybnMge0FycmF5fSBOb2RlcyBvZiB0aGUgbGF5b3V0XG4gICAgICovXG4gICAgc2VsZi5nZXRSb290Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb290Tm9kZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgbm9kZXMgb2YgdGhlIGxheW91dC5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEVkZ2VzIG9mIHRoZSBsYXlvdXRcbiAgICAgKi9cbiAgICBzZWxmLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoX25vZGVzQnlJZCkuZmlsdGVyKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIF9ub2Rlc0J5SWRbaWRdO1xuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gX25vZGVzQnlJZFtpZF07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBlZGdlcyBvZiB0aGUgbGF5b3V0LlxuICAgICAqL1xuICAgIHNlbGYuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZWRnZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgb3Bwb3J0dW5pdHkgdG8gcmVtb3ZlIGVkZ2UgZnJvbSB0aGUgbGF5b3V0XG4gICAgICogQHBhcmFtIHtFZGdlfSBlZGdlIC0gRWRnZSB3aGljaCBtdXN0IGJlIHJlbW92ZWRcbiAgICAgKi9cbiAgICBzZWxmLnJlbW92ZUVkZ2UgPSBmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICBfZWRnZXMuc3BsaWNlKF9lZGdlcy5pbmRleE9mKGVkZ2UpLCAxKTtcbiAgICAgICAgZWRnZS5kaXNjb25uZWN0KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNlcyBub2RlIGFuZCByZW1vdmVzIGFsbCBjaGlsZHJlblxuICAgICAqIG9mIHRoZSBOb2RlIGZyb20gdGhlIGxheW91dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bmJpbmRGcm9tSWQgLSBJZCBvZiB0aGUgbm9kZSBmcm9tIGxheW91dFxuICAgICAqL1xuICAgIHNlbGYuY29sbGFwc2VOb2RlID0gZnVuY3Rpb24gKHVuYmluZEZyb21JZCkge1xuICAgICAgICBpZiAoX25vZGVzQnlJZFt1bmJpbmRGcm9tSWRdKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IF9ub2Rlc0J5SWRbdW5iaW5kRnJvbUlkXTtcbiAgICAgICAgICAgIGlmIChub2RlLmlkID09PSBfcm9vdE5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxlZnRUcmVlID0gW107XG4gICAgICAgICAgICAgICAgc2VsZi5yaWdodFRyZWUgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9wYWdpbmF0aW9uTWFuYWdlci5yZW1vdmVQYWdpbmF0aW9uKG5vZGUpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5nZXRDaGlsZHJlbigpO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2gpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZU5vZGUoY2gsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBub2RlIGZyb20gdGhlIGxheW91dCBhbmQgKGlmIG5lZWRlZCkgcmVtb3ZlcyBhbGwgaGlzIGNoaWxkcmVuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5vZGUgLSBJZCBvZiB0aGUgbm9kZSBmcm9tIGxheW91dFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3ZlQ2hpbGRyZW4gLSBJZiB0cnVlIHRoZW4gY2hpbGRyZW4gd2lsbCBiZSByZW1vdmVkXG4gICAgICovXG4gICAgc2VsZi5yZW1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUsIHJlbW92ZUNoaWxkcmVuKSB7XG4gICAgICAgIF9wYWdpbmF0aW9uTWFuYWdlci5yZW1vdmVQYWdpbmF0aW9uKG5vZGUpO1xuXG4gICAgICAgIGlmIChub2RlLnBhcmVudEVkZ2UpIHNlbGYucmVtb3ZlRWRnZShub2RlLnBhcmVudEVkZ2UpO1xuICAgICAgICBub2RlLnNldCgnaGFzUG9zaXRpb24nLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmdldENoaWxkcmVuKCk7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaCkge1xuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlTm9kZShjaCwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKF9ub2Rlc0J5SWRbbm9kZS5pZF0pIF9ub2Rlc0J5SWRbbm9kZS5pZF0gPSBudWxsO1xuICAgICAgICBpZiAoX25vZGVzQnlUeXBlW25vZGUudHlwZUlkXSAmJiBfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdLnNwbGljZShfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdLmluZGV4T2Yobm9kZSksIDEpO1xuXG4gICAgICAgIGlmICghbm9kZS5nZXQoJ2hpZGRlbicpKSBzZWxmLmhpZGVOb2RlKG5vZGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFsbCBub2RlcyBvciBlZGdlcyBvbiB0aGUgbGF5b3V0XG4gICAgICogQHBhcmFtIHtBcnJheX0gY2VsbHMgLSBBcnJheSBvZiBjZWxscyAoRWRnZXxOb2RlKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiaW5kVG9JZCAtIFNvdXJjZSBub2RlXG4gICAgICogd2hpY2ggd2lsbCBiZSBhZGRlZCBvbiB0aGUgbGF5b3V0XG4gICAgICovXG4gICAgc2VsZi5wdXRBbGwgPSBmdW5jdGlvbiAoY2VsbHMsIGJpbmRUb0lkKSB7XG4gICAgICAgIGNlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgICAgIHNlbGYucHV0KGNlbGwsIGJpbmRUb0lkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgb25lIG5vZGUgb3IgZWRnZSBvbiB0aGUgbGF5b3V0XG4gICAgICogQHBhcmFtIHtOb2RlfEVkZ2V9IGNlbGwgLSBDZWxsIHdoaWNoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJpbmRUb0lkIC0gU291cmNlIG5vZGVcbiAgICAgKiB3aWxsIGJlIGFkZGVkIG9uIHRoZSBsYXlvdXRcbiAgICAgKi9cbiAgICBzZWxmLnB1dCA9IGZ1bmN0aW9uIChjZWxsLCBiaW5kVG9JZCkge1xuICAgICAgICBpZiAoY2VsbCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIF9wdXROb2RlKGNlbGwpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGwgaW5zdGFuY2VvZiBFZGdlKSB7XG4gICAgICAgICAgICBfcHV0RWRnZShjZWxsLCBiaW5kVG9JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbCBpbnN0YW5jZW9mIFBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIF9wdXRQYWdpbmF0aW9uKGNlbGwsIGJpbmRUb0lkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWxvY2F0ZXMgYWxsIG5vZGVzIG9mIGxheW91dCBvbiB0aGVpciBwb3NpdGlvblxuICAgICAqL1xuICAgIHNlbGYucmVjYWxjdWxhdGVMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3Jvb3ROb2RlKSByZXR1cm47XG5cbiAgICAgICAgc2VsZi5ibG9ja1ZhbGlkYXRpb24gPSB0cnVlO1xuXG4gICAgICAgIHZhciB4ID0gX3Jvb3ROb2RlLnBvc2l0aW9uKCkueDtcbiAgICAgICAgdmFyIHkgPSBfcm9vdE5vZGUucG9zaXRpb24oKS55O1xuXG4gICAgICAgIGlmICghX3Jvb3ROb2RlLmdldCgnY3VzdG9tUG9zaXRpb24nKSkge1xuICAgICAgICAgICAgdmFyIHBoID0gX3Njcm9sbGVyLm9wdGlvbnMuYmFzZUhlaWdodDtcbiAgICAgICAgICAgIHZhciBwdyA9IF9zY3JvbGxlci5vcHRpb25zLmJhc2VXaWR0aDtcbiAgICAgICAgICAgIHggPSAocHcgLSBfcm9vdE5vZGUuZ2V0U2l6ZSgpLndpZHRoKSAvIDI7XG4gICAgICAgICAgICB5ID0gKHBoIC0gX3Jvb3ROb2RlLmdldFNpemUoKS5oZWlnaHQpIC8gMjtcblxuICAgICAgICAgICAgdmFyIGR4ID0geCAtIF9yb290Tm9kZS5wb3NpdGlvbigpLng7XG4gICAgICAgICAgICB2YXIgZHkgPSB5IC0gX3Jvb3ROb2RlLnBvc2l0aW9uKCkueTtcbiAgICAgICAgICAgIF9yb290Tm9kZS50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9wYWdpbmF0aW9uTWFuYWdlci5wYWdpbmF0ZU5vZGUoX3Jvb3ROb2RlKTtcblxuICAgICAgICBfcG9zaXRpb25NYW5hZ2VyLmNhbGN1bGF0ZUxheW91dEZvck5vZGUoX3Jvb3ROb2RlKTtcblxuICAgICAgICBfcGFnaW5hdGlvbk1hbmFnZXIuc2V0UGFnaW5hdGlvblBvc2l0aW9uKF9yb290Tm9kZSk7XG4gICAgICAgIFxuICAgICAgICBzZWxmLmJsb2NrVmFsaWRhdGlvbiA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRzIG9wcG9ydHVuaXR5IHRvIGNyZWF0ZSBjb3B5IG9mIGFueSBOb2RlXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIGNvcGllZCBub2RlXG4gICAgICovXG4gICAgc2VsZi5jbG9uZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbmV3IE5vZGUoe1xuICAgICAgICAgICAgdHlwZUlkOiBub2RlLmRhdGFNb2RlbC50eXBlSWQsXG4gICAgICAgICAgICBsYWJlbDogbm9kZS5kYXRhTW9kZWwubGFiZWwsXG4gICAgICAgICAgICBjb2xvckNsYXNzOiBub2RlLmRhdGFNb2RlbC5jb2xvckNsYXNzLFxuICAgICAgICAgICAgY2FuRXhwYW5kOiBub2RlLmRhdGFNb2RlbC5jYW5FeHBhbmRcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhpZGVzIG9uZSBub2RlIC0gcmVtb3ZlcyBvbmx5IGZyb20gZ3JhcGgsIG5vdCBmcm9tIGxheW91dC5cbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBOb2RlIHdoaWNoIHdpbGwgYmUgaGlkZGVuXG4gICAgICovXG4gICAgc2VsZi5oaWRlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmICghbm9kZS5nZXQoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICB2YXIgcHJldiA9IG5vZGUuZ2V0UHJldk5vZGUoKTtcbiAgICAgICAgICAgIGlmIChwcmV2KSBfdW5lbWJlZE5vZGUobm9kZSwgcHJldik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5vZGUuc2V0KCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgIF9wYWdpbmF0aW9uTWFuYWdlci5oaWRlUGFnaW5hdGlvbihub2RlKTtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uIChjaCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaGlkZU5vZGUoY2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3Mgb25lIG5vZGUgLSBwdXRzIG5vZGUgb24gdGhlIGdyYXBoLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIE5vZGUgd2hpY2ggd2lsbCBiZSBzaG93ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHdpdGhvdXRDaGlsZHJlbiAtIGlmIHRydWUgY2hpbGRyZW4gYXJlbid0IGNvdW50ZWRcbiAgICAgKi9cbiAgICBzZWxmLnNob3dOb2RlID0gZnVuY3Rpb24gKG5vZGUsIHdpdGhvdXRDaGlsZHJlbikge1xuICAgICAgICBpZiAobm9kZS5nZXQoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBfZ3JhcGguYWRkQ2VsbChub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnBhcmVudEVkZ2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dOb2RlKG5vZGUuZ2V0UHJldk5vZGUoKSk7XG4gICAgICAgICAgICAgICAgX2dyYXBoLmFkZENlbGwobm9kZS5wYXJlbnRFZGdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuc2V0KCdoaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHZhciBwcmV2ID0gbm9kZS5nZXRQcmV2Tm9kZSgpO1xuICAgICAgICAgICAgaWYgKHByZXYpIF9lbWJlZE5vZGUobm9kZSwgcHJldik7XG5cbiAgICAgICAgICAgIF9wYWdpbmF0aW9uTWFuYWdlci5zaG93UGFnaW5hdGlvbihub2RlKTtcbiAgICAgICAgICAgIGlmICghd2l0aG91dENoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24gKGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd05vZGUoY2gpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFjdGlvbiBmb3IgYnJhbmNoXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gcm9vdCBub2RlIG9mIHRoZSBicmFuY2hcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsQmFjayAtIHBlcmZvcm1lZCBhY3Rpb25cbiAgICAgKi9cbiAgICBzZWxmLmRvRm9yQnJ1bmNoID0gZnVuY3Rpb24gKG5vZGUsIGNhbGxCYWNrKSB7XG4gICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgc2VsZi5kb0ZvckJydW5jaChjaGlsZCwgY2FsbEJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgY2FsbEJhY2sobm9kZSk7XG4gICAgfTtcblxuICAgIC8vUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuZCBlbWJlZHMgcGFnaW5hdGlvbiB0byBub2RlXG4gICAgICogQHBhcmFtIHtQYWdpbmF0aW9ufSBwYWdpbmF0aW9uIC0gUGFnaW5hdGlvbiBmb3Igbm9kZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub2RlSWQgLSBlZGdlcyBvZiB0aGlzIG5vZGUgd2lsbCBiZSBwb2dpbmF0ZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcHV0UGFnaW5hdGlvbiAocGFnaW5hdGlvbiwgbm9kZUlkKSB7XG4gICAgICAgIGlmIChfbm9kZXNCeUlkW25vZGVJZF0gJiYgIV9ub2Rlc0J5SWRbbm9kZUlkXS5nZXQoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICBfZ3JhcGguYWRkQ2VsbChwYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIF9ub2Rlc0J5SWRbbm9kZUlkXS5lbWJlZChwYWdpbmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgbm9kZSB0byB0aGUgbm9kZSBsaXN0IChub3Qgb24gbGF5b3V0KVxuICAgICAqIE5vdCBkb2VzIGl0IGlmIGVkZ2UgYWxyZWFkeSBleGlzdHNcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBOZXcgbm9kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaWdub3JSZXBlYXRlZCAtIElnbm9yZSByZXBlYXRpbmdcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcHV0Tm9kZSAobm9kZSwgaWdub3JSZXBlYXRlZCkge1xuICAgICAgICBpZiAoIV9ub2Rlc0J5VHlwZVtub2RlLnR5cGVJZF0gfHwgX25vZGVzQnlUeXBlW25vZGUudHlwZUlkXS5sZW5ndGggPT09IDAgfHwgaWdub3JSZXBlYXRlZCkge1xuICAgICAgICAgICAgaWYgKCFfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdKSBfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdID0gW107XG5cbiAgICAgICAgICAgIGlmIChfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdLmluZGV4T2Yobm9kZSkgPT09IC0xKSBfbm9kZXNCeVR5cGVbbm9kZS50eXBlSWRdLnB1c2gobm9kZSk7XG4gICAgICAgICAgICBfbm9kZXNCeUlkW25vZGUuaWRdID0gbm9kZTtcbiAgICAgICAgICAgIG5vZGUuc2V0TGF5b3V0KHNlbGYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBlZGdlIHRvIHRoZSBlZGdlIGxpc3QsIHRoZW5cbiAgICAgKiBhZGQgc291cmNlIGFuZCB0YXJnZXQgYW5kIHNvdXJjZSBub2RlXG4gICAgICogb24gdGhlIGxheW91dCAoaWYgdGhleSBhcmVuJ3QgeWV0KSBhbmRcbiAgICAgKiBuZXh0IGFkZHMgZWRnZSBvbiB0aGUgbGF5b3V0LlxuICAgICAqIE5vdCBkb2VzIGl0IGlmIGVkZ2UgYWxyZWFkeSBleGlzdHNcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgLSBOZXcgZWRnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiaW5kVG9JZCAtIElkIG9mIHRoZSBzb3VyY2Ugbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9wdXRFZGdlIChlZGdlLCBiaW5kVG9JZCkge1xuICAgICAgICBpZiAoIWJpbmRUb0lkIHx8ICFfbm9kZXNCeUlkW2JpbmRUb0lkXSkgYmluZFRvSWQgPSBfcm9vdE5vZGUuaWQ7XG5cbiAgICAgICAgaWYgKF9ub2Rlc0J5VHlwZVtlZGdlLnNvdXJjZVR5cGVJZF0gJiZcbiAgICAgICAgICAgIF9ub2Rlc0J5VHlwZVtlZGdlLnRhcmdldFR5cGVJZF0gJiZcbiAgICAgICAgICAgIGVkZ2UudGFyZ2V0VHlwZUlkID09PSBfbm9kZXNCeUlkW2JpbmRUb0lkXS50eXBlSWQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWRnZS5yZXZlcnNlRWRnZURpcmVjdGlvbih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3J0ID0gX2dldFNvdXJjZVBvcnQoZWRnZSwgX25vZGVzQnlJZFtiaW5kVG9JZF0pO1xuICAgICAgICBpZiAocG9ydCA9PT0gX25vZGVzQnlJZFtiaW5kVG9JZF0pIHtcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZUVkZ2UgPSBfZW5yaWNoRWRnZShlZGdlLCBiaW5kVG9JZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wbGV0ZUVkZ2UpIHtcblxuICAgICAgICAgICAgICAgIGlmICghY29tcGxldGVFZGdlLnRhcmdldC5nZXQoJ2hhc1Bvc2l0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3B1dE5vZGUoY29tcGxldGVFZGdlLnRhcmdldCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIF9sb2NhdGVOb2RlKGNvbXBsZXRlRWRnZS50YXJnZXQsIGJpbmRUb0lkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRlRWRnZS5zb3VyY2UuZ2V0KCdoYXNQb3NpdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wdXROb2RlKGNvbXBsZXRlRWRnZS5zb3VyY2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBfbG9jYXRlTm9kZShjb21wbGV0ZUVkZ2Uuc291cmNlLCBiaW5kVG9JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9lZGdlcy5wdXNoKGNvbXBsZXRlRWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcHV0RWRnZShlZGdlLCBwb3J0LmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEl0IENoZWNrcyB0aGVyZSBpcyBzYW1lIGVkZ2UgaW4gdGhlIGxheW91dFxuICAgICAqIEBwYXJhbSB7RWRnZX0gbmV3RWRnZSAtIE5ldyBlZGdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJpbmRUb0lkIC0gSWQgb2YgdGhlIHNvdXJjZSBub2RlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzRWRnZUV4aXN0cyAobmV3RWRnZSwgYmluZFRvSWQpIHtcbiAgICAgICAgcmV0dXJuIF9lZGdlcy5maWx0ZXIoZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICAgICAgICAgIGlmIChuZXdFZGdlLmlzUmV2ZXJzZURpcmVjdGlvbiA9PT0gZWRnZS5pc1JldmVyc2VEaXJlY3Rpb24gfHwgbmV3RWRnZS5pc1JldmVyc2VEaXJlY3Rpb24gJiYgZWRnZS5pc1JldmVyc2VEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBlZGdlLnR5cGVJZCA9PT0gbmV3RWRnZS50eXBlSWQgJiZcbiAgICAgICAgICAgICAgICAgICAgZWRnZS5zb3VyY2VUeXBlSWQgPT09IG5ld0VkZ2Uuc291cmNlVHlwZUlkKSAmJlxuICAgICAgICAgICAgICAgICAgICBlZGdlLnRhcmdldFR5cGVJZCA9PT0gbmV3RWRnZS50YXJnZXRUeXBlSWQgJiZcbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZS5zb3VyY2UuaWQgPT09IGJpbmRUb0lkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlLnRhcmdldC5pZCA9PT0gYmluZFRvSWRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggZWRnZS50eXBlSWQgPT09IG5ld0VkZ2UudHlwZUlkICYmXG4gICAgICAgICAgICAgICAgICAgIGVkZ2Uuc291cmNlVHlwZUlkID09PSBuZXdFZGdlLnRhcmdldFR5cGVJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgZWRnZS50YXJnZXRUeXBlSWQgPT09IG5ld0VkZ2Uuc291cmNlVHlwZUlkICYmXG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2Uuc291cmNlLmlkID09PSBiaW5kVG9JZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZS50YXJnZXQuaWQgPT09IGJpbmRUb0lkXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNvdXJjZSBhbmQgdGFyZ2V0IHR5cGUgaWRzLCBhbmQgYmFzaW5nIG9uIGl0LFxuICAgICAqIHB1dHMgY29uY3JldGUgc291cmNlIGFuZCB0YXJnZXQgb2JqZWN0cyBpbnRvIGVkZ2VcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGVkZ2UgLSBFZGdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJpbmRUb0lkIC0gSWQgb2YgdGhlIHNvdXJjZSBub2RlXG4gICAgICogQHJldHVybnMge0VkZ2V9IEVucmljaGVkIGVkZ2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZW5yaWNoRWRnZSAoZWRnZSwgYmluZFRvSWQpIHtcbiAgICAgICAgaWYgKF9pc0VkZ2VFeGlzdHMoZWRnZSwgYmluZFRvSWQpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIGlmICghYmluZFRvSWQpIGJpbmRUb0lkID0gX3Jvb3ROb2RlLmlkO1xuXG4gICAgICAgIGlmIChfbm9kZXNCeVR5cGVbZWRnZS5zb3VyY2VUeXBlSWRdICYmXG4gICAgICAgICAgICBfbm9kZXNCeVR5cGVbZWRnZS50YXJnZXRUeXBlSWRdICYmXG4gICAgICAgICAgICBlZGdlLnNvdXJjZVR5cGVJZCA9PT0gX25vZGVzQnlJZFtiaW5kVG9JZF0udHlwZUlkXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IF9ub2Rlc0J5SWRbYmluZFRvSWRdO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9nZXRGcmVlTm9kZUJ5VHlwZShlZGdlLnRhcmdldFR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCAmJiBfbm9kZXNCeVR5cGVbZWRnZS50YXJnZXRUeXBlSWRdWzBdKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi5jbG9uZU5vZGUoX25vZGVzQnlUeXBlW2VkZ2UudGFyZ2V0VHlwZUlkXVswXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVkZ2Uuc2V0U291cmNlKHNvdXJjZSwgdHJ1ZSk7XG4gICAgICAgICAgICBlZGdlLnNldFRhcmdldCh0YXJnZXQsIGZhbHNlKTtcblxuICAgICAgICAgICAgZWRnZS5zZXRDb2xvckNsYXNzKF9jb2xvckNvbmZpZ3VyYXRvci5nZXRDb2xvckNsYXNzRm9yRWxlbWVudChlZGdlLmRhdGFNb2RlbC5sYWJlbCkpO1xuICAgICAgICAgICAgdGFyZ2V0LnNldENvbG9yQ2xhc3MoZWRnZS5kYXRhTW9kZWwuY29sb3JDbGFzcyk7XG4gICAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zICh0YXJnZXQvc291cmNlKSBub2RlIGFzIGEgcG9ydCwgb3IsIGlmIHRoZXJlIGFyZSBlZGdlcyBcbiAgICAgKiB3aXRoIHNhbWUgdHlwZSwgaXQgd2lsbCByZXR1cm4gY3Jvc3NOb2RlXG4gICAgICogQHBhcmFtIHtFZGdlfSBlZGdlIC0gRWRnZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gcm9vdE5vZGUgLSAodGFyZ2V0L3NvdXJjZSkgbm9kZSwgd2hpY2ggaXMgZm9yIGNvbnRlY3RpbmcgYnkgZWRnZVxuICAgICAqIEByZXR1cm5zIHtOb2RlfSAodGFyZ2V0L3NvdXJjZSBvciBjcm9zc05vZGUpXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldFNvdXJjZVBvcnQgKGVkZ2UsIHJvb3ROb2RlKSB7XG4gICAgICAgIGlmIChyb290Tm9kZS50eXBlSWQgPT09ICdjcm9zc05vZGUnKSB7XG4gICAgICAgICAgICBlZGdlLnNldCgnbGFiZWxzJywgW10pO1xuICAgICAgICAgICAgZWRnZS5zb3VyY2VUeXBlSWQgPSAnY3Jvc3NOb2RlJztcbiAgICAgICAgICAgIGVkZ2UudXBkYXRlTWFya2VyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhpc3RlZEVkZ2UgPSByb290Tm9kZS5nZXRFZGdlQnlUeXBlKGVkZ2UudHlwZUlkLCBlZGdlLmlzUmV2ZXJzZURpcmVjdGlvbiwgZWRnZS5nZXRPcmllbnRhdGlvbigpKTtcblxuICAgICAgICBpZiAoIWV4aXN0ZWRFZGdlKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY3Jvc3NOb2RlO1xuICAgICAgICAgICAgaWYgKGV4aXN0ZWRFZGdlLnRhcmdldFR5cGVJZCAhPT0gJ2Nyb3NzTm9kZScgJiYgZXhpc3RlZEVkZ2Uuc291cmNlVHlwZUlkICE9PSAnY3Jvc3NOb2RlJykge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBleGlzdGVkRWRnZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV4aXN0ZWRFZGdlLnNvdXJjZTtcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUVkZ2UoZXhpc3RlZEVkZ2UpO1xuXG4gICAgICAgICAgICAgICAgY3Jvc3NOb2RlID0gbmV3IENyb3NzTm9kZShleGlzdGVkRWRnZS5kYXRhTW9kZWwuY29sb3JDbGFzcyk7XG4gICAgICAgICAgICAgICAgX3B1dE5vZGUoY3Jvc3NOb2RlLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIHZhciB0eXBlRWRnZSA9IG5ldyBFZGdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZUlkOiBleGlzdGVkRWRnZS5kYXRhTW9kZWwudHlwZUlkLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlSWQ6IGV4aXN0ZWRFZGdlLnNvdXJjZVR5cGVJZCxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VHlwZUlkOiAnY3Jvc3NOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGV4aXN0ZWRFZGdlLmRhdGFNb2RlbC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JDbGFzczogZXhpc3RlZEVkZ2UuZGF0YU1vZGVsLmNvbG9yQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogZXhpc3RlZEVkZ2UucGxhY2VtZW50LFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdHlwZUVkZ2UuaXNSZXZlcnNlRGlyZWN0aW9uID0gZWRnZS5pc1JldmVyc2VEaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgdHlwZUVkZ2UudXBkYXRlTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgdHlwZUVkZ2Uuc2V0U291cmNlKHNvdXJjZSwgdHJ1ZSwgJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICB0eXBlRWRnZS5zZXRUYXJnZXQoY3Jvc3NOb2RlLCBmYWxzZSwgJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgX2VkZ2VzLnB1c2godHlwZUVkZ2UpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9sb2NhdGVOb2RlKGNyb3NzTm9kZSwgcm9vdE5vZGUuaWQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlY29uZFBhcnQgPSBuZXcgRWRnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVJZDogZXhpc3RlZEVkZ2UuZGF0YU1vZGVsLnR5cGVJZCxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZUlkOiAnY3Jvc3NOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VHlwZUlkOiBleGlzdGVkRWRnZS50YXJnZXRUeXBlSWQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JDbGFzczogZXhpc3RlZEVkZ2UuZGF0YU1vZGVsLmNvbG9yQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogZXhpc3RlZEVkZ2UucGxhY2VtZW50LFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2Vjb25kUGFydC5pc1JldmVyc2VEaXJlY3Rpb24gPSBlZGdlLmlzUmV2ZXJzZURpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICBzZWNvbmRQYXJ0LnVwZGF0ZU1hcmtlcigpO1xuICAgICAgICAgICAgICAgIHNlY29uZFBhcnQuc2V0U291cmNlKGNyb3NzTm9kZSwgdHJ1ZSwgJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICBzZWNvbmRQYXJ0LnNldFRhcmdldCh0YXJnZXQsIGZhbHNlLCAncmlnaHQnKTtcbiAgICAgICAgICAgICAgICBfZWRnZXMucHVzaChzZWNvbmRQYXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3Jvc3NOb2RlID0gZXhpc3RlZEVkZ2UudGFyZ2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3Jvc3NOb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG5vZGUgZnJvbSB0aGUgbm9kZSBsaXN0LlxuICAgICAqIElmIG5vZGUgaXMgcHJlc2VudCBvbiBkaWFncmFtLCByZXR1cm5zIGNvcHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVJZCAtIElkIG9mIHRoZSBzb3VyY2Ugbm9kZVxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBGcmVlIG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0RnJlZU5vZGVCeVR5cGUgKHR5cGVJZCkge1xuICAgICAgICB2YXIgbm9kZXMgPSBfbm9kZXNCeVR5cGVbdHlwZUlkXTtcbiAgICAgICAgaWYgKCFub2RlcyB8fCBub2Rlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGlmICghbm9kZXNbaV0uZ2V0KCdoYXNQb3NpdGlvbicpKSByZXR1cm4gbm9kZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV0cyBub2RlIGludG8gbGF5b3V0LlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIE5vZGUgd2hpY2ggd2lsbCBiZSBwb3N0ZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmluZFRvSWQgLSBTb3VyY2Ugbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9sb2NhdGVOb2RlIChub2RlKSB7XG4gICAgICAgIGlmICghX3Jvb3ROb2RlKSB7XG4gICAgICAgICAgICBzZWxmLnNldFJvb3ROb2RlKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5zZXQoJ2hhc1Bvc2l0aW9uJywgdHJ1ZSk7XG4gICAgICAgIG5vZGUucmVpbml0KCk7XG4gICAgICAgIC8vIHNlbGYucmVjYWxjdWxhdGVMYXlvdXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWJlZCBhIG5vZGUgaW50byBwYXJlbnQgbm9kZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIE5vZGUgb2YgdGhlIGJyYW5jaFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IC0gUGFyZW50IG5vZGVcbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIF9lbWJlZE5vZGUgKG5vZGUsIHBhcmVudCkge1xuICAgICAgICBpZiAoIW5vZGUuaXNFbWJlZGRlZEluKHBhcmVudCkpIHBhcmVudC5lbWJlZChub2RlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGcmVlIHVwIGFuIGVtYmVkZGVkIG5vZGUgZnJvbSBwYXJlbnQgbm9kZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIE5vZGUgb2YgdGhlIGJyYW5jaFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IC0gUGFyZW50IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfdW5lbWJlZE5vZGUgKG5vZGUsIHBhcmVudCkge1xuICAgICAgICBpZiAobm9kZS5pc0VtYmVkZGVkSW4ocGFyZW50KSkgcGFyZW50LnVuZW1iZWQobm9kZSk7XG4gICAgfVxuXG4gICAgLy9IZXJlIHdlIGNhbGwgY29uc3RydWN0b3IgYWZ0ZXIgZGVmaW5pbmcgYWxsIGZ1bmN0aW9uc1xuICAgIF9pbml0aWFsaXplLmNhbGwoc2VsZiwgZ3JhcGgsIHBhcGVyLCBzY3JvbGxlcik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoTGF5b3V0O1xuXG4iLCJ2YXIgVFFHcmFtVUkgPSByZXF1aXJlKFwidmlzdWFsaXphdGlvbnMtbGlicmFyeVwiKTtcbnZhciBJbmZvUGFuZWwgPSByZXF1aXJlKFwiLi9pbmZvUGFuZWxcIik7XG52YXIgT3B0aW9uc1BhbmVsID0gcmVxdWlyZShcIi4vb3B0aW9uc1BhbmVsXCIpO1xuXG5mdW5jdGlvbiBEZWZhdWx0VUkob3B0aW9ucykge1xuICAgIC8vIEluaXRpYWxpemF0aW9uXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHZhciBfbmVpZ2hib3JHcmFtID0gb3B0aW9ucy5saW5lYWdlR3JhbTtcbiAgICB2YXIgbWFya3VwID1cbiAgICAgICAgJzxkaXYgY2xhc3M9XCJ0cS1uZy1kZWZhdWx0LXVzZXItdWlcIj4nICtcbiAgICAgICAgJzxkaXYgaWQ9XCJ0cUxnVG9vbGJhclwiPjwvZGl2PicgK1xuICAgICAgICAnPGRpdiBpZD1cInRxTGdJbmZvUGFuZWxcIj48L2Rpdj4nICtcbiAgICAgICAgJzxkaXYgaWQ9XCJ0cUxnT3B0aW9uc1BhbmVsXCI+PC9kaXY+JyArXG4gICAgICAgICc8ZGl2IGlkPVwidHFMZ1NlYXJjaFBhbmVsXCI+PC9kaXY+JyArXG4gICAgICAgIFwiPC9kaXY+XCI7XG5cbiAgICB2YXIgX2VsO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5iYXNlRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmJhc2VFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmJhc2VFbGVtZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIF9lbCA9IG9wdGlvbnMuYmFzZUVsZW1lbnQ7XG4gICAgfVxuICAgIGlmICghX2VsKSByZXR1cm47XG4gICAgX2VsLmlubmVySFRNTCA9IG1hcmt1cDtcblxuICAgIHZhciB0cUxnVG9vbGJhciA9IF9lbC5xdWVyeVNlbGVjdG9yKFwiI3RxTGdUb29sYmFyXCIpO1xuICAgIHZhciB0cUxnSW5mb1BhbmVsID0gX2VsLnF1ZXJ5U2VsZWN0b3IoXCIjdHFMZ0luZm9QYW5lbFwiKTtcbiAgICB2YXIgdHFMZ09wdGlvbnNQYW5lbCA9IF9lbC5xdWVyeVNlbGVjdG9yKFwiI3RxTGdPcHRpb25zUGFuZWxcIik7XG4gICAgdmFyIHRxTGdTZWFyY2hQYW5lbCA9IF9lbC5xdWVyeVNlbGVjdG9yKFwiI3RxTGdTZWFyY2hQYW5lbFwiKTtcbiAgICB2YXIgX2V4cGFuZEFsbCA9IHRydWU7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciB0b29scyA9IFtdO1xuXG4gICAgLy9kZWZhdWx0IGlzIHRydWVcbiAgICB2YXIgaW5jbHVkZVNlYXJjaCA9IHRydWU7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIFwiaW5jbHVkZVNlYXJjaFwiKSkge1xuICAgICAgICBpbmNsdWRlU2VhcmNoID0gb3B0aW9ucy5pbmNsdWRlU2VhcmNoO1xuICAgIH1cblxuICAgIGlmIChpbmNsdWRlU2VhcmNoKSB7XG4gICAgICAgIHRvb2xzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IFwidHFMZ1NlYXJjaEJ1dHRvblwiLFxuICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtc2VhcmNoXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJTZWFyY2hcIixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9vbHMgPSB0b29scy5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJ0cU5nVW5kb1wiLFxuICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtY2hldnJvbi1sZWZ0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJCYWNrXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9uZWlnaGJvckdyYW0udW5kb1N0YXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJ0cU5nUmVkb1wiLFxuICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtY2hldnJvbi1yaWdodFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiRm9yd2FyZFwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfbmVpZ2hib3JHcmFtLnJlZG9TdGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwidHFMZ1pvb21JblwiLFxuICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtc2VhcmNoLXBsdXNcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlpvb20gaW5cIixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX25laWdoYm9yR3JhbS56b29tKDAuMiwgeyBtYXg6IDQgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJ0cUxnWm9vbU91dFwiLFxuICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtc2VhcmNoLW1pbnVzXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJab29tIG91dFwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfbmVpZ2hib3JHcmFtLnpvb20oLTAuMiwgeyBtaW46IDAuMiB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcInpvb21Ub0ZpdFwiLFxuICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtZXhwYW5kXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJab29tIHRvIGZpdFwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfbmVpZ2hib3JHcmFtLnpvb20oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcInRxTGdSZXNldFwiLFxuICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtc3luY1wiLFxuICAgICAgICAgICAgbGFiZWw6IFwiUmVzZXQgbGF5b3V0XCIsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9uZWlnaGJvckdyYW0uZ2V0Tm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0KFwiY3VzdG9tUG9zaXRpb25cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF9uZWlnaGJvckdyYW0ucmVmcmVzaExheW91dCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiZXhwYW5kQWxsXCIsXG4gICAgICAgICAgICBpY29uOiBcImZhcyBmYS1leHBhbmQtYWx0XCIsXG4gICAgICAgICAgICBpY29uMjogXCJmYXMgZmEtY29tcHJlc3MtYWx0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJFeHBhbmQgbGFiZWxzXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9uZWlnaGJvckdyYW0uZnVsbE5vZGVMYWJlbHMoX2V4cGFuZEFsbCk7XG4gICAgICAgICAgICAgICAgX2V4cGFuZEFsbCA9ICFfZXhwYW5kQWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJzxkaXYgc3R5bGU9XCJmbGV4LWdyb3c6IDFcIj48L2Rpdj4nLFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJpbmZvUGFuZWxCdG5cIixcbiAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWluZm8tY2lyY2xlXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJOb2RlIGluZm9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwidHFMZ09wdGlvbnNCdXR0b25cIixcbiAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWJhcnNcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIk9wdGlvbnNcIixcbiAgICAgICAgfSxcbiAgICBdKTtcblxuICAgIC8vIFRvb2xiYXJcbiAgICB2YXIgdG9vbGJhciA9IG5ldyBUUUdyYW1VSS5Ub29sYmFyKHtcbiAgICAgICAgYmFzZUVsZW1lbnQ6IHRxTGdUb29sYmFyLFxuICAgICAgICB0b29sczogdG9vbHMsXG4gICAgfSk7XG4gICAgXG4gICAgaWYgKGluY2x1ZGVTZWFyY2gpIHtcbiAgICAgICAgbmV3IFRRR3JhbVVJLlNlYXJjaFBhbmVsKHtcbiAgICAgICAgICAgIGJhc2VFbGVtZW50OiB0cUxnU2VhcmNoUGFuZWwsXG4gICAgICAgICAgICB0cmlnZ2VyQnV0dG9uOiB0b29sYmFyLnJvb3RIdG1sLnF1ZXJ5U2VsZWN0b3IoXCIjdHFMZ1NlYXJjaEJ1dHRvblwiKSxcbiAgICAgICAgICAgIGhlYWRlcjogXCJTZWFyY2ggdGhpcyBOZWlnaGJvckdyYW3ihKJcIixcbiAgICAgICAgICAgIHNlYXJjaEJ1dHRvbklkOiBcInRxTmdTZWFyY2hCdG5cIixcbiAgICAgICAgICAgIHNlYXJjaElkOiBcInRxTmdTZWFyY2hcIixcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBhcmlhTGFiZWw6IFwiSW5wdXQgc2VhcmNoIGZvciB0aGlzIE5laWdoYm9yR3JhbVwiLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZXcgT3B0aW9uc1BhbmVsKHtcbiAgICAgICAgbmVpZ2hib3JHcmFtOiBfbmVpZ2hib3JHcmFtLFxuICAgICAgICBiYXNlRWxlbWVudDogdHFMZ09wdGlvbnNQYW5lbCxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgdHJpZ2dlckJ1dHRvbjogdG9vbGJhci5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiI3RxTGdPcHRpb25zQnV0dG9uXCIpLFxuICAgICAgICBsZWdlbmRzOiBvcHRpb25zLmxlZ2VuZHMsXG4gICAgfSk7XG5cbiAgICBuZXcgSW5mb1BhbmVsKHtcbiAgICAgICAgYmFzZUVsZW1lbnQ6IHRxTGdJbmZvUGFuZWwsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHRyaWdnZXJCdXR0b246IHRvb2xiYXIucm9vdEh0bWwucXVlcnlTZWxlY3RvcihcIiNpbmZvUGFuZWxCdG5cIiksXG4gICAgICAgIG5laWdoYm9yR3JhbTogX25laWdoYm9yR3JhbSxcbiAgICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdFVJO1xuIiwidmFyIGdyYXBoRWxlbWVudHMgPSByZXF1aXJlKCcuLi9ncmFwaEVsZW1lbnRzJyk7XG52YXIgU3Vic2NyaWJhYmxlID0gcmVxdWlyZSgnLi4vc3Vic2NyaXB0aW9uQVBJL3N1YnNjcmliZWFibGUnKTtcbnZhciBUUUdyYW1VSSA9IHJlcXVpcmUoJ3Zpc3VhbGl6YXRpb25zLWxpYnJhcnknKTtcblxuZnVuY3Rpb24gSW5mb1BhbmVsIChvcHRpb25zKSB7XG4gICAgU3Vic2NyaWJhYmxlLmFwcGx5KHRoaXMpOyAgIC8vIG1ha2UgdGhpcyBjbGFzcyBTdWJzY3JpYmFibGVcblxuICAgIHZhciBpbmZvVGVtcGxhdGUgPSBuZXcgVFFHcmFtVUkuSW5mb1BhbmVsKHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgYSBub2RlJyxcbiAgICB9KTtcbiAgICB2YXIgX25laWdoYm9yR3JhbSA9IG9wdGlvbnMubmVpZ2hib3JHcmFtO1xuXG4gICAgVFFHcmFtVUkuRmx5aW5nUGFuZWwuYXBwbHkodGhpcywgW3tcbiAgICAgICAgYmFzZUVsZW1lbnQ6IG9wdGlvbnMuYmFzZUVsZW1lbnQsXG4gICAgICAgIGFjdGl2ZTogb3B0aW9ucy5hY3RpdmUsXG4gICAgICAgIGhlYWRlcjogJ05vZGUgSW5mbycsXG4gICAgICAgIHRyaWdnZXJCdXR0b246IG9wdGlvbnMudHJpZ2dlckJ1dHRvbixcbiAgICAgICAgZW1wdHlCb2R5OiBmYWxzZSxcbiAgICAgICAgc2l6ZTogeyB3aWR0aDogJzMwMHB4JywgaGVpZ2h0OiAnNDUwcHgnfSxcbiAgICAgICAgYm9keTogaW5mb1RlbXBsYXRlLFxuICAgIH1dKTtcblxuICAgIF9uZWlnaGJvckdyYW0ub25Ob2RlU2VsZWN0ZWQoX3NldFNlbGVjdGVkRWxlbWVudCk7XG5cbiAgICBpbmZvVGVtcGxhdGUub24oJ3NlbGVjdGVkLWVsZW1lbnQtY2hhbmdlZCcsIGZ1bmN0aW9uIChzZWxlY3RlZElkKSB7XG4gICAgICAgIHZhciBub2RlcyA9IF9uZWlnaGJvckdyYW0uZ2V0Tm9kZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vZGVzW2ldLmlkID09PSBzZWxlY3RlZElkKSB7XG4gICAgICAgICAgICAgICAgX25laWdoYm9yR3JhbS5zZXRTZWxlY3RlZE5vZGUobm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIF9zZXRTZWxlY3RlZEVsZW1lbnQobm9kZXNbaV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gX3NldFNlbGVjdGVkRWxlbWVudCAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgZ3JhcGhFbGVtZW50cy5Ob2RlICYmIGVsZW1lbnQuZGF0YU1vZGVsKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSBub2RlLmRhdGFNb2RlbDtcblxuICAgICAgICAgICAgaW5mb1RlbXBsYXRlLnNldFNlbGVjdGVkRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgaWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgbGFiZWw6IG1vZGVsLmxhYmVsLFxuICAgICAgICAgICAgICAgIHR5cGVzOiBtb2RlbC50eXBlSWQsXG4gICAgICAgICAgICAgICAgZGF0YTogbW9kZWwuZGF0YSxcbiAgICAgICAgICAgICAgICByZWxhdGlvbnM6IF9nZXRSZWxhdGlvbnMoZWxlbWVudCksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5mb1RlbXBsYXRlLnNldFNlbGVjdGVkRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFJlbGF0aW9ucyAoZWxlbWVudCkge1xuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGVsZW1lbnQuZ2V0UGFyZW50KCk7XG4gICAgICAgIHZhciByZWxhdGVkTm9kZXMgPSBlbGVtZW50LmdldENoaWxkcmVuKHRydWUpO1xuXG4gICAgICAgIHZhciBzb3VyY2VzID0gcmVsYXRlZE5vZGVzLmZpbHRlcihmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcmV0dXJuICghbi5nZXREaXJlY3Rpb25SZWxhdGl2ZVRvTm9kZShlbGVtZW50KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyZW50Tm9kZSAmJiAoIWVsZW1lbnQuaXNSZXZlcnNlRGlyZWN0aW9uKCkpKSB7XG4gICAgICAgICAgICBzb3VyY2VzLnB1c2gocGFyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciB0YXJnZXRzID0gcmVsYXRlZE5vZGVzLmZpbHRlcihmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcmV0dXJuIChuLmdldERpcmVjdGlvblJlbGF0aXZlVG9Ob2RlKGVsZW1lbnQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJlbnROb2RlICYmIChlbGVtZW50LmlzUmV2ZXJzZURpcmVjdGlvbigpKSkge1xuICAgICAgICAgICAgdGFyZ2V0cy5wdXNoKHBhcmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoc291cmNlcyAmJiBzb3VyY2VzLmxlbmd0aCA+IDAgfHwgdGFyZ2V0cyAmJiB0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5jb21pbmdzOiBzb3VyY2VzLm1hcChmdW5jdGlvbiAoZWwpIHsgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZWwuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZWwuZGF0YU1vZGVsLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG91dGdvaW5nczogdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKGVsKSB7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGVsLmRhdGFNb2RlbC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgICAgICAgICBcbn1cbm1vZHVsZS5leHBvcnRzID0gSW5mb1BhbmVsO1xuIiwidmFyIFN1YnNjcmliYWJsZSA9IHJlcXVpcmUoXCIuLi9zdWJzY3JpcHRpb25BUEkvc3Vic2NyaWJlYWJsZVwiKTtcbnZhciBUUUdyYW1VSSA9IHJlcXVpcmUoXCJ2aXN1YWxpemF0aW9ucy1saWJyYXJ5XCIpO1xuXG5mdW5jdGlvbiBPcHRpb25zUGFuZWwob3B0aW9ucykge1xuICAgIFN1YnNjcmliYWJsZS5hcHBseSh0aGlzKTsgLy8gbWFrZSB0aGlzIGNsYXNzIFN1YnNjcmliYWJsZVxuXG4gICAgdmFyIF9sZWdlbmRzID0gb3B0aW9ucy5sZWdlbmRzIHx8IFtdO1xuICAgIHZhciBfbmVpZ2hib3JHcmFtID0gb3B0aW9ucy5uZWlnaGJvckdyYW07XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgVFFHcmFtVUkuRmx5aW5nUGFuZWwuYXBwbHkodGhpcywgW1xuICAgICAgICB7XG4gICAgICAgICAgICBiYXNlRWxlbWVudDogb3B0aW9ucy5iYXNlRWxlbWVudCxcbiAgICAgICAgICAgIGFjdGl2ZTogb3B0aW9ucy5hY3RpdmUsXG4gICAgICAgICAgICBoZWFkZXI6IFwiT3B0aW9uc1wiLFxuICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbjogb3B0aW9ucy50cmlnZ2VyQnV0dG9uLFxuICAgICAgICAgICAgcmVtb3ZlQmFja2dyb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MDBweFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBUUUdyYW1VSS5UYWJQYW5lbCh7XG4gICAgICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0cVVpR2VuZXJhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiR2VuZXJhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cImV4cG9ydEdyb3VwXCIgY2xhc3M9XCJ0cS1sYWJlbFwiPkV4cG9ydCBhczwvbGFiZWw+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImV4cG9ydEdyb3VwXCIgY2xhc3M9XCJ0cS11aS1ncm91cCB0cS11aS1leHBvcnQtZ3JvdXBcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICAgIDxidXR0b24gaWQ9XCJ0cVVpRXhwb3J0U1ZHXCIgdGl0bGU9XCJFeHBvcnQgZGlhZ3JhbSB0byBTVkdcIiBjbGFzcz1cInRxLWJ1dHRvblwiPlNWRzwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgPGJ1dHRvbiBpZD1cInRxVWlFeHBvcnRQTkdcIiB0aXRsZT1cIkV4cG9ydCBkaWFncmFtIHRvIFBOR1wiIGNsYXNzPVwidHEtYnV0dG9uXCI+UE5HPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwiaG93VG9Vc2VHcm91cFwiIGNsYXNzPVwidHEtbGFiZWxcIj5Ib3cgdG8gdXNlPC9sYWJlbD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiaG93VG9Vc2VHcm91cFwiIGNsYXNzPVwidHEtdWktZ3JvdXAgdHEtdWktb3B0LWdyb3VwXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgPGJ1dHRvbiBpZD1cInRxVWlIZWxwQnRuXCIgdGl0bGU9XCJIZWxwXCIgY2xhc3M9XCJ0cS1idXR0b25cIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgICAgICAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtaW5mby1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+ICAgICAgICAgICAgICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICAgIDwvYnV0dG9uPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICAgIDxhIGNsYXNzPVwidHEtYnV0dG9uXCIgdGl0bGU9XCJEb2N1bWVudGF0aW9uXCIgaHJlZj1cIi4vZG9jdW1lbnRhdGlvbi9pbmRleC5odG1sXCI+RE9DPC9hPiAgICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0cVVpTGVnZW5kc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTGVnZW5kc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogbmV3IFRRR3JhbVVJLkxlZ2VuZHMoeyBsZWdlbmRzOiBfbGVnZW5kcyB9KSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgXSk7XG5cbiAgICAvLyBHZW5lcmFsXG5cbiAgICB2YXIgc3ZnQnV0dG9uID0gc2VsZi5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiI3RxVWlFeHBvcnRTVkdcIik7XG4gICAgdmFyIHBuZ0J1dHRvbiA9IHNlbGYucm9vdEh0bWwucXVlcnlTZWxlY3RvcihcIiN0cVVpRXhwb3J0UE5HXCIpO1xuICAgIHZhciBoZWxwQnV0dG9uID0gc2VsZi5yb290SHRtbC5xdWVyeVNlbGVjdG9yKFwiI3RxVWlIZWxwQnRuXCIpO1xuXG4gICAgc3ZnQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9uZWlnaGJvckdyYW0uZXhwb3J0KHtcbiAgICAgICAgICAgIHR5cGU6IFwic3ZnXCIsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwbmdCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX25laWdoYm9yR3JhbS5leHBvcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJwbmdcIixcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhlbHBCdXR0b24ub25jbGljayA9IG9wdGlvbnMub25QcmVzc0hlbHA7XG59XG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbnNQYW5lbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFBhZ2luYXRpb24gPSByZXF1aXJlKCcuL3BhZ2luYXRpb24nKTtcblxudmFyIENyb3NzTm9kZSA9IHJlcXVpcmUoJy4vZ3JhcGhFbGVtZW50cycpLkNyb3NzTm9kZTtcblxuLy8gVGhleSBhcmUgdXNlZCB3aGVuIHdlIG5lZWQgdG8gbG9jYXRlIG5vZGVzIG9uIHRoZSBncmFwaFxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIERFRkFVTFRfUEFHRV9TSVpFOiA1XG59O1xuXG4vKipcbiAqIExheW91dFBhZ2luYXRpb25NYW5hZ2VyLlxuICogTWFuYWdlIHBhZ2luYXRpb24uXG4gKlxuICogQ29uc3RydWN0b3IgcGFyYW1ldGVyczpcbiAqICAgICAgX2xheW91dDogR3JhcGhMYXlvdXRcbiAqICAgICAgX29wdGlvbnM6IHtcbiAqICAgICAgICAgIERFRkFVTFRfUEFHRV9TSVpFOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MT1JfQ0xBU1NfQ09VTlQ6IG51bWJlciwgXG4gKiAgICAgICAgICBNQVhfTEFCRUxfTEVOR1RIOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MX09GRlNFVDogbnVtYmVyLCBcbiAqICAgICAgICAgIFJPV19PRkZTRVQ6IG51bWJlciwgXG4gKiAgICAgICAgICBDUk9TU19OT0RFX09GRlNFVDogbnVtYmVyLCBcbiAqICAgICAgICAgIENPTE9SX0NMQVNTX01BUDoge1xuICogICAgICAgICAgICAgICdzdWJDbGFzc09mJzogc3RyaW5nLCBcbiAqICAgICAgICAgICAgICAndHlwZSc6IHN0cmluZ1xuICogICAgICAgICAgfVxuICogICAgICB9XG4gKlxuICogUHVibGljIG1ldGhvZHM6XG4gKiAgICAgIHBhZ2luYXRlTm9kZXMobm9kZXM6IEFycmF5KTogdm9pZFxuICogICAgICBwYWdpbmF0ZU5vZGUocm9vdE5vZGU6IE5vZGUpOiB2b2lkXG4gKiAgICAgIGhpZGVQYWdpbmF0aW9uKG5vZGU6IE5vZGUpOiB2b2lkXG4gKiAgICAgIHNob3dQYWdpbmF0aW9uKG5vZGU6IE5vZGUpOiB2b2lkXG4gKiAgICAgIHJlbW92ZVBhZ2luYXRpb24obm9kZTogTm9kZSk6IHZvaWRcbiAqICAgICAgc2V0UGFnaW5hdGlvblBvc2l0aW9uKG5vZGU6IE5vZGUpOiB2b2lkXG4gKiAgICAgIGRlZmF1bHRFZGdlQ29tcGFyYXRvcihlZGdlMTogRWRnZSwgZWRnZTI6IEVkZ2UpOiBudW1iZXJcbiAqL1xuZnVuY3Rpb24gTGF5b3V0UGFnaW5hdGlvbk1hbmFnZXIgKF9sYXlvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBERUZBVUxUX1BBR0VfU0laRSA9IChfb3B0aW9ucyAmJiBfb3B0aW9ucy5ERUZBVUxUX1BBR0VfU0laRSAhPSB1bmRlZmluZWQgPyBfb3B0aW9ucy5ERUZBVUxUX1BBR0VfU0laRSA6IGRlZmF1bHRPcHRpb25zLkRFRkFVTFRfUEFHRV9TSVpFKTtcblxuICAgIC8qKlxuICAgICAqIEl0IGRvZXMgcGFnaW5hdGlvbiBmb3IgYWxsIG5vZGVzIGZyb20gdGhlIGxpc3RcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBub2RlcyAtIGFycmF5IG9mIG5vZGVzXG4gICAgICovXG4gICAgc2VsZi5wYWdpbmF0ZU5vZGVzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgIGlmIChub2Rlcykgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgc2VsZi5wYWdpbmF0ZU5vZGUobm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJdCBkb2VzIHBhZ2luYXRpb24gZm9yIHRoZSBub2RlIGFuZCBmb3IgaGlzIGNoaWxkcmVuXG4gICAgICogQHBhcmFtIHtOb2RlfSByb290Tm9kZVxuICAgICAqL1xuICAgIHNlbGYucGFnaW5hdGVOb2RlID0gZnVuY3Rpb24gKHJvb3ROb2RlKSB7XG4gICAgICAgIGlmICghcm9vdE5vZGUuZ2V0KCdoaWRkZW4nKSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gX3BhZ2luYXRlQW5kU29ydENoaWxkcmVuT2ZOb2RlKHJvb3ROb2RlKTtcbiAgICAgICAgICAgIHNlbGYucGFnaW5hdGVOb2RlcyhjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcGFnaW5hdGlvbiBlbGVtZW50XG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICovXG4gICAgc2VsZi5oaWRlUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmdldFBhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgbm9kZS5nZXRQYWdpbmF0aW9uKCkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgcGFnaW5hdGlvbiBlbGVtZW50XG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICovXG4gICAgc2VsZi5zaG93UGFnaW5hdGlvbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmdldFBhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgX2xheW91dC5wdXQobm9kZS5nZXRQYWdpbmF0aW9uKCksIG5vZGUuaWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIHBhZ2luYXRpb24gZWxlbWVudCBmcm9tIHRoZSBncmFwaFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAqL1xuICAgIHNlbGYucmVtb3ZlUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmdldFBhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgbm9kZS5nZXRQYWdpbmF0aW9uKCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBub2RlLnNldFBhZ2luYXRpb24obnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbmV3IHBvc2l0aW9uIG9mIHRoZSBwYWdpbmF0aW9uIGVsZW1lbnQgYW5kIG1vdmVzIGl0IHRvIHRoYXQgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBzZWxmLnNldFBhZ2luYXRpb25Qb3NpdGlvbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmdldFBhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgdmFyIHBhZ2luYXRpb24gPSBub2RlLmdldFBhZ2luYXRpb24oKSxcbiAgICAgICAgICAgICAgICB4ID0gMCxcbiAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIHZhciBzY2FsZSA9IF9sYXlvdXQuZ2V0U2NhbGUoKTtcbiAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uV2lkdGggPSBwYWdpbmF0aW9uLmdldCgnc2l6ZScpLndpZHRoIC8gc2NhbGUuc3g7XG4gICAgICAgICAgICB2YXIgcGFnaW5hdGlvbkhlaWdodCA9IHBhZ2luYXRpb24uZ2V0KCdzaXplJykuaGVpZ2h0IC8gc2NhbGUuc3k7XG5cbiAgICAgICAgICAgIGlmIChwYWdpbmF0aW9uLmdldFR5cGUoKSA9PT0gJ25vZGVzJykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmlkID09PSBfbGF5b3V0LmdldFJvb3ROb2RlKCkuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IG5vZGUucG9zaXRpb24oKS54ICsgKG5vZGUuZ2V0U2l6ZSgpLndpZHRoIC0gcGFnaW5hdGlvbldpZHRoKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBub2RlLnBvc2l0aW9uKCkueSAtIHBhZ2luYXRpb25IZWlnaHQgLSAoNSAvIHNjYWxlLnN5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmdldENoaWxkcmVuKCkuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhY2hpbGQuZ2V0KCdoaWRkZW4nKSAmJiAhY2hpbGQuZ2V0KCdjdXN0b21Qb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5vZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkgZmlyc3ROb2RlID0gY2hpbGRyZW5bMF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IGZpcnN0Tm9kZS5wb3NpdGlvbigpLnggKyAoZmlyc3ROb2RlLmdldFNpemUoKS53aWR0aCAtIHBhZ2luYXRpb25XaWR0aCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGZpcnN0Tm9kZS5wb3NpdGlvbigpLnkgLSBwYWdpbmF0aW9uSGVpZ2h0IC0gKDUgLyBzY2FsZS5zeSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gbm9kZS5wb3NpdGlvbigpLnggLSBwYWdpbmF0aW9uV2lkdGggLSAoMyAvIHNjYWxlLnN4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBub2RlLnBvc2l0aW9uKCkueSArIChub2RlLmdldFNpemUoKS5oZWlnaHQgLSBwYWdpbmF0aW9uSGVpZ2h0KSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSBub2RlLnBvc2l0aW9uKCkueCArIChub2RlLmdldERpcmVjdGlvbigpID8gbm9kZS5nZXRTaXplKCkud2lkdGggKyAoMyAvIHNjYWxlLnN4KSA6IC1wYWdpbmF0aW9uV2lkdGggLSAoMyAvIHNjYWxlLnN4KSk7XG4gICAgICAgICAgICAgICAgeSA9IG5vZGUucG9zaXRpb24oKS55ICsgKG5vZGUuZ2V0U2l6ZSgpLmhlaWdodCAtIHBhZ2luYXRpb25IZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYWdpbmF0aW9uLnBvc2l0aW9uKCkueCA9PSB4ICYmIHBhZ2luYXRpb24ucG9zaXRpb24oKS55ID09IHkpIHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLnVwZGF0ZVZpZXdQb3NpdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLnNldCgncG9zaXRpb24nLCB7eDogeCwgeTogeX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBzZWxmLnNldFBhZ2luYXRpb25Qb3NpdGlvbihjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjb21wYXJhdG9yIGZvciBzb3J0aW5nIGNoaWxkLWJyYW5jaGVzIG9mIHRoZSBub2RlXG4gICAgICogQHBhcmFtICB7RWRnZX0gZWRnZTFcbiAgICAgKiBAcGFyYW0gIHtFZGdlfSBlZGdlMlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgc2VsZi5kZWZhdWx0RWRnZUNvbXBhcmF0b3IgPSBmdW5jdGlvbiAoZWRnZTEsIGVkZ2UyKSB7XG4gICAgICAgIHZhciBub2RlMSA9IChlZGdlMS50YXJnZXQgPyBlZGdlMS50YXJnZXQgOiB7ZGF0YU1vZGVsOiB7fX0pO1xuICAgICAgICB2YXIgbm9kZTIgPSAoZWRnZTIudGFyZ2V0ID8gZWRnZTIudGFyZ2V0IDoge2RhdGFNb2RlbDoge319KTtcblxuICAgICAgICB2YXIgYSA9IG51bGw7XG5cbiAgICAgICAgaWYgKG5vZGUxIGluc3RhbmNlb2YgQ3Jvc3NOb2RlICYmIG5vZGUxLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgIG5vZGUxLnNvcnRFZGdlcyhzZWxmLmRlZmF1bHRFZGdlQ29tcGFyYXRvcik7XG4gICAgICAgICAgICBhID0gbm9kZTEuZ2V0Q2hpbGRyZW4oKVswXS5kYXRhTW9kZWwubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGEgPSBub2RlMS5kYXRhTW9kZWwubGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEpIGEgPSBhLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgdmFyIGIgPSBudWxsO1xuICAgICAgICBpZiAobm9kZTIgaW5zdGFuY2VvZiBDcm9zc05vZGUgJiYgbm9kZTIuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICAgICAgbm9kZTIuc29ydEVkZ2VzKHNlbGYuZGVmYXVsdEVkZ2VDb21wYXJhdG9yKTtcbiAgICAgICAgICAgIGIgPSBub2RlMi5nZXRDaGlsZHJlbigpWzBdLmRhdGFNb2RlbC5sYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGIgPSBub2RlMi5kYXRhTW9kZWwubGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIpIGIgPSBiLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBvbmx5IG5vZGVzIHdoaWNoIGV4aXN0cyBvbiBjdXJyZW50IHBhZ2UgYW5kIGhpZGVzIG90aGVyIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gcm9vdE5vZGUgLSBQYXJlbnQgb2YgdGhlIHBhZ2luYXRlZCBub2Rlc1xuICAgICAqIEByZXR1bnJzIHtBcnJheX0gTm9kZXMgd2hpY2ggZXhpc3RzIG9uIGN1cnJlbnQgcGFnZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9wYWdpbmF0ZUFuZFNvcnRDaGlsZHJlbk9mTm9kZSAocm9vdE5vZGUpIHtcbiAgICAgICAgdmFyIG1heFBhZ2VTaXplID0gKHJvb3ROb2RlLmlzUm9vdE5vZGUoKSA/IERFRkFVTFRfUEFHRV9TSVpFICogMiA6IERFRkFVTFRfUEFHRV9TSVpFKTtcblxuICAgICAgICByb290Tm9kZS5zb3J0RWRnZXMoc2VsZi5kZWZhdWx0RWRnZUNvbXBhcmF0b3IpO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSByb290Tm9kZS5nZXRDaGlsZHJlbigpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IG1heFBhZ2VTaXplKSB7XG4gICAgICAgICAgICBpZiAoIXJvb3ROb2RlLmdldFBhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgICAgIF9jcmVhdGVQYWdpbmF0aW9uKHJvb3ROb2RlLCBtYXhQYWdlU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3BhZ2luYXRlKGNoaWxkcmVuLCByb290Tm9kZS5nZXRQYWdpbmF0aW9uKCkuZ2V0U3RhdGUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgX2xheW91dC5zaG93Tm9kZShub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQYWdpbmF0ZXMgYXJyYXkgb2Ygbm9kZXMuXG4gICAgICogQHBhcmFtIHtBcnJheX0gbm9kZXMgLSBBcnJheSBvZiBub2Rlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYWdpbmF0aW9uIC0geyBwYWdlU2l6ZTpudW1iZXIsIGN1clBhZ2U6bnVtYmVyLCB0b3RhbENvdW50Om51bWJlciwgcGFnZUNvdW50Om51bWJlciB9XG4gICAgICogQHJldHVucnMge0FycmF5fSBOb2RlcyB3aGljaCBleGlzdHMgb24gY3VycmVudCBwYWdlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3BhZ2luYXRlIChub2RlcywgcGFnaW5hdGlvbikge1xuICAgICAgICB2YXIgcGFnaW5hdGVkTm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIGN1ck1pbiA9IHBhZ2luYXRpb24uY3VyUGFnZSAqIHBhZ2luYXRpb24ucGFnZVNpemU7XG4gICAgICAgIHZhciBjdXJNYXggPSAocGFnaW5hdGlvbi5jdXJQYWdlICsgMSkgKiBwYWdpbmF0aW9uLnBhZ2VTaXplO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBjdXJNaW4gJiYgaW5kZXggPCBjdXJNYXgpIHtcbiAgICAgICAgICAgICAgICBfbGF5b3V0LnNob3dOb2RlKG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHBhZ2luYXRlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9sYXlvdXQuaGlkZU5vZGUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhZ2luYXRlZE5vZGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHBhZ2luYXRpb24gZWxlbWVudCwgYWRkcyBpdCB0byB0aGUgZ3JhcGggYW5kIGVtYmVkcyBpdCBpbnRvIHRoZSBub2RlXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCAtIG1heGltdW0gbnVtYmVyIG9mIG5vZGVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NyZWF0ZVBhZ2luYXRpb24gKG5vZGUsIG1heCkge1xuICAgICAgICB2YXIgcGFnaW5hdGlvbixcbiAgICAgICAgICAgIHR5cGU7XG5cbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBDcm9zc05vZGUgfHwgbm9kZS5pZCA9PT0gX2xheW91dC5nZXRSb290Tm9kZSgpLmlkKSB7XG4gICAgICAgICAgICB0eXBlID0gJ25vZGVzJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR5cGUgPSAnZWRnZXMnO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFnaW5hdGlvbiA9IG5ldyBQYWdpbmF0aW9uKG5vZGUsIF9sYXlvdXQsIG1heCwgdHlwZSwgX29wdGlvbnMpO1xuICAgICAgICBub2RlLnNldFBhZ2luYXRpb24ocGFnaW5hdGlvbik7XG4gICAgICAgIF9sYXlvdXQucHV0KHBhZ2luYXRpb24sIG5vZGUuaWQpO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0UGFnaW5hdGlvbk1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDcm9zc05vZGUgPSByZXF1aXJlKCcuL2dyYXBoRWxlbWVudHMnKS5Dcm9zc05vZGU7XG5cbi8vIFRoZXkgYXJlIHVzZWQgd2hlbiB3ZSBuZWVkICB0byBsb2NhdGUgbm9kZXMgb24gdGhlIGdyYXBoXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgQ09MX09GRlNFVDogMTAwLCAgICAgICAgLy8gSXQgbmVlZGVkIHRvIGNhbGN1bGF0ZSBkaXN0YW5jZSBiZXR3ZWVuIGNvbHVtbnMgaW4gdGhlIGdyYXBoXG4gICAgUk9XX09GRlNFVDogMzAsICAgICAgICAvLyBJdCBuZWVkZWQgdG8gY2FsY3VsYXRlIGRpc3RhbmNlIGJldHdlZW4gcm93cyBpbiB0aGUgZ3JhcGhcbiAgICBDUk9TU19OT0RFX09GRlNFVDogMzAsIC8vIEl0IGRlZmluZXMgb2Zmc2V0IG9mIHRoZSBjcm9zcyBub2RlIHJlbGF0aXZlIHRvIHRoZSBuZXh0IGNvbHVtbiBwb3NpdGlvblxuICAgIEVMRU1FTlRfV0lEVEg6IDEzMFxufTtcblxuLyoqXG4gKiBMYXlvdXRQb3NpdGlvbk1hbmFnZXIuXG4gKiBNYW5hZ2UgcG9zaXRpb24gb2Ygbm9kZXMuXG4gKlxuICogQ29uc3RydWN0b3IgcGFyYW1ldGVyczpcbiAqICAgICAgX29wdGlvbnM6IHtcbiAqICAgICAgICAgIERFRkFVTFRfUEFHRV9TSVpFOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MT1JfQ0xBU1NfQ09VTlQ6IG51bWJlciwgXG4gKiAgICAgICAgICBNQVhfTEFCRUxfTEVOR1RIOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MX09GRlNFVDogbnVtYmVyLCBcbiAqICAgICAgICAgIFJPV19PRkZTRVQ6IG51bWJlciwgXG4gKiAgICAgICAgICBDUk9TU19OT0RFX09GRlNFVDogbnVtYmVyLCBcbiAqICAgICAgICAgIENPTE9SX0NMQVNTX01BUDoge1xuICogICAgICAgICAgICAgICdzdWJDbGFzc09mJzogc3RyaW5nLCBcbiAqICAgICAgICAgICAgICAndHlwZSc6IHN0cmluZ1xuICogICAgICAgICAgfVxuICogICAgICB9XG4gKlxuICogUHVibGljIG1ldGhvZHM6XG4gKiAgICAgIGdldFZlcnRpY2FsQnJhbmNoT2Zmc2V0UmVsYXRpdmVUb05vZGUodHJlZTogQXJyYXksIG1pZGRsZU5vZGU6IE5vZGUpOiBudW1iZXJcbiAqICAgICAgY2FsY3VsYXRlVHJlZShyb290Tm9kZXM6IEFycmF5LCBjb2x1bW5Qb3NpdGlvbjogbnVtYmVyLCBkaXJlY3Rpb246IGJvb2xlYW4pOiB2b2lkXG4gKiAgICAgIHRyYW5zbGF0ZUJydW5jaChyb290Tm9kZXM6IG5vZGUsIHhPZmZzZXQ6IG51bWJlciwgeU9mZnNldDogbnVtYmVyKTogdm9pZFxuICovXG5mdW5jdGlvbiBMYXlvdXRQb3NpdGlvbk1hbmFnZXIgKF9vcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIENPTF9PRkZTRVQgPSAoX29wdGlvbnMgJiYgX29wdGlvbnMuQ09MX09GRlNFVCAhPSB1bmRlZmluZWQgPyBfb3B0aW9ucy5DT0xfT0ZGU0VUIDogZGVmYXVsdE9wdGlvbnMuQ09MX09GRlNFVCk7XG4gICAgdmFyIFJPV19PRkZTRVQgPSAoX29wdGlvbnMgJiYgX29wdGlvbnMuUk9XX09GRlNFVCAhPSB1bmRlZmluZWQgPyBfb3B0aW9ucy5ST1dfT0ZGU0VUIDogZGVmYXVsdE9wdGlvbnMuUk9XX09GRlNFVCk7XG4gICAgdmFyIENST1NTX05PREVfT0ZGU0VUID0gKF9vcHRpb25zICYmIF9vcHRpb25zLkNST1NTX05PREVfT0ZGU0VUICE9IHVuZGVmaW5lZCA/IF9vcHRpb25zLkNST1NTX05PREVfT0ZGU0VUIDogZGVmYXVsdE9wdGlvbnMuQ1JPU1NfTk9ERV9PRkZTRVQpO1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgZ2l2ZW4gbm9kZSBhcyBhIHJvb3QgYW5kIHBsYWNlc1xuICAgICAqIGFsbCBjaGlsZHJlbiBhcm91bmQgdGhlIHJvb3QgYWNjb3JkaW5nIHRvIG91ciBsYXlvdXQuXG4gICAgICogQHBhcmFtIHtOb2RlfSByb290Tm9kZSAtIHJvb3Qgbm9kZSBvciBub2RlIHdoaWNoIGhhcyBjdXN0b20gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIG5vdGhpbmc7XG4gICAgICovXG4gICAgc2VsZi5jYWxjdWxhdGVMYXlvdXRGb3JOb2RlID0gZnVuY3Rpb24gKHJvb3ROb2RlKSB7XG4gICAgICAgIHZhciBwb3MgPSByb290Tm9kZS5wb3NpdGlvbigpO1xuICAgICAgICB2YXIgdHJlZXMgPSBfZ2V0TGVmdFJpZ2h0VHJlZXMocm9vdE5vZGUpO1xuXG4gICAgICAgIHZhciBjb2xfb2Zmc2V0ID0gKHJvb3ROb2RlIGluc3RhbmNlb2YgQ3Jvc3NOb2RlID8gQ1JPU1NfTk9ERV9PRkZTRVQgOiBDT0xfT0ZGU0VUKTtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSB7IDA6IChyb290Tm9kZSBpbnN0YW5jZW9mIENyb3NzTm9kZSA/IFtdIDogW3Jvb3ROb2RlXSkgfTtcbiAgICAgICAgdmFyIGNvbHVtbnNSID0gX2NhbGN1bGF0ZVRyZWUodHJlZXMucmlnaHRUcmVlLCBwb3MueCArIHJvb3ROb2RlLmdldFNpemUoKS53aWR0aCArIGNvbF9vZmZzZXQsIHRydWUpO1xuICAgICAgICB2YXIgY29sdW1uc0wgPSBfY2FsY3VsYXRlVHJlZSh0cmVlcy5sZWZ0VHJlZSwgcG9zLnggLSBjb2xfb2Zmc2V0LCBmYWxzZSk7XG5cbiAgICAgICAgY29sdW1uc1IuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uLCBpbmRleCkge1xuICAgICAgICAgICAgY29sdW1uc1tpbmRleCArIDFdID0gY29sdW1uO1xuICAgICAgICB9KTtcbiAgICAgICAgY29sdW1uc0wuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uLCBpbmRleCkge1xuICAgICAgICAgICAgY29sdW1uc1stKGluZGV4ICsgMSldID0gY29sdW1uO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbGVmdEJydW5jaFRvcE9mZnNldCA9IF9nZXRWZXJ0aWNhbEJyYW5jaE9mZnNldFJlbGF0aXZlVG9Ob2RlKHRyZWVzLmxlZnRUcmVlLCByb290Tm9kZSk7XG4gICAgICAgIHZhciByaWdodEJydW5jaFRvcE9mZnNldCA9IF9nZXRWZXJ0aWNhbEJyYW5jaE9mZnNldFJlbGF0aXZlVG9Ob2RlKHRyZWVzLnJpZ2h0VHJlZSwgcm9vdE5vZGUpO1xuXG4gICAgICAgIHNlbGYudHJhbnNsYXRlQnJ1bmNoKHRyZWVzLmxlZnRUcmVlLCAwLCBsZWZ0QnJ1bmNoVG9wT2Zmc2V0KTtcbiAgICAgICAgc2VsZi50cmFuc2xhdGVCcnVuY2godHJlZXMucmlnaHRUcmVlLCAwLCByaWdodEJydW5jaFRvcE9mZnNldCk7XG5cbiAgICAgICAgX2NhbGN1bGF0ZVJldmVyc2VCcmFuY2hlc09mVHJlZShyb290Tm9kZSwgY29sdW1ucyk7XG5cbiAgICAgICAgdmFyIG5ld1BvcyA9IHJvb3ROb2RlLnBvc2l0aW9uKCk7XG4gICAgICAgIHJvb3ROb2RlLnBvc2l0aW9uKHBvcy54LCBwb3MueSk7XG5cbiAgICAgICAgc2VsZi50cmFuc2xhdGVCcnVuY2godHJlZXMubGVmdFRyZWUsIDAsIHBvcy55IC0gbmV3UG9zLnkpO1xuICAgICAgICBzZWxmLnRyYW5zbGF0ZUJydW5jaCh0cmVlcy5yaWdodFRyZWUsIDAsIHBvcy55IC0gbmV3UG9zLnkpO1xuXG4gICAgICAgIF9nZXRBbGxDdXN0b21Qb3NpdGlvbk5vZGVzT2ZUaGVSb290Tm9kZShyb290Tm9kZSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgc2VsZi5jYWxjdWxhdGVMYXlvdXRGb3JOb2RlKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBsZWZ0IGFuZCByaWdodCB0cmVlcyBvZiB0aGUgcm9vdCBub2RlXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBSZXN1bHQ6IHsgbGVmdFRyZWU6IEFycmF5LCByaWdodFRyZWU6IEFycmF5IH07XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldExlZnRSaWdodFRyZWVzIChyb290Tm9kZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge2xlZnRUcmVlOiBbXSwgcmlnaHRUcmVlOiBbXX07XG4gICAgICAgIHZhciBub2RlcyA9IHJvb3ROb2RlLmdldFZpc2libGVDaGlsZHJlbigpO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlUGxhY2VtZW50KCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubGVmdFRyZWUucHVzaChub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnJpZ2h0VHJlZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdCBwdXNoZXMgcmV2ZXJzZSBub2RlcyBpbnRvIHRoZSBsYXlvdXQgYWZ0ZXIgdGhlIG1haW4gcGFydCBvZiB0aGUgYWxnb3JpdGhtIHdhcyBkb25lXG4gICAgICogQHBhcmFtIHtOb2RlfSByb290Tm9kZSAtIGN1cnJlbnQgbm9kZSAob24gdGhpcyBsb29wIG9mIHRoZSByZWN1cnNpb24pXG4gICAgICogQHBhcmFtIHsgW2tleTogc3RyaW5nXTogQXJyYXkgb2YgTm9kZSB9IGNvbHVtbnMgLSBtYXAgKGRlZXAgLT4gY29sdW1uKSwgd2hpY2ggY29udGFpbnMgY29sdW1ucyBvZiB0aGUgbm9kZXNcbiAgICAgKiAgZGVlcCA9PT0gMCAtPiByb290Tm9kZTtcbiAgICAgKiAgZGVlcCA8IDAgLT4gbGVmdCB0cmVlXG4gICAgICogIGRlZXAgPiAwIC0+IHJpZ2h0IHRyZWVcbiAgICAgKiBAcGFyYW0gZGVlcCAtIG51bWJlciBvZiBjdXJyZW50IGNvbHVtbiBmcm9tIG1hcFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jYWxjdWxhdGVSZXZlcnNlQnJhbmNoZXNPZlRyZWUgKHJvb3ROb2RlLCBjb2x1bW5zLCBkZWVwKSB7XG4gICAgICAgIGlmICghcm9vdE5vZGUpIHJldHVybjtcbiAgICAgICAgaWYgKGRlZXAgPT09IHVuZGVmaW5lZCkgZGVlcCA9IDA7XG5cbiAgICAgICAgdmFyIG5vZGVEaXJlY3Rpb24gPSBfZ2V0RGlyZWN0aW9uRm9yUmV2ZXJzZU5vZGUocm9vdE5vZGUpO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSByb290Tm9kZS5nZXRWaXNpYmxlQ2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIGhhc1Vubm9ybWFsRGlyZWN0aW9uID0gKG5vZGVEaXJlY3Rpb24gJiYgcm9vdE5vZGUubm9kZVBsYWNlbWVudCgpKSB8fCAoIW5vZGVEaXJlY3Rpb24gJiYgIXJvb3ROb2RlLm5vZGVQbGFjZW1lbnQoKSk7XG4gICAgICAgIHZhciBpc250Um9vdE5vZGUgPSAhcm9vdE5vZGUuaXNSb290Tm9kZSgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb290Tm9kZS5nZXQoJ2N1c3RvbVBvc2l0aW9uJykgJiZcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm9vdE5vZGUuZ2V0UHJldk5vZGUoKS5pc1Jvb3ROb2RlKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvb3ROb2RlLmdldFByZXZOb2RlKCkuZ2V0KCdjdXN0b21Qb3NpdGlvbicpICYmXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvb3ROb2RlLmdldFBhcmVudCgpLmlzUm9vdE5vZGUoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm9vdE5vZGUuZ2V0UGFyZW50KCkuZ2V0KCdjdXN0b21Qb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIGNhbGN1bGF0ZUFmdGVyQ2hpbGRyZW4gPSBmYWxzZTtcblxuICAgICAgICBpZiAoaXNudFJvb3ROb2RlICYmIChoYXNVbm5vcm1hbERpcmVjdGlvbiB8fCAhY29sdW1uc1tkZWVwXSB8fCBjb2x1bW5zW2RlZXBdLmluZGV4T2Yocm9vdE5vZGUpID09PSAtMSkpIHtcbiAgICAgICAgICAgIGlmKCEocm9vdE5vZGUgaW5zdGFuY2VvZiBDcm9zc05vZGUpKSB7XG4gICAgICAgICAgICAgICAgX3B1c2hOb2RlSW5UaGVDb2x1bW4gKGNvbHVtbnMsIGRlZXAsIHJvb3ROb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlQWZ0ZXJDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuZ2V0KCdjdXN0b21Qb3NpdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHREZWVwID0gKG5vZGUubm9kZVBsYWNlbWVudCgpID8gZGVlcCAtIDEgOiBkZWVwICsgMSk7XG4gICAgICAgICAgICAgICAgX2NhbGN1bGF0ZVJldmVyc2VCcmFuY2hlc09mVHJlZShcbiAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgKHJvb3ROb2RlIGluc3RhbmNlb2YgQ3Jvc3NOb2RlICYmICAhcm9vdE5vZGUuaXNSb290Tm9kZSgpICYmICFyb290Tm9kZS5nZXQoJ2N1c3RvbVBvc2l0aW9uJykgPyBkZWVwIDogbmV4dERlZXApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNhbGN1bGF0ZUFmdGVyQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJvb3ROb2RlLmFsaWduUmVsYXRpdmVUb0NoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdCBwdXNoZXMgdGhlIGdpdmVuIG5vZGUgaW50byB0aGUgZ2l2ZW4gY29sdW1uLCBhbmQgdHJhbnNsYXRlIHRoZSBvdmVybGF5ZWQgbm9kZXNcbiAgICAgKiBAcGFyYW0geyBba2V5OiBzdHJpbmddOiBBcnJheSBvZiBOb2RlIH0gY29sdW1ucyAtIG1hcCAoZGVlcCAtPiBjb2x1bW4pLCB3aGljaCBjb250YWlucyBjb2x1bW5zIG9mIHRoZSBub2Rlc1xuICAgICAqICBkZWVwID09PSAwIC0+IHJvb3ROb2RlO1xuICAgICAqICBkZWVwIDwgMCAtPiBsZWZ0IHRyZWVcbiAgICAgKiAgZGVlcCA+IDAgLT4gcmlnaHQgdHJlZVxuICAgICAqIEBwYXJhbSBkZWVwIC0gbnVtYmVyIG9mIGN1cnJlbnQgY29sdW1uIGZyb20gbWFwXG4gICAgICogQHBhcmFtIHRhcmdldE5vZGUgLSBjdXJyZW50IG5vZGUgKG9uIHRoaXMgbG9vcCBvZiB0aGUgcmVjdXJzaW9uKVxuICAgICAqICBvciB0byB0aGUgZmlyc3Qgbm9kZSB3aXRoIGN1c3RvbSBwb3NpdGlvblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9wdXNoTm9kZUluVGhlQ29sdW1uIChjb2x1bW5zLCBkZWVwLCB0YXJnZXROb2RlKSB7XG4gICAgICAgIGlmICghY29sdW1ucykgcmV0dXJuO1xuICAgICAgICBpZiAoIWNvbHVtbnNbZGVlcF0pIGNvbHVtbnNbZGVlcF0gPSBbXTtcbiAgICAgICAgdmFyIGNvbHVtbiA9Y29sdW1uc1tkZWVwXTtcblxuICAgICAgICB2YXIgcGFyZW50ID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnQoKTtcbiAgICAgICAgdmFyIHBhcmVudFBvcyA9IHBhcmVudC5wb3NpdGlvbigpO1xuICAgICAgICB2YXIgaW5kZXggPSBfZ2V0UGxhY2VJbkNvbHVtbihjb2x1bW4sIHBhcmVudCk7XG4gICAgICAgIHZhciBiYXNlRWxlbWVudCA9IGNvbHVtbltpbmRleF07XG4gICAgICAgIGlmIChiYXNlRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGJhc2VFbGVtZW50UG9zaXRpb24gPSBiYXNlRWxlbWVudC5wb3NpdGlvbigpO1xuICAgICAgICAgICAgdmFyIHRvTW92ZURvd24gPSBbXTtcbiAgICAgICAgICAgIHZhciB0b01vdmVVcCA9IFtdO1xuICAgICAgICAgICAgdmFyIGJlZm9yZSA9IF9hZnRlck9yQmVmb3JlKGJhc2VFbGVtZW50UG9zaXRpb24sIHBhcmVudCwgY29sdW1uKTtcblxuICAgICAgICAgICAgY29sdW1uLmZvckVhY2goZnVuY3Rpb24gKG5vZGUsIGkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRvTW92ZURvd24ucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0b01vdmVVcC5wdXNoKG5vZGUpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29sdW1uLnNwbGljZSgoYmVmb3JlID8gaW5kZXggOiBpbmRleCArIDEpLCAwLCB0YXJnZXROb2RlKTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUucG9zaXRpb24oYmFzZUVsZW1lbnRQb3NpdGlvbi54LCBwYXJlbnRQb3MueSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGJlZm9yZSAmJiBwYXJlbnRQb3MueSA+PSBiYXNlRWxlbWVudFBvc2l0aW9uLnkgfHwgIWJlZm9yZSAmJiBwYXJlbnRQb3MueSA8PSBiYXNlRWxlbWVudFBvc2l0aW9uLnkpIHx8XG4gICAgICAgICAgICAgICAgKF9oaXRUZXN0V2l0aE5laWdib3Vycyh0YXJnZXROb2RlLCBjb2x1bW4pKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFBvcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogYmFzZUVsZW1lbnRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICB5OiBiYXNlRWxlbWVudFBvc2l0aW9uLnkgKyAoIWJlZm9yZSA/IFJPV19PRkZTRVQgKyB0YXJnZXROb2RlLmdldFNpemUoKS5oZWlnaHQgOiAtKFJPV19PRkZTRVQgKyB0YXJnZXROb2RlLmdldFNpemUoKS5oZWlnaHQpKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5wb3NpdGlvbih0YXJnZXRQb3MueCwgdGFyZ2V0UG9zLnkpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQb3MueSA8PSBwYXJlbnRQb3MueSAmJiB0b01vdmVVcC5sZW5ndGggPiAwICYmIF9oaXRUZXN0KHRvTW92ZVVwW3RvTW92ZVVwLmxlbmd0aCAtIDFdLCB0YXJnZXROb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gdG9Nb3ZlVXAubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gdG9Nb3ZlVXBbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldiA9IHRvTW92ZVVwW2kgKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHRvTW92ZVVwLmxlbmd0aCAtIDEgJiYgX2hpdFRlc3QgKG5vZGUsIHRhcmdldE5vZGUpIHx8IF9oaXRUZXN0IChub2RlLCBwcmV2KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAoKHByZXYgfHwgdGFyZ2V0Tm9kZSkucG9zaXRpb24oKS55IC0gUk9XX09GRlNFVCAtIG5vZGUuZ2V0U2l6ZSgpLmhlaWdodCkgLSBub2RlLnBvc2l0aW9uKCkueTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdHJhbnNsYXRlUmV2ZXJzZU5vZGUobm9kZSwgMCwgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0UG9zLnkgPiBwYXJlbnRQb3MueSAmJiB0b01vdmVEb3duLmxlbmd0aCA+IDAgJiYgX2hpdFRlc3QodG9Nb3ZlRG93blswXSwgdGFyZ2V0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9Nb3ZlRG93bi5mb3JFYWNoKGZ1bmN0aW9uIChub2RlLCBpLCBhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmV2ID0gYXJyW2kgLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGk9PT0wICYmIF9oaXRUZXN0IChub2RlLCB0YXJnZXROb2RlKSB8fCBfaGl0VGVzdCAobm9kZSwgcHJldikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gKChwcmV2IHx8IHRhcmdldE5vZGUpLnBvc2l0aW9uKCkueSArICBST1dfT0ZGU0VUICsgdGFyZ2V0Tm9kZS5nZXRTaXplKCkuaGVpZ2h0KSAtIG5vZGUucG9zaXRpb24oKS55O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90cmFuc2xhdGVSZXZlcnNlTm9kZShub2RlLCAwLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXh0Q29sdW1uUG9zaXRpb24gPSBcbiAgICAgICAgICAgICAgICBwYXJlbnRQb3MueCArICh0YXJnZXROb2RlLm5vZGVQbGFjZW1lbnQoKSA/IC0odGFyZ2V0Tm9kZS5nZXRTaXplKCkud2lkdGggKyBDT0xfT0ZGU0VUKSA6XG4gICAgICAgICAgICAgICAgKHRhcmdldE5vZGUuZ2V0U2l6ZSgpLndpZHRoICsgQ09MX09GRlNFVCkpO1xuICAgICAgICAgICAgdmFyIG5leHRDb2x1bW5Qb3NpdGlvbkZvck5vZGUgPSB0YXJnZXROb2RlIGluc3RhbmNlb2YgQ3Jvc3NOb2RlID8gcGFyZW50UG9zLnggOiBuZXh0Q29sdW1uUG9zaXRpb247XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhcmdldE5vZGUucG9zaXRpb24obmV4dENvbHVtblBvc2l0aW9uRm9yTm9kZSwgcGFyZW50UG9zLnkpO1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5wdXNoZWRBZnRlckxheW91dCA9IHRydWU7XG4gICAgICAgICAgICBjb2x1bW4ucHVzaCh0YXJnZXROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEl0J3Mga2luZCBvZiBzaGVsbCBmb3IgdGhlIGZ1bmN0aW9uIFwiZ2V0RGlyZWN0aW9uXCIgXG4gICAgICogIGJ1dCBpdCdzIG5vdCB0YWtlcyAocm9vdCBub2RlcyAvIGN1c3RvbSBwb3NpdGlvbmVkKSwgYnV0IGl0IHRha2VzXG4gICAgICogIHRoZSBmaXJzdCBjaGlsZHJlbiBvZiB0aGlzIG5vZGUsIGFuZCByZXR1cm4gb3JpZW50YXRpb25cbiAgICAgKiBAcGFyYW0gdGFyZ2V0Tm9kZSAtIGN1cnJlbnQgbm9kZSAob24gdGhpcyBsb29wIG9mIHRoZSByZWN1cnNpb24pXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IG9yaWVudGF0aW9uXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldERpcmVjdGlvbkZvclJldmVyc2VOb2RlIChub2RlKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBub2RlLmdldFByZXZOb2RlKCk7XG4gICAgICAgIGlmICgoIXBhcmVudCB8fCBwYXJlbnQuaXNSb290Tm9kZSgpIHx8IHBhcmVudC5nZXQoJ2N1c3RvbVBvc2l0aW9uJykpICYmICghbm9kZS5ub2RlUGxhY2VtZW50KCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5nZXREaXJlY3Rpb25SZWxhdGl2ZVRvTm9kZShwYXJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9nZXREaXJlY3Rpb25Gb3JSZXZlcnNlTm9kZShwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW5zd2VyIGZvciBxdWVzdGlvbjogXCJQdXNoIHRoZSBuZXcgbm9kZSBhZnRlciBvciBiZWZvcmUgdGhlIGV4aXN0ZWQgbm9kZT9cIlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IGJhc2VFbGVtZW50UG9zIC0gZXhpc3RlZCBub2RlXG4gICAgICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgLSBwYXJlbnQgbm9kZSBcbiAgICAgKiBAcGFyYW0ge0FycmF5IG9mIE5vZGV9IGNvbHVtblxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBiZWZvcmUgLT4gdHJ1ZSB8IGFmcmVyIC0+IGZhbHNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2FmdGVyT3JCZWZvcmUgKGJhc2VFbGVtZW50UG9zLCBwYXJlbnQsIGNvbHVtbikge1xuICAgICAgICB2YXIgcGFyZW50UG9zID0gcGFyZW50LnBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBiZWZvcmUgPSBwYXJlbnRQb3MueSAtIGJhc2VFbGVtZW50UG9zLnk7XG4gICAgICAgIHZhciBhZnRlciA9IGJhc2VFbGVtZW50UG9zLnkgLSBwYXJlbnRQb3MueTtcblxuICAgICAgICBwYXJlbnQuZ2V0VmlzaWJsZUNoaWxkcmVuKCkuZm9yRWFjaChmdW5jdGlvbiAoY3VyTm9kZSkge1xuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IF9nZXREaXJlY3Rpb25Gb3JSZXZlcnNlTm9kZShjdXJOb2RlKTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uaW5kZXhPZihjdXJOb2RlKSAhPT0gLTEgJiYgKGRpcmVjdGlvbiAmJiBjdXJOb2RlLm5vZGVQbGFjZW1lbnQoKSB8fCAhKGRpcmVjdGlvbiB8fCBjdXJOb2RlLm5vZGVQbGFjZW1lbnQoKSkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1ck5vZGVQb3NlID0gY3VyTm9kZS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJOb2RlUG9zZS55ID4gYmFzZUVsZW1lbnRQb3MueSkge1xuICAgICAgICAgICAgICAgICAgICBhZnRlciArPSAoY3VyTm9kZVBvc2UueSAtIGJhc2VFbGVtZW50UG9zLnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyTm9kZVBvc2UueSA8IGJhc2VFbGVtZW50UG9zLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlICs9IChiYXNlRWxlbWVudFBvcy55IC0gY3VyTm9kZVBvc2UueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJlZm9yZSA8IGFmdGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgdGhlIHN1aXRhYmxlIHBsYWNlIGluIHRoZSBjb2x1bW4gZm9yIHRoZSBuZXcgbm9kZS5cbiAgICAgKiBAcGFyYW0ge0FycmF5IG9mIE5vZGV9IGNvbHVtblxuICAgICAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IC0gcGFyZW50IE5vZGVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBpbmRleCAtIGluZGV4IGluIHRoZSBjb2x1bW4gYXJyYXlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0UGxhY2VJbkNvbHVtbiAoY29sdW1uLCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKGNvbHVtbi5sZW5ndGggPT09IDApIHJldHVybiAtMTtcbiAgICAgICAgdmFyIHBhcmVudFBvcyA9IHBhcmVudC5wb3NpdGlvbigpO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgY3VyVmFsID0gY29sdW1uW2luZGV4XS5wb3NpdGlvbi55ID49IHBhcmVudFBvcy55O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbHVtbi5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBjb2x1bW5baV0ucG9zaXRpb24oKTtcbiAgICAgICAgICAgIHZhciBuZXdWYWwgPSBwb3MueSA+PSBwYXJlbnRQb3MueTtcbiAgICAgICAgICAgIGlmIChuZXdWYWwgIT09IGN1clZhbCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zLnkgPD0gcGFyZW50UG9zLnkpIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGN1clZhbCA9IG5ld1ZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IGNvbHVtbi5sZW5ndGggLSAxICYmIGNvbHVtbltjb2x1bW4ubGVuZ3RoIC0gMV0ucG9zaXRpb24ueSA8PSBwYXJlbnRQb3MueSkgaW5kZXggPSBpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyBub2RlLCBhbmQgYWxpZ24gdGhlIHJvb3QgY3Jvc3NOb2RlIGlmIGV4aXN0LlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0Tm9kZSAtIHRyYW5zbGF0ZWQgTm9kZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4T2Zmc2V0IC0gQ29sdW1uIG9mZnNldCAob24geC1heGlzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5T2Zmc2V0IC0gUm93IG9mZnNldCAob24geS1heGlzKVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF90cmFuc2xhdGVSZXZlcnNlTm9kZSAodGFyZ2V0Tm9kZSwgeE9mZnNldCwgeU9mZnNldCkge1xuICAgICAgICB0YXJnZXROb2RlLnBvc2l0aW9uKFxuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5wb3NpdGlvbigpLnggKyB4T2Zmc2V0LFxuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5wb3NpdGlvbigpLnkgKyB5T2Zmc2V0XG4gICAgICAgICk7XG4gICAgICAgIHZhciBwcmV2Tm9kZSA9IHRhcmdldE5vZGUuZ2V0UHJldk5vZGUoKTtcbiAgICAgICAgaWYgKHByZXZOb2RlICYmIHByZXZOb2RlIGluc3RhbmNlb2YgQ3Jvc3NOb2RlKSBwcmV2Tm9kZS5hbGlnblJlbGF0aXZlVG9DaGlsZHJlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwb3NpdGlvbnMgb2YgYWxsIGVsZW1lbnRzIG9mIHRoZSB0cmVlLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHJvb3ROb2RlcyAtIGxpc3Qgb2Ygcm9vdCBub2Rlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5Qb3NpdGlvbiAtIGZpcnN0IGNvbHVtbiBvZmZzZXQgb24geC1heGlzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkaXJlY3Rpb24gLSBEaXJlY3Rpb246IGZhbHNlID0+IGxlZnQ7IHRydWUgPT4gcmlnaHRcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkgb2YgQXJyYXkgb2YgTm9kZXN9IEVsZW1lbnRzIGJ5IGNvbHVtbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2FsY3VsYXRlVHJlZSAocm9vdE5vZGVzLCBjb2x1bW5Qb3NpdGlvbiwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBjb2x1bW5zID0gW107XG4gICAgICAgIGlmICghcm9vdE5vZGVzIHx8IHJvb3ROb2Rlcy5sZW5ndGggPT0gMCkgcmV0dXJuIGNvbHVtbnM7XG5cbiAgICAgICAgdmFyIGZpbHRlcmVkUm9vdE5vZGVzID0gcm9vdE5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmdldCgnY3VzdG9tUG9zaXRpb24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBmaWx0ZXJlZFJvb3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfY2FsY3VsYXRlQnJhbmNoKFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgY29sdW1uUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgY29sdW1uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlIGFsbCBlbGVtZW50cyBvZiB0aGUgYnJhbmNoLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHJvb3ROb2RlcyAtIFJvb3Qgbm9kZXMgb2YgdGhlIGJyYW5jaFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4T2Zmc2V0IC0gQ29sdW1uIG9mZnNldCAob24geC1heGlzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5T2Zmc2V0IC0gUm93IG9mZnNldCAob24geS1heGlzKVxuICAgICAqL1xuICAgIHNlbGYudHJhbnNsYXRlQnJ1bmNoID0gZnVuY3Rpb24gKHJvb3ROb2RlcywgeE9mZnNldCwgeU9mZnNldCkge1xuICAgICAgICBpZiAoIXJvb3ROb2RlcyB8fCByb290Tm9kZXMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdmFyIG5vZGVzID0gcm9vdE5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuICFub2RlLmdldCgnY3VzdG9tUG9zaXRpb24nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgc2VsZi50cmFuc2xhdGVCcnVuY2gobm9kZS5nZXRWaXNpYmxlQ2hpbGRyZW4oKSwgeE9mZnNldCwgeU9mZnNldCk7XG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uKFxuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24oKS54ICsgeE9mZnNldCxcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uKCkueSArIHlPZmZzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHZlcnRpY2FsIG9mZnNldCBvZiB0aGUgdHJlZSByZWxhdGl2ZSB0byB0aGUgcm9vdCBub2RlXG4gICAgICogQHBhcmFtIHtBcnJheX0gdHJlZSAtIGxpc3Qgb2Ygcm9vdCBub2Rlc1xuICAgICAqIEBwYXJhbSB7Tm9kZX0gbWlkZGxlTm9kZSAtIFdlIGRvIGFsaWduIHJlbGF0aXZlIHRvIHRoaXMgbm9kZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVmVydGljYWwgYnJhbmNoIG9mZnNldFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRWZXJ0aWNhbEJyYW5jaE9mZnNldFJlbGF0aXZlVG9Ob2RlICh0cmVlLCBtaWRkbGVOb2RlKSB7XG4gICAgICAgIGlmICh0cmVlICYmIHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdHJlZSA9IHRyZWUuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFub2RlLmdldCgnY3VzdG9tUG9zaXRpb24nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRyZWUubGVuZ3RoID09IDApIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlyc3RDaGllbGQgPSB0cmVlWzBdO1xuICAgICAgICBpZiAoZmlyc3RDaGllbGQgaW5zdGFuY2VvZiBDcm9zc05vZGUpIHtcbiAgICAgICAgICAgIHZhciBmaXJzdE5vZGVDaGlsZHJlbiA9IGZpcnN0Q2hpZWxkLmdldFZpc2libGVDaGlsZHJlbih0cnVlKS5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIW5vZGUuZ2V0KCdjdXN0b21Qb3NpdGlvbicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlyc3ROb2RlQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3ROb2RlQ2hpbGRyZW5baV0gJiYgIWZpcnN0Tm9kZUNoaWxkcmVuW2ldLmdldCgnaGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDaGllbGQgPSBmaXJzdE5vZGVDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhc3RDaGllbGQgPSB0cmVlW3RyZWUubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChsYXN0Q2hpZWxkIGluc3RhbmNlb2YgQ3Jvc3NOb2RlKSB7XG4gICAgICAgICAgICB2YXIgbGFzdE5vZGVDaGlsZHJlbiA9IGxhc3RDaGllbGQuZ2V0VmlzaWJsZUNoaWxkcmVuKHRydWUpLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhbm9kZS5nZXQoJ2N1c3RvbVBvc2l0aW9uJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yIChpID0gbGFzdE5vZGVDaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChsYXN0Tm9kZUNoaWxkcmVuW2ldICYmICFsYXN0Tm9kZUNoaWxkcmVuW2ldLmdldCgnaGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENoaWVsZCA9IGxhc3ROb2RlQ2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGFzdENoaWVsZCB8fCAhZmlyc3RDaGllbGQpIHJldHVybiAwO1xuICAgICAgICB2YXIgY29sdW1uQ2VudGVyID0gKGxhc3RDaGllbGQucG9zaXRpb24oKS55ICsgbGFzdENoaWVsZC5nZXRTaXplKCkuaGVpZ2h0ICsgZmlyc3RDaGllbGQucG9zaXRpb24oKS55KSAvIDI7XG4gICAgICAgIHJldHVybiBtaWRkbGVOb2RlLnBvc2l0aW9uKCkueSArIG1pZGRsZU5vZGUuZ2V0U2l6ZSgpLmhlaWdodCAvIDIgLSBjb2x1bW5DZW50ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBvc2l0aW9ucyBvZiBhbGwgZWxlbWVudHMgb2YgYnJhbmNoLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gcm9vdE5vZGUgLSBSb290IG5vZGUgb2YgdGhlIGJyYW5jaFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5Qb3NpdGlvbiAtIENvbHVtbiBvZmZzZXQgKG9uIHgtYXhpcylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93UG9zaXRpb24gLSBSb3cgb2Zmc2V0IChvbiB5LWF4aXMpXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkaXJlY3Rpb24gLSBEaXJlY3Rpb246IGZhbHNlID0+IGxlZnQ7IHRydWUgPT4gcmlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVlcCAtIGNvbHVtbiBudW1iZXJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjb2x1bW5zIC0gY29sdW1ucyBsaXN0XG4gICAgICogQHJldHVybnMge251bWJlcn0gSGVpZ2h0IG9mIHRoZSBjb2x1bW4sIHdoaWNoIGluY2x1ZGUgaGVpZ2h0IG9mIHRoZSBjaGlsZCBjb2x1bW5zXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NhbGN1bGF0ZUJyYW5jaCAocm9vdE5vZGUsIGNvbHVtblBvc2l0aW9uLCBkaXJlY3Rpb24sIGRlZXAsIGNvbHVtbnMpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gcm9vdE5vZGUuZ2V0VmlzaWJsZUNoaWxkcmVuKCk7XG4gICAgICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGUuZ2V0KCdjdXN0b21Qb3NpdGlvbicpICYmIChkaXJlY3Rpb24gJiYgIW5vZGUubm9kZVBsYWNlbWVudCgpIHx8IG5vZGUubm9kZVBsYWNlbWVudCgpICYmICFkaXJlY3Rpb24pO1xuICAgICAgICB9KTsgLy8gZmlsdGVyIGFsbCBub2RlcyB3aXRoIGN1c3RvbSBwb3NpdGlvblxuXG4gICAgICAgIHZhciBjb2x1bW5XaWR0aCA9IHJvb3ROb2RlLmdldFNpemUoKS53aWR0aDsgLy8gc2V0IHN0YXJ0aW5nIHdpZHRoIGZvciB0aGUgY29sdW1uIGZvciBjYXNlIHdoZW4gdGhlcmUgYXJlIG5vIGNoaWxkcmVuXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIG5leHQgY29sdW1uIHBvc2l0aW9uIChpZiBvbmUgb2YgdGhlIGNoaWxkcmVuIGlzIGNyb3NzIG5vZGUgdGhlbiBuZXh0IGNvbHVtbiBwb3NpdGlvbiBpcyBjdXJyZW50IGNvbHVtbiBwb3NpdGlvbilcbiAgICAgICAgdmFyIG5leHRDb2x1bW5Qb3NpdGlvbiA9IGNvbHVtblBvc2l0aW9uICsgKGRpcmVjdGlvbiA/IChjb2x1bW5XaWR0aCArIENPTF9PRkZTRVQpIDogLShjb2x1bW5XaWR0aCArIENPTF9PRkZTRVQpKTtcblxuICAgICAgICAvLyBFbnRlciB0aGUgcmVjdXJzaW9uIGJ5IG5vZGVzIHdpdGhvdXQgY3VzdG9tZSBwb3NpdGlvbiBhbmQgY2FsY3VsYXRpb24gaGVpZ2h0IG9mIGNoaWxkIGNvbHVtblxuICAgICAgICBmaWx0ZXJlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGNyb3NzIG5vZGUgdGhlbiBoaXN0IGNoaWxkcmVuIHBsYWNpbmcgaW4gc2FtZSBjb2x1bW4gd2l0aCBwYXJlbnQsIGJ1dCBwYXJlbnQgKGNyb3NzTm9kZSkgaGFzIG9mZnNldFxuICAgICAgICAgICAgdmFyIG5leHRDb2x1bW5Qb3NpdGlvbkZvck5vZGUgPSByb290Tm9kZSBpbnN0YW5jZW9mIENyb3NzTm9kZSA/IGNvbHVtblBvc2l0aW9uIDogbmV4dENvbHVtblBvc2l0aW9uO1xuICAgICAgICAgICAgX2NhbGN1bGF0ZUJyYW5jaChcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgIG5leHRDb2x1bW5Qb3NpdGlvbkZvck5vZGUsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIChyb290Tm9kZSBpbnN0YW5jZW9mIENyb3NzTm9kZSA/IGRlZXAgOiBkZWVwICsgMSksIC8vIGlmIG5vZGUgaXMgY3Jvc3Mgbm9kZSB0aGVuIHdlIGRvbid0IGluY3JlYXNlIGNvbHVtbiBpbmRleFxuICAgICAgICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBub2RlXG4gICAgICAgIF9zZXRQb3NpdGlvbk9mVGhlTm9kZShcbiAgICAgICAgICAgIGZpbHRlcmVkQ2hpbGRyZW4sXG4gICAgICAgICAgICByb290Tm9kZSxcbiAgICAgICAgICAgIGNvbHVtblBvc2l0aW9uLFxuICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgZGVlcCxcbiAgICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIG5vZGUgcG9zaXRpb24gYW5kIHJldHVybiByZWN1cnNpb24gcmVzdWx0LWRhdGEgZm9yIGZ1bmN0aW9uIF9jYWxjdWxhdGVCcmFuY2guXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmlsdGVyZWRDaGlsZHJlbiAtIHNvcnRlZCwgcGFnaW5hdGVkLCBmaWx0ZXJlZCBjaGlsZHJlbiBsaXN0XG4gICAgICogQHBhcmFtIHtOb2RlfSByb290Tm9kZSAtIFJvb3Qgbm9kZSBvZiB0aGUgYnJhbmNoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtblBvc2l0aW9uIC0gQ29sdW1uIG9mZnNldCAob24geC1heGlzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dQb3NpdGlvbiAtIFJvdyBvZmZzZXQgKG9uIHktYXhpcylcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpcmVjdGlvbiAtIERpcmVjdGlvbjogZmFsc2UgPT4gbGVmdDsgdHJ1ZSA9PiByaWdodFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWVwIC0gY29sdW1uIG51bWJlclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbHVtbnMgLSBjb2x1bW5zIGxpc3RcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2hpbGRyZW5zQ29sdW1uSGVpZ2h0IC0gSGVpZ2h0IG9mIHRoZSBjaGlsZCBjb2x1bW5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFibGVUb0NvbmRlbnNpbmcgLSB0cnVlIGlmIG5vZGUgY2FuIGJlIHJhaXNlZCB0byB0aGUgbm9kZXMgd2hpY2ggbG9jYXRlZCBpbiB0aGlzIGNvbHVtbiBhYm92ZSBjdXJyZW50IG5vZGVcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBIZWlnaHQgb2YgdGhlIGNvbHVtbiwgd2hpY2ggaW5jbHVkZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGNvbHVtbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc2V0UG9zaXRpb25PZlRoZU5vZGUgKGZpbHRlcmVkQ2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5Qb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zKSB7XG4gICAgICAgIGlmICghY29sdW1uc1tkZWVwXSkgY29sdW1uc1tkZWVwXSA9IFtdOyAvLyBpZiB0aGVyZSBhcmVuJ3QgZWxlbWVudHMgaW4gdGhpcyBjb2x1bW4gY3JlYXRlIGFycmF5XG4gICAgICAgIHZhciBjb2x1bW4gPSBjb2x1bW5zW2RlZXBdO1xuICAgICAgICB2YXIgaXNDcm9zc05vZGUgPSByb290Tm9kZSBpbnN0YW5jZW9mIENyb3NzTm9kZTtcblxuICAgICAgICB2YXIgeFBvc2l0aW9uID0gY29sdW1uUG9zaXRpb24gLSAoIWRpcmVjdGlvbiA/IHJvb3ROb2RlLmdldFNpemUoKS53aWR0aCA6IDApO1xuICAgICAgICB4UG9zaXRpb24gPSAoaXNDcm9zc05vZGUgP1xuICAgICAgICAgICAgKHhQb3NpdGlvbiArIChkaXJlY3Rpb24gP1xuICAgICAgICAgICAgICAgIC1DUk9TU19OT0RFX09GRlNFVCA6XG4gICAgICAgICAgICAgICAgK0NST1NTX05PREVfT0ZGU0VUKSkgOlxuICAgICAgICAgICAgeFBvc2l0aW9uKTtcblxuICAgICAgICB2YXIgeVBvc2l0aW9uID0gMDtcblxuICAgICAgICB2YXIgeVBvc1JlYWx0aXZlVG9DaGlsZHJlbiA9IDA7XG4gICAgICAgIGlmIChmaWx0ZXJlZENoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBsYXN0Q2hpZWxkID0gZmlsdGVyZWRDaGlsZHJlbltmaWx0ZXJlZENoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdmFyIGZpcnN0Q2hpZWxkID0gZmlsdGVyZWRDaGlsZHJlblswXTtcbiAgICAgICAgICAgIHlQb3NSZWFsdGl2ZVRvQ2hpbGRyZW4gPSAoXG4gICAgICAgICAgICAgICAgbGFzdENoaWVsZC5wb3NpdGlvbigpLnlcbiAgICAgICAgICAgICAgICArIGZpcnN0Q2hpZWxkLmdldFNpemUoKS5oZWlnaHRcbiAgICAgICAgICAgICAgICArIGZpcnN0Q2hpZWxkLnBvc2l0aW9uKCkueVxuICAgICAgICAgICAgICAgIC0gcm9vdE5vZGUuZ2V0U2l6ZSgpLmhlaWdodFxuICAgICAgICAgICAgKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeVBvc01pbiA9IDA7XG4gICAgICAgIGlmIChjb2x1bW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGJvdHRvbU5vZGUgPSBjb2x1bW5bY29sdW1uLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgeVBvc01pbiA9IGJvdHRvbU5vZGUucG9zaXRpb24oKS55ICsgYm90dG9tTm9kZS5nZXRTaXplKCkuaGVpZ2h0ICsgUk9XX09GRlNFVDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0Nyb3NzTm9kZSB8fCB5UG9zTWluIDw9IHlQb3NSZWFsdGl2ZVRvQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHlQb3NpdGlvbiA9IHlQb3NSZWFsdGl2ZVRvQ2hpbGRyZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5UG9zaXRpb24gPSB5UG9zTWluO1xuICAgICAgICAgICAgaWYgKCFpc0Nyb3NzTm9kZSkge1xuICAgICAgICAgICAgICAgIHNlbGYudHJhbnNsYXRlQnJ1bmNoKGZpbHRlcmVkQ2hpbGRyZW4sIDAsIHlQb3NNaW4gLSB5UG9zUmVhbHRpdmVUb0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcm9vdE5vZGUucG9zaXRpb24oeFBvc2l0aW9uLCB5UG9zaXRpb24pO1xuXG4gICAgICAgIGlmICghaXNDcm9zc05vZGUpIHtcbiAgICAgICAgICAgIGNvbHVtbi5wdXNoKHJvb3ROb2RlKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0QWxsQ3VzdG9tUG9zaXRpb25Ob2Rlc09mVGhlUm9vdE5vZGUgKHJvb3ROb2RlKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHJvb3ROb2RlLmdldFZpc2libGVDaGlsZHJlbigpO1xuICAgICAgICB2YXIgY3VzdG9tQ2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmdldCgnY3VzdG9tUG9zaXRpb24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIGN1c3RvbUNoaWxkcmVuID0gY3VzdG9tQ2hpbGRyZW4uY29uY2F0KF9nZXRBbGxDdXN0b21Qb3NpdGlvbk5vZGVzT2ZUaGVSb290Tm9kZShuKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY3VzdG9tQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIG5vZGUgaXMgb3ZlcmxhcHBlZCB3aXRoIHNvbWUgb2YgdGhlIG5laWdib3VycyBpbiB0aGUgY29sdW1uLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7QXJyYXkgb2YgTm9kZX0gY29sdW1uXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2hpdFRlc3RXaXRoTmVpZ2JvdXJzIChub2RlLCBjb2x1bW4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY29sdW1uLmluZGV4T2Yobm9kZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF9oaXRUZXN0IChub2RlLCBjb2x1bW5baW5kZXggLSAxXSkgfHwgX2hpdFRlc3QgKG5vZGUsIGNvbHVtbltpbmRleCArIDFdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgbm9kZSBudW1iZXIgb25lIGFuZCB0aGUgbnVtYmVyIHR3byBhcmUgb3ZlcmxhcHBlZC5cbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUxXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlMlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9oaXRUZXN0IChub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgaWYgKCFub2RlMSB8fCAhbm9kZTIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGJCb3ggPSBudWxsO1xuICAgICAgICB2YXIgdGVzdGVkTm9kZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKG5vZGUxLmdldFNpemUoKS5oZWlnaHQgPiBub2RlMi5nZXRTaXplKCkuaGVpZ2h0KSB7XG4gICAgICAgICAgICBiQm94ID0gbm9kZTEuZ2V0QkJveCgpO1xuICAgICAgICAgICAgdGVzdGVkTm9kZSA9IG5vZGUyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYkJveCA9IG5vZGUyLmdldEJCb3goKTtcbiAgICAgICAgICAgIHRlc3RlZE5vZGUgPSBub2RlMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcCA9IHRlc3RlZE5vZGUucG9zaXRpb24oKTtcbiAgICAgICAgdmFyIHNpemUgPSB0ZXN0ZWROb2RlLmdldFNpemUoKTtcbiAgICAgICAgdmFyIHhDZW50ZXIgPSBwLnggKyBzaXplLndpZHRoIC8gMjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGJCb3guY29udGFpbnNQb2ludCh7eDogeENlbnRlciwgeTogcC55fSkgfHxcbiAgICAgICAgICAgIGJCb3guY29udGFpbnNQb2ludCh7eDogeENlbnRlciwgeTogcC55ICsgc2l6ZS5oZWlnaHR9KSB8fFxuICAgICAgICAgICAgYkJveC5jb250YWluc1BvaW50KHt4OiB4Q2VudGVyLCB5OiBwLnkgLSBST1dfT0ZGU0VUfSkgfHxcbiAgICAgICAgICAgIGJCb3guY29udGFpbnNQb2ludCh7eDogeENlbnRlciwgeTogcC55ICsgUk9XX09GRlNFVH0pXG4gICAgICAgICk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXRQb3NpdGlvbk1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBOZWlnaGJvckdyYW0gPSByZXF1aXJlKCcuL25laWdoYm9yR3JhbScpO1xudmFyIERhdGFQcm92aWRlciA9IHJlcXVpcmUoJy4vZGF0YVByb3ZpZGVyJyk7XG5cbnZhciBJbmZvUGFuZWwgPSByZXF1aXJlKCcuL2h0bWxVSS9pbmZvUGFuZWwnKTtcbnZhciBPcHRpb25zUGFuZWwgPSByZXF1aXJlKCcuL2h0bWxVSS9vcHRpb25zUGFuZWwnKTtcbnZhciBEZWZhdWx0VUkgPSByZXF1aXJlKCcuL2h0bWxVSS9kZWZhdWx0VUknKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZ2V0RGVmYXVsdFByb3BlcnRpZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIERFRkFVTFRfUEFHRV9TSVpFOiAgICAgIDUsICAgLy8gSXQncyBmb3IgcGFnaW5hdGlvblxuICAgICAgICAgICAgQ09MT1JfQ0xBU1NfQ09VTlQ6ICAgICAgMTAsXG4gICAgICAgICAgICBDT0xfT0ZGU0VUOiAgICAgICAgICAgICAxMDAsIC8vIEl0IHVzZWQgdG8gY2FsY3VsYXRlIGRpc3RhbmNlIGJldHdlZW4gY29sdW1ucyBpbiB0aGUgZ3JhcGhcbiAgICAgICAgICAgIFJPV19PRkZTRVQ6ICAgICAgICAgICAgIDMwLCAgLy8gSXQgdXNlZCB0byBjYWxjdWxhdGUgZGlzdGFuY2UgYmV0d2VlbiByb3dzIGluIHRoZSBncmFwaFxuICAgICAgICAgICAgQ1JPU1NfTk9ERV9PRkZTRVQ6ICAgICAgMzAsICAvLyBJdCBkZWZpbmUgb2Zmc2V0IG9mIHRoZSBjcm9zcyBub2RlIHJlbGF0aXZlIHRvIHRoZSBuZXh0IGNvbHVtbiBwb3NpdGlvblxuICAgICAgICAgICAgRUxFTUVOVF9XSURUSDogICAgICAgICAgMTMwLFxuICAgICAgICAgICAgRUxFTUVOVF9IRUlHSFQ6ICAgICAgICAgMzAsXG4gICAgICAgICAgICBUUkFOU0lUSVZFX0VYUEFOU0lPTl9MSU1JVF9TVEVQOiAxMCwgLy8gSXQgc2F5cyBob3cgbXVjaCBub2RlcyB3aWxsIGJlIGV4cGFuZGVkIHRyYW5zaXRpdmVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlZm9yZSB0aGUgcXVlc3Rpb24gJ0RvIHlvdSB3YW50IHRvIGNvbnRpbnVlPydcbiAgICAgICAgICAgIEZVTExfTk9ERV9MQUJFTFM6IGZhbHNlLCAgICAgICAgICAgICAvLyBUZWxscyB3aGV0aGVyIG9yIG5vdCBzaG91bGQgd2UgZXhwYW5kIG5vZGUgbGFiZWxzXG4gICAgICAgICAgICBDT0xPUl9DTEFTU19NQVA6IHtcbiAgICAgICAgICAgICAgICAnc3ViQ2xhc3NPZic6ICdjb2xvci1jbGFzcy1zdWItY2xhc3Mtb2YnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogJ2NvbG9yLWNsYXNzLXR5cGUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKGVsLCBkYXRhUHJvdmlkZXIsIGZvY3VzTm9kZUlkLCByZXNvdXJjZVBhdGgsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOZWlnaGJvckdyYW0oXG4gICAgICAgICAgICBkYXRhUHJvdmlkZXIsIFxuICAgICAgICAgICAge2VsOiBlbH0sIC8vIHBhcGVyIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGZvY3VzTm9kZUlkLFxuICAgICAgICAgICAgcmVzb3VyY2VQYXRoLFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICApO1xuICAgIH0sXG4gICAgXG4gICAgZ2V0RGVmYXVsdERhdGFQcm92aWRlcjogZnVuY3Rpb24gKHNlcnZlclVybCwgYmFzZSwgdmlld0NsYXNzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0YVByb3ZpZGVyKHNlcnZlclVybCwgYmFzZSwgdmlld0NsYXNzKTtcbiAgICB9LFxuXG4gICAgdWlVdGlsczoge1xuICAgICAgICBEZWZhdWx0VUk6IERlZmF1bHRVSSxcbiAgICAgICAgSW5mb1BhbmVsOiBJbmZvUGFuZWwsXG4gICAgICAgIE9wdGlvbnNQYW5lbDogT3B0aW9uc1BhbmVsLFxuICAgIH0sXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xvbmVEZWVwID0gcmVxdWlyZSgnbG9kYXNoJykuY2xvbmVEZWVwO1xudmFyIGpvaW50ID0gcmVxdWlyZSgncmFwcGlkJyk7XG52YXIgVFFHcmFtVUkgPSByZXF1aXJlKCd2aXN1YWxpemF0aW9ucy1saWJyYXJ5Jyk7XG52YXIgR3JhcGhMYXlvdXQgPSByZXF1aXJlKCcuL2dyYXBoTGF5b3V0Jyk7XG52YXIgU3RhdGVTdG9yYWdlID0gcmVxdWlyZSgnLi9zdGF0ZVN0b3JhZ2UnKTtcbnZhciBQb3BVcE1lbnUgPSByZXF1aXJlKCcuL3BvcFVwTWVudScpO1xuLy8gdmFyIEFycmF5QnVmZmVyID0gcmVxdWlyZSgndHlwZWRhcnJheScpLkFycmF5QnVmZmVyO1xuLy8gdmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCd0eXBlZGFycmF5JykuVWludDhBcnJheTtcbnZhciBncmFwaEVsZW1lbnRzID0gcmVxdWlyZSgnLi9ncmFwaEVsZW1lbnRzJyk7XG52YXIgc2F2ZUFzID0gcmVxdWlyZSgnZmlsZS1zYXZlcmpzJyk7XG5cbnZhciBOb2RlID0gZ3JhcGhFbGVtZW50cy5Ob2RlO1xudmFyIEVkZ2UgPSBncmFwaEVsZW1lbnRzLkVkZ2U7XG52YXIgQ3Jvc3NOb2RlID0gZ3JhcGhFbGVtZW50cy5Dcm9zc05vZGU7XG5cbi8qKlxuICogTmVpZ2hib3JHcmFtLlxuICogQ29udGFpbiBncmFwaCBsYXlvdXQgYW5kIG1hbmFnZSBhbGwgZGF0YS5cbiAqXG4gKiBDb25zdHJ1Y3RvciBwYXJhbWV0ZXJzOlxuICogICAgICBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlclxuICogICAgICBwYXBlclByb3BlcnRpZXM6IHtqb2ludGpzIGdyYXBoIHByb3BlcnRpZXN9XG4gKiAgICAgIGZvY3VzTm9kZUlkOiBzdHJpbmdcbiAqICAgICAgcmVzb3VyY2VQYXRoOiBzdHJpbmdcbiAqICAgICAgX29wdGlvbnM6IHtcbiAqICAgICAgICAgIERFRkFVTFRfUEFHRV9TSVpFOiBudW1iZXIsIFxuICogICAgICAgICAgQ09MT1JfQ0xBU1NfQ09VTlQ6IG51bWJlciwgXG4gKiAgICAgICAgICBNQVhfTEFCRUxfTEVOR1RIOiBudW1iZXIsIFxuICogICAgICAgICAgRUxFTUVOVF9XSURUSDogbnVtYmVyO1xuICogICAgICAgICAgRUxFTUVOVF9IRUlHSFQ6IG51bWJlcjtcbiAqICAgICAgICAgIENPTF9PRkZTRVQ6IG51bWJlciwgXG4gKiAgICAgICAgICBST1dfT0ZGU0VUOiBudW1iZXIsIFxuICogICAgICAgICAgQ1JPU1NfTk9ERV9PRkZTRVQ6IG51bWJlciwgXG4gKiAgICAgICAgICBDT0xPUl9DTEFTU19NQVA6IHtcbiAqICAgICAgICAgICAgICAnc3ViQ2xhc3NPZic6IHN0cmluZywgXG4gKiAgICAgICAgICAgICAgJ3R5cGUnOiBzdHJpbmdcbiAqICAgICAgICAgIH1cbiAqICAgICAgfVxuICpcbiAqIFB1YmxpYyBtZXRob2RzOlxuICogICAgICBzZXRGb2N1c05vZGUoZm9jdXNOb2RlSWQ6IHN0cmluZyk6IHZvaWRcbiAqICAgICAgb25Ob2RlU2VsZWN0ZWQoY2FsbGJhY2s6IGZ1bmN0aW9uKTogdm9pZFxuICogICAgICBvbk5vZGVGb2N1c2VkKGNhbGxiYWNrOiBmdW5jdGlvbik6IHZvaWRcbiAqICAgICAgY2xlYW4oKTogdm9pZFxuICogICAgICBnZXROb2RlcygpOiBOb2RlW11cbiAqICAgICAgZ2V0RWRnZXMoKTogRWRnZVtdXG4gKiAgICAgIGdldFN0YXRlc0hpc3RvcnkoKToge1xuICogICAgICAgICAgc3RhdGVzOiBbXSxcbiAqICAgICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyLFxuICogICAgICB9XG4gKiAgICAgIHJlZnJlc2hMYXlvdXQoKTogdm9pZFxuICogICAgICBjZW50ZXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9wdDogb3B0KTogdm9pZFxuICogICAgICB6b29tKHNjYWxlOiBudW1iZXIsIG9wdDogb3B0KTogdm9pZFxuICogICAgICB1bmRvU3RhdGUoKTogdm9pZCAtIHJldHVybnMgdG8gc3RhdGUgd2l0aCBwcmV2aW91cyBmb2N1c05vZGVcbiAqICAgICAgcmVkb1N0YXRlKCk6IGJvaWQgLSByZXR1cm5zIHRvIHN0YXRlIHdpdGggbmV4dChwcmV2aW91cyBiZWZvcmUgdW5kbykgZm9jdXNOb2RlXG4gKi9cbmZ1bmN0aW9uIE5laWdoYm9yR3JhbSAoZGF0YVByb3ZpZGVyLCBwYXBlclByb3BlcnRpZXMsIGZvY3VzTm9kZUlkLCByZXNvdXJjZVBhdGgsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBQcml2YXRlIGZpbGRzXG4gICAgICovXG4gICAgdmFyIF9wYXBlciA9IG51bGw7XG4gICAgdmFyIF9vcHRpb25zID0gY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgIHZhciBfbGF5b3V0ID0gbnVsbDtcbiAgICB2YXIgX29uTm9kZUZvY3VzZWRDYWxsQmFjayA9IG51bGw7XG4gICAgdmFyIF9vblN0YXRlQ2hhbmdlZENhbGxCYWNrID0gbnVsbDtcbiAgICB2YXIgX2dyYXBoID0gbnVsbDtcbiAgICB2YXIgX3BhcGVyU2Nyb2xsZXIgPSBudWxsO1xuICAgIHZhciBfZWwgPSBudWxsO1xuICAgIHZhciBfc3RhdGVTdG9yYWdlID0gbnVsbDtcbiAgICB2YXIgX3VpTGF5ZXIgPSBudWxsO1xuICAgIHZhciBfcG9wVXBNZW51ID0gbnVsbDtcbiAgICB2YXIgX2FzeW5rT3BlcmF0aW9uID0gZmFsc2U7XG4gICAgdmFyIF9kYXRhQ2FjaGUgPSB7fTtcbiAgICB2YXIgX3RyYW5zaXRpdmVDb3JlID0gbmV3IFRyYW5zaXRpdmVDb3JlKHNlbGYpO1xuICAgIHZhciBfZnVsbE5vZGVMYWJlbHMgPSBfb3B0aW9ucy5GVUxMX05PREVfTEFCRUxTO1xuICAgIHZhciBfcHJvZ3Jlc3NTY3JlZW4gPSBudWxsO1xuXG5cbiAgICAvKipcbiAgICAgKiBQcml2YXRlIGZ1bmN0aW9uIHdoaWNoIHVzZWQgYXMgY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gIHtEYXRhUHJvdmlkZXJ9IGRhdGFQcm92aWRlciAtIE9iamVjdCB3aGljaCBwcm92aWRlIGRhdGEgZm9yIGdyYXBoXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBwYXBlclByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzIGZvciBqb2ludC5kaWEuUGFwZXJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZvY3VzTm9kZUlkIC0gSWQgd2hpY2ggdXNlZCB0byBzZXQgZm9jdXMgbm9kZVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcmVzb3VyY2VQYXRoIC0gUGF0aCB0byBpY29uIHJlc291cmNlcywgdXNlZCBmb3IgcnVudGltZSBVUkxzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyBmb3IgdGhlIGFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2luaXRpYWxpemUgKGRhdGFQcm92aWRlciwgcGFwZXJQcm9wZXJ0aWVzLCBmb2N1c05vZGVJZCwgcmVzb3VyY2VQYXRoLCBvcHRpb25zKSB7XG4gICAgICAgIHNlbGYucmVzb3VyY2VQYXRoID0gcmVzb3VyY2VQYXRoO1xuICAgICAgICBzZWxmLmRhdGFQcm92aWRlciA9IGRhdGFQcm92aWRlcjtcbiAgICAgICAgX2dyYXBoID0gcGFwZXJQcm9wZXJ0aWVzLmdyYXBoID8gcGFwZXJQcm9wZXJ0aWVzLmdyYXBoIDogbmV3IGpvaW50LmRpYS5HcmFwaCgpO1xuXG4gICAgICAgIHZhciBkZWZhdWx0UHJvcCA9IHtcbiAgICAgICAgICAgIGVsOiAnZ3JhcGhQbGFjZScsXG4gICAgICAgICAgICBtb2RlbDogX2dyYXBoLFxuICAgICAgICAgICAgZ3JpZFNpemU6IDEsXG4gICAgICAgICAgICB3aWR0aDogJzUwMDAnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNTAwMCcsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBfZXh0ZW5kUHJvcGVydGllcyhkZWZhdWx0UHJvcCwgcGFwZXJQcm9wZXJ0aWVzKTtcbiAgICAgICAgdmFyIGVsSWQgPSBwcm9wZXJ0aWVzLmVsO1xuICAgICAgICBwcm9wZXJ0aWVzLmVsID0gdW5kZWZpbmVkO1xuICAgICAgICBfcGFwZXIgPSBuZXcgam9pbnQuZGlhLlBhcGVyKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIF9wYXBlclNjcm9sbGVyID0gbmV3IGpvaW50LnVpLlBhcGVyU2Nyb2xsZXIoe1xuICAgICAgICAgICAgcGFwZXI6IF9wYXBlclxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY29tbWFuZE1hbmFnZXIgPSBuZXcgam9pbnQuZGlhLkNvbW1hbmRNYW5hZ2VyKHtncmFwaDogX2dyYXBofSk7XG4gICAgICAgIHZhciB2YWxpZGF0b3IgPSBuZXcgam9pbnQuZGlhLlZhbGlkYXRvcih7Y29tbWFuZE1hbmFnZXI6IGNvbW1hbmRNYW5hZ2VyfSk7XG4gICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSgnY2hhbmdlOnBvc2l0aW9uJywgX3ZhbGlkYXRlUG9zaXRpb24pO1xuICAgICAgICB2YWxpZGF0b3Iub24oJ2ludmFsaWQnLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgX2xheW91dC5nZXROb2RlcygpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLmJhZFBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBfcGFwZXIub24oJ2NlbGw6bW91c2V3aGVlbCcsIGZ1bmN0aW9uIChjZWxsLCBldnQsIHgsIHksIGRlbHRhKSB7XG4gICAgICAgICAgICBvbldoZWVsU2Nyb2xsIChldnQsIHgsIHksIGRlbHRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9wYXBlci5vbignYmxhbms6bW91c2V3aGVlbCcsIGZ1bmN0aW9uIChldnQsIHgsIHksIGRlbHRhKSB7XG4gICAgICAgICAgICBvbldoZWVsU2Nyb2xsIChldnQsIHgsIHksIGRlbHRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsSWQpO1xuICAgICAgICByb290LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChfZWwpO1xuXG4gICAgICAgIF9lbC5jbGFzc05hbWUgPSAndHEtbmctcm9vdCc7XG4gICAgICAgIF9lbC5hcHBlbmRDaGlsZChfcGFwZXJTY3JvbGxlci5yZW5kZXIoKS5lbCk7XG4gICAgICAgIF9jb25maWd1cmF0ZVBhcGVyTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgX3Byb2dyZXNzU2NyZWVuID0gbmV3IFRRR3JhbVVJLlByb2dyZXNzU2NyZWVuKHtcbiAgICAgICAgICAgIGJhc2VFbGVtZW50OiBfZWwsXG4gICAgICAgIH0pO1xuICAgIFxuXG4gICAgICAgIF9sYXlvdXQgPSBuZXcgR3JhcGhMYXlvdXQoX2dyYXBoLCBfcGFwZXIsIF9wYXBlclNjcm9sbGVyLCBvcHRpb25zKTtcbiAgICAgICAgX3N0YXRlU3RvcmFnZSA9IG5ldyBTdGF0ZVN0b3JhZ2UoX2xheW91dCwgb3B0aW9ucyk7XG5cbiAgICAgICAgX29uTm9kZUZvY3VzZWRDYWxsQmFjayA9IFtdO1xuXG4gICAgICAgIF9vblN0YXRlQ2hhbmdlZENhbGxCYWNrID0gW107XG5cbiAgICAgICAgaWYgKGZvY3VzTm9kZUlkKSBzZWxmLnNldEZvY3VzTm9kZShmb2N1c05vZGVJZCk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25XaGVlbFNjcm9sbCAoZXZ0LCB4LCB5LCBkZWx0YSkge1xuICAgICAgICAgICAgaWYgKGV2dC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnpvb20oMC4yLCB7IG1heDogNCB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnpvb20oLTAuMiwgeyBtaW46IDAuMiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9wb3BVcE1lbnUpIF9wb3BVcE1lbnUucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3VpTGF5ZXIgPSBfY3JlYXRlVUlMYXllcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHVzZWQgdG8gY2xlYW4gZ3JhcGggKFJlbW92ZSBhbGwgbm9kZXMgYW5kIGVkZ2VzIGZyb20gbGF5b3V0KS5cbiAgICAgKi9cbiAgICBzZWxmLmNsZWFuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfbGF5b3V0LmNsZWFuTGF5b3V0KCk7XG4gICAgfTtcblxuICAgIHNlbGYuZnVsbE5vZGVMYWJlbHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF9mdWxsTm9kZUxhYmVscyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFyIG5vZGVzID0gX2xheW91dC5nZXROb2RlcygpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0KCdmdWxsTGFiZWwnLCBfZnVsbE5vZGVMYWJlbHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfbGF5b3V0LnJlY2FsY3VsYXRlTGF5b3V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9mdWxsTm9kZUxhYmVscztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gZG8gcmVxdWVzdCBkYXRhIHRocm91Z2ggZGF0YSBwcm92aWRlciBhbmQgc2V0IG5ldyBub2RlIGFzIGZvY3VzZWQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBmb2N1c05vZGVJZCAtIElkIG9mIGZvY3VzIG5vZGVcbiAgICAgKi9cbiAgICBzZWxmLnNldEZvY3VzTm9kZSA9IGZ1bmN0aW9uIChmb2N1c05vZGVJZCkge1xuICAgICAgICBfbG9hZGluZ0luZGljYXRpb24gKCdmZXRjaGluZycpO1xuICAgICAgICBfYXN5bmtPcGVyYXRpb24gPSB0cnVlO1xuICAgICAgICBfcmVxdWVzdERhdGEoZm9jdXNOb2RlSWQsXG4gICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgX2FzeW5rT3BlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX2xvYWRpbmdJbmRpY2F0aW9uICgncmVuZGVyaW5nJyk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgLy8gaXQncyBuZWNlc3NhcnkgdG8gbWFrZSBhYmxlIGpzIGNoYW5nZSBsb2FkaW5nIHRpdGxlLlxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSByZXN1bHQubm9kZXMubWFwKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSkuaW5kZXhPZihmb2N1c05vZGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9sYXlvdXQuZ2V0Um9vdE5vZGUoKSkgX3N0YXRlU3RvcmFnZS5wdXNoU3RhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlbnRyYWxOb2RlID0gX3NldENlbnRyYWxOb2RlKHJlc3VsdC5ub2Rlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5vZGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9leHBhbmROb2RlKGNlbnRyYWxOb2RlLmlkLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWZyZXNoTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfb25Ob2RlRm9jdXNlZENhbGxCYWNrLmZvckVhY2goZnVuY3Rpb24gKGNhbGxCYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2soY2VudHJhbE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9hZGluZ0luZGljYXRpb24gKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb2FkaW5nSW5kaWNhdGlvbiAoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBfbG9hZGluZ0luZGljYXRpb24gKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIF9hc3lua09wZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF9sb2FkaW5nSW5kaWNhdGlvbiAoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgIG5ldyBqb2ludC51aS5EaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pLm9wZW4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB3aGljaCBuZWVkZWQgdG8gc2V0IGhhbmRsZXIgb24gJ05vZGUgc2VsZWN0ZWQnIGV2ZW50LlxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEhhbmRsZXJcbiAgICAgKi9cbiAgICBzZWxmLm9uTm9kZVNlbGVjdGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIF9wYXBlci5vbignY2VsbDpwb2ludGVyZG93bicsIGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgICBpZiAoY2VsbCAmJiBjZWxsLm1vZGVsIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNlbGwubW9kZWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF9wYXBlci5vbignYmxhbms6cG9pbnRlcmRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIG5lZWRlZCB0byBzZXQgaGFuZGxlciBvbiAnTm9kZSBmb2N1c2VkJyBldmVudC5cbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBIYW5kbGVyXG4gICAgICovXG4gICAgc2VsZi5vbk5vZGVGb2N1c2VkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIF9vbk5vZGVGb2N1c2VkQ2FsbEJhY2sucHVzaChjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIG5lZWRlZCB0byBzZXQgaGFuZGxlciBvbiAnU3RhdGUgY2hhbmdlZCcgZXZlbnQuXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gSGFuZGxlclxuICAgICAqL1xuICAgIHNlbGYub25TdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgX29uU3RhdGVDaGFuZ2VkQ2FsbEJhY2sucHVzaChjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhbGwgbm9kZXMgb2YgdGhlIGdyYXBoLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gTm9kZXMgb2YgdGhlIGdyYXBoXG4gICAgICovXG4gICAgc2VsZi5nZXROb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9sYXlvdXQuZ2V0Tm9kZXMoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFsbCBlZGdlcyBvZiB0aGUgZ3JhcGguXG4gICAgICogQHJldHVybnMge0FycmF5fSBFZGdlcyBvZiB0aGUgZ3JhcGhcbiAgICAgKi9cbiAgICBzZWxmLmdldEVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2xheW91dC5nZXRFZGdlcygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWNhbGN1bGF0ZXMgdGhlIGxheW91dFxuICAgICAqL1xuICAgIHNlbGYucmVmcmVzaExheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX2xheW91dC5yZWNhbGN1bGF0ZUxheW91dCgpO1xuICAgICAgICBzZWxmLmNlbnRlcigpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXJzIHBhcGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb24geCBheGlzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgLSBjb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb24geSBheGlzXG4gICAgICogQHBhcmFtIHtvcHR9IG9wdCAtIChvcHRpb25hbCkgb3B0aW9ucyBvZiBwYXBlclNjcm9sbGVyXG4gICAgICovXG4gICAgc2VsZi5jZW50ZXIgPSBmdW5jdGlvbiAoeCwgeSwgb3B0KSB7XG4gICAgICAgIGlmICh4ICYmIHkpIF9wYXBlclNjcm9sbGVyLmNlbnRlcih4LCB5LCBvcHQpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByb290ID0gX2xheW91dC5nZXRSb290Tm9kZSgpO1xuICAgICAgICAgICAgX3BhcGVyU2Nyb2xsZXIuY2VudGVyKFxuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24oKS54ICsgcm9vdC5nZXRTaXplKCkud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24oKS55ICsgcm9vdC5nZXRTaXplKCkuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICBvcHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSXQgY2VudGVycyBwYXBlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZSAtIG9mZnNldCB2YWx1ZXMgb2Ygc2NhbGVcbiAgICAgKiBAcGFyYW0ge29wdH0gb3B0IC0gKG9wdGlvbmFsKSBvcHRpb25zIG9mIHBhcGVyU2Nyb2xsZXIgem9vbWluZ1xuICAgICAqL1xuICAgIHNlbGYuem9vbSA9IGZ1bmN0aW9uIChzY2FsZSwgb3B0KSB7XG4gICAgICAgIGlmICghc2NhbGUpIF9wYXBlclNjcm9sbGVyLnpvb21Ub0ZpdChvcHQpO1xuICAgICAgICBlbHNlIF9wYXBlclNjcm9sbGVyLnpvb20oc2NhbGUsIG9wdCk7XG4gICAgICAgIF9sYXlvdXQucmVjYWxjdWxhdGVMYXlvdXQoKTtcbiAgICAgICAgaWYgKF9wb3BVcE1lbnUpIF9wb3BVcE1lbnUucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlvdXMgZm9jdXNlTm9kZSBhcyBjdXIgZm9jdXNOb2RlXG4gICAgICovXG4gICAgc2VsZi51bmRvU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF9zdGF0ZVN0b3JhZ2UudW5kb1N0YXRlKCk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgX2xheW91dC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgX2xheW91dC5yZWNhbGN1bGF0ZUxheW91dCgpO1xuICAgICAgICAgICAgX29uU3RhdGVDaGFuZ2VkQ2FsbEJhY2suZm9yRWFjaChmdW5jdGlvbiAoY2FsbEJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsQmFjayhzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlvdXMgKGJlZm9yZSBzZWxmLnVuZG9TdGF0ZSkgZm9jdXNlTm9kZSBhcyBjdXIgZm9jdXNOb2RlXG4gICAgICovXG4gICAgc2VsZi5yZWRvU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF9zdGF0ZVN0b3JhZ2UucmVkb1N0YXRlKCk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgX2xheW91dC5sb2FkU3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgX2xheW91dC5yZWNhbGN1bGF0ZUxheW91dCgpO1xuICAgICAgICAgICAgX29uU3RhdGVDaGFuZ2VkQ2FsbEJhY2suZm9yRWFjaChmdW5jdGlvbiAoY2FsbEJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsQmFjayhzdGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbGlzdCBvZiBmb2N1c05vZGVzIGFuZCBjdXJyZW50IGluZGV4LlxuICAgICAqIEByZXR1cm5zIHtcbiAgICAgKiAgc3RhdGVzOiBbXSxcbiAgICAgKiAgY3VycmVudEluZGV4OiBudW1iZXIsXG4gICAgICogfVxuICAgICAqL1xuICAgIHNlbGYuZ2V0U3RhdGVzSGlzdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9zdGF0ZVN0b3JhZ2UuZ2V0SGlzdG9yeSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeHBvcnRzIGdyYXBoIHRvIHBuZyBvciBzdmcgZmlsZVxuICAgICAqIEBwYXJhbSB7XG4gICAgICogIG5hbWU/OiBzdHJpbmcgLSBmaWxlIG5hbWVcbiAgICAgKiAgdHlwZT86IHN0cmluZyAtIChwbmcvc3ZnKVxuICAgICAqIH0gb3B0aW9uc1xuICAgICovXG4gICAgc2VsZi5leHBvcnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgdmFyIGZpbGVOYW1lID0gb3B0aW9ucy5uYW1lIHx8ICdOZWlnaGJvckdyYW1fc25hcHNob3RfJyArIGRhdGUyU3RyaW5nKG5ldyBEYXRlKCkpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdwbmcnKSB7XG4gICAgICAgICAgICBfcGFwZXIudG9QTkcoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgc2F2ZURhdGEoaW1hZ2UsIGZpbGVOYW1lLCAncG5nJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9wYXBlci50b1NWRyhmdW5jdGlvbiAoc3ZnU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgc2F2ZURhdGEoc3ZnU3RyaW5nLCBmaWxlTmFtZSwgJ3N2ZycpO1xuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgY29udmVydEltYWdlc1RvRGF0YVVyaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJlYTogX3BhcGVyLmdldENvbnRlbnRCQm94KCksXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEaW1lbnNpb25zOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzYXZlRGF0YSAoZGF0YSwgZmlsZU5hbWUsIHR5cGUpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBibG9iO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICAgICAgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiB0eXBlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncG5nJykge1xuICAgICAgICAgICAgICAgIGJsb2IgPSBwbmcyQmxvYiAoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYXZlQXMoYmxvYiwgZmlsZU5hbWUgKyAnLicgKyB0eXBlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLnNldFNlbGVjdGVkTm9kZSA9IF9zZXRTZWxlY3RlZE5vZGU7XG5cbiAgICAvL1ByaXZhdGUgZnVuY3Rpb25zXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZnVuY3Rpb24gZGF0ZTJTdHJpbmcgKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHBhZFN0cihkYXRlLmdldEZ1bGxZZWFyKCkpICsgJ18nICtcbiAgICAgICAgICAgICAgICBwYWRTdHIoMSArIGRhdGUuZ2V0TW9udGgoKSkgKyAnXycgK1xuICAgICAgICAgICAgICAgIHBhZFN0cihkYXRlLmdldERhdGUoKSkgKyAnXycgK1xuICAgICAgICAgICAgICAgIHBhZFN0cihkYXRlLmdldEhvdXJzKCkpICsgJ18nICtcbiAgICAgICAgICAgICAgICBwYWRTdHIoZGF0ZS5nZXRNaW51dGVzKCkpICsgJ18nICtcbiAgICAgICAgICAgICAgICBwYWRTdHIoZGF0ZS5nZXRTZWNvbmRzKCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHBhZFN0ciAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIChpIDwgMTApID8gJzAnICsgaSA6ICcnICsgaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBuZzJCbG9iIChkYXRhVVJJKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXG4gICAgICAgIC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG4gICAgICAgIHZhciBieXRlU3RyaW5nID0gYXRvYihkYXRhVVJJLnNwbGl0KCcsJylbMV0pO1xuXG4gICAgICAgIC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG4gICAgICAgIHZhciBhYiA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgIHZhciBpYSA9IG5ldyBVaW50OEFycmF5KGFiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdyaXRlIHRoZSBBcnJheUJ1ZmZlciB0byBhIGJsb2IsIGFuZCB5b3UncmUgZG9uZVxuICAgICAgICB2YXIgYmIgPSBuZXcgQmxvYihbYWJdLCB7IHR5cGU6ICdpbWFnZS9wbmcnIH0pO1xuICAgICAgICByZXR1cm4gYmI7XG4gICAgfVxuXG4gICAgLy8gc3RhdGVzOiBmZXRjaGluZywgcmVuZGVyaW5nLCBjb21wbGV0ZWRcbiAgICBmdW5jdGlvbiBfbG9hZGluZ0luZGljYXRpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2ZldGNoaW5nJykge1xuICAgICAgICAgICAgX3Byb2dyZXNzU2NyZWVuLnNldFN0YXRlKCdhY3RpdmUnLCAnRmV0Y2hpbmcgZGF0YScpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAncmVuZGVyaW5nJykge1xuICAgICAgICAgICAgX3Byb2dyZXNzU2NyZWVuLnNldFN0YXRlKCdhY3RpdmUnLCAnUmVuZGVyaW5nIGdyYXBoJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICBfcHJvZ3Jlc3NTY3JlZW4uc2V0U3RhdGUoJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBfcHJvZ3Jlc3NTY3JlZW4uc2V0U3RhdGUoJ2Vycm9yJywgJ0Vycm9yIGhhcyBvY2N1cnJlZCEnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVVSUxheWVyICgpIHtcbiAgICAgICAgdmFyIHVpTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdWlMYXllci5jbGFzc05hbWUgPSAnbmctdWknO1xuICAgICAgICBfZWwucXVlcnlTZWxlY3RvcignLnBhcGVyLmpvaW50LXRoZW1lLWRlZmF1bHQnKS5hcHBlbmRDaGlsZCh1aUxheWVyKTtcbiAgICAgICAgcmV0dXJuIHVpTGF5ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHBvc2l0aW9uIG9mIHRoZSBub2RlIHEudi4gam9pbnQuZGlhLlZhbGlkYXRvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF92YWxpZGF0ZVBvc2l0aW9uIChlcnIsIGNvbW1hbmQsIG5leHQpIHtcbiAgICAgICAgdmFyIGNlbGwgPSBjb21tYW5kLmRhdGEuYXR0cmlidXRlcyB8fCBfZ3JhcGguZ2V0Q2VsbChjb21tYW5kLmRhdGEuaWQpO1xuICAgICAgICBpZiAoIV9sYXlvdXQuYmxvY2tWYWxpZGF0aW9uICYmIGNlbGwgJiYgIV9jaGVja1Bvc2l0aW9uKGNlbGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dCgnQW5vdGhlciBjZWxsIGluIHRoZSB3YXkhJyk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgcG9zaXRpb24gb2YgdGhlIG5vZGUgYW5kIGNoYW5nZSBjb2xvci1jbGFzcyBpZiBuZWVkZWRcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBjaGVja2VkIG5vZGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlY3Vyc2l2ZWx5IC0gZmxhZyBpZiB3ZSBuZWVkZWQgY2hlY2sgcmVjdXJzaXZlbHlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hlY2tQb3NpdGlvbiAobm9kZSwgcmVjdXJzaXZlbHkpIHtcbiAgICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE5vZGUpKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB2YXIgaGl0VGVzdCA9IGZ1bmN0aW9uIChub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgICAgIGlmICghbm9kZTEgfHwgIW5vZGUyIHx8IG5vZGUxIGluc3RhbmNlb2YgQ3Jvc3NOb2RlIHx8IG5vZGUyIGluc3RhbmNlb2YgQ3Jvc3NOb2RlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgYkJveCA9IG51bGw7XG4gICAgICAgICAgICB2YXIgdGVzdGVkTm9kZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChub2RlMS5nZXRTaXplKCkuaGVpZ2h0ID4gbm9kZTIuZ2V0U2l6ZSgpLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGJCb3ggPSBub2RlMS5nZXRCQm94KCk7XG4gICAgICAgICAgICAgICAgdGVzdGVkTm9kZSA9IG5vZGUyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiQm94ID0gbm9kZTIuZ2V0QkJveCgpO1xuICAgICAgICAgICAgICAgIHRlc3RlZE5vZGUgPSBub2RlMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwID0gdGVzdGVkTm9kZS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgdmFyIHNpemUgPSB0ZXN0ZWROb2RlLmdldFNpemUoKTtcbiAgICAgICAgICAgIHJldHVybiAoYkJveC5jb250YWluc1BvaW50KHt4OiBwLngsIHk6IHAueX0pIHx8XG4gICAgICAgICAgICBiQm94LmNvbnRhaW5zUG9pbnQoe3g6IHAueCArIHNpemUud2lkdGgsIHk6IHAueX0pIHx8XG4gICAgICAgICAgICBiQm94LmNvbnRhaW5zUG9pbnQoe3g6IHAueCwgeTogcC55ICsgc2l6ZS5oZWlnaHR9KSB8fFxuICAgICAgICAgICAgYkJveC5jb250YWluc1BvaW50KHt4OiBwLnggKyBzaXplLndpZHRoLCB5OiBwLnkgKyBzaXplLmhlaWdodH0pKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gX2dyYXBoLmdldCgnY2VsbHMnKS5maWx0ZXIoZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgICAgIGlmICgoY2VsbCBpbnN0YW5jZW9mIE5vZGUgfHwgY2VsbCBpbnN0YW5jZW9mIENyb3NzTm9kZSkgJiZcbiAgICAgICAgICAgICAgICBjZWxsLmlkICE9PSBub2RlLmlkICYmXG4gICAgICAgICAgICAgICAgaGl0VGVzdChjZWxsLCBub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmxlbmd0aCA9PSAwO1xuXG4gICAgICAgIGlmIChyZWN1cnNpdmVseSkge1xuICAgICAgICAgICAgbm9kZS5nZXRWaXNpYmxlQ2hpbGRyZW4oKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9jaGVja1Bvc2l0aW9uKGNoaWxkLCByZWN1cnNpdmVseSkgJiYgcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5iYWRQb3NpdGlvbighcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBub2RlIGZyb20gc2VydmVyIGludG8gc2ltcGxlIG5vZGUgYW5kIHNldHMgaXQgYXMgcm9vdCBpbnRvIGxheW91dC5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHNlcnZlck5vZGUgLSBTZXJ2ZXIgbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zZXRDZW50cmFsTm9kZSAoc2VydmVyTm9kZSkge1xuICAgICAgICB2YXIgY2VudHJhbE5vZGUgPSBfY3JlYXRlTm9kZShzZXJ2ZXJOb2RlKTtcbiAgICAgICAgX2xheW91dC5zZXRSb290Tm9kZShjZW50cmFsTm9kZSk7XG4gICAgICAgIC8vIF9wYXBlclNjcm9sbGVyLmNlbnRlcihfbGF5b3V0LmdldFJvb3ROb2RlKCkucG9zaXRpb24oKSk7XG4gICAgICAgIHJldHVybiBjZW50cmFsTm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW1wbGlmaWVkIHNldCB1cCBwYXBlci4gRW5yaWNoIG9sZCBwcm9wZXJ0aWVzIGJ5IG5ldyBvbmUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFByb3AgLSBPbGQgcHJvcGVydGllc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdQcm9wIC0gTmV3IHByb3BlcnRpZXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBFeHN0ZW5kZWQgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9leHRlbmRQcm9wZXJ0aWVzIChvbGRQcm9wLCBuZXdQcm9wKSB7XG4gICAgICAgIHZhciBleHRlbmRlZE9iamVjdCA9IHt9O1xuICAgICAgICBpZiAob2xkUHJvcCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMob2xkUHJvcCkuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIGV4dGVuZGVkT2JqZWN0W3BdID0gb2xkUHJvcFtwXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdQcm9wKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhuZXdQcm9wKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kZWRPYmplY3RbcF0gPSBuZXdQcm9wW3BdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dGVuZGVkT2JqZWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodHMgdGFyZ2V0IGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc2V0U2VsZWN0ZWROb2RlIChjZWxsKSB7XG4gICAgICAgIHNlbGYuZ2V0Tm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUhpZ2hsaWdodGluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgIHZhciBub2RlO1xuICAgICAgICAgICAgaWYgKGNlbGwubW9kZWwgJiYgY2VsbC5tb2RlbC5hZGRIaWdobGlnaHRpbmcpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gY2VsbC5tb2RlbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5hZGRIaWdobGlnaHRpbmcpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gY2VsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbm9kZS5nZXQoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRIaWdobGlnaHRpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZOb2RlID0gbm9kZS5nZXRQcmV2Tm9kZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByZXZOb2RlLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldk5vZGUuZ2V0Q2hpbGRyZW4odHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgPT09IG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2Tm9kZS5wYWdpbmF0aW9uLmZvY3VzT24oaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRIaWdobGlnaHRpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgZXZlbnQgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY29uZmlndXJhdGVQYXBlckxpc3RlbmVycyAoKSB7XG4gICAgICAgIHZhciBsYXN0UG9zaXRpb24gPSBudWxsO1xuICAgICAgICB2YXIgVEhSRVNIT0xEID0gMTU7XG4gICAgICAgIF9wYXBlci5vbignY2VsbDpwb2ludGVyZG93bicsIGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgICBpZiAoY2VsbCAmJiBjZWxsLm1vZGVsIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICghbGFzdFBvc2l0aW9uKSBsYXN0UG9zaXRpb24gPSBjZWxsLm1vZGVsLnBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBfc2V0U2VsZWN0ZWROb2RlKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfcGFwZXIub24oJ2NlbGw6cG9pbnRlcm1vdmUnLCBmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5tb2RlbCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICBqb2ludC51aS5IYWxvLmNsZWFyKF9wYXBlcik7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguc3FydChcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KChsYXN0UG9zaXRpb24ueCAtIGNlbGwubW9kZWwucG9zaXRpb24oKS54KSwgMikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coKGxhc3RQb3NpdGlvbi55IC0gY2VsbC5tb2RlbC5wb3NpdGlvbigpLnkpLCAyKVxuICAgICAgICAgICAgICAgICAgICApIDwgVEhSRVNIT0xEICYmICFjZWxsLm1vZGVsLmdldCgnY3VzdG9tUG9zaXRpb24nKVxuICAgICAgICAgICAgICAgICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLm1vZGVsLmdldCgnY3VzdG9tUG9zaXRpb24nKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLm1vZGVsLnNldCgnY3VzdG9tUG9zaXRpb24nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgX2xheW91dC5yZWNhbGN1bGF0ZUxheW91dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfY2hlY2tQb3NpdGlvbihjZWxsLm1vZGVsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3BhcGVyLm9uKCdjZWxsOnBvaW50ZXJkYmxjbGljaycsIGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgICBpZiAoY2VsbCAmJiBjZWxsLm1vZGVsIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIGNlbGwubW9kZWwuc2V0KCdmdWxsTGFiZWwnLCAhY2VsbC5tb2RlbC5nZXQoJ2Z1bGxMYWJlbCcpKTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0LnJlY2FsY3VsYXRlTGF5b3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9wYXBlci5vbignY2VsbDpwb2ludGVydXAnLCBmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5tb2RlbCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICBfY29uZmlndXJhdGVIYWxvKGNlbGwpO1xuICAgICAgICAgICAgICAgIGxhc3RQb3NpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBfc2V0TGlua1BhZ2luYXRpb25Db250cm9sc0luYWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgX3NldExpbmtQYWdpbmF0aW9uQ29udHJvbEFjdGl2ZShjZWxsLm1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3BhcGVyLm9uKCdibGFuazpwb2ludGVyZG93bicsIF9wYXBlclNjcm9sbGVyLnN0YXJ0UGFubmluZyk7XG4gICAgICAgIF9wYXBlci5vbignYmxhbms6cG9pbnRlcmRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfc2V0U2VsZWN0ZWROb2RlKHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgIF9zZXRMaW5rUGFnaW5hdGlvbkNvbnRyb2xzSW5hY3RpdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJhdGVzIGhhbG8gZm9yIE5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2VsbFZpZXcgLSBWaWV3IG9mIG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY29uZmlndXJhdGVIYWxvIChjZWxsVmlldykge1xuICAgICAgICBpZiAoX3BvcFVwTWVudSAmJiBfcG9wVXBNZW51LnRhcmdldCAhPT0gY2VsbFZpZXcubW9kZWwpIHtcbiAgICAgICAgICAgIF9yZW1vdmVQb3BVcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5vZGUgPSBjZWxsVmlldy5tb2RlbDtcbiAgICAgICAgdmFyIGhhbG8gPSBuZXcgam9pbnQudWkuSGFsbyh7XG4gICAgICAgICAgICBncmFwaDogX2dyYXBoLFxuICAgICAgICAgICAgcGFwZXI6IF9wYXBlcixcbiAgICAgICAgICAgIGNlbGxWaWV3OiBjZWxsVmlldyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2hhbG8nICsgKG5vZGUuaWQgPT09IF9sYXlvdXQuZ2V0Um9vdE5vZGUoKS5pZCA/ICcgaGFsby1vZi1yb290LW5vZGUnIDogJycpXG4gICAgICAgIH0pO1xuICAgICAgICBoYWxvLnJlbW92ZUhhbmRsZXMoKTtcblxuICAgICAgICBpZiAobm9kZS5nZXQoJ2N1c3RvbVBvc2l0aW9uJykpIHtcbiAgICAgICAgICAgIGhhbG8uYWRkSGFuZGxlKHtuYW1lOiAncmVzZXQtbm9kZS1wb3NpdGlvbicsIHBvc2l0aW9uOiAncyd9KTtcbiAgICAgICAgICAgIGhhbG8ub24oJ2FjdGlvbjpyZXNldC1ub2RlLXBvc2l0aW9uOnBvaW50ZXJkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0LmRvRm9yQnJ1bmNoKG5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0KCdjdXN0b21Qb3NpdGlvbicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0LnJlY2FsY3VsYXRlTGF5b3V0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmRhdGFNb2RlbC50eXBlSWQgIT09ICdjcm9zc05vZGUnKSB7XG4gICAgICAgICAgICB2YXIgY29uZmlnQnV0dG9uQ2xhc3MgPSBub2RlLmdldERpcmVjdGlvbigpID8gXG4gICAgICAgICAgICAgICAgJ2V4cGFuc2lvbi1jb25maWcnICsgKG5vZGUuY29uZmlndXJhdGlvblNldC5tb2RpZmllZCA/ICctbW9kaWZpZWQnIDogJycpIDpcbiAgICAgICAgICAgICAgICAnZXhwYW5zaW9uLWNvbmZpZycgKyAobm9kZS5jb25maWd1cmF0aW9uU2V0Lm1vZGlmaWVkID8gJy1tb2RpZmllZCcgOiAnJykgKyAnLXJldmVyc2UnO1xuICAgICAgICAgICAgaGFsby5hZGRIYW5kbGUoe25hbWU6IGNvbmZpZ0J1dHRvbkNsYXNzfSk7XG4gICAgICAgICAgICBoYWxvLm9uKCdhY3Rpb246JyArIGNvbmZpZ0J1dHRvbkNsYXNzICsgJzpwb2ludGVyZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgX29wZW5Db25maWdQb3BVcChjZWxsVmlldyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG5vZGUuaWQgIT09IF9sYXlvdXQuZ2V0Um9vdE5vZGUoKS5pZCkge1xuICAgICAgICAgICAgICAgIHZhciBzZXRGb2N1c05vZGVDbGFzcyA9IG5vZGUuZ2V0RGlyZWN0aW9uKCkgPyAnc2V0LWZvY3VzLW5vZGUnIDogJ3NldC1mb2N1cy1ub2RlLXJldmVyc2UnO1xuICAgICAgICAgICAgICAgIGhhbG8uYWRkSGFuZGxlKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogc2V0Rm9jdXNOb2RlQ2xhc3MsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaGFsby5vbignYWN0aW9uOicgKyBzZXRGb2N1c05vZGVDbGFzcyArICc6cG9pbnRlcmRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYXN5bmtPcGVyYXRpb24pIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEZvY3VzTm9kZShub2RlLmRhdGFNb2RlbC50eXBlSWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZXhwYW5kQ29sbGFwc2VDbGFzcyA9IG5vZGUuZ2V0RGlyZWN0aW9uKCkgPyAnZXhwYW5kLWNvbGxhcHNlJyA6ICdleHBhbmQtY29sbGFwc2UtcmV2ZXJzZSc7XG5cbiAgICAgICAgICAgIGhhbG8uYWRkSGFuZGxlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAobm9kZS5kYXRhTW9kZWwuY2FuRXhwYW5kID8gZXhwYW5kQ29sbGFwc2VDbGFzcyA6IGV4cGFuZENvbGxhcHNlQ2xhc3MgKyAnIGRpc2FibGVkJyksXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICghbm9kZS5nZXQoJ2V4cGFuZGVkJykgPyAnIG5nLWV4cGFuZCc6ICcgbmctY29sbGFwc2UnKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGhhbG8ub24oXG4gICAgICAgICAgICAgICAgJ2FjdGlvbjonICsgZXhwYW5kQ29sbGFwc2VDbGFzcyArICc6cG9pbnRlcmRvd24nLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZGF0YU1vZGVsLmNhbkV4cGFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX29uRXhwYW5kRXZlbnQoY2VsbFZpZXcubW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaGFsby5saXN0ZW5Ubyhub2RlLCAnY2hhbmdlOmN1c3RvbVBvc2l0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9jb25maWd1cmF0ZUhhbG8oY2VsbFZpZXcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoYWxvLmxpc3RlblRvKG5vZGUsICdjaGFuZ2U6ZXhwYW5kZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX2NvbmZpZ3VyYXRlSGFsbyhjZWxsVmlldyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBoYWxvLnJlbmRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9vcGVuQ29uZmlnUG9wVXAgKGNlbGwpIHtcbiAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5tb2RlbCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGlmICghX3BvcFVwTWVudSB8fCAhX3BvcFVwTWVudS5hbGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0V4cGFuZGVkO1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbFBvcFVwID0gX3BvcFVwTWVudSA9IG5ldyBQb3BVcE1lbnUoe1xuICAgICAgICAgICAgICAgICAgICBiYXNlOiBfdWlMYXllcixcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBjZWxsLm1vZGVsLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxlcjogX3BhcGVyU2Nyb2xsZXIsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUFwcGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0V4cGFuZGVkID0gY2VsbC5tb2RlbC5nZXQoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubW9kZWwuc2V0KCdleHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGF5b3V0LmNvbGxhcHNlTm9kZShjZWxsLm1vZGVsLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJBcHBseTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX29uRXhwYW5kRXZlbnQoY2VsbC5tb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29uZmlndXJhdGVIYWxvKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLm1vZGVsLmNvbmZpZ3VyYXRpb25TZXQuY29ubmVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3JlcXVlc3REYXRhKGNlbGwubW9kZWwudHlwZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFBvcFVwID09PSBfcG9wVXBNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wb3BVcE1lbnUucHV0RGF0YShyZXN1bHQuZWRnZXMgfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBqb2ludC51aS5EaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZW1vdmVQb3BVcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXQncyBjYWxsZWQgb24gZXhwYW5kLWV2ZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZWxsIC0gVmlldyBvZiBOb2RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9yaWVudGF0aW9uXG4gICAgICovXG4gICAgZnVuY3Rpb24gX29uRXhwYW5kRXZlbnQgKG5vZGUpIHtcbiAgICAgICAgaWYgKF9hc3lua09wZXJhdGlvbikgcmV0dXJuO1xuXG4gICAgICAgIGlmIChub2RlLmNvbmZpZ3VyYXRpb25TZXQgJiYgbm9kZS5jb25maWd1cmF0aW9uU2V0LmV4cGFuZFRyYW5zaXRpdmVseSkge1xuICAgICAgICAgICAgX3RyYW5zaXRpdmVDb3JlLnN0YXJ0KG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmdldCgnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZGluZyA9IF9hZGRMb2FkaW5nKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldCgnZXhwYW5kZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIF9zZXRMaW5rUGFnaW5hdGlvbkNvbnRyb2xzSW5hY3RpdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfZGF0YUNhY2hlW25vZGUuaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXN5bmtPcGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlcXVlc3REYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudHlwZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYXN5bmtPcGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGpvaW50LnVpLkRpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5vcGVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZW1vdmVMb2FkaW5nKGxvYWRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2V0TGlua1BhZ2luYXRpb25Db250cm9sQWN0aXZlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2soX2RhdGFDYWNoZVtub2RlLmlkXSwge2Zyb21DYWNoZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXQoJ2V4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBfY29sbGFwc2VOb2RlKG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayAocmVzdWx0LCBwcm9wcykge1xuICAgICAgICAgICAgX2FzeW5rT3BlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBfZXhwYW5kTm9kZShub2RlLCByZXN1bHQsIHByb3BzICYmIHByb3BzLmZyb21DYWNoZSk7XG4gICAgICAgICAgICBfbGF5b3V0LnJlY2FsY3VsYXRlTGF5b3V0KCk7XG4gICAgICAgICAgICBfcmVtb3ZlTG9hZGluZyhsb2FkaW5nKTtcbiAgICAgICAgICAgIF9zZXRMaW5rUGFnaW5hdGlvbkNvbnRyb2xBY3RpdmUobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVtb3ZlUG9wVXAgKCkge1xuICAgICAgICBfcG9wVXBNZW51LnJlbW92ZSgpO1xuICAgICAgICBfcG9wVXBNZW51ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGRhdGEgdGhyb3cgZGF0YSBwcm92aWRlci5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZUlkIC0gVHlwZSBpZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1Y2Nlc3NDYWxsYmFjayAtIEhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvckNhbGxiYWNrIC0gSGFuZGxlclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9yZXF1ZXN0RGF0YSAodHlwZUlkLCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlbGYuZGF0YVByb3ZpZGVyLmdldEdyYXBoRGF0YSh0eXBlSWQsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrLmFwcGx5KHNlbGYsIFtlcnJvcl0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5zdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdCBleHBhbmRzIG5vZGUgYnkgb2J0YWluZWQgZGF0YS5cbiAgICAgKiBCaW5kcyBuZXcgbm9kZXMgYW5kIGVkZ2VzIHRvIHNvdXJjZSBub2RlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgTm9kZX0gbm9kZSAtIFR5cGUgaWQgb3IgTm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gRGF0YVxuICAgICAqIEBwYXJhbSB7Ym9vbGVuYX0gZnJvbUNhY2hlIC0gZXF1YWxzIHRydWUgaWYgZGF0YSBhcmUgcGFzc2VkIGZyb20gdGhlIGNhY2hlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V4cGFuZE5vZGUgKG5vZGUsIGRhdGEsIGZyb21DYWNoZSkge1xuICAgICAgICB2YXIgaXNOb2RlID0gdHlwZW9mIG5vZGUgIT09ICdzdHJpbmcnO1xuICAgICAgICB2YXIgbm9kZUlkID0gaXNOb2RlID8gbm9kZS5pZCA6IG5vZGU7XG5cbiAgICAgICAgdmFyIGNvbmZpZyA9IG5vZGUuY29uZmlndXJhdGlvblNldDtcbiAgICAgICAgdmFyIG1hcEZvck5vZGVGaWx0ZXJpbmcgPSB7fTtcblxuICAgICAgICB2YXIgcHJlcGFyZWREYXRhO1xuICAgICAgICBpZiAoIWZyb21DYWNoZSkge1xuICAgICAgICAgICAgcHJlcGFyZWREYXRhID0ge1xuICAgICAgICAgICAgICAgIG5vZGVzOiBkYXRhLm5vZGVzID8gX3ByZXBhcmVOb2RlcyhkYXRhLm5vZGVzKSA6IFtdLFxuICAgICAgICAgICAgICAgIGVkZ2VzOiBkYXRhLmVkZ2VzID8gX3ByZXBhcmVFZGdlcyhkYXRhLmVkZ2VzKSA6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9kYXRhQ2FjaGVbbm9kZUlkXSA9IHByZXBhcmVkRGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZXBhcmVkRGF0YSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGUgZGF0YSBmaWx0ZXJpbmdcbiAgICAgICAgdmFyIGZpbHRlcmVkRGF0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0ge1xuICAgICAgICAgICAgICAgIGVkZ2VzOiBwcmVwYXJlZERhdGEuZWRnZXMuZmlsdGVyKGZ1bmN0aW9uIChlZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBub2RlLmRhdGFNb2RlbC50eXBlSWQgPT09IGVkZ2UuZGF0YU1vZGVsLnRhcmdldFR5cGVJZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZlcmRpY3QgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZpbHRlclR5cGUgPT09ICdBTEwnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZpbHRlclR5cGUgPT09ICdJTkNPTUlORycgJiYgZGlyZWN0aW9uIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZpbHRlclR5cGUgPT09ICdPVVRHT0lORycgJiYgIWRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCFjb25maWcuZmlsdGVyS2V5IHx8IGNvbmZpZy5maWx0ZXJLZXkgJiYgZWRnZS5kYXRhTW9kZWwubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGNvbmZpZy5maWx0ZXJLZXkudG9Mb3dlckNhc2UoKSkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy52aXNpYmlsaXR5TWFwW2VkZ2UuZGF0YU1vZGVsLnR5cGVJZF0gPT09IHVuZGVmaW5lZCB8fCBjb25maWcudmlzaWJpbGl0eU1hcFtlZGdlLmRhdGFNb2RlbC50eXBlSWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkaXJlY3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcudmlzaWJpbGl0eU1hcFJldmVyc2VbZWRnZS5kYXRhTW9kZWwudHlwZUlkXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy52aXNpYmlsaXR5TWFwUmV2ZXJzZVtlZGdlLmRhdGFNb2RlbC50eXBlSWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJkaWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRm9yTm9kZUZpbHRlcmluZ1tlZGdlLmRhdGFNb2RlbC5zb3VyY2VUeXBlSWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRm9yTm9kZUZpbHRlcmluZ1tlZGdlLmRhdGFNb2RlbC50YXJnZXRUeXBlSWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJkaWN0O1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG5vZGVzOiBwcmVwYXJlZERhdGEubm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXBGb3JOb2RlRmlsdGVyaW5nW25vZGUuZGF0YU1vZGVsLnR5cGVJZF07XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gcHJlcGFyZWREYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkRGF0YS5ub2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfbGF5b3V0LnB1dEFsbChmaWx0ZXJlZERhdGEubm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkRGF0YS5lZGdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfbGF5b3V0LnB1dEFsbChmaWx0ZXJlZERhdGEuZWRnZXMsIG5vZGVJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUNhY2hlICYmIGlzTm9kZSkge1xuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZHJlbih0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZHJlbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4uZ2V0KCdleHBhbmRlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbi5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhZ2luYXRpb24uZm9jdXNPbihpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2V4cGFuZE5vZGUoY2hpbGRyZW4sIF9kYXRhQ2FjaGVbY2hpbGRyZW4uaWRdLCBmcm9tQ2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICBfbGF5b3V0LnJlY2FsY3VsYXRlTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2VzIG5vZGUgYW5kIHJlbW92ZXMgYWxsIGNoaWxkcmVuXG4gICAgICogb2YgdGhlIE5vZGUgZnJvbSB0aGUgbGF5b3V0LlxuICAgICAqIFRoZW4gcmVjYWxjdWxhdGVzIGxheW91dC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdW5iaW5kRnJvbSAtIE5vZGUgaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY29sbGFwc2VOb2RlICh1bmJpbmRGcm9tKSB7XG4gICAgICAgIF9sYXlvdXQuY29sbGFwc2VOb2RlKHVuYmluZEZyb20pO1xuICAgICAgICBfbGF5b3V0LnJlY2FsY3VsYXRlTGF5b3V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgbGlzdCBvZiBzZXJ2ZXIgbm9kZXNcbiAgICAgKiB0byBMaXN0IG9mIGdyYXBoIG5vZGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gc2VydmVyTm9kZXMgLSBMaXN0IG9mIHNlcnZlciBub2Rlc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX0gR3JhcGggbm9kZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcHJlcGFyZU5vZGVzIChzZXJ2ZXJOb2Rlcykge1xuICAgICAgICB2YXIgbm9kZXMgPSBbXTtcblxuICAgICAgICBzZXJ2ZXJOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgbmV3Tm9kZSA9IF9jcmVhdGVOb2RlKG5vZGUpO1xuICAgICAgICAgICAgbm9kZXMucHVzaChuZXdOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBsaXN0IG9mIHNlcnZlciBlZGdlc1xuICAgICAqIHRvIExpc3Qgb2YgZ3JhcGggZWRnZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBzZXJ2ZXJFZGdlIC0gTGlzdCBvZiBzZXJ2ZXIgZWRnZXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEdyYXBoIGVkZ2VzXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3ByZXBhcmVFZGdlcyAoc2VydmVyRWRnZSkge1xuICAgICAgICB2YXIgZWRnZXMgPSBbXTtcblxuICAgICAgICBzZXJ2ZXJFZGdlLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcbiAgICAgICAgICAgIHZhciBuZXdFZGdlID0gX2NyZWF0ZUVkZ2UoZWRnZSk7XG4gICAgICAgICAgICBlZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVkZ2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHNlcnZlciBub2RlXG4gICAgICogdG8gZ3JhcGggbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIC0gU2VydmVyIG5vZGVcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gR3JhcGggbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVOb2RlIChub2RlKSB7XG4gICAgICAgIHZhciBuZXdOb2RlO1xuXG4gICAgICAgIG5ld05vZGUgPSBuZXcgTm9kZSh7XG4gICAgICAgICAgICB0eXBlSWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICBsYWJlbDogbm9kZS5sYWJlbCxcbiAgICAgICAgICAgIGNhbkV4cGFuZDogbm9kZS5jYW5FeHBhbmQsXG4gICAgICAgICAgICBmdWxsTm9kZUxhYmVsczogX2Z1bGxOb2RlTGFiZWxzLFxuICAgICAgICB9LCBfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHNlcnZlciBlZGdlXG4gICAgICogdG8gZ3JhcGggZWRnZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlZGdlIC0gU2VydmVyIGVkZ2VcbiAgICAgKiBAcmV0dXJucyB7RWRnZX0gR3JhcGggZWRnZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVFZGdlIChlZGdlKSB7XG4gICAgICAgIHZhciBuZXdFZGdlID0gbmV3IEVkZ2Uoe1xuICAgICAgICAgICAgdHlwZUlkOiBlZGdlLmlkLFxuICAgICAgICAgICAgc291cmNlVHlwZUlkOiBlZGdlLnNvdXJjZSxcbiAgICAgICAgICAgIHRhcmdldFR5cGVJZDogZWRnZS50YXJnZXQsXG4gICAgICAgICAgICBsYWJlbDogZWRnZS5sYWJlbCxcbiAgICAgICAgICAgIHBsYWNlbWVudDogZWRnZS5wbGFjZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3RWRnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFsbCBsaW5rIHBhZ2luYXRpb24gY29udHJvbHMgaW5hY3RpdmVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc2V0TGlua1BhZ2luYXRpb25Db250cm9sc0luYWN0aXZlICgpIHtcbiAgICAgICAgdmFyIG5vZGVzID0gc2VsZi5nZXROb2RlcygpO1xuICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgcGFnaW5hdGlvbiA9IG5vZGUuZ2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHBhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi5nZXRUeXBlKCkgPT09ICdlZGdlcycpIHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLnNldEluYWN0aXZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgbGluayBwYWdpbmF0aW9uIGNvbnRyb2wgYWN0aXZlXG4gICAgICogdG8gZ3JhcGggZWRnZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zZXRMaW5rUGFnaW5hdGlvbkNvbnRyb2xBY3RpdmUgKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhZ2luYXRpb24gPSBub2RlLmdldFBhZ2luYXRpb24oKTtcbiAgICAgICAgaWYgKHBhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi5nZXRUeXBlKCkgPT09ICdlZGdlcycpIHtcbiAgICAgICAgICAgIHBhZ2luYXRpb24uc2V0QWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkTG9hZGluZyAobm9kZSkge1xuICAgICAgICB2YXIgbG9hZGluZyA9IG5ldyBqb2ludC5zaGFwZXMuYmFzaWMuUmVjdCh7XG4gICAgICAgICAgICBzaXplOiB7d2lkdGg6IDU1LCBoZWlnaHQ6IDE1fSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcmVjdDogeydmaWxsLW9wYWNpdHknOiAwLCAnc3Ryb2tlLW9wYWNpdHknOiAwfSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdMb2FkaW5nLi4uJyxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogMTFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgejogMTAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB4ID0gbm9kZS5wb3NpdGlvbigpLngsXG4gICAgICAgICAgICB5ID0gbm9kZS5wb3NpdGlvbigpLnk7XG5cbiAgICAgICAgaWYgKG5vZGUuaWQgPT09IF9sYXlvdXQuZ2V0Um9vdE5vZGUoKS5pZCkge1xuICAgICAgICAgICAgeCArPSAobm9kZS5nZXRTaXplKCkud2lkdGggLSBsb2FkaW5nLmdldCgnc2l6ZScpLndpZHRoKSAvIDI7XG4gICAgICAgICAgICB5IC09IGxvYWRpbmcuZ2V0KCdzaXplJykuaGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeSArPSAobm9kZS5nZXRTaXplKCkuaGVpZ2h0IC0gbG9hZGluZy5nZXQoJ3NpemUnKS5oZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBub2RlLmdldERpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgeCArPSBub2RlLmdldFNpemUoKS53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCAtPSBsb2FkaW5nLmdldCgnc2l6ZScpLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZGluZy5wb3NpdGlvbih4LCB5KTtcblxuICAgICAgICBfZ3JhcGguYWRkQ2VsbChsb2FkaW5nKTtcbiAgICAgICAgbm9kZS5lbWJlZChsb2FkaW5nKTtcblxuICAgICAgICByZXR1cm4gbG9hZGluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVtb3ZlTG9hZGluZyAobG9hZGluZykge1xuICAgICAgICBsb2FkaW5nLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIGlubmVyIGNsYXNzXG4gICAgZnVuY3Rpb24gVHJhbnNpdGl2ZUNvcmUgKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBfcmVwZWF0ZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB2YXIgX2V4cGFuZENvdW50ZXIgPSAwO1xuXG4gICAgICAgIHNlbGYuaW5pdGlhbE5vZGUgPSBudWxsO1xuICAgICAgICBzZWxmLmluVXNlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBzZWxmLnN0YXJ0ID0gZnVuY3Rpb24gKGluaXRpYWxOb2RlKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIWluaXRpYWxOb2RlLmNvbmZpZ3VyYXRpb25TZXQuZXhwYW5kVHJhbnNpdGl2ZWx5IHx8XG4gICAgICAgICAgICAgICAgIShpbml0aWFsTm9kZSBpbnN0YW5jZW9mIE5vZGUpXG4gICAgICAgICAgICApIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VsZi5pbml0aWFsTm9kZSA9IGluaXRpYWxOb2RlO1xuICAgICAgICAgICAgX3JlcGVhdGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIF9leHBhbmRDb3VudGVyID0gMDtcblxuICAgICAgICAgICAgX2V4cGFuZFRyYW5zaXRpdmVseShpbml0aWFsTm9kZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gX2V4cGFuZFRyYW5zaXRpdmVseSAoaW5pdGlhbE5vZGUpIHtcbiAgICAgICAgICAgIGV4cGFuZE5vZGUoaW5pdGlhbE5vZGUsIGZ1bmN0aW9uIChyb290LCBub2Rlcykge1xuICAgICAgICAgICAgICAgIF9yZWN1cnNpdmVDYWxsKG5vZGVzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBleHBhbmROb2RlIChyb290LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChfcmVwZWF0ZWRFbGVtZW50cy5pbmRleE9mKHJvb3QuZGF0YU1vZGVsLnR5cGVJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socm9vdCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfcmVwZWF0ZWRFbGVtZW50cy5wdXNoKHJvb3QuZGF0YU1vZGVsLnR5cGVJZCk7XG4gICAgICAgICAgICAgICAgX2V4cGFuZENvdW50ZXIrKztcblxuICAgICAgICAgICAgICAgIGlmIChyb290IGluc3RhbmNlb2YgTm9kZSAmJiAhcm9vdC5nZXQoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyb290LmdldCgnaGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nID0gX2FkZExvYWRpbmcocm9vdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2V0TGlua1BhZ2luYXRpb25Db250cm9sc0luYWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXN5bmtPcGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3JlcXVlc3REYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHlwZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayAocmVzdWx0LCBwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290LnNldCgnZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJvb3QuZ2V0KCdoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NldExpbmtQYWdpbmF0aW9uQ29udHJvbEFjdGl2ZShyb290KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hc3lua09wZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlbW92ZUxvYWRpbmcobG9hZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZXhwYW5kTm9kZShyb290LCByZXN1bHQsIHByb3BzICYmIHByb3BzLmZyb21DYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcm9vdC5nZXQoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbGF5b3V0LnJlY2FsY3VsYXRlTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcGFwZXJTY3JvbGxlci56b29tVG9GaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJvb3QsIHJvb3QuZ2V0VmlzaWJsZUNoaWxkcmVuKHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyb290LmdldCgnaGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRMaW5rUGFnaW5hdGlvbkNvbnRyb2xBY3RpdmUocm9vdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYXN5bmtPcGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZW1vdmVMb2FkaW5nKGxvYWRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGpvaW50LnVpLkRpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5vcGVuKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyb290LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb290LmdldCgnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJvb3QsIHJvb3QuZ2V0VmlzaWJsZUNoaWxkcmVuKHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9yZWN1cnNpdmVDYWxsIChub2Rlcykge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIG5leHROb2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBzaG91bGRCZU9wZW5lZCA9IG5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVDeWNsZShpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVDeWNsZSAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2V4cGFuZENvdW50ZXIgPj0gX29wdGlvbnMuVFJBTlNJVElWRV9FWFBBTlNJT05fTElNSVRfU1RFUCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBuZXcgam9pbnQudWkuRGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25ldXRyYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1RoZSAnICsgKF9yZXBlYXRlZEVsZW1lbnRzLmxlbmd0aCkgKyAnIG5vZGVzIHdlcmUgZXhwYW5kZWQuIERvIHlvdSB3YW50IHRvIGNvbnRpbnVlPycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYWN0aW9uOiAnY29udGludWUnLCBjb250ZW50OiAnQ29udGludWUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGFjdGlvbjogJ3N0b3AnLCBjb250ZW50OiAnU3RvcCcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLm9uKCdhY3Rpb246Y29udGludWUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZXhwYW5kQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZE5vZGUobm9kZSwgY2FsbEJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5vbignYWN0aW9uOnN0b3AnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5vcGVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZE5vZGUobm9kZSwgY2FsbEJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2FsbEJhY2sgKHJvb3ROb2RlLCBuTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyZWROb2RlcyA9IGZpbHRlckxpc3Qobk5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyZWROb2Rlcy5sZW5ndGggPT09IDAgJiYgbm9kZS5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbGxDaGlsZHJlbiA9IHJvb3ROb2RlLmdldENoaWxkcmVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxsRmlsdGVyZWQgPSBmaWx0ZXJMaXN0KGFsbENoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbEZpbHRlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdEdvb2QgPSBhbGxGaWx0ZXJlZFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlLnBhZ2luYXRpb24uZm9jdXNPbkVsZW1lbnQoZmlyc3RHb29kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2Rlc1RvQWRkID0gcm9vdE5vZGUucGFnaW5hdGlvbi5nZXRDdXJyZW50Tm9kZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZXMgPSBuZXh0Tm9kZXMuY29uY2F0KG5vZGVzVG9BZGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJlZE5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZXMgPSBuZXh0Tm9kZXMuY29uY2F0KG5Ob2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRCZU9wZW5lZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVDeWNsZShpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzLmZpbHRlcihmdW5jdGlvbiAobikgeyByZXR1cm4gbi5nZXQoJ2V4cGFuZGVkJyk7IH0pLmxlbmd0aCA9PT0gc2hvdWxkQmVPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVjdXJzaXZlQ2FsbChuZXh0Tm9kZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaWx0ZXJMaXN0IChsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0Tm9kZXMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5kYXRhTW9kZWwudHlwZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5pbmRleE9mKG4uZGF0YU1vZGVsLnR5cGVJZCkgPT09IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhlcmUgd2UgY2FsbCBjb25zdHJ1Y3RvciBhZnRlciBkZWZpbmluZyBhbGwgZnVuY3Rpb25zXG4gICAgX2luaXRpYWxpemUuY2FsbChzZWxmLCBkYXRhUHJvdmlkZXIsIHBhcGVyUHJvcGVydGllcywgZm9jdXNOb2RlSWQsIHJlc291cmNlUGF0aCwgX29wdGlvbnMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5laWdoYm9yR3JhbTtcblxuXG4iLCJ2YXIgam9pbnQgPSByZXF1aXJlKCdyYXBwaWQnKTtcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgQ3Jvc3NOb2RlID0gcmVxdWlyZSgnLi9ncmFwaEVsZW1lbnRzJykuQ3Jvc3NOb2RlO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7REVGQVVMVF9QQUdFX1NJWkU6IDV9O1xuXG4vLyBDcmVhdGUgYSBjdXN0b20gZWxlbWVudC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pZiAoIWpvaW50LnNoYXBlcy5odG1sKSBqb2ludC5zaGFwZXMuaHRtbCA9IHt9O1xuXG5qb2ludC5zaGFwZXMuaHRtbC5QYWdpbmF0aW9uID0gam9pbnQuc2hhcGVzLmJhc2ljLlJlY3QuZXh0ZW5kKHtcbiAgICBkZWZhdWx0czogam9pbnQudXRpbC5kZWVwU3VwcGxlbWVudCh7XG4gICAgICAgIHR5cGU6ICdodG1sLlBhZ2luYXRpb24nLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcmVjdDoge3N0cm9rZTogJ25vbmUnLCAnZmlsbC1vcGFjaXR5JzogMCwgc3R5bGU6IHsncG9pbnRlci1ldmVudHMnOiAnbm9uZSd9fVxuICAgICAgICB9XG4gICAgfSwgam9pbnQuc2hhcGVzLmJhc2ljLlJlY3QucHJvdG90eXBlLmRlZmF1bHRzKVxufSk7XG5cbi8vIENyZWF0ZSBhIGN1c3RvbSB2aWV3IGZvciB0aGF0IGVsZW1lbnQgdGhhdCBkaXNwbGF5cyBhbiBIVE1MIGRpdiBhYm92ZSBpdC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuam9pbnQuc2hhcGVzLmh0bWwuUGFnaW5hdGlvblZpZXcgPSBqb2ludC5kaWEuRWxlbWVudFZpZXcuZXh0ZW5kKHtcblxuICAgIHRlbXBsYXRlOiBbXG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5nLXByZXZcIiB0aXRsZT1cIlByZXZcIj48L2J1dHRvbj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cIm5nLXBhZ2VzXCI+PHNwYW4gY2xhc3M9XCJuZy1wYWdlcy1jdXJcIj48L3NwYW4+LzxzcGFuIGNsYXNzPVwibmctcGFnZXMtdG90YWxcIj48L3NwYW4+PC9kaXY+JyxcbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmctbmV4dFwiIHRpdGxlPVwiTmV4dFwiPjwvYnV0dG9uPidcbiAgICBdLmpvaW4oJycpLFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBfLmJpbmRBbGwodGhpcywgJ3VwZGF0ZUJveCcpO1xuICAgICAgICBqb2ludC5kaWEuRWxlbWVudFZpZXcucHJvdG90eXBlLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICB0aGlzLmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldFR5cGUoKSA9PT0gJ25vZGVzJykge1xuICAgICAgICAgICAgdGhpcy5ib3guY2xhc3NOYW1lID0gJ25nLXBhZ2luYXRpb24tbm9kZXMnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3guY2xhc3NOYW1lID0gJ25nLXBhZ2luYXRpb24tZWRnZXMnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib3guaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZTtcblxuICAgICAgICAvLyBFdmVudHNcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHZhciBidXR0b25QcmV2ID0gdGhpcy5ib3gucXVlcnlTZWxlY3RvcignLm5nLXByZXYnKTtcbiAgICAgICAgdmFyIGJ1dHRvbk5leHQgPSB0aGlzLmJveC5xdWVyeVNlbGVjdG9yKCcubmctbmV4dCcpO1xuXG4gICAgICAgIGJ1dHRvblByZXYub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYubW9kZWwucHJldigpO1xuICAgICAgICAgICAgdXBkYXRlQnV0dG9uc1N0YXRlKCk7XG4gICAgICAgIH07XG4gICAgICAgIGJ1dHRvbk5leHQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYubW9kZWwubmV4dCgpO1xuICAgICAgICAgICAgdXBkYXRlQnV0dG9uc1N0YXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQnV0dG9uc1N0YXRlICgpIHtcbiAgICAgICAgICAgIGJ1dHRvblByZXYuZGlzYWJsZWQgPSBzZWxmLm1vZGVsLnN0YXRlLmN1clBhZ2UgPT09IDA7XG4gICAgICAgICAgICBidXR0b25OZXh0LmRpc2FibGVkID0gc2VsZi5tb2RlbC5zdGF0ZS5jdXJQYWdlID09PSBzZWxmLm1vZGVsLnN0YXRlLnBhZ2VDb3VudCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQnV0dG9uc1N0YXRlKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBib3ggcG9zaXRpb24gd2hlbmV2ZXIgdGhlIHVuZGVybHlpbmcgbW9kZWwgY2hhbmdlcy5cbiAgICAgICAgdGhpcy5tb2RlbC5vbignY2hhbmdlJywgdGhpcy51cGRhdGVCb3gsIHRoaXMpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGJveCB3aGVuIHRoZSBtb2RlbCBnZXRzIHJlbW92ZWQgZnJvbSB0aGUgZ3JhcGguXG4gICAgICAgIHRoaXMubW9kZWwub24oJ3JlbW92ZScsIHRoaXMucmVtb3ZlQm94LCB0aGlzKTtcbiAgICAgICAgLy8gaWYgd2UgdXNlIHpvb20gKy8tXG4gICAgICAgIHRoaXMubW9kZWwub24oJ3VwZGF0ZVZpZXdQb3NpdGlvbicsIHRoaXMudXBkYXRlQm94LCB0aGlzKTtcblxuICAgICAgICB0aGlzLm1vZGVsLm9uKCdzZXRBY3RpdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubW9kZWwub24oJ3NldEluYWN0aXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMubW9kZWwub24oJ3N0YXJ0TG9hZGluZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubW9kZWwub24oJ2ZpbmlzaExvYWRpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQm94KCk7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZXMoKTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBqb2ludC5kaWEuRWxlbWVudFZpZXcucHJvdG90eXBlLnJlbmRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnBhcGVyLmVsLmFwcGVuZENoaWxkKHRoaXMuYm94KTtcbiAgICAgICAgdGhpcy51cGRhdGVCb3goKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB1cGRhdGVCb3g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJib3ggPSB0aGlzLm1vZGVsLmdldE15QkJveCgpO1xuXG4gICAgICAgIHRoaXMuYm94LnN0eWxlLndpZHRoID0gYmJveC53aWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuYm94LnN0eWxlLmhlaWdodCA9IGJib3guaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5ib3guc3R5bGUubGVmdCA9IGJib3gueCArICdweCc7XG4gICAgICAgIHRoaXMuYm94LnN0eWxlLnRvcCA9IGJib3gueSArICdweCc7XG4gICAgICAgIHRoaXMuYm94LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArICh0aGlzLm1vZGVsLmdldCgnYW5nbGUnKSB8fCAwKSArICdkZWcpJztcbiAgICB9LFxuICAgIHJlbW92ZUJveDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJveC5yZW1vdmUoKTtcbiAgICB9LFxuICAgIHVwZGF0ZVBhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYm94LnF1ZXJ5U2VsZWN0b3IoJy5uZy1wYWdlcy1jdXInKS5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLmdldFN0YXRlKCkuY3VyUGFnZSArIDE7XG4gICAgICAgIHRoaXMuYm94LnF1ZXJ5U2VsZWN0b3IoJy5uZy1wYWdlcy10b3RhbCcpLmlubmVySFRNTCA9IHRoaXMubW9kZWwuZ2V0U3RhdGUoKS5wYWdlQ291bnQ7XG4gICAgfSxcbiAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLmJveC5jbGFzc05hbWUgPSB0aGlzLmJveC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7XG4gICAgfSxcbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgYm94ID0gdGhpcy5ib3g7XG4gICAgICAgIHZhciBjbGFzc2VzID0gYm94LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNsYXNzZXNbaV0gPT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJveC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiBQYWdpbmF0aW9uIC0gaXQgd2lsbCBiZSBuZXcgZ3JhcGggZWxlbWVudCxcbiAqIHdoaWNoIHByb3ZpZGVzIHBhZ2luYXRpb25cbiAqXG4gKiBDb25zdHJ1Y3RvciBwYXJhbWV0ZXJzOlxuICogICAgICBub2RlOiBOb2RlXG4gKiAgICAgIF9sYXlvdXQ6IEdyYXBoTGF5b3V0XG4gKiAgICAgIHBhZ2VTaXplOiBudW1iZXJcbiAqICAgICAgdHlwZTogc3RyaW5nXG4gKiAgICAgIF9vcHRpb25zOiB7XG4gKiAgICAgICAgICBERUZBVUxUX1BBR0VfU0laRTogbnVtYmVyLCBcbiAqICAgICAgICAgIENPTE9SX0NMQVNTX0NPVU5UOiBudW1iZXIsIFxuICogICAgICAgICAgTUFYX0xBQkVMX0xFTkdUSDogbnVtYmVyLCBcbiAqICAgICAgICAgIENPTF9PRkZTRVQ6IG51bWJlciwgXG4gKiAgICAgICAgICBST1dfT0ZGU0VUOiBudW1iZXIsIFxuICogICAgICAgICAgQ1JPU1NfTk9ERV9PRkZTRVQ6IG51bWJlciwgXG4gKiAgICAgICAgICBDT0xPUl9DTEFTU19NQVA6IHtcbiAqICAgICAgICAgICAgICAnc3ViQ2xhc3NPZic6IHN0cmluZywgXG4gKiAgICAgICAgICAgICAgJ3R5cGUnOiBzdHJpbmdcbiAqICAgICAgICAgIH1cbiAqICAgICAgfVxuICpcbiAqIFB1YmxpYyBtZXRob2RzOlxuICogICAgICBuZXh0KCk6IHZvaWRcbiAqICAgICAgcHJldigpOiB2b2lkXG4gKiAgICAgIGdldFN0YXRlKCk6IHsgdG90YWxDb3VudDogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBjdXJQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyIH1cbiAqICAgICAgZ2V0VHlwZSgpOiBzdHJpbmdcbiAqICAgICAgZ2V0TXlCQm94KCk6IHJldHVybiB7d2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyfVxuICogICAgICB1cGRhdGVWaWV3UG9zaXRpb24oKTogdm9pZFxuICogICAgICBzZXRBY3RpdmUoKTogdm9pZFxuICogICAgICBzZXRJbmFjdGl2ZSgpOiB2b2lkXG4gKi9cbmZ1bmN0aW9uIFBhZ2luYXRpb24gKG5vZGUsIF9sYXlvdXQsIHBhZ2VTaXplLCB0eXBlLCBfb3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBERUZBVUxUX1BBR0VfU0laRSA9IChfb3B0aW9ucyAmJiBfb3B0aW9ucy5ERUZBVUxUX1BBR0VfU0laRSAhPSB1bmRlZmluZWQgPyBfb3B0aW9ucy5ERUZBVUxUX1BBR0VfU0laRSA6IGRlZmF1bHRPcHRpb25zLkRFRkFVTFRfUEFHRV9TSVpFKTtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUgKG5vZGUsIGxheW91dCwgcGFnZVNpemUsIHR5cGUpIHtcblxuICAgICAgICB2YXIgdG90YWxDb3VudCA9IG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGg7XG4gICAgICAgIHBhZ2VTaXplID0gKHBhZ2VTaXplID8gcGFnZVNpemUgOiBERUZBVUxUX1BBR0VfU0laRSk7XG5cblxuICAgICAgICBzZWxmLnN0YXRlID0ge1xuICAgICAgICAgICAgdG90YWxDb3VudDogdG90YWxDb3VudCxcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgICAgIGN1clBhZ2U6IDAsXG4gICAgICAgICAgICBwcmV2UGFnZTogMCxcbiAgICAgICAgICAgIHBhZ2VDb3VudDogTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBwYWdlU2l6ZSlcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi50eXBlID0gdHlwZTtcbiAgICAgICAgc2VsZi5yZWZyZXNoTGF5b3V0ID0gbGF5b3V0LnJlY2FsY3VsYXRlTGF5b3V0O1xuXG4gICAgICAgIHZhciBvcHRpb25zID0gc2VsZi50eXBlID09PSAnbm9kZXMnID8ge3NpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6IDIzfX0gOiB7c2l6ZToge3dpZHRoOiAyMCwgaGVpZ2h0OiA0Nn19O1xuXG4gICAgICAgIGpvaW50LnNoYXBlcy5odG1sLlBhZ2luYXRpb24uYXBwbHkoc2VsZiwgW29wdGlvbnNdKTtcbiAgICB9XG5cbiAgICAvLyBnbyB0byBuZXh0IHBhZ2VcbiAgICBzZWxmLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLnN0YXRlLmN1clBhZ2UgPCBzZWxmLnN0YXRlLnBhZ2VDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHNlbGYudHJpZ2dlcignc3RhcnRMb2FkaW5nJyk7XG4gICAgICAgICAgICBzZWxmLnN0YXRlLnByZXZQYWdlID0gc2VsZi5zdGF0ZS5jdXJQYWdlO1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5jdXJQYWdlKys7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlZnJlc2hMYXlvdXQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2ZpbmlzaExvYWRpbmcnKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyByZXR1cm5zIG5vZGVzIG9mIGN1cnJlbnQgcGFnZVxuICAgIHNlbGYuZ2V0Q3VycmVudE5vZGVzID0gZnVuY3Rpb24gKGV4cGFuZENyb3NzTm9kZXMpIHtcbiAgICAgICAgdmFyIHBhZ2VTaXplID0gc2VsZi5zdGF0ZS5wYWdlU2l6ZTtcbiAgICAgICAgdmFyIGN1clBhZ2UgPSAgc2VsZi5zdGF0ZS5jdXJQYWdlO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmdldENoaWxkcmVuKGV4cGFuZENyb3NzTm9kZXMpO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4uc2xpY2UocGFnZVNpemUgKiBjdXJQYWdlLCAoY3VyUGFnZSArIDEpICogcGFnZVNpemUpO1xuICAgIH07XG5cbiAgICAvLyBnbyB0byBwcmV2aW91cyBwYWdlXG4gICAgc2VsZi5wcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2VsZi5zdGF0ZS5jdXJQYWdlICE9PSAwKSB7XG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3N0YXJ0TG9hZGluZycpO1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5wcmV2UGFnZSA9IHNlbGYuc3RhdGUuY3VyUGFnZTtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuY3VyUGFnZS0tO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWZyZXNoTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCdmaW5pc2hMb2FkaW5nJyk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZ28gdG8gc3BlY2lmaWMgcGFnZVxuICAgIHNlbGYuZ29UbyA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnVtYmVyIDw9IHNlbGYuc3RhdGUucGFnZUNvdW50ICYmXG4gICAgICAgICAgICBudW1iZXIgPj0gMCAmJlxuICAgICAgICAgICAgbnVtYmVyICE9PSBzZWxmLnN0YXRlLmN1clBhZ2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3N0YXJ0TG9hZGluZycpO1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5wcmV2UGFnZSA9IHNlbGYuc3RhdGUuY3VyUGFnZTtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuY3VyUGFnZSA9IG51bWJlcjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYucmVmcmVzaExheW91dCgpO1xuICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcignZmluaXNoTG9hZGluZycpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYuZ2V0UGFnZUJ5RWxlbWVudEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+IHNlbGYuc3RhdGUudG90YWxDb3VudCkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCAvIHNlbGYuc3RhdGUucGFnZVNpemUpO1xuICAgIH07XG5cbiAgICBzZWxmLmZvY3VzT24gPSBmdW5jdGlvbiAoZWxlbWVudEluZGV4KSB7XG4gICAgICAgIHNlbGYuZ29UbyhzZWxmLmdldFBhZ2VCeUVsZW1lbnRJbmRleChlbGVtZW50SW5kZXgpKTtcbiAgICB9O1xuXG4gICAgc2VsZi5mb2N1c09uRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdmFyIGNyb3NzTm9kZXMgPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIENyb3NzTm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjcm9zc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNyb3NzQ2hpbGRyZW4gPSBjcm9zc05vZGVzW2ldLmdldENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNyb3NzQ2hpbGRyZW4uaW5kZXhPZihlbGVtZW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyb3NzQ2hpbGRyZW4ucGFnaW5hdGlvbikgY3Jvc3NDaGlsZHJlbi5wYWdpbmF0aW9uLmZvY3VzT25FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YoY3Jvc3NOb2Rlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmdvVG8oc2VsZi5nZXRQYWdlQnlFbGVtZW50SW5kZXgoaW5kZXgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5nb1RvKHNlbGYuZ2V0UGFnZUJ5RWxlbWVudEluZGV4KGluZGV4KSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBzZWxmLmdldFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2VsZi5zdGF0ZTtcbiAgICB9O1xuXG4gICAgc2VsZi5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2VsZi50eXBlO1xuICAgIH07XG5cbiAgICBzZWxmLmdldE15QkJveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNpemUgPSBzZWxmLmdldCgnc2l6ZScpO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBzZWxmLnBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBzY2FsZSA9IF9sYXlvdXQuZ2V0U2NhbGUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplLmhlaWdodCxcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLnggKiBzY2FsZS5zeCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnkgKiBzY2FsZS5zeVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLnVwZGF0ZVZpZXdQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCd1cGRhdGVWaWV3UG9zaXRpb24nKTtcbiAgICB9O1xuXG4gICAgc2VsZi5zZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2V0QWN0aXZlJyk7XG4gICAgfTtcblxuICAgIHNlbGYuc2V0SW5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYudHJpZ2dlcignc2V0SW5hY3RpdmUnKTtcbiAgICB9O1xuXG4gICAgaW5pdGlhbGl6ZShub2RlLCBfbGF5b3V0LCBwYWdlU2l6ZSwgdHlwZSk7XG59XG5QYWdpbmF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoam9pbnQuc2hhcGVzLmh0bWwuUGFnaW5hdGlvbi5wcm90b3R5cGUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2luYXRpb247XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2xvbmVEZWVwID0gcmVxdWlyZSgnbG9kYXNoJykuY2xvbmVEZWVwO1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHtcbiAqICBiYXNlOiBIVE1MRWxlbWVudCxcbiAqICB0YXJnZXQ6IE5vZGUsXG4gKiAgc2Nyb2xsZXI6IGpvaW50LnVpLlBhcGVyU2Nyb2xsZXJcbiAqIH0gX29wdGlvbnMgXG4gKi9cbmZ1bmN0aW9uIFBvcFVwTWVudSAob3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHNlbGYuYWxpdmUgPSB0cnVlO1xuICAgIHNlbGYudGVtcENvbmZpZ3VyYXRpb24gPSBjbG9uZURlZXAob3B0aW9ucy50YXJnZXQuY29uZmlndXJhdGlvblNldCk7XG4gICAgc2VsZi50ZW1wQ29uZmlndXJhdGlvbi5tb2RpZmllZCA9IHRydWU7XG5cbiAgICB2YXIgX2Jhc2UgPSBvcHRpb25zLmJhc2U7XG4gICAgdmFyIF90YXJnZXQgPSBzZWxmLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgIHZhciBfc2Nyb2xsZXIgPSBvcHRpb25zLnNjcm9sbGVyO1xuXG4gICAgdmFyIF9zZWFyY2hJbnB1dCA9IG51bGw7XG4gICAgdmFyIF9saW5rc1JvdyA9IG51bGw7XG4gICAgdmFyIF9yYWRpb0J1dHRvbnMgPSBudWxsO1xuICAgIFxuICAgIHZhciBfcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIF9jcmVhdGVNYXJrdXAoKTtcblxuICAgIHZhciB0YXJnZXRQb3NpdGlvbiA9IF9nZXRUYXJnZXRQb3NpdGlvbigpO1xuICAgIF91cGRhdGVQb3NpdGlvbih0YXJnZXRQb3NpdGlvbik7XG5cbiAgICBpZiAoX3RhcmdldCAmJiBfdGFyZ2V0Lm9uKSB7XG4gICAgICAgIF90YXJnZXQub24oJ2NoYW5nZTpwb3NpdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zY3JvbGxlci5vcHRpb25zLnBhcGVyLm9uKCdibGFuazpwb2ludGVyZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIF9zY3JvbGxlci5vcHRpb25zLnBhcGVyLm9uKCdjaGFuZ2U6Y3VzdG9tUG9zaXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYucmVmcmVzaCgpO1xuICAgIH0pO1xuXG4gICAgX3RhcmdldC5vbignY2hhbmdlOmhpZGRlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIF9zY3JvbGxlci5zY3JvbGxUb0VsZW1lbnQoX3RhcmdldCk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc2VsZi5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLmFsaXZlKSB7XG4gICAgICAgICAgICBfYmFzZS5yZW1vdmVDaGlsZChfcm9vdCk7XG4gICAgICAgICAgICBzZWxmLmFsaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2VsZi5hbGl2ZSkge1xuICAgICAgICAgICAgX3JlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLnB1dERhdGEgPSBmdW5jdGlvbiAoZWRnZXMpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gX2NyZWF0ZUNvbm5lY3Rpb25zTGlzdChlZGdlcyk7XG4gICAgICAgIF90YXJnZXQuY29uZmlndXJhdGlvblNldC5jb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zO1xuICAgICAgICBfcmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlTWFya3VwICgpIHtcbiAgICAgICAgX3Jvb3QuY2xhc3NOYW1lID0gJ25nLXVpX3BvcC11cCc7XG4gICAgICAgIF9yb290LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgX2Jhc2UuYXBwZW5kQ2hpbGQoX3Jvb3QpO1xuXG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ25nLXVpX3BvcC11cF9ib2R5JztcbiAgICAgICAgX3Jvb3QuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICAgICAgdmFyIHNlYXJjaFJvdyA9IGNyZWF0ZVJvdygnbmctdWlfcG9wLXVwX2JvZHlfc2VhcmNoLXJvdycpO1xuICAgICAgICBfc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpO1xuICAgICAgICBfc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgX3NlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoLi4nKTtcbiAgICAgICAgX3NlYXJjaElucHV0LmNsYXNzTmFtZT0nbmctdWlfcG9wLXVwX2JvZHlfc2VhcmNoLXJvd19faW5wdXQnO1xuICAgICAgICBzZWFyY2hSb3cuYXBwZW5kQ2hpbGQoX3NlYXJjaElucHV0KTtcbiAgICAgICAgX3NlYXJjaElucHV0Lm9ua2V5dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnRlbXBDb25maWd1cmF0aW9uLmZpbHRlcktleSA9IF9zZWFyY2hJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIF91cGRhdGVDb25uZWN0aW9uTGlzdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByYWRpb1JvdyA9IGNyZWF0ZVJvdygnbmctdWlfcG9wLXVwX2JvZHlfcmFkaW8tcm93JywgJ0ZPUk0nKTtcbiAgICAgICAgcmFkaW9Sb3cubmFtZSA9ICdmaWx0ZXJUeXBlRm9ybSc7XG4gICAgICAgIHJhZGlvUm93LmlubmVySFRNTCA9IFxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibmctdWlfcG9wLXVwX2JvZHlfcmFkaW8tcm93X19yYWRpby1idXR0b25cIj4nICsgXG4gICAgICAgICAgICAgICAgJzxpbnB1dCBjbGFzcz1cIm5nLXVpX3BvcC11cF9ib2R5X3JhZGlvLXJvd19fcmFkaW8tYnV0dG9uLWlucHV0XCIgbmFtZT1cImZpbHRlclR5cGVcIiB2YWx1ZT1cIkFMTFwiIHR5cGU9XCJyYWRpb1wiIC8+JyArXG4gICAgICAgICAgICAgICAgJzxpbWcgY2xhc3M9XCJuZy1hbGwtY29ubmVjdGlvbnNcIi8+JyArXG4gICAgICAgICAgICAgICAgJzxsYWJlbD4gQm90aDwvbGFiZWw+JyArXG4gICAgICAgICAgICAnPC9zcGFuPicgK1xuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibmctdWlfcG9wLXVwX2JvZHlfcmFkaW8tcm93X19yYWRpby1idXR0b25cIj4nICsgXG4gICAgICAgICAgICAgICAgJzxpbnB1dCBjbGFzcz1cIm5nLXVpX3BvcC11cF9ib2R5X3JhZGlvLXJvd19fcmFkaW8tYnV0dG9uLWlucHV0XCIgbmFtZT1cImZpbHRlclR5cGVcIiB2YWx1ZT1cIklOQ09NSU5HXCIgdHlwZT1cInJhZGlvXCIgLz4nICtcbiAgICAgICAgICAgICAgICAnPGltZyBjbGFzcz1cIm5nLWluY29taW5nLWNvbm5lY3Rpb25zXCIvPicgK1xuICAgICAgICAgICAgICAgICc8bGFiZWw+IEluY29taW5nPC9sYWJlbD4nICtcbiAgICAgICAgICAgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJuZy11aV9wb3AtdXBfYm9keV9yYWRpby1yb3dfX3JhZGlvLWJ1dHRvblwiPicgKyBcbiAgICAgICAgICAgICAgICAnPGlucHV0IGNsYXNzPVwibmctdWlfcG9wLXVwX2JvZHlfcmFkaW8tcm93X19yYWRpby1idXR0b24taW5wdXRcIiBuYW1lPVwiZmlsdGVyVHlwZVwiIHZhbHVlPVwiT1VUR09JTkdcIiB0eXBlPVwicmFkaW9cIiAvPicgK1xuICAgICAgICAgICAgICAgICc8aW1nIGNsYXNzPVwibmctb3V0Z29pbmctY29ubmVjdGlvbnNcIi8+JyArXG4gICAgICAgICAgICAgICAgJzxsYWJlbD4gT3V0Z29pbmc8L2xhYmVsPicgK1xuICAgICAgICAgICAgJzwvc3Bhbj4nO1xuICAgICAgICBfcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPWZpbHRlclR5cGVGb3JtXScpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9ZmlsdGVyVHlwZV0nKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IF9yYWRpb0J1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9yYWRpb0J1dHRvbnNbaV0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRlbXBDb25maWd1cmF0aW9uLmZpbHRlclR5cGUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIF91cGRhdGVDb25uZWN0aW9uTGlzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmFkaW9Sb3dCdXR0b25zID0gcmFkaW9Sb3cucXVlcnlTZWxlY3RvckFsbCgnLm5nLXVpX3BvcC11cF9ib2R5X3JhZGlvLXJvd19fcmFkaW8tYnV0dG9uJyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpb1Jvd0J1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJhZGlvUm93QnV0dG9uc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLnRlbXBDb25maWd1cmF0aW9uLmZpbHRlclR5cGUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBfdXBkYXRlQ29ubmVjdGlvbkxpc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhbnNpdGl2ZVJvdyA9IGNyZWF0ZVJvdygnbmctdWlfcG9wLXVwX2JvZHlfdHJhbnNpdGl2ZS1yb3cnKTtcbiAgICAgICAgdmFyIHRyYW5zaXRpdmVDaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG4gICAgICAgIHRyYW5zaXRpdmVDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tCb3gnKTtcbiAgICAgICAgdHJhbnNpdGl2ZUNoZWNrQm94LmNoZWNrZWQgPSBzZWxmLnRlbXBDb25maWd1cmF0aW9uLmV4cGFuZFRyYW5zaXRpdmVseTtcbiAgICAgICAgdHJhbnNpdGl2ZVJvdy5hcHBlbmRDaGlsZCh0cmFuc2l0aXZlQ2hlY2tCb3gpO1xuICAgICAgICB0cmFuc2l0aXZlUm93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cmFuc2l0aXZlQ2hlY2tCb3guY2hlY2tlZCA9ICF0cmFuc2l0aXZlQ2hlY2tCb3guY2hlY2tlZDtcbiAgICAgICAgICAgIHNlbGYudGVtcENvbmZpZ3VyYXRpb24uZXhwYW5kVHJhbnNpdGl2ZWx5ID0gdHJhbnNpdGl2ZUNoZWNrQm94LmNoZWNrZWQ7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0cmFuc2l0aXZlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMQUJFTCcpO1xuICAgICAgICB0cmFuc2l0aXZlTGFiZWwuaW5uZXJUZXh0ID0gJ1RyYW5zaXRpdmUgZXhwYW5zaW9uJztcbiAgICAgICAgdHJhbnNpdGl2ZVJvdy5hcHBlbmRDaGlsZCh0cmFuc2l0aXZlTGFiZWwpO1xuXG4gICAgICAgIF9saW5rc1JvdyA9IGNyZWF0ZVJvdygnbmctdWlfcG9wLXVwX2JvZHlfbGlua3Mtcm93Jyk7XG4gICAgICAgIF91cGRhdGVDb25uZWN0aW9uTGlzdCAoX2xpbmtzUm93KTtcblxuICAgICAgICB2YXIgYnV0dG9uc1JvdyA9IGNyZWF0ZVJvdygnbmctdWlfcG9wLXVwX2JvZHlfYnV0dG9ucy1yb3cnKTtcblxuICAgICAgICB2YXIgc2VsZWN0QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgIHNlbGVjdEFsbC5jbGFzc05hbWUgPSAnbmctdWlfcG9wLXVwX2JvZHlfYnV0dG9ucy1yb3dfYnV0dG9uIHRxLWJ1dHRvbic7XG4gICAgICAgIHNlbGVjdEFsbC5pbm5lclRleHQgPSAnU2VsZWN0IGFsbCc7XG4gICAgICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoc2VsZWN0QWxsKTtcbiAgICAgICAgc2VsZWN0QWxsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGVja0FsbCh0cnVlKTtcbiAgICAgICAgICAgIF91cGRhdGVDb25uZWN0aW9uTGlzdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjbGVhclNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xuICAgICAgICBjbGVhclNlbGVjdGlvbi5jbGFzc05hbWUgPSAnbmctdWlfcG9wLXVwX2JvZHlfYnV0dG9ucy1yb3dfYnV0dG9uIHRxLWJ1dHRvbic7XG4gICAgICAgIGNsZWFyU2VsZWN0aW9uLmlubmVyVGV4dCA9ICdDbGVhciBzZWxlY3Rpb24nO1xuICAgICAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGNsZWFyU2VsZWN0aW9uKTtcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoZWNrQWxsKGZhbHNlKTtcbiAgICAgICAgICAgIF91cGRhdGVDb25uZWN0aW9uTGlzdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBzcGFuLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICAgICAgYnV0dG9uc1Jvdy5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICB2YXIgcmVzZXRGaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcbiAgICAgICAgcmVzZXRGaWx0ZXIuY2xhc3NOYW1lID0gJ25nLXVpX3BvcC11cF9ib2R5X2J1dHRvbnMtcm93X2J1dHRvbiB0cS1idXR0b24nO1xuICAgICAgICByZXNldEZpbHRlci5pbm5lclRleHQgPSAnUmVzZXQgZmlsdGVyJztcbiAgICAgICAgYnV0dG9uc1Jvdy5hcHBlbmRDaGlsZChyZXNldEZpbHRlcik7XG4gICAgICAgIHJlc2V0RmlsdGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gX3RhcmdldC5nZXRQYXJlbnQoKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmJlZm9yZUFwcGx5KSBvcHRpb25zLmJlZm9yZUFwcGx5KF90YXJnZXQuY29uZmlndXJhdGlvblNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0LmNvbmZpZ3VyYXRpb25TZXQgPSBjbG9uZURlZXAocGFyZW50LmNvbmZpZ3VyYXRpb25TZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGFyZ2V0LmNvbmZpZ3VyYXRpb25TZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclR5cGU6ICdBTEwnLCAvLyBJTkNPTUlORywgT1VUR09JTkdcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyS2V5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eU1hcDoge30sXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlNYXBSZXZlcnNlOiB7fSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGFyZ2V0LmNvbmZpZ3VyYXRpb25TZXQuY29ubmVjdGlvbnMgPSBzZWxmLnRlbXBDb25maWd1cmF0aW9uLmNvbm5lY3Rpb25zO1xuICAgICAgICAgICAgX3RhcmdldC5jb25maWd1cmF0aW9uU2V0Lm1vZGlmaWVkID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLnRlbXBDb25maWd1cmF0aW9uID0gY2xvbmVEZWVwKF90YXJnZXQuY29uZmlndXJhdGlvblNldCk7XG4gICAgICAgICAgICBzZWxmLnRlbXBDb25maWd1cmF0aW9uLm1vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIF91cGRhdGVDb25uZWN0aW9uTGlzdCgpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmUoKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYWZ0ZXJBcHBseSkgb3B0aW9ucy5hZnRlckFwcGx5KF90YXJnZXQuY29uZmlndXJhdGlvblNldCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgIGdvLmNsYXNzTmFtZSA9ICduZy11aV9wb3AtdXBfYm9keV9idXR0b25zLXJvd19idXR0b24gZ28tYnV0dG9uJztcbiAgICAgICAgZ28uaW5uZXJUZXh0ID0gJ0dvJztcbiAgICAgICAgZ28ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmJlZm9yZUFwcGx5KSBvcHRpb25zLmJlZm9yZUFwcGx5KF90YXJnZXQuY29uZmlndXJhdGlvblNldCk7XG5cbiAgICAgICAgICAgIF90YXJnZXQuY29uZmlndXJhdGlvblNldCA9IHNlbGYudGVtcENvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICBzZWxmLnJlbW92ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hZnRlckFwcGx5KSBvcHRpb25zLmFmdGVyQXBwbHkoX3RhcmdldC5jb25maWd1cmF0aW9uU2V0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGdvKTtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVSb3cgKGNsYXNzTmFtZSwgdGVnKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZWcgfHwgJ0RJVicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0FsbCAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBzZWxmLnRlbXBDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQ29ubmVjdGlvbnMgPSBmaWx0ZXJDb25uZWN0aW9ucyhjb25maWcpO1xuICAgICAgICAgICAgZmlsdGVyZWRDb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb25lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25lY3Rpb24uY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdXBkYXRlQ29ubmVjdGlvbkxpc3QgKCkge1xuICAgICAgICBpZiAoc2VsZi50ZW1wQ29uZmlndXJhdGlvbi5jb25uZWN0aW9ucykge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IF9yYWRpb0J1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihfcmFkaW9CdXR0b25zW2ldLnZhbHVlID09PSBzZWxmLnRlbXBDb25maWd1cmF0aW9uLmZpbHRlclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3JhZGlvQnV0dG9uc1tpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3NlYXJjaElucHV0LnZhbHVlICE9PSBzZWxmLnRlbXBDb25maWd1cmF0aW9uLmZpbHRlcktleSkge1xuICAgICAgICAgICAgICAgIF9zZWFyY2hJbnB1dC52YWx1ZSA9IHNlbGYudGVtcENvbmZpZ3VyYXRpb24uZmlsdGVyS2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi50ZW1wQ29uZmlndXJhdGlvbi5jb25uZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBfbGlua3NSb3cuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJuZy11aV9wb3AtdXBfYm9keV9saW5rcy1yb3dfX2Rpc2FibGVkXCI+TGlzdCBpcyBlbXB0eTwvZGl2Pic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9saW5rc1Jvdy5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gJ25nLXVpX3BvcC11cF9ib2R5X2xpbmtzLXJvd19jb250YWluZXInO1xuICAgICAgICAgICAgICAgIF9saW5rc1Jvdy5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdVTCcpO1xuICAgICAgICAgICAgICAgIGxpc3QuY2xhc3NOYW1lID0gJ25nLXVpX3BvcC11cF9ib2R5X2xpbmtzLXJvd19jb250YWluZXJfY29ubmVjdGlvbi1saXN0JztcbiAgICAgICAgICAgICAgICBmaWxsTGlzdChsaXN0KTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIF9saW5rc1Jvdy5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm5nLXVpX3BvcC11cF9ib2R5X2xpbmtzLXJvd19fZGlzYWJsZWRcIj5Mb2FkaW5nLi48L2Rpdj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmlsbExpc3QgKGxpc3RSb290KSB7XG4gICAgICAgICAgICB2YXIgY29uZmlnID0gc2VsZi50ZW1wQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQ29ubmVjdGlvbnMgPSBmaWx0ZXJDb25uZWN0aW9ucyhjb25maWcpO1xuICAgICAgICAgICAgZmlsdGVyZWRDb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGlzdFJvb3QuYXBwZW5kQ2hpbGQoY2FsY3VsYXRlQ29ubmVjdGlvblJvd3MoY29ubmVjdGlvbikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjYWxjdWxhdGVDb25uZWN0aW9uUm93cyAoY29ubmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTmFtZSA9ICduZy11aV9wb3AtdXBfYm9keV9saW5rcy1yb3dfY29udGFpbmVyX2Nvbm5lY3Rpb24tbGlzdF9yb3cnO1xuICAgICAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgndGl0bGUnLCBjb25uZWN0aW9uLmxhYmVsKTtcblxuICAgICAgICAgICAgLy8gY29ubmVjdGlvbiBjaGVja0JveFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgICAgICB2YXIgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpO1xuICAgICAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrQm94Jyk7XG4gICAgICAgICAgICBjaGVja0JveC5jaGVja2VkID0gY29ubmVjdGlvbi5jaGVja2VkO1xuICAgICAgICAgICAgY2hlY2tCb3guc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDaGVja0JveFZhbHVlICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50ZW1wQ29uZmlndXJhdGlvbi52aXNpYmlsaXR5TWFwW2Nvbm5lY3Rpb24udHlwZUlkXSA9IGNoZWNrQm94LmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50ZW1wQ29uZmlndXJhdGlvbi52aXNpYmlsaXR5TWFwUmV2ZXJzZVtjb25uZWN0aW9uLnR5cGVJZF0gPSBjaGVja0JveC5jaGVja2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUNoZWNrQm94VmFsdWUoKTtcbiAgICAgICAgICAgIHJvdy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSAhY2hlY2tCb3guY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmNoZWNrZWQgPSBjaGVja0JveC5jaGVja2VkO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoZWNrQm94VmFsdWUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEljb25cbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XG4gICAgICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSBjb25uZWN0aW9uLmRpcmVjdGlvbiA/ICduZy11aV9wb3AtdXBfYm9keV9saW5rcy1yb3dfY29udGFpbmVyX2Nvbm5lY3Rpb24tbGlzdF9yb3dfX2luY29taW5nLWltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbmctdWlfcG9wLXVwX2JvZHlfbGlua3Mtcm93X2NvbnRhaW5lcl9jb25uZWN0aW9uLWxpc3Rfcm93X19vdXRnb2luZy1pbWFnZSc7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAgICAgICAvLyBMYWJlbFxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSAnbmctdWlfcG9wLXVwX2JvZHlfbGlua3Mtcm93X2NvbnRhaW5lcl9jb25uZWN0aW9uLWxpc3Rfcm93X19sYWJlbCc7XG4gICAgICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBjb25uZWN0aW9uLmxhYmVsOyBcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICAgIC8vIEJ1YmxlIGNvdW50ZXJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAgICAgdmFyIGJ1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NQQU4nKTtcbiAgICAgICAgICAgIGJ1YmJsZS5jbGFzc05hbWUgPSAnbmctdWlfcG9wLXVwX2JvZHlfbGlua3Mtcm93X2NvbnRhaW5lcl9jb25uZWN0aW9uLWxpc3Rfcm93X19idWJibGUnO1xuICAgICAgICAgICAgYnViYmxlLmlubmVyVGV4dCA9IGNvbm5lY3Rpb24uY291bnQ7IFxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGJ1YmJsZSk7XG5cbiAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJDb25uZWN0aW9ucyAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnRlbXBDb25maWd1cmF0aW9uLmNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbiAoY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIChjb25maWcuZmlsdGVyVHlwZSA9PT0gJ0FMTCcgfHxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZpbHRlclR5cGUgPT09ICdJTkNPTUlORycgJiYgY29ubmVjdGlvbi5kaXJlY3Rpb24gfHxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZpbHRlclR5cGUgPT09ICdPVVRHT0lORycgJiYgIWNvbm5lY3Rpb24uZGlyZWN0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIWNvbmZpZy5maWx0ZXJLZXkgfHwgY29uZmlnLmZpbHRlcktleSAmJiBjb25uZWN0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjb25maWcuZmlsdGVyS2V5LnRvTG93ZXJDYXNlKCkpICE9PSAtMSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVDb25uZWN0aW9uc0xpc3QgKGVkZ2VzKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uQ291bnRlciA9IHt9O1xuICAgICAgICB2YXIgY29ubmVjdGlvbkNvdW50ZXJSZXZlcnNlID0ge307XG4gICAgICAgIHZhciBjb25maWcgPSBzZWxmLnRlbXBDb25maWd1cmF0aW9uO1xuXG4gICAgICAgIGZ1bmN0aW9uIHB1dEludG9NYXAgKGVkZ2VzLCBsYWJlbCkge1xuICAgICAgICAgICAgZWRnZXMuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXAgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBjaGVja01hcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IF90YXJnZXQuZGF0YU1vZGVsLnR5cGVJZCA9PT0gZWRnZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtYXAgPSBjb25uZWN0aW9uQ291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tNYXAgPSBjb25maWcudmlzaWJpbGl0eU1hcDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXAgPSBjb25uZWN0aW9uQ291bnRlclJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTWFwID0gY29uZmlnLnZpc2liaWxpdHlNYXBSZXZlcnNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW1hcFtlZGdlLmlkXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXBbZWRnZS5pZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlSWQ6IGVkZ2UuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwgfHwgZWRnZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBjaGVja01hcFtlZGdlLmlkXSB8fCBjaGVja01hcFtlZGdlLmlkXSA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcFtlZGdlLmlkXS5jb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHB1dEludG9NYXAoZWRnZXMpO1xuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjb25uZWN0aW9uQ291bnRlcikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGNvbm5lY3Rpb25Db3VudGVyW2tleV07IH0pLmNvbmNhdChcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbm5lY3Rpb25Db3VudGVyUmV2ZXJzZSkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGNvbm5lY3Rpb25Db3VudGVyUmV2ZXJzZVtrZXldOyB9KVxuICAgICAgICApLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLmxhYmVsID4gYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhLmxhYmVsIDwgYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGEuZGlyZWN0aW9uICYmICFiLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFhLmRpcmVjdGlvbiAmJiBiLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVmcmVzaCAoKSB7XG4gICAgICAgIHNlbGYudGVtcENvbmZpZ3VyYXRpb24gPSBjbG9uZURlZXAoX3RhcmdldC5jb25maWd1cmF0aW9uU2V0KTtcbiAgICAgICAgc2VsZi50ZW1wQ29uZmlndXJhdGlvbi5tb2RpZmllZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0YXJnZXRQb3NpdGlvbiA9IF9nZXRUYXJnZXRQb3NpdGlvbihfdGFyZ2V0KTtcbiAgICAgICAgX3VwZGF0ZVBvc2l0aW9uKHRhcmdldFBvc2l0aW9uKTtcbiAgICAgICAgX3VwZGF0ZUNvbm5lY3Rpb25MaXN0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFRhcmdldFBvc2l0aW9uICgpIHtcbiAgICAgICAgaWYgKF90YXJnZXQgJiYgX3RhcmdldC5wb3NpdGlvbikgcmV0dXJuIF90YXJnZXQucG9zaXRpb24oKTtcbiAgICAgICAgZWxzZSByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3VwZGF0ZVBvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgICB2YXIgdGFyZ2V0U2l6ZSA9IF90YXJnZXQuZ2V0KCdzaXplJyk7XG4gICAgICAgIHZhciBwb3BVcFNpemUgPSB7IHdpZHRoOiBfcm9vdC5jbGllbnRXaWR0aCwgaGVpZ2h0OiBfcm9vdC5jbGllbnRIZWlnaHQgfTtcbiAgICAgICAgXG4gICAgICAgIGlmIChfdGFyZ2V0LmdldERpcmVjdGlvbigpKSB7XG4gICAgICAgICAgICBzZXRUb1RoZUVhc3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRvVGhlV2VzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VG9UaGVFYXN0ICgpIHtcbiAgICAgICAgICAgIF9yb290LnN0eWxlLmxlZnQgPSAocG9zaXRpb24ueCArIHRhcmdldFNpemUud2lkdGgpICogX3Njcm9sbGVyLl9zeCArICdweCc7XG4gICAgICAgICAgICBfcm9vdC5zdHlsZS50b3AgPSAocG9zaXRpb24ueSArIHRhcmdldFNpemUuaGVpZ2h0IC8gMikgKiBfc2Nyb2xsZXIuX3N4IC0gcG9wVXBTaXplLmhlaWdodCAvIDIgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0VG9UaGVXZXN0ICgpIHtcbiAgICAgICAgICAgIF9yb290LnN0eWxlLmxlZnQgPSAocG9zaXRpb24ueCkgKiBfc2Nyb2xsZXIuX3N4IC0gcG9wVXBTaXplLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIF9yb290LnN0eWxlLnRvcCA9IChwb3NpdGlvbi55ICsgdGFyZ2V0U2l6ZS5oZWlnaHQgLyAyKSAqIF9zY3JvbGxlci5fc3ggLSBwb3BVcFNpemUuaGVpZ2h0IC8gMiArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wVXBNZW51O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNsb25lRGVlcCA9IHJlcXVpcmUoJ2xvZGFzaCcpLmNsb25lRGVlcDtcblxudmFyIERFRkFVTFRfREVDS19MRU5HVEggPSA0O1xuXG4vKipcbiAqIERlc2NyaXB0aW9uXG4gKiBcbiAqIENvbnN0cnVjdG9yIHBhcmFtZXRlcnNcbiAqICBAcGFyYW0ge0dyYXBoTGF5b3V0fSBsYXlvdXRcbiAqICBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVyc1xuXG4gKiBQdWJsaWMgbWV0aG9kczpcbiAqIHB1c2hTdGF0ZSAoKTogdm9pZFxuICogZ2V0SGlzdG9yeToge1xuICogIHN0YXRlczogW10sXG4gKiAgY3VycmVudEluZGV4OiBudW1iZXIsXG4gKiB9XG4gKiB1bmRvU3RhdGUgKCk6IHZvaWRcbiAqIHJlZG9TdGF0ZSAoKTogdm9pZFxuICovXG5mdW5jdGlvbiBTdGF0ZVN0b3JhZ2UgKGxheW91dCwgcGFyYW1ldGVycykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXBhcmFtZXRlcnMpIHBhcmFtZXRlcnMgPSB7fTtcblxuICAgIHZhciBfbGF5b3V0ID0gbGF5b3V0O1xuICAgIHZhciBfc3RhdGVEZWNrID0gW107XG4gICAgdmFyIF9zdGF0ZU1hcCA9IHt9O1xuICAgIHZhciBfZGVja0xlbmd0aCA9IHBhcmFtZXRlcnMuZGVja0xlbmd0aCB8fCBERUZBVUxUX0RFQ0tfTEVOR1RIO1xuICAgIHZhciBfY3VycmVudEluZGV4ID0gLTE7XG5cbiAgICBzZWxmLnB1c2hTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF9zdGF0ZURlY2subGVuZ3RoIC0gMSA+IF9jdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIF9zdGF0ZURlY2suc3BsaWNlKF9jdXJyZW50SW5kZXggKyAxLCBfc3RhdGVEZWNrLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9zYXZlU3RhdGUoKSkge1xuICAgICAgICAgICAgX2NoZWNrKCk7XG4gICAgICAgICAgICBfY3VycmVudEluZGV4ID0gX3N0YXRlRGVjay5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5nZXRIaXN0b3J5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdGVzOiBjbG9uZURlZXAoX3N0YXRlRGVjayksXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IF9jdXJyZW50SW5kZXgsXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHNlbGYudW5kb1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX2N1cnJlbnRJbmRleCA9PT0gX3N0YXRlRGVjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChfc2F2ZVN0YXRlKCkpIHtcbiAgICAgICAgICAgICAgICBfY2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF91cGRhdGVNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2N1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgICAgICAgIF9jdXJyZW50SW5kZXgtLTtcbiAgICAgICAgICAgIHJldHVybiBfcmV0dXJuU3RhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYucmVkb1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdXBkYXRlTWFwKCk7XG4gICAgICAgIGlmIChfY3VycmVudEluZGV4ICsgMSA8IF9zdGF0ZURlY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBfY3VycmVudEluZGV4Kys7XG4gICAgICAgICAgICByZXR1cm4gX3JldHVyblN0YXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gX3JldHVyblN0YXRlICgpIHtcbiAgICAgICAgcmV0dXJuIF9zdGF0ZU1hcFtfc3RhdGVEZWNrW19jdXJyZW50SW5kZXhdXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc2F2ZVN0YXRlICgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX2xheW91dC5nZXRTdGF0ZSgpO1xuICAgICAgICBpZiAoc3RhdGUucm9vdE5vZGUpIHtcbiAgICAgICAgICAgIF9zdGF0ZU1hcFtzdGF0ZS5yb290Tm9kZS50eXBlSWRdID0gc3RhdGU7XG5cbiAgICAgICAgICAgIGlmIChfc3RhdGVEZWNrW19zdGF0ZURlY2subGVuZ3RoIC0gMV0gIT09IHN0YXRlLnJvb3ROb2RlLnR5cGVJZCkgX3N0YXRlRGVjay5wdXNoKHN0YXRlLnJvb3ROb2RlLnR5cGVJZCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF91cGRhdGVNYXAgKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBfbGF5b3V0LmdldFN0YXRlKCk7XG4gICAgICAgIGlmIChzdGF0ZS5yb290Tm9kZSkge1xuICAgICAgICAgICAgX3N0YXRlTWFwW3N0YXRlLnJvb3ROb2RlLnR5cGVJZF0gPSBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jaGVjayAoKSB7XG4gICAgICAgIGlmIChfc3RhdGVEZWNrLmxlbmd0aCA+IF9kZWNrTGVuZ3RoKSBfc3RhdGVEZWNrLnNoaWZ0KCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoX3N0YXRlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChfc3RhdGVEZWNrLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZighZGVsZXRlIF9zdGF0ZU1hcFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zdGF0ZU1hcFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlU3RvcmFnZTtcblxuIiwidmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqIFxuICogSXQncyBiYXNlIGNsYXNzIHdoaWNoIHByb3ZpZGVzIHN1YnNjcmlwdGlvbiBBUEkgZm9yIHN1Y2Nlc3NvcnMuXG4gKiBAY2xhc3NcbiovXG5cbmZ1bmN0aW9uIFN1YnNjcmliYWJsZSAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuX3N1YnNjcmlidGlvbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBhbGxvd3MgdG8gc3Vic2NyaWJlIG9uIGEgc29tZSBzcGVjaWZpYyBldmVudC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBldmVudCBpZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gZXZlbnQgaGFuZGxlclxuICAgICAqIEBtZW1iZXJvZiBTdWJzY3JpYmFibGVcbiAgICAgKiBAbWV0aG9kXG4gICAgKi9cbiAgICBzZWxmLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXNlbGYuX3N1YnNjcmlidGlvbnNbZXZlbnRdKSBzZWxmLl9zdWJzY3JpYnRpb25zW2V2ZW50XSA9IFtdO1xuICAgICAgICBzZWxmLl9zdWJzY3JpYnRpb25zW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIGFsbG93cyB0byB1bnN1YnNjcmliZSBmcm9tIGEgc29tZSBzcGVjaWZpYyBldmVudC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGV2ZW50IGhhbmRsZXJcbiAgICAgKiBAbWVtYmVyb2YgU3Vic2NyaWJhYmxlXG4gICAgICogQG1ldGhvZFxuICAgICovXG4gICAgc2VsZi51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBfLnZhbHVlcyhzZWxmLl9zdWJzY3JpYnRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVycykge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSBzdWJzY3JpYmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHdoaWNoIGZpcmVzIHRoZSBldmVudC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBldmVudCBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IHBhcmFtZXRlcnNcbiAgICAgKiBAbWVtYmVyb2YgU3Vic2NyaWJhYmxlXG4gICAgICogQG1ldGhvZFxuICAgICovXG4gICAgc2VsZi50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50LCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICghKHBhcmFtZXRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHBhcmFtZXRlcnMgPSBbcGFyYW1ldGVyc107XG4gICAgICAgIGlmIChzZWxmLl9zdWJzY3JpYnRpb25zICYmIHNlbGYuX3N1YnNjcmlidGlvbnNbZXZlbnRdKSB7XG4gICAgICAgICAgICBzZWxmLl9zdWJzY3JpYnRpb25zW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgYy5hcHBseSh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gU3Vic2NyaWJhYmxlO1xuIl19
