// // 1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
// x1, y1
// x2, y2
// Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.
// => y = 4x + 1
// => y = 4x + 1 => 4 * 2 + 1 => 9

var x1 = prompt("Задайте тчку x1");
var y1 = prompt("Задайте тчку y1");
var x2 = prompt("Задайте тчку x2");
var y2 = prompt("Задайте тчку y2");
var k = (y1 - y2) / (x1 - x2);
var b = y2 - k*x2;
console.log("y = " + k + "x + "+ b);