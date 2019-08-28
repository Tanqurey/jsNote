function mySetInterval(interval, fn) {
  let times = 0
  const args = Array.prototype.slice.call(arguments, 2)
  const begin = function (interval, fn) {
    setTimeout(function () {
      fn(...args)
      console.log(++times)
      begin(interval, fn, ...args)
    }, interval)
  }
  begin(interval, fn)
}

let name1 = '我是'
let name2 = 'cc'


mySetInterval(500, (name1,name2) => {
  console.log(name1+name2)
}, name1,name2)