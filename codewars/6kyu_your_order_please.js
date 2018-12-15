// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
  return words.split(" ").sort((a, b) => {    
    return a.match(/[0-9]/)[0] - b.match(/[0-9]/)[0]
  }).join(" ")
}