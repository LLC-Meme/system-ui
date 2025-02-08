import * as React from "react";
import { cn } from "../../../lib/cn";

export interface LabelTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

/**
 * 各フォームアイテムの説明文のコンポーネント
 */
const LabelText = React.forwardRef<HTMLSpanElement, LabelTextProps>(
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
LabelText.displayName = "LabelText";

export default LabelText;
