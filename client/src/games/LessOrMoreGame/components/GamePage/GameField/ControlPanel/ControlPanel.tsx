import { FC } from "react";
import { Button } from "../../../../../../components/UI";
import styles from "./ControlPanel.module.scss";

interface ControlPanelProps {
  setAnswerHandler: (answer: "left" | "equal" | "right") => void;
}

export const ControlPanel: FC<ControlPanelProps> = ({ setAnswerHandler }) => {
  return (
    <div className={styles.wrapper}>
      <Button onClick={() => setAnswerHandler("left")}>Левое</Button>
      <Button onClick={() => setAnswerHandler("equal")}>Равны</Button>
      <Button onClick={() => setAnswerHandler("right")}>Правое</Button>
    </div>
  );
};
