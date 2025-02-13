import * as React from "react";
import { cn } from "../../../lib/cn";

export interface StickyProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: React.ReactNode;
}

const Sticky = React.forwardRef<HTMLDivElement, StickyProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn(className, "sticky")} {...props} />;
  },
);
Sticky.displayName = "Sticky";

export default Sticky;
