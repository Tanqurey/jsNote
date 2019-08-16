/*1.讲解动态脚本

如何创建动态脚本？

1)方法1：创建的script动态引入外部Js文件
*/

function loadScript(jsUrl) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)

}

/*
方法2：在script标签中写入代码

*/

function loadScriptString(jsCode) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  try {
    script.appendChild(document.createTextNode(code))
  } catch (err) {
    script.text = code // 兼容IE
  }

  document.body.appendChild(script)
}

//这种方法和eval类似

/*
讲解动态样式
link元素用于引入外部样式
style书写嵌入的样式


*/

let link = document.createElement('link')
link.rel = "stylesheet"
link.type = 'text/css'
link.href = 'url'
document.getElementsByTagName('head')[0].appendChild(link)

let link2 = document.createElement('link')
link2.type = 'text/css'
link2.appendChild(document.createTextNode('someCode'))
document.getElementsByTagName('head')[0].appendChild(link2)

/*
NodeList对象当文档结构发生变化时得到更新，保持着最新，最准确的信息。
每次访问都会进行一次基于文档的查询，因此考虑尽量少访问
*/