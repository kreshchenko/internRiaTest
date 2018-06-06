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
