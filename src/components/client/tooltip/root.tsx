"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

/**
 * Tooltipの全てのコンポーネントをラッピングするコンポーネント
 * ビューには影響を与えない
 */
const TooltipRoot = ({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props} delayDuration={0}>
        {children}
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
TooltipRoot.displayName = "TooltipRoot";

export default TooltipRoot;
