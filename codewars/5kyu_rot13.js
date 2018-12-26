// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message){
  let newMessage = new String

  // Iterate through string
  for(i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i)
    
    // If character is letter, increment charCode
    if(message[i].match(/[a-z]/gi)) {
      charCode += 13
    }
    
    // Use different charcode range depending on casing
    if(message[i] === message[i].toUpperCase()) {
      if(charCode > 90) {
        charCode = (charCode - 26)
      }
    } else {
      if(charCode > 122) {
        charCode = (charCode - 26)
      }
    }
    
    newMessage += String.fromCharCode(charCode)
  }
  
  return newMessage
}