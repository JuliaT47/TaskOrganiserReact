// N1
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// console.log(1 > 0);
// console.log(0 > 0);
// console.log(-3 > 0);

// Correct answer
// let num1 = 1;
// let num2 = 0;
// let num3 = -3;
// console.log(num1 > 0);
// console.log(num2 > 0);
// console.log(num3 > 0);
// або
// як варіант
// const num = 1;
// console.log(num > 0 ? true : false);

// N2
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

// console.log(Boolean("test"));
// console.log(Boolean("qwerty"));
// console.log(Boolean(true));

// Correct answer
// const ex2 = (arr) => {
//   for (i in arr) {
//     if (arr[i] === "test") {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// };
// const ex2Arr = ["test", "qwerty", true];
// ex2(ex2Arr);

// N3
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let value = 1;
// if (value > 10) {
//   console.log(value - 5);
// }
// if (value < 10) {
//   console.log(value + 5);
// }

// (a >= 10) ? console.log(a - 5) : console.log(a + 5);

// N4
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt("Enter month");

// if (parseInt(month) === 1) {
//   console.log("January");
// } else if (parseInt(month) === 2) {
//   console.log("February");
// } else if (parseInt(month) === 3) {
//   console.log("March");
// } else if (parseInt(month) === 4) {
//   console.log("April");
// } else if (parseInt(month) === 5) {
//   console.log("May");
// } else if (parseInt(month) === 6) {
//   console.log("June");
// } else if (parseInt(month) === 7) {
//   console.log("July");
// } else if (parseInt(month) === 8) {
//   console.log("August");
// } else if (parseInt(month) === 9) {
//   console.log("September");
// } else if (parseInt(month) === 10) {
//   console.log("October");
// } else if (parseInt(month) === 11) {
//   console.log("November");
// } else if (parseInt(month) === 12) {
//   console.log("December");
// } else {
//   console.log("Invalid month");
// }

// const months = {
//   1: "Jan",
//   2: "Feb",
//   3: "Mar",
//   4: "Apr",
//   5: "May",
//   6: "Jun",
//   7: "Jul",
//   8: "Aug",
//   9: "Sep",
//   10: "Oct",
//   11: "Nov",
//   12: "Dec",
// };

// let num = prompt("Type month 1-12");
// num = Number(num);

// if (num >= 1 && num <= 12) {
//   console.log(months[num]);
// } else {
//   console.log("You are trying to type a value which does not exist");
// }

// N5
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let number = parseInt(prompt("Enter a three digit number"));
// let sum = 0;

// if (number >= 100 && number <= 999)
//   while (number) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
//   }
// alert(`${sum}`);

// let userInput = prompt('Введіть тризначне число');
// const ex5 = (number) => {
// let sum = 0;
// let temp = number.split('');
// let temp2 = temp.map((e) => parseInt(e));
// temp2.map(e => sum += e);
// alert(sum);
// }
// або
// let num = parseInt(prompt('Введіть трьохзначне число'));
// if (num >= 100) {
// let a = Math.floor(num / 100);
// let b = Math.floor((num % 100) / 10);
// let c = Math.floor(num % 10);
// let sum = a + b + c;
// alert('Сума цифр числа ' + num + ' дорівнює = ' + sum);
// } else {
// alert('Це не трьохзначне число');
// }

// Або такий варіант з циклами
// let num = parseInt(prompt('Введіть трьохзначне число'));
// if (num > 99 && num < 1000) {
// let sum = 0;
// while (num > 0) {
// sum += num % 10;
// num = Math.floor(num / 10);
// }
// alert(`Сума дорівнює = ${sum}`);
// } else {
// alert('Це не трьохзначне число');
// }
// checked
