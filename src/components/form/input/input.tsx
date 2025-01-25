import React from "react";
import { cn } from "../../../lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement,InputProps>(({
  className,
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        className,
        "min-w-40 px-4 py-2 bg-surface rounded-lg",
        "outline-none",
        "border border-border",
        "focus:border-info",
        "placeholder:text-foreground-muted",
        "disabled",
        "invalid:border-alert"
      )}
    />
  );
});
Input.displayName = "Input";

export default Input;