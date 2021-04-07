'use strict';

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
const current0El = document.querySelector('#current--0')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

// Condições de início
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

// Rolar o dado
btnRoll.addEventListener('click', function () {
    // 1- Gerar um número randômico no dado
    const result = Math.trunc(Math.random() * (7 - 1) + 1)

    // 2 - Mostrar o dado
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${result}.png`

    // 3 - Checar se o dado é = 1: se sim, trocar para o próximo player
    if (result !== 1) {
        // adicionar o valor do dado para o score atual
        currentScore += result
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        // trocar para o próximo player
        switchPlayer()
    }
})

btnHold.addEventListener('click', function () {
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        btnRoll.disabled = true;
    } else {
        switchPlayer()
    }
})