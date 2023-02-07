export interface GameInterface {
  gameId: number;
  gamePage: JSX.Element;
  category: "memory" | "logics" | "concentration";
  neurons: number;
}
