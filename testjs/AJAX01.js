/*
返回一个XHR对象


*/

function getXHR() {
  return XMLHttpRequest == undefined ? new ActiveXObject('Microsoft') : new XMLHttpRequest()
}

/*
xhr的成员方法

open() 用于启动一个请求
接收3个参数 请求方法 请求地址 是否发起异步请求

send() 进行请求的发送
传入的参数就是请求的数据，如果为空，则必须传入null


响应的相关属性如下
responseText 作为响应主题被返回的文本
status 相应的HTTP状态
statusText HTTP状态传的声明

readyState 请求活动阶段

0 未初始化，尚未调用open方法
1 启动 已经调用open方法，但还没有调用send方法
2 发送 已经调用send方法，但尚未接收到响应
3 接收 已经接收到部分的响应数据
4 完成 已经接收到全部的响应数据

阶段变化时，触发readyStatechange事件

HTTP头部信息
发送HTTP请求时，还会发送以下的头部信息

Accept 浏览器能处理能内容类型
Host 发出请求的页面所在域
Cookie 当前页面设置的任何Cookie
Referer 发出请求的页面的URI

自定义请求头字段
必须在open方法之后send方法之前
xhr.sendRequestHeader(name，val)

接收响应头
.getResponseHeader(name)
获取所有响应头
.getAllResponseHeader()


*/