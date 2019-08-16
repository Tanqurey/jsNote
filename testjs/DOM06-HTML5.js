/*
讲解HTML5的一些新特性
1.getElementByClassName方法
返回包含有指定类名的所有元素

2.classList
返回元素类伪数组
.add()
.contains() // 检测是否有指定类名
.remove()
.toggle() //切换指定的类名

3. 自定义数据属性
HTML5 规定可以为元素添加非标准的属性，但要添加data-前缀。目的是为元素提供与渲染无关的信息，或者提供语义信息

.innerHTML:返回或设置子节点元素文字，注释

IE和Opera会把返回的标签名置换为大写

大多数浏览器中innerHTML不能添加script标签，无法执行

4.children
是只包含子元素的伪数组

5.innerText
未被收录到html5中，操作元素中所包含的所有文本内容，包括文档树中的文本。
会对原来的节点发生替换
*/