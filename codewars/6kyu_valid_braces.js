// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces){
  //TODO 
  
  const endBraces = []
//   const startBraces = []
//   let prevBrace
  const braceMap = { "(": ")", "{": "}", "[": "]" }
  
  
  console.log(braces)
  
  if(braces.length % 2 !== 0) {
    return false
  }
  
  for(const brace of braces) {
    console.log("endBraces", endBraces)
    if(braceMap[brace]) {
      endBraces.push(braceMap[brace])
    }
    
//     if(endBraces[0] === brace) {
// //       console.log(brace, endBraces[0])
//       const lastBrace = endBraces.shift()
// //       console.log("shift", lastBrace)
//     }
    if(endBraces[endBraces.length - 1] === brace) {
//       console.log(brace, endBraces[endBraces.length - 1])
      const lastBrace = endBraces.pop()
//       console.log("pop", lastBrace)
    }
  }
  
  if(endBraces.length > 0) {
    return false
  }
  
  console.log(endBraces)
  
  return true
}