export type Gap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export const gapMap = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export interface StackProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  gap?: Gap;
}
