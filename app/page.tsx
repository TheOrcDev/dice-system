"use client";

import { useState } from "react";
import { Dice, RollResult, rollDice, rollDices } from ".";

export default function Home() {
  const [dice, setDice] = useState<Dice>({ sides: 6, quantity: 1 });
  const [result, setResult] = useState<RollResult | null>(null);

  const handleDiceRoll = () => {
    const result = rollDices(dice);
    setResult(result);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-3">
        Quantity:{" "}
        <input
          type="number"
          value={dice.quantity}
          onChange={(e) => {
            setDice({ ...dice, quantity: parseInt(e.target.value) });
          }}
        />
        Sides:{" "}
        <input
          type="number"
          value={dice.sides}
          onChange={(e) => {
            setDice({ ...dice, sides: parseInt(e.target.value) });
          }}
        />
        <button onClick={handleDiceRoll}>Roll Dice</button>
        {result && (
          <div className="flex flex-col gap-3">
            <p>Total result: {result.total}</p>
            <p>Individual Rolls: {result.rolls.join(", ")}</p>
          </div>
        )}
      </div>
    </main>
  );
}
