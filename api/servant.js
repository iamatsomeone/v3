window.api||(window.api={});var aaq="LOCAL";try{aaq=chrome.runtime.getManifest().version}catch(o){}function hexToBase64(o){return btoa(o.match(/\w{2}/g).map((function(o){return String.fromCharCode(parseInt(o,16))})).join(""))}window.api.version="CV_"+aaq,api.protobuf={compile:function(o,e){var t="";return Object.keys(o).forEach((function(i){e||(e=api.protobuf.compileFields(o)),t+=api.protobuf.compileKvPair(i,o[i],e)})),t.toLowerCase().replace(" ","")},compileFields:function(o){var e={};return Object.keys(o).forEach((function(t){var i,r=null;switch(typeof o[t]){case"object":i=2,r=api.protobuf.compileFields(o[t]);break;case"string":i=2;break;default:i=0}e[t]=[t,i,r]})),e},compileKvPair:function(o,e,t){if(!t[o])return"";var i=t[o],r=i[1],n=api.protobuf.compileKey(i);switch(r){case 0:return n+api.protobuf.compileVarint(e);case 1:case 3:case 4:case 5:break;case 2:return"object"==typeof e?n+api.protobuf.compileLd(api.protobuf.compile(e,i[2])):n+api.protobuf.compileString(e)}},compileKey:function(o){var e=o[0],t=o[1];return api.protobuf.compileVarint(api.protobuf.getKey(e,t))},compileVarint:function(o){return uleb128(+o)},compileString:function(o){return api.protobuf.compileLd(api.protobuf.toHex(o))},compileLd:function(o){var e=api.protobuf.getSize(o);return api.protobuf.compileVarint(e)+o},getSize:function(o){var e=o.length;return(e+e%2)/2},getKey:function(o,e){return o<<3|e},toHex:function(o){for(var e="",t=0;t<o.length;t++)e+=o.charCodeAt(t).toString(16);return e}},api.watch={},api.watch.comment={},api.watch.comment.contigen=function(o){return encodeURIComponent(hexToBase64(api.protobuf.compile({2:{2:o},3:6,6:{4:{4:o,6:0,15:2},8:"comments-section"}})))};