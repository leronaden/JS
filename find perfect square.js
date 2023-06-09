/* 
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/


function findNextSquare(sq){
    var root1;
    var nextroot;
    if(Math.sqrt(sq)%1 ===0){
         root1=Math.sqrt(sq)
         nextroot=root1+1
    }else{
        return -1;
    }
    return nextroot*nextroot;
}

findNextSquare(625) 