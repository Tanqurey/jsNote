/*
默认情况下，图像，连接和文本是可以拖动的
不必额外编写代码
文本只有在选中的时候才能被拖动

但是我们为其他元素添加draggable=true
就可以实现拖动了

我们拖动元素所触发的事件

dragstrat 拖动开始时触发
drag 拖动的全程触发
dragend 释放鼠标，拖动结束后触发

被进入的元素所触发的事件
dragnenter 被拖动的元素进入到本元素后触发
dragover 被拖动的元素位于本元素内触发，持续触发
drop 释放元素到本元素内时触发
dragLeave 元素离开本元素时触发


全局拖拽时，用document触发以上事件
e.target 的值即为当前被拖拽的元素
通过事件捕获来捕捉拖拽元素
在e内存在e.dataTransfer
可通过事件源对象的dataTransfer来实现数据的存储与获取
e.dataTransfer.setData(format,data);
format:数据类型，text/html text/url-list
data：数据,一般是字符串值
通过e.dataTransfer.setData存储的数据只能在ondrop事件内获取
通过e.dataTransfer.getData(format)获取
浏览器默认阻止ondrop事件
在html5中,遇到ondrop()事件无效，可能原因是浏览器的默认操作，需执行事件阻止系统的默认操作。

obj.ondragover = function(e){

   e.preventDefault();

}

obj.ondrop = function(e){

 e.preventDefault();

}

拖动时我们可以在event对象的dataTransfer对象中传递数据



主要方法时setData(name,value)和getData(name)
*/