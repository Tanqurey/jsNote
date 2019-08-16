/*
1.创建对象

1)工厂模式
缺陷：没有解决对象识别的问题
用instanceof检测为Object
*/

function createPerson(name, age) {
  let o = new Object()
  o.name = name
  o.age = age
  return o
}


/*
2)构造函数

*/

function Person(name, age) {
  this.name = name
  this.age = age
  this.sayHi = function () {
    console.log(this.name)
  }
}

let p1 = new Person()
let p2 = new Person()
console.log(p1.sayHi == p2.sayHi)

/*
使用构造函数的缺陷是每一个实例对象中的方法都是独立的，不相等的
这是非常不必要的，所以我们可以在构造函数外定义成员方法
*/
function Person2(name, age) {
  this.name = name
  this.age = age
  this.sayHi = sayHi
}

function sayHi() {
  console.log(this.name)
}
let p3 = new Person2()
let p4 = new Person2()
console.log(p3.sayHi == p4.sayHi) //true

//这么做也会带来缺陷，使封装性变差
/*
字面量模式
*/