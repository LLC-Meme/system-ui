import * as React from "react";
import { PanelLeft } from "lucide-react";

export interface HeaderContainerProps
  extends React.ComponentPropsWithoutRef<"header"> {
  children: React.ReactNode;
}

const HeaderContainer = React.forwardRef<HTMLDivElement, HeaderContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        {...props}
        className="fixed inset-0 h-16 px-6 flex items-center bg-surface border-b border-border z-20"
      >
        {children}
      </header>
    );
  },
);
HeaderContainer.displayName = "HeaderContainer";

const HeaderSidebarController = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ ...props }, ref) => {
  return (
    <button {...props} ref={ref} className="hover">
      <PanelLeft className="w-6 h-6 mr-2 text-info" />
    </button>
  );
});
HeaderSidebarController.displayName = "HeaderSidebarController";

export { HeaderContainer, HeaderSidebarController };
