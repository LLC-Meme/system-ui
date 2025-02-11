"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
import { type ThemeSwitchButtonProps } from "./utils";
import useMounted from "../../../hooks/useMounted";

/**
 * テーマ切り替えボタン（ライトテーマ）
 */
const ThemeSwitchLight = React.forwardRef<
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
      aria-label="light-theme"
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
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    </button>
  );
});
ThemeSwitchLight.displayName = "ThemeSwitchLight";

export default ThemeSwitchLight;
