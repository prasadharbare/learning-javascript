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

const menu = {
    vadapav: "$20",
    samosa: "$24",
    bhaji: "$35",
    pattis:"$25"
}
const keys=Object.keys(menu);
for (let i = 0; i < keys.length; i++) {
    ;
    console.log(keys[i]);
}
