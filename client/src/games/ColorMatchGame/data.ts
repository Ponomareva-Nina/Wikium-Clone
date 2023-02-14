export interface Colors {
  id: Number;
  color: string;
  word: string;
}

interface LevelsInterface {
  level: number;
  colors: Array<Colors>;
  points: number;
  pointsOneNeuron: number;
}

export enum LevelNumber {
  ONE = 0,
  TWO = 1,
  THREE = 2,
}

export const LEVEL: Array<LevelsInterface> = [
  {
    level: 1,
    colors: [
      {
        id: 1,
        color: "#FF0000",
        word: "colorMatchData.red",
      },
      {
        id: 2,
        color: "#0000FF",
        word: "colorMatchData.blue",
      },
      {
        id: 3,
        color: "#008000",
        word: "colorMatchData.green",
      },
    ],
    points: 20,
    pointsOneNeuron: 20,
  },
  {
    level: 2,
    colors: [
      {
        id: 1,
        color: "#FF0000",
        word: "colorMatchData.red",
      },
      {
        id: 2,
        color: "#0000FF",
        word: "colorMatchData.blue",
      },
      {
        id: 3,
        color: "#008000",
        word: "colorMatchData.green",
      },
      {
        id: 4,
        color: "#000000",
        word: "colorMatchData.black",
      },
    ],
    points: 20,
    pointsOneNeuron: 20,
  },
  {
    level: 3,
    colors: [
      {
        id: 1,
        color: "#FF0000",
        word: "colorMatchData.red",
      },
      {
        id: 2,
        color: "#0000FF",
        word: "colorMatchData.blue",
      },
      {
        id: 3,
        color: "#008000",
        word: "colorMatchData.green",
      },
      {
        id: 4,
        color: "#000000",
        word: "colorMatchData.black",
      },
      {
        id: 5,
        color: "#FFA500",
        word: "colorMatchData.orange",
      },
    ],
    points: 20,
    pointsOneNeuron: 20,
  },
];
