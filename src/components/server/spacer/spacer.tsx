import * as React from "react";
import { cn } from "../../../lib/cn";

type Unit = 1 | 2 | 3 | 4 | 5 | 6;

export interface SpacerProps extends React.ComponentPropsWithoutRef<"div"> {
  unit?: Unit;
}

const VSpacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ unit = 1, ...props }, ref) => {
    const size = unit * 4;
    return (
      <div ref={ref} {...props} className={cn(props.className, `h-${size}`)} />
    );
  },
);
VSpacer.displayName = "Spacer.V";

const HSpacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ unit = 1, ...props }, ref) => {
    const size = unit * 4;
    return (
      <div ref={ref} {...props} className={cn(props.className, `w-${size}`)} />
    );
  },
);
HSpacer.displayName = "Spacer.H";

export { VSpacer, HSpacer };
