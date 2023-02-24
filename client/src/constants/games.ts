import colorMatchImg from "../assets/images/GamesPage/color-match.svg";
import rememberImg from "../assets/images/GamesPage/remember-order.svg";
import moreAndLessImg from "../assets/images/GamesPage/more-and-less.svg";

export const enum GamesId {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
}

export const gameImages = [
  {
    id: GamesId.FIRST,
    lineImage: colorMatchImg,
  },
  {
    id: GamesId.SECOND,
    lineImage: rememberImg,
  },
  {
    id: GamesId.THIRD,
    lineImage: moreAndLessImg,
  },
];
