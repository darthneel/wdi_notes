var args = process.argv


function solve(num1, num2, operation) {

  var int1 = parseInt(num1);
  var int2 = parseInt(num2);

  if (operation == "plus") {
    return int1 + int2;
  } else if (operation == "minus") {
    return int1 - int2;
  }
  
}

console.log( solve(args[2], args[4], args[3]) );