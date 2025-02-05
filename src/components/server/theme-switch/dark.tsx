import * as React from "react";
import { Moon } from "lucide-react";
import { cn } from "../../../lib/cn";
import { type ThemeSwitchButtonProps } from "./type";

const ThemeSwitchDark = React.forwardRef<
  HTMLButtonElement,
  ThemeSwitchButtonProps
>(({ current, ...props }, ref) => {
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
});
ThemeSwitchDark.displayName = "ThemeSwitchDark";

export default ThemeSwitchDark;
