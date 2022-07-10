function powerOfNumber(a, b) {
    var result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
}
var a = +prompt('Введите число:');
var b = +prompt('Введите степень в которую хотите произвести введенное число:');
alert(powerOfNumber(a ,b));