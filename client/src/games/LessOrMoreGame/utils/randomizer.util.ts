export const getRandomIntInclusive = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getCorrectAnswer = (leftValue: number, rightValue: number): string => {
  if (leftValue > rightValue) return "left";
  if (rightValue > leftValue) return "right";
  return "equal";
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
    default:
      return {
        left: "",
        right: "",
        correctAnswer: "",
      };
  }
};
