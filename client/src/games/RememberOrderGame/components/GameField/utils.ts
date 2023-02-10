import { LevelInterface } from "../../data";
import { CardInterface } from "../types/types";

export function randomizeCards(arr: Array<number>, cardsNumber: number): Array<CardInterface> {
  return arr
    .map((item, index) => {
      if (index < cardsNumber) {
        return { value: index + 1, id: index, matched: false };
      }
      return { value: item, id: index, matched: false };
    })
    .sort(() => Math.random() - 0.5);
}

export function createCardsArray(level: LevelInterface) {
  const arr = new Array(level.arrayHeight * level.arrayWidth).fill(0);
  const cards = randomizeCards(arr, level.cards);
  return cards;
}
