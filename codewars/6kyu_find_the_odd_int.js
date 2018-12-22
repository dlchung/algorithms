// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const counting = {}
  
  A.forEach(num => {
    if(!counting[num]) {
      counting[num] = 0
    }
    counting[num] += 1
  })
  
  for(const key in counting) {
    if(counting[key] % 2 === 1) {
      return parseInt(key, 10)
    }
  }
}