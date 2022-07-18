do {
    var userChoice = prompt("Введите: камень, ножницы или бумага");
var computerChoice = Math.random();
    if (computerChoice < 0.34){
        computerChoice = "камень";
    } else if (computerChoice < 0.67) {
        computerChoice = "бумага";
    } else {
        computerChoice = "ножницы";
    }
	alert(computerChoice);
		
		let comp = computerChoice;
		let user = userChoice;
		function game(comp, user) {
            if (comp === "камень" && user === "бумага"){
                alert("Игрок победил");
            } else if (comp === "камень" && user === "ножницы"){
                alert("CКомпьютер победил");
            } else if (comp = "камень" && user === "камень"){
                alert("It's a tie");
            } else if (comp === "бумага" && user === "ножницы"){
                alert("Игрок победил");
            } else if (comp === "бумага" && user === "камень"){
                alert("CКомпьютер победил");
            } else if (comp === "бумага" && user === "бумага"){
                alert("ничья");
            } else if (comp === "ножницы" && user === "бумага"){
                alert("CКомпьютер победил");
            } else if (comp === "ножницы" && user === "камень"){
                alert("Игрок победил");
            } else if (comp === "ножницы" && user === "scissors"){
                alert("ничья");
            }
        }
    game(comp, user);

    var playAgain = confirm("Сыграем еще разок"); 
} while (playAgain === true);