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

function reverseNumber(number) {
    number = Math.abs(number);
  // number to string//
  const stringNum = String(number);
  // string to array
  const arrString = stringNum.split("");
  // array reverse
  const reverseString = arrString.reverse();
  // convert back to string
  const jointNum = reverseString.join("");
  // convert back to num
    return parseFloat(jointNum);
}
const x = reverseNumber(-15);
console.log(x);
const y = reverseNumber(-23ggg);
console.log(y);

