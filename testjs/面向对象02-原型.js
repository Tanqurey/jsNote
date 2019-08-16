/*
每个函数都具有prototype(原型)属性。
属性值为一指针，指向原型对象。
原型对象包含被特定类型实例所共享的属性和方法以及constructor构造函数

1.理解原型对象
1)无论什么时候，创建一个新函数时。都会为其创建一个prototype属性
并且默认有一个constructor构造函数
至于其他方法，均由Object继承而来。
当我们调用构造函数创建新实例时，实例内部将 包含一个指针(__proto__)指向否早函数的原型对象
。注意这样的连接是存在于实例对象与构造函数的原型对象间，而不是实例与构造函数之间。
可以通过以下两种方法确定实例和构造函数间的关系
*/

function Person() {

}
let p = new Person()

console.log(Person.prototype.isPrototypeOf(p))
console.log(Object.getPrototypeOf(p) === Person.prototype)

/*
2)属性查找机制
当代码需要读取对象的某一个属性时，首先在当前实例查找，不存在的话继续在原型对象中查找。
也就是说，实例对象的属性会屏蔽原型对象中的同名对象,但不会覆盖原型对象的同名属性值

使用hasOwnProperty(属性名)可以得知某一属性是属于原型对象还是实例的

in 操作符 与上述函数功能类似，检测某一属性是否存在于实例中，不管是原型属性还是实例属性
 */

function Animal() {
  // 这是一个构造函数
}

Animal.prototype.num = 100

let cat = new Animal()
cat.color = 'yellow'

console.log('num' in cat)
console.log('color' in cat)
console.log('age' in cat)

/*
使用for-in语句遍历实例对象，将返回所有可枚举的属性，不论是否在原型上的。
用户自定义的属性均是可枚举的。
*/

/*

原型语法的简便写法：
构造函数.prototype={
  ...
}

但是这样会造成以下的问题，constructor指向被改变,无法确定对象类型。
*/
console.log('-------1--------')

Animal.prototype = {
  kind: 100,
  canEat: 52
}

let dog = new Animal()

console.log(dog instanceof Object) //true
console.log(dog instanceof Animal) //true
console.log(dog.constructor === Animal) //false

//如果constructor非常重要的话，可以重新设置

Animal.prototype.constructor = Animal
console.log(dog.constructor === Animal) //true

/*
我们可以随时为原型添加属性和方法，这将实时地反映到所有的实例对象中。
但是如果我们像上面的例子一样将原型整个重写，这将断开所有实例与原型对象的指向关系，
它们仍使用之前的原型。
*/

console.log(Animal.prototype.constructor == cat.constructor) //true

/*
由于原型对象的存在，我们也可以很方便地为原生对象的原型添加属性和方法

原型对象中存在属性值为对象或数组的属性时。我们在实例对象中进行的修改，也会同步到其他实例中。
原型对象使得每个实例的原型属性值都相同
*/

/*
结合以上观点，创建自定义类型的最常见方式是结合构造函数和原型创建
构造函数用于定义实例属性
原型用于定义共享的属性和方法
如下：
*/
function Human(name, age) {
  this.name = name
  this.age = age
}

Human.prototype = {
  constructor: Human,
  
  eat() {
    console.log('eat')
  }
}