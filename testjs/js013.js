/*
讲解Array类型
js中的数组可以包含任何类型
1.创建数组
1)通过Array构造函数创建。

*/
let a = new Array()
let b = new Array(1, 2, 3)
let c = new Array(4) // 生成长度为4的数组

/*
使用 instanceof 判断某一变量是否为数组也是不严谨的
应该使用的是
*/

console.log(Array.isArray(a))

/*
2.转换
.toString()
将数组中的每一个元素以逗号分隔成字符串并返回
.valueOf()
返回数组本身

3.栈方法
栈的特点是后进先出，
pop() 删除数组末尾的元素，返回被删除的元素
push() 向数组末尾增加一个元素吗,返回新数组长度

4.队列方法
队列的特点是先进先出
shift() 删除队头元素
unshift() 向队头增加一个元素

5.重排序方法
1)reverse() //原数组逆序
2)sort() 按照升序来排列数组，依据的是每个元素使用toString()方法
后转换成的首字符ASCII码值
可以向里面传一个函数，用于设定比较方式。

*/

//保持升序
function compare1(a, b) {
  //a,b是比较的两个元素
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
}

//保持降序
function compare1(a, b) {
  //a,b是比较的两个元素
  if (a < b) {
    return 1
  } else if (a > b) {
    return -1
  } else {
    return 0
  }
}

//对于元素均为数值的，我们简单地可以使用
function compare3(a, b) {
  return b - a
}

/*
3.操作方法
1).concat(arr,ele...)
拼接数组，拼接到末尾
2).slice(biginIndex,endIndex)
裁剪字符串，包左不包右，第二个参数缺省时直接截到末尾
不改变原字符串
3).splice(start,num,sub,[sub1,sub2...])
具有删除，增加，替换的功能
4)indexOf/lastIndexOf() 返回指定元素从起点开始计算的索引

/*
4.迭代方法
每个迭代方法中传入的方法都默认接受3个参数
item:数组中每个元素
index:元素索引
array:当前正在操作的数组

1)every() 对数组每一项运行指定函数，全部返回true时才返回true
filter() 对数组每一项执行给定函数，返回为true组成元素的数组
forEach() 对数组的每一项执行给定函数，没有返回值
map() 对数组每一项执行给定函数，返回每次函数调用后返回的结果组成的数组
*/


