// 讲解操作符

/*
1.逻辑非！
注意
*/
console.log(!new Object())
console.log(!'')
console.log(!'非空字符串')
console.log(!null)
console.log(!NaN)
console.log(!undefined)
/*false
true
false
true
true
true

2.逻辑与&&
注意：
如果第一个操作数是对象，返回第二个操作数
若两个都是对象，则返回第二个操作数
仅当第一个操作数返回为true时，才会返回第二个操作数上的对象
*/
console.log(null && 1)
console.log(NaN && 1)
console.log(undefined && 1)
/*
null
NaN
undefined 

3.逻辑或||
如果第一个操作数是对象，返回第一个操作数
若两个都是对象，则返回第一个操作数
仅当第一个操作数返回为false时，才会返回第二个操作数上的对象

4.关系操作符<>>=<=
如果两个字符都是字符串，则比较首字符ASCII编码值
若相等，比较下一个字符
注意：
*/
console.log('23' < '3') //true
console.log('boy' < 'Boy') //false

/*
5.全等和不等
注意：转换类型
!= ==自动进行类型转换
!== ===不进行操作数的类型转换
注意：
*/
console.log(null === undefined) //false
console.log(null == undefined) //true
