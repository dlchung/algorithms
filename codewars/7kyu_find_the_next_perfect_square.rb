# https://www.codewars.com/kata/56269eb78ad2e4ced1000013

def find_next_square(sq)
  # Return the next square if sq is a perfect square, -1 otherwise
  result = Math.sqrt(sq)
  result % 1 != 0 ? (return -1) : (result + 1) ** 2
end