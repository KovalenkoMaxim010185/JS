// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant,
// вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, 
// изменяя значения его координат, и повторно вызавая метод GetQuadrant.


x = +prompt("Введите х");
y = +prompt("Введите у");
    if (isNaN(x) || isNaN(y)) {
        alert("Ошибка!");
    } 

    var point = {x: x, y: y};

    var GetQuadrant = function(x, y) {
        if (point.x > 0 && point.y > 0) {
            alert("Point в первом квадранте");
        }
        else if (point.x > 0 && point.y < 0) {
            alert("Point во втором квадранте");
        }
        else if (point.x < 0 && point.y < 0) {
            alert("Point в третьем квадранте");
        } 
        else if (point.x < 0 && point.y > 0 ) {
            alert("Point во втором квадранте");
        }
        else if (point.x == 0 && point.y == 0) {
            alert("Point в центре");
        }

    }
    GetQuadrant();