// const cartoon = ["Doreamon", "Chota Bheem", "motu patlu"];
// cartoon[] = "tom & jerry";
// console.log(cartoon);

// const x = Boolean();
// console.log(x);

// function isempty(list) {
//     if (list.length === 0) return true;
//         return false;
//     }

// function isEmpty(list) {
//     return list.length === 0;
// }

// let x;
// x = isEmpty([]);
// console.log(x);

// x = isEmpty([1, 2, 3]);
// console.log(x);

// function lengthyString(string) {
//     if (string.length >= 5) return true;
//     return false;
// }
// console.log(lengthyString("prasadprasad"));

// function lengthAndA(str) {
//     if (str.length >= 5 && str.includes("a")) return true;
//     return false;
//     }
// let x;
// x=lengthAndA("a")
// console.log(x);

// x = lengthAndA(["agh"], ["vhuag"]);
// console.log(x);

// const x = "hey siri hello";
// console.log(x.split(","));

// const y = [" hello","everyone"]
// console.log(y.reverse(""));

// function reverseString(string) {
//   const stringArr = string.split("");
//   const reverseArr = stringArr.reverse();
//   return reverseArr.join("");
// }
// const x = reverseString("My name is Prasad");
// console.log(x);

// function reverseNumber(number) {
//     const stringNum = String(number);
//     const arrString = stringNum.split("");
//     const reverseString = arrString.reverse();
//     const jointNum = reverseString.join("");
//     return Number(jointNum);
// }
// const x = reverseNumber(14)+reverseNumber(14);
// console.log(x);

// function cricket() {
//     var x = "Sachin Tendulkar";
//     console.log(x);
// }
// console.log("cricket");

// function reverseNumber(number, keepSign = false) {
//   number = Math.abs(number);
//   // number to string//
//   const stringNum = String(number);
//   // string to array
//   const arrString = stringNum.split("");
//   // array reverse
//   const reverseString = arrString.reverse();
//   // convert back to string
//   const jointNum = reverseString.join("");
//   // convert back to num
//   const reverseNumber = parseFloat(jointNum);
//   return keepSign ? reverseNumber * Math.sign(number) : reverseNumber;
// }
// const x = reverseNumber(-15);
// console.log(x);
// const y = reverseNumber(-23);
// console.log(y);

// for (var i = 0; i <= 100; i++){  //i+= for even number
//     console.log(i);
// }

// for (var i = 0; i <= 20; i++){
//     if (i === 18) break;
//         console.log(i);
//     }

// const fruits = ["apple", "banana", "cherry", "orange", "Pineapple"]
// for (let i = 0; i < fruits.length; i++){
//     return String[0].toUpperCase()+String.slice(1,).toLowerCase());
// }

// function printEveryNum(number) {
//     const numString = String(number);

//     for (let i = 0; i < numString.length;i++){
//         console.log(numString[i]);
//     }
// }
// printEveryNum(12345);

// function sumOfNums(numsArr) {
//     let counter = 0;
//     for (let i = 0; i < numsArr.length; i++){
//         counter += numsArr[i];
//     }
//     return counter;
// }
// const x = sumOfNums([1, 2, 3, 4, 5]);
// console.log(x);

// function getAlphabetIndex(letter) {
//     // Define a string containing all uppercase letters
//     const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     // Find and return the index of the given letter in the ALPHABET string
//     return ALPHABET.indexOf(letter);
// }
// console.log(getAlphabetIndex('A'));
// console.log(getAlphabetIndex('B'));
// console.log(getAlphabetIndex('C'));
// console.log(getAlphabetIndex('Z'));
// console.log(getAlphabetIndex('M'));
// console.log(getAlphabetIndex('a')); // Output: -1 (lowercase letters are not found in the uppercase alphabet string)
// console.log(getAlphabetIndex('1')); // Output: -1 (non-alphabet characters are not found)

// function month(number) {
//     const months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
//     return months[number - 1]??"invalid";
// }
// console.log(month(-1));

// const x = [1, 2, 3, 4, 5];
// x.shift("1");
// console.log(x);
// add to end push
// remove from start shift
// add to start unshift
// remove from end pop

