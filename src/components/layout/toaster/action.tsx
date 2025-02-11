"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "../../../lib/cn";

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> & {
    variant?: "default" | "danger" | "outline" | "danger-outline";
  }
>(({ className, children, variant = "default", ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      variant === "default" && "bg-info text-on-status",
      variant === "danger" && "bg-alert text-on-status",
      variant === "outline" && "border border-info text-info",
      variant === "danger-outline" && "border border-alert text-alert",
      "px-6 py-2 font-bold rounded-lg flex items-center justify-center",
      "hover disabled",
      "focus:outline-offset-2 focus:outline-info",
      className,
    )}
    {...props}
  >
    {children}
  </ToastPrimitives.Action>
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export default ToastAction;
