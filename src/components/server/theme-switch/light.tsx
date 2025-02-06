import * as React from "react";
import { Sun } from "lucide-react";
import { cn } from "../../../lib/cn";
import { type ThemeSwitchButtonProps } from "./type";

const ThemeSwitchLight = React.forwardRef<
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
      aria-label="light-theme"
    >
      <Sun className="w-4 h-4" />
    </button>
  );
});
ThemeSwitchLight.displayName = "ThemeSwitchLight";

export default ThemeSwitchLight;
