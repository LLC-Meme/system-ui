"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";
import { X } from "lucide-react";
import { HStack } from "../../server/stack/stack";

const SheetRoot = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;

interface SheetOverlayProps extends Dialog.DialogOverlayProps {
  className?: string;
}

function SheetOverlay({ className, ...props }: SheetOverlayProps) {
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

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <Dialog.Portal>
      <SheetOverlay />
      <Dialog.Content
        ref={ref}
        {...props}
        className={cn(
          className,
          "fixed z-40 gap-4 bg-surface p-8 pl-10 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          "inset-y-0 right-0 h-full w-[400px] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
          "rounded-tl-2xl rounded-bl-2xl overflow-scroll",
        )}
      >
        <HStack className="justify-end mb-4">
          <SheetClose className="hover:text-foreground-muted">
            <X className="w-6 h-6" />
          </SheetClose>
        </HStack>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
});
SheetContent.displayName = "SheetContent";

const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Title
      ref={ref}
      className={cn("text-lg font-bold", className)}
      {...props}
    />
  );
});
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof Dialog.Description>,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => {
  return <Dialog.Description ref={ref} className={className} {...props} />;
});
SheetDescription.displayName = "SheetDescription";

export {
  SheetRoot,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
};
