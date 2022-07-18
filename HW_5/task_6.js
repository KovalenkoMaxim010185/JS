var corp = [
    worker1 = {
        name: a = prompt("Введите Ваше имя:"), 
        sName: b = prompt("Введите вашу фамилию:"),
        age: c = prompt("Укажите Ваш возраст:"),
        occupation: d = prompt("Укажите Вашу профессию:"),
    },
    worker2 = {
        name: a = prompt("Введите Ваше имя:"), 
        sName: b = prompt("Введите вашу фамилию:"),
        age: c = prompt("Укажите Ваш возраст:"),
        occupation: d = prompt("Укажите Вашу профессию:"),
    }
]

function assignSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i].occupation) {
            case "Начальник":
                arr[i].salary = 10000;
                break;
            case "Рабочий":
                arr[i].salary = 5000;
                break;
            case "Бухгалтер":
                arr[i].salary = 7000;
                break;
            default:
                arr[i].salary = 3000;
        }
    }
}

assignSalary(corp);

var criterion = prompt("Выберите критерий отбора (name, sName, age, occupation, salary): ");
company.sort(function (a, b) {
    switch (criterion) {
        case "name":
            if (a["name"] > b["name"]) {
                return 1;
            }
            else if (a["name"] < b["name"]) {
                return -1;
            } else { return 0; }
            break;
        case "sName":
            if (a["sName"] > b["sName"]) {
                return 1;
            }
            else if (a["sName"] < b["sName"]) {
                return -1;
            } else { return 0; }
            break;
        case "occupation":
            if (a["occupation"] > b["occupation"]) {
                return 1;
            }
            else if (a["occupation"] < b["occupation"]) {
                return -1;
            } else { return 0; }
            break;
        case "age":
            return a["age"] - b["age"];
            break;
        case "salary":
            return a["salary"] - b["salary"];
            break;
        default:
            alert("None");
    }
})
console.log(company);