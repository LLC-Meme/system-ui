import * as React from "react";
import { cn } from "../../../lib/cn";

export interface CenterProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  direction?: "row" | "column";
  children: React.ReactNode;
}

const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ className, direction = "column", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          className,
          "flex justify-center items-center",
          direction === "row" ? "flex-row" : "flex-col",
        )}
        {...props}
      />
    );
  },
);
Center.displayName = "Center";

export default Center;
