import * as React from "react";

export interface DefaultOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

/**
 * セレクターのデフォルトの選択肢
 * 適宜、"項目を選択してください"などの文言を表示する
 */
const DefaultOption = React.forwardRef<HTMLOptionElement, DefaultOptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <option ref={ref} disabled value="" {...props}>
        {children}
      </option>
    );
  },
);
DefaultOption.displayName = "DefaultOption";

export default DefaultOption;
