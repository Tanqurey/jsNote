/*
讲解事件委托

为了避免事件处理程序过多以及动态追加事件的需要

利用事件冒泡原理进行事件委托


*/

// dom结构
/*
<ul>
<li>123</li>
</ul>
*/

//设ul为ele,举例如下

ele.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red'
})