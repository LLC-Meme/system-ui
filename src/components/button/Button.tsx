import React from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "default" | "danger" | "outline";

function Button({
  children,
  variant = "default",
  className
}: {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn(
      className,
      variant === "default" && "bg-info text-on-status",
      variant === "danger" && "bg-alert text-on-status",
      variant === "outline" && "border border-info text-info",
      "px-6 py-2 font-bold rounded-lg flex items-center justify-center"
    )}>
      {children}
    </span>
  );
}

export default Button;