import * as React from "react";
import { cn } from "../../../lib/cn";

export interface FixedProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: React.ReactNode;
}

const Fixed = React.forwardRef<HTMLDivElement, FixedProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(className, "fixed")} {...props} />;
  },
);
Fixed.displayName = "Fixed";

export default Fixed;
