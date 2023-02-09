import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/UI";
import { RememberOrderRules } from "./components/rulesWindow/Rules";
import styles from "./RememberOrder.module.scss";

export const RememberOrderGame = () => {
  const { t } = useTranslation();

  const [gameField, setGameField] = useState(<RememberOrderRules />);

  const changeGameField = () => {
    const newContent = <h1>{Math.random()}</h1>;
    setGameField(newContent);
  };

  return (
    <div className={styles.game_container}>
      {gameField}
      <Button onClick={changeGameField}>{t("gamesData.startGame")}</Button>
    </div>
  );
};
