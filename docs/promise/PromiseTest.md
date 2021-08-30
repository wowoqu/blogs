# Promise 练习

**1. 实现一个批量请求函数 multiRequest(urls, maxNum)**

要求如下：

1. 要求最大并发数 maxNum。
2. 每当有一个请求返回，就留下一个空位，可以增加新的请求。
3. 所有请求完成后，结果按照 urls 里面的顺序依次打出。

```js
function multiRequest(urls, maxNum) {
    let i = 0, resolve;
    const ret = [], promise = new Promise(r => resolve = r);

    const addTask = () => {
        if (i >= urls.length) return resolve();

        const task = request(urls[i++]).finally(() => addTask());

        ret.push(task);
    }

    while(i < maxNum) addTask();

    return promise.then(() => Promise.all(ret));
}

// 模拟请求
function request(url) {
    return new Promise(r => {
        const time = Math.random() * 1000;
        setTimeout(() => r(url), time);
    })
}

// 测试
multiRequest([1,2,3,4,5,6], 2).then(urls => {
    console.log(urls);
})
```

**2. 说出以下打印顺序**
```js
var sdf = {
  then: function(resolve, reject) {
    console.log(443)
    resolve(42);
  }
}
new Promise(resolve => {
    resolve(1);
    Promise.resolve(sdf).then(() => console.log(2));
    console.log(4)
}).then(t => console.log(t));
console.log(3);
```

**3. 说出以下打印顺序**
```js
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
    reject('error');
})
promise.then(() => {
    console.log(3);
}).catch(e => console.log(e))
console.log(4);
```

**4. 说出以下打印顺序**
```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('once')
        resolve('success')
    }, 1000)
})
promise.then((res) => {
    console.log(res)
})
promise.then((res) => {
    console.log(res)
})
```

**5. 说出以下打印顺序**
```js
const p1 = () => (new Promise((resolve, reject) => {
    console.log(1);
    let p2 = new Promise((resolve, reject) => {
        console.log(2);
        const timeOut1 = setTimeout(() => {
            console.log(3);
            resolve(4);
        }, 0)
        resolve(5);
    });
    resolve(6);
    p2.then((arg) => {
        console.log(arg);
    });

}));
const timeOut2 = setTimeout(() => {
    console.log(8);
    const p3 = new Promise(reject => {
        reject(9);
    }).then(res => {
        console.log(res)
    })
}, 0)


p1().then((arg) => {
    console.log(arg);
});
console.log(10);
```

**6. 说出以下代码运行结果**
```js
Promise.resolve().then(() => {
    console.log('promise1');
    const timer2 = setTimeout(() => {
        console.log('timer2');
    }, 0)
})

const timer1 = setTimeout(() => {
    console.log('timer1');
    Promise.resolve().then(() => {
        console.log('promise2');
    })
}, 0)

console.log('start');
```

**7. 说出以下代码运行结果**
```js
Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log);
```