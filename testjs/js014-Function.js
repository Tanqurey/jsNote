/*
讲解Function

1.不存在重载，同名函数直接覆盖

2.函数声明或者函数表达式
  解析器会率先读取函数声明，并使其在执行任何代码前可用，至于函数表达式，解析器在执行到当前
  代码行时才进行解析。

3.函数内部属性

1)arguments伪数组
保存函数参数
它拥有一个参数callee,是一个属性,指向拥有arguments这个对象的函数，即原函数
在递归函数中使用，用于规避函数体内重名函数的耦合问题
*/
// 阶乘函数
function factorial(num) {
  return num === 1 ? 1 : num * arguments.callee(num - 1)
}

console.log(factorial(6))
/*
2)this
this引用的是函数执行的环境对象，在网页全局作用域调用函数时
对象引用的就是window
请注意：函数的名字仅仅是一个包含指针的变量
在为对象定义已声明的函数后，其和原函数指向的都是同一个函数

3)每个函数都有caller属性
其作用是返回调用本函数的其他函数体代码
严格模式下，访问arguments的caller（非严格模式下为undefined）和callee均报错

*/

function outer() {
  inner()
}

function inner() {
  console.log(arguments.callee.caller) // 为了实现更松散的耦合，使用callee
}
outer()

/*
4.每个函数都有length和prototype这两个属性
length是指函数希望接收的命名参数的个数
prototype暂不介绍

5.每个函数都包含两个非继承的方法：apply和call
改变this指向，在特定的作用域中调用函数

函数名.apply(thisObj,argsArr)
函数名.call(thisObj,args)


还有bind方法，它跟上述两个方法的区别是不会立即调用，而是返回一个改变了this指向的函数

*/

var a = 100
var obj = {
  a: 10
}

function print() {
  console.log(this.a)
}
print() //100
let myPrint = print.bind(obj)
myPrint() // 10