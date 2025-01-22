import React from "react";
import { cn } from "../../../utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "min-w-40 px-4 py-2 bg-surface rounded-[4px]",
        "outline-none",
        "border border-border",
        "focus:border-info",
        "placeholder:text-foreground-muted",
        "disabled",
      )}
    />
  );
});
Input.displayName = "Input";

export default Input;