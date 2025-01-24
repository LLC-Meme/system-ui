"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";
import { X } from "lucide-react";
import Stack from "../../util/stack/stack";


const Root = Dialog.Root;
const Trigger = Dialog.Trigger;
const Close = Dialog.Close;

interface SheetOverlayProps extends Dialog.DialogOverlayProps {
  className?: string;
}

function Overlay({
  className,
  ...props
}: SheetOverlayProps) {
  return (
    <Dialog.DialogOverlay
      {...props}
      className={cn(
        className,
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "fixed inset-0 z-40 bg-black/80",
      )}
    />
  );
}


const Content = React.forwardRef<
  React.ComponentRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Content
        ref={ref}
        {...props}
        className={cn(
          className,
          "fixed z-40 gap-4 bg-surface p-8 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          "inset-y-0 right-0 h-full w-[400px] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
          "rounded-tl-2xl rounded-bl-2xl"
        )}
      >
        <Stack.H className="justify-between mb-4">
          <div />
          <Close className="hover:text-foreground-muted">
            <X className="w-4 h-4" />
          </Close>
        </Stack.H>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
});
Content.displayName = "Sheet.Content";


const Sheet = {
  Root,
  Trigger,
  Content,
  Close
};
export default Sheet;
