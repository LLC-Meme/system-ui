"use client";

import * as React from "react";
import ToastProvider from "./provider";
import Toast from "./toast";
import ToastClose from "./close";
import ToastDescription from "./description";
import ToastTitle from "./title";
import ToastViewport from "./viewport";
import useToast from "../../../hooks/useToast";

const Toaster = () => {
  const { toasts } = useToast();
  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
};
Toaster.displayName = "Toaster";

export default Toaster;
