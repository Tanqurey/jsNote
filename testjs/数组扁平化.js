function flat(originArr) {
  let res = []
  const makeFlat = function (arr) {
    for(let val of arr.values()){
      if(Array.isArray(val)){
        makeFlat(val)
      }else{
        res.push(val)
      }
    }
  }
  makeFlat(originArr)
  return res
}

let test = [[1,2,3],[3,4,5],[6,7],2,[12,3,[5,3,[2]]]]
console.log(flat(test))