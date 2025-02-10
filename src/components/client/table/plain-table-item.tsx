import * as React from "react";

export interface PlainTableItemProps {
  label: string;
  children: React.ReactNode;
}

/**
 * tableStyleがplainの場合のテーブルアイテム
 * `<td>`の子要素として使用する
 */
const PlainTableItem = ({ label, children }: PlainTableItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-foreground-muted">{label}</span>
      <span className="font-medium">{children}</span>
    </div>
  );
};
PlainTableItem.displayName = "PlainTableItem";

export default PlainTableItem;
