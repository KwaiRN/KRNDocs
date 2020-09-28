---
id: video-memory
title: 上传视频内存优化
author: ChenYing
author_title: 😷
author_url: https://github.com/norcy
author_image_url: https://avatars3.githubusercontent.com/u/8423011?s=460&u=2cc946eff5c03df2f3afd1665cd2a63ffe26eda1&v=4
---

项目中使用 [react-native-fs](https://github.com/itinance/react-native-fs) 上传视频时经常出现内存暴涨，内存上涨的幅度是视频大小的 2 倍，而且这部分内存随后没有释放；如此反复上传视频最终导致 App 内存不足而崩溃

<!--truncate-->

查看了其源码的时候，发现有两个问题导致内存泄漏


## 第一个问题
这段代码是发送上传请求

```objc
NSURLSessionConfiguration *sessionConfiguration = [NSURLSessionConfiguration defaultSessionConfiguration];
NSURLSession *session = [NSURLSession sessionWithConfiguration:sessionConfiguration delegate:(id)self delegateQueue:[NSOperationQueue mainQueue]];
_task = [session dataTaskWithRequest:req completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
  NSString * str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
  return self->_params.completeCallback(str, response);
}];
[_task resume];
```

第一个问题是 `sessionWithConfiguration:delegate:delegateQueue:` 中的 delegate 参数会被 NSURLSession 强引用，会导致 delegate 也就是 self 永久不会释放，这点该接口已经有官方文档的说明


> The session object keeps a strong reference to the delegate until your app exits or explicitly invalidates the session. If you do not invalidate the session by calling the invalidateAndCancel or finishTasksAndInvalidate method, your app leaks memory until it exits

解决方法是在任务结束时调用 invalidateAndCancel 或 finishTasksAndInvalidate，如下

```objc
_task = [session dataTaskWithRequest:req completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
  [session finishTasksAndInvalidate];	// 释放 delegate
  NSString * str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
  return self->_params.completeCallback(str, response);
}];
```

## 第二个问题
发现上传的关键代码如下，上传大文件的时候，使用的是先读取文件到内存，然后设置到 HTTPBody。

```objc
NSData *fileData = [NSData dataWithContentsOfFile:filepath];    // 这里内存会上涨一个视频的大小
[reqBody appendData:fileData];
[req setHTTPBody:reqBody];      // 这里内存也会上涨一个视频的大小

NSURLSessionConfiguration *sessionConfiguration = [NSURLSessionConfiguration defaultSessionConfiguration];
//sessionConfiguration.requestCachePolicy = NSURLRequestReloadIgnoringLocalAndRemoteCacheData; 尝试过没用
NSURLSession *session = [NSURLSession sessionWithConfiguration:sessionConfiguration delegate:self delegateQueue:[NSOperationQueue mainQueue]];
_task = [session dataTaskWithRequest:req completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
  [session finishTasksAndInvalidate];	// 释放 delegate
  NSString * str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
  return self->_params.completeCallback(str, response); // 网络请求完成，内存没有降下来，总共上涨了 2 个视频的大小
}];
[_task resume];
```

原因是 NSURLSession 会 retain 了 req 里的 data，所以出现内存不释放问题

对于大文件的上传应该使用流式上传的方式

```objc
NSURLSessionConfiguration *sessionConfiguration = [NSURLSessionConfiguration defaultSessionConfiguration];
NSURLSession *session = [NSURLSession sessionWithConfiguration:sessionConfiguration delegate:(id)self delegateQueue:[NSOperationQueue mainQueue]];
_task = [session uploadTaskWithRequest:req
                              fromFile:fileUrl
                     completionHandler:^(NSData *_Nullable data, NSURLResponse *_Nullable response,
                                         NSError *_Nullable error) {
                        [session finishTasksAndInvalidate];
                        NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
                        return self->_params.completeCallback(str, response);
                     }];

```

这段代码取消了直接读取文件然后设置 HTTPBody 的做法，并用 `uploadTaskWithRequest:fromFile:completionHandler:` 方法来上传文件，流式发送，读取一点发送一点，这种做法实践下来内存十分稳定



## 完整代码
[完整代码](http://git.corp.kuaishou.com/team-shenzhen/ios/react-native-fs)