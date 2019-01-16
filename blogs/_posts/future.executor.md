---
layout: Post
title: Rust Future 执行器
tags:
  - rust
  - async-await
  - future
---


### Execution on current thread ###

通过 Thread 的 park/unpark 做 wake notify。

当前线程不断 loop 来 poll future，future not ready 的时候 park thread。

### Execution on thread pool ###

wake 方法通过 mpsc::channel 把未 ready 的 task 重新发送到 channel 中，让 thread 继续 poll future。
