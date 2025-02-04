import * as React from "react";

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

export default HeaderContainer;
