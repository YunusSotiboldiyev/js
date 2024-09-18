//1-vazifa

let fruits = ["olma", "banan", "uzum", "anor", "shaftoli"];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));

//2-vazifa

let numbers = [3, 5, 7, 2, 4];
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log("Kattasi:", max, "Kichigi:", min);

//3-vazifa

let arifmetik = numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
console.log("Juft sonlar yeg'indisi:", arifmetik);

//4-vazifa

let reversedArray = numbers.slice().reverse();
console.log("Teskarisi:", reversedArray);

//5-vazifa

let mixedArray = ['salom', 2, true, 'hi', 'hello', 'ok', null, 232];
let stringsOnly = mixedArray.filter(item => typeof item === 'string');
console.log("String formatidadilar:", stringsOnly);

//6-vazifa

let average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log("O'rta arifmetik:", average);

//7-vazifa

let product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Ko'paytmasi:", product);

//8-vazifa

let oddNumbers = numbers.filter(num => num % 2 !== 0);
let oddAverage = oddNumbers.reduce((sum, num) => sum + num, 0) / oddNumbers.length;
console.log("Toq sonlar o'rta arifmetigi:", oddAverage);

//9-vazifa

let arr1 = [1,2,3,4,5,7];
let arr2 = [2,3,4,6,7,4,5];
let difference = arr2.filter(num => !arr1.includes(num));
console.log("Massivlar farqi:", difference);

//10-vazifa

function checkBrackets(str) {
     let stack = [];
     for (let char of str) {
         if (char === '(') stack.push(char);
         if (char === ')') {
             if (stack.pop() !== '(') return false;
         }
     }
     return stack.length === 0;
 }
 console.log(checkBrackets("(())"));
//11-vazifa

function toggleCase(str) {
     return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
 }
 console.log(toggleCase("Bugun ob-havo sovuq va yomg'irli"));

//12-vazifa
function findUniqueElements(arr1, arr2) {
     let unique1 = arr1.filter(num => !arr2.includes(num));
     let unique2 = arr2.filter(num => !arr1.includes(num));
     return [...unique1, ...unique2];
 }
 console.log(findUniqueElements([1, 2, 3], [3, 4, 5]));
//13-vazifa
let mixedNumbers = [1, 4, 7, 2, 5];
let sortedNumbers = mixedNumbers.sort((a, b) => a - b);
console.log("Saralngani:", sortedNumbers);
//14-vazifa
function partitionArray(arr) {
     let partitions = [];
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] !== arr[i+1]) {
             partitions.push(arr.slice(i, i+1));
         }
     }
     return partitions;
 }
 console.log(partitionArray([1, 2, 3, 4, 2]));
//15-vazifa
function countDuplicateColors(colors) {
     let counts = {};
     colors.forEach(color => {
         counts[color] = (counts[color] || 0) + 1;
     });
     return Object.entries(counts).filter(([color, count]) => count > 1);
 }
 console.log(countDuplicateColors(["red", "blue", "red", "green", "blue"]));
 
