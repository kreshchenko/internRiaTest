function f3(line) {
  //разделяем строку на подстроки
  //с помощью reduce идем по массиву подстрок
  return line.split("&").reduce((result, item) => {
    let [excess, keys, value] = item.match(/([^=]*)=\"?([^\"]*)\"?$/); //разделяем подстроку на ключи и значение

    if (!value) {
      return result;
    }

    keys = keys.split("."); //разделяем ключи на подключи

    let lastLevel = result,
      lastKey = keys.pop(); //записіваем ключ самого нижнего уровня и удаляем его

    //Проход по массиву ключей
    keys.forEach(function(key) {
      lastLevel[key] = lastLevel[key] || {}; //Создаем пустой обьект для дочернего уровня, если не біло раньше
      lastLevel = lastLevel[key]; // ссылка на только что созданый или существующий дочерний обьект
    });
    lastLevel[lastKey] = value; //Записываем значение в обьект самого нижнего уровня

    return result;
  }, {});
}

let str = 'db.host=&db.user="root"&db.pass=1234';
let obj = f3(str);

console.log(obj);
