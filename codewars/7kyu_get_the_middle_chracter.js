// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  const length = s.length
  
  if(length % 2 === 0) {
    const midLow = Math.floor(length / 2) - 1
    return s.charAt(midLow) + s.charAt(midLow + 1)
  } else {
    return s.charAt(length / 2)
  }
}