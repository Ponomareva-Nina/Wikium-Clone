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
  const [fieldValue, setFieldValue] = useState(<span />);
  const [fieldColor, setFieldColor] = useState(<span />);
  const [isAlert, setIsAlert] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const { t } = useTranslation();

  const toogleAlert = () => {
    setIsAlert((prev) => !prev);
  };

  const toogleCorrectAnswer = (value: boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false);
  };

  const showAlert = () => {
    toogleAlert();
    setTimeout(() => {
      toogleAlert();
    }, TIMEOUT_HALF_SECOND);
  };

  const getWord = (): void => {
    const resultValue = getRandom(currentLevel);
    const resultColor = getRandom(currentLevel);
    setTimeout(() => {
      setFieldValue(
        <span
          id={resultValue.id.toString()}
          className={cn(styles.text)}
          style={{ color: getRandom(currentLevel).color }}
        >
          {t(resultValue.word)}
        </span>
      );
      setFieldColor(
        <span
          id={resultColor.id.toString()}
          className={cn(styles.text)}
          style={{ color: resultColor.color }}
        >
          {t(getRandom(currentLevel).word)}
        </span>
      );
    }, TIMEOUT_HALF_SECOND);
  };

  const checkAnswer = (buttonValue: boolean) => {
    const answer = fieldValue.props.id === fieldColor.props.id;
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
        <Field description={t("colorMatchData.value")}>{fieldValue}</Field>
        <Field description={t("colorMatchData.color")}>{fieldColor}</Field>
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
