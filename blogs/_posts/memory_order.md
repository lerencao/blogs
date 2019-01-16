---
layout: Post
title: notes on memory order
tags:
  - memory order
---

 https://mechanical-sympathy.blogspot.com/2011/07/memory-barriersfences.html 的阅读笔记。
memory barrier 保证 barrier 两边的指令执行结果可以以程序顺序的方式被其他 CPU 观察到。


store barrier:

> 'sfence' instruction on x86, waits for all store instructions prior to the barrier to be written from the store buffer to the L1 cache for the CPU on which it is issued.
> All previous updates to memory that happened before the barrier are now visible.

visible 只是说 数据从 cache 到  memory，但还不能保证其他 cpu 的 cache 也是最新的。

load barrier:

> “lfence” instruction on x86, ensures all load instructions after the barrier to happen after the barrier
> and then wait on the load buffer to drain for the issuing CPU.

保证 barrier 之后的 load 指令一定发生在 barrier 之后，不能被重排到 barrier 之前。并 flush load buffer 中的指令，去获取数据（from cache or memory）。


### volatile in Java ###

All writes that occur before a volatile store are visible by any other threads with the predicate that the other threads load this new store.

在一个线程里更新 volatile 字段可以保证，当其他线程看见这个 volatile 字段的更新值后，也能看见这个线程在之前做的更新操作。
