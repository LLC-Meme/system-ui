import React from "react";
import { cn } from "../../utils/cn";
import Arrow from "../arrow/arrow";

function Separator() {
  return (
    <Arrow.Right className="fill-foreground" />
  );
}
Separator.displayName = "Breadcrumb.Separator";

function Item({
  current = false,
  children
}: {
  current?: boolean;
  children: React.ReactNode;
}) {
  return (
    <nav
      className={cn(
        "text-info text-sm",
        !current && "hover:underline",
        current && "font-semibold",
        "hover:cursor-pointer"
      )}
    >
      {children}
    </nav>
  );
}
Item.displayName = "Breadcrumb.Item";

function Container({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="flex items-center gap-2">
      {children}
    </nav>
  );
}
Container.displayName = "Breadcrumb.Container";

const Breadcrumb = {
  Separator,
  Item,
  Container
};

export default Breadcrumb;