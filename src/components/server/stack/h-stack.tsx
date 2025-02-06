import * as React from "react";
import { cn } from "../../../lib/cn";
import { type StackProps, gapMap } from "./type";

const HStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, gap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(props.className, "flex", !!gap && `gap-${gapMap[gap]}`)}
      >
        {children}
      </div>
    );
  },
);
HStack.displayName = "HStack";

export default HStack;
