import * as React from "react";
import { cn } from "../../../lib/cn";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

/**
 * `<label>`コンポーネント
 * フォーム内の各アイテムをこれでラップする
 */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        {...props}
        className={cn(props.className, "flex flex-col gap-2")}
      >
        {children}
      </label>
    );
  },
);
Label.displayName = "Label";

export default Label;
