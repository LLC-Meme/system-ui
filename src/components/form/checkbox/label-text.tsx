import * as React from "react";
import { cn } from "../../../lib/cn";

export interface CheckboxLabelTextProps
  extends React.ComponentPropsWithoutRef<"span"> {
  children: React.ReactNode;
}

/**
 * なんのチェックボックスかを示すテキスト
 */
const CheckboxLabelText = React.forwardRef<
  HTMLSpanElement,
  CheckboxLabelTextProps
>(({ children, ...props }, ref) => {
  return (
    <span ref={ref} {...props} className={cn(props.className, "font-semibold")}>
      {children}
    </span>
  );
});
CheckboxLabelText.displayName = "CheckboxLabelText";

export default CheckboxLabelText;
