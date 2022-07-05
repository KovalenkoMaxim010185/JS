// 1. Сделать собственные примеры методов применяемых для массивов.

var products = ['Макароны', 'сосиски', 'колбаса', 'ветчина'];
console.log(products);

var anotherArr = products.join(" + ");
console.log("after join");
console.log(anotherArr);

var thirdArr = anotherArr.split(" ");
console.log(thirdArr);

var cars = ["БМВ", "АУДИ", "МЕРС"];
var moto = ["Ямаха", "Хонда", "Сузуки"];

var transport = cars.concat(moto);
console.log(transport);


var cars = ["БМВ", "АУДИ", "МЕРС"];
console.log(cars);
console.log(cars[0]);


cars = cars.reverse(); 
console.log(cars);


var cars = ["БМВ", "АУДИ", "МЕРС"];

document.write(cars + "<br />");

var start = 0;
var end = -1;

var anotherArr = cars.slice(start, end);
document.write(anotherArr);