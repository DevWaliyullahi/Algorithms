//your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

function breakChocolate(n, m) {
    if (n <=0|| m <=0) {
        return 0;
    } else {
        return (n*m)-1;
    }
}