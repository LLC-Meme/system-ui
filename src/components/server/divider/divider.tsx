import React from "react";
import { cn } from "../../../lib/cn";

type Thickness = 1 | 2 | 3;
export interface DividerProps extends React.ComponentPropsWithoutRef<"hr"> {
  thickness?: Thickness;
}

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

export { VDivider, HDivider };
