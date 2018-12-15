# https://www.codewars.com/kata/563f037412e5ada593000114

def calculate_years(principal, interest, tax, desired)
  years = 0
  until principal >= desired
    total_interest = principal * interest
    total_tax = total_interest * tax
    principal += (total_interest - total_tax)
    years += 1
  end
  years
end