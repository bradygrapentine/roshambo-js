let player1Choice = ''
let player2Choice = ''

function clickRockPlayer1(event) {
  let player1Selection = document.querySelector('.player1 h2.selection')
  if (player1Choice === '') {
    player1Choice = 'Rock'
    player1Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}

function clickRockPlayer2(event) {
  let player2Selection = document.querySelector('.player2 h2.selection')
  if (player2Choice === '') {
    player2Choice = 'Rock'
    player2Selection.textContent = 'Hand Selected'
  } else {
    window.alert('Hand already selected!')
    return
  }
  console.log(event.target.value)
  console.log(event)
}

function clickPaperPlayer1(event) {
  let player1Selection = document.querySelector('.player1 h2.selection')
  if (player1Choice === '') {
    player1Choice = 'Paper'
    player1Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}

function clickPaperPlayer2(event) {
  let player2Selection = document.querySelector('.player2 h2.selection')
  if (player2Choice === '') {
    player2Choice = 'Paper'
    player2Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}
function clickScissorsPlayer1(event) {
  let player1Selection = document.querySelector('.player1 h2.selection')
  if (player1Choice === '') {
    player1Choice = 'Scissors'
    player1Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}

function clickScissorsPlayer2(event) {
  let player2Selection = document.querySelector('.player2 h2.selection')
  if (player2Choice === '') {
    player2Choice = 'Scissors'
    player2Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}
//---------------------------------------------//
function clickLizardPlayer1(event) {
  let player1Selection = document.querySelector('.player1 h2.selection')
  if (player1Choice === '') {
    player1Choice = 'Lizard'
    player1Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}

function clickLizardPlayer2(event) {
  let player2Selection = document.querySelector('.player2 h2.selection')
  if (player2Choice === '') {
    player2Choice = 'Lizard'
    player2Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}
function clickSpockPlayer1(event) {
  let player1Selection = document.querySelector('.player1 h2.selection')
  if (player1Choice === '') {
    player1Choice = 'Spock'
    player1Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}

function clickSpockPlayer2(event) {
  let player2Selection = document.querySelector('.player2 h2.selection')
  if (player2Choice === '') {
    player2Choice = 'Spock'
    player2Selection.textContent = 'Hand Selected'
    console.log(event.target.value)
    console.log(event)
  } else {
    window.alert('Hand already selected!')
    console.log(event.target.value)
    console.log(event)
    return
  }
}

function updatePlayer1Name(event) {
  const playerName = document.querySelector('.player1 strong.name')
  playerName.textContent = event.target.value
  if (playerName.textContent === '') {
    playerName.textContent = 'Player 1'
  }
  console.log(event.target.value)
  console.log(event)
}

function updatePlayer2Name(event) {
  const playerName = document.querySelector('.player2 strong.name')
  playerName.textContent = event.target.value
  if (playerName.textContent === '') {
    playerName.textContent = 'Player 2'
  }
  console.log(event.target.value)
  console.log(event)
}

function clickUndoPlayer1(event) {
  player1Choice = ''
  let playerSelection = document.querySelector('.player1 h2.selection')
  playerSelection.textContent = 'Nothing Selected'

  console.log(event.target.value)
  console.log(event)
}

function clickUndoPlayer2(event) {
  player2Choice = ''
  let playerSelection = document.querySelector('.player2 h2.selection')
  playerSelection.textContent = 'Nothing Selected'

  console.log(event.target.value)
  console.log(event)
}

function clickSubmitPlayer(event) {
  if (player1Choice !== '' && player2Choice !== '') {
    const winnerElement = document.querySelector('h2.name')
    if (player1Choice === player2Choice) {
      winnerElement.textContent = 'Draw!'
    } else if (
      (player1Choice === 'Scissors' && player2Choice === 'Paper') ||
      (player1Choice === 'Scissors' && player2Choice === 'Lizard') ||
      (player1Choice === 'Rock' && player2Choice === 'Scissors') ||
      (player1Choice === 'Rock' && player2Choice === 'Lizard') ||
      (player1Choice === 'Paper' && player2Choice === 'Rock') ||
      (player1Choice === 'Paper' && player2Choice === 'Spock') ||
      (player1Choice === 'Lizard' && player2Choice === 'Spock') ||
      (player1Choice === 'Lizard' && player2Choice === 'Paper') ||
      (player1Choice === 'Spock' && player2Choice === 'Scissors') ||
      (player1Choice === 'Spock' && player2Choice === 'Rock')
    ) {
      const player1Name = document.querySelector('.player1 strong.name')
      winnerElement.textContent = player1Name.textContent
      const undoButton2 = document.querySelector('.player2 button.undo')
      undoButton2.disabled = true
      const undoButton1 = document.querySelector('.player1 button.undo')
      undoButton1.disabled = true
    } else {
      const player2Name = document.querySelector('.player2 strong.name')
      winnerElement.textContent = player2Name.textContent
      const undoButton2 = document.querySelector('.player2 button.undo')
      undoButton2.disabled = true
      const undoButton1 = document.querySelector('.player1 button.undo')
      undoButton1.disabled = true
    }
  } else {
    window.alert('Both players must select a hand before submitting')
    return
  }
  console.log(event.target.value)
  console.log(event)
}

function clickResetScoreboard(event) {
  const player1Selection = document.querySelector('.player1 h2.selection')
  const player2Selection = document.querySelector('.player2 h2.selection')
  const winner = document.querySelector('h2.name')

  winner.textContent = ''
  player1Choice = ''
  player2Choice = ''
  player1Selection.textContent = 'Nothing Selected'
  player2Selection.textContent = 'Nothing Selected'
  console.log(event)

  const undoButton2 = document.querySelector('.player2 button.undo')
  undoButton2.disabled = false
  const undoButton1 = document.querySelector('.player1 button.undo')
  undoButton1.disabled = false
}

function main() {
  document
    .querySelector('input.player1')
    .addEventListener('input', updatePlayer1Name)
  document
    .querySelector('input.player2')
    .addEventListener('input', updatePlayer2Name)
  document
    .querySelector('section.display button')
    .addEventListener('click', clickResetScoreboard)
  document
    .querySelector('.player1 button.rock')
    .addEventListener('click', clickRockPlayer1)
  document
    .querySelector('.player1 button.paper')
    .addEventListener('click', clickPaperPlayer1)
  document
    .querySelector('.player1 button.scissors')
    .addEventListener('click', clickScissorsPlayer1)
  document
    .querySelector('.player1 button.lizard')
    .addEventListener('click', clickLizardPlayer1) //
  document
    .querySelector('.player1 button.spock')
    .addEventListener('click', clickSpockPlayer1) //
  document
    .querySelector('.player2 button.rock')
    .addEventListener('click', clickRockPlayer2)
  document
    .querySelector('.player2 button.paper')
    .addEventListener('click', clickPaperPlayer2)
  document
    .querySelector('.player2 button.scissors')
    .addEventListener('click', clickScissorsPlayer2)
  document
    .querySelector('.player2 button.lizard')
    .addEventListener('click', clickLizardPlayer2) //
  document
    .querySelector('.player2 button.spock')
    .addEventListener('click', clickSpockPlayer2) //
  document
    .querySelector('.player1 button.undo')
    .addEventListener('click', clickUndoPlayer1)
  document
    .querySelector('.player2 button.undo')
    .addEventListener('click', clickUndoPlayer2)
  document
    .querySelector('.player1 button.submit')
    .addEventListener('click', clickSubmitPlayer)
  document
    .querySelector('.player2 button.submit')
    .addEventListener('click', clickSubmitPlayer)
}

document.addEventListener('DOMContentLoaded', main)
