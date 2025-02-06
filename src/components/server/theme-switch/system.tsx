import * as React from "react";
import { Monitor } from "lucide-react";
import { cn } from "../../../lib/cn";
import { type ThemeSwitchButtonProps } from "./type";

const ThemeSwitchSystem = React.forwardRef<
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
        "w-6 h-6 center rounded-full",
      )}
      aria-label="system-theme"
    >
      <Monitor size={24} className="w-4 h-4" />
    </button>
  );
});
ThemeSwitchSystem.displayName = "ThemeSwitchSystem";

export default ThemeSwitchSystem;
