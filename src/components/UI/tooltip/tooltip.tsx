"use client";

import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../../lib/cn";



const Container = ({
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
}

const Trigger = TooltipPrimitive.Trigger;

const Content = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, ...props }, ref) => {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      className={cn(
        className,
        "z-50 overflow-hidden rounded-[4px] border border-border overlay px-3 py-1.5",
        "animate-in fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:zoom-out-95 zoom-in-95"
      )}
      {...props}
    />
  );
});


const Tooltip = {
  Container,
  Trigger,
  Content
};
export default Tooltip;