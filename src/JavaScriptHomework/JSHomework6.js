/*Створіть функцію-конструктор Calculator, 
який створює об’єкти з трьома методами:
read() запитує два значення за допомогою 
prompt і запам’ятовує їх у властивостях об’єкта.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.*/

// Перший варіант

/*function Calculator() {
  const readNumber1 = parseInt(prompt("Enter first numbers"));
  const readNumber2 = parseInt(prompt("Enter second number"));

  const calculation = {
    readNumber1: readNumber1,
    readNumber2: readNumber2,
    sum: readNumber1 + readNumber2,
    mul: readNumber1 * readNumber2,
  };

  console.log(calculation.readNumber1, calculation.readNumber2);
  console.log(calculation.sum);
  console.log(calculation.mul);
  alert(`${readNumber1} + ${readNumber2} = ${calculation.sum}`);
  alert(`${readNumber1} * ${readNumber2} = ${calculation.mul}`);
}

Calculator();*/

// Другий варіант

/*function Calculator() {
  const readNumber1 = parseInt(prompt("Enter first numbers"));
  const readNumber2 = parseInt(prompt("Enter second number"));

  let sum = readNumber1 + readNumber2;
  let mul = readNumber1 * readNumber2;

  console.log(readNumber1, readNumber2);
  console.log(sum);
  console.log(mul);
  alert(`${readNumber1} + ${readNumber2} = ${sum}`);
  alert(`${readNumber1} * ${readNumber2} = ${mul}`);
}

Calculator();*/

//Another way
/*function Calculator() {
  // 1 //
  this.read = function () {
    this.n1 = prompt("Введіть перше число");
    this.n2 = prompt("Введіть друге число");
  };
  // 2 //
  this.sum = function () {
    return Number(this.n1) + Number(this.n2);
  };
  // 3 //
  this.mul = function () {
    return Number(this.n1) * Number(this.n2);
  };
}

let calculator = new Calculator();
calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());*/
// checked
