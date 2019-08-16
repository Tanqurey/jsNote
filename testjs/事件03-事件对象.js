/*
DOM中的事件对象
包含着所有与事件有关的信息

常用属性或方法
1.eventPhase
事件当前处理的事件流阶段

2.preventDefault()
取消事件的默认行为。例如a链接的默认跳转

3.target
触发事件的真正目标

4.type
触发事件的类型

5.currentTarget
正在进行事件处理的元素

6.stopPropagation()
中止事件在Dom的传播


IE的事件对象
是要用window.event进行访问
但是在attachEvent里面也有一个事件对象e因此也可以直接使用这个e
cancelBubble 相当于 stopPropagation()
srcElement 相当于 target


*/

//兼容性代码
function getEvent(e) {

  return e ? e : window.event

}