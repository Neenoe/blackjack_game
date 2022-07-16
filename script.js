


// blackcard game starts here


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
     name: "Nino",
      chips: 145
}



// let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
let sumEl = document.getElementById("sum-el")

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
console.log(cards)

function getRandomCard() { 
    let randomNumber = Math.floor( Math.random()* 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
      renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent ="Cards: " 
    for (let i = 0; i < cards.length; i ++){
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        
        message = ("Do you want to draw a new card")
    } else if (sum === 21) {
        message = ("You have blackjack")
        hasBlackJack = true
    } else {
        message = ("You are out of the game")
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
    
        cards.push(card)
        console.log(cards)
    
        renderGame()
    }

    
}





// blackjack ends here



