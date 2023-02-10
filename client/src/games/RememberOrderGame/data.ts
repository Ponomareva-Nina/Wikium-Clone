export enum Levels {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
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
    level: 1,
    arrayWidth: 3,
    arrayHeight: 2,
    cards: 3,
  },
  {
    level: 2,
    arrayWidth: 3,
    arrayHeight: 3,
    cards: 4,
  },
  {
    level: 3,
    arrayWidth: 4,
    arrayHeight: 3,
    cards: 5,
  },
  {
    level: 4,
    arrayWidth: 4,
    arrayHeight: 4,
    cards: 5,
  },
  {
    level: 5,
    arrayWidth: 5,
    arrayHeight: 4,
    cards: 6,
  },
  {
    level: 6,
    arrayWidth: 5,
    arrayHeight: 5,
    cards: 7,
  },
];
