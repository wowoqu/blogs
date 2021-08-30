# Promise 使用

## Promise 介绍

Promise 翻译过来是 `承诺` 的意思，它的诞生主要是为了解决 `JavaScript 异步编程` 以及 `JavaScript 异步编程` 带来的 `回调地狱` 等问题的。

### Promise 之前的 异步回调

在 Promise 出来之前，我们要实现在异步完成后执行某操作的话，需要在异步函数内添加回调函数，这也是因为 JavaScript 是异步非阻塞的特性。

```js
function foo(callback) {
    setTimeout(() => {
        callback(Math.random());
    }, 100);
}

foo(function(result) {
    console.log(result);
})
```

而如果我们需要 `依次` 请求一系列接口，并且后一个请求的数据`依赖于上一个请求`的结果，则有如下的代码。

```js
// 依次请求接口
// http://foo.example.com/1
// http://foo.example.com/2
// http://foo.example.com/3
// http://foo.example.com/4

ajax('get', 'http://foo.example.com/1', function(data1) {
    // Do something...
    ajax('get', 'http://foo.example.com/2', function(data2) {
        // Do something...
        ajax('get', 'http://foo.example.com/3', function(data3) {
            // Do something...
            ajax('get', 'http://foo.example.com/4', function(data4) {
                // Do something...
            }, function(reason4) {
                console.error(reason4);
            });
        }, function(reason3) {
            console.error(reason3);
        });
    }, function(reason2) {
        console.error(reason2);
    });
}, function(reason1) {
    console.error(reason1);
});
```

上面的代码就是传说中的 `回调地狱`，它本身存在着一些问题：**无法表达清晰的逻辑**、**导致执行顺序不确定**等。

### Promise 规范

正是由于以上原因才会有了 Promise 的诞生，下面我们来看一下 Promise 的规范。

- Promise 对象的状态不受外界影响: `Promise` 对象有三种状态: `pending(进行中)`、`fulfilled(已成功)`、`rejected(已失败)`。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 `Promise` 这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果: `Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 `resolved`（已定型）。如果改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

## 要点总结

**Promise**
- `Promise` 是一个构造函数，接受一个函数作为参数，该函数有  `resolve`、`reject` 两个函数类型的参数(和 `e` 一样，由 Js 引擎提供)。
- `Promise` 新建后，会立即执行(构造函数接受的函数)。
- `resolve` 和 `reject` 都可以带一个参数，该参数会传递给 `Promise` 绑定的下一个 `then` 方法。而 `resolve` 函数的参数除了正常的值以外，还可能是另一个 `Promise` 对象。这时只有传入的 `Promise` 对象被改变，然后才会执行原有的 `then` 方法。而状态也遵循传入的 `Promise` 的状态。
- 调用 `resolve` 或 `reject` 并不会终结 `Promise` 的参数函数的执行。`resolve/reject` 的 `Promise` 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。可在执行 `resolve/reject` 前面加 `return` 语句，这样就不会有意外。

**then**
- `Promise` 实例具有 `then` 方法。
- `then` 方法会接收两个函数类型的参数，两个函数都是可选的。这两个函数的参数都是 `Promise` 对象传出的值。如果 `Promise` 成功，则会执行 `then` 的第一个函数，失败则会执行 `then` 的第二个参数。
- `then` 方法会返回一个新的 `Promise`(不是原来那个 `Promise` 实例)。因此可以采用链式写法。
- 后一个 `then` 总是依赖于前一个 `then` 的完成才会执行。

**catch**
- `Promise.prototype.catch()` 方法是 `.then(null, rejection)` 或 `.then(undefined, rejection)` 的别名，用于指定发生错误时的回调函数。
- 在 `Promise` 和 `then` 方法里抛出错误的话，会被 `catch` 方法捕获。执行 `reject()` 方法的作用，等同于抛出错误。
- 如果在 `catch` 之前的 `then` 方法有传入第二个参数，即 `rejection` 的话，`catch` 则不会被执行。
- `Promise` 的状态已经变成 `resolve`，再抛出错误是无效的。
- `Promise` 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 `catch` 语句捕获。
- 不要在 `then` 方法里传入第二个参数(rejection)，而要统一用 `catch` 方法(`then` 方法里的错误，`then` 本身不会处理)。
- `Promise` 对象抛出的错误不会传递到外层代码，即不会有任何反应(`Promise` 会吃掉错误)。
- `catch` 跟 `then` 一样，会返回一个新的 `Promise` 对象，因此后面可以接着调用 `then/catch` 方法。
- 如果没有报错，会跳过 `catch` 代码，执行之后的 `then/catch` 方法。
- `catch` 内部仍然可以抛出错误，而被之后的 `catch` 捕获。
- `promise` 对象里面同步代码抛出的错误在没有通过 `promise` 的 `catch` 方法捕获时是会打印报错的（不会阻止 `promise` 外面代码的执行），但是不会传递到外面触发其他错误监听函数（比如 `window.onerror` 、`try-catch` 等）

**finally**
- `finally` 本质上是 `then` 方法的特例 `.then(result => result, error => throw error)`。
- 不管 `promise` 最后的状态，在执行完 `then` 或 `catch` 指定的回调函数以后，都会执行 `finally` 方法指定的回调函数。
- `finally` 方法的回调函数不接受任何参数，`finally`方法里面的操作，应该是与状态无关的，不依赖于 `Promise` 的执行结果。
- `finally` 方法总是会返回原来的值。

**all**
- `Promise.all()` 方法用于将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。接受一个数组作为参数(可以不是数组，但必须具有 `Iterator` 接口，且返回的每个成员都是 `Promise` 实例)。如果数组里的值不是 `Promise` 实例，就会先调用 `Promise.resolve` 方法，将参数转化为 `Promise` 对象。
- 只有 `p1、p2、p3` 的状态都变成 `fulfilled` ，`p` 的状态才会变成 `fulfilled` ，此时 `p1、p2、p3` 的返回值组成一个数组，传递给 `p` 的回调函数。
- 只要 `p1、p2、p3` 之中有一个被 `rejected`，`p` 的状态就变成 `rejected`，此时第一个被 `reject` 的实例的返回值，会传递给 `p` 的回调函数。

**race**
- `Promise.race()` 方法同样是将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。只要 `p1、p2、p3` 之中有一个实例率先改变状态，`p` 的状态就**跟着改变**。那个率先改变的 `Promise` 实例的返回值，就传递给 `p` 的回调函数。如果数组里的值不是 `Promise` 实例，就会先调用 `Promise.resolve` 方法，将参数转化为 `Promise` 对象。

**allSettled**
- `Promise.allSettled()`方法接受一个数组作为参数，数组的每个成员都是一个 `Promise` 对象，并返回一个新的 `Promise` 对象。
- 只有等到参数数组的所有 `Promise` 对象都发生状态变更（不管是 `fulfilled` 还是 `rejected`），返回的 `Promise` 对象才会发生状态变更。
- 该方法返回的新的 `Promise` 实例，一旦发生状态变更，状态总是 `fulfilled` ，不会变成 `rejected` 。状态变成 `fulfilled` 后，它的回调函数会接收到一个数组作为参数，该数组的每个成员对应前面数组的每个 `Promise` 对象。
- 返回值 `results` 的每个成员是一个对象，对象的格式是固定的，对应异步操作的结果。
```js
// 异步操作成功时
{status: 'fulfilled', value: value}

