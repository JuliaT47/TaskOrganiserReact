// --1--
// У вас є масив об’єктів fruits, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i].name);
// }

// --2--
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// let a = [];
// for (let i = 2; i <= 10; i += 2) {
//   a.push(i);
// }
// console.log(a);

// Correct answer
// for (let a = 2; a < 10; a += 2) {
//   console.log(a);
// }

// або;
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// --3--
//Замініть цикл "for" на "while" // for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` ); // }

// let i = 0;
// while (i < 5) {
//   console.log(`number ${i + 1}!`);
//   i++;
// }

// --4--
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let number;
// do {
//   number = prompt("Enter a number higher than 100");
// } while (number <= 100);
// if (number >= 100) {
//   alert("Thank you");
// }

// --5--
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// let sum = girls.reduce((sum, girl) => sum + girl.age, 0);
// let averageAge = sum / girls.length;

// console.log(averageAge);
// checked
