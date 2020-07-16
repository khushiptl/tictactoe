let button = document.getElementById("reset");
var cells = document.querySelectorAll('.row > div');
var player1 = 'X';
var player2 = 'O';
var currentTurn = 1;



button.addEventListener('reset',reset);

for (let i = 0; i< cells.length; i++){
cells[i].addEventListener('click',cellClicked);
}

function cellClicked() {
     if (currentTurn === 1) {
         event.target.innerHTML = player1;
         currentTurn++;
         }else{
             event.target.innerHTML = player2;
             currentTurn--;
         }
   
}

function reset(){
    for (let i = 0; i< cells.length; i++){
    cell[i].event.target.innerHTML = '';
    }
    console.log('resetting');
}