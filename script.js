// "use script";
// alert("hello");

fruit = "Apple";
console.log(fruit);

let friend = "marker";
console.log(friend.length);
console.log(friend.toUpperCase());

let MyFriend = "deepak";
console.log(MyFriend);
console.log(MyFriend.charAt(3));
console.log(MyFriend.at(1));
console.log(MyFriend.includes("p"));
console.log(MyFriend.endsWith("h"));

if (MyFriend.includes("d")) {
  console.log("d hai");
} else {
  console.log("d nai hai");
}
// let name = prompt("Enter your name");
// if (name.includes(" ")) {
//     console.log("full name hai");
//     }else {
//         console.log("first name hai");

// const userInput = "Prasad Harbare"
//     if (userInput.trim().includes(" ")){
//         console.log("Its a Full Name");
//         } else {
//             console.log("Its a first name");
//         }

// const userInput = "Prasad Harbare";
// console.log(userInput.trim());

// function namaste() {
//     console.log("kase ahat");
// }
// console.log(namaste());

// function namaste(name) {
//     console.log("namaste " + name + " kasa ahes");
// }
// namaste("Prasad");

// function greeting(word, name) {
//     if (word === undefined) word = "hello";
//     if (name === undefined) name = "user";
//      console.log(word, name);
// }
// greeting(" Deepak", "Prasad");
// greeting("prasad", "gauri");
// greeting();

// function week(num) {
//   if (num == 1) console.log("monday");
//   else if (num == 2) console.log("Tuesday");
//   else if (num == 3) console.log("Wednesday");
//   else if (num == 4) console.log("Thursday");
//   else if (num == 5) console.log("Friday");
//   else if (num == 6) console.log("Saturday");
//   else if (num == 7) console.log("Sunday");
// }
// week(2);

// function weekDay(day) {
//   day = Number(day);
//   if (day === 1) {
//     console.log("Mon");
//   } else if (day === 2) {
//     console.log("Tue");
//   } else if (day === 3) {
//     console.log("wed");
//   } else if (day === 4) {
//     console.log("Thu");
//   } else if (day === 5) {
//     console.log("fri");
//   } else if (day === 6) {
//     console.log("sat");
//   } else if (day === 7) {
//     console.log("sun");
//   } else {
//       console.log("Invalid Day");
      
//     }
// }
// weekDay(1);

// function (null) {
//   console.log("code chal gaya");
// }


// function weekDay(day); {
//   day = Number(day);
//   switch(day) {
//     case 1:
//       console.log("Monday");
//       break;
//     case 2:
//       console.log("Tuesday");
//       break;
//     case 3:
//       console.log("Wednesday");
//       break;
//     case 4:
//       console.log("Thursday");
//       break;
//     case 5:
//       console.log("Friday");
//       break;
//     case 6:
//       console.log("Saturday");
//       break;
//     case 7:
//       console.log("Sunday");
//       break;
//     default:
//       console.log("not a valid day");
      
//   }
// }
// week(5);


// const  games =["Cricket", "Hockey", "football", "archery"];
// games[0]="Tennis"
// console.log(games.length);
// console.log(games);


// function weekDays(dayInput) {
//   const days = ["Mon", "Tue", "Wed", "Thu", "fri"];
//   const day= days[dayInput - 1]);
//   if (day) {
//     console.log("day");
//   } else {
//     console.log("Invalid Day");
//   }
// }
// weekDays(2);
  
 
// function sum(num1, num2) {
//   return num1 ** num2;
// }

// const x = sum(2, 3)
// console.log(x);



function weekDays(dayInput) {
  const days = ["Mon", "Tue", "Wed", "Thu", "fri"];
  const day= days[dayInput - 1];
  return day ?? "Invalid Day"
}
console.log(weekDays("0"));
   
