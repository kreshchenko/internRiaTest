"use strict";

/*Функция создания обьекта из строки */
function f2(str) {
  /*Разделяем строку на ключ и значение */
  let strArr = str.split("=");
  /*Получаем массив значений ключа/ключей из строки*/
  let keys = strArr[0].split(".");
  /*Получаем значение и удаляем с него кавычки если они есть*/
  let value = strArr[1].replace(/"/g, "");

  let i = 1;
  let obj = {};

  keys.forEach(key => {
    obj = {
      [keys[keys.length - i]]: value
    };
    value = obj;
    i++;
  });

  return obj;
}

function f3(str) {
  /*Разделение строки на подстроки */
  let stringsArr = str.split("&");

  /*Массив для хранения обьектов полученых с строки*/
  let objArr = [];

  /*Превращаем каждую строку в обьект с помощью функции f2 из прошлой задачи */
  stringsArr.forEach(someString => {
    objArr.push(f2(someString));
  });
}

let str =
  "foo.id=92499aacd96553f313fb9b85913f2e18&boo.foo=10&foo.bar=3&foo.bar=lll";

f3(str);
