// 2. Обменять значения двух переменных, используя третью (буферную) переменную. Вывести значение переменных до и после обмена.
    
//     a: 5
//     b: 7

//     a: 7
//     b: 5

var a = 5;
var b = 7;
var c = a;
a = b;
b = c;
console.log(a,b);