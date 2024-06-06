// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to. Зробіть два варіанти рішення. Використовуючи setInterval. Використовуючи вкладений setTimeout

//Варіант 1
// function printNumbers() {
//   let number = 1;
//   return setInterval(() => {
//     console.log(number);
//     if (number === 10) clearInterval(intervalId);
//     number++;
//   }, 1000);
// }

// let intervalId = printNumbers();

//Варіант 2

// function printNumbers() {
//   let number = 1;
//   const print = () => {
//     console.log(number);
//     if (number < 10) {
//       number++;
//       setTimeout(print, 1000);
//     }
//   };
//   print();
// }
// printNumbers();

// -----2----
// Вбудована функція setTimeout використовує колбек-функції (callback). Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд,
// так щоб ми могли додати до нього.then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => alert("виконалось через 3 секунди"));
