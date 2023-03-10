import { AnswerVars } from "../types/game-data.interface";

export const getRandomIntInclusive = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getCorrectAnswer = (leftValue: number, rightValue: number): AnswerVars => {
  if (leftValue > rightValue) return AnswerVars.LEFT;
  if (rightValue > leftValue) return AnswerVars.RIGHT;
  return AnswerVars.EQUAL;
};

export const getRandomExpressionsByLevel = (level: number) => {
  const MIN_VALUE = 1;
  const MAX_VALUE = 99;

  switch (level) {
    case 1: {
      const leftValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const rightValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const correctAnswer = getCorrectAnswer(leftValue, rightValue);
      return {
        left: String(leftValue),
        right: String(rightValue),
        correctAnswer,
      };
    }
    case 2: {
      const firstLeftValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE / 2);
      const secondLeftValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE / 2);
      const leftValue = `${firstLeftValue} + ${secondLeftValue}`;
      const rightValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const correctAnswer = getCorrectAnswer(firstLeftValue + secondLeftValue, rightValue);
      return {
        left: String(leftValue),
        right: String(rightValue),
        correctAnswer,
      };
    }
    case 3: {
      const firstRightValue = getRandomIntInclusive(MAX_VALUE ** 0.5, MAX_VALUE);
      const secondRightValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const leftValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const rightValue = `${firstRightValue} - ${secondRightValue}`;
      const correctAnswer = getCorrectAnswer(leftValue, firstRightValue - secondRightValue);
      return {
        left: String(leftValue),
        right: String(rightValue),
        correctAnswer,
      };
    }
    case 4: {
      const firstLeftValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE ** 0.5);
      const secondLeftValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE ** 0.5);
      const leftValue = `${firstLeftValue} ?? ${secondLeftValue}`;
      const rightValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE);
      const correctAnswer = getCorrectAnswer(firstLeftValue * secondLeftValue, rightValue);
      return {
        left: String(leftValue),
        right: String(rightValue),
        correctAnswer,
      };
    }
    case 5: {
      const firstLeftValue = getRandomIntInclusive(MAX_VALUE / 2, MAX_VALUE);
      const secondLeftValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE ** 0.5);
      const leftValue = `${firstLeftValue} ?? ${secondLeftValue}`;
      const rightValue = getRandomIntInclusive(MIN_VALUE, MAX_VALUE / 2);
      const correctAnswer = getCorrectAnswer(firstLeftValue / secondLeftValue, rightValue);
      return {
        left: String(leftValue),
        right: String(rightValue),
        correctAnswer,
      };
    }
    default:
      return {
        left: "",
        right: "",
        correctAnswer: "",
      };
  }
};
