/*
操作样式
任何支持style特性的HTML元素在JS中都有对应的style属性
在style特性中指定的任何CSS都将表现为style的相应属性。全部转换为驼峰命名法
使用单位时用引号包裹

注意：如果没有为元素设置style属性而直接获取了style属性的值，返回的style是不准确的


1.DOM样式属性和方法
1) cssText 可以访问到style特性中的CSS代码字符串
2) setProperty(name,val,priority)
3) removeProperty() 移除相关属性
*/