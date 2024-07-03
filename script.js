/*
let num = prompt("Enter a number:");

if (num % 5 === 0) {
  console.log("Correct Number");
} else {
  console.log("Wrong Number");
}

*/

/*
let num = prompt("Enter a mark");

if (num >= 80 && num <= 100) {
  console.log("Your grade is A");
} else if (num >= 70 && num <= 89) {
  console.log("Your grade is B");
} else if (num >= 60 && num <= 69) {
  console.log("Your grade is B");
} else if (num >= 50 && num <= 59) {
  console.log("Your grade is B");
} else {
  console.log("You grade is F");
}
*/

/*LOOP 1-5
for (let i = 1; i <= 5; i++) {
  console.log("Rahul the ultimate BOSS");
}
*/
/*
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum=", sum);
*/
//for loops

/*
let str = "JAVASCRIPT";

let size = 0;
for (let i of str) {
  console.log("i=", i);
  size++;
}
console.log("String Size=", size);
*/
/*
let i = prompt("Enter number:");
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("ODD Number");
  }
}
*/

/*
//let i = prompt("Enter number:");
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log("num=", i);
  }
}
*/

/*
let gameNum = 25;
let userNum = prompt("Guess the game number:");
while (userNum != gameNum) {
  userNum = prompt("You try again");
}
console.log("Congratulation!");
*/
/*
let username = prompt("Fullname:");
//console.log(username);
console.log(`@${username}${username.length}`);
*/
/*
let Marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let value of Marks) {
  sum = sum + value;
}
console.log(sum / Marks.length);

*/
/*
let heros = ["ironman", "thor", "Vhbhjbjb", "jbjnjn"];
for (let i = 0; i < heros.length; i++) {
  console.log(heros[i]);
}
*/
/*
let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items);
*/

/*
Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(Companies);
console.log(Companies.splice(0, 1, Bloom));
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(2, 2, 101, 102);
console.log(arr);
*/
/*
//Delete Element
Companies.splice(0, 1);
console.log(Companies);
*/

/*
//B.Adding
Companies.splice(2, 1, "Ola");
console.log(Companies);
*/

//Companies.splice(6, 0, "Amazon");
//console.log(Companies);

/*
let Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
*/
/*
Companies.shift(0);
console.log(Companies);
*/
/*
Companies.push("Amazon");
console.log(Companies);
*/

/*
function SUM(a, b) {
  s = a + b;
  return s;
}
let val = SUM(3, 4);
console.log(val);
*/
/*
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (char === "a" || char === "e" || char === "i") {
      count++;
    }
  }

  return count;
}
*/
/*
let arr = ["Pune", "delhi", "mumbai"];

arr.forEach((val) => {
  console.log(val);
});
*/
/*
let numbers = [2, 3, 5, 7, 11, 19];
numbers.forEach((val) => {
  console.log(val * val);
});
*/
/*
let Marks = [87, 93, 64, 99, 94, 96, 97, 86, 78, 69];

let greaterArr = Marks.filter((val) => {
  return val > 90;
});
console.log(greaterArr);
*/

/*
let marks = [87, 93, 64, 99, 86];

let greaterArr = marks.map((val) => {
  return val > 90;
});
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);
*/

/*
let n = prompt("Enter a Number:");

let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
});
console.log("SUM=", sum);

let factorial = arr.reduce((res, curr) => {
  return res * curr;
});
console.log("factorial=", factorial);
*/
/*
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText + "from Apna College student";
*/
/*
let divs = document.querySelectorAll(".box");
console.log(divs);
*/
/*
divs[0].innerHTML = "New uniqe value 1";
divs[1].innerHTML = "New uniqe value 2";
divs[2].innerHTML = "New uniqe value 3";
*/
/*
let idx = 1;
for (div of divs) {
  div.innerText = `new unique value ${idx}`;
  idx++;
}
*/
/*
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

newBtn.style.color = "White";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);
*/

/*
let modeBtn = document.querySelector("#mode");
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "White";
  }
  console.log(currMode);
});
*/

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});
