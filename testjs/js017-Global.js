/*
Global（全局）对象，是一个终极的兜底儿对象，意思是不属于其他对象的属性和方法最终都是

它的属性和方法

例如parseInt/isNaN等等

1.URI编码方法
对URI进行编码以便发送给服务器

encodeURI() 
是对整个URI进行编码，不包括已经属于URI的特殊编码

encodeURIComponent()
对其发现的所有非标准字符进行编码
更常使用，因为我们大多数时候是对查询字符串进行编码

相应的解码方法时：
decodeURI/decodeURIComponent


2.eval()
参数是所要执行的js代码

具有与执行环境相同的作用域链
但需要注意，eval内的代码不存在变量提升
严格模式下，eval将无法访问到外部的变量
*/