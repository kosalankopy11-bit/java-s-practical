// comments can make code readable
// Welcome to learn Javascript
/* 
comments can make code readable, 
easy to reuse and informative 
*/

// variable.js
let name = 'Alice'; // string
let isStudent = true; // boolean
let state; // undefined
let emptyValue = null; // null

// datatypes.js
console.log(typeof name, typeof isStudent, typeof state, typeof emptyValue);

// Four variables without values
let a, b, c, d;

// Four variables with values
let x = 1, y = 2, z = 3, w = 4;

// Multiple lines
let firstName = 'John';
let lastName = 'Doe';
let maritalStatus = 'Single';
let country = 'Sri Lanka';
let age = 25;

// Single line
let fName = 'John', lName = 'Doe', mStatus = 'Single', loc = 'Sri Lanka', years = 25;

// Age logging
let myAge = 25, yourAge = 30;
console.log(`I am ${myAge} years old. \nYou are ${yourAge} years old.`);



let challenge = 'learn Javascript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(6)); // Cuts 'Javascript'
console.log(challenge.replace('learn Javascript', 'Days Of JavaScript')); 
console.log(challenge.includes('Script'));
console.log(challenge.split(''));
console.log(challenge.split(' '));

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

console.log(challenge.replace('learn Javascript', '30 Days Of Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.indexOf('J')));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

console.log(' learn Javascript '.trim());
console.log(challenge.startsWith('learn'));
console.log(challenge.endsWith('Javascript'));
console.log(challenge.match(/a/g));
console.log('30 Days of '.concat('JavaScript'));
console.log(challenge.repeat(2));



console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// Type casting
console.log(typeof '10' === typeof 10); // false
console.log(Number('10') === 10); // true

console.log(Math.ceil(parseFloat('9.8')) === 10);

console.log('python'.includes('on') && 'jargon'.includes('on'));
console.log('I hope this course is not full of jargon.'.includes('jargon'));

// Random Numbers
console.log(Math.floor(Math.random() * 101)); // 0-100
console.log(Math.floor(Math.random() * 51) + 50); // 50-100
console.log(Math.floor(Math.random() * 256)); // 0-255

let js = 'JavaScript';
console.log(js[Math.floor(Math.random() * js.length)]);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

let longSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(longSentence.substr(31, 23));



// Count 'love'
let loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log((loveStr.match(/love/gi) || []).length);

// Count 'because'
let becauseStr = 'You cannot end a sentence with because because because is a conjunction';
console.log((becauseStr.match(/because/g) || []).length);

// Clean text (Simplified)
const messySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;...';
const cleanText = messySentence.replace(/[%$@&#;!]/g, '');
console.log(cleanText);

// Income Calculation
let incomeText = 'He earns 50000 Rs from salary per month, 10000 Rs annual bonus, 15000 Rs online courses per month.';
let amounts = incomeText.match(/\d+/g); // [50000, 10000, 15000]
let totalIncome = (parseInt(amounts[0]) * 12) + parseInt(amounts[1]) + (parseInt(amounts[2]) * 12);
console.log(`Total Annual Income: ${totalIncome} Rs`);
