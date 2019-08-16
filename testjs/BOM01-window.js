/*
window是BOM的核心对象，表示浏览器的一个实例。
它既是js访问浏览器的一个窗口，又是ES规定的Global对象

1.全局作用域
所有在全局作用域声明的变量和函数都是window的属性和方法
尝试访问未声明的变量将报错，但是加上window后不会报错，返回undefined
这相当与一次属性查询

2.窗口位置的获取和设置
相对于屏幕的。
使用以下兼容性代码可以跨浏览器获取窗口位置

*/

let leftPos = typeof window.screenLeft == 'number' ? window.screenLeft : window.screenX
let topPos = typeof window.screenTop == 'number' ? window.screenLeft : window.screeY

/*
3.窗口大小
*/
window.resizeTo(100,100) //设置浏览器新高度新宽度
window.resizeBy(50,50)// 和原窗口的视口差

/*
4.导航与打开窗口

window.open(url,窗口或框架名,特性字符串,是否打开新的窗口)
*/


