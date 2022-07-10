let user = prompt('Введите ваш выбор: (Камень или Ножницы или Бумага)');
function fullGame() {
    function getComputerChoice() {
        var computerChoice = Math.random();

        if (computerChoice <= r) {
            return 'Камень';
        } else if (computerChoice <= p) {
            return 'Бумага';
        } else {
            return 'Ножницы';
        }
    }

    let comp = getComputerChoice();
    alert(comp);

    
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
    }
    alert(game(comp, user));
    
    var result = confirm("Хотите повторить ?");
    if (result = true) {
        fullGame();
        return;
    } else (result = false) {
        alert("END");
        
    }
}
fullGame();