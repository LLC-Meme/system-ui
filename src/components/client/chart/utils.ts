import { type Color } from "../../../types/color";

export const colorMap = {
  red: "alert",
  orange: "warning",
  yellow: "yellow",
  green: "success",
  mint: "mint",
  teal: "teal",
  cyan: "cyan",
  blue: "info",
  indigo: "indigo",
  purple: "purple",
  pink: "pink",
  brown: "brown",
};

export const colorOrders: (keyof typeof colorMap)[] = [
  "blue",
  "purple",
  "green",
  "teal",
  "indigo",
  "orange",
  "brown",
  "yellow",
  "cyan",
  "mint",
  "pink",
  "red",
] satisfies Color[];

export const formatName = (name: string | number | Date): string => {
  if (typeof name === "string") return name;
  if (typeof name === "number") return name.toString();
  const year = name.getFullYear();
  const month = name.getMonth() + 1;
  const day = name.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};

export const formatTick = (value: string | number | Date): string => {
  let date: Date | null = null;
  if (value instanceof Date) {
    date = value;
  } else if (typeof value === "string" && !isNaN(Date.parse(value))) {
    date = new Date(value);
  }
  if (date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}`;
  }
  return value.toString();
};
