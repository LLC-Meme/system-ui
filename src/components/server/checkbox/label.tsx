import * as React from "react";
import { cn } from "../../../lib/cn";

export interface CheckboxLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const CheckboxLabel = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "cursor-pointer flex items-center gap-2",
          "hover",
        )}
      >
        {children}
      </label>
    );
  },
);
CheckboxLabel.displayName = "CheckboxLabel";

export default CheckboxLabel;
