// 7. Напишите код, который будет спрашивать логин с помощью prompt.

// 			Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// 			Пароль проверять так:
// 			Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 			Иначе – «Неверный пароль»,
// 			При отмене – «Отменено».
			
// 			Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.
var login = 'Админ';
var password = 'Я главный';
var userLogin, userPassword;

do {
    userLogin = prompt('Введите логин');
    if (!userLogin) {
        alert('Отмена');
        break;
    }
    if (login == userLogin) {
        userPassword = prompt('Введите пароль');
    } 
    else if (login == !userLogin) {
        alert('Я Вас не знаю');
        break;
    }
    else if (!userPassword){
        alert('Отменено');
        break;
    }
    if (password == userPassword) {
        alert('Здравствуйте');
        break;
    }
    else if (login == !userLogin)
        alert('Неверный пароь');
        break;

} 
while (true);
