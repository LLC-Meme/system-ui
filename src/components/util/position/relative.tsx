import * as React from "react";
import { cn } from "../../../lib/cn";

export interface RelativeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: React.ReactNode;
}

const Relative = React.forwardRef<HTMLDivElement, RelativeProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(className, "relative")} {...props} />;
  },
);
Relative.displayName = "Relative";

export default Relative;
