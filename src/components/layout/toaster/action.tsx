"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "../../../lib/cn";

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, children, ...props }, ref) => (
  <ToastPrimitives.Action ref={ref} className={cn(className)} {...props}>
    {children}
  </ToastPrimitives.Action>
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export default ToastAction;
