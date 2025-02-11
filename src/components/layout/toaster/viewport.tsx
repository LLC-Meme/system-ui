"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "../../../lib/cn";

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-0 right-0 z-50 flex max-h-screen w-fit flex-col-reverse p-4",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

export default ToastViewport;
