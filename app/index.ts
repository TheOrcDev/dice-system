export interface Dice {
  sides: number;
  quantity: number;
}

export interface RollResult {
  total: number;
  rolls: number[];
}

export const rollDice = (sides: number): number => {
  return Math.floor(Math.random() * sides) + 1;
};

export const rollDices = (dice: Dice): RollResult => {
  const rolls: number[] = [];
  let total = 0;

  for (let i = 0; i < dice.quantity; i++) {
    const roll = rollDice(dice.sides);
    rolls.push(roll);
    total += roll;
  }

  return { total, rolls };
};
