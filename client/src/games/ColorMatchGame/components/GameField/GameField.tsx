import cn from "classnames";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnswerButton } from "../../../../components/UI";
import { getRandom } from "../../utils/utils";
import { Field } from "./Field/Field";
import styles from "./GameField.module.scss";
import incorrectIcon from "../../images/incorrect-icon.svg";
import correctIcon from "../../images/correct-icon.svg";
import { TIMEOUT_HALF_SECOND } from "../../../../constants/constants";
import { Colors } from "../../data";

interface GameFieldProps {
  currentLevel: number;
  handleCorrectAnswers?: () => void;
  handleErrorAnswers?: () => void;
}

export const GameField: FC<PropsWithChildren<GameFieldProps>> = ({
  currentLevel,
  handleCorrectAnswers,
  handleErrorAnswers,
}) => {
  const [fieldValue, setFieldValue] = useState<Colors | null>(null);
  const [fieldColor, setFieldColor] = useState<Colors | null>(null);
  const [isAlert, setIsAlert] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [randomColor, setRandomColor] = useState<string>(getRandom(currentLevel).color);
  const [randomWord, setRandomWord] = useState<string>(getRandom(currentLevel).word);
  const { t } = useTranslation();

  const toogleAlert = () => {
    setIsAlert((prev) => !prev);
  };

  const toogleCorrectAnswer = (value: boolean) => {
    setIsCorrectAnswer(value);
  };

  const showAlert = () => {
    toogleAlert();
    setTimeout(() => {
      toogleAlert();
    }, TIMEOUT_HALF_SECOND);
  };

  const getWord = (): { resultValue: Colors; resultColor: Colors } => {
    const resultValue = getRandom(currentLevel);
    const resultColor = getRandom(currentLevel);
    setTimeout(() => {
      setFieldValue(resultValue);
      setFieldColor(resultColor);
      setRandomWord(getRandom(currentLevel).word);
      setRandomColor(getRandom(currentLevel).color);
    }, TIMEOUT_HALF_SECOND);
    return { resultValue, resultColor };
  };

  const checkAnswer = (buttonValue: boolean) => {
    let answer = false;
    if (fieldValue && fieldColor) answer = fieldValue.id === fieldColor.id;
    const userAnswer = answer === buttonValue;
    toogleCorrectAnswer(userAnswer);
    if (handleCorrectAnswers && handleErrorAnswers) {
      if (userAnswer) {
        handleCorrectAnswers();
      } else {
        handleErrorAnswers();
      }
    }
    showAlert();
    getWord();
  };

  useEffect(() => {
    getWord();
  }, []);

  return (
    <>
      <div className={cn(styles.container)}>
        {isAlert && (
          <div
            className={cn(styles.answer_icon)}
            style={{
              backgroundImage: isCorrectAnswer ? `url(${correctIcon})` : `url(${incorrectIcon})`,
            }}
          />
        )}
        {fieldValue && fieldColor && (
          <>
            <Field description={t("colorMatchData.value")}>
              <span
                id={fieldValue.id.toString()}
                className={cn(styles.text)}
                style={{ color: randomColor }}
              >
                {t(fieldValue.word)}
              </span>
            </Field>
            <Field description={t("colorMatchData.color")}>
              <span
                id={fieldColor.id.toString()}
                className={cn(styles.text)}
                style={{ color: fieldColor.color }}
              >
                {t(randomWord)}
              </span>
            </Field>
          </>
        )}
      </div>
      <div className={cn(styles.answer_buttons)}>
        <AnswerButton
          isAlert={isAlert}
          left
          onClick={() => {
            checkAnswer(false);
          }}
        >
          {t("answerBurrons.no")}
        </AnswerButton>
        <AnswerButton
          isAlert={isAlert}
          left={false}
          onClick={() => {
            checkAnswer(true);
          }}
        >
          {t("answerBurrons.yes")}
        </AnswerButton>
      </div>
    </>
  );
};
