import * as React from "react";

export interface CaptionProps
  extends React.ComponentPropsWithoutRef<"caption"> {
  children: React.ReactNode;
}

/**
 * `<caption>`要素に該当するコンポーネント
 * テーブルのスタイルがplainの時に用います
 */
const Caption = ({
  children,
  ...props
}: React.PropsWithChildren<CaptionProps>) => {
  return <caption {...props}>{children}</caption>;
};
Caption.displayName = "Caption";

export default Caption;
