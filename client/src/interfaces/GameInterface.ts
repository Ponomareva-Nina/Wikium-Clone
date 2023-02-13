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
  neurons: number;
  description: string;
  skills: Skill[];
}
