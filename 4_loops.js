//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* If Statement
//* ===============================

//? If Else:  The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? Let check the temperature
// var temperature = 25;
// if (temperature > 30) {
//   console.log("lets go to beach");
// } else {
//   console.log("tv dekhte hai yr");
// }

//? We can also use an else if clause to check additional conditions:
// var temperature = 15;
// if (temperature >= 30) {
//   console.log("lets go to beach");
// } else if (temperature >= 20 && temperature < 30) {
//   console.log("tv dekhte hai yr");
// } else {
//   console.log("kambhal oodho so jao");
// }

//* ===============================
//* Interview Question
//* ===============================

//! Requirements:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions

// Assume the user's age, citizenship status, and registration status as inputs
// let userAge = 19;
// let isCitizen = true; // Assume true for citizen, false for non-citizen
// let isRegistered = true; // Assume false for not registered, true for registered
// //! Check eligibility using if...else statements with multiple conditions

// if (userAge >= 18) {
//   if (isCitizen) {
//     if (isRegistered) {
//       console.log("You are eligible to vote");
//     } else {
//       console.log("You are not eligible due to registration status");
//     }
//   } else {
//     console.log("you are not eligible due to citizenship status");
//   }
// } else {
//   console.log("You are not eligible to vote (Younger)");
// }

//* ===============================
//* Interview Questions
//* ===============================
//! 1: Write a program to check if a number is even or odd.
var num = "7";
if (num % 2 === 0) {
  console.log("Num is even");
} else {
  console.log("Num is odd");
}
