import cn from "classnames";
import { Profile } from "../../components/Profile/Profile";
import styles from "./AccountSettings.module.scss";

export const AccountSettings = () => {
  return (
    <div className={cn("wrapper", styles.containers)}>
      <Profile />
    </div>
  );
};
