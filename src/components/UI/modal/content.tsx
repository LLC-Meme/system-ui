"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";
import ModalClose from "./close";

function ModalOverlay({
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

/**
 * モーダルのコンテンツ部分
 * モーダルの中身の部分はこれでラッピングする
 */
const ModalContent = React.forwardRef<
  React.ComponentRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <Dialog.Portal>
    <ModalOverlay />
    <Dialog.Content
      ref={ref}
      className={cn(
        className,
        "fixed left-[50%] top-[50%] z-40 grid max-w-lg translate-x-[-50%] translate-y-[-50%] bg-surface p-8",
        "duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "rounded-2xl",
      )}
      {...props}
    >
      <ModalClose aria-label="close-modal" className="absolute top-8 right-8">
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
      </ModalClose>
      <Dialog.Description hidden />
      <Dialog.Title hidden />
      {children}
    </Dialog.Content>
  </Dialog.Portal>
));
ModalContent.displayName = "ModalContent";

export default ModalContent;
