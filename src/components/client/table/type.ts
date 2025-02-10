import React from "react";

export type TableStyle = "basic" | "minimal" | "plain";

export const TableStyleContext = React.createContext<TableStyle>("basic");
