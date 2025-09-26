import "./App.css";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'
import Die from "./Die";

export default function App() {
  function rollDie(): number {
    const maxDieValue = 6;
    return Math.ceil(Math.random() * maxDieValue);
  }

  function generateAllNewDice(): DieModel[] {
    return new Array(10).fill(0).map(
      () =>
        ({
          id: nanoid(),
          value: rollDie(),
          isFrozen: false,
        } as DieModel)
    );
  }

  const [dice, setDice] = useState(() => generateAllNewDice());

  function freezeDie(id: string): void {
    setDice((prevDice: DieModel[]) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isFrozen: !die.isFrozen } : die
      )
    );
  }

  function rollUnfrozenDice(dice: DieModel[]): DieModel[] {
    return dice.map((die) => {
      return {
        ...die,
        value: die.isFrozen ? die.value : rollDie(),
      };
    });
  }

  function rollDice() {
    if (isGameWon) {
      setDice(() => generateAllNewDice())
    } else {
      setDice((prevDice: DieModel[]) => {
        const hasHeldDice = prevDice.some((die) => die.isFrozen);
        return hasHeldDice ? rollUnfrozenDice(prevDice) : generateAllNewDice();
      });
    }
  }

  const diceElements = dice.map((die: DieModel, i: number) => (
    <Die
      key={i}
      id={die.id}
      value={die.value}
      isFrozen={die.isFrozen}
      onClick={() => freezeDie(die.id)}
    />
  ));

  const isGameWon =
    dice.every((die) => die.isFrozen) &&
    new Set(dice.map((die) => die.value)).size === 1;

  const gameButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isGameWon && gameButtonRef.current) {
      gameButtonRef.current.focus();
    }
  }, [isGameWon])

  return (
    <>
      {isGameWon && <Confetti numberOfPieces={5000} frameRate={2000} recycle={false} />}
      <main>
        <h1 className="game-title">Tenzies</h1>
        <div className="game-instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </div>
        <div className="dice-container">{diceElements}</div>
        <button className="roll-dice" onClick={rollDice} ref={gameButtonRef}>
          {isGameWon ? "New Game" : "Roll"}
        </button>
        <div aria-live="polite">
          {isGameWon ? <p>Congratulations! You have won the game!</p> : null}
        </div>
      </main>
    </>
  );
}

export interface DieModel {
  id: string;
  value: number;
  isFrozen: boolean;
}
