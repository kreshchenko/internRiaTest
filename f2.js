"use strict";

function f2(str) {
  /*Если строка пустая */
  if (str.length == 0) {
    return "Empty str";
  }

  //Вариант 1 разделения строки
  /*
  let strArr = str.split("="); //Разделяем строку на ключ и значение
  let keys = strArr[0].split("."); //Получаем массив значений ключа/ключей из строки
  strArr.splice(0, 1);
  let value = strArr.join("=").replace(/"/g, "");
  */

  //Вариант 2 разделения строки с помощью регулярного выражения
  let [excess, keys, value] = str.match(/([^=]*)=\"?([^\"]*)\"?$/);

  keys = keys.split(".");

  let i = 1;
  let obj = {};

  /*Вариант 1. Генерация обьекта с помощью рекрсии*/
  /*function createObj(arr) {
    obj = {
      [arr[arr.length - i]]: value
    };
    value = obj;
    i++;
    if (i <= arr.length) createObj(arr);
  }

  createObj(keys);
*/

  /*Вариант 2 с помощью forEach*/
  /*keys.forEach(key => {
    obj = {
      [keys[keys.length - i]]: value
    };
    value = obj;
    i++;
  });*/

  /*Вариант 3 c помощью for */
  for (i = keys.length - 1; i >= 0; i--) {
    obj = {
      [keys[i]]: value
    };
    value = obj;
  }

  return obj;
}

/*Проверка*/
let str = "foo.bar=92499aacd96=553f31=3fb9b85913f2e18";
let str2 = "";
let str3 = "this.is.my.first.app=12";

let newObj1 = f2(str);
console.log(newObj1.foo.bar);

let newObj2 = f2(str2);
console.log(newObj2);

let newObj3 = f2(str3);
console.log(newObj3.this.is.my.first.app);
