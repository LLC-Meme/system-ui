import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";

export interface PaginationItemProps
  extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  current?: boolean;
  asChild?: boolean;
}

const PaginationItem = React.forwardRef<HTMLAnchorElement, PaginationItemProps>(
  ({ children, current, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          "center w-8 h-8 rounded-[4px] text-info",
          "hover:cursor-pointer",
          current && "bg-info text-on-status hover",
          !current && "hover:bg-info-muted",
        )}
      >
        {children}
      </Comp>
    );
  },
);
PaginationItem.displayName = "Pagination.Item";

export default PaginationItem;
