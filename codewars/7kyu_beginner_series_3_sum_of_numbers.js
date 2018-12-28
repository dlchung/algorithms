// https://www.codewars.com/kata/55f2b110f61eb01779000053

function GetSum( a,b )
{
  let sum = 0
  if(a > b) {
    [a, b] = [b, a]
  }
  for(i = a; a <= b; a++) {
    sum += a
  }
  return sum
}