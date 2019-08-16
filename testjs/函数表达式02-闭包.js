/*
闭包是有权访另一个函数作用域中变量的函数
创建闭包的常见方式就是在函数内部创建另一个函数

一个简单的闭包
*/

function outer(word) {
  return function () {
    console.log(word)
  }
}

let printWord = outer('hello')
printWord()

/*
在后台中每个执行环境都有一个表示变量的对象，称为变量对象。
全局环境的变量对象始终存在，而像outer函数这样的局部环境的变量对象，只在函数执行的过程中存在。
在创建outer函数时，会为函数创建一个预先包含全局变量对象的作用域链，并进行保存。
而当使用outer函数时，会为函数创建一个执行环境，复制上面保存的作用域链。
此时，由实参及函数内定义变量组成的活动对象（被当作变量对象使用）也被加入到作用域中。
此时，该作用域就包含了上述两个变量对象。

作用链本质就是一个指向变量对象的指针列表，并不包含实际对象

一般来说，函数执行完毕后，相应的局部活动对象就会被销毁，但是闭包的情况有所不同

作用域链本质上是一个指向变量对象的指针列表，引用但不真正包含变量对象

outer返回的匿名函数的作用域会被初始化为outer的活动变量以及全局变量对象
因此outer执行完毕后，其活动对象也不会被销毁，因为匿名函数的作用域链仍在引用该活动对象。
直到该匿名函数被销毁才会释放活动变量

闭包只能取得函数中变量的最后一个值
即
*/

function test() {
  let res = []

  for (var i = 0; i < 10; i++) {
    res.push(function () {
      console.log(i)
    })
  }

  return res
}

test()[4]() //如果上面的i用let声明就返回4

/*
this 指向，匿名函数的执行环境具有全局性，因此其内部的this通常指向window

为了避免变量泄露，请在使用完闭包后置空
*/