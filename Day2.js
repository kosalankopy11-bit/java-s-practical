// ================= VARIABLES =================
let FirstName = "Kosa";
let Lastname = "Kopy";
let Country = "India";
let city = "Kilinochchi";
let Age = 23;
let isMarried = false;

// ================= TYPE CHECK =================
console.log(typeof FirstName);
console.log(typeof Age);
console.log(typeof isMarried);

console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8') === 10);

// ================= TRUTHY / FALSY =================
console.log(1);
console.log("hello");
console.log(true);

console.log(0);
console.log("");
console.log(null);

// ================= COMPARISON =================
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

console.log("python".length !== "jargon".length);

// ================= LOGICAL =================
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

console.log(!("dragon".includes("on") && "python".includes("on")));

// ================= DATE =================
let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Date.now());

// ================= TRIANGLE =================
let base = Number(prompt("Enter base:"));
let height = Number(prompt("Enter height:"));
console.log("Area:", 0.5 * base * height);

// ================= PERIMETER =================
let q = Number(prompt("Width:"));
let e= Number(prompt("Height:"));
let s = Number(prompt("Side:"));
console.log("Perimeter:", q + e + s);

// ================= RECTANGLE =================
let length = Number(prompt("Length:"));
let width = Number(prompt("Width:"));
console.log("Area:", length * width);
console.log("Perimeter:", 2 * (length + width));

// ================= CIRCLE =================
let r = Number(prompt("Radius:"));
let pi = 3.14;
console.log("Area:", pi * r * r);
console.log("Circumference:", 2 * pi * r);

// ================= SLOPE =================
// y = 2x - 2
// slope = 2, y-intercept = -2, x-intercept = 1

let m = (10 - 2) / (6 - 2);
console.log(m);

// ================= QUADRATIC =================
// y = x^2 + 6x + 9 => x = -3

// ================= WEEKLY EARNING =================
let hours = Number(prompt("Hours:"));
let rate = Number(prompt("Rate:"));
console.log("Earning:", hours * rate);

// ================= NAME LENGTH =================
let name = "Kamal";

if (name.length > 7) {
  console.log("Long name");
} else {
  console.log("Short name");
}

// ================= AGE DIFFERENCE =================
let myAge = 25;
let yourAge = 20;
console.log(`I am ${myAge - yourAge} years older than you`);

// ================= DRIVING =================
let birthYear = Number(prompt("Enter birth year:"));
let userAge = 2026 - birthYear;

if (userAge >= 18) {
  console.log("You can drive");
} else {
  console.log(`Wait ${18 - userAge} years`);
}

// ================= DATE FORMAT =================
let currentYear = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let hoursNow = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${currentYear}-${month}-${date} ${hoursNow}:${minutes}`);

// ================= EVEN / ODD =================
let num = Number(prompt("Enter number:"));

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// ================= IF ELSE / TERNARY =================
let x = 4;
let y = 3;

if (x > y) {
  console.log("x is greater");
} else {
  console.log("y is greater");
}

console.log(x > y ? "x is greater" : "y is greater");

// ================= GRADE =================
let score = Number(prompt("Score:"));

if (score >= 80) console.log("A");
else if (score >= 70) console.log("B");
else if (score >= 60) console.log("C");
else if (score >= 50) console.log("D");
else console.log("F");

// ================= SEASON =================
let monthInput = prompt("Month:").toLowerCase();

if (["september","october","november"].includes(monthInput))
  console.log("Autumn");
else if (["december","january","february"].includes(monthInput))
  console.log("Winter");
else if (["march","april","may"].includes(monthInput))
  console.log("Spring");
else
  console.log("Summer");

// ================= WEEKEND =================
let day = prompt("Day:").toLowerCase();

if (["saturday","sunday"].includes(day)) {
  console.log("Weekend");
} else {
  console.log("Working day");
}

// ================= DAYS IN MONTH =================
let monthCheck = prompt("Enter month:").toLowerCase();

if (["january","march","may","july","august","october","december"].includes(monthCheck))
  console.log("31 days");
else if (["april","june","september","november"].includes(monthCheck))
  console.log("30 days");
else if (monthCheck === "february")
  console.log("28 days");

// ================= LEAP YEAR =================
let inputYear = Number(prompt("Enter year:"));

if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
  console.log("February has 29 days");
} else {
  console.log("February has 28 days");
}