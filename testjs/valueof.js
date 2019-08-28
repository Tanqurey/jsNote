// valueOf

let obj = {
  name: 'cc'
}

console.log(obj < 9) // false

obj.valueOf = function () {
  return 8
}

console.log(obj < 9) // true
console.log(+obj) // 8

let arr = [1, 2, 3, 4]

console.log(-arr) // NaN

arr.valueOf = function () {
  return 4
}

