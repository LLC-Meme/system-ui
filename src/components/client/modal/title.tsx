"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../../lib/cn";
import BlockTitle from "../../server/title/block-title";

/**
 * モーダルのタイトルを表示するコンポーネント
 */
const ModalTitle = React.forwardRef<
  React.ComponentRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Title ref={ref} className={cn("font-bold", className)} {...props}>
      <BlockTitle>{props.children}</BlockTitle>
    </Dialog.Title>
  );
});
ModalTitle.displayName = "ModalTitle";

export default ModalTitle;
