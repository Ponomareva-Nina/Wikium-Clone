import { FC, PropsWithChildren } from "react";

interface GameFieldProps {
  level: number;
  registerCorrectAnswer: () => void;
  registerMistake: () => void;
}

export const GameField: FC<PropsWithChildren<GameFieldProps>> = ({
  level,
  registerCorrectAnswer,
  registerMistake,
}) => {
  return (
    <>
      <div
        role="textbox"
        tabIndex={-1}
        onClick={registerCorrectAnswer}
        onKeyDown={registerCorrectAnswer}
      >
        correct {level}
      </div>
      <button type="button" onClick={registerMistake}>
        mistake
      </button>
    </>
  );
};
