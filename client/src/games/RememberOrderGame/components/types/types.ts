export interface CardInterface {
  value: number;
  id: number;
  matched: boolean;
  error?: boolean;
  solved?: boolean;
}

export enum CardProps {
  MATCHED = "matched",
  ERROR = "error",
  SOLVED = "solved",
}
