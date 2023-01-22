
// Function sequence

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();

// Sequence Control

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);

// Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }
  
//   myCalculator(5, 5)

// Callback function 

function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1,num2,myCallBack){
    let sum = num1 + num2;
    myCallBack(sum);
}

myCalculator(10,12,myDisplayer);