(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(6),o=(t(0),t(88)),i={id:"rnfs",title:"RNFS \u5927\u6587\u4ef6\u4e0a\u4f20\u95ee\u9898",author:"ChenYing",author_title:"\ud83d\ude37",author_url:"https://github.com/norcy",author_image_url:"https://avatars3.githubusercontent.com/u/8423011?s=460&u=2cc946eff5c03df2f3afd1665cd2a63ffe26eda1&v=4"},s={permalink:"/blog/2020/09/10/rnfs",editUrl:"https://github.com/facebook/docusaurus/edit/source/website/blog/blog/2020-09-10-rnfs.md",source:"@site/blog/2020-09-10-rnfs.md",description:"\u9879\u76ee\u4e2d\u4f7f\u7528 react-native-fs \u4e0a\u4f20\u89c6\u9891\u65f6\u7ecf\u5e38\u51fa\u73b0\u5185\u5b58\u66b4\u6da8\uff0c\u5185\u5b58\u4e0a\u6da8\u7684\u5e45\u5ea6\u662f\u89c6\u9891\u5927\u5c0f\u7684 2 \u500d\uff0c\u800c\u4e14\u8fd9\u90e8\u5206\u5185\u5b58\u968f\u540e\u6ca1\u6709\u91ca\u653e\uff1b\u5982\u6b64\u53cd\u590d\u4e0a\u4f20\u89c6\u9891\u6700\u7ec8\u5bfc\u81f4 App \u5185\u5b58\u4e0d\u8db3\u800c\u5d29\u6e83",date:"2020-09-10T00:00:00.000Z",tags:[],title:"RNFS \u5927\u6587\u4ef6\u4e0a\u4f20\u95ee\u9898",readingTime:1.325,truncated:!0,nextItem:{title:"KRN \u6846\u67b6\u67b6\u6784\u56fe",permalink:"/blog/2020/09/05/architecture"}},l=[{value:"\u7b2c\u4e00\u4e2a\u95ee\u9898",id:"\u7b2c\u4e00\u4e2a\u95ee\u9898",children:[]},{value:"\u7b2c\u4e8c\u4e2a\u95ee\u9898",id:"\u7b2c\u4e8c\u4e2a\u95ee\u9898",children:[]}],c={rightToc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u9879\u76ee\u4e2d\u4f7f\u7528 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/itinance/react-native-fs"}),"react-native-fs")," \u4e0a\u4f20\u89c6\u9891\u65f6\u7ecf\u5e38\u51fa\u73b0\u5185\u5b58\u66b4\u6da8\uff0c\u5185\u5b58\u4e0a\u6da8\u7684\u5e45\u5ea6\u662f\u89c6\u9891\u5927\u5c0f\u7684 2 \u500d\uff0c\u800c\u4e14\u8fd9\u90e8\u5206\u5185\u5b58\u968f\u540e\u6ca1\u6709\u91ca\u653e\uff1b\u5982\u6b64\u53cd\u590d\u4e0a\u4f20\u89c6\u9891\u6700\u7ec8\u5bfc\u81f4 App \u5185\u5b58\u4e0d\u8db3\u800c\u5d29\u6e83"),Object(o.b)("p",null,"\u67e5\u770b\u4e86\u5176\u6e90\u7801\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u6709\u4e24\u4e2a\u95ee\u9898\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f"),Object(o.b)("h2",{id:"\u7b2c\u4e00\u4e2a\u95ee\u9898"},"\u7b2c\u4e00\u4e2a\u95ee\u9898"),Object(o.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u662f\u53d1\u9001\u4e0a\u4f20\u8bf7\u6c42"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"NSURLSessionConfiguration *sessionConfiguration = [NSURLSessionConfiguration defaultSessionConfiguration];\nNSURLSession *session = [NSURLSession sessionWithConfiguration:sessionConfiguration delegate:(id)self delegateQueue:[NSOperationQueue mainQueue]];\n_task = [session dataTaskWithRequest:req completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n  NSString * str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n  return self->_params.completeCallback(str, response);\n}];\n[_task resume];\n")),Object(o.b)("p",null,"\u7b2c\u4e00\u4e2a\u95ee\u9898\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"sessionWithConfiguration:delegate:delegateQueue:")," \u4e2d\u7684 delegate \u53c2\u6570\u4f1a\u88ab NSURLSession \u5f3a\u5f15\u7528\uff0c\u4f1a\u5bfc\u81f4 delegate \u4e5f\u5c31\u662f self \u6c38\u4e45\u4e0d\u4f1a\u91ca\u653e\uff0c\u8fd9\u70b9\u8be5\u63a5\u53e3\u5df2\u7ecf\u6709\u5b98\u65b9\u6587\u6863\u7684\u8bf4\u660e"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The session object keeps a strong reference to the delegate until your app exits or explicitly invalidates the session. If you do not invalidate the session by calling the invalidateAndCancel or finishTasksAndInvalidate method, your app leaks memory until it exits")),Object(o.b)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u662f\u5728\u4efb\u52a1\u7ed3\u675f\u65f6\u8c03\u7528 invalidateAndCancel \u6216 finishTasksAndInvalidate\uff0c\u5982\u4e0b"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"_task = [session dataTaskWithRequest:req completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n  [session finishTasksAndInvalidate];   // \u91ca\u653e delegate\n  NSString * str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n  return self->_params.completeCallback(str, response);\n}];\n")),Object(o.b)("h2",{id:"\u7b2c\u4e8c\u4e2a\u95ee\u9898"},"\u7b2c\u4e8c\u4e2a\u95ee\u9898"),Object(o.b)("p",null,"\u53d1\u73b0\u4e0a\u4f20\u7684\u5173\u952e\u4ee3\u7801\u5982\u4e0b\uff0c\u4e0a\u4f20\u5927\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u7684\u662f\u5148\u8bfb\u53d6\u6587\u4ef6\u5230\u5185\u5b58\uff0c\u7136\u540e\u8bbe\u7f6e\u5230 HTTPBody\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"NSData *fileData = [NSData dataWithContentsOfFile:filepath];    // \u8fd9\u91cc\u5185\u5b58\u4f1a\u4e0a\u6da8\u4e00\u4e2a\u89c6\u9891\u7684\u5927\u5c0f\n[reqBody appendData:fileData];\n[req setHTTPBody:reqBody];      // \u8fd9\u91cc\u5185\u5b58\u4e5f\u4f1a\u4e0a\u6da8\u4e00\u4e2a\u89c6\u9891\u7684\u5927\u5c0f\n\nNSURLSessionConfiguration *sessionConfiguration = [NSURLSessionConfiguration defaultSessionConfiguration];\n//sessionConfiguration.requestCachePolicy = NSURLRequestReloadIgnoringLocalAndRemoteCacheData; \u5c1d\u8bd5\u8fc7\u6ca1\u7528\nNSURLSession *session = [NSURLSession sessionWithConfiguration:sessionConfiguration delegate:self delegateQueue:[NSOperationQueue mainQueue]];\n_task = [session dataTaskWithRequest:req completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {\n  [session finishTasksAndInvalidate];   // \u91ca\u653e delegate\n  NSString * str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n  return self->_params.completeCallback(str, response); // \u7f51\u7edc\u8bf7\u6c42\u5b8c\u6210\uff0c\u5185\u5b58\u6ca1\u6709\u964d\u4e0b\u6765\uff0c\u603b\u5171\u4e0a\u6da8\u4e86 2 \u4e2a\u89c6\u9891\u7684\u5927\u5c0f\n}];\n[_task resume];\n")),Object(o.b)("p",null,"\u539f\u56e0\u662f NSURLSession \u4f1a retain \u4e86 req \u91cc\u7684 data\uff0c\u6240\u4ee5\u51fa\u73b0\u5185\u5b58\u4e0d\u91ca\u653e\u95ee\u9898"),Object(o.b)("p",null,"\u5bf9\u4e8e\u5927\u6587\u4ef6\u7684\u4e0a\u4f20\u5e94\u8be5\u4f7f\u7528\u6d41\u5f0f\u4e0a\u4f20\u7684\u65b9\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"NSURLSessionConfiguration *sessionConfiguration = [NSURLSessionConfiguration defaultSessionConfiguration];\nNSURLSession *session = [NSURLSession sessionWithConfiguration:sessionConfiguration delegate:(id)self delegateQueue:[NSOperationQueue mainQueue]];\n_task = [session uploadTaskWithRequest:req\n                              fromFile:fileUrl\n                     completionHandler:^(NSData *_Nullable data, NSURLResponse *_Nullable response,\n                                         NSError *_Nullable error) {\n                        [session finishTasksAndInvalidate];\n                        NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];\n                        return self->_params.completeCallback(str, response);\n                     }];\n\n")),Object(o.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u53d6\u6d88\u4e86\u76f4\u63a5\u8bfb\u53d6\u6587\u4ef6\u7136\u540e\u8bbe\u7f6e HTTPBody \u7684\u505a\u6cd5\uff0c\u5e76\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"uploadTaskWithRequest:fromFile:completionHandler:")," \u65b9\u6cd5\u6765\u4e0a\u4f20\u6587\u4ef6\uff0c\u6d41\u5f0f\u53d1\u9001\uff0c\u8bfb\u53d6\u4e00\u70b9\u53d1\u9001\u4e00\u70b9\uff0c\u8fd9\u79cd\u505a\u6cd5\u5b9e\u8df5\u4e0b\u6765\u5185\u5b58\u5341\u5206\u7a33\u5b9a"))}u.isMDXComponent=!0},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?r.a.createElement(b,s(s({ref:n},c),{},{components:t})):r.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);