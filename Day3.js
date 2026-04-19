// ================= LEVEL 1 =================

// Arrays
let emptyArray = [];
let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.length);

console.log(numbers[0]);
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(numbers[numbers.length - 1]);

let mixedDataTypes = ["Kamal", 25, true, null, undefined, { country: "SL" }];
console.log(mixedDataTypes.length);

// ================= IT COMPANIES =================
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);
console.log(itCompanies.length);

console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

for (let company of itCompanies) {
  console.log(company);
}

for (let company of itCompanies) {
  console.log(company.toUpperCase());
}

console.log(itCompanies.join(", ") + " are big IT companies.");

let check = "Google";

if (itCompanies.includes(check)) {
  console.log(check);
} else {
  console.log("Company not found");
}

for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === "o") count++;
  }
  if (count > 1) console.log(company);
}

itCompanies.sort();
itCompanies.reverse();

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));

let mid = Math.floor(itCompanies.length / 2);
console.log(itCompanies.slice(mid, mid + 1));

itCompanies.shift();
itCompanies.pop();

itCompanies.splice(mid, 1);
itCompanies.splice(0);

// ================= TEXT TO ARRAY =================
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.replace(/[.,]/g, "").split(" ");
console.log(words);
console.log(words.length);

// ================= SHOPPING CART =================
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");
if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");

shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

// ================= COUNTRIES =================
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

// ================= WEB TECHS =================
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
}

// ================= FULL STACK =================
const frontEnd = ['HTML','CSS','JS','React','Redux'];
const backEnd = ['Node','Express','MongoDB'];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// ================= AGES =================
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);

let min = ages[0];
let max = ages[ages.length - 1];

let midAge = Math.floor(ages.length / 2);
let median;

if (ages.length % 2 === 0) {
  median = (ages[midAge - 1] + ages[midAge]) / 2;
} else {
  median = ages[midAge];
}

let sum = ages.reduce((a, b) => a + b, 0);
let avg = sum / ages.length;

let range = max - min;

console.log(min, max, median, avg, range);

// ================= LOOPS =================
for (let i = 0; i <= 10; i++) console.log(i);

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Even
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// Odd
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

// Prime
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) isPrime = false;
  }
  if (isPrime) console.log(i);
}

// Sum of numbers
let total = 0;
for (let i = 0; i <= 100; i++) {
  total += i;
}
console.log(total);

// ================= RANDOM =================
let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";

for (let i = 0; i < 6; i++) {
  id += chars[Math.floor(Math.random() * chars.length)];
}

console.log(id);

// Hex
let hex = "#";
let hexChars = "0123456789abcdef";

for (let i = 0; i < 6; i++) {
  hex += hexChars[Math.floor(Math.random() * 16)];
}

console.log(hex);

// RGB
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(`rgb(${r},${g},${b})`);