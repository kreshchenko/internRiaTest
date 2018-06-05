"use strict";

/*Строки для проверки */
let str = 'foo.bar="92499aacd96553f313fb9b85913f2e18"';
let str2 = "hello=World";
let str3 = "this.is.my.first.app=12";

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
  keys.forEach(key => {
    obj = {
      [keys[keys.length - i]]: value
    };
    value = obj;
    i++;
  });

  return obj;
}

let a = f2(str2);

alert(a.hello);
