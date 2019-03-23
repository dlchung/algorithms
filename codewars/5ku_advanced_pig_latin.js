// https://www.codewars.com/kata/533c46b140aafec05b000d31

function translate(sentence) {
	//Convert the sentence to Pig Latin!
  // or should I say...
	//Onvertcay ethay entencesay otay Igpay Atinlay!
  console.log(sentence);
  
  var vowels = ["a", "e", "i", "o", "u"];
  var puncs = ["!", ".", "?"];
  var words = sentence.split(" ");
  
  var newWords = words.map(function(word) {
    var firstVowel = vowels.find(function(char) { return char === word[0] });
    if(firstVowel) {
      return word + "way";
    }
    
    var chars = word.split("");
    var preBuffer = new String;
    var subBuffer = new String;
    var puncBuffer = new String;
    var puncFound = new String;
    
    chars.some(function(char, i) {
      var found = vowels.find(function(vowel) { return char === vowel });
      puncFound = puncs.find(function(punc) { return char === punc });
      console.log(char);
      
      if(found) {
        preBuffer = word.slice(0, i);
        subBuffer = word.slice(i, word.length);
        return found;
      }
      
      if(puncFound) {
        puncBuffer = word.slice(i, word.length);
        console.log("found punctuation!");
      }
    });
    
    var newWord = subBuffer + preBuffer + "ay";
    
    return newWord.toLowerCase();
    
  });
  
  return newWords.join(" ");
};