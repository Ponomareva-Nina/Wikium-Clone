import { FC, PropsWithChildren } from "react";
import { useCounter } from "../../hooks/useCounter";
import { StartCounter } from "../StartCounter/StartCounter";

export const StartGamePage: FC<PropsWithChildren> = ({ children }) => {
  const count = useCounter({ isReverse: true, initialValue: 3 });

  if (count > 0) {
    return <StartCounter count={count} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
