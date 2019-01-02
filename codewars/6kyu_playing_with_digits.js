// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p){
  // ...
  let k = -1
  let total = 0
  
//   console.log(n, p)
  
  for(let i = 0; i < n.toString().length; i++) {
    const num = n.toString().charAt(i)
//     console.log("num", num)
    total += Math.pow(num, p+i)
  }
  
//   console.log(total)
  if(total / n >= 1 && total % n === 0) {
    k = total / n
  }
  
  return k
}