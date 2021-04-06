'use strict';

const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.querySelector('.dice')
const current0El = document.querySelector('#current--0')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')

// Condições de início
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')
let currentScore = 0

// Rolar o dado
btnRoll.addEventListener('click', function(){
    // 1- Gerar um número randômico no dado
    const result = Math.trunc(Math.random() * (7-1) + 1)

    // 2 - Mostrar o dado
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${result}.png`

    // 3 - Checar se o dado é = 1: se sim, trocar para o próximo player
    if(result !== 1){
        // adicionar o valor do dado para o score atual
        currentScore += result
        current0El.textContent = currentScore
    }else{
        // trocar para o próximo player
        currentScore = 0
        current0El.textContent = currentScore
    }
})