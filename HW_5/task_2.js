var calculator = {
    sum: function (a, b) {
        var result = a + b;
        alert(result);
    },
    sub: function (a, b) {
        var result = a - b;
        alert(result);
    },
    mul: function (a, b) {
        var result = a * b;
        alert(result);
    },
    div: function (a, b) {
        var result = a / b;
        alert(result);
    },
}

var a = +prompt('Введите А');
var b = +prompt('Введите B');
var sign = prompt('Введите арифметическое дейстие: + - * /');
if (isNaN(a) || isNaN(b)) {
    alert('Вы ввели некоректные данные');
    }

if (sign == "+") {
    calculator.sum(a, b);
} else if (sign == "-") {
    calculator.sub(a, b);
} else if (sign == "*") {
    calculator.mul(a, b);
} else if (sign == "/") {
    calculator.div(a, b);
} else {
    alert('Ошибка');
}