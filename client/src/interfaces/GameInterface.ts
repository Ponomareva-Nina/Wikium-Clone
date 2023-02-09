import { GameCategories } from "./Categories";

export interface GameInterface {
  id: number;
  title: string;
  gamePage: JSX.Element;
  category: GameCategories;
  teaserImg: "string";
  neurons: number;
}
