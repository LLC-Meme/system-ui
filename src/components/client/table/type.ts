import React from "react";

export type TableStyle = "basic" | "plain";

export const TableStyleContext = React.createContext<TableStyle>("basic");
