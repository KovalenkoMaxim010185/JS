// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');
var result;
if (a>b && a>c) {
    result = a;
} else if (b>a && b>c) {
    result = b;
} else if (c>a && c>b) {
    result = c;
}
alert(result);