/* Make a function that can take any non-negative integer as a argument and return it with it's digits in descending order.*/

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }