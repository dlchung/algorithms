// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
  const numArray = num.toString().split("")
  const newNum = numArray.map(number => {
    return Math.pow(parseInt(number, 10), 2)
  }).join("")
  return parseInt(newNum, 10)
}