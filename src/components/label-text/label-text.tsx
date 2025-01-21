import React from "react";
import { cn } from "../../utils/cn";

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
        "font-medium"
      )}
    >
      {children}
    </span>
  );
});

export default LabelText;