import * as React from "react";
import { cn } from "../../../lib/cn";

export interface SidebarContainerProps
  extends React.ComponentPropsWithoutRef<"aside"> {
  children: React.ReactNode;
  isOpen: boolean;
}

/**
 * サイドバーのコンテナ
 * サイドバー内の全ての要素をラップする
 */
const SidebarContainer = React.forwardRef<HTMLElement, SidebarContainerProps>(
  ({ children, isOpen, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "fixed top-16 left-0 bottom-0 overflow-y-scroll z-20",
          "w-64 p-6 flex flex-col gap-8 bg-surface border-r border-border",
          "transform transition-transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {children}
      </aside>
    );
  },
);
SidebarContainer.displayName = "SidebarContainer";

export default SidebarContainer;
