"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../../lib/cn";

export interface CollapsibleItemProps
  extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  current?: boolean;
  asChild?: boolean;
}

const CollapsibleItem = React.forwardRef<
  HTMLAnchorElement,
  CollapsibleItemProps
>(({ children, current, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "py-2 pl-8 pr-4 flex gap-2 rounded-[4px]",
        !current && "hover:bg-surface-muted2",
        current && "bg-surface-muted1 font-medium",
      )}
    >
      {children}
    </Comp>
  );
});
CollapsibleItem.displayName = "CollapsibleItem";

export default CollapsibleItem;