// 异步操作失败时
{status: 'rejected', reason: reason}
```

**any**
- `Promise.any()`方法。该方法接受一组 `Promise` 实例作为参数，包装成一个新的 `Promise` 实例返回。
- 只要参数实例有一个变成 `fulfilled` 状态，包装实例就会变成 `fulfilled` 状态；如果所有参数实例都变成 `rejected` 状态，包装实例就会变成 `rejected` 状态。
- `Promise.any()` 不会因为某个 `Promise` 变成 `rejected` 状态而结束，必须等到所有参数 `Promise` 变成 `rejected` 状态才会结束。
- `Promise.any()` 抛出的错误，是一个 `AggregateError` 实例，相当于一个数组。每个成员对应一个被rejected的操作所抛出的错误。

**Promise.resolve()**
- `Promise.resolve()` 等价于 `new Promise(resolve => resolve('foo'))`
- `Promise.resolve()` 的参数有四种情况
    - 参数是一个 Promise 实例
        - `Promise.resolve` 将不做任何修改、原封不动地返回这个实例。
    - 参数是一个 `thenable` 对象
        - `thenable` 对象指的是具有 `then` 方法的对象
        - `Promise.resolve()` 方法会将这个对象转为 `Promise` 对象，然后就立即执行 `thenable` 对象的 `then()` 方法(挂载 `then` 方法，而不是立即执行 `then` 参数里的方法)。
    - 参数不是具有`then()`方法的对象，或根本就不是对象
        -  `Promise.resolve()` 方法返回一个新的 `Promise` 对象，状态为 `resolved`。
    - 不带有任何参数
        - `Promise.resolve()` 方法允许调用时不带参数，直接返回一个 `resolved` 状态的 `Promise` 对象。
- 立即`resolve()`的 `Promise` 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。

**Promise.reject()**
- `Promise.reject(reason)` 方法也会返回一个新的 `Promise` 实例，该实例的状态为 `rejected`。
- `Promise.reject()` 方法的参数，会原封不动地作为 `reject` 的理由，变成后续方法的参数。

## 参考

- [Promise/A+ 规范：诞生与原理初探](https://zhuanlan.zhihu.com/p/114151331)
- [Promises/A+规范(中文版)](https://www.ituring.com.cn/article/66566)
- [阮一峰: ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/promise)