// 2. Построить прямоугольный треугольник состоящий из символа "*".
//     Запросить у пользователя число, к примеру - 4

//     *
//     **
//     ***
//     ****
var num = +prompt("Введите число строк");
var star = "*";
var result = "";
for (var i = 1; i <= num; i++){
    var result = result + star;
    document.write(result + '</br>');
};