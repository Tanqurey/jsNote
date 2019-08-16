/*
事件处理程序，就是onclick、onblur这些函数

在标签内直接绑定on事件=function...
默认参数--事件对象e

1.绑定事件的方法

1)ele.onwhat=function
解绑直接=null即可
2) ele.addEventListener/removeEventListener
接收参数：事件名，处理函数，事件流类型（true 捕获 false 冒泡)
只能用removeEventListener来移除，仅在处理函数是命名函数时才能移除成功
也就意味着添加匿名函数将不能被移除

3)ie专属

attach/detach('on事件名',处理函数)

*/

// 尝试书写绑定事件的兼容性代码


function bindFunction(ele, action, handler) {
  if (ele.addEventListen) {
    ele.addEventListen(action, handler)
  } else if (ele.attachEvent) {
    ele.attachEvent('on' + action, handler)
  } else {
    ele[action] = handler
  }
}