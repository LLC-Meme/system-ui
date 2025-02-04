"use client";

import * as React from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import { cn } from "../../../lib/cn";

const DropdownSubTrigger = React.forwardRef<
  React.ComponentRef<typeof RadixDropdown.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixDropdown.SubTrigger> & {
    inset?: boolean;
    variant?: "default" | "danger" | "info";
  }
>(({ className, inset, children, variant = "info", ...props }, ref) => {
  return (
    <RadixDropdown.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default gap-2 select-none items-center px-4 py-2 outline-none focus:bg-surface-muted2 data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        variant === "info" && "text-info",
        variant === "danger" && "text-alert",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto text-info" />
    </RadixDropdown.SubTrigger>
  );
});
DropdownSubTrigger.displayName = "DropdownSubTrigger";

export default DropdownSubTrigger;
