(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function f(){s=e(l.map((function(e){return e.props}))),T.canUseDOM?t(s):n&&(s=n(s))}var T=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var u=a.prototype;return u.shouldComponentUpdate=function(e){return!i(e,this.props)},u.componentWillMount=function(){l.push(this),f()},u.componentDidUpdate=function(){f()},u.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},u.render=function(){return o.createElement(r,this.props)},a}(a.Component);return u(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(T,"canUseDOM",c),T}}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var s=o[c];if(!u(s))return!1;var l=e[s],f=t[s];if(!1===(a=n?n.call(r,l,f,s):void 0)||void 0===a&&l!==f)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},"I/Ru":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),u=n("hsWz"),c=(n("xtaw"),n("Wbzz")),s=function(){return a.a.createElement(c.b,{query:"3732069421",render:function(e){var t=e.allContentJson.edges.map((function(e,t){return a.a.createElement("li",{key:"nav-"+t,className:"nav-item"},a.a.createElement(c.a,{to:"/"+e.node.slug,className:"nav-link",activeClassName:"active"},e.node.title))}));return a.a.createElement("div",{className:"container"},a.a.createElement("nav",{id:"header",className:"navbar navbar-expand-lg navbar-dark"},a.a.createElement("div",{className:"navbar-controls mr-md-auto"},a.a.createElement("span",{className:"navbar-brand",href:"#home"},a.a.createElement("img",{src:"/images/abc_logo.svg",alt:"Logo"})),a.a.createElement("ul",{className:"navbar-nav"},t)),a.a.createElement("div",{className:"ml-md-auto"},a.a.createElement("button",{className:"btn btn-outline-light"},"Contact Us"))))},data:u})};n("Sm8t"),t.a=function(e){var t=e.children;return a.a.createElement("div",{id:"layout"},a.a.createElement(i.a,null,a.a.createElement("title",null,"Bukwild FED Challenge - Tianhe Yang"),a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap",rel:"stylesheet"})),a.a.createElement(s,null),t)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,u=n("quPj"),c=n("C/va"),s=r.RegExp,l=s,f=s.prototype,T=/a/g,E=/a/g,p=new s(T)!==T;if(n("nh4g")&&(!p||n("eeVq")((function(){return E[n("K0xU")("match")]=!1,s(T)!=T||s(E)==E||"/a/i"!=s(T,"i")})))){s=function(e,t){var n=this instanceof s,r=u(e),o=void 0===t;return!n&&r&&e.constructor===s&&o?e:a(p?new l(r&&!o?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&o?c.call(e):t),n?this:f,s)};for(var d=function(e){e in s||o(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},A=i(l),h=0;A.length>h;)d(A[h++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},Sm8t:function(e,t,n){},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),u=f(n("8+s/")),c=f(n("bmMU")),s=n("v1p5"),l=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,A,h,m=(0,u.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),S=(d=m,h=A=function(e){function t(){return E(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=u,t.titleAttributes=r({},i),t));case l.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=T(a,["children"]),u=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(d,a)},a(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),A.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=d.peek,A.rewind=function(){var e=d.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},Wbzz:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));n("xfY5");var r=n("q1tI"),a=n.n(r),o=n("+ZDr"),i=n.n(o);n.d(t,"a",(function(){return i.a})),n.d(t,"c",(function(){return o.navigate}));n("lw3w"),n("emEt").default.enqueue;var u=a.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,i=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,r=e.render,o=e.children;return a.a.createElement(u.Consumer,null,(function(e){return a.a.createElement(c,{data:t,query:n,render:r||o,staticQueryData:e})}))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,s,l=r(t),f=r(n);if(l&&f){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(l!=f)return!1;var T=t instanceof Date,E=n instanceof Date;if(T!=E)return!1;if(T&&E)return t.getTime()==n.getTime();var p=t instanceof RegExp,d=n instanceof RegExp;if(p!=d)return!1;if(p&&d)return t.toString()==n.toString();var A=a(t);if((c=A.length)!==a(n).length)return!1;for(u=c;0!=u--;)if(!o.call(n,A[u]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(s=A[u])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},hsWz:function(e){e.exports=JSON.parse('{"data":{"allContentJson":{"edges":[{"node":{"title":"Industries","slug":"industries"}},{"node":{"title":"Services","slug":"services"}},{"node":{"title":"About Us","slug":"about-us"}}]}}}')},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),o=n("eeVq"),i=n("/e88"),u="["+i+"]",c=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),l=function(e,t,n){var a={},u=o((function(){return!!i[e]()||"​"!="​"[e]()})),c=a[e]=u?t(f):i[e];n&&(a[n]=c),r(r.P+r.F*u,"String",a)},f=l.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(s,"")),e};e.exports=l},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),i=c(n("MgzW")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,u.TAG_NAMES.TITLE),n=A(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=A(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return A(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},d=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var s=o[c],l=(0,i.default)({},a[s],r[s]);a[s]=l}return e}),[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),m=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,T=e.title,E=e.titleAttributes;P(u.TAG_NAMES.BODY,r),P(u.TAG_NAMES.HTML,a),R(T,E);var p={baseTag:O(u.TAG_NAMES.BASE,n),linkTags:O(u.TAG_NAMES.LINK,o),metaTags:O(u.TAG_NAMES.META,i),noscriptTags:O(u.TAG_NAMES.NOSCRIPT,c),scriptTags:O(u.TAG_NAMES.SCRIPT,l),styleTags:O(u.TAG_NAMES.STYLE,f)},d={},A={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(A[e]=p[e].oldTags)})),t&&t(),s(e,d,A)},g=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),P(u.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var f=o.indexOf(s);-1!==f&&o.splice(f,1)}for(var T=o.length-1;T>=0;T--)n.removeAttribute(o[T]);a.length===o.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},N=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,a=I(n,r),[o.default.createElement(u.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=N(n),o=g(t);return a?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+">"+l(o,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+l(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&y(b),e.defer?b=S((function(){_(e,(function(){b=null}))})):(_(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,T=void 0===f?"":f,E=e.titleAttributes;return{base:M(u.TAG_NAMES.BASE,t,r),bodyAttributes:M(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(u.ATTRIBUTE_NAMES.HTML,a,r),link:M(u.TAG_NAMES.LINK,o,r),meta:M(u.TAG_NAMES.META,i,r),noscript:M(u.TAG_NAMES.NOSCRIPT,c,r),script:M(u.TAG_NAMES.SCRIPT,s,r),style:M(u.TAG_NAMES.STYLE,l,r),title:M(u.TAG_NAMES.TITLE,{title:T,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:p([u.TAG_PROPERTIES.HREF],e),bodyAttributes:E(u.ATTRIBUTE_NAMES.BODY,e),defer:A(e,u.HELMET_PROPS.DEFER),encode:A(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(u.ATTRIBUTE_NAMES.HTML,e),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:E(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=S,t.warn=v}).call(this,n("yLpj"))},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),o=n("LZWt"),i=n("Xbzi"),u=n("apmT"),c=n("eeVq"),s=n("kJMx").f,l=n("EemH").f,f=n("hswa").f,T=n("qncB").trim,E=r.Number,p=E,d=E.prototype,A="Number"==o(n("Kuth")(d)),h="trim"in String.prototype,m=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=h?t.trim():T(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,c=t.slice(2),s=0,l=c.length;s<l;s++)if((i=c.charCodeAt(s))<48||i>a)return NaN;return parseInt(c,r)}}return+t};if(!E(" 0o1")||!E("0b1")||E("+0x1")){E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(A?c((function(){d.valueOf.call(n)})):"Number"!=o(n))?i(new p(m(t)),n,E):m(t)};for(var S,y=n("nh4g")?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),v=0;y.length>v;v++)a(p,S=y[v])&&!a(E,S)&&f(E,S,l(p,S));E.prototype=d,d.constructor=E,n("KroJ")(r,"Number",E)}},xtaw:function(e,t,n){},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=95d0e4c6d5428e4e5c144b1145f6c0d2357c0db3-0157f6b3398712235e1f.js.map