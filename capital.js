const capitalizeWords = s => {
    if (s.length ===0){
      return "";
    }
   
    let words = s.split("");
    
    for (let i = 0; i < words.length; i++){
      let word = words[i];
      if (word.length >0){
        let firstChar = word.charAt(0);
        let restOfWord = word.slice(1);
        words[i]= firstChar.toUpperCase()+restOfWord.toLowerCase();
        
      }
    }
    
    
    return words.join("");
  };