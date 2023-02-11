import { LEVEL } from "../date";

export const randomizer = (arr: Array<string>): number => {
  const min = 0;
  const max = arr.length - 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomWord = (level: number) => {
  const ArrCurrentWords = LEVEL[level - 1].words;
  console.log(ArrCurrentWords);
  const wordInx = randomizer(ArrCurrentWords);
  const word = ArrCurrentWords[wordInx];
  console.log(word);
  return word;
};

export const getRandomColor = (level: number) => {
  const ArrCurrentColors = LEVEL[level - 1].colors;
  console.log(ArrCurrentColors);
  const colorInx = randomizer(ArrCurrentColors);
  const color = ArrCurrentColors[colorInx];
  console.log(color);
  return color;
};
