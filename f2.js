"use strict";

let str = 'foo.bar.if="92499aacd96553f313fb9b85913f2e18"';

function f2(str) {
  /*Разделяем строку на ключ и значение */
  let strArr = str.split("=");
  /*Получаем массив значений ключа/ключей из строки*/
  let keys = strArr[0].split(".");
  /*Получаем значение и удаляем с него кавычки если они есть*/
  let value = strArr[1].replace(/"/g, "");
}

f2(str);
