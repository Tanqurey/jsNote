/*
try-catch语句
*/

try {
  //可能会引起错误的代码
} catch (err) {
  //发生错误后的处理
} finally {
  // 无论哪种情况下都会执行这里的代码
}

/*
抛出异常
throw
抛出错误时，必须throw指定一个值，没有要求，以下代码都是有效的
*/

throw '发生了错误'
throw 'error!'
throw new Error('sth went wrong')

/*
error事件
没有event对象
有error/url/line
分别是错误信息，错误所在url和行号

*/