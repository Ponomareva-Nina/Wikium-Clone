import { Link } from "react-router-dom";
import logoImg from "./logo_ru.svg";

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logoImg} alt="Викиум тренажёры для мозга" />
      </Link>
    </div>
  );
};
