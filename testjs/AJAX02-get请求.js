/*

get请求是最常用的请求类型，最常用与向服务器查询某些信息
对XHR而言，位于传入open方法的URL末尾的查询字符串必须进行URI编码，
因为这是要加到URL后面的

可以利用encodeURIComponent来进行查询字段的键值编码

*/

encodeURIComponent(name) + '=' + encodeURIComponent(value)

/*

*/