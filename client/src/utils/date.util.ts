export const getTimeFromSecond = (second: number): string => {
  const date = new Date(second * 1000);
  return date.toLocaleTimeString("ru-RU", { minute: "2-digit", second: "2-digit" });
};

export const getLocaleDateFromString = (date: string, locale = "ru-RU") => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
