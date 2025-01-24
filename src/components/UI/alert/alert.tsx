import React from "react";
import { cn } from "../../../lib/cn";

export interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  variant: "info" | "success" | "warning" | "danger";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({
  children,
  variant,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        variant === "info" && "bg-info-muted text-info",
        variant === "success" && "bg-success-muted text-success",
        variant === "warning" && "bg-warning-muted text-warning",
        variant === "danger" && "bg-alert-muted text-alert",
        "rounded-lg py-2 px-4 w-80"
      )}
    >
      {children}
    </div>
  );
});
Alert.displayName = "Alert";

export default Alert;