import { NUMBER_ONE } from "../../../constants/constants";
import { Colors, LEVEL } from "../data";

export const randomizer = (arr: Array<Colors>): number => {
  const min = 0;
  const max = arr.length - NUMBER_ONE;
  return Math.floor(Math.random() * (max - min + NUMBER_ONE) + min);
};

export const getRandom = (level: number): Colors => {
  const ArrColorsCurrentLevel = LEVEL[level - NUMBER_ONE].colors;
  const index = randomizer(ArrColorsCurrentLevel);
  const result = ArrColorsCurrentLevel[index];
  return result;
};
