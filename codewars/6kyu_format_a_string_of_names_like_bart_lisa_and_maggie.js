// https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(names){
  let nameList = ""
  
  for(let i = 0; i < names.length; i++) {
    nameList += names[i].name
    if(names.length - i === 2) {
      nameList += " & "
    } 
    if(names.length - i > 2) {
      nameList += ", "
    }
  }  
  return nameList
}