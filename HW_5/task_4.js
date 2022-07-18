var corp = [
    worker1 = {
        name: a = prompt("Введите Ваше имя:"), 
        sName: b = prompt("Введите вашу фамилию:"),
        age: c = prompt("Укажите Ваш возраст:"),
        occupation: d = prompt("Укажите Вашу профессию:"),
        show: function() {
            console.log("Имя: " + this.name);
            console.log("Фамилия: " + this.sName);
            console.log("Возраст: " + this.age + " years old");
            console.log("Профессия: " + this.occupation);
        }
    },
    worker2 = {
        name: a = prompt("Введите Ваше имя:"), 
        sName: b = prompt("Введите вашу фамилию:"),
        age: c = prompt("Укажите Ваш возраст:"),
        occupation: d = prompt("Укажите Вашу профессию:"),
        show: function() {
            console.log("Имя: " + this.name);
            console.log("Фамилия: " + this.sName);
            console.log("Возраст: " + this.age + " years old");
            console.log("Профессия: " + this.occupation);
        }
    }
]

for (var i = 0; i < corp.length; i++) {
    corp[i].show();
}