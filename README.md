# Roshambo Js

![SDG](./docs/button.png)

Objectives:

- Work with JavaScript and the DOM
- Practice conditional logic

Background:

- See the Wikipedia page about Rock, Paper, Scissors

How to get started:

- Get familiar with rock, paper, scissors if you haven't played before (or in a while)
<!-- DONE -->
- Draw out on paper/whiteboard/computer the rough design of your application
<!-- DONE -->
- See Explorer Mode for the UI requirements
<!-- DONE -->
- Start by placing all the HTML elements on the page
<!-- DONE -->
- Style the user interface
<!-- DONE -->
- In English (not code), write out ALL the steps the application needs to take => For example "When user one clicks on Rock, remember that user one chooses Rock"
<!-- DONE -->

Algorithm:
(A) Render Page + Following Options
==> (1) Player Select Hand
=====> alter state,display result, (A -> i)
========> (i) Other Player Select Hand
===============> ~if reset, (2)
===============> ~if undo, (ii)
===============> ~if link, (4)
===============> ~if enter name, (3)
===============> ~o'w, Compare Hands,display result,reset ---------------> hands, (A)
========> (ii) Undo Selection
===============> clear selection,display result, (A -> i)
==> (2) Reset Game
=====> reset state,display result,and start from (A)
==> (3) Enter a Name
=====> alter state,display result,start from (A),advance
-----> to (1) or (i)
==> (4) Link to More Information
=====> redirect to external link

(Undo, reset, and other player are irrelevant in initial case if programmed so player selection doesn't matter)

Function Below Will Check Input

<!-- const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  } else if ((p1 === 'scissors' && p2 ==='paper') || (p1 ==='rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock')) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
}; -->

Explorer Mode:

Part 1:
NOTE: Complete part 1 before moving on to part 2

- There should be three buttons for Player One: Rock, Paper, Scissors
- There should be three buttons for Player Two: Rock, Paper, Scissors
- Player One should be able to select their throw
- Player Two should be able to select their throw
- After both players make their selection, I should be told who won and the game should be over.

Part 2:

- You have heard about Rock, Paper, Scissors, but have you tried Rock, Paper, Scissors, Lizard, Spock? Modify your game to allow the - extra options!
- Have fun with the CSS by adding colors, animations, and effects to make the game more enjoyable

Adventure Mode:

- Your game is currently only 1 vs 1, add the ability to add more computer or users players to the game
