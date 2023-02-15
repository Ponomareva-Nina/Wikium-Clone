export enum Levels {
  FIRST,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  LAST,
}

export interface LevelInterface {
  level: number;
  arrayWidth: number;
  arrayHeight: number;
  cards: number;
}

export const levelsData: LevelInterface[] = [
  {
    level: Levels.FIRST,
    arrayWidth: 2,
    arrayHeight: 2,
    cards: 2,
  },
  {
    level: Levels.TWO,
    arrayWidth: 3,
    arrayHeight: 2,
    cards: 3,
  },
  {
    level: Levels.THREE,
    arrayWidth: 3,
    arrayHeight: 3,
    cards: 4,
  },
  {
    level: Levels.FOUR,
    arrayWidth: 4,
    arrayHeight: 3,
    cards: 5,
  },
  {
    level: Levels.FIVE,
    arrayWidth: 4,
    arrayHeight: 4,
    cards: 5,
  },
  {
    level: Levels.SIX,
    arrayWidth: 5,
    arrayHeight: 4,
    cards: 6,
  },
  {
    level: Levels.SEVEN,
    arrayWidth: 5,
    arrayHeight: 5,
    cards: 6,
  },
  {
    level: Levels.EIGHT,
    arrayWidth: 6,
    arrayHeight: 5,
    cards: 7,
  },
  {
    level: Levels.LAST,
    arrayWidth: 6,
    arrayHeight: 6,
    cards: 7,
  },
];
