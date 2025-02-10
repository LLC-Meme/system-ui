"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";

export interface CaptionProps
  extends React.ComponentPropsWithoutRef<"caption"> {
  children: React.ReactNode;
  className?: string;
}

/**
 * `<caption>`要素に該当するコンポーネント
 * テーブルのスタイルがplainの時に用います
 */
const Caption = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<CaptionProps>) => {
  return (
    <caption
      {...props}
      className={cn(
        className,
        "caption-top bg-surface-muted2 font-bold text-foreground-muted py-2 rounded-tl-2xl rounded-tr-2xl",
      )}
    >
      {children}
    </caption>
  );
};
Caption.displayName = "Caption";

export default Caption;
