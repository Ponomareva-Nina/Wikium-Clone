import { FC } from "react";
import { GameCategories } from "./Categories";

export interface Skill {
  title: string;
  description: string;
  icon: string;
}
export interface GameInterface {
  id: number;
  title: string;
  gamePage: FC;
  category: GameCategories;
  teaserImg: string;
  gameIcon: string;
  neurons: number;
  description: string;
  skills: Skill[];
}

export interface GameItem {
  game: GameInterface;
  attempts: number;
}

export type GameStatus = "started" | "finish" | "init";
export interface ResultData {
  correctAnswers: number;
  mistakes: number;
  score: number;
  neurons: number;
}

export interface GameProps {
  finishGame: (resultData: ResultData) => void;
}
