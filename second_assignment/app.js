// Assignment# 02

// Task# 01
function additionFunction(additionNumber) {
  return function (number) {
    return number + additionNumber;
  };
}

const addFive = additionFunction(5);
const addTen = addFive(10);
console.log(addTen);

// Task# 02
function searchArray(arr, value) {
  if (arr.length === 0) {
    return false;
  }
  if (arr[0] === value) {
    return true;
  } else {
    return searchArray(arr.slice(1), value);
  }
}

// Task# 03

function addPara() {
  const text = document.getElementById("text-input").value; // get text from texfield

  const newParagraph = document.createElement("p"); // create new paragraph instance
  const textNode = document.createTextNode(text);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph); // add paragraph to body
}

// Task# 04

function addListItem() {
  const number = Math.round(Math.random() * 100000000);
  const list = document.getElementById("random-numbers-list");

  const newListItem = document.createElement("li");
  const texNode = document.createTextNode(number);
  newListItem.appendChild(texNode);

  list.appendChild(newListItem);
}

// Task# 05

function changeBgColor(ref, color) {
  ref.style.backgroundColor = color;
}
function run() {
  const p = document.querySelector("p");
  changeBgColor(p, "red");
}

// Task# 06

function saveObjectToLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

//Task# 07
function getObjetFromLocalStorage(key) {
  return localStorage.getItem(key);
}
