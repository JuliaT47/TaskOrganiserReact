/*-----1----
Напишіть такий JavaScript, щоб після натискання на кнопку button, 
елемент <div id="text"> зникав.*/

/*const clickbtn = document.querySelector("#btnHideText");
const hidden = document.getElementById("text");

const hideShow = () => {
  hidden.classList.toggle("hidden");
};

clickbtn.addEventListener("click", hideShow);*/

/*-----2----
Напишіть такий код, щоб після натискання на кнопку, вона зникала.*/

/*const btnClick = document.querySelector("#btnHide");
const hideBtn = () => {
  btnClick.classList.toggle("disappear");
};

btnClick.addEventListener("click", hideBtn);*/

/*-----3----
Створіть дерево, яке показує/приховує дочірні вузли при кліці. 
При кліку на li першої вкладеності li мають відкриватись та закриватись при повторному кліку*/
/*const parents = document.querySelectorAll(".parent");
const children = document.querySelectorAll(".child");
const hideLi = () => {
  children.forEach((child) => {
    child.classList.toggle("liHidden");
  });
};

parents.forEach((parent) => {
  parent.addEventListener("click", hideLi);
});

const grandparent = document.querySelectorAll(".grandparent");
grandparent.forEach((gp) => {
  gp.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});*/
// checked
