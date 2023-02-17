import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import styles from "./InputFile.module.scss";

interface InputFileProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const InputFile: FC<InputFileProps> = ({ ...rest }) => {
  const { t } = useTranslation();
  return (
    <label className={styles.label}>
      <span className={styles.title}>{t("accountPage.download")}</span>
      <input className={styles.input} type="file" {...rest} />
    </label>
  );
};
