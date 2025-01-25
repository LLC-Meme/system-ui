"use client";

import * as React from "react";
import { PanelLeft } from "lucide-react";

export interface HeaderContainerProps
  extends React.ComponentPropsWithoutRef<"header"> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, HeaderContainerProps>(
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
Container.displayName = "Header.Container";

export interface SidebarControllerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  onClick: () => void;
}

const SidebarController = React.forwardRef<
  HTMLButtonElement,
  SidebarControllerProps
>(({ onClick, ...props }, ref) => {
  return (
    <button {...props} ref={ref} onClick={onClick} className="hover">
      <PanelLeft className="w-6 h-6 mr-2 text-info" />
    </button>
  );
});
SidebarController.displayName = "Header.SidebarController";

const Header = {
  Container,
  SidebarController,
};

export default Header;
