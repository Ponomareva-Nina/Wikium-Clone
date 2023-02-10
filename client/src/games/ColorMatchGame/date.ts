interface LevelsInterface {
  level: number;
  colors: Array<string>;
  words: Array<string>;
  points: number;
  pointsOneNeuron: number;
}

export enum LevelNumber {
  ONE = 0,
  TWO = 1,
  THREE = 2,
}

export const LEVEL: LevelsInterface[] = [
  {
    level: 1,
    colors: ["#FF0000", "#0000FF", "#008000"],
    words: ["colorMatchData.red", "colorMatchData.blue", "colorMatchData.green"],
    points: 200,
    pointsOneNeuron: 50,
  },
  {
    level: 2,
    colors: ["#FF0000", "#0000FF", "#008000", "#000000"],
    words: [
      "colorMatchData.red",
      "colorMatchData.blue",
      "colorMatchData.green",
      "colorMatchData.black",
    ],
    points: 205,
    pointsOneNeuron: 45,
  },
  {
    level: 3,
    colors: ["#FF0000", "#0000FF", "#008000", "#000000", "#FFFF00"],
    words: [
      "colorMatchData.red",
      "colorMatchData.blue",
      "colorMatchData.green",
      "colorMatchData.black",
      "colorMatchData.yellow",
    ],
    points: 210,
    pointsOneNeuron: 40,
  },
];
