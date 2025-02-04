"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../../lib/cn";

const TooltipRoot = ({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props} delayDuration={0}>
        {children}
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
TooltipRoot.displayName = "TooltipRoot";

const TooltipTrigger = TooltipPrimitive.Trigger;
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, ...props }, ref) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      className={cn(
        className,
        "z-50 overflow-hidden rounded-[4px] border border-border bg-surface px-3 py-1.5",
        "animate-in fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:zoom-out-95 zoom-in-95",
      )}
      {...props}
    />
  );
});
TooltipContent.displayName = "TooltipContent";

export { TooltipRoot, TooltipTrigger, TooltipContent };
