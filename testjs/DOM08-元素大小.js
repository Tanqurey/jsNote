/*
1.偏移量
元素在屏幕上占据的所有可见空间。
包括内容，内边距，滚动条，边框

offsetHeight:元素在垂直方向上占用的空间大小。包括元素内容的可见高度，水平滚动条高度以及上下边框
offsetLeft:元素在水平方向空间占据的大小。元素的可见宽度，垂直滚动条，左右边框

offsetTop/Left: 上边距/左边距
上边边距的界定是根据offsetParent来界定的，不一定是直接的父级元素
在页面任一元素的offsetLeft或offsetTop总是跟距离自
己最近的有position属性的元素定位，
取其left值和top值。如果没有，就根据根节点body定位，然后获取其left值或top值。

均为只读属性

2.可视区大小
元素内容及其相应方向上内边距大小,不包括滚动条
clientHeight/clientWidth

只读属性
3.滚动大小
包含滚动内容的元素大小

scrollHeight:不存在滚动条的情况下内容的总高度
scrollWidth:不存在滚动条的情况下内容的总宽度

通过设置以下两个属性可以改变元素的滚动位置
1.scrollLeft 被折叠的左侧宽度
2.scrollTop 被折叠的上面宽度
这两个属性可以设置元素的滚动状态，不是只读的。

在不包含滚动成分时client和scroll是否相同呢
火狐两者是相同的
欧朋，safari，谷歌：
scroll是视口大小，client是文档区域大小
ie则相反

style.left 属性设置定位元素左外边距边界与其包含块左边界之间的偏移。


*/