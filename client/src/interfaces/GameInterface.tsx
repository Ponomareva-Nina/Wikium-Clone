export interface GameInterface {
  id: number;
  title: string;
  gamePage: JSX.Element;
  category: "memory" | "logics" | "concentration";
  teaserImg: "string";
  neurons: number;
}
