export interface User {
  name: string;
  surname: string;
  birthDay: string;
  gender: string;
  education: string;
  avatar: string;
  level: number;
  statistics: GameAttempt[];
  email: string;
}

export interface GameAttempt {
  gameId: number;
  category: "memory" | "logic" | "attention";
  date: string;
  neurons: number;
}
