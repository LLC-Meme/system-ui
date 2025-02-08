import React from "react";
import { cn } from "../../../lib/cn";
import { type DividerProps } from "./types";

/**
 * 垂直方向の区切り線
 * @param {number} thickness - 線の太さ(px)
 */
const VDivider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ thickness = 1, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        {...props}
        style={{
          width: `${thickness}px`,
          ...props.style,
        }}
        className={cn(
          props.className,
          "h-full bg-border rounded-full border-none",
        )}
      />
    );
  },
);
VDivider.displayName = "VDivider";

export default VDivider;
