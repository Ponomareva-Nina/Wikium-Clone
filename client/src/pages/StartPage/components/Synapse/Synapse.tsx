import { useTranslation } from "react-i18next";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { FC, PropsWithChildren } from "react";
import styles from "./Synapse.module.scss";
import { Button } from "../../../../components/UI";
import { useAppSelector } from "../../../../store/redux-hooks";

export const Synapse: FC<PropsWithChildren> = () => {
  const user = useAppSelector((state) => state.user.entity!);
  const { t } = useTranslation();

  return (
    <section className={cn(styles.section, styles.synapse)}>
      <div className={cn(styles.wrapper, styles.section_container)}>
        <h2 className={cn(styles.start_title)}>{t("startPage.synapse")}</h2>
        <div className={cn(styles.synapse_container)}>
          <div className={cn(styles.synapse_descr_container)}>
            <p className={cn(styles.content, styles.title_content)}>
              {t("startPage.synapseSubtitle")}
            </p>
            <span className={cn(styles.title_content_line)} />
            <div className={cn(styles.content_container)}>
              <p className={cn(styles.content)}>{t("startPage.synapseDescriptionOne")}</p>
              <p className={cn(styles.content)}>
                <b>{t("startPage.synapseDescriptionTwoBold")}</b>
                {t("startPage.synapseDescriptionTwo")}
              </p>
              <p className={cn(styles.content)}>{t("startPage.synapseDescriptionThree")}</p>
            </div>
            <div className={cn(styles.synapse_img_container)}>
              <div className={cn(styles.synapse_img)} />
              <p className={cn(styles.synapse_img_description)}>{t("startPage.synapseScheme")}</p>
            </div>
          </div>
        </div>
        <div className={cn(styles.highlighted_block)}>
          <p className={cn(styles.highlighted_text)}>{t("startPage.addingNewSynapse")}</p>
        </div>
        <p className={cn(styles.text_decision)}>
          <b>{t("startPage.decision")}</b>
        </p>
        <NavLink to={user ? "/games" : "/register"}>
          <Button btnSize="huge" appearance="initial">
            {t("header.start")}
          </Button>
        </NavLink>
      </div>
    </section>
  );
};
