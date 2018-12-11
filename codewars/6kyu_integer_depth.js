// https://www.codewars.com/kata/59b401e24f98a813f9000026

function computeDepth (x){
  let multiple = 0
  let value = new String
  let valueArr = new Array
  while(valueArr.length < 10) {
    multiple++
    value += (x * multiple).toString()
    valueArr = [...new Set(value.split(""))]
  }
  return multiple
}