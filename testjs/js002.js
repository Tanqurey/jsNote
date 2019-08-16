// 讲解数据类型
/*
1.5种简单类型（Null,Undefined,String,Boolean,Number）和1种复杂类型(Object)
具体某一变量是什么类型可以通过 typeof 操作符来得知。

2.undefined
1)声明一个变量但不赋值时，或者干脆就没有声明过一个变量时，默认为undefined
*/
let a
console.log(a)
/*
2.Null
1)属于Object
2)常用于暂时成为未声明的对象的变量值
注意:
*/
console.log(null === null) //true
console.log(undefined === undefined) //true
/*
3.Number
1)浮点
浮点数计算不准确
 */
console.log(0.1 + 0.2) //0.30000000000000004
//解决办法
function floatSum(a, b) {
  return (a * 100 + b * 100) / 100
}
console.log(floatSum(0.1, 0.2)) //0.3
/*
2)NAN
即非数值，当本来要返回的值为数值但返回的不是数值时，返回NaN
如：
*/
console.log(5 / 'a') //NaN
/*
有NaN参与的所有运算输出NaN,请不要使用NaN验证NaN
*/
console.log(NaN / 5) //NaN
console.log(NaN == NaN) //false

/*
isNaN(),用于确定某个参数是否不是数字类型。当某一变量可以转换为数字时返回true，否则为false
*/
console.log(isNaN(NaN)) //true
console.log(isNaN(1)) //false
console.log(isNaN('2')) //false
console.log(isNaN('a')) //true,不能被转换为数字
console.log(isNaN(true)) //false，可以被转换为数字1
console.log('----------------------------------')

/*
3.数值转换
1)Boolean
true=>1
false=>0
2)null=>0
3)undefined=>NaN
4)String
--只包含数字，不论是否为浮点，直接转换为相应数字。忽略没有意义的前导0
--16进制，输出为相等的十进制
--空=>0
--其他=>NaN
以上数值转换基于Number()操作，+操作
*/
console.log(true + 0) //1
console.log(null + 0) //0
console.log(Number('012')) //12
console.log(Number('12.8')) //12.8
console.log(undefined + 0) //NaN
console.log('' + 0) //0
console.log(0xa2 + 0) //162

/*
parseInt操作的规则不一致
--首字符不为0或-直接返回NaN
--依次识别，直到不是数字的字符出现，返回之前的相应数字。因此是会忽略小数的
--16进制，8进制直接返回10进制

parseInt的第二个参数可以指定以哪种进制解析数字
*/
console.log(parseInt(0xa)) //10
console.log(parseInt('22.5')) //22
console.log(parseInt('dd123')) //NaN
console.log(parseInt('22dd')) //22
console.log(parseInt(077)) //63

/*
String
字符串是不可变的
toString()方法转换为字符串
注意：
*/
console.log('-------------------------')
console.log(true.toString()) //true
console.log(String(undefined)) //undefined
console.log(String(null)) //null