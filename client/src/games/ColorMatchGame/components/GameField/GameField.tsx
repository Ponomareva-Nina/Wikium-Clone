import cn from "classnames";
import { FC, PropsWithChildren, useState } from "react";

import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/UI";
import { getRandom } from "../../utils/utils";
import { Field } from "./Field/Field";
import styles from "./GameFiels.module.scss";

interface GameFieldProps {
  currentLevel: number;
}

export const GameField: FC<PropsWithChildren<GameFieldProps>> = ({ currentLevel }) => {
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

  const checkAnswer = (): boolean => {
    console.log(fieldValue.props.id === fieldColor.props.id);
    return fieldValue.props.id === fieldColor.props.id;
  };

  return (
    <>
      <div className={cn(styles.container)}>
        <Field description={t("colorMatchData.value")}>{fieldValue}</Field>
        <Field description={t("colorMatchData.color")}>{fieldColor}</Field>
      </div>
      <Button onClick={getWord}>Game</Button>
      <Button onClick={checkAnswer}>Check answer</Button>
    </>
  );
};
