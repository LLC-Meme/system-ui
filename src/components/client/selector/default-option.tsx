"use client";

import * as React from "react";

export interface SelectorDefaultOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

/**
 * セレクターのデフォルトの選択肢
 * 適宜、"項目を選択してください"などの文言を表示する
 */
const SelectorDefaultOption = React.forwardRef<
  HTMLOptionElement,
  SelectorDefaultOptionProps
>(({ children, ...props }, ref) => {
  return (
    <option ref={ref} disabled value="" {...props}>
      {children}
    </option>
  );
});
SelectorDefaultOption.displayName = "SelectorDefaultOption";

export default SelectorDefaultOption;
