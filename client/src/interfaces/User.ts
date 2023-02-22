export interface User {
  _id: string;
  name: string;
  surname: string;
  birthDay: string;
  gender: string;
  education: string;
  avatar: string;
  statistics: GameAttempt[];
  email: string;
}

export interface GameAttempt {
  gameId: number;
  category: string;
  date: string;
  neurons: number;
}
