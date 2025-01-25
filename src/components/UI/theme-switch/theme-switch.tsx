import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "../../../lib/cn";

export interface ThemeSwitchContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ThemeSwitchContainerProps>(
  ({ children, ...props }, ref) => {
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
  },
);
Container.displayName = "ThemeSwitch.Container";

export interface ThemeSwitchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  current?: boolean;
}

const Light = React.forwardRef<HTMLButtonElement, ThemeSwitchButtonProps>(
  ({ current, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          props.className,
          current ? "bg-info text-on-status" : "bg-none text-info",
          "w-8 h-8 center rounded-full",
        )}
        aria-label="light-theme"
      >
        <Sun className="w-5 h-5" />
      </button>
    );
  },
);
Light.displayName = "ThemeSwitch.Light";

const Dark = React.forwardRef<HTMLButtonElement, ThemeSwitchButtonProps>(
  ({ current, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          props.className,
          current ? "bg-info text-on-status" : "bg-none text-info",
          "w-8 h-8 center rounded-full",
        )}
        aria-label="dark-theme"
      >
        <Moon size={24} className="w-5 h-5" />
      </button>
    );
  },
);
Dark.displayName = "ThemeSwitch.Dark";

const System = React.forwardRef<HTMLButtonElement, ThemeSwitchButtonProps>(
  ({ current, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          props.className,
          current ? "bg-info text-on-status" : "bg-none text-info",
          "w-8 h-8 center rounded-full",
        )}
        aria-label="system-theme"
      >
        <Monitor size={24} className="w-5 h-5" />
      </button>
    );
  },
);
System.displayName = "ThemeSwitch.System";

const ThemeSwitch = {
  Container,
  Light,
  Dark,
  System,
};
export default ThemeSwitch;
