// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Батьки дозволили?");
  }
}*/

/*function checkAge() {
    const age = prompt("Введіть вік");
    return age > 18 ? true : confirm("Батьки дозволили?");
}
const result = checkAge();
console.log(result);*/

/*function checkAge() {
  const age = prompt("Введіть вік");
  return age > 18 || confirm("Батьки дозволили?");
}
const result = checkAge();
console.log(result);*/

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
/*const min = function (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
const result = min(10, 10.5);
console.log(result);*/

//Another way
/*function min(a, b) {
  console.log(Math.min(a, b));
}
min(7, 44);
min(44, 8);*/

//  ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
/*function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Ви згодні?",
  function () {
    alert("Ви погодились.");
  },
  function () {
    alert("Ви скасували виконання.");
  }
);*/

/*const ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};
ask(
  "Ви згодні?",
  () => {
    alert("Ви погодились.");
  },
  () => {
    alert("Ви скасували виконання.");
  }
);*/
// checked
