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
        "w-8 h-8 center rounded-full",
      )}
      aria-label="system-theme"
    >
      <Monitor size={24} className="w-5 h-5" />
    </button>
  );
});
ThemeSwitchSystem.displayName = "ThemeSwitchSystem";

export default ThemeSwitchSystem;
