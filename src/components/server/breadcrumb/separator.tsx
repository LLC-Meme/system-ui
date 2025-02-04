import * as React from "react";
import { ChevronRight } from "lucide-react";

function BreadcrumbSeparator() {
  return (
    <ChevronRight
      size={24}
      className="w-3 h-3 color-foreground mt-1"
      aria-label="breadcrumb-separator"
    />
  );
}
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export default BreadcrumbSeparator;
