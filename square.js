const findNextSquare = num => {
    const sqrt = Math.sqrt(num);
    
    if (sqrt !== Math.ceil (sqrt) ){
      
      return -1;
    }
    
    const nextNum = sqrt + 1;
    return nextNum * nextNum;
  };
  console.log(findNextSquare(140));