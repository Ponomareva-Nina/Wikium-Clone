import { Colors, LEVEL } from "../data";

export const randomizer = (arr: Array<Colors>): number => {
  const min = 0;
  const max = arr.length - 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandom = (level: number): Colors => {
  const ArrColorsCurrentLevel = LEVEL[level - 1].colors;
  const index = randomizer(ArrColorsCurrentLevel);
  const result = ArrColorsCurrentLevel[index];
  return result;
};
