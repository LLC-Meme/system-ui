import * as React from "react";

const BreadcrumbSeparator = () => {
  return (
    <svg
      className="w-3 h-3 color-foreground mt-1"
      aria-label="breadcrumb-separator"
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export default BreadcrumbSeparator;
