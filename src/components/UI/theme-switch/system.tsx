"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
import { type ThemeSwitchButtonProps } from "./utils";
import useMounted from "../../../hooks/useMounted";

/**
 * ライトテーマへの切り替えボタンコンポーネント
 */
const ThemeSwitchSystem = React.forwardRef<
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
      aria-label="system-theme"
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
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    </button>
  );
});
ThemeSwitchSystem.displayName = "ThemeSwitchSystem";

export default ThemeSwitchSystem;
