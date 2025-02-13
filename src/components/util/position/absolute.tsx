import * as React from "react";
import { cn } from "../../../lib/cn";

export interface AbsoluteProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: React.ReactNode;
}

const Absolute = React.forwardRef<HTMLDivElement, AbsoluteProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(className, "absolute")} {...props} />;
  },
);
Absolute.displayName = "Absolute";

export default Absolute;
