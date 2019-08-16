/*
讲解表单的基础知识

form属性：
action:请求的URL
enctype:请求编码类型
method：请求方式

提交表单：
input元素type为submit类型可以进行提交
button元素type为submit类型也可以进行提交
提交前会执行submit函数，可以用于表单验证
处理函数内使用e.preventDefault可以用于取消提交

表单重置
input、type元素type为reset可以重置表单

表单字段
每一个表单元素都有一个elements属性
是表单中所有字段的集合，是一个伪数组

可以通过以下方式来访问：

elements[index]
elements['字段的name'] // 发现多个同名字段，返回nodeList

字段属性
disabled 是否禁用
name 当前字段名称
type 字段类型
value 字段的值

字段方法
focus() 将浏览器的焦点设置到当前字段上
blur() 将浏览器的焦点从当前字段去除

字段事件
blur/focus 当前字段失去/获取焦点触发
change 失去焦点并且值改变时触发


*/