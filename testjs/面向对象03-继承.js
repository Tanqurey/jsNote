/*
原型链是实现继承的主要方法
*/

/*
实现一个简单的原型链

*/

function SuperType() {
  this.flag = 1
}

SuperType.prototype.getFlag = function () {
  console.log(this.flag)
}

function SubType() {
  this.subFlag = 0
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType

SubType.prototype.getSubFlag = function () {
  console.log(this.subFlag)
}

let instance = new SubType()
instance.getFlag() //1
console.log(Object.getPrototypeOf(instance)) //返回SubType,因为上面已经修正了SubType的构造函数指向
/*
解析：
实现的原理是重写原型对象。
我们没有使用subType的默认原型，而是把其原型重新设置成类型SuperType的一个实例
因此，subType的原型对象上具有SuperType实例所具备的所有实例属性和实例方法，即flag.
instance实例指向SubType原型，而SubType原型指向SuperType的原型。所以方法getFlag仍存在于
SuperType的原型中。
与此同时，注意instance实例的constructor指向已经改变为SuperType.

在我们想使用instance调用getFlag方法时，首先在instance实例搜索，之后在SubType.prototype中搜索
,再到SuperType.prototype中搜索。

由于instance的原型链上有SubType SuperType Object
所以对上述的对象使用instanceof 以及 .prototype.isPrototypeOf(instance)都将返回true


继承的3种方式
1)构造函数继承
优点：可以向父类（超类）的构造函数传递参数
弊端：这种模式下所有类型都只能使用构造函数模式，方法都必须定义为实例方法，这样的话无法进行函数复用
并且超类原型中定义的方法，子类不可见
举例：

*/

function SuperType2(name) {
  this.name = name
}

function SubType2() {
  SuperType2.call(this, 'cc')
  this.age = 18
}

let instance2 = new SubType2()

/*
2)原型式继承
类似最开始的一种
属性值都是一样的，
弊端就是原型中属性为引用类型的一旦被修改会影响其他实例
*/
console.log('-------1-----------')

function SuperType3(name) {
  this.name = name
}

SuperType3.prototype.friends = ['aa', 'bb', 'dd', 'ee']

function SubType3() {
  this.age = 18
}

SubType3.prototype = new SuperType3('cc')

SubType3.prototype.constructor = SubType3

let instance3 = new SubType3()
let instance4 = new SubType3()

instance3.friends.push('ff')

console.log(instance3.name)
console.log(instance4.friends)

/*
3)组合式继承
结合上述两种方式
*/

console.log('-------2----------')

function SuperType4(name) {
  this.name = name
}

SuperType4.prototype.friends = ['aa', 'bb', 'dd', 'ee']

function SubType4() {
  SuperType4.call(this,'cc')
  this.age = 18
}

SubType4.prototype = new SuperType4()

SubType4.prototype.constructor = SubType4

let instance5 = new SubType4()
let instance6 = new SubType4()

instance5.friends.push('ff')

console.log(instance5.name)
console.log(instance6.friends)