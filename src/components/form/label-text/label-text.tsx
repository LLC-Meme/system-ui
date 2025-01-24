import React from "react";
import { cn } from "../../../lib/cn";

export interface LabelTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const LabelText = React.forwardRef<HTMLSpanElement, LabelTextProps>(({
  children,
  ...props
}, ref) => {
  return (
    <span
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "font-semibold"
      )}
    >
      {children}
    </span>
  );
});
LabelText.displayName = "LabelText";

export default LabelText;