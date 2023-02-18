export type Statistics = Array<GameAttempt>;

export interface GameAttempt {
  gameId: number;
  category: string;
  date: Date;
  neurons: number;
}
