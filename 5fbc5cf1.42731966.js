(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),b=(a(0),a(171)),l={id:"api",title:"API"},c={id:"api",isDocsHomePage:!1,title:"API",description:"RN \u539f\u751f\u7ec4\u4ef6\u4e0e\u63a5\u53e3",source:"@site/docs/api.md",permalink:"/docs/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api.md",sidebar:"someSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/"},next:{title:"\u6027\u80fd",permalink:"/docs/performance"}},i=[{value:"\u8df3\u8f6c",id:"\u8df3\u8f6c",children:[{value:"KRN \u8df3 Native",id:"krn-\u8df3-native",children:[]},{value:"H5 \u8df3 KRN",id:"h5-\u8df3-krn",children:[]}]},{value:"\u6570\u636e\u6253\u901a",id:"\u6570\u636e\u6253\u901a",children:[{value:"H5 \u4e0e Native\uff1aKVStorage",id:"h5-\u4e0e-native\uff1akvstorage",children:[]},{value:"KRN \u4e0e Native\uff1aNativeModules.KVStorage",id:"krn-\u4e0e-native\uff1anativemoduleskvstorage",children:[]}]},{value:"\u4e1a\u52a1\u63a5\u53e3",id:"\u4e1a\u52a1\u63a5\u53e3",children:[{value:"getInfoFromKwaiYing",id:"getinfofromkwaiying",children:[]},{value:"getCommonCookies",id:"getcommoncookies",children:[]}]},{value:"\u4e0a\u62a5",id:"\u4e0a\u62a5",children:[{value:"KRN \u7b80\u7248 native \u4e0a\u62a5",id:"krn-\u7b80\u7248-native-\u4e0a\u62a5",children:[]},{value:"KRN \u7248 weblogger",id:"krn-\u7248-weblogger",children:[]}]},{value:"\u57fa\u7840\u80fd\u529b",id:"\u57fa\u7840\u80fd\u529b",children:[{value:"setNavSwipe\uff08iOS\uff09",id:"setnavswipe\uff08ios\uff09",children:[]}]},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev"}),"RN \u539f\u751f\u7ec4\u4ef6\u4e0e\u63a5\u53e3")),Object(b.b)("h2",{id:"\u8df3\u8f6c"},"\u8df3\u8f6c"),Object(b.b)("h3",{id:"krn-\u8df3-native"},"KRN \u8df3 Native"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.kwaiying.open(url, callback)\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8df3\u76f8\u518c\u9875")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"url = kwaiying://pick\ncallback = function(status: Int, mediaInfo: MediaInfo)\n\u6210\u529f status \u4e3a 1\uff0c\u5931\u8d25 status \u4e3a 0\nmediaInfo \u901a\u8fc7 import pb \u6587\u4ef6\u6784\u9020")),Object(b.b)("h3",{id:"h5-\u8df3-krn"},"H5 \u8df3 KRN"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"kwaiying.open(params)\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"params = {url : kwaiying://krn?packageName=${\u542f\u52a8\u5e94\u7528\u540d}&jsbundle=${\u5e94\u7528\u5305\u7684\u5730\u5740\uff0c\u5b8c\u6574 url \u5219\u62c9\u8d77 RN \u5e94\u7528}&data=${json \u5316\u7684\u542f\u52a8\u53c2\u6570}")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u6240\u6709\u53c2\u6570\u5fc5\u987b encode \u4e4b\u540e\u4f20\u5165")),Object(b.b)("h2",{id:"\u6570\u636e\u6253\u901a"},"\u6570\u636e\u6253\u901a"),Object(b.b)("h3",{id:"h5-\u4e0e-native\uff1akvstorage"},"H5 \u4e0e Native\uff1aKVStorage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"+ set(table:String, key: String, value: String, callback: String): void\n+ getString(table:String, key: String, callback: String): void\n+ capacity(table:String, callback: String): void\n+ remove(table:String, key:String, callback: String): void\n+ clear(table:String, callback: String): void\n+ version(): Double //\u4e3a\u4e86\u907f\u514d\u5f02\u6b65\u5224\u65ad\uff0c\u6b64\u63a5\u53e3\u540c\u6b65\u963b\u585e\u8fd4\u56de\u3002\n")),Object(b.b)("h3",{id:"krn-\u4e0e-native\uff1anativemoduleskvstorage"},"KRN \u4e0e Native\uff1aNativeModules.KVStorage"),Object(b.b)("p",null,"\u4e0e H5 \u4e0d\u540c\u5728\u4e8e callback \u53c2\u6570\u6539\u4e3a\u51fd\u6570\u95ed\u5305\uff0c\u5176\u4f59\u51fd\u6570\u540d\u4e0e\u53c2\u6570\u4e00\u6837\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"errCode \u7ea6\u5b9a\uff1aNO_KEY\u3002\u4e0d\u5b58\u5728 key")),Object(b.b)("h2",{id:"\u4e1a\u52a1\u63a5\u53e3"},"\u4e1a\u52a1\u63a5\u53e3"),Object(b.b)("h3",{id:"getinfofromkwaiying"},"getInfoFromKwaiYing"),Object(b.b)("p",null,"H5"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"kwaiying.getInfoFromKwaiYing()\n")),Object(b.b)("p",null,"KRN"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.Kwaiying.getInfoFromKwaiYing((res) => { \n    console.log(JSON.parse(res)); \n})\n")),Object(b.b)("p",null,"\u8fd4\u56de\u503c\u53c2\u6570\u8bf4\u660e"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"did"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bbe\u5907 ID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kiaVersion"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"KRN \u6846\u67b6\u7684\u7248\u672c\u53f7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"appVersion"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"app \u7684\u7248\u672c\u53f7\uff08",Object(b.b)("em",{parentName:"td"},"Android \u548c iOS \u4e0d\u4e00\u5b9a\u4e00\u6837"),"\uff09")))),Object(b.b)("h3",{id:"getcommoncookies"},"getCommonCookies"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.Kwaiying.getCommonCookies((res) => { \n    console.log(JSON.parse(res)); \n})\n")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u7528\u6237\u6ca1\u767b\u5f55\uff0c\u5219 userId/passToken/ky.api_st \u4e0d\u5b58\u5728")),Object(b.b)("p",null,"\u8fd4\u56de\u503c\u53c2\u6570\u8bf4\u660e\uff0c\u4ee5\u4e0b\u662f iOS \u548c android \u5e73\u53f0\u7684\u4ea4\u96c6\u53c2\u6570"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"did"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bbe\u5907 ID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sid"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"ky.api"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7528\u6237 ID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ky.api_st"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u672a\u77e5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sys"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7cfb\u7edf\u7248\u672c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"passToken"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8bbe\u5907 ID")))),Object(b.b)("h2",{id:"\u4e0a\u62a5"},"\u4e0a\u62a5"),Object(b.b)("h3",{id:"krn-\u7b80\u7248-native-\u4e0a\u62a5"},"KRN \u7b80\u7248 native \u4e0a\u62a5"),Object(b.b)("p",null,"addTaskEvent \u63a5\u53e3\u56fa\u5b9a type \u4e3a 1\uff0coperationType \u4e3a 1"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.Kwaiying.report(key: string, params: string, callback: function);\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"key: \u57cb\u70b9\u540d\u79f0\u3002"),Object(b.b)("li",{parentName:"ul"},"params\uff1ajson \u5b57\u7b26\u4e32\uff0ckey/value \u5728 native \u4f1a\u8f6c\u4e3a map \u4e0a\u62a5\u3002"),Object(b.b)("li",{parentName:"ul"},"callback\uff1a\u56de\u8c03\u51fd\u6570\u3002\u6682\u65e0\u8fd4\u56de\u503c")),Object(b.b)("h3",{id:"krn-\u7248-weblogger"},"KRN \u7248 weblogger"),Object(b.b)("p",null,"\u5b89\u88c5\u65b9\u6cd5"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install @krn/weblogger\nimport {RNWeblog} from '@krn/weblogger/dist/log.bridge.common.js';\nimport './KRNBootstrap';    // index.js \u5165\u53e3 \n")),Object(b.b)("p",null,"\u63a5\u53e3\u4e0e\u5b98\u7f51\u4e00\u81f4\u3002\u4e0d\u652f\u6301\u63d2\u4ef6"),Object(b.b)("p",null,"proto \u4e0a\u62a5\u65b9\u5f0f\u3002RecoReportEvent.proto \u9700\u8981\u4e1a\u52a1\u5f15\u5165\u3002\u53ef\u4ee5\u67e5\u9605\u53c2\u8003\u8d44\u6599\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"weblog.sendImmediately('PROTO', {\n    type: 'reco_report_event',\n    payload: RecoReportEvent.SerializeAsString(),\n    eventId: 'aaaabbb',\n});\n")),Object(b.b)("h2",{id:"\u57fa\u7840\u80fd\u529b"},"\u57fa\u7840\u80fd\u529b"),Object(b.b)("h3",{id:"setnavswipe\uff08ios\uff09"},"setNavSwipe\uff08iOS\uff09"),Object(b.b)("p",null,"\u662f\u5426\u7981\u6b62 Native \u529f\u80fd\u7684\u624b\u52bf\u8fd4\u56de\uff0c\u4ec5\u5bf9 iOS \u6709\u6548\uff0c\u5b89\u5353\u7a7a\u5b9e\u73b0"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"NativeModules.Kwaiying.setNavSwipe(bool enable);\n")),Object(b.b)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://app-analysis.corp.kuaishou.com/#/event_track?id=2085&appName=KUAISHOU_VIDEO_EDITOR&sampling=APP"}),"\u4e0a\u62a5\u6570\u636e\u67e5\u8be2\u5730\u5740")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.corp.kuaishou.com/d/home/fcAAnp3wLKhWtDEqKk7Hpwpqq"}),"\u5feb\u5f71WebView\u7684JS\u63a5\u53e3")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/async-storage"}),"RN AsyncStorage")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://component.corp.kuaishou.com/docs/weblogger/js"}),"weblogger\u5b98\u7f51")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/protobufjs"}),"\u6839\u636e proto \u751f\u6210\u4ee3\u7801")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/typescript"}),"\u4f7f\u7528Typescript"))))}p.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),u=n,s=O["".concat(l,".").concat(u)]||O[u]||j[u]||b;return a?r.a.createElement(s,c(c({ref:t},o),{},{components:a})):r.a.createElement(s,c({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);