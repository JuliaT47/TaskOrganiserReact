/*Напишіть код, щоб вибрати елемент з атрибутом 
data-widget-name з документа
та прочитати його значення.*/
/*const menu = document.querySelector('[data-widget-name="menu"]');
const value = menu.getAttribute("data-widget-name");
console.log(value);*/

// correct solutions
/*HTML
<div data-widget-name="menu">Виберіть жанр</div>
 
 
(a)
let dataWidgetName = document.querySelector('[data-widget-name="menu"]');
console.log(dataWidgetName.getAttribute("data-widget-name"));
 
(b)
const element = document.querySelector('[data-widget-name]');
const dataWidgetName = element.getAttribute("data-widget-name");
console.log(dataWidgetName);
 
(c)
const elem = document.querySelector("[data-widget-name]");
console.log(elem.getAttribute("data-widget-name"));*/
// checked
