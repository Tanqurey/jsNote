// 本节主要讲解数组提供的reduce方法

/*
reduce方法可以非常方便地进行一些操作

reduce(reducer,init)

reducer 函数接收4个参数:

Accumulator (acc) (累计器)
Current Value (cur) (当前值)
Current Index (idx) (当前索引)
Source Array (src) (源数组)
您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。

init 上述累计器的初始值

举例：数组累加
*/

let arr = [1, 4, 6, 2, 7, 2, 7, 35, 8, 2, 6, 8, 2, 4]

console.log(arr.reduce((pre, cur) => {
  return pre + cur
}, -100))