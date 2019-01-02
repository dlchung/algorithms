// https://www.codewars.com/kata/53368a47e38700bd8300030d

// function list(names){
//   let nameList = ""
  
//   for(let i = 0; i < names.length; i++) {
//     nameList += names[i].name
//     if(names.length - i === 2) {
//       nameList += " & "
//     } 
//     if(names.length - i > 2) {
//       nameList += ", "
//     }
//   }  
//   return nameList
// }

function list(names){
  //your code here
  let phrase = ""
  names.forEach((name, index) => {
    phrase += name.name
    index >= 0 && index < names.length - 2 ? phrase += ", " : null
    index === names.length - 2 ? phrase += " & " : null
  })
  
  return phrase
}