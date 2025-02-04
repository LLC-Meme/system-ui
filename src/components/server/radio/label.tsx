import * as React from "react";
import { cn } from "../../../lib/cn";

export interface RadioLabelProps
  extends React.ComponentPropsWithoutRef<"label"> {
  children: React.ReactNode;
}

const RadioLabel = React.forwardRef<HTMLLabelElement, RadioLabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "flex items-center space-x-4 cursor-pointer hover",
        )}
      >
        {children}
      </label>
    );
  },
);
RadioLabel.displayName = "RadioLabel";

export default RadioLabel;
