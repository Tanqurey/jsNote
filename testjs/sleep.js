/*
js是单线程的，使用sleep可以使线程陷入停顿，不再继续执行

js不内置sleep，需要自行封装
*/

// es5 封装

// function sleep1(time) {
//   let now = Date.now()
//   let newTime
//   while (newTime = Date.now()) {
//     if (newTime - now >= time) {
//       break
//     }
//   }
// }

// sleep1(100)
// console.log('ok')

// 缺陷：当睡眠时间增大时，花销非常大。

// ES6 Promise

// function sleep2(time) {
//   return new Promise(resolve => {
//     setTimeout(resolve, time)
//   })
// }

// sleep2(500).then(() => {
//   console.log(1)
// })

// 特点：没有形成进程阻塞，不会造成性能和负载问题。而且当我们需要在某过程中需要停止执行（
// 或者在中途返回了错误的值），还必须得层层判断后跳出，非常麻烦，而且这种异步并不是那么彻底，还是看起来别扭。

// es6 async/await
function sleep3(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function timer(time) {
  var temple = await sleep3(time);
 console.log(111) // 一些其他的操作
}

timer(1000)