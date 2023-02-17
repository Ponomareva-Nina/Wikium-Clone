import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Select.module.scss";

export interface Option {
  value: string;
  title: string;
}
interface SelectProps
  extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: Option[];
}

export const Select: FC<SelectProps> = ({ options, placeholder, ...rest }) => {
  const { t } = useTranslation();
  return (
    <select className={styles.select} {...rest}>
      <option disabled value="">
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {t(option.title)}
        </option>
      ))}
    </select>
  );
};
