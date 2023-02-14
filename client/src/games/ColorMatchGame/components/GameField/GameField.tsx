import cn from "classnames";
import { FC, PropsWithChildren, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { AnswerButton } from "../../../../components/UI";
import { getRandom } from "../../utils/utils";
import { Field } from "./Field/Field";
import styles from "./GameFiels.module.scss";

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
  const { t } = useTranslation();

  const getWord = (): void => {
    const resultValue = getRandom(currentLevel);
    console.log("Value", resultValue);
    const resultColor = getRandom(currentLevel);
    console.log("Color", resultColor);
    setFieldValue(
      <span id={resultValue.id.toString()} style={{ color: getRandom(currentLevel).color }}>
        {t(resultValue.word)}
      </span>
    );
    setFieldColor(
      <span id={resultColor.id.toString()} style={{ color: resultColor.color }}>
        {t(getRandom(currentLevel).word)}
      </span>
    );
  };

  const checkAnswer = (buttonValue: boolean): boolean => {
    const answer = fieldValue.props.id === fieldColor.props.id;
    console.log("Check result: ", answer);
    console.log("Pressed button: ", buttonValue);
    console.log("Ответ верный? ", answer === buttonValue);
    if (handleCorrectAnswers && handleErrorAnswers) {
      if (answer === buttonValue) {
        handleCorrectAnswers();
      } else {
        handleErrorAnswers();
      }
    }
    getWord();
    return answer;
  };

  useEffect(() => {
    console.log("Вызов useEffect");
    getWord();
  }, []);

  return (
    <>
      <div className={cn(styles.container)}>
        <div>
          <Field description={t("colorMatchData.value")}>{fieldValue}</Field>
        </div>
        <Field description={t("colorMatchData.color")}>{fieldColor}</Field>
      </div>
      <div className={cn(styles.answer_buttons)}>
        <AnswerButton left onClick={() => checkAnswer(false)}>
          {t("answerBurrons.no")}
        </AnswerButton>
        <AnswerButton left={false} onClick={() => checkAnswer(true)}>
          {t("answerBurrons.yes")}
        </AnswerButton>
      </div>
    </>
  );
};
