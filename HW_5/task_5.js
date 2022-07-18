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

for (var i = 0; i < corp.length; i++) {
    console.log("Имя: " + corp[i].name);
    console.log("Фамилия: " + corp[i].sName);
    console.log("Возраст: " + corp[i].age + " возраст");
    console.log("Профессия : " + corp[i].occupation);
    console.log("Зарплата: " + corp[i].salary);
}