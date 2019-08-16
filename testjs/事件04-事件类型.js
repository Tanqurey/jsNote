/*
讲解常见事件类型

1.UI事件
load
当页面完全加载后触发(包括所有图像，js，外联样式)
scroll
元素发生滚动时触发

2.焦点事件
blur：元素失焦时触发
focus:元素获得焦点时触发

3.鼠标与滚轮事件
click:单击事件
mousemove：鼠标在元素上移动时重复触发
mouseleave 鼠标从元素内移动到元素外触发，子元素不算是外部元素
mouseout:鼠标位于某元素上方，移出后触发，这里的子元素属于外部元素，会触发本事件
mouseover 鼠标首次移入元素边界时触发

事件对象获取鼠标相关属性
clientX/clientY
是鼠标位置在视口内的坐标
pageX/pageY 
是鼠标在页面位置的坐标
screenX/screenY
是鼠标距屏幕边界的坐标

4.键盘与文本事件
keydown 按下任意键后触发
keypress 按下任意键触发，如果不松开，重复触发
keyup 用户按键释放后触发

event.keyCode 可以获取按下的键盘编码

5.触摸和手势事件
1)touchstart 手指触摸屏幕时触发
2)touchmove 手指在屏幕上连续滑动才能触发
3)touchcancel 取消触摸时触发
*/