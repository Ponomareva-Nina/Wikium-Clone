export const getTimeFromSecond = (second: number): string => {
  const date = new Date(second * 1000);
  return date.toLocaleTimeString("ru-RU", { minute: "2-digit", second: "2-digit" });
};
