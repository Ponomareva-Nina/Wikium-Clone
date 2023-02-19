import youngAge from "../../../../assets/images/StartPage/young.svg";
import middleAge from "../../../../assets/images/StartPage/middle.svg";
import oldAge from "../../../../assets/images/StartPage/old.svg";

interface BenefitsInterface {
  img: string;
  age: string;
  list: Array<string>;
}

export const BENEFITS: Array<BenefitsInterface> = [
  {
    img: youngAge,
    age: "Младший возраст",
    list: ["Улучшить обучаемость в учебных заведениях", "Профилактика синдрома дефицита внимания"],
  },
  {
    img: middleAge,
    age: "Средний возраст",
    list: [
      "Повысить личную продуктивность, эффективность",
      "Делать меньше ошибок и недочетов на работе",
      "Держать мозг в тонусе в течение дня",
    ],
  },
  {
    img: oldAge,
    age: "Пожилой возраст",
    list: [
      "Дольше сохранять остроту и ясность ума",
      "Профилактика возрастных заболеваний, вызванных снижением интеллектуальной нагрузки",
    ],
  },
];
