import * as React from "react";

type Unit = 1 | 2 | 3 | 4 | 5 | 6;

export interface SpacerProps extends React.ComponentPropsWithoutRef<"div"> {
  unit?: Unit;
}
