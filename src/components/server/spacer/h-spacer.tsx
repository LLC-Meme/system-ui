import * as React from "react";
import { cn } from "../../../lib/cn";
import { type SpacerProps } from "./type";

const HSpacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ unit = 1, ...props }, ref) => {
    const size = unit * 4;
    return (
      <div ref={ref} {...props} className={cn(props.className, `w-${size}`)} />
    );
  },
);
HSpacer.displayName = "HSpacer";

export default HSpacer;
