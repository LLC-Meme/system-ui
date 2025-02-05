import * as React from "react";
import { PanelLeft } from "lucide-react";

const HeaderSidebarController = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ ...props }, ref) => {
  return (
    <button {...props} ref={ref} className="hover">
      <PanelLeft className="w-6 h-6 mr-2 text-info" />
    </button>
  );
});
HeaderSidebarController.displayName = "HeaderSidebarController";

export default HeaderSidebarController;
