// 函数柯里化

/*

函数柯里化，就是将一个接受多个参数的函数转化为接受单一参数的函数的技术。

主要功能有参数复用，延迟调用等(bind)

简单实现，或可借助返回立即执行函数
下面借助call
*/

function curry(func) {
  const args = Array.prototype.slice.call(arguments, 1)

  return function () {
    const args2 = Array.prototype.slice.call(arguments)
    func.call(this, args.concat(args2))
  }
}

function add(x, y) {
  return x + y
}

var add3 = curry(add, 3)
add3(2) // 5

/*
例题：实现
add(1)(2) //3
add(3)(3,3,3) //12

的功能
*/

function curryAdd() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  let args = Array.prototype.slice.call(arguments)

  let _adder = function () {
    //将参数收集者变为一个全局变量，以便收集到所有的参数
    args.push(...arguments)
    return _adder
  }

  _adder.toString = function () {
    return args.reduce(function (pre, cur) {
      return pre + cur
    }, 0)
  }

  return _adder
}