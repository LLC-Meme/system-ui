"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";
import Stack from "../../util/stack/stack";
import Cross from "../../symbol/cross/cross";

const Root = Dialog.Root;
const Trigger = Dialog.Trigger;
const Close = Dialog.Close;

function Overlay
({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn(
        className,
        "fixed inset-0 z-30 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      )}
      {...props}
    />
  );
};

const Content = React.forwardRef<
  React.ComponentRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <Dialog.Portal>
    <Overlay />
    <Dialog.Content
      ref={ref}
      className={cn(
        className,
        "fixed left-[50%] top-[50%] z-40 grid max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background p-6",
        "duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "rounded-2xl"
      )}
      {...props}
    >
      <Stack.H className="justify-between mb-4">
        <div />
        <Close>
          <Cross className="h-4 w-4" />
        </Close>
      </Stack.H>
      {children}
    </Dialog.Content>
  </Dialog.Portal>
));

const Modal = {
  Root,
  Trigger,
  Content,
  Close
};
export default Modal;