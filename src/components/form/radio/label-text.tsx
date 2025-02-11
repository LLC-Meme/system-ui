import * as React from "react";
import { cn } from "../../../lib/cn";

export interface RadioLabelTextProps
  extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

/**
 * ラジオボタングループの説明文
 */
const RadioLabelText = React.forwardRef<HTMLSpanElement, RadioLabelTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        className={cn(props.className, "font-semibold")}
      >
        {children}
      </span>
    );
  },
);
RadioLabelText.displayName = "RadioLabelText";

export default RadioLabelText;
