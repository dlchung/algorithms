// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  // your code
  const letterArray = (s1 + s2).split("").sort()
  
  const result = letterArray.filter((letter, index) => {
    return letter !== letterArray[index - 1]
  })
  
  return result.join("")
}

// Other solution

// Using Array spread operator on a Set converts the set into an Array
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')