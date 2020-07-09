(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(134)),i={id:"api",title:"API"},o={id:"api",isDocsHomePage:!1,title:"API",description:"RN \u539f\u751f\u7ec4\u4ef6\u4e0e\u63a5\u53e3",source:"@site/docs/api.md",permalink:"/docs/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api.md",sidebar:"someSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/"},next:{title:"\u6027\u80fd",permalink:"/docs/performance"}},l=[{value:"\u8df3\u8f6c",id:"\u8df3\u8f6c",children:[{value:"KRN \u8df3 Native",id:"krn-\u8df3-native",children:[]},{value:"H5 \u8df3 KRN",id:"h5-\u8df3-krn",children:[]}]},{value:"\u6570\u636e\u6253\u901a",id:"\u6570\u636e\u6253\u901a",children:[{value:"H5 \u4e0e Native\uff1aKVStorage",id:"h5-\u4e0e-native\uff1akvstorage",children:[]},{value:"KRN \u4e0e Native\uff1aNativeModules.KVStorage",id:"krn-\u4e0e-native\uff1anativemoduleskvstorage",children:[]}]},{value:"\u4e1a\u52a1\u63a5\u53e3",id:"\u4e1a\u52a1\u63a5\u53e3",children:[{value:"getInfoFromKwaiYing",id:"getinfofromkwaiying",children:[]},{value:"getCommonCookies",id:"getcommoncookies",children:[]}]},{value:"\u4e0a\u62a5",id:"\u4e0a\u62a5",children:[{value:"KRN \u7b80\u7248 native \u4e0a\u62a5",id:"krn-\u7b80\u7248-native-\u4e0a\u62a5",children:[]},{value:"KRN \u7248 weblogger",id:"krn-\u7248-weblogger",children:[]}]},{value:"\u57fa\u7840\u80fd\u529b",id:"\u57fa\u7840\u80fd\u529b",children:[{value:"setNavSwipe\uff08iOS\uff09",id:"setnavswipe\uff08ios\uff09",children:[]}]},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[]}],b={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev"}),"RN \u539f\u751f\u7ec4\u4ef6\u4e0e\u63a5\u53e3")),Object(c.b)("h2",{id:"\u8df3\u8f6c"},"\u8df3\u8f6c"),Object(c.b)("h3",{id:"krn-\u8df3-native"},"KRN \u8df3 Native"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.kwaiying.open(url, callback)\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8df3\u76f8\u518c\u9875")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"url = kwaiying://pick\ncallback = function(status: Int, mediaInfo: MediaInfo)\n\u6210\u529f status \u4e3a 1\uff0c\u5931\u8d25 status \u4e3a 0\nmediaInfo \u901a\u8fc7 import pb \u6587\u4ef6\u6784\u9020")),Object(c.b)("h3",{id:"h5-\u8df3-krn"},"H5 \u8df3 KRN"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"kwaiying.open(params)\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"params = {url : kwaiying://krn?packageName=${\u542f\u52a8\u5e94\u7528\u540d}&jsbundle=${\u5e94\u7528\u5305\u7684\u5730\u5740\uff0c\u5b8c\u6574 url \u5219\u62c9\u8d77 RN \u5e94\u7528}&data=${json \u5316\u7684\u542f\u52a8\u53c2\u6570}")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u6240\u6709\u53c2\u6570\u5fc5\u987b encode \u4e4b\u540e\u4f20\u5165")),Object(c.b)("h2",{id:"\u6570\u636e\u6253\u901a"},"\u6570\u636e\u6253\u901a"),Object(c.b)("h3",{id:"h5-\u4e0e-native\uff1akvstorage"},"H5 \u4e0e Native\uff1aKVStorage"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"+ set(table:String, key: String, value: String, callback: String): void\n+ getString(table:String, key: String, callback: String): void\n+ capacity(table:String, callback: String): void\n+ remove(table:String, key:String, callback: String): void\n+ clear(table:String, callback: String): void\n+ version(): Double //\u4e3a\u4e86\u907f\u514d\u5f02\u6b65\u5224\u65ad\uff0c\u6b64\u63a5\u53e3\u540c\u6b65\u963b\u585e\u8fd4\u56de\u3002\n")),Object(c.b)("h3",{id:"krn-\u4e0e-native\uff1anativemoduleskvstorage"},"KRN \u4e0e Native\uff1aNativeModules.KVStorage"),Object(c.b)("p",null,"\u4e0e H5 \u4e0d\u540c\u5728\u4e8e callback \u53c2\u6570\u6539\u4e3a\u51fd\u6570\u95ed\u5305\uff0c\u5176\u4f59\u51fd\u6570\u540d\u4e0e\u53c2\u6570\u4e00\u6837\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"errCode \u7ea6\u5b9a\uff1aNO_KEY\u3002\u4e0d\u5b58\u5728 key")),Object(c.b)("h2",{id:"\u4e1a\u52a1\u63a5\u53e3"},"\u4e1a\u52a1\u63a5\u53e3"),Object(c.b)("h3",{id:"getinfofromkwaiying"},"getInfoFromKwaiYing"),Object(c.b)("p",null,"H5"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"kwaiying.getInfoFromKwaiYing()\n")),Object(c.b)("p",null,"KRN"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.Kwaiying.getInfoFromKwaiYing((res) => { \n    console.log(JSON.parse(res)); \n})\n")),Object(c.b)("h3",{id:"getcommoncookies"},"getCommonCookies"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.Kwaiying.getCommonCookies((res) => { \n    console.log(JSON.parse(res)); \n})\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u7528\u6237\u6ca1\u767b\u5f55\uff0c\u5219 userId/passToken/ky.api_st \u4e0d\u5b58\u5728")),Object(c.b)("h2",{id:"\u4e0a\u62a5"},"\u4e0a\u62a5"),Object(c.b)("h3",{id:"krn-\u7b80\u7248-native-\u4e0a\u62a5"},"KRN \u7b80\u7248 native \u4e0a\u62a5"),Object(c.b)("p",null,"addTaskEvent \u63a5\u53e3\u56fa\u5b9a type \u4e3a 1\uff0coperationType \u4e3a 1"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.Kwaiying.report(key: string, params: string, callback: function);\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"key: \u57cb\u70b9\u540d\u79f0\u3002"),Object(c.b)("li",{parentName:"ul"},"params\uff1ajson \u5b57\u7b26\u4e32\uff0ckey/value \u5728 native \u4f1a\u8f6c\u4e3a map \u4e0a\u62a5\u3002"),Object(c.b)("li",{parentName:"ul"},"callback\uff1a\u56de\u8c03\u51fd\u6570\u3002\u6682\u65e0\u8fd4\u56de\u503c")),Object(c.b)("h3",{id:"krn-\u7248-weblogger"},"KRN \u7248 weblogger"),Object(c.b)("p",null,"\u5b89\u88c5\u65b9\u6cd5"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install @krn/weblogger\nimport {RNWeblog} from '@krn/weblogger/dist/log.bridge.common.js';\nimport './KRNBootstrap';    // index.js \u5165\u53e3 \n")),Object(c.b)("p",null,"\u63a5\u53e3\u4e0e\u5b98\u7f51\u4e00\u81f4\u3002\u4e0d\u652f\u6301\u63d2\u4ef6"),Object(c.b)("p",null,"proto \u4e0a\u62a5\u65b9\u5f0f\u3002RecoReportEvent.proto \u9700\u8981\u4e1a\u52a1\u5f15\u5165\u3002\u53ef\u4ee5\u67e5\u9605\u53c2\u8003\u8d44\u6599\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"weblog.sendImmediately('PROTO', {\n    type: 'reco_report_event',\n    payload: RecoReportEvent.SerializeAsString(),\n    eventId: 'aaaabbb',\n});\n")),Object(c.b)("h2",{id:"\u57fa\u7840\u80fd\u529b"},"\u57fa\u7840\u80fd\u529b"),Object(c.b)("h3",{id:"setnavswipe\uff08ios\uff09"},"setNavSwipe\uff08iOS\uff09"),Object(c.b)("p",null,"\u662f\u5426\u7981\u6b62 Native \u529f\u80fd\u7684\u624b\u52bf\u8fd4\u56de\uff0c\u4ec5\u5bf9 iOS \u6709\u6548\uff0c\u5b89\u5353\u7a7a\u5b9e\u73b0"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.Kwaiying.setNavSwipe(bool enable);\n")),Object(c.b)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://app-analysis.corp.kuaishou.com/#/event_track?id=2085&appName=KUAISHOU_VIDEO_EDITOR&sampling=APP"}),"\u4e0a\u62a5\u6570\u636e\u67e5\u8be2\u5730\u5740")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.corp.kuaishou.com/d/home/fcAAnp3wLKhWtDEqKk7Hpwpqq"}),"\u5feb\u5f71WebView\u7684JS\u63a5\u53e3")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/async-storage"}),"RN AsyncStorage")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://component.corp.kuaishou.com/docs/weblogger/js"}),"weblogger\u5b98\u7f51")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/protobufjs"}),"\u6839\u636e proto \u751f\u6210\u4ee3\u7801")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/typescript"}),"\u4f7f\u7528Typescript"))))}p.isMDXComponent=!0},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||c;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);