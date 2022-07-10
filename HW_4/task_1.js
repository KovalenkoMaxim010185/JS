function calc(a, b, sign) {
    var result;
    if (isNaN(a) || isNaN(b) )
    {
        alert("One of arguments is not a number!");
        return;
    }
    switch (sign) {
        case "+" : {
            result = a + b;
            break;
        }
        case "-" : {
            result = a - b;
            break;
        }
        case "/" : {
            result = a / b;
            break;
        }
        case "*" : {
            result = a * b;
            break;
        }
        default: {
            alert("Ошибка");
            return;
        }
    }
    return result;
}
var a = +prompt("Enter number:");
var b = +prompt("Enter number:");
var sign = prompt("Enter sign:");
result = calc(a, b, sign);
if (result != undefined) {
    alert(result);
}

console.log(calc);