"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

/**
 * Tooltipのトリガーとなるコンポーネント
 * これをホバーすることでTooltipが表示される
 */
const TooltipTrigger = TooltipPrimitive.Trigger;
TooltipTrigger.displayName = "TooltipTrigger";

export default TooltipTrigger;
