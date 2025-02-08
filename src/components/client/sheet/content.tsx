"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";
import HStack from "../../server/stack/h-stack";
import SheetClose from "./close";

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

/**
 * シートのコンテンツ部分
 * シートの中身の部分はこれでラッピングする
 */
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
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </SheetClose>
        </HStack>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
});
SheetContent.displayName = "SheetContent";

export default SheetContent;
