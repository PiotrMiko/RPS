/*

1.

Dodaj wybory graczy w aiHand (tekstowo)
*/



const startBtn = document.querySelector('.startBtn')
const gameResults = document.querySelector('.result span')
const wins = document.querySelector('.wins span')
const loss = document.querySelector('.losess span')
const playersJoice = document.querySelector('aiHand')


const joiceArr = ['rock', 'paper', 'scissors']
let playerWin = 0
let aiWin = 0
let winCounter = 0
let lossCounter = 0

const game = {
    playerHand: '',
    aiJoice: '',
}

function handSelection() {
    game.playerHand = this.dataset.option
    console.log(`Twój wybór ${game.playerHand}`)
    startGame()
}
const hands = [...document.querySelectorAll('.joiceBtns div')]
hands.forEach(hand => hand.addEventListener('click', handSelection))

const startGame = () => {
    if (game.playerHand !== '') {
        gameResults.textContent = ''
        aiJoice()
        checkResults()
        lossWinCounter()
        result()
        game.playerHand = ''

    } else {
        console.log('wybierz reke')
    }
}
const aiJoice = () => { // game.joice = aiJoice =()=>{}??
    let joiceNumb = Math.floor((Math.random() * joiceArr.length))
    game.aiJoice = joiceArr[joiceNumb]
    console.log(`Wybór gry ${game.aiJoice}`)
}
const checkResults = () => {
    if (game.playerHand == 'rock' && game.aiJoice == 'scissors') {
        playerWin++
    } else if (game.playerHand === 'rock' && game.aiJoice === 'paper') {
        aiWin++
    } else if (game.playerHand === 'paper' && game.aiJoice === 'rock') {
        playerWin++
    } else if (game.playerHand === 'paper' && game.aiJoice === 'scissors') {
        aiWin++
    } else if (game.playerHand === 'scissors' && game.aiJoice === 'rock') {
        aiWin++
    } else if (game.playerHand === 'scissors' && game.aiJoice === 'paper') {
        playerWin++
    }

    console.log(playerWin)
    console.log(aiWin)
}
const result = () => {
    if (playerWin === 3) {
        gameResults.textContent = 'Gratulacje wygrałeś!'
        reset()
    } else if (aiWin === 3) {
        gameResults.textContent = 'Przegrałeś!'
        reset()
    }
}
const reset = () => {
    playerWin = 0
    aiWin = 0
}
lossWinCounter = () => {
    if (playerWin === 3) {
        wins.textContent = ++winCounter
    } else if (aiWin === 3) {
        loss.textContent = ++lossCounter
    }
    console.log(winCounter)
    console.log(lossCounter)
}