// js语句讲解

/*
1.for-in 语句

用于遍历对象中的属性
}

*/
let obj = {
  name: 'cc',
  age: 24,
  sex: 'male'
}

for (let key in obj) {
  console.log(obj[key])
}

/*
2.with语句
1)作用是将代码的作用域设置到一个特定的对象中
2)严格模式下不允许使用
with(objName){
  some statements}

  注意：大量使用with严重降低性能。在with代码块中的变量首先是一个局部变量，
  找不到时再去objName中找
*/

with(obj) {
  name = 'dd'
  age = '26'
  sex = 'female'
  hobby = 'running'//忽略
}
console.log(obj)