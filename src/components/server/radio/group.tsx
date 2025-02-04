import * as React from "react";
import { cn } from "../../../lib/cn";

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(props.className, "flex flex-col gap-2")}
      >
        {children}
      </div>
    );
  },
);
RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
