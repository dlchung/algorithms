// https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

function solution(number){
  if(number <= 0) { return 0 }
  let sum = 0
  
  for(i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}