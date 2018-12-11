# https://www.codewars.com/kata/514b92a657cdc65150000006

def solution(number)
  # put your solution here
  (1...number).select { |num| num % 3 == 0 || num % 5 == 0 }.sum
 end