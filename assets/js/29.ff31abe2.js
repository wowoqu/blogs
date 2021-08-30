(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{389:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"promise-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-使用"}},[t._v("#")]),t._v(" Promise 使用")]),t._v(" "),s("h2",{attrs:{id:"promise-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-介绍"}},[t._v("#")]),t._v(" Promise 介绍")]),t._v(" "),s("p",[t._v("Promise 翻译过来是 "),s("code",[t._v("承诺")]),t._v(" 的意思，它的诞生主要是为了解决 "),s("code",[t._v("JavaScript 异步编程")]),t._v(" 以及 "),s("code",[t._v("JavaScript 异步编程")]),t._v(" 带来的 "),s("code",[t._v("回调地狱")]),t._v(" 等问题的。")]),t._v(" "),s("h3",{attrs:{id:"promise-之前的-异步回调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-之前的-异步回调"}},[t._v("#")]),t._v(" Promise 之前的 异步回调")]),t._v(" "),s("p",[t._v("在 Promise 出来之前，我们要实现在异步完成后执行某操作的话，需要在异步函数内添加回调函数，这也是因为 JavaScript 是异步非阻塞的特性。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("而如果我们需要 "),s("code",[t._v("依次")]),t._v(" 请求一系列接口，并且后一个请求的数据"),s("code",[t._v("依赖于上一个请求")]),t._v("的结果，则有如下的代码。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 依次请求接口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://foo.example.com/1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://foo.example.com/2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://foo.example.com/3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://foo.example.com/4")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://foo.example.com/1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://foo.example.com/2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://foo.example.com/3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something...")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://foo.example.com/4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something...")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reason4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reason3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reason2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reason1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上面的代码就是传说中的 "),s("code",[t._v("回调地狱")]),t._v("，它本身存在着一些问题："),s("strong",[t._v("无法表达清晰的逻辑")]),t._v("、"),s("strong",[t._v("导致执行顺序不确定")]),t._v("等。")]),t._v(" "),s("h3",{attrs:{id:"promise-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-规范"}},[t._v("#")]),t._v(" Promise 规范")]),t._v(" "),s("p",[t._v("正是由于以上原因才会有了 Promise 的诞生，下面我们来看一下 Promise 的规范。")]),t._v(" "),s("ul",[s("li",[t._v("Promise 对象的状态不受外界影响: "),s("code",[t._v("Promise")]),t._v(" 对象有三种状态: "),s("code",[t._v("pending(进行中)")]),t._v("、"),s("code",[t._v("fulfilled(已成功)")]),t._v("、"),s("code",[t._v("rejected(已失败)")]),t._v("。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 "),s("code",[t._v("Promise")]),t._v(" 这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。")]),t._v(" "),s("li",[t._v("一旦状态改变，就不会再变，任何时候都可以得到这个结果: "),s("code",[t._v("Promise")]),t._v("对象的状态改变，只有两种可能：从"),s("code",[t._v("pending")]),t._v("变为"),s("code",[t._v("fulfilled")]),t._v("和从"),s("code",[t._v("pending")]),t._v("变为"),s("code",[t._v("rejected")]),t._v("。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 "),s("code",[t._v("resolved")]),t._v("（已定型）。如果改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。")])]),t._v(" "),s("h2",{attrs:{id:"要点总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#要点总结"}},[t._v("#")]),t._v(" 要点总结")]),t._v(" "),s("p",[s("strong",[t._v("Promise")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise")]),t._v(" 是一个构造函数，接受一个函数作为参数，该函数有  "),s("code",[t._v("resolve")]),t._v("、"),s("code",[t._v("reject")]),t._v(" 两个函数类型的参数(和 "),s("code",[t._v("e")]),t._v(" 一样，由 Js 引擎提供)。")]),t._v(" "),s("li",[s("code",[t._v("Promise")]),t._v(" 新建后，会立即执行(构造函数接受的函数)。")]),t._v(" "),s("li",[s("code",[t._v("resolve")]),t._v(" 和 "),s("code",[t._v("reject")]),t._v(" 都可以带一个参数，该参数会传递给 "),s("code",[t._v("Promise")]),t._v(" 绑定的下一个 "),s("code",[t._v("then")]),t._v(" 方法。而 "),s("code",[t._v("resolve")]),t._v(" 函数的参数除了正常的值以外，还可能是另一个 "),s("code",[t._v("Promise")]),t._v(" 对象。这时只有传入的 "),s("code",[t._v("Promise")]),t._v(" 对象被改变，然后才会执行原有的 "),s("code",[t._v("then")]),t._v(" 方法。而状态也遵循传入的 "),s("code",[t._v("Promise")]),t._v(" 的状态。")]),t._v(" "),s("li",[t._v("调用 "),s("code",[t._v("resolve")]),t._v(" 或 "),s("code",[t._v("reject")]),t._v(" 并不会终结 "),s("code",[t._v("Promise")]),t._v(" 的参数函数的执行。"),s("code",[t._v("resolve/reject")]),t._v(" 的 "),s("code",[t._v("Promise")]),t._v(" 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。可在执行 "),s("code",[t._v("resolve/reject")]),t._v(" 前面加 "),s("code",[t._v("return")]),t._v(" 语句，这样就不会有意外。")])]),t._v(" "),s("p",[s("strong",[t._v("then")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise")]),t._v(" 实例具有 "),s("code",[t._v("then")]),t._v(" 方法。")]),t._v(" "),s("li",[s("code",[t._v("then")]),t._v(" 方法会接收两个函数类型的参数，两个函数都是可选的。这两个函数的参数都是 "),s("code",[t._v("Promise")]),t._v(" 对象传出的值。如果 "),s("code",[t._v("Promise")]),t._v(" 成功，则会执行 "),s("code",[t._v("then")]),t._v(" 的第一个函数，失败则会执行 "),s("code",[t._v("then")]),t._v(" 的第二个参数。")]),t._v(" "),s("li",[s("code",[t._v("then")]),t._v(" 方法会返回一个新的 "),s("code",[t._v("Promise")]),t._v("(不是原来那个 "),s("code",[t._v("Promise")]),t._v(" 实例)。因此可以采用链式写法。")]),t._v(" "),s("li",[t._v("后一个 "),s("code",[t._v("then")]),t._v(" 总是依赖于前一个 "),s("code",[t._v("then")]),t._v(" 的完成才会执行。")])]),t._v(" "),s("p",[s("strong",[t._v("catch")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise.prototype.catch()")]),t._v(" 方法是 "),s("code",[t._v(".then(null, rejection)")]),t._v(" 或 "),s("code",[t._v(".then(undefined, rejection)")]),t._v(" 的别名，用于指定发生错误时的回调函数。")]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("Promise")]),t._v(" 和 "),s("code",[t._v("then")]),t._v(" 方法里抛出错误的话，会被 "),s("code",[t._v("catch")]),t._v(" 方法捕获。执行 "),s("code",[t._v("reject()")]),t._v(" 方法的作用，等同于抛出错误。")]),t._v(" "),s("li",[t._v("如果在 "),s("code",[t._v("catch")]),t._v(" 之前的 "),s("code",[t._v("then")]),t._v(" 方法有传入第二个参数，即 "),s("code",[t._v("rejection")]),t._v(" 的话，"),s("code",[t._v("catch")]),t._v(" 则不会被执行。")]),t._v(" "),s("li",[s("code",[t._v("Promise")]),t._v(" 的状态已经变成 "),s("code",[t._v("resolve")]),t._v("，再抛出错误是无效的。")]),t._v(" "),s("li",[s("code",[t._v("Promise")]),t._v(" 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 "),s("code",[t._v("catch")]),t._v(" 语句捕获。")]),t._v(" "),s("li",[t._v("不要在 "),s("code",[t._v("then")]),t._v(" 方法里传入第二个参数(rejection)，而要统一用 "),s("code",[t._v("catch")]),t._v(" 方法("),s("code",[t._v("then")]),t._v(" 方法里的错误，"),s("code",[t._v("then")]),t._v(" 本身不会处理)。")]),t._v(" "),s("li",[s("code",[t._v("Promise")]),t._v(" 对象抛出的错误不会传递到外层代码，即不会有任何反应("),s("code",[t._v("Promise")]),t._v(" 会吃掉错误)。")]),t._v(" "),s("li",[s("code",[t._v("catch")]),t._v(" 跟 "),s("code",[t._v("then")]),t._v(" 一样，会返回一个新的 "),s("code",[t._v("Promise")]),t._v(" 对象，因此后面可以接着调用 "),s("code",[t._v("then/catch")]),t._v(" 方法。")]),t._v(" "),s("li",[t._v("如果没有报错，会跳过 "),s("code",[t._v("catch")]),t._v(" 代码，执行之后的 "),s("code",[t._v("then/catch")]),t._v(" 方法。")]),t._v(" "),s("li",[s("code",[t._v("catch")]),t._v(" 内部仍然可以抛出错误，而被之后的 "),s("code",[t._v("catch")]),t._v(" 捕获。")]),t._v(" "),s("li",[s("code",[t._v("promise")]),t._v(" 对象里面同步代码抛出的错误在没有通过 "),s("code",[t._v("promise")]),t._v(" 的 "),s("code",[t._v("catch")]),t._v(" 方法捕获时是会打印报错的（不会阻止 "),s("code",[t._v("promise")]),t._v(" 外面代码的执行），但是不会传递到外面触发其他错误监听函数（比如 "),s("code",[t._v("window.onerror")]),t._v(" 、"),s("code",[t._v("try-catch")]),t._v(" 等）")])]),t._v(" "),s("p",[s("strong",[t._v("finally")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("finally")]),t._v(" 本质上是 "),s("code",[t._v("then")]),t._v(" 方法的特例 "),s("code",[t._v(".then(result => result, error => throw error)")]),t._v("。")]),t._v(" "),s("li",[t._v("不管 "),s("code",[t._v("promise")]),t._v(" 最后的状态，在执行完 "),s("code",[t._v("then")]),t._v(" 或 "),s("code",[t._v("catch")]),t._v(" 指定的回调函数以后，都会执行 "),s("code",[t._v("finally")]),t._v(" 方法指定的回调函数。")]),t._v(" "),s("li",[s("code",[t._v("finally")]),t._v(" 方法的回调函数不接受任何参数，"),s("code",[t._v("finally")]),t._v("方法里面的操作，应该是与状态无关的，不依赖于 "),s("code",[t._v("Promise")]),t._v(" 的执行结果。")]),t._v(" "),s("li",[s("code",[t._v("finally")]),t._v(" 方法总是会返回原来的值。")])]),t._v(" "),s("p",[s("strong",[t._v("all")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise.all()")]),t._v(" 方法用于将多个 "),s("code",[t._v("Promise")]),t._v(" 实例，包装成一个新的 "),s("code",[t._v("Promise")]),t._v(" 实例。接受一个数组作为参数(可以不是数组，但必须具有 "),s("code",[t._v("Iterator")]),t._v(" 接口，且返回的每个成员都是 "),s("code",[t._v("Promise")]),t._v(" 实例)。如果数组里的值不是 "),s("code",[t._v("Promise")]),t._v(" 实例，就会先调用 "),s("code",[t._v("Promise.resolve")]),t._v(" 方法，将参数转化为 "),s("code",[t._v("Promise")]),t._v(" 对象。")]),t._v(" "),s("li",[t._v("只有 "),s("code",[t._v("p1、p2、p3")]),t._v(" 的状态都变成 "),s("code",[t._v("fulfilled")]),t._v(" ，"),s("code",[t._v("p")]),t._v(" 的状态才会变成 "),s("code",[t._v("fulfilled")]),t._v(" ，此时 "),s("code",[t._v("p1、p2、p3")]),t._v(" 的返回值组成一个数组，传递给 "),s("code",[t._v("p")]),t._v(" 的回调函数。")]),t._v(" "),s("li",[t._v("只要 "),s("code",[t._v("p1、p2、p3")]),t._v(" 之中有一个被 "),s("code",[t._v("rejected")]),t._v("，"),s("code",[t._v("p")]),t._v(" 的状态就变成 "),s("code",[t._v("rejected")]),t._v("，此时第一个被 "),s("code",[t._v("reject")]),t._v(" 的实例的返回值，会传递给 "),s("code",[t._v("p")]),t._v(" 的回调函数。")])]),t._v(" "),s("p",[s("strong",[t._v("race")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise.race()")]),t._v(" 方法同样是将多个 "),s("code",[t._v("Promise")]),t._v(" 实例，包装成一个新的 "),s("code",[t._v("Promise")]),t._v(" 实例。只要 "),s("code",[t._v("p1、p2、p3")]),t._v(" 之中有一个实例率先改变状态，"),s("code",[t._v("p")]),t._v(" 的状态就"),s("strong",[t._v("跟着改变")]),t._v("。那个率先改变的 "),s("code",[t._v("Promise")]),t._v(" 实例的返回值，就传递给 "),s("code",[t._v("p")]),t._v(" 的回调函数。如果数组里的值不是 "),s("code",[t._v("Promise")]),t._v(" 实例，就会先调用 "),s("code",[t._v("Promise.resolve")]),t._v(" 方法，将参数转化为 "),s("code",[t._v("Promise")]),t._v(" 对象。")])]),t._v(" "),s("p",[s("strong",[t._v("allSettled")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise.allSettled()")]),t._v("方法接受一个数组作为参数，数组的每个成员都是一个 "),s("code",[t._v("Promise")]),t._v(" 对象，并返回一个新的 "),s("code",[t._v("Promise")]),t._v(" 对象。")]),t._v(" "),s("li",[t._v("只有等到参数数组的所有 "),s("code",[t._v("Promise")]),t._v(" 对象都发生状态变更（不管是 "),s("code",[t._v("fulfilled")]),t._v(" 还是 "),s("code",[t._v("rejected")]),t._v("），返回的 "),s("code",[t._v("Promise")]),t._v(" 对象才会发生状态变更。")]),t._v(" "),s("li",[t._v("该方法返回的新的 "),s("code",[t._v("Promise")]),t._v(" 实例，一旦发生状态变更，状态总是 "),s("code",[t._v("fulfilled")]),t._v(" ，不会变成 "),s("code",[t._v("rejected")]),t._v(" 。状态变成 "),s("code",[t._v("fulfilled")]),t._v(" 后，它的回调函数会接收到一个数组作为参数，该数组的每个成员对应前面数组的每个 "),s("code",[t._v("Promise")]),t._v(" 对象。")]),t._v(" "),s("li",[t._v("返回值 "),s("code",[t._v("results")]),t._v(" 的每个成员是一个对象，对象的格式是固定的，对应异步操作的结果。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步操作成功时")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fulfilled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步操作失败时")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rejected'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("any")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise.any()")]),t._v("方法。该方法接受一组 "),s("code",[t._v("Promise")]),t._v(" 实例作为参数，包装成一个新的 "),s("code",[t._v("Promise")]),t._v(" 实例返回。")]),t._v(" "),s("li",[t._v("只要参数实例有一个变成 "),s("code",[t._v("fulfilled")]),t._v(" 状态，包装实例就会变成 "),s("code",[t._v("fulfilled")]),t._v(" 状态；如果所有参数实例都变成 "),s("code",[t._v("rejected")]),t._v(" 状态，包装实例就会变成 "),s("code",[t._v("rejected")]),t._v(" 状态。")]),t._v(" "),s("li",[s("code",[t._v("Promise.any()")]),t._v(" 不会因为某个 "),s("code",[t._v("Promise")]),t._v(" 变成 "),s("code",[t._v("rejected")]),t._v(" 状态而结束，必须等到所有参数 "),s("code",[t._v("Promise")]),t._v(" 变成 "),s("code",[t._v("rejected")]),t._v(" 状态才会结束。")]),t._v(" "),s("li",[s("code",[t._v("Promise.any()")]),t._v(" 抛出的错误，是一个 "),s("code",[t._v("AggregateError")]),t._v(" 实例，相当于一个数组。每个成员对应一个被rejected的操作所抛出的错误。")])]),t._v(" "),s("p",[s("strong",[t._v("Promise.resolve()")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise.resolve()")]),t._v(" 等价于 "),s("code",[t._v("new Promise(resolve => resolve('foo'))")])]),t._v(" "),s("li",[s("code",[t._v("Promise.resolve()")]),t._v(" 的参数有四种情况\n"),s("ul",[s("li",[t._v("参数是一个 Promise 实例\n"),s("ul",[s("li",[s("code",[t._v("Promise.resolve")]),t._v(" 将不做任何修改、原封不动地返回这个实例。")])])]),t._v(" "),s("li",[t._v("参数是一个 "),s("code",[t._v("thenable")]),t._v(" 对象\n"),s("ul",[s("li",[s("code",[t._v("thenable")]),t._v(" 对象指的是具有 "),s("code",[t._v("then")]),t._v(" 方法的对象")]),t._v(" "),s("li",[s("code",[t._v("Promise.resolve()")]),t._v(" 方法会将这个对象转为 "),s("code",[t._v("Promise")]),t._v(" 对象，然后就立即执行 "),s("code",[t._v("thenable")]),t._v(" 对象的 "),s("code",[t._v("then()")]),t._v(" 方法(挂载 "),s("code",[t._v("then")]),t._v(" 方法，而不是立即执行 "),s("code",[t._v("then")]),t._v(" 参数里的方法)。")])])]),t._v(" "),s("li",[t._v("参数不是具有"),s("code",[t._v("then()")]),t._v("方法的对象，或根本就不是对象\n"),s("ul",[s("li",[s("code",[t._v("Promise.resolve()")]),t._v(" 方法返回一个新的 "),s("code",[t._v("Promise")]),t._v(" 对象，状态为 "),s("code",[t._v("resolved")]),t._v("。")])])]),t._v(" "),s("li",[t._v("不带有任何参数\n"),s("ul",[s("li",[s("code",[t._v("Promise.resolve()")]),t._v(" 方法允许调用时不带参数，直接返回一个 "),s("code",[t._v("resolved")]),t._v(" 状态的 "),s("code",[t._v("Promise")]),t._v(" 对象。")])])])])]),t._v(" "),s("li",[t._v("立即"),s("code",[t._v("resolve()")]),t._v("的 "),s("code",[t._v("Promise")]),t._v(" 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。")])]),t._v(" "),s("p",[s("strong",[t._v("Promise.reject()")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Promise.reject(reason)")]),t._v(" 方法也会返回一个新的 "),s("code",[t._v("Promise")]),t._v(" 实例，该实例的状态为 "),s("code",[t._v("rejected")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("Promise.reject()")]),t._v(" 方法的参数，会原封不动地作为 "),s("code",[t._v("reject")]),t._v(" 的理由，变成后续方法的参数。")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/114151331",target:"_blank",rel:"noopener noreferrer"}},[t._v("Promise/A+ 规范：诞生与原理初探"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.ituring.com.cn/article/66566",target:"_blank",rel:"noopener noreferrer"}},[t._v("Promises/A+规范(中文版)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰: ECMAScript 6 入门"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);