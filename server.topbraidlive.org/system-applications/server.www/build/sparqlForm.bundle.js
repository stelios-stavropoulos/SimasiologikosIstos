!function(e,a){for(var i in a)e[i]=a[i]}(window,function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="lib/server/build/",__webpack_require__(__webpack_require__.s=442)}({442:function(module,exports,__webpack_require__){"use strict";var sparqlFormApplication=__webpack_require__(7)(__webpack_require__(443));module.exports=sparqlFormApplication},443:function(module,exports,__webpack_require__){"use strict";__webpack_require__(48)},47:function(module,exports){function _typeof(obj){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(obj){return typeof obj}:module.exports=_typeof=function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}module.exports=_typeof},48:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var endpoint={restoreLastSavedQuery:function(){if(localStorage.length>0){for(var lastSavedQuery=null,lastSavedQueryTime=0,pattern=/yasqe_uniqueId[0-9]*_queryVal/g,i=0;i<localStorage.length;i++){var key=localStorage.key(i);if(key.match(pattern)){var queryObject=JSON.parse(localStorage.getItem(key)),queryTime=queryObject.time;queryTime>lastSavedQueryTime&&(lastSavedQueryTime=queryTime,lastSavedQuery=queryObject.val)}}lastSavedQuery&&(document.getElementById("query-area").value=lastSavedQuery)}}},_default=endpoint;exports.default=_default,$((function(){$(".sparql-endpoint-page #clear-query").click((function(event){yasqe.setValue("")})),$(".sparql-endpoint-page #clear-results").click((function(event){$(".yasr_results").empty(),localStorage.removeItem("yasr_results-content_results")})),$(".sparql-endpoint-page #submit-query").click((function(event){yasqe.query()})),$(".sparql-endpoint-page #default_graph_uri").change((function(event){yasqe.options.sparql.defaultGraphs=[],""!=this.value&&yasqe.options.sparql.defaultGraphs.push(this.value)})),$(".sparql-endpoint-page #include-imports").change((function(event){var include_imports=yasqe.options.sparql.args.find((function(item){return"with-imports"==item.name}));if(include_imports){var index=yasqe.options.sparql.args.indexOf(include_imports);yasqe.options.sparql.args.splice(index,1)}this.checked&&yasqe.options.sparql.args.push({name:"with-imports",value:this.checked})})),$(".sparql-endpoint-page #submit-button").click((function(){var last=document.URL.lastIndexOf("/"),queryValue=$(".sparql-endpoint-page textarea#query-area").val(),checkSPARQLURL=document.URL.substring(0,last)+"/checksparql",datatosend={query:queryValue},URL=document.URL.substring(0,last)+"/sparql";function getQueryResults(URL){var with_imports=!!$(".sparql-endpoint-page #include-imports").prop("checked"),default_graph_uri=$(".sparql-endpoint-page #default_graph_uri").val(),format=$(".sparql-endpoint-page #format").val(),datatosend={query:queryValue,"default-graph-uri":default_graph_uri,format:format,"with-imports":with_imports};if("json"==format){$(".sparql-endpoint-page #results-content").html("");var tableHTML="<table border='1'><tr>";return $.ajax({type:"POST",url:URL,data:datatosend,success:function(text){$.each(text.head.vars,(function(i,heading){tableHTML+="<th>"+heading+"</th>"})),tableHTML+="</tr>",$.each(text.results.bindings,(function(i,val){tableHTML+="<tr>",$.each(text.head.vars,(function(i,heading){var v=val[heading];tableHTML+="<td>"+(v?v.value:"")+"</td>"})),tableHTML+="</tr>"})),tableHTML+="</table>",$(".sparql-endpoint-page #results-content").append(tableHTML)}}),!1}datatosend="?query="+encodeURIComponent(queryValue)+"&default-graph-uri="+encodeURIComponent(default_graph_uri)+"&format="+encodeURIComponent(format),with_imports&&(datatosend+="&with-imports=true"),window.open(URL+datatosend,"_blank")}$.ajax({type:"POST",url:checkSPARQLURL,data:datatosend,success:function(data,status,jqXHR){if("UPDATE"==data.queryType){var queryValue=$(".sparql-endpoint-page textarea#query-area").val();datatosend={update:queryValue},$.ajax({type:"POST",url:URL,data:datatosend,success:function(text){alert("Update Applied")},error:function(data,status,jqXHR){var errorMsgTxt;data.getResponseHeader("badRequest")?errorMsgTxt=data.getResponseHeader("badRequest"):data.getResponseHeader("updatesDisabled")&&(errorMsgTxt=data.getResponseHeader("updatesDisabled")),$(".sparql-endpoint-page #results-content").text(errorMsgTxt)}})}else getQueryResults(URL)},error:function(data,status,jqXHR){$(".sparql-endpoint-page #results-content").text(data.responseJSON.parseError)},async:!1})}))}))},7:function(module,exports,__webpack_require__){var _typeof=__webpack_require__(47);function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function(){return cache},cache}module.exports=function(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}}}));
//# sourceMappingURL=sparqlForm.bundle.js.map