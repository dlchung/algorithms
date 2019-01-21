# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

def find_short(s):
    # your code here
    last = ""
    
    for word in s.split():
        if len(word) < len(last) or last == "":
            last = word
    
    return len(last) # l: shortest word length