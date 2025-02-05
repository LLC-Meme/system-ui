import * as React from "react";
import { cn } from "../../../lib/cn";
import { type StackProps, gapMap } from "./type";

const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, gap = "none", ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(props.className, "flex flex-col", `gap-${gapMap[gap]}`)}
      >
        {children}
      </div>
    );
  },
);
VStack.displayName = "VStack";

export default VStack;
