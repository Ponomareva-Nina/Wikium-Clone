import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["lds-roller"]}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
