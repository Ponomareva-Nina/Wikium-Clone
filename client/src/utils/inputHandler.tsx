import { ChangeEvent } from "react";

export function inputHandler(e: ChangeEvent, setInputValue: (value: string) => void) {
  const input = e.target as HTMLInputElement;
  setInputValue(input.value);
}