// const bike = {
//     color: "black",
//     brand: "Royal Enfield",
//     price: "2 lakh",
//     honk: function () {
//         console.warn('hat jao')
//     }
// }
// bike.honk();

// const menu = {
//   vadapav: "$20",
//   samosa: "$24",
//   bhaji: "$35",
//   pattis: "$25",
// };

// const keys=Object.keys(menu);
// for (let i = 0; i < keys.length; i++){;
//     const key = keys[i];
//     console.log(i);
//     console.log(menu[key]);
//     const str = "The Price Of $(key) is $(value)";
//     console.log(str);
// }

// for (let key in menu) {
//     const value = menu[key];
//     const tax = Number(value.slice(1,) + 1);
//     console.log(`The Price Of ${key} is $${tax}`);
// }


//function to move a character to given step
// function move(char, step) {
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   if (!alpha.includes(char)) {
//     if (alpha.toUpperCase().includes(char)) {
//       alpha=alpha.toUpperCase()
//     } else {
//       return char;
//     }
//   }

//   const idxchar = alpha.indexOf(char);
//   let index = idxchar + step;

//   if (index > 25) {
//     index=index % 26;
//   }
//   const finalChar = alpha[index];
//   return finalChar;
// }
// const x = move("z", 53);
// console.log(x);



// function move1(char, step) {
//   // Define the alphabet
//   const alpha = "abcdefghijklmnopqrstuvwxyz";
  
//   // Convert input character to lowercase
//   const lowerChar = char.toLowerCase();
  
//   // Find the index of the lowercase character
//   const idxchar = alpha.indexOf(lowerChar);
  
//   // Calculate the new index with wrap-around
//   let index = (idxchar + step) % 26;
  
//   // Get the new character from the alphabet
//   const finalChar = alpha[index];
  
//   // Convert the final character to uppercase if the original was uppercase
//   return char === char.toUpperCase() ? finalChar.toUpperCase() : finalChar;
// }

// console.log(move1("A", 3));  // Output: "D"
// console.log(move1("a", 3));  // Output: "d"


// function iterateString(str) {
//   let finalStr = "";
//   for (let i = 0; i < str.length; i++) {
//     finalStr += move(str[i], 2);
//   }
//   return finalStr
// }
// console.log(iterateString("middle-out",2));
  

  
// function splitBunches(bunches) {
//   const finalist[]; {
//     for (let bunch of bunches) {
//       const { name, quantity } = bunch;
//       for (let i = 0; i < quantity; i++) {
//         console.log({ name: name, quantity: quantity });
//       }
//     }
//   }
// }

// const sayHi =(name)=>`Hello ${name}`;

//   const x = sayHi("jack");
// console.log(x);



// const add = (a, b) => a ** 2;
// console.log(add(3));



// const isaEven = (a) => {
//   if (a % 2 == 0) {
//     return `the number is even`;
//   } else {
//     return `the number is odd`;
//   }
// };
// const x = isaEven(4);
// console.log(x);


// function invokeThrice(fn) {
//   fn();
//   fn();
//   fn();
// }
// invokeThrice(()=>console.log("hi"));


// function functionCall(func, params) {
//   for (let i = 0; i < params.length; i++);
//   func(params);
// }
// functionCall();



// function redundant(str) {
//   return function () {
//     return str;
//   }
// }


// const fruits = "APPLE,BANANA,ORANGE,KIWI".split();
// const uppercase = word => console.log(word.toUpperCase());
// fruits, forEach(a => {
//   console.log(a.toUpperCase());
// })
  



// const willFit = (capacity, weight) => {
//   const holds = {
//     S: 50,
//     M: 100,
//     L: 200,
//   };
//   let totalCapacity = 0;
//   capacity.forEach(crate => {
//     totalCapacity = totalCapacity + holds[crate];
//   })
// };
//  console.log(willFit);



function makePlusFunction(basenum) {
  return function (argument) {
    return basenum + argument;
  };
}
 const plusTwo = makePlusFunction(2)
const plusFive = makePlusFunction(5)
const plusSeven = makePlusFunction(plusTwo(plusFive(0)))
const plusTen = makePlusFunction(10)

console.log(plusFive(2));


