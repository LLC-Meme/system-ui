import * as React from "react";
import { cn } from "../../../lib/cn";

export interface CheckboxContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

/**
 * Checkboxの各コンポーネント全てをラッピングするコンポーネント
 */
const CheckboxContainer = React.forwardRef<
  HTMLDivElement,
  CheckboxContainerProps
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(props.className, "flex flex-col gap-2")}
    >
      {children}
    </div>
  );
});
CheckboxContainer.displayName = "CheckboxContainer";

export default CheckboxContainer;
