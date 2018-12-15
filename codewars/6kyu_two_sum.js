// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  for(i = 0; i < numbers.length; i++) {
    const result = target - numbers[i]
    for(j = i + 1; j < numbers.length; j++) {
      if(result === numbers[j]) {
        return [i, j]
      }
    }
  }
}