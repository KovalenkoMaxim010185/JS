// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.
var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');
if (a===b) {
    alert('Ошибка!');
} else if (a===c) {
    alert('Ошибка!');
} else if (b===c) {
    alert('Ошибка!');
}
else {
    alert((a+b+c)/3);
}