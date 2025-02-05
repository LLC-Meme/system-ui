export interface PaginationButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"a">, "as"> {
  as?: React.ElementType;
  disabled?: boolean;
}
