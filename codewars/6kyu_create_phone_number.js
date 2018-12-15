// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){  
  const areaCode = numbers.slice(0,3).join("")
  const prefix = numbers.slice(3,6).join("")
  const lineNumber = numbers.slice(-4).join("")
  
  return (`(${areaCode}) ${prefix}-${lineNumber}`)
}