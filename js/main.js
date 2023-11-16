'use strict';

const board = document.querySelector('.board');

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
function campoMinato(){
    resetFn()
    
    let level = document.getElementById('level');
    let levelStatus = level.value; //sarà determinato dall'utente con la select html
    const cellNumber = setCellNumber(levelStatus);
    console.log(levelStatus);
    console.log(cellNumber);

    creatBoard(board, cellNumber);
}
// Funzione di reset
function resetFn(){
    board.innerHTML = "";
}

const playButton = document.querySelector('.play-btn'); 

// Click al bottone compare la board
playButton.addEventListener('click', campoMinato);
