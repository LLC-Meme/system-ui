import React from "react";

export type TableStyle = "basic" | "minimal";

export const TableStyleContext = React.createContext<TableStyle>("basic");
