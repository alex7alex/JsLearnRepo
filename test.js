// //Lesson 1, Task 1
// let user_name = +prompt("Please input your name");
// console.log("Hello, "+user_name+ "! How are you?");


// //Lesson 2, Task 1
//  alert(((+prompt("Please input degree")) * (9/5) + 32));

//  //Lesson 3, Task 1
//  let fingerNumber = +prompt("Please input a finger number");
//  if (fingerNumber === 1){
//     alert("The 1 finger is Thumb");
//  }
//  else if (fingerNumber === 2){
//     alert("The 2 finger is Index finger");
//  }
//  else if (fingerNumber === 3){
//     alert("The 3 finger is Middle finger");
//  }
//  else if (fingerNumber === 4){
//     alert("The 4 finger is Ring finger");
//  }
//  else if (fingerNumber === 5){
//     alert("The 5 finger is Little finger");
//  }
//  else alert ("Incorrect number")

//Lesson 4, Task 1
/*Визначити, чи є рік високосним, чи ні. Рік буде високосним, якщо він кратний 400 або він одночасно кратний 4 і не кратний 100.
  Рік вводиться через prompt, результат - в алерт.*/

let year = +prompt("Please enter a year");
if (year % 400 == 0 || (year % 4 == 0 && !(year % 100 == 0))) {
    alert('Leap year');
}
else alert('Non-leap year')

//Lesson 5, Task 1
//Вирахувати факторіал числа за допомогою for або while. Число вводиться з промпту, число знаходиться в межах від 1 до 50.
let step_validator = true
while (step_validator) {
    let enterDigit = +prompt("Enter your digit?");
    let factorial = 1;
    if (enterDigit > 0 && enterDigit <= 50) {
        while (enterDigit > 1) {
            factorial *= enterDigit;
            enterDigit--
        }
        alert(`Factroial is ${factorial}`)
    } else {
        alert("Please enter a number from 1 to 50");
        continue;
    }
    step_validator = false;
}
