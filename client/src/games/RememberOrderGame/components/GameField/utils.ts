import { LevelInterface } from "../../data";

export function randomizeCards(arr: Array<number>, cardsNumber: number) {
  return arr
    .map((item, index) => {
      if (index < cardsNumber) {
        return { value: index + 1, id: index };
      }
      return { value: item, id: index };
    })
    .sort(() => Math.random() - 0.5);
}

export function createCardsArray(level: LevelInterface) {
  const arr = new Array(level.arrayHeight * level.arrayWidth).fill(0);
  const cards = randomizeCards(arr, level.cards);
  return cards;
}
