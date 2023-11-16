'use strict';

const board = document.querySelector('.board');
const playButton = document.querySelector('.play-btn'); 
let bombNumber = 16;

// funzione che crea elemento
function myCreateElement(tag, className, content){
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

    return element;
}
 //numero di celle in funzione della scelta utente
function setCellNumber(level){
    let cellNumber;
    switch(level){
        case 'medium':
            cellNumber = 81;
            break;

        case 'hard':
            cellNumber = 49;
            break;

        case 'easy':
        default:
            cellNumber = 100;
            break;
    }
    return cellNumber;
}
// funzione che crea gli elementi nella board
function creatBoard (mainElement, cellNumber){
    
    const fragment = document.createDocumentFragment();
    const cells = Math.sqrt(cellNumber);

    for( let i = 1; i <= cellNumber; i++){
        const myElement = myCreateElement('div','cell', i);
        myElement.classList.add(`cell-${cells}`);

        myElement.addEventListener('click', function(){
            console.log(i); //stampo il numero della cella cliccata
            myElement.classList.add('active-cell'); // cambio colore della cella cliccata
        });
        fragment.append(myElement);
    }
    mainElement.append(fragment);
}
// Funzione di reset
function resetFn(){
    board.innerHTML = "";
}

// Funzione genera numeri random
function randomNumber(cellNumber) {
    const bombArray = [];

    while (bombArray.length < bombNumber){
        const random = Math.floor(Math.random() * cellNumber + 1);

        if(!bombArray.includes(random)){
            bombArray.push(random);
        }

    }
    return bombArray;

}
// Funzione principale
function campoMinato(){
    resetFn()
    
    let level = document.getElementById('level');
    let levelStatus = level.value; //sarà determinato dall'utente con la select html
    const cellNumber = setCellNumber(levelStatus);
    console.log(levelStatus);
    console.log(cellNumber);

    let bombArray = randomNumber(cellNumber);
    console.log(bombArray);

    creatBoard(board, cellNumber, bombArray);
}

// Click al bottone compare la board
playButton.addEventListener('click', campoMinato);
