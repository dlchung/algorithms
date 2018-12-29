// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {  
  const sorted = numbers.sort((a, b) => {
    return a - b
  })
  
  return sorted[0] + sorted[1]
};