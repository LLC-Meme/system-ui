import * as React from "react";

export interface SidebarGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

/**
 * サイドバーのアイテムをグループ化するコンポーネント
 */
const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
SidebarGroup.displayName = "SidebarGroup";

export default SidebarGroup;
