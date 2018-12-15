// https://www.codewars.com/kata/556b85b433fb5e899200003f

function mixedFraction(s){
  const sArr = s.replace(/-/g, "").split("/")
  const int = Math.floor(sArr[0] / sArr[1])
  const rem = sArr[0] % sArr[1]
  let frac = `${rem}/${sArr[1]}`
  let positive = ""
  
  // If denominator is 0, throw ZeroDivisionError
  if(sArr[1] === "0") {
    throw new Error('ZeroDivisionError')
  }
  
  // If numerator is 0, return 0
  if(sArr[0] === "0") {
    return "0"
  }
  
  // Will final value be + or -
  if(s.match(/-/g)) {
    positive = s.match(/-/g).length % 2 === 0 ? "" : "-"
  }
  
  if(rem > 0) {
    for(i = sArr[1]; i > 0; i--) { // Find highest value to divide into denominator
      if(rem % i === 0 && sArr[1] % i === 0) {
        frac = `${rem / i}/${sArr[1] / i}`
        break
      }
    }
    
    return int > 0 ? `${positive}${int} ${frac}` : `${positive}${frac}`
  } else {
    return `${positive}${int}`
  }
  
}