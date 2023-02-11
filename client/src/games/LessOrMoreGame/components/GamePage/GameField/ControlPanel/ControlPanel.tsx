import { Button } from "../../../../../../components/UI";
import styles from "./ControlPanel.module.scss";

export const ControlPanel = () => {
  return (
    <div className={styles.wrapper}>
      <Button>Левое</Button>
      <Button>Равны</Button>
      <Button>Правое</Button>
    </div>
  );
};
