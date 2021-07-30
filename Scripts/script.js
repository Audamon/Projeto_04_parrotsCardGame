let cardsQtd = Number(prompt("Com quantas cartas quer jogar?"));
let counter = 0;

let gifList = [`<div class="cards">

    <img src="Assets/bobrossparrot.gif">

  </div>`, `<div class="cards">

  <img src="Assets/bobrossparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/explodyparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/explodyparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/fiestaparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/fiestaparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/metalparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/metalparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/revertitparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/revertitparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/tripletsparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/tripletsparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/unicornparrot.gif">

</div>`, `<div class="cards">

<img src="Assets/unicornparrot.gif">

</div>`];
let playedCards = [];

while(cardsQtd < 4 || cardsQtd > 14 || (cardsQtd % 2) !== 0){
    cardsQtd = Number(prompt("Com quantas cartas quer jogar?"));
}


playedCards.sort(compare);

function gameStart(){




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
}



function compare() {
	return Math.random() - 0.5;
}

function turnCard(element){
    
     let index = element.id;
     element.innerHTML = playedCards[Number(index)];

}

gameStart();