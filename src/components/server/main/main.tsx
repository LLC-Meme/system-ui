import * as React from "react";
import { cn } from "../../../lib/cn";

export interface MainProps extends React.ComponentPropsWithoutRef<"main"> {
  children: React.ReactNode;
  sidebarOpen: boolean;
}

/**
 * `<main>`コンポーネント
 * ダッシュボード内のコンテンツをラップする
 */
const Main = React.forwardRef<HTMLDivElement, MainProps>(
  ({ children, sidebarOpen, ...props }, ref) => {
    return (
      <main
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "mt-16 pt-6 px-8 pb-12 flex flex-col gap-8",
          "transition-[margin-left]",
          sidebarOpen ? "ml-64" : "ml-0",
        )}
      >
        {children}
      </main>
    );
  },
);
Main.displayName = "Main";

export default Main;
