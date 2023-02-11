import { FC } from "react";
import { Button } from "../../../../components/UI";
import styles from "./RulesGamePage.module.scss";

interface RulesGamePageProps {
  startTrainHandler: () => void;
}

export const RulesGamePage: FC<RulesGamePageProps> = ({ startTrainHandler }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        Необходимо определить, какое число больше и нажать на кнопку с правильным ответом: «левое»,
        «правое» или «равны». По мере прохождения вам будут продемонстрированы арифметические
        выражения. Вам необходимо сравнить их и указать, какое из них больше.
      </div>
      <Button onClick={startTrainHandler}>Начать тренировку</Button>
    </div>
  );
};
