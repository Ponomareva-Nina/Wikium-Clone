import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";
import styles from "./StartPage.module.scss";
import { Button } from "../../components/UI";

export const StartPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="startPage" className={cn(styles.section, styles.effect)}>
        <div className={cn(styles.wrapper, styles.section_container)}>
          <div className={cn(styles.effect_description)}>
            <h2 className={cn(styles.start_title)}>{t("startPage.effect")}</h2>
            <p className={cn(styles.start_subtitle)}>{t("startPage.effectSecription")}</p>
          </div>
          <div className={cn(styles.effects_list)} />
          <NavLink to="/register">
            <Button btnSize="huge" appearance="initial">
              {t("header.start")}
            </Button>
          </NavLink>
        </div>
      </section>
      <section className={cn(styles.section, styles.benefit)}>
        <div className={cn(styles.wrapper, styles.section_container, styles.benefit_container)}>
          <h2 className={cn(styles.start_title)}>{t("startPage.benefit")}</h2>
          <div className={cn(styles.benefits_list)} />
        </div>
      </section>
      <section className={cn(styles.section, styles.synapse)}>
        <div className={cn(styles.wrapper, styles.section_container)}>
          <h2 className={cn(styles.start_title)}>{t("startPage.synapse")}</h2>
          <div className={cn(styles.synapse_container)}>
            <div className={cn(styles.synapse_descr_container)}>
              <div>
                <p className={cn(styles.content, styles.title_content)}>
                  {t("startPage.synapseSubtitle")}
                </p>
                <span className={cn(styles.title_content_line)} />
              </div>
              <p className={cn(styles.content)}>{t("startPage.synapseDescriptionOne")}</p>
              <p className={cn(styles.content)}>
                <b>{t("startPage.synapseDescriptionTwoBold")}</b>
                {t("startPage.synapseDescriptionTwo")}
              </p>
              <p className={cn(styles.content)}>{t("startPage.synapseDescriptionThree")}</p>
            </div>
            <div className={cn(styles.synapse_img_container)}>
              <div className={cn(styles.synapse_img)} />
              <p>{t("startPage.synapseScheme")}</p>
            </div>
          </div>
          <div className={cn(styles.highlighted_block)}>
            <p className={cn(styles.highlighted_text)}>{t("startPage.addingNewSynapse")}</p>
          </div>
          <p>
            <b>{t("startPage.decision")}</b>
          </p>
          <NavLink to="/register">
            <Button btnSize="huge" appearance="initial">
              {t("header.start")}
            </Button>
          </NavLink>
        </div>
      </section>
    </>
  );
};
