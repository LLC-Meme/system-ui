"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";

const ModalTitle = React.forwardRef<
  React.ComponentRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Title ref={ref} className={cn("font-bold", className)} {...props} />
  );
});
ModalTitle.displayName = "ModalTitle";

export default ModalTitle;
