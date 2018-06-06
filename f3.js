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

  if (value.trim() != "") {
    keys.forEach(key => {
      obj = {
        [keys[keys.length - i]]: value
      };
      value = obj;
      i++;
    });
  }

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

  /*Индекс для уменьшения прохода по массиву при поиске одинаковых */
  let start = 0;
  /*Поиск одинаковых ключей и обьеденение обьектов */
  objArr.forEach((someObj, index) => {
    let key = Object.keys(someObj);
    for (let i = start; i < objArr.length; i++) {
      let tmpKey = Object.keys(objArr[i]);
      if (key.toString() == tmpKey.toString() && index != i) {
        objArr[index][key] = Object.assign(objArr[index][key], objArr[i][key]); //Объдинение обьектов
        objArr.splice(i, 1); //удаляем елемент который обьединяли
      }
    }
    start++;
  });

  /*Создаем объект результат */
  let resultObj = {};
  objArr.forEach(someObj => {
    resultObj = Object.assign(resultObj, someObj);
  });

  return resultObj;
}

let str = "foo.id=92499aacd96553f313fb9b85913f2e18&boo.foo=10&foo.bar=sdds";
let str2 = "foo.id=92499aacd96553f313fb9b85913f2e18&boo.foo=10&foo.bar=";
let str3 = "user.name=Alex&user.name=Oleg";
let str4 = "db.host=&db.user=root&db.pass=12340";

let a = f3(str);
console.log(a.foo.bar);
