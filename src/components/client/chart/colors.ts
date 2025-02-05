import { type Color } from "../../../types";

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
  "yellow",
  "green",
  "orange",
  "indigo",
  "pink",
  "cyan",
  "mint",
  "teal",
  "brown",
  "red",
] satisfies Color[];
