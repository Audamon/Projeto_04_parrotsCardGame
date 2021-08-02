let cardsQtd = Number(prompt("Com quantas cartas quer jogar?"));
let counter = 0;

let index1 = null;
let index2 = null;
let index;
let plays = 0;
let rightCards = 0;
let gifList = [`<img src="Assets/bobrossparrot.gif">`, `<img src="Assets/bobrossparrot.gif">`, `<img src="Assets/explodyparrot.gif">`, `<img src="Assets/explodyparrot.gif">`, `<img src="Assets/fiestaparrot.gif">`, `<img src="Assets/fiestaparrot.gif">`, `<img src="Assets/metalparrot.gif">`, `<img src="Assets/metalparrot.gif">`, `<img src="Assets/revertitparrot.gif">`, `<img src="Assets/revertitparrot.gif">`, `<img src="Assets/tripletsparrot.gif">`, `<img src="Assets/tripletsparrot.gif">`,`<img src="Assets/unicornparrot.gif">`, `<img src="Assets/unicornparrot.gif">`];
let playedCards = [];

let time;
let seconds = 0;

function gameStart(){
    
    while(cardsQtd < 4 || cardsQtd > 14 || (cardsQtd % 2) !== 0){
        cardsQtd = Number(prompt("Com quantas cartas quer jogar?"));
    }
    

    let cardDeck = document.querySelector("ul");
    counter = 0;
    while(counter < cardsQtd){
        let cardList = `<li>
         <div class="cards" onclick="turnCard(this)" id=${counter}>
            <img src="Assets/front.png">
            </div>
        </li>`;

        cardDeck.innerHTML += cardList;
        playedCards.push(gifList[counter]);
        counter++;
    }
    playedCards.sort(compare);
    timer();
}

function compare() {
	return Math.random() - 0.5;
}

function turnCard(element){
    
    index = element.id;
    
    element.innerHTML = playedCards[Number(index)];
    if(index1 === null){
        index1 = index;
    } else if(index2 === null){
        index2 = index;
        compareCards(index1,index2);
         index1 = null;
         index2 = null;
    }     
}

function compareCards( index1, index2){
    let card1 = document.getElementById(index1).innerHTML
    let card2 = document.getElementById(index2).innerHTML
    plays++;
    if(card1 !== card2){
        setTimeout(turnCardsBack, 1000, index1, index2) 
    }else{
        rightCards++;
        if(rightCards === (cardsQtd/2)){
            setTimeout(endGame, 500, plays, seconds);
             clearInterval(time);
        }
    }
    
}

function turnCardsBack(index1, index2){
    let card1 = document.getElementById(index1).innerHTML =  `
    <img src="Assets/front.png">
   `;
   let card2 = document.getElementById(index2).innerHTML =  `
    <img src="Assets/front.png">
    `;
}

function endGame(plays, seconds){
    alert(`Você ganhou em ${plays} jogadas e ${seconds} segundos!`);
    let rePlay = prompt("Se quiser jogar de novo digite 'sim' ");
    if(rePlay === "sim"){
        cleanScreen();
        setTimeout(gameStart, 500);
    }
}

function cleanScreen(){
    let ul = document.querySelector("ul");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    } 
    cardsQtd = 0;
    playedCards = [];
    rightCards = 0;
    plays = 0;
    const timer = document.querySelector(".timer");
    seconds = 0;
    timer.innerHTML = seconds;
}

 function timer(){
     time = setInterval(increase, 1000);
 }

 function increase(){
     const timer = document.querySelector(".timer");
     seconds++;
     timer.innerHTML = seconds;
 }
gameStart();