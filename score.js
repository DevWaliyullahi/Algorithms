// An example valid array would be [3,2,5,1,3,4]. It has the integers 1 through 5 and 3 is duplicated. [1,2,4,5,5] would not be valid as it is missing 3. You should return the duplicate value as a single integer.

function findDupicate(arr){
    let sortedArr = arr.sort();
    let duplicate = 0;
    for (let i = 0; i < sortedArr.length; i++){
      if (sortedArr[i] === sortedArr[i+1]){
        duplicate = sortedArr[i];
      }
    }
    return duplicate;
}

console.log(findDupicate([3,2,5,1,5,4]));