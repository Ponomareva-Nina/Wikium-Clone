import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./GameField.module.scss";
import { LevelInterface } from "../../data";
import { Button } from "../../../../components/UI";
import { Card } from "../Card/Card";
import { CardInterface } from "../types/types";

interface GameFieldProps {
  gameCards: CardInterface[];
  level: LevelInterface;
  flipCards: () => void;
  handleChoice: (card: CardInterface) => void;
}

export const GameField: FC<GameFieldProps> = ({ gameCards, level, flipCards, handleChoice }) => {
  const { t } = useTranslation();

  const templateStyle = {
    gridTemplateColumns: `repeat(${level.arrayWidth}, 1fr)`,
    gridTemplateRows: `repeat(${level.arrayHeight}, 1fr)`,
  };

  return (
    <>
      <div className={styles.cards_container} style={templateStyle}>
        {gameCards.map((card) => {
          return <Card key={card.id} clickHandler={handleChoice} card={card} />;
        })}
      </div>
      <Button onClick={flipCards} appearance="neutral">
        {t("rememberOrder.rememberedBtn")}
      </Button>
    </>
  );
};
