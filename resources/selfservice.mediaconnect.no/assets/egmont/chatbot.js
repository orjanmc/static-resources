var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e,r,t){var n=e.location.search.slice(1).split("&").map(function(e){return e.split("=")}).reduce(function(e,t){var r=_slicedToArray(t,2),n=r[0],a=r[1];return _extends({},e,_defineProperty({},n,a))},{});function a(e){e.forEach(function(e){var t=r.createElement("script");t.setAttribute("src",e),t.setAttribute("type","text/javascript"),t.setAttribute("async","false"),r.getElementsByTagName("head")[0].appendChild(t)})}if(void 0!==n.loader){var i=decodeURI(n.loader);a(JSON.parse(i).scripts)}else{var o=new XMLHttpRequest;o.onload=function(){200===this.status&&a(JSON.parse(this.response).scripts)};var s=Math.random().toString().substr(2);o.open("GET","https://cdn.mondry.ai/web-messenger/"+t+"/loader.json?h="+s),o.send()}}(window,document,"ef39be2e-4f34-4086-8cca-0d9d62007cf5");