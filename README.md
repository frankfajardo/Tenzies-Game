# Tenzies Game (made with React + TypeScript + Vite)

This is a game I developed as I was studying React via [Scrimba](https://scrimba.com/).

It is called Tenzies. 

## How to play the game:

1. The game begins with 10 dices (hence the name Tenzies). The aim is to reach a point where all 10 dice have the same face (number) and all are held (turned green).
2. To start, first check if there is a a set of dice with same face (number). If there are multiple sets, choose a set with the highest number of dice. You hold those dice by clicking them (or tabbing to each die and pressing the `Space` bar). A held die is coloured green. You can un-hold a die by clicking it again (or pressing the `Space` bar again).
3. Roll the remaining dice by clicking the *Roll* button.
4. If any of the rolled dice end up having the same face (number) as the other held dice, you can also hold those dice so you have more held dice with the same face (number).
5. Repeat steps 3 and 4 until all dice are the same face (number) and all are held.

## About the game

This game uses the React library.

Some of the React topics covered in this game are:
- JSX
- Fragments
- Props and State
- React hooks such as `useState`, `useEffect`, and `useRef`
- Parent/Child components interaction

Some front-end development (non-React) topics that were applied in this game are:
- Styling via CSS - The "Learn React" Scrimba lesson includes styling the game based on Figma specs.
- A11y - The lesson also includes challenges in making the game accessible via the keyboard and screen readers

### Screenshots

![Start of the game](./docs/Screenshot1.png)

![End of game](./docs/Screenshot2.png)