/*
讲解Document类型

document.documentElement 指向的是页面中的html元素

查找元素
document.getElementByTagName/Id/ClassName
后两者返回伪数组

文档写入
document.write(content)
content内可以是HTML代码，也可以是文本，支持解析标签，但不可以包括</script>
*/