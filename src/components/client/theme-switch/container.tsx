import * as React from "react";
import { cn } from "../../../lib/cn";

export interface ThemeSwitchContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ThemeSwitchContainer = React.forwardRef<
  HTMLDivElement,
  ThemeSwitchContainerProps
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        props.className,
        "p-[2px] flex items-center justify-center rounded-full border border-info",
      )}
    >
      {children}
    </div>
  );
});
ThemeSwitchContainer.displayName = "ThemeSwitchContainer";

export default ThemeSwitchContainer;
