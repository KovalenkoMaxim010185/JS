// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

//     Для массива размером 3
//     ['odd', 'odd', 'odd']       // 1й элемент
//     ['even', 'even', 'even']    // 2й элемент
//     ['odd', 'odd', 'odd']       // 3й элемент

//     let arr = [
//         ['odd', 'odd', 'odd'],
//         ['even', 'even', 'even'],
//         ['odd', 'odd', 'odd']
//     ]


var arr = [];
 var userInput = +prompt('Введите размер массива');
 if (userInput % 2 === 0){
    arr = arr.push('even', 0, userInput)
 } else {
    arr = arr.push('odd', 0, userInput)
 }
 console.log(arr)