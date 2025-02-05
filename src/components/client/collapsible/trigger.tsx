"use client";

import * as React from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { cn } from "../../../lib/cn";
import { ChevronRight } from "lucide-react";
import { CollapsibleContext } from "./root";

export interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(({ children, ...props }, ref) => {
  const { isOpen } = React.useContext(CollapsibleContext);
  return (
    <RadixCollapsible.Trigger
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "w-full py-2 px-4 flex items-center justify-between rounded-[4px] cursor-pointer hover:bg-surface-muted2",
      )}
    >
      <div className="flex gap-2">{children}</div>
      <ChevronRight
        strokeWidth={3}
        className={cn(
          "w-5 h-5 text-info",
          "transition-transform",
          isOpen && "transform rotate-90",
        )}
      />
    </RadixCollapsible.Trigger>
  );
});
CollapsibleTrigger.displayName = "CollapsibleTrigger";

export default CollapsibleTrigger;
