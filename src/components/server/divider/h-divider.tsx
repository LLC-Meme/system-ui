import React from "react";
import { cn } from "../../../lib/cn";
import { type DividerProps } from "./types";

const HDivider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ thickness = 1, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        {...props}
        style={{
          height: `${thickness}px`,
          ...props.style,
        }}
        className={cn(
          props.className,
          "w-full bg-border rounded-full border-none",
        )}
      />
    );
  },
);
HDivider.displayName = "HDivider";

export default HDivider;
