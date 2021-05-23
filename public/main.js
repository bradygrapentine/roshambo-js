// let adjustScore = 1

// function plusButtonClickTeam1(event) {
//   const team1Score = document.querySelector('.team1 .score')
//   const team2Score = document.querySelector('.team2 .score')
//   const team1Name = document.querySelector('.team1 h2')
//   const team2Name = document.querySelector('.team2 h2')

//   if (Number(team2Score.textContent) >= 21) {
//     window.alert(`Game Over. ${team2Name.textContent} won. You lost`)
//     return
//   }
//   if (Number(team1Score.textContent) >= 21) {
//     window.alert(`Game Over. You, ${team1Name.textContent}, won.`)
//     return
//   }

//   const current = Number(Number(team1Score.textContent) + adjustScore)
//   team1Score.textContent = current

//   if (Number(team1Score.textContent) === 21) {
//     window.alert(`You, ${team1Name.textContent}, won!`)
//     const header = document.querySelector('.team1 h2')
//     header.textContent = `Winner: ${team1Name.textContent}`
//   }

//   console.log(event.target.value)
//   console.log(event)
// }
// function plusButtonClickTeam2(event) {
//   const team2Score = document.querySelector('.team2 .score')
//   const team1Score = document.querySelector('.team1 .score')
//   const team2Name = document.querySelector('.team2 h2')
//   const team1Name = document.querySelector('.team1 h2')

//   if (Number(team1Score.textContent) >= 21) {
//     window.alert(`Game Over. ${team1Name.textContent} won. You lost`)
//     return
//   }
//   if (Number(team2Score.textContent) >= 21) {
//     window.alert(`Game Over. You, ${team2Name.textContent}, won.`)
//     return
//   }

//   const current = Number(Number(team2Score.textContent) + adjustScore)
//   team2Score.textContent = current
//   if (Number(team2Score.textContent) === 21) {
//     window.alert(`You, ${team2Name.textContent}, won!`)
//     const header = document.querySelector('.team2 h2')
//     header.textContent = `Winner: ${team2Name.textContent}`
//   }
//   console.log(event.target.value)
//   console.log(event)
// }
// function minusButtonClickTeam1(event) {
//   const team1Score = document.querySelector('.team1 .score')
//   const team2Score = document.querySelector('.team2 .score')
//   const team2Name = document.querySelector('.team2 h2')
//   const team1Name = document.querySelector('.team1 h2')

//   if (Number(team2Score.textContent) >= 21) {
//     window.alert(`Game Over. ${team2Name.textContent} won. You lost`)
//     return
//   }
//   if (Number(team1Score.textContent) >= 21) {
//     window.alert(`Game Over. You, ${team1Name.textContent}, won.`)
//     return
//   }

//   if (Number(team1Score.textContent) <= 0) {
//     window.alert('Invalid request')
//     return
//   }
//   const current = Number(Number(team1Score.textContent) - adjustScore)
//   team1Score.textContent = current

//   console.log(event.target.value)
//   console.log(event)
// }
// function minusButtonClickTeam2(event) {
//   const team2Score = document.querySelector('.team2 .score')
//   const team1Score = document.querySelector('.team1 .score')
//   const team2Name = document.querySelector('.team2 h2')
//   const team1Name = document.querySelector('.team1 h2')

//   if (Number(team1Score.textContent) >= 21) {
//     window.alert(`Game Over. ${team1Name.textContent} won. You lost`)
//     return
//   }
//   if (Number(team2Score.textContent) >= 21) {
//     window.alert(`Game Over. You, ${team2Name.textContent}, won.`)
//     return
//   }
//   if (Number(team2Score.textContent) <= 0) {
//     window.alert('Invalid request')
//     return
//   }
//   const current = Number(Number(team2Score.textContent) - adjustScore)
//   team2Score.textContent = current

//   console.log(event.target.value)
//   console.log(event)
// }
// function updateTeam1Name(event) {
//   const teamName = document.querySelector('.team1 h2')
//   teamName.textContent = event.target.value
//   if (teamName.textContent === '') {
//     teamName.textContent = 'Team 1'
//   }
//   console.log(event.target.value)
//   console.log(event)
// }

// function updateTeam2Name(event) {
//   const teamName = document.querySelector('.team2 h2')
//   teamName.textContent = event.target.value
//   if (teamName.textContent === '') {
//     teamName.textContent = 'Team 2'
//   }
//   console.log(event.target.value)
//   console.log(event)
// }

// function clickToResetScoreboard(event) {
//   const team2Name = document.querySelector('.team2 h2')
//   const team1Name = document.querySelector('.team1 h2')
//   const team1Score = document.querySelector('.team1 .score')
//   const team2Score = document.querySelector('.team2 .score')
//   team1Score.textContent = 0
//   team2Score.textContent = 0
//   team2Name.textContent = 'Team 2'
//   team1Name.textContent = 'Team 1'
//   console.log(event)
// }

let player1Choice = ''
let player2Choice = ''
let submissionCount = 0
// let player1Name = 'Player 1'
// let player2Name = 'Player 2'

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
    player2Choice = 'paper'
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
    let winnerName = winnerElement.textContent
    if (player1Choice === player2Choice) {
      winnerName = 'Draw!'
    } else if (
      (player1Choice === 'Scissors' && player2Choice === 'Paper') ||
      (player1Choice === 'Rock' && player2Choice === 'Scissors') ||
      (player1Choice === 'Paper' && player2Choice === 'Rock')
    ) {
      const player1Name = document.querySelector('.player1 strong.name')
      winnerName = player1Name.value
    } else {
      const player2Name = document.querySelector('.player2 strong.name')
      winnerName = player2Name.value
    }
  } else {
    window.alert('Both players must select a hand before submitting')
    return
  }
  console.log(event.target.value)
  console.log(event)
}

// function clickSubmitPlayer2(event) {
//   const playerName = document.querySelector('.player2 strong.name')
//   playerName.textContent = event.target.value
//   if (playerName.textContent === '') {
//     playerName.textContent = 'Player 2'
//   }
//   console.log(event.target.value)
//   console.log(event)
// }

function clickResetScoreboard(event) {
  const player1Name = document.querySelector('.player1 strong.name')
  const player2Name = document.querySelector('.player2 strong.name')
  const player1Selection = document.querySelector('.player1 h2.selection')
  const player2Selection = document.querySelector('.player2 h2.selection')
  const winner = document.querySelector('h2.intro')

  winner.textContent = 'The winner is...'
  player1Choice = ''
  player2Choice = ''
  player1Selection.textContent = 'Nothing Selected'
  player2Selection.textContent = 'Nothing Selected'
  player1Name.textContent = 'Player 1'
  player2Name.textContent = 'Player 2'
  console.log(event)
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
    .querySelector('.player2 button.rock')
    .addEventListener('click', clickRockPlayer2)
  document
    .querySelector('.player2 button.paper')
    .addEventListener('click', clickPaperPlayer2)
  document
    .querySelector('.player2 button.scissors')
    .addEventListener('click', clickScissorsPlayer1)
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
