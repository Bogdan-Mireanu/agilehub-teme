const cards = document.querySelectorAll(".memory-card");
let hasFlipped = false;
let firstCard, secondCard;
let blockGame = false;
let count = 0;

function flipCard(){
    if(blockGame) return;
    if (this === firstCard) return;
    this.classList.add("flip");
    count++;

    if(!hasFlipped){
        hasFlipped = true;
        firstCard = this;
        
        const showCount = document.querySelector('#flips');
        showCount.textContent = count;
    }else {
        hasFlipped = false;
        secondCard = this;
        const showCount = document.querySelector('#flips');
        showCount.textContent = count;
       
        if(firstCard.dataset.image === secondCard.dataset.image){
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
           
            setTimeout(()=>{
                alert("Congratulation, you found a match!")
            }, 500);
            resetBoard();
      
            
        }else {
            blockGame = true;
            setTimeout(() =>{
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
                resetBoard();
            }, 2000);
        

        }

        setTimeout(()=>{
            let flippedCards = document.querySelectorAll(".flip");
            if(flippedCards.length == 20){
                alert("Victory, you've matched all the cards!");
            };
        }, 2000);
    }
    
    
}

function resetBoard(){
    [hasFlipped, blockGame] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle(){
    cards.forEach(item => {
        let randomFlexOrder = Math.floor(Math.random() * 20);
        item.style.order = randomFlexOrder;
    })
})();

cards.forEach(item => item.addEventListener("click", flipCard));

