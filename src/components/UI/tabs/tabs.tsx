"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";

export interface TabProps extends React.ComponentPropsWithoutRef<"div"> {
  values: string[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * タブを表示するコンポーネント
 * @param {string[]} values タブの値
 * @param {string} selectedValue 選択されているタブの値
 * @param {React.Dispatch<React.SetStateAction<string>>} setSelectedValue タブの値をセットする関数
 */
const Tabs = React.forwardRef<HTMLDivElement, TabProps>(
  ({ values, selectedValue, setSelectedValue, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          props.className,
          "flex p-1 rounded-[8px] bg-surface-muted1",
        )}
      >
        {values.map((item, index) => (
          <Item
            key={index}
            isSelected={selectedValue === item}
            onClick={() => setSelectedValue(item)}
          >
            {item}
          </Item>
        ))}
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

function Item({
  children,
  isSelected = false,
  className,
  onClick,
}: {
  children: React.ReactNode;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn(
        className,
        "min-w-32 py-2 center",
        "rounded-[4px] transition-colors cursor-pointer",
        isSelected ? "bg-surface font-medium" : "text-foreground-muted",
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Tabs;
