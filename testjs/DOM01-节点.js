/*
1.文档节点(根节点):html标签

2.node
nodeType
标签1，属性2，文本3

nodeName:节点的名字
1：标签节点:大写的标签名字
2：属性节点：小写的属性名字
3：文本节点：#text

nodeValue:节点的值
标签节点：null
属性节点：属性值
文本节点：文本内容


2.节点关系
节点都有一个childNodes属性，保存的是nodeList伪数组。
firstChild/lastChild 第一个、最后一个节点
可通过.item(index)或[index]的方式来访问。
类似地，节点也有parentNode属性，指向文档树中的父节点

访问相邻节点：previousSibling/nextSibling

.hasChildNode()方法可以检测某一节点是否有子节点


3.操作节点
.appendChild(node)
向某节点追加一个子节点
注意，如果该节点已经存在childNodes的数组中
将会进行移动，而不会复制一个一模一样的节点。
后边的方法同理。

.insertBefore(newNode,refNode)
在指定节点前插入节点

.replaceChild(newNoe,oldNode)
用新节点替换指定旧节点，即复制并覆盖旧节点

.removeChild(node)
从dom树移除指定节点

*/