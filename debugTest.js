function test(){
    for (i = 0; i < 5; i++) {
      Logger.log("The logger number is " + i);
      console.log("The number is " + i);
      }   
    }
const discountPercentage = 15;
    function mytry(){
      test();
      let currentDiscount=discountPercentage;
      let cost = document.getElementById("vacation_cost").value;
      let discount=calculateDiscount(cost, currentDiscount);
    }
function calculateDiscount(cost, currentDiscount) {
  return cost * currentDiscount;
}

function countdown(value) {
  while (value>=0) {
    console.log(value);
    value--;
  }
}

let address = '101 Main St';
console.log('File: + debugTest.js');
console.log('address = ' + address);

