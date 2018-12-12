// https://www.codewars.com/kata/56baeae7022c16dd7400086e

function phone(strng, num) {
  // your code
  const lines = strng.split("\n")
  const phoneRegex = /\+[0-9-]+/
  const nameRegex = /<.+?>/
    
  const record = lines.filter((line) => {
    return line.includes(num)
  })
  
//   console.log(record, record.length)
  if(!record[0]) {
    return "Error => Not found: " + num
  } else if(record.length > 1) {
    return "Error => Too many people: " + num
  }
  
//   const recordObj = record[0].replace(/(<.+?>)(\+[0-9-]+)/, function(match, p1, p2) {
//     console.log("hello", p1, p2)
//     return { name: p1, phone: p2 }
//   })
  
//   console.log("recordObj", recordObj)
  
  const name = record[0].match(nameRegex)[0]
  const phone = record[0].match(phoneRegex)[0]
  const address = record[0].replace(name, "")
    .replace(phone, "")
    .replace(/[*;:,!?\/$_]/g, " ")
    .replace(/\s+/g, " ")
  
  
//   console.log(name, phone, address)
  return `Phone => ${phone.replace("+", "")}, Name => ${name.match(/[^<>]+/)[0]}, Address => ${address.trim()}`
}