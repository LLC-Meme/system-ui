"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";

/**
 * シートのタイトルを表示するコンポーネント
 */
const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Title
      ref={ref}
      className={cn("text-lg font-bold", className)}
      {...props}
    >
      {props.children}
    </Dialog.Title>
  );
});
SheetTitle.displayName = "SheetTitle";

export default SheetTitle;
