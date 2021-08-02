let cardsQtd = Number(prompt("Com quantas cartas quer jogar?"));
let counter = 0;
let index = [];

let plays = 0;
let rightCards = 0;
let gifList = [`Assets/bobrossparrot.gif`, `Assets/bobrossparrot.gif`, `Assets/explodyparrot.gif`, `Assets/explodyparrot.gif`, `Assets/fiestaparrot.gif`, `Assets/fiestaparrot.gif`, `Assets/metalparrot.gif`, `Assets/metalparrot.gif`, `Assets/revertitparrot.gif`, `Assets/revertitparrot.gif`, `Assets/tripletsparrot.gif`, `Assets/tripletsparrot.gif`,`Assets/unicornparrot.gif`, `Assets/unicornparrot.gif`];
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
    
    if(index[0] === undefined){
        index[0] = element.id;
        
        element.querySelector("img").src = playedCards[Number(index[0])];
    } else if(index[1] === undefined){
        index[1] = element.id;
        
        element.querySelector("img").src = playedCards[Number(index[1])];
        compareCards(index);
        index = [];
    }
    
}

function compareCards(index){
    
    let card1 = document.getElementById(index[0]).querySelector("img").src
    let card2 = document.getElementById(index[1]).querySelector("img").src
    plays++;
    if(card1 !== card2){
        setTimeout(turnCardsBack, 1000, index) ;
        
    }else{
        rightCards++;
        if(rightCards === (cardsQtd/2)){
            setTimeout(endGame, 500, plays, seconds);
             clearInterval(time);
        }
    }
    
}

function turnCardsBack(index){
    
    let card1 = document.getElementById(index[0]).innerHTML =  `
    <img src="Assets/front.png">
   `;
   let card2 = document.getElementById(index[1]).innerHTML =  `
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