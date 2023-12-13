// your task  is to unite a function that takes a string and returns an array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    let arr = str.split (" ");
    let outcome = [];
    for (let i = 0; i < arr.length; i++) {
        outcome.push(arr[i] + " " + arr[i].length);
    }
    return outcome;
}