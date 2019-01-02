# https://www.codewars.com/kata/514b92a657cdc65150000006

# def solution(number)
#   # put your solution here
#   sum = 0
#   while number > 0
#     number -= 1
#     if number % 3 == 0 || number % 5 == 0
#       sum += number
#     end
#   end
#   sum
# end

def solution(number)
  # put your solution here
  (1...number).select { |num| num % 3 == 0 || num % 5 == 0 }.sum
end