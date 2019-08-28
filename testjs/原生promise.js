/*
Promise有两个特点：
Promise构造函数接受一个函数作为参数，函数里面有两个参数resolve和reject分别作为执行成功或者执行失败的函数
可以通过then设置操作成功之后的操作，接受两个函数作为参数
*/

function MyPromise() {
  this.status = 'pending'
  this.data = null
  const handler = arguments[0]
  const that = this
  // promise一旦创建就立即执行
  handler(function () {
    //resolve
    that.status = 'resolved'
    that.data = arguments[0]
  }, function () {
    //reject
    that.status = 'rejected'
    that.data = arguments[0]
  })
}

MyPromise.prototype.then = function (res, rej) {
  // 为了实现异步，进行轮询
  let isFinished = false

  const timer = setInterval(() => {
    if (this.status === 'resolved' && res) {
      res(this.data)
      isFinished = true
    }
    if (this.status === 'rejected' && rej) {
      rej(this.data)
      isFinished = true
    }
    if (isFinished) {
      clearInterval(timer)
    }
  }, 100)
}

let p = new MyPromise((res) => {
  setTimeout(() => {
    res('ok')
  }, 500)
})

p.then(data => {
  console.log(data)
})