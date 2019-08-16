/*
websocket的目标是在一个单独的持久连接上提供全双工双向通信

http协议将升级为web Socket协议

http=>ws
https=>wss

1.API

要使用websocket，首先创建一个实例,并传入需要连接的URL

*/

let socket = new WebSocket('ws://www.example.com')
/*
必须传入绝对的URL
同源策略无效，可以打开任何站点的连接，是否进行通信取决于浏览器

实例化完成，浏览器马上尝试连接
相应的readystate
webSocket.OPENING 0 正在建立连接
.OPEN 已建立连接 1
.CLOSING 正在关闭连接 2
.CLOSE 已关闭连接 3

在上述的任何一个阶段，都可以调用
socket.close() 关闭连接

发送数据
websocket只能通过连接发送纯文本数据

socket.send('hello')
对于JSON对象，必须转为JSON字符串

接收数据
收到数据时会触发message事件

socket.onmessage=(e)=>{
  let data = e.data
  //同样，返回的数据也是字符串格式
}

其他事件
open 建立连接时触发
error 发生错误时触发，连接不能连续
close 连接关闭时触发

仅支持DOM0级的事件绑定方式，即on-=function
*/