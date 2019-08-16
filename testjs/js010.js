/*
没有块级作用域
局部定义的变量可以全局使用，包括if,for等

*/

for (var i = 0; i < 10; i++) {
  //dosth
}
console.log(i) //10

//es6中存在块级作用域
for (let j = 0; j < 10; j++) {
  //dosth
}
console.log(j) //undefined