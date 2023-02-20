import youngAge from "../../../../assets/images/StartPage/young.svg";
import middleAge from "../../../../assets/images/StartPage/middle.svg";
import oldAge from "../../../../assets/images/StartPage/old.svg";

interface BenefitsInterface {
  id: number;
  img: string;
  age: string;
  list: Array<string>;
}

export const BENEFITS: Array<BenefitsInterface> = [
  {
    id: 1,
    img: youngAge,
    age: "startPage.benefitYoung",
    list: ["startPage.benefitYoungFirst", "startPage.benefitYoungSecond"],
  },
  {
    id: 2,
    img: middleAge,
    age: "startPage.benefitMidle",
    list: [
      "startPage.benefitMidleFirst",
      "startPage.benefitMidleSecond",
      "startPage.benefitMidleThird",
    ],
  },
  {
    id: 3,
    img: oldAge,
    age: "startPage.benefitOld",
    list: ["startPage.benefitOldFirst", "startPage.benefitOldSecond"],
  },
];
