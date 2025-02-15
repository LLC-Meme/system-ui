import * as React from "react";
import { cn } from "../../../lib/cn";
import { type StackProps, gapMap } from "./type";

/**
 * 垂直方向に要素を並べるコンポーネント
 * @param {number} gap 要素間の間隔(4px)
 */
const VStack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, gap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "flex flex-col",
          !!gap && `gap-${gapMap[gap]}`,
        )}
      >
        {children}
      </div>
    );
  },
);
VStack.displayName = "VStack";

export default VStack;
