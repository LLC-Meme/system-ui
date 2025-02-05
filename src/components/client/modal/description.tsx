"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const ModalDescription = React.forwardRef<
  React.ComponentRef<typeof Dialog.Description>,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => {
  return <Dialog.Description ref={ref} className={className} {...props} />;
});
ModalDescription.displayName = "ModalDescription";

export default ModalDescription;
