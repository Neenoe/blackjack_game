// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// // console.log(countEl)

// let count = 0

// // console.log(saveEl)

// function increment() {
    
//     count += 1
//     countEl.textContent = count
    
// }



// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
    
// }






// save()


// let name = "Nino"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + " " + name

// // console.log(myGreeting)

// let point = 4
// let bonusPoint = "62"

// let totalPoint = point + bonusPoint

// console.log(totalPoint)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Nino"
// let greeting = "Welcome back  "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText = welcomeEl.innerText + " 😃"

// let myPoints = 3

// function totalPoint() {
//      myPoints += 3
    
// }


// function removePoint() {
//     myPoints -= 1
// }
// totalPoint()
// totalPoint()
// totalPoint()
// removePoint()
// removePoint()


// console.log(myPoints)


// console.log("2" + 2)
// console.log(11 + 7)
// console.log(6 + "5")
// console.log(5 + "5")
// console.log("My points: " + 5 + 9)
// console.log(2 + 2)
// console.log("11" + "14")

// shoes tutorial goes here
// let myError = document.getElementById("error")
// console.log(myError)


// function eror() {
//     console.log("button clicked")
//     myError.textContent = "Oops, something went wrong"
// }

// ends here 





// simple calculator starts here

// let num1 = 6
// let num2 = 4

// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl = document.getElementById("sum-el")

// function add() {
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }

// function subtract() {
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }

// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }

// function divide() {
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }



// ends here 


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



// let course = {
//     title: "Learn CSS grid for free",
//     lessons: 16,
//     creator: "Nino sam",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.level)




// let likesDocumentaries = true
// let likesStartUps = true

// if (likesDocumentaries === true || likesStartUps === false) {
//       recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this film we think you will like")
// }


// let messages = [
//     "Hey Nino, how are you?",
//     "I'm okay, how are you too?",
//     "All great, thanks!."
// ]

// messages.pop()
// console.log(messages)


// loops

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good mate",
//     "Same here",
//     "well"
// ]

// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

// for (let i = 0; i < 5; i+= 1) {
//     console.log(messages[i])
// }

// let sentence = ["Hello ", "my ", "name ", "is ", "nin "]
// let greetingEl = document.getElementById("greeting-el" )


// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i]
// }

// let player1Time = 109
// let player2Time = 107

// function getTime() {
//     if (player1Time < player2Time) {
//         return(player1Time)
//     } else if (player2Time < player1Time) {
//         return(player2Time)
//     } else {
//         return(player1Time)   }
// }

// // let fastestRace = getTime()
// // console.log(fastestRace)

// function getTotalRace() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRace()

// console.log(totalTime)

// let randomNumber = Math.floor(Math.random() * 6 ) + 1

// console.log(randomNumber)

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6 ) + 1
//     return randomNumber


// }

// console.log( rollDice() )
