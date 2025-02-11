"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
import { type ThemeSwitchButtonProps, useMounted } from "./utils";

/**
 * ダークテーマ切り替えボタンコンポーネント
 */
const ThemeSwitchDark = React.forwardRef<
  HTMLButtonElement,
  ThemeSwitchButtonProps
>(({ current, ...props }, ref) => {
  const mounted = useMounted();

  if (!mounted) return null;
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        props.className,
        current ? "bg-info text-on-status" : "bg-none text-info",
        "w-6 h-6 center rounded-full",
      )}
      aria-label="dark-theme"
    >
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
});
ThemeSwitchDark.displayName = "ThemeSwitchDark";

export default ThemeSwitchDark;
