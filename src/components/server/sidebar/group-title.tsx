import * as React from "react";

export interface SidebarGroupTitleProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const SidebarGroupTitle = React.forwardRef<
  HTMLDivElement,
  SidebarGroupTitleProps
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="font-semibold text-foreground-muted mb-2"
    >
      {children}
    </div>
  );
});
SidebarGroupTitle.displayName = "SidebarGroupTitle";

export default SidebarGroupTitle;
