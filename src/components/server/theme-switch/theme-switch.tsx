import * as React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "../../../lib/cn";

export interface ThemeSwitchContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ThemeContainer = React.forwardRef<
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
ThemeContainer.displayName = "ThemeSwitch.Container";

export interface ThemeSwitchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  current?: boolean;
}

const ThemeLight = React.forwardRef<HTMLButtonElement, ThemeSwitchButtonProps>(
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
ThemeLight.displayName = "ThemeSwitch.Light";

const ThemeDark = React.forwardRef<HTMLButtonElement, ThemeSwitchButtonProps>(
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
ThemeDark.displayName = "ThemeSwitch.Dark";

const ThemeSystem = React.forwardRef<HTMLButtonElement, ThemeSwitchButtonProps>(
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
ThemeSystem.displayName = "ThemeSwitch.System";

export { ThemeContainer, ThemeLight, ThemeDark, ThemeSystem };
