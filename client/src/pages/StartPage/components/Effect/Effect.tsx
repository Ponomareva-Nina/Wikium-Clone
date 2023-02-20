import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/UI";
import { EFFECTS } from "./dataEffect";
import styles from "./Effect.module.scss";

interface EffectProps {
  isAuth?: boolean;
}

export const Effect: FC<PropsWithChildren<EffectProps>> = ({ isAuth }) => {
  const { t } = useTranslation();

  return (
    <section className={cn(styles.section, styles.effect)}>
      <div className={cn(styles.wrapper, styles.section_container)}>
        <div className={cn(styles.effect_description)}>
          <h2 className={cn(styles.start_title)}>{t("startPage.effect")}</h2>
          <p className={cn(styles.start_subtitle)}>{t("startPage.effectDecription")}</p>
        </div>
        <div className={cn(styles.effects_list)}>
          {EFFECTS.map((effect) => (
            <div className={cn(styles.effect_item)} key={effect.id}>
              <p className={cn(styles.effect_item_title)} style={{ color: `${effect.color}` }}>
                {effect.text}
              </p>
              <p className={cn(styles.effect_item_description)}>{t(effect.description)}</p>
            </div>
          ))}
        </div>
        <div className={cn(styles.btn_container)}>
          <NavLink to={isAuth ? "/games" : "/register"}>
            <Button btnSize="huge" appearance="initial">
              {t("header.start")}
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
