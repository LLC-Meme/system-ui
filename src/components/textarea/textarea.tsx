import React from "react";
import { cn } from "../../utils/cn";


export interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  ...props
}, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "min-w-40 min-h-20 px-4 py-2 bg-surface rounded-[4px]",
        "outline-none resize-none",
        "border border-border",
        "focus:border-info",
        "placeholder:text-foreground-muted",
        "disabled:disabled"
      )}
    />
  );
});

export default Textarea;