// toString 继承自 Object ，所有类型都有
/*
每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。
*/

let arr = [1, 2, 3]
console.log(arr.toString())

let number = new Number(6)
console.log(number.toString())

let obj = {
  name: 'cc',
  age: 18
}
/*
默认情况下，toString() 方法被每个 Object 对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]
*/
console.log(obj.toString()) //[Object,Object]

function add(a, c) {
  return a + c
}
console.log(add.toString()) //函数体字符串

// toString 可以被重写
/*
toString 重写后，在需要返回或使用被重写对象字符串形式的场合会隐式调用；其实不修改前也会调用，没有表现出来
*/
console.log('---------1----------')

let obj2 = {
  name: 'bb',
  age: 41,
}

obj2.toString = function () {
  console.log('执行了toString')
  return 'my name is ' + this.name
}

alert(obj2) //必须用alert，alert只能打印字符串，所以默认调用toString