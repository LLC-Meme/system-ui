"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";
import Stack from "../../server/stack/stack";
import { X } from "lucide-react";

const Root = Dialog.Root;
const Trigger = Dialog.Trigger;
const Close = Dialog.Close;

function Overlay({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      className={cn(
        className,
        "fixed inset-0 z-30 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      )}
      aria-label="modal-overlay"
      {...props}
    />
  );
}

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
        "fixed left-[50%] top-[50%] z-40 grid max-w-lg translate-x-[-50%] translate-y-[-50%] bg-surface pt-4 pb-6 pr-6 pl-6",
        "duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "rounded-2xl",
      )}
      {...props}
    >
      <Stack.H className="justify-end mb-4">
        <Close aria-label="close-modal">
          <X className="w-6 h-6" />
        </Close>
      </Stack.H>
      {children}
    </Dialog.Content>
  </Dialog.Portal>
));
Content.displayName = "Modal.Content";

const Title = React.forwardRef<
  React.ComponentRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Title ref={ref} className={cn("font-bold", className)} {...props} />
  );
});
Title.displayName = "Modal.Title";

const Description = React.forwardRef<
  React.ComponentRef<typeof Dialog.Description>,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => {
  return <Dialog.Description ref={ref} className={className} {...props} />;
});
Description.displayName = "Modal.Description";

const Modal = {
  Root,
  Trigger,
  Content,
  Close,
  Title,
  Description,
};
export default Modal;
