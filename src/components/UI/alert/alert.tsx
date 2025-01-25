import React from "react";
import {
  Info,
  CircleCheck,
  MessageCircleWarning,
  OctagonAlert,
} from "lucide-react";
import { cn } from "../../../lib/cn";

export interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  variant: "info" | "success" | "warning" | "danger";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, variant, ...props }, ref) => {
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
          "rounded-lg py-2 px-4 flex items-center font-medium",
        )}
      >
        {variant === "info" && (
          <Info size={24} className="w-8 h-8 inline-block mr-2" />
        )}
        {variant === "success" && (
          <CircleCheck size={24} className="w-8 h-8 inline-block mr-2" />
        )}
        {variant === "warning" && (
          <MessageCircleWarning
            size={24}
            className="w-8 h-8 inline-block mr-2"
          />
        )}
        {variant === "danger" && (
          <OctagonAlert size={24} className="w-8 h-8 inline-block mr-2" />
        )}
        {children}
      </div>
    );
  },
);
Alert.displayName = "Alert";

export default Alert;
