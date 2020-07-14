---
id: api
title: API
---


[RN 原生组件与接口](https://reactnative.dev)

## 跳转
### KRN 跳 Native

```js
NativeModules.kwaiying.open(url, callback)
```

+ 跳相册页

> url = kwaiying://pick
> callback = function(status: Int, mediaInfo: MediaInfo)
> 成功 status 为 1，失败 status 为 0
> mediaInfo 通过 import pb 文件构造

### H5 跳 KRN

```js
kwaiying.open(params)
```

> params = {url : kwaiying://krn?packageName=${启动应用名}&jsbundle=${应用包的地址，完整 url 则拉起 RN 应用}&data=${json 化的启动参数}

> 注意：所有参数必须 encode 之后传入


## 数据打通
### H5 与 Native：KVStorage
```js
+ set(table:String, key: String, value: String, callback: String): void
+ getString(table:String, key: String, callback: String): void
+ capacity(table:String, callback: String): void
+ remove(table:String, key:String, callback: String): void
+ clear(table:String, callback: String): void
+ version(): Double //为了避免异步判断，此接口同步阻塞返回。
````
### KRN 与 Native：NativeModules.KVStorage

与 H5 不同在于 callback 参数改为函数闭包，其余函数名与参数一样。


> errCode 约定：NO_KEY。不存在 key

## 业务接口
### getInfoFromKwaiYing
H5

```js
kwaiying.getInfoFromKwaiYing()
````

KRN

```js
NativeModules.Kwaiying.getInfoFromKwaiYing((res) => { 
	console.log(JSON.parse(res)); 
})
```

### getCommonCookies
```js
NativeModules.Kwaiying.getCommonCookies((res) => { 
	console.log(JSON.parse(res)); 
})
```

> 注意：用户没登录，则 userId/passToken/ky.api_st 不存在


## 上报

### KRN 简版 native 上报
addTaskEvent 接口固定 type 为 1，operationType 为 1

```js
NativeModules.Kwaiying.report(key: string, params: string, callback: function);
```

+ key: 埋点名称。
+ params：json 字符串，key/value 在 native 会转为 map 上报。
+ callback：回调函数。暂无返回值

### KRN 版 weblogger
安装方法

```sh
npm install @krn/weblogger
import {RNWeblog} from '@krn/weblogger/dist/log.bridge.common.js';
import './KRNBootstrap';	// index.js 入口 
```

接口与官网一致。不支持插件

proto 上报方式。RecoReportEvent.proto 需要业务引入。可以查阅参考资料。

```js
weblog.sendImmediately('PROTO', {
    type: 'reco_report_event',
    payload: RecoReportEvent.SerializeAsString(),
    eventId: 'aaaabbb',
});
```

## 基础能力
### setNavSwipe（iOS）
是否禁止 Native 功能的手势返回，仅对 iOS 有效，安卓空实现

```js
NativeModules.Kwaiying.setNavSwipe(bool enable);
```


## 参考资料
+ [上报数据查询地址](https://app-analysis.corp.kuaishou.com/#/event_track?id=2085&appName=KUAISHOU_VIDEO_EDITOR&sampling=APP)
+ [快影WebView的JS接口](https://docs.corp.kuaishou.com/d/home/fcAAnp3wLKhWtDEqKk7Hpwpqq)
+ [RN AsyncStorage](https://github.com/react-native-community/async-storage)
+ [weblogger官网](https://component.corp.kuaishou.com/docs/weblogger/js)
+ [根据 proto 生成代码](https://www.npmjs.com/package/protobufjs)
+ [使用Typescript](https://reactnative.dev/docs/typescript)
