// console.log("hello world!");
var el;
var numbers = [12,26,43,100];
var numbers2 = [1,1,1,1,1];
var one_1 = [1];
var one_2 = [1];

console.log(library.math.sum_list(numbers));
console.log(library.math.sum_list(numbers2));

// to call unique

console.assert(
  library.array.uniq(numbers2) == [1], "library.array.uniq() should return [1]"
  );

function assert(expression1,expression2){
  // terrible assertion function
  return expression1 == expression2;
}

window.onload = function(){

  console.log("loaded!");

  // returns element
  el = document.getElementById('my_heading')
  console.log(el.innerHTML);

}