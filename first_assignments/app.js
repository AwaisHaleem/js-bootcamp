// Task No.01

const firstNumber = +prompt("Write your First Number");
const secondNumber = +prompt("Write your Second Number");

if (firstNumber > secondNumber) {
  console.log(firstNumber + " is larger.");
} else if (firstNumber < secondNumber) {
  console.log(secondNumber + " is larger.");
} else {
  console.log("Both numbers are equal.");
}

// Task No.02

const number = +prompt("Write your number");

if (number >= 0) {
  alert("The sign is +");
} else {
  alert("The sign is -");
}

// Task No.03

const firstNumber3 = +prompt("Write First Number");
const secondNumber3 = +prompt("Write Second Number");
const thirdNumber = +prompt("Write Third Number");
const fourthNumber = +prompt("Write Fourth Number");
const fifthNumber = +prompt("Write Fifth Number");

let maxNumber = firstNumber;

if (secondNumber > maxNumber) {
  maxNumber = secondNumber;
}
if (thirdNumber > maxNumber) {
  maxNumber = thirdNumber;
}
if (fourthNumber > maxNumber) {
  maxNumber = fourthNumber;
}
if (fifthNumber > maxNumber) {
  maxNumber = fifthNumber;
}

console.log("The larger number is " + maxNumber);

// Task No.04

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Task No.05

const average = +prompt("Write your Average");

if (average < 60) {
  console.log("F grade");
} else if (average < 70) {
  console.log("D grade");
} else if (average < 80) {
  console.log("C grade");
} else if (average < 90) {
  console.log("B grade");
} else if (average < 100) {
  console.log("A grade");
}

// Task No.06

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz " + i);
  } else if (i % 3 === 0) {
    console.log("Fizz " + i);
  } else if (i % 5 === 0) {
    console.log("Buzz " + i);
  }
}

// Task No.07

for (let i = 1; i <= 5; i++) {
  let starRow = "";
  for (let j = 1; j <= i; j++) {
    starRow = starRow + "* ";
  }
  console.log(starRow);
  starRow = "";
}
