// slecting inputEl to display user inpur
let inputEl = document.getElementById("input-el");

//taking input from user
let inputNumber = window.prompt("Enter your Number: ");

//it will show user input to our inputEl
inputEl.textContent = inputNumber;

// another varrible that will slect 1st peragraph conver-lenth
let convertL = document.getElementById("convert-l");

//   changing convert-l data acording to user input
convertL.textContent =
  inputNumber +
  " " +
  "meters" +
  " = " +
  Math.round(inputNumber * 3.28) +
  "feet" +
  "|" +
  inputNumber +
  " " +
  "feet" +
  " = " +
  inputNumber * 0.304 +
  "meters";
// 2nd output
let convertV = document.getElementById("convert-v");
convertV.textContent =
  inputNumber +
  " " +
  "litter" +
  " = " +
  Math.round(inputNumber * 0.264) +
  "gallon" +
  "|" +
  inputNumber +
  " " +
  "gallon" +
  " = " +
  inputNumber * 3.785 +
  "litter";
// 3rd output
let convertM = document.getElementById("convert-m");
convertM.textContent =
  inputNumber +
  " " +
  "Kg" +
  " = " +
  Math.round(inputNumber * 2.204) +
  "pound" +
  "|" +
  inputNumber +
  " " +
  "pound" +
  " = " +
  inputNumber * 0.453 +
  "Kg";
