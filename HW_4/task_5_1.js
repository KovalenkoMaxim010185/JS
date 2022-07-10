let user = prompt('Выберите: Камень или Ножницы или Бумага');

function getComputerChoice() {
    var computerChoice = Math.random();
    let r = 0.01;
    let p = 0.99;
    if (computerChoice <= r) {
        return 'Камень';
    } else if (computerChoice <= p) {
        return 'Бумага';
    } else {
        return 'Ножницы';
    }
}
let comp = getComputerChoice();
function game(comp, user) {
    if (comp === user) {
        return 'Ничья';
    } else if (comp === 'Камень') {
        if (user === 'Ножницы') {
            return 'comp wins';
        }
        else if (user === 'Бумага') {
            return 'user wins';
        }
    } else if (comp === 'Бумага') {
        if (user === 'Камень') {
            return 'comp wins';
        }
        if (user === 'Ножницы') {
            return 'user wins';
        }
    } else if (comp === 'Ножницы') {
        if (user === 'Бумага') {
            return 'comp wins';
        }
        if (user === 'Камень') {
            return 'user wins';
        }
    }

alert(game(comp, user));
    
var result = confirm("Повторим ?");
    if (result === true) {
        game();
        return;
    } 
    if (result === false) {
        alert("END");
        return;
    }
}
game();