"use strict";

function f2(str) {
  /*Разделяем строку на ключ и значение */
  let strArr = str.split("=");
  /*Получаем массив значений ключа/ключей из строки*/
  let keys = strArr[0].split(".");
  /*Получаем значение и удаляем с него кавычки если они есть*/
  let value = strArr[1].replace(/"/g, "");

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
let str = 'foo.bar="92499aacd96553f313fb9b85913f2e18"';
let str2 = "hello=World";
let str3 = "this.is.my.first.app=12";

let newObj1 = f2(str);
alert(newObj1.foo.bar);

let newObj2 = f2(str2);
alert(newObj2.hello);

let newObj3 = f2(str3);
alert(newObj3.this.is.my.first.app);
